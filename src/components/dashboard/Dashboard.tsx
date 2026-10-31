import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ToolTab, QuizAttempt, CalendarEvent, SmartNote } from '../../types';
import { db } from '../../lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import {
  Sparkles,
  HelpCircle,
  Calendar,
  FileText,
  ArrowRight,
  Award,
  ChevronRight,
  CalendarCheck
} from 'lucide-react';
import { PomodoroTimer } from './PomodoroTimer';

interface DashboardProps {
  onNavigate: (tab: ToolTab) => void;
  onOpenAuth: (mode?: 'login' | 'signup') => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onOpenAuth }) => {
  const { user, profile } = useAuth();

  const [recentQuizzes, setRecentQuizzes] = useState<QuizAttempt[]>([]);
  const [todayTasks, setTodayTasks] = useState<CalendarEvent[]>([]);
  const [recentNotes, setRecentNotes] = useState<SmartNote[]>([]);
  const [loadingStats, setLoadingStats] = useState<boolean>(true);

  // Fetch real-time dashboard data for authenticated user
  useEffect(() => {
    if (!user) {
      setRecentQuizzes([]);
      setTodayTasks([]);
      setRecentNotes([]);
      setLoadingStats(false);
      return;
    }

    const loadDashboardData = async () => {
      setLoadingStats(true);
      try {
        // 1. Recent Quizzes
        const quizQ = query(
          collection(db, 'users', user.uid, 'quizAttempts'),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const quizSnap = await getDocs(quizQ);
        setRecentQuizzes(
          quizSnap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<QuizAttempt, 'id'>) }))
        );

        // 2. Calendar Tasks
        const calQ = query(
          collection(db, 'users', user.uid, 'calendarEvents'),
          orderBy('createdAt', 'desc'),
          limit(6)
        );
        const calSnap = await getDocs(calQ);
        const allEvents = calSnap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<CalendarEvent, 'id'>),
        }));
        const todayStr = new Date().toISOString().split('T')[0];
        const todays = allEvents.filter((e) => e.date === todayStr);
        setTodayTasks(todays.length > 0 ? todays : allEvents.slice(0, 3));

        // 3. Recent Notes
        const notesQ = query(
          collection(db, 'users', user.uid, 'notes'),
          orderBy('updatedAt', 'desc'),
          limit(3)
        );
        const notesSnap = await getDocs(notesQ);
        setRecentNotes(
          notesSnap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<SmartNote, 'id'>) }))
        );
      } catch (err) {
        console.error('Error fetching dashboard summary:', err);
      } finally {
        setLoadingStats(false);
      }
    };

    loadDashboardData();
  }, [user]);

  const userName = profile?.displayName || user?.displayName || user?.email?.split('@')[0] || 'বন্ধু';

  const isMac = typeof window !== 'undefined' && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent);
  const modKey = isMac ? '⌘' : 'Ctrl';

  const toolCards = [
    {
      id: 'quiz' as ToolTab,
      title: 'Quiz (কুইজ ও পরীক্ষা)',
      desc: 'সাধারণ জ্ঞান, বাংলা, ইংরেজি, গণিত, বিজ্ঞান ও ICT-র পূর্ণাঙ্গ পরীক্ষা এবং উত্তর পর্যালোচনা।',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'from-blue-600 to-indigo-600',
      badge: 'MCQ & Timer',
      shortcut: `${modKey}+2`,
      accent: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900',
      statLabel: 'সম্পন্ন কুইজ',
      statValue: recentQuizzes.length > 0 ? `${recentQuizzes.length} টি রেকর্ড` : 'এখনই শুরু করুন',
    },
    {
      id: 'calendar' as ToolTab,
      title: 'Calendar (ক্যালেন্ডার ও কাজ)',
      desc: 'মাসিক, সাপ্তাহিক ও দৈনিক সময়সূচি, টাস্ক ট্র্যাকিং, প্রায়োরিটি এবং সময়োপযোগী নোটিফিকেশন।',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-indigo-600 to-purple-600',
      badge: 'Tasks & Events',
      shortcut: `${modKey}+3`,
      accent: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900',
      statLabel: 'আজকের কাজ',
      statValue: todayTasks.length > 0 ? `${todayTasks.length} টি নির্ধারিত` : 'নতুন কাজ যোগ করুন',
    },
    {
      id: 'notes' as ToolTab,
      title: 'Smart Notes (স্মার্ট নোট)',
      desc: 'অটো-সেভ, ক্যাটাগরি, গুরুত্বপূর্ণ নোট পিন, ইনস্ট্যান্ট সার্চ এবং ক্লাউড ব্যাকআপ সম্বলিত নোটপ্যাড।',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-emerald-600 to-teal-600',
      badge: 'Auto-Save & Search',
      shortcut: `${modKey}+4`,
      accent: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900',
      statLabel: 'সংরক্ষিত নোট',
      statValue: recentNotes.length > 0 ? `${recentNotes.length} টি সাম্প্রতিক` : 'নোট তৈরি করুন',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in">
      {/* Welcome Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 dark:from-indigo-950 dark:via-purple-950 dark:to-slate-900 text-white p-8 sm:p-10 shadow-xl shadow-indigo-100 dark:shadow-none border border-transparent dark:border-slate-800">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 dark:bg-white/10 backdrop-blur-md text-xs font-semibold text-indigo-100 dark:text-indigo-200 mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            স্বাগতম Bashar Smart Tools প্ল্যাটফর্মে
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            স্বাগতম, {userName}! 👋
          </h1>
          <p className="text-sm sm:text-base text-indigo-100 dark:text-slate-300 mt-2 leading-relaxed">
            আপনার দৈনন্দিন শেখা, সময় ব্যবস্থাপনা এবং স্মার্ট নোট সংরক্ষণের জন্য একটি পূর্ণাঙ্গ সমন্বিত ওয়ার্কস্পেস।
          </p>

          {!user && (
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-5 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 font-bold rounded-xl shadow-md transition cursor-pointer text-sm"
              >
                বিনামূল্যে অ্যাকাউন্ট তৈরি করুন
              </button>
              <button
                onClick={() => onOpenAuth('login')}
                className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white font-medium rounded-xl transition cursor-pointer text-sm border border-white/20"
              >
                লগইন করুন
              </button>
            </div>
          )}
        </div>

        {/* Decorative glow */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-purple-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-52 h-52 bg-white/10 dark:bg-white/5 rounded-full border border-white/20 dark:border-white/10 backdrop-blur-md shadow-inner">
          <div className="text-center p-4">
            <Award className="w-12 h-12 text-amber-300 mx-auto mb-2" />
            <p className="text-xs font-bold text-white uppercase tracking-wider">অল-ইন-ওয়ান টুলস</p>
            <p className="text-[11px] text-indigo-200 dark:text-indigo-300">৩টি কার্যকর সেবা</p>
          </div>
        </div>
      </div>

      {/* 3 Tool Cards Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            প্রধান ৩টি টুল (Smart Productivity Tools)
          </h2>
          <span className="text-xs text-slate-400 dark:text-slate-500">সরাসরি প্রবেশ করতে ক্লিক করুন</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCards.map((tool) => (
            <div
              key={tool.id}
              onClick={() => onNavigate(tool.id)}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 p-6 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${tool.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs">
                      {tool.shortcut}
                    </kbd>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${tool.accent}`}>
                      {tool.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                  {tool.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-3">
                  {tool.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold block">
                    {tool.statLabel}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{tool.statValue}</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white flex items-center justify-center text-slate-500 dark:text-slate-400 transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pomodoro Focus Timer Section */}
      <PomodoroTimer onNavigate={onNavigate} todayTasks={todayTasks} />

      {/* User Dashboard Live Activity Section */}
      {user ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Today's Tasks */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                ক্যালেন্ডার ও কাজ (Upcoming Tasks)
              </h3>
              <button
                onClick={() => onNavigate('calendar')}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                সব দেখুন <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {todayTasks.length === 0 ? (
              <div className="py-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">আজকের কোনো কাজ নির্ধারিত নেই।</p>
                <button
                  onClick={() => onNavigate('calendar')}
                  className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  + নতুন কাজ যুক্ত করুন
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                {todayTasks.map((t) => (
                  <div
                    key={t.id}
                    className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-semibold text-slate-800 dark:text-slate-200 truncate ${
                          t.status === 'completed' ? 'line-through text-slate-400 dark:text-slate-500' : ''
                        }`}
                      >
                        {t.title}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                        {t.startTime ? `${t.startTime} • ` : ''}
                        {t.category}
                      </p>
                    </div>
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        t.status === 'completed'
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                          : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                      }`}
                    >
                      {t.status === 'completed' ? 'সম্পন্ন' : 'বাকি'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 2: Recent Quiz Results */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                সাম্প্রতিক কুইজ ফলাফল
              </h3>
              <button
                onClick={() => onNavigate('quiz')}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                পরীক্ষা দিন <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {recentQuizzes.length === 0 ? (
              <div className="py-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">এখনও কোনো কুইজ সম্পন্ন হয়নি।</p>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  কুইজ শুরু করুন
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                {recentQuizzes.map((q) => (
                  <div
                    key={q.id}
                    className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{q.category}</p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500">
                        নম্বর: {q.score}/{q.totalQuestions}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        q.percentage >= 70
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300'
                          : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300'
                      }`}
                    >
                      {q.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 3: Recent Smart Notes */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                সাম্প্রতিক স্মার্ট নোটস
              </h3>
              <button
                onClick={() => onNavigate('notes')}
                className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                সব নোট <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {recentNotes.length === 0 ? (
              <div className="py-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">এখনও কোনো নোট সেভ করেননি।</p>
                <button
                  onClick={() => onNavigate('notes')}
                  className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  + প্রথম নোট লিখুন
                </button>
              </div>
            ) : (
              <div className="space-y-2.5">
                {recentNotes.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => onNavigate('notes')}
                    className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 cursor-pointer"
                  >
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{n.title}</p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 truncate mt-0.5">
                      {n.content || 'খালি নোট...'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Guest Feature Preview Banner */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full">
              বাস্তব ক্লাউড ডেটাবেজ সংযোগ
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              আপনার ডেটা যেকোনো ডিভাইস থেকে সিঙ্ক রাখুন
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Firebase Authentication ও Cloud Firestore-এর মাধ্যমে আপনার সব কুইজের স্কোর, ক্যালেন্ডারের ইভেন্ট এবং স্মার্ট নোট নিরাপদে ক্লাউডে সংরক্ষিত থাকে।
            </p>
          </div>
          <button
            onClick={() => onOpenAuth('signup')}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-md transition cursor-pointer text-sm whitespace-nowrap"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </div>
      )}
    </div>
  );
};
