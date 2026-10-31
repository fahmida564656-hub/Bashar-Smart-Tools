import { useState, useEffect, useCallback } from 'react';
import { ToolTab } from '../types';

interface KeyboardShortcutsOptions {
  currentTab: ToolTab;
  onNavigate: (tab: ToolTab) => void;
  onToggleTheme: () => void;
  onOpenShortcutsModal: () => void;
  onCloseModals: () => void;
  isAnyModalOpen: boolean;
}

export interface ShortcutNotification {
  id: number;
  message: string;
  badge: string;
}

export const useKeyboardShortcuts = ({
  currentTab,
  onNavigate,
  onToggleTheme,
  onOpenShortcutsModal,
  onCloseModals,
  isAnyModalOpen,
}: KeyboardShortcutsOptions) => {
  const [notification, setNotification] = useState<ShortcutNotification | null>(null);

  const showNotification = useCallback((message: string, badge: string) => {
    const id = Date.now();
    setNotification({ id, message, badge });
    setTimeout(() => {
      setNotification((curr) => (curr?.id === id ? null : curr));
    }, 2200);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput =
        activeEl instanceof HTMLInputElement ||
        activeEl instanceof HTMLTextAreaElement ||
        activeEl?.getAttribute('contenteditable') === 'true';

      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent);
      const isModifier = isMac ? e.metaKey : e.ctrlKey;
      const isAlt = e.altKey;

      // 1. Close open modal on Escape
      if (e.key === 'Escape') {
        if (isAnyModalOpen) {
          e.preventDefault();
          onCloseModals();
        }
        return;
      }

      // 2. Open Shortcuts Helper: (Ctrl + /) or (? when not in input)
      if ((isModifier && e.key === '/') || (!isInput && e.key === '?')) {
        e.preventDefault();
        onOpenShortcutsModal();
        return;
      }

      // 3. Toggle Dark / Light Theme: Ctrl + Shift + D or Alt + D
      if ((isModifier && e.shiftKey && (e.key === 'D' || e.key === 'd')) || (isAlt && (e.key === 'd' || e.key === 'D'))) {
        e.preventDefault();
        onToggleTheme();
        showNotification('থিম মোড পরিবর্তিত হয়েছে', `${isMac ? '⌘' : 'Ctrl'}+Shift+D`);
        return;
      }

      // 4. Navigation tabs: Ctrl+1..4 or Alt+1..4 (or Cmd+1..4)
      if ((isModifier || isAlt) && !e.shiftKey) {
        let targetTab: ToolTab | null = null;
        let tabName = '';
        let keyNum = '';

        if (e.key === '1') {
          targetTab = 'dashboard';
          tabName = 'ড্যাশবোর্ড (Dashboard)';
          keyNum = '1';
        } else if (e.key === '2') {
          targetTab = 'quiz';
          tabName = 'কুইজ ও পরীক্ষা (Quiz)';
          keyNum = '2';
        } else if (e.key === '3') {
          targetTab = 'calendar';
          tabName = 'ক্যালেন্ডার ও কাজ (Calendar)';
          keyNum = '3';
        } else if (e.key === '4') {
          targetTab = 'notes';
          tabName = 'স্মার্ট নোটস (Smart Notes)';
          keyNum = '4';
        }

        if (targetTab) {
          e.preventDefault();
          onNavigate(targetTab);
          showNotification(tabName, `${isModifier ? (isMac ? '⌘' : 'Ctrl') : 'Alt'}+${keyNum}`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    currentTab,
    onNavigate,
    onToggleTheme,
    onOpenShortcutsModal,
    onCloseModals,
    isAnyModalOpen,
    showNotification,
  ]);

  return { notification, dismissNotification: () => setNotification(null) };
};
