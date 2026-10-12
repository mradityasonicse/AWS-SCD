import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SPEAKERS, EVENT_DETAILS } from '../data/eventData';

interface CommandPreset {
  id: string;
  label: string;
  cmd: string;
  output: string;
}

const COMMAND_PRESETS: CommandPreset[] = [
  {
    id: 'register',
    label: 'Claim Pass',
    cmd: 'aws scd register --summit "central-india-2026" --attendee "student-builder"',
    output: `[✓] AUTH: Verified student credentials via AWS SBG RISU
[✓] REGION: ap-south-1 (RISU Knowledge City Campus, Bhilai)
[✓] PASS GRANTED:
  ┌────────────────────────────────────────────────────────┐
  │  AWS STUDENT COMMUNITY DAY 2026 · CENTRAL INDIA PASS   │
  │  ID: SCD26-BUILDER-RISU-0550                           │
  │  TIER: Student Cloud Architect                         │
  │  DATE: October 26, 2026 · 08:00 AM IST                │
  │  ACCESS: Keynotes, Hands-on Labs, Kahoot Arena, Swags  │
  └────────────────────────────────────────────────────────┘
Status: 200 OK · Welcome kit reserved at campus desk.`,
  },
  {
    id: 'bedrock',
    label: 'Bedrock GenAI',
    cmd: 'aws bedrock-runtime invoke-model --model-id anthropic.claude-3-5-sonnet --prompt "Summarize SCD 2026"',
    output: `[HTTP 200 OK] Amazon Bedrock streaming response:
------------------------------------------------------------
"AWS Student Community Day 2026 (RISU Edition) is Central India's
flagship cloud summit uniting 550+ developers. Keynotes from AWS
DevRel Head Praful Bagai & Amazon Leadership, 12+ architecture
sessions, and live auditorium hackathons."
------------------------------------------------------------
Latency: 48ms · Bedrock Tokens: 62 in / 49 out · Guardrails: PASS`,
  },
  {
    id: 'speakers',
    label: 'List Speakers',
    cmd: 'aws scd list-speakers --category all --format json',
    output: JSON.stringify(
      SPEAKERS.slice(0, 4).map((s) => ({
        id: s.id,
        name: s.name,
        company: s.company,
        role: s.current_designation,
        track: s.category === 'keynote' ? 'Keynote Stage' : 'Tech Session',
      })),
      null,
      2
    ) + '\n... [ +3 more technical sessions announced ]',
  },
  {
    id: 'health',
    label: 'Summit Specs',
    cmd: 'curl -s https://scd.risu.ac.in/api/v1/telemetry | jq',
    output: `{
  "summit": "${EVENT_DETAILS.name}",
  "campus": "${EVENT_DETAILS.venueName}",
  "expected_builders": 550,
  "sessions_count": 12,
  "organizer": "${EVENT_DETAILS.host}",
  "cloud_tracks": [
    "Generative AI & Bedrock",
    "Hyperscale Serverless",
    "Zero-Trust Cloud Security",
    "DevRel & Cloud Careers"
  ],
  "status": "ALL_SYSTEMS_GO"
}`,
  },
];

export const CloudTerminal: React.FC = () => {
  const [activePreset, setActivePreset] = useState<CommandPreset>(COMMAND_PRESETS[0]);
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: COMMAND_PRESETS[0].cmd, output: COMMAND_PRESETS[0].output },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleRunPreset = (preset: CommandPreset) => {
    setActivePreset(preset);
    setHistory((prev) => [
      ...prev,
      { cmd: preset.cmd, output: preset.output },
    ]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputVal.trim().toLowerCase();
    if (!clean) return;

    let reply = '';
    if (clean === 'help') {
      reply = `Available summit CLI commands:
  • register   - Generate your official attendee pass
  • bedrock    - Test Amazon Bedrock GenAI agent
  • speakers   - List keynote and technical session leaders
  • tracks     - View the 4 engineering tracks
  • date       - Show summit schedule and timing
  • venue      - Display RISU campus directions
  • clear      - Clear terminal window`;
    } else if (clean === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (clean === 'register') {
      reply = COMMAND_PRESETS[0].output;
    } else if (clean === 'bedrock') {
      reply = COMMAND_PRESETS[1].output;
    } else if (clean === 'speakers') {
      reply = COMMAND_PRESETS[2].output;
    } else if (clean === 'tracks') {
      reply = `[01] Generative AI & Amazon Bedrock\n[02] Cloud Native & Hyperscale Serverless\n[03] DevSecOps & Zero-Trust Cloud Security\n[04] Career Pathways & Cloud Mastery`;
    } else if (clean === 'date') {
      reply = `Date: October 26, 2026 · 08:00 AM - 05:30 PM IST\nVenue: Rungta International Skills University (RISU), Bhilai`;
    } else if (clean === 'venue') {
      reply = `Address: Rungta Knowledge City, Kohka-Kurud Road, Bhilai, Chhattisgarh 490024\nMap: https://maps.google.com/?q=RISU+Bhilai`;
    } else {
      reply = `zsh: command not found: ${inputVal}. Type 'help' for available summit commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: reply }]);
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const copyLatest = () => {
    const latest = history[history.length - 1] || activePreset;
    navigator.clipboard.writeText(`${latest.cmd}\n\n${latest.output}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#232F3E] bg-[#0E131B] shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left font-mono text-xs relative group">
      {/* Terminal Title Bar */}
      <div className="bg-[#131921] px-4 py-3 border-b border-[#232F3E] flex items-center justify-between gap-3 select-none">
        <div className="flex items-center gap-2">
          {/* macOS window control buttons */}
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
          <div className="h-4 w-px bg-[#232F3E] mx-1.5" />
          <span className="text-slate-300 font-bold text-[11px] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>aws-cloudshell · risu@aws-scd-2026:~ (ap-south-1)</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            CLI v2.17.8
          </span>

          <button
            type="button"
            onClick={copyLatest}
            className="p-1.5 rounded-lg bg-[#161E2D] hover:bg-[#232F3E] text-slate-400 hover:text-white border border-[#232F3E] transition-all cursor-pointer"
            title="Copy output"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Interactive Quick-Command Chips */}
      <div className="bg-[#111722] px-4 py-2 border-b border-[#232F3E] flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 shrink-0">
          Run Preset:
        </span>
        {COMMAND_PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleRunPreset(p)}
            className={cn(
              "px-2.5 py-1 rounded-lg text-[11px] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 border shrink-0",
              activePreset.id === p.id
                ? "bg-[#FF9900]/15 text-[#FF9900] border-[#FF9900]/40 font-bold shadow-xs"
                : "bg-[#161E2D] text-slate-400 border-[#232F3E] hover:text-white hover:border-slate-600"
            )}
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Log Console */}
      <div className="p-4 sm:p-5 max-h-[320px] overflow-y-auto space-y-4 select-text no-scrollbar leading-relaxed">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            {/* Command Line */}
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-[#FF9900] font-black">risu@aws-scd:~$</span>
              <span className="text-white font-semibold">{item.cmd}</span>
            </div>
            {/* Command Output */}
            <pre className="text-slate-300 whitespace-pre-wrap font-mono text-[11px] pl-4 border-l-2 border-[#FF9900]/40 bg-[#0B0F17]/60 p-2.5 rounded-lg overflow-x-auto">
              {item.output}
            </pre>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Prompt Input */}
      <form
        onSubmit={handleCustomSubmit}
        className="bg-[#111722] px-4 py-2.5 border-t border-[#232F3E] flex items-center gap-2"
      >
        <span className="text-[#FF9900] font-black shrink-0">risu@aws-scd:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'register', 'bedrock', 'speakers', or 'clear'..."
          className="bg-transparent flex-1 text-white placeholder-slate-500 focus:outline-none font-mono text-xs"
        />
        <button
          type="submit"
          className="px-2.5 py-1 bg-[#161E2D] hover:bg-[#FF9900] text-slate-300 hover:text-[#0B0F17] hover:font-bold rounded border border-[#232F3E] transition-all cursor-pointer text-[10px]"
        >
          EXEC
        </button>
      </form>
    </div>
  );
};

export default CloudTerminal;
