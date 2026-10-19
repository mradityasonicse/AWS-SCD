import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export const ContentProtection: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  const showSecurityNotice = useCallback(() => {
    setToastVisible(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 2200);
  }, []);

  useEffect(() => {
    const isInputElement = (el: EventTarget | null): boolean => {
      if (!el || !(el instanceof HTMLElement)) return false;
      const tag = el.tagName.toLowerCase();
      return (
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        el.isContentEditable
      );
    };

    // 1. Block Context Menu (Right Click) across the website
    const handleContextMenu = (e: MouseEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      showSecurityNotice();
    };

    // 2. Block Copy, Cut, and Dragging of Text / Images
    const handleCopy = (e: ClipboardEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      showSecurityNotice();
    };

    const handleCut = (e: ClipboardEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
      showSecurityNotice();
    };

    const handleDragStart = (e: DragEvent) => {
      if (isInputElement(e.target)) return;
      e.preventDefault();
    };

    // 3. Block Inspection & Copy Key Combinations
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = isInputElement(e.target);
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        showSecurityNotice();
        return;
      }

      // Ctrl/Cmd + Shift + I/J/C (Developer Tools / Console / Inspector)
      if (isCtrlOrCmd && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
        showSecurityNotice();
        return;
      }

      // Ctrl/Cmd + U (View Page Source)
      if (isCtrlOrCmd && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        showSecurityNotice();
        return;
      }

      // Ctrl/Cmd + S (Save Page)
      if (isCtrlOrCmd && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        showSecurityNotice();
        return;
      }

      // Ctrl/Cmd + P (Print Page)
      if (isCtrlOrCmd && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        showSecurityNotice();
        return;
      }

      // Outside inputs: block Ctrl+C, Ctrl+X, Ctrl+A
      if (!isInput && isCtrlOrCmd && ['c', 'C', 'x', 'X', 'a', 'A'].includes(e.key)) {
        e.preventDefault();
        showSecurityNotice();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('copy', handleCopy, { capture: true });
    window.addEventListener('cut', handleCut, { capture: true });
    window.addEventListener('dragstart', handleDragStart, { capture: true });
    window.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('copy', handleCopy, { capture: true });
      window.removeEventListener('cut', handleCut, { capture: true });
      window.removeEventListener('dragstart', handleDragStart, { capture: true });
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, [showSecurityNotice]);

  return (
    <AnimatePresence>
      {toastVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999999] pointer-events-none"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0D111A]/95 text-white border border-[#AD5CFF]/40 shadow-[0_12px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(173,92,255,0.25)] backdrop-blur-xl">
            <ShieldAlert className="w-4 h-4 text-[#AD5CFF] shrink-0 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-200 tracking-tight">
              Content &amp; Assets Protected · AWS SCD 2026
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
