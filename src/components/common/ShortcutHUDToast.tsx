import React from 'react';
import { ShortcutNotification } from '../../hooks/useKeyboardShortcuts';
import { Command, CheckCircle2 } from 'lucide-react';

interface ShortcutHUDToastProps {
  notification: ShortcutNotification | null;
  onDismiss: () => void;
}

export const ShortcutHUDToast: React.FC<ShortcutHUDToastProps> = ({
  notification,
  onDismiss,
}) => {
  if (!notification) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-900/90 dark:bg-slate-800/95 text-white backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/50 text-xs sm:text-sm font-medium">
        <div className="w-5 h-5 rounded-lg bg-indigo-500/30 flex items-center justify-center text-indigo-300">
          <Command className="w-3.5 h-3.5" />
        </div>
        <span>{notification.message}</span>
        <kbd className="px-2 py-0.5 text-xs font-mono font-bold bg-white/15 border border-white/20 rounded-md text-indigo-200">
          {notification.badge}
        </kbd>
      </div>
    </div>
  );
};
