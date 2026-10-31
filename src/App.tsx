import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { QuizTool } from './components/quiz/QuizTool';
import { CalendarTool } from './components/calendar/CalendarTool';
import { SmartNotesTool } from './components/notes/SmartNotesTool';
import { AuthModal } from './components/auth/AuthModal';
import { ProfileModal } from './components/profile/ProfileModal';
import { KeyboardShortcutsModal } from './components/common/KeyboardShortcutsModal';
import { ShortcutHUDToast } from './components/common/ShortcutHUDToast';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { ToolTab } from './types';
import { testConnection } from './lib/firebase';
import { Sparkles, ShieldCheck, Keyboard } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [currentTab, setCurrentTab] = useState<ToolTab>('dashboard');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);

  // Test connection on boot
  useEffect(() => {
    testConnection();
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup' = 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const isAnyModalOpen = isAuthModalOpen || isProfileModalOpen || isShortcutsModalOpen;

  const handleCloseAllModals = () => {
    setIsAuthModalOpen(false);
    setIsProfileModalOpen(false);
    setIsShortcutsModalOpen(false);
  };

  const { notification, dismissNotification } = useKeyboardShortcuts({
    currentTab,
    onNavigate: setCurrentTab,
    onToggleTheme: toggleTheme,
    onOpenShortcutsModal: () => setIsShortcutsModalOpen(true),
    onCloseModals: handleCloseAllModals,
    isAnyModalOpen,
  });

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 transition-colors">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 border-t-indigo-600 rounded-full animate-spin"></div>
          <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400 absolute animate-pulse" />
        </div>
        <h2 className="mt-4 text-base font-bold text-slate-800 dark:text-slate-100">Bashar Smart Tools</h2>
        <p className="text-xs text-slate-400 mt-1">লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onOpenAuth={handleOpenAuth}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenShortcuts={() => setIsShortcutsModalOpen(true)}
      />

      {/* Main Tool Content */}
      <main className="flex-1 pb-16">
        {currentTab === 'dashboard' && (
          <Dashboard onNavigate={setCurrentTab} onOpenAuth={handleOpenAuth} />
        )}
        {currentTab === 'quiz' && <QuizTool onOpenAuth={() => handleOpenAuth('login')} />}
        {currentTab === 'calendar' && <CalendarTool onOpenAuth={() => handleOpenAuth('login')} />}
        {currentTab === 'notes' && <SmartNotesTool onOpenAuth={() => handleOpenAuth('login')} />}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-4 mt-auto transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">Bashar Smart Tools</span>
            <span>•</span>
            <span>কুইজ, ক্যালেন্ডার ও স্মার্ট নোট</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsShortcutsModalOpen(true)}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer flex items-center gap-1.5"
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>শর্টকাট সহায়িকা</span>
              <kbd className="px-1 py-0.5 text-[10px] font-mono bg-slate-100 dark:bg-slate-800 rounded text-slate-500">
                Ctrl+/
              </kbd>
            </button>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Firebase Auth & Firestore Connected
            </span>
            <span>•</span>
            <span>সর্বস্বত্ব সংরক্ষিত © {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>

      {/* Floating Shortcut Quick Helper Button (Desktop & Tablet) */}
      <button
        onClick={() => setIsShortcutsModalOpen(true)}
        className="fixed bottom-4 right-4 z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-lg backdrop-blur-md text-xs font-medium transition cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400"
        title="কীবোর্ড শর্টকাট সহায়িকা (Ctrl + /)"
      >
        <Keyboard className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        <span>শর্টকাট</span>
        <kbd className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-[10px] font-mono rounded text-slate-500 dark:text-slate-400">
          Ctrl+/
        </kbd>
      </button>

      {/* Shortcut HUD Toast Notification on keypress */}
      <ShortcutHUDToast
        notification={notification}
        onDismiss={dismissNotification}
      />

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsModalOpen}
        onClose={() => setIsShortcutsModalOpen(false)}
        onNavigate={setCurrentTab}
        onToggleTheme={toggleTheme}
      />

      {/* Auth Modal (Login / Sign Up / Forgot Password) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
