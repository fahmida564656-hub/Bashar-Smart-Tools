import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Flame,
  CheckCircle2,
  Clock,
  ArrowRight,
  Coffee,
  Brain,
  ListTodo,
  FileText,
  Sliders,
  Bell
} from 'lucide-react';
import { ToolTab, CalendarEvent } from '../../types';

interface PomodoroTimerProps {
  onNavigate: (tab: ToolTab) => void;
  todayTasks?: CalendarEvent[];
}

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

const DEFAULT_TIMES: Record<TimerMode, number> = {
  focus: 25 * 60, // 25 mins
  shortBreak: 5 * 60, // 5 mins
  longBreak: 15 * 60, // 15 mins
};

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ onNavigate, todayTasks = [] }) => {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_TIMES.focus);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [completedSessions, setCompletedSessions] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('bashar_pomodoro_completed');
      const savedDate = localStorage.getItem('bashar_pomodoro_date');
      const today = new Date().toDateString();
      if (savedDate === today && saved) {
        return parseInt(saved, 10) || 0;
      }
    } catch (e) {}
    return 0;
  });

  const [selectedTaskId, setSelectedTaskId] = useState<string>('');
  const [customDurations, setCustomDurations] = useState<Record<TimerMode, number>>({
    focus: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const timerRef = useRef<any>(null);

  // Sound chime using Web Audio API (zero external assets needed)
  const playCompletionSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const playTone = (freq: number, start: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };

      // Gentle celebratory double chime (C5 -> E5 -> G5)
      playTone(523.25, 0, 0.4);
      playTone(659.25, 0.2, 0.4);
      playTone(783.99, 0.4, 0.7);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  };

  // Timer Tick
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            playCompletionSound();

            if (mode === 'focus') {
              const newCount = completedSessions + 1;
              setCompletedSessions(newCount);
              try {
                localStorage.setItem('bashar_pomodoro_completed', newCount.toString());
                localStorage.setItem('bashar_pomodoro_date', new Date().toDateString());
              } catch (e) {}
              
              // After 4 focus sessions, prompt long break; else short break
              if (newCount % 4 === 0) {
                switchMode('longBreak');
              } else {
                switchMode('shortBreak');
              }
            } else {
              switchMode('focus');
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode, completedSessions, soundEnabled]);

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(customDurations[newMode] * 60);
  };

  const handleTogglePlay = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(customDurations[mode] * 60);
  };

  const handleApplyDurations = (focus: number, sBreak: number, lBreak: number) => {
    const updated = {
      focus: Math.max(1, Math.min(120, focus)),
      shortBreak: Math.max(1, Math.min(60, sBreak)),
      longBreak: Math.max(1, Math.min(60, lBreak)),
    };
    setCustomDurations(updated);
    setTimeLeft(updated[mode] * 60);
    setShowSettings(false);
  };

  // Formatted Time MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const totalTimeForCurrentMode = customDurations[mode] * 60;
  const progressPercent = Math.min(100, Math.max(0, ((totalTimeForCurrentMode - timeLeft) / totalTimeForCurrentMode) * 100));

  const selectedTask = todayTasks.find((t) => t.id === selectedTaskId);

  return (
    <div className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/40 rounded-3xl border border-indigo-100 dark:border-slate-800 p-6 sm:p-8 shadow-sm relative overflow-hidden transition-all duration-300">
      {/* Decorative background ring */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 mb-2 border border-indigo-200/50 dark:border-indigo-800">
            <Brain className="w-3.5 h-3.5" />
            ফোকাস ও প্রোডাক্টিভিটি বুস্টার (Pomodoro Focus Timer)
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            পোমোডোরো ফোকাস টাইমার
            {isRunning && (
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            ২৫ মিনিট গভীর মনোযোগে কাজ করুন এবং ৫ মিনিট মানসিক বিশ্রাম নিন।
          </p>
        </div>

        {/* Top Actions: Settings & Sound */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-xl border text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
              soundEnabled
                ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-slate-700 shadow-2xs'
                : 'bg-slate-100 dark:bg-slate-800/60 text-slate-400 border-slate-200 dark:border-slate-700'
            }`}
            title={soundEnabled ? 'শব্দ সক্রিয় রয়েছে' : 'শব্দ বন্ধ রয়েছে'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-2xs"
            title="টাইমার সময়সীমা নির্ধারণ"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Settings Panel (collapsible) */}
      {showSettings && (
        <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-indigo-100 dark:border-slate-700 shadow-sm animate-in fade-in zoom-in-95">
          <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
            টাইমার সেটিংস (কাস্টম মিনিট নির্ধারণ)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-400 mb-1">ফোকাস সেশন (মিনিট):</label>
              <input
                type="number"
                min="1"
                max="120"
                value={customDurations.focus}
                onChange={(e) => setCustomDurations({ ...customDurations, focus: parseInt(e.target.value) || 25 })}
                className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 mb-1">ছোট বিরতি (মিনিট):</label>
              <input
                type="number"
                min="1"
                max="60"
                value={customDurations.shortBreak}
                onChange={(e) => setCustomDurations({ ...customDurations, shortBreak: parseInt(e.target.value) || 5 })}
                className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 mb-1">বড় বিরতি (মিনিট):</label>
              <input
                type="number"
                min="1"
                max="60"
                value={customDurations.longBreak}
                onChange={(e) => setCustomDurations({ ...customDurations, longBreak: parseInt(e.target.value) || 15 })}
                className="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <button
              onClick={() => handleApplyDurations(25, 5, 15)}
              className="px-3 py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
            >
              ডিফল্ট (২৫/৫/১৫)
            </button>
            <button
              onClick={() => handleApplyDurations(customDurations.focus, customDurations.shortBreak, customDurations.longBreak)}
              className="px-4 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition cursor-pointer"
            >
              প্রয়োগ করুন
            </button>
          </div>
        </div>
      )}

      {/* Main Timer Display & Controls Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive Countdown Box */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Mode Switch Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-6">
            <button
              onClick={() => switchMode('focus')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                mode === 'focus'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>ফোকাস ({customDurations.focus}মি.)</span>
            </button>

            <button
              onClick={() => switchMode('shortBreak')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                mode === 'shortBreak'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>ছোট বিরতি ({customDurations.shortBreak}মি.)</span>
            </button>

            <button
              onClick={() => switchMode('longBreak')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                mode === 'longBreak'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>বড় বিরতি ({customDurations.longBreak}মি.)</span>
            </button>
          </div>

          {/* Time Display with Circular Progress indicator */}
          <div className="my-2 relative flex flex-col items-center justify-center">
            <div className="text-5xl sm:text-7xl font-mono font-extrabold tracking-tight text-slate-900 dark:text-white tabular-nums select-none">
              {formattedTime}
            </div>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-2">
              {mode === 'focus' && 'গভীর মনোযোগের সময় • Stay Focused'}
              {mode === 'shortBreak' && 'ছোট বিরতি নিন • Relax & Hydrate'}
              {mode === 'longBreak' && 'দীর্ঘ বিরতি • Recharge Your Energy'}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                mode === 'focus'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600'
                  : mode === 'shortBreak'
                  ? 'bg-emerald-500'
                  : 'bg-purple-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Controls: Play/Pause/Reset */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleTogglePlay}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-200 dark:shadow-none'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-indigo-200 dark:shadow-none'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>বিরতি (Pause)</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span>শুরু করুন (Start)</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
              title="পুনরায় রিসেট করুন"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Task Target & Today's Streak Summary */}
        <div className="lg:col-span-5 space-y-4">
          {/* Target Task Selector */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <ListTodo className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                বর্তমান ফোকাস টাস্ক (Active Task)
              </span>
              <button
                onClick={() => onNavigate('calendar')}
                className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                ক্যালেন্ডারে যান →
              </button>
            </div>

            {todayTasks.length > 0 ? (
              <select
                value={selectedTaskId}
                onChange={(e) => setSelectedTaskId(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">-- কোনো নির্দিষ্ট কাজ বেছে নিন --</option>
                {todayTasks.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.status === 'completed' ? '✓ ' : '○ '}
                    {t.title} ({t.category})
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-xs text-slate-400">
                আজকের ক্যালেন্ডারে কোনো কাজ যোগ করা নেই। আপনি সাধারণ ফোকাস সেশন চালিয়ে যেতে পারেন।
              </p>
            )}

            {selectedTask && (
              <div className="mt-3 p-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between text-xs">
                <div className="min-w-0 pr-2">
                  <p className="font-bold text-indigo-900 dark:text-indigo-200 truncate">{selectedTask.title}</p>
                  <p className="text-[10px] text-indigo-600 dark:text-indigo-400">{selectedTask.category} • প্রায়োরিটি: {selectedTask.priority}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-200/60 dark:bg-indigo-900 text-[10px] font-bold text-indigo-800 dark:text-indigo-300">
                  চলমান
                </span>
              </div>
            )}
          </div>

          {/* Today's Streak & Stats */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                আজকের সম্পন্ন পোমোডোরো
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                  {completedSessions}
                </span>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  / ৪ সেশন সম্পন্ন (লক্ষ্য)
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full flex items-center justify-center text-[8px] font-bold ${
                      completedSessions >= i
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                    }`}
                  >
                    {completedSessions >= i ? '✓' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick shortcuts to write notes */}
            <div className="text-right">
              <button
                onClick={() => onNavigate('notes')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 rounded-xl transition cursor-pointer border border-indigo-200/60 dark:border-indigo-800"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>নোটপ্যাডে লিখুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
