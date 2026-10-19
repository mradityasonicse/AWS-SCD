import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Lock, EyeOff, AlertTriangle, Terminal } from 'lucide-react';

const COPYRIGHT_NOTICE =
  '© 2026 AWS Student Community Day Central India · Rungta International Skills University (RISU) Bhilai. All rights reserved. Unauthorized copying, scraping, or redistribution of event assets and code is strictly prohibited.';

export const ContentProtection: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('Content & Assets Protected · Copying Disabled');
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const toastTimerRef = useRef<number | null>(null);
  const debuggerIntervalRef = useRef<number | null>(null);

  const showSecurityNotice = useCallback((msg?: string) => {
    if (msg) setToastMessage(msg);
    setToastVisible(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 2200);
  }, []);

  useEffect(() => {
    // 0. Anti-iFrame Clickjacking & Embedding Defense
    try {
      if (window.top !== window.self) {
        if (window.top) {
          window.top.location.href = window.self.location.href;
        }
      }
    } catch {
      // In cross-origin iframe where top access is restricted
      document.body.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0A0D14;color:#AD5CFF;font-family:sans-serif;font-size:20px;font-weight:bold;text-align:center;padding:24px;">
          Embedding the AWS SCD 2026 Portal inside an external iframe is prohibited.
        </div>
      `;
    }

    // Helper: Determine if user is interacting with an input / editable element
    const isInputElement = (el: EventTarget | null): boolean => {
      if (!el || !(el instanceof HTMLElement)) return false;
      const tag = el.tagName.toLowerCase();
      return (
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        el.isContentEditable ||
        el.closest('input, textarea, select, [contenteditable="true"]') !== null
      );
    };

    // 1. Block Context Menu (Right Click) across the website
    const handleContextMenu = (e: MouseEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice('Right-click & Save As are disabled on this portal');
      return false;
    };

    // 2. Block Copy, Cut, and Poison Clipboard
    const handleCopy = (e: ClipboardEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', COPYRIGHT_NOTICE);
      }
      showSecurityNotice('Direct copying is prohibited · Content is copyright protected');
      return false;
    };

    const handleCut = (e: ClipboardEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      showSecurityNotice('Content modification is prohibited');
      return false;
    };

    // 3. Prevent Dragging of Images / Text / Elements
    const handleDragStart = (e: DragEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 4. Neutralize Selection outside inputs
    const handleSelectionChange = () => {
      const activeEl = document.activeElement;
      if (isInputElement(activeEl)) return;
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        selection.removeAllRanges();
      }
    };

    // 5. Block Inspection & Copy Key Combinations
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = isInputElement(e.target);
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // F12 (DevTools)
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Developer Tools access is restricted');
        return false;
      }

      // ContextMenu key or Shift+F10 (Emulating right-click)
      if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Context menu is disabled');
        return false;
      }

      // Ctrl/Cmd + Shift + I/J/C/K (DevTools / Console / Inspector)
      if (isCtrlOrCmd && e.shiftKey && ['i', 'j', 'c', 'k'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Developer Tools shortcuts are disabled');
        return false;
      }

      // Ctrl/Cmd + Option/Alt + I/J/C (macOS shortcuts)
      if (isCtrlOrCmd && e.altKey && ['i', 'j', 'c'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Inspector shortcuts are disabled');
        return false;
      }

      // Ctrl/Cmd + U (View Page Source)
      if (isCtrlOrCmd && key === 'u') {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('View Source is disabled');
        return false;
      }

      // Ctrl/Cmd + S (Save Webpage)
      if (isCtrlOrCmd && key === 's') {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Saving this webpage offline is disabled');
        return false;
      }

      // Ctrl/Cmd + P (Print / Save as PDF)
      if (isCtrlOrCmd && key === 'p') {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Printing is disabled');
        return false;
      }

      // Outside inputs: block Ctrl+A, Ctrl+C, Ctrl+X
      if (!isInput && isCtrlOrCmd && ['a', 'c', 'x'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityNotice('Copying or selecting content is disabled');
        return false;
      }
    };

    // 6. Block Print Events
    const handleBeforePrint = (e: Event) => {
      e.preventDefault();
      showSecurityNotice('Printing is disabled');
    };

    // 7. DevTools Open Detection Engine
    const devToolsCheck = () => {
      // Dimension threshold check (docked DevTools)
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const threshold = 170;
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      const isDocked =
        !isMobile && (widthDiff > threshold || heightDiff > threshold);

      // Debugger timing check (detects undocked or floating DevTools)
      let isDebuggerPaused = false;
      try {
        const start = performance.now();
        // Dynamically invoke debugger so bundlers cannot strip it
        const debugFn = new Function('debugger');
        debugFn();
        const duration = performance.now() - start;
        if (duration > 120) {
          isDebuggerPaused = true;
        }
      } catch {
        // Ignored
      }

      if (isDocked || isDebuggerPaused) {
        setIsDevToolsOpen(true);
      } else {
        setIsDevToolsOpen(false);
      }
    };

    // Security warning in browser console
    try {
      console.clear();
      const titleStyle =
        'color: #AD5CFF; font-size: 26px; font-weight: 900; text-shadow: 0 0 16px rgba(173,92,255,0.7);';
      const warningStyle =
        'color: #EF4444; font-size: 14px; font-weight: bold; background: rgba(239, 68, 68, 0.1); padding: 4px 8px; border-radius: 4px;';
      const bodyStyle = 'color: #94A3B8; font-size: 12px; margin-top: 4px;';

      console.log('%c⚡ AWS STUDENT COMMUNITY DAY 2026 · CENTRAL INDIA ⚡', titleStyle);
      console.log(
        '%c⛔ SECURITY NOTICE: Unauthorized inspection, scraping, or code replication is strictly prohibited.',
        warningStyle
      );
      console.log(
        '%cAll event assets, branding, and interfaces are proprietary to AWS SBG Rungta International Skills University.',
        bodyStyle
      );
    } catch {
      // Ignored
    }

    const devToolsTimer = window.setInterval(devToolsCheck, 1000);

    // Attach listeners with capture = true to intercept before anything else
    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('copy', handleCopy, { capture: true });
    window.addEventListener('cut', handleCut, { capture: true });
    window.addEventListener('dragstart', handleDragStart, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('beforeprint', handleBeforePrint, { capture: true });
    document.addEventListener('selectionchange', handleSelectionChange, { capture: true });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('copy', handleCopy, { capture: true });
      window.removeEventListener('cut', handleCut, { capture: true });
      window.removeEventListener('dragstart', handleDragStart, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('beforeprint', handleBeforePrint, { capture: true });
      document.removeEventListener('selectionchange', handleSelectionChange, { capture: true });
      window.clearInterval(devToolsTimer);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, [showSecurityNotice]);

  // Active anti-debugger loop while DevTools is open
  useEffect(() => {
    if (isDevToolsOpen) {
      debuggerIntervalRef.current = window.setInterval(() => {
        try {
          const debugFn = new Function('debugger');
          debugFn();
        } catch {
          // Ignored
        }
      }, 400);
    } else {
      if (debuggerIntervalRef.current) {
        clearInterval(debuggerIntervalRef.current);
        debuggerIntervalRef.current = null;
      }
    }

    return () => {
      if (debuggerIntervalRef.current) {
        clearInterval(debuggerIntervalRef.current);
        debuggerIntervalRef.current = null;
      }
    };
  }, [isDevToolsOpen]);

  return (
    <>
      {/* 1. DevTools Full-Screen Security Barrier */}
      <AnimatePresence>
        {isDevToolsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999999] bg-[#0A0D14]/98 backdrop-blur-2xl flex items-center justify-center p-6 text-center select-none"
            style={{ pointerEvents: 'all' }}
          >
            <div className="max-w-md w-full bg-[#0D111A] border border-[#AD5CFF]/30 rounded-2xl p-8 shadow-[0_0_80px_rgba(173,92,255,0.25)] flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-[#AD5CFF]/10 border border-[#AD5CFF]/40 flex items-center justify-center text-[#AD5CFF] mb-5 shadow-[0_0_30px_rgba(173,92,255,0.35)] animate-pulse">
                <ShieldAlert className="w-8 h-8" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] font-mono uppercase tracking-wider mb-3">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Security Shield Activated</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Developer Tools Detected
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                Source code inspection, element copying, and network scraping are disabled to protect official AWS SCD 2026 event assets.
              </p>

              <div className="w-full bg-[#07090E] border border-white/10 rounded-xl p-4 text-left font-mono text-xs text-slate-400 mb-6 space-y-1.5">
                <div className="flex items-center gap-2 text-[#AD5CFF]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ACTION REQUIRED</span>
                </div>
                <p className="text-slate-300">
                  Please close Developer Tools to continue browsing the event portal.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <Lock className="w-3.5 h-3.5 text-[#AD5CFF]" />
                <span>AWS SCD 2026 · Central India Edition</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Cyber Security Notice Toast */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999999] pointer-events-none max-w-[90vw]"
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D111A]/95 text-white border border-[#AD5CFF]/50 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(173,92,255,0.3)] backdrop-blur-2xl">
              <EyeOff className="w-4 h-4 text-[#AD5CFF] shrink-0 animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-200 tracking-tight truncate">
                {toastMessage}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

