import React, { useState, useEffect } from 'react';
import { X, Keyboard, Search, Sparkles, LayoutDashboard, HelpCircle, Calendar, FileText, Moon, Sun, ArrowRight } from 'lucide-react';
import { ToolTab } from '../../types';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: ToolTab) => void;
  onToggleTheme: () => void;
}

interface ShortcutItem {
  keys: string[];
  titleBn: string;
  titleEn: string;
  description: string;
  category: 'nav' | 'theme' | 'general';
  action?: () => void;
  icon?: React.ReactNode;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onToggleTheme,
}) => {
  const [search, setSearch] = useState('');
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent));
    }
  }, []);

  if (!isOpen) return null;

  const modifier = isMac ? '⌘' : 'Ctrl';
  const altModifier = isMac ? '⌥' : 'Alt';

  const shortcuts: ShortcutItem[] = [
    {
      keys: [`${modifier} + 1`, `${altModifier} + 1`],
      titleBn: 'ড্যাশবোর্ড',
      titleEn: 'Dashboard',
      description: 'মূল ড্যাশবোর্ড ও সকল টুলের সারসংক্ষেপে ফিরে যান',
      category: 'nav',
      action: () => { onNavigate('dashboard'); onClose(); },
      icon: <LayoutDashboard className="w-4 h-4 text-indigo-500" />,
    },
    {
      keys: [`${modifier} + 2`, `${altModifier} + 2`],
      titleBn: 'কুইজ ও পরীক্ষা',
      titleEn: 'Quiz Tool',
      description: 'অনলাইন MCQ কুইজ, টাইমার ও ফলাফল বিশ্লেষণ',
      category: 'nav',
      action: () => { onNavigate('quiz'); onClose(); },
      icon: <HelpCircle className="w-4 h-4 text-purple-500" />,
    },
    {
      keys: [`${modifier} + 3`, `${altModifier} + 3`],
      titleBn: 'ক্যালেন্ডার ও কাজ',
      titleEn: 'Calendar & Tasks',
      description: 'দৈনিক ও মাসিক সময়সূচি এবং টু-ডু কাজ পরিচালনা',
      category: 'nav',
      action: () => { onNavigate('calendar'); onClose(); },
      icon: <Calendar className="w-4 h-4 text-emerald-500" />,
    },
    {
      keys: [`${modifier} + 4`, `${altModifier} + 4`],
      titleBn: 'স্মার্ট নোটস',
      titleEn: 'Smart Notes',
      description: 'অটো-সেভ, ক্যাটাগরি ও ক্লাউড ব্যাকআপ সম্বলিত নোটপ্যাড',
      category: 'nav',
      action: () => { onNavigate('notes'); onClose(); },
      icon: <FileText className="w-4 h-4 text-amber-500" />,
    },
    {
      keys: [`${modifier} + Shift + D`],
      titleBn: 'ডার্ক / লাইট মোড টগল',
      titleEn: 'Toggle Dark / Light Theme',
      description: 'অ্যাপ্লিকেশনের লাইট এবং ডার্ক থিমের মধ্যে পরিবর্তন',
      category: 'theme',
      action: () => { onToggleTheme(); },
      icon: <Moon className="w-4 h-4 text-indigo-400" />,
    },
    {
      keys: [`${modifier} + /`, '?'],
      titleBn: 'কীবোর্ড শর্টকাট সহায়িকা',
      titleEn: 'Open Shortcuts Helper',
      description: 'এই শর্টকাট সহায়িকা উইন্ডোটি খুলুন',
      category: 'general',
      icon: <Keyboard className="w-4 h-4 text-slate-400" />,
    },
    {
      keys: ['Esc'],
      titleBn: 'পপআপ বা মডাল বন্ধ',
      titleEn: 'Close Active Modal',
      description: 'যেকোনো খোলা উইন্ডো বা ডায়ালগ বন্ধ করুন',
      category: 'general',
      action: onClose,
    },
  ];

  const filteredShortcuts = shortcuts.filter(s => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      s.titleBn.toLowerCase().includes(q) ||
      s.titleEn.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.keys.some(k => k.toLowerCase().includes(q))
    );
  });

  const categories = [
    { id: 'nav', labelBn: 'টুল পরিবর্তন ও নেভিগেশন', labelEn: 'Navigation' },
    { id: 'theme', labelBn: 'ডিসপ্লে ও থিম', labelEn: 'Display & Theme' },
    { id: 'general', labelBn: 'সহায়তা ও অন্যান্য', labelEn: 'General & Actions' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcuts-title"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-xs">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="shortcuts-title" className="text-xl font-bold tracking-tight">
                  কীবোর্ড শর্টকাট সহায়িকা
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/20 rounded-full">
                  Shortcuts
                </span>
              </div>
              <p className="text-xs text-indigo-100 mt-0.5">
                কীবোর্ড ব্যবহার করে দ্রুত যেকোনো টুলে প্রবেশ ও নিয়ন্ত্রণ করুন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close shortcuts modal"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="শর্টকাট বা টুলের নাম দিয়ে খুঁজুন (যেমন: Ctrl+1, কুইজ, ডার্ক মোড)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                মুছুন
              </button>
            )}
          </div>
        </div>

        {/* Shortcuts List by Categories */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {filteredShortcuts.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Keyboard className="w-10 h-10 mx-auto mb-2 text-slate-300 dark:text-slate-600" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">কোনো শর্টকাট পাওয়া যায়নি</p>
              <p className="text-xs text-slate-400 mt-1">অন্য কোনো কি-ওয়ার্ড দিয়ে অনুসন্ধান করুন।</p>
            </div>
          ) : (
            categories.map(cat => {
              const catShortcuts = filteredShortcuts.filter(s => s.category === cat.id);
              if (catShortcuts.length === 0) return null;

              return (
                <div key={cat.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {cat.labelBn}
                    </h3>
                    <div className="flex-1 h-px bg-slate-200 dark:border-slate-800" />
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {catShortcuts.map((s, idx) => (
                      <div
                        key={idx}
                        onClick={s.action}
                        className={`group p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all flex items-center justify-between gap-4 ${
                          s.action ? 'cursor-pointer' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {s.icon && (
                            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              {s.icon}
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                                {s.titleBn}
                              </span>
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                ({s.titleEn})
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                              {s.description}
                            </p>
                          </div>
                        </div>

                        {/* Keys Badge */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {s.keys.map((k, kIdx) => (
                            <React.Fragment key={kIdx}>
                              {kIdx > 0 && <span className="text-xs text-slate-400">বা</span>}
                              <kbd className="px-2.5 py-1 text-xs font-semibold font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-xs group-hover:border-indigo-400 dark:group-hover:border-indigo-500 transition-colors">
                                {k}
                              </kbd>
                            </React.Fragment>
                          ))}
                          {s.action && (
                            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all ml-1 hidden sm:block" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>ব্রাউজারের যেকোনো জায়গা থেকে এই শর্টকাটগুলো তাৎক্ষণিক কাজ করবে।</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition cursor-pointer"
          >
            বন্ধ করুন (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
