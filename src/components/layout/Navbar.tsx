import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { ToolTab } from '../../types';
import {
  Sparkles,
  LayoutDashboard,
  HelpCircle,
  Calendar as CalendarIcon,
  FileText,
  User as UserIcon,
  LogOut,
  LogIn,
  UserPlus,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Keyboard
} from 'lucide-react';

interface NavbarProps {
  currentTab: ToolTab;
  onTabChange: (tab: ToolTab) => void;
  onOpenAuth: (mode?: 'login' | 'signup') => void;
  onOpenProfile: () => void;
  onOpenShortcuts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  onOpenAuth,
  onOpenProfile,
  onOpenShortcuts,
}) => {
  const { user, profile, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const isMac = typeof window !== 'undefined' && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent);
  const modKey = isMac ? '⌘' : 'Ctrl';

  const navItems: { id: ToolTab; labelBn: string; labelEn: string; shortcutKey: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', labelBn: 'ড্যাশবোর্ড', labelEn: 'Dashboard', shortcutKey: '1', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'quiz', labelBn: 'কুইজ', labelEn: 'Quiz', shortcutKey: '2', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'calendar', labelBn: 'ক্যালেন্ডার', labelEn: 'Calendar', shortcutKey: '3', icon: <CalendarIcon className="w-4 h-4" /> },
    { id: 'notes', labelBn: 'স্মার্ট নোট', labelEn: 'Smart Notes', shortcutKey: '4', icon: <FileText className="w-4 h-4" /> },
  ];

  const handleTabClick = (tab: ToolTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  const displayName = profile?.displayName || user?.displayName || user?.email?.split('@')[0] || 'ব্যবহারকারী';
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 dark:shadow-indigo-950">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 dark:from-indigo-400 dark:via-purple-300 dark:to-indigo-200 bg-clip-text text-transparent">
                  Bashar Smart Tools
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 rounded-md">
                  BD
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-none hidden sm:block">
                কুইজ • ক্যালেন্ডার • স্মার্ট নোট
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  title={`${item.labelBn} (${modKey}+${item.shortcutKey})`}
                  className={`group flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.labelBn}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-normal transition-colors hidden lg:inline-block ${
                    isActive
                      ? 'bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                  }`}>
                    {modKey}+{item.shortcutKey}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right side: Dark Mode Toggle, Shortcuts & Auth Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Keyboard Shortcuts Helper Button */}
            <button
              onClick={onOpenShortcuts}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={`কীবোর্ড শর্টকাট সহায়িকা (${modKey} + /)`}
              aria-label="Keyboard Shortcuts"
            >
              <Keyboard className="w-5 h-5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={theme === 'dark' ? 'লাইট মোডে পরিবর্তন করুন (Light Mode)' : 'ডার্ক মোড চালু করুন (Dark Mode)'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 animate-in spin-in-180" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 animate-in spin-in-180" />
              )}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                >
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 max-w-[120px] truncate hidden sm:inline-block">
                    {displayName}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {initial}
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 mr-1" />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-1.5 z-50 animate-in fade-in zoom-in-95"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs text-slate-400 font-medium">লগইন করা অ্যাকাউন্ট</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{displayName}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                    </div>

                    <button
                      onClick={onOpenProfile}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2.5 transition cursor-pointer"
                    >
                      <UserIcon className="w-4 h-4 text-slate-400" />
                      প্রোফাইল ও সেটিংস
                    </button>

                    <button
                      onClick={onOpenShortcuts}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2.5 transition cursor-pointer"
                    >
                      <Keyboard className="w-4 h-4 text-slate-400" />
                      শর্টকাট সহায়িকা ({modKey}+/)
                    </button>

                    <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center gap-2.5 transition cursor-pointer"
                    >
                      <LogOut className="w-4 h-4 text-rose-500" />
                      লগআউট করুন
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>লগইন</span>
                </button>

                <button
                  onClick={() => onOpenAuth('signup')}
                  className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-sm shadow-indigo-200 dark:shadow-none transition cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>সাইন আপ</span>
                </button>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white md:hidden rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <div className="text-left">
                    <div className="font-medium">{item.labelBn}</div>
                    <div className="text-[11px] text-slate-400">{item.labelEn}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {modKey}+{item.shortcutKey}
                </span>
              </button>
            );
          })}

          <div className="border-t border-slate-100 dark:border-slate-800 pt-2 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShortcuts();
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition cursor-pointer"
            >
              <Keyboard className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>কীবোর্ড শর্টকাট সহায়িকা</span>
              <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400">
                {modKey}+/
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
