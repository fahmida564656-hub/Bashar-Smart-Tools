import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import { collection, query, orderBy, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { QUIZ_CATEGORIES, DEFAULT_QUESTIONS } from '../../data/quizQuestions';
import { QuizQuestion, QuizAttempt } from '../../types';
import confetti from 'canvas-confetti';
import {
  HelpCircle,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  History,
  Award,
  ChevronRight,
  ChevronLeft,
  Play,
  Trash2,
  Sparkles,
  BookOpen,
  AlertCircle
} from 'lucide-react';

export const QuizTool: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { user } = useAuth();

  // Setup state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [quizState, setQuizState] = useState<'setup' | 'active' | 'result' | 'history'>('setup');

  // Active quiz session state
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  // Result state
  const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null);
  const [showReview, setShowReview] = useState<boolean>(true);

  // History state
  const [historyList, setHistoryList] = useState<QuizAttempt[]>([]);
  const [loadingHistory, setLoadingHistory] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Fetch past quiz attempts from Firestore
  const loadHistory = async () => {
    if (!user) return;
    setLoadingHistory(true);
    try {
      const q = query(
        collection(db, 'users', user.uid, 'quizAttempts'),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      const items: QuizAttempt[] = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...(docSnap.data() as Omit<QuizAttempt, 'id'>),
      }));
      setHistoryList(items);
    } catch (err) {
      console.error('Failed to load quiz history:', err);
      // In accordance with guidelines, handle Firestore error
      try {
        handleFirestoreError(err, OperationType.LIST, `users/${user.uid}/quizAttempts`);
      } catch (e) {
        // Logged
      }
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    if (quizState === 'history' && user) {
      loadHistory();
    }
  }, [quizState, user]);

  // Start quiz
  const handleStartQuiz = () => {
    let pool = DEFAULT_QUESTIONS;
    if (selectedCategory !== 'all') {
      pool = DEFAULT_QUESTIONS.filter((q) => q.category === selectedCategory);
    }

    if (pool.length === 0) {
      alert('এই ক্যাটাগরিতে এখনও কোনো প্রশ্ন নেই। দয়া করে অন্য ক্যাটাগরি বেছে নিন।');
      return;
    }

    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, pool.length));

    // Time calculation: 45 seconds per question
    const allocatedTime = selected.length * 45;

    setActiveQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setTimeLeft(allocatedTime);
    setTotalTime(allocatedTime);
    setQuizState('active');
  };

  // Timer countdown
  useEffect(() => {
    if (quizState !== 'active') return;

    if (timeLeft <= 0) {
      handleSubmitQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, timeLeft]);

  // Select an option
  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  // Submit quiz and calculate result
  const handleSubmitQuiz = async () => {
    let score = 0;
    const summary = activeQuestions.map((q, idx) => {
      const chosen = selectedAnswers[idx];
      const isCorrect = chosen === q.correctIndex;
      if (isCorrect) score += 1;
      return {
        questionId: q.id,
        question: q.question,
        selectedOption: chosen !== undefined ? chosen : -1,
        correctOption: q.correctIndex,
        isCorrect,
      };
    });

    const total = activeQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const timeTaken = totalTime - timeLeft;

    const catObj = QUIZ_CATEGORIES.find((c) => c.id === selectedCategory);
    const categoryName = catObj ? catObj.nameBn : 'সকল বিষয়';

    const attempt: QuizAttempt = {
      id: 'local-' + Date.now(),
      userId: user ? user.uid : 'guest',
      category: categoryName,
      quizTitle: `${categoryName} কুইজ (${total}টি প্রশ্ন)`,
      totalQuestions: total,
      score,
      percentage,
      timeTakenSeconds: Math.max(1, timeTaken),
      createdAt: new Date().toISOString(),
      answersSummary: summary,
    };

    setLastAttempt(attempt);
    setQuizState('result');

    // Confetti on good score
    if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    // Save to Firestore if user is authenticated
    if (user) {
      setSaveStatus('ডেটাবেজে সংরক্ষণ করা হচ্ছে...');
      try {
        const docRef = await addDoc(collection(db, 'users', user.uid, 'quizAttempts'), {
          userId: user.uid,
          category: attempt.category,
          quizTitle: attempt.quizTitle,
          totalQuestions: attempt.totalQuestions,
          score: attempt.score,
          percentage: attempt.percentage,
          timeTakenSeconds: attempt.timeTakenSeconds,
          createdAt: attempt.createdAt,
        });
        attempt.id = docRef.id;
        setSaveStatus('ফলাফল আপনার অ্যাকাউন্টে সফলভাবে সংরক্ষিত হয়েছে ✓');
      } catch (err) {
        console.error('Failed to save quiz attempt:', err);
        setSaveStatus('ডেটাবেজে ফলাফল সংরক্ষণ ব্যর্থ হয়েছে।');
      }
    } else {
      setSaveStatus('অতিথি হিসেবে সম্পন্ন করেছেন। ক্লাউডে সংরক্ষণের জন্য লগইন করুন।');
    }
  };

  const handleDeleteHistory = async (attemptId: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'quizAttempts', attemptId));
      setHistoryList((prev) => prev.filter((item) => item.id !== attemptId));
    } catch (err) {
      console.error('Failed to delete history attempt:', err);
    }
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Top Banner & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            অনলাইন কুইজ ও পরীক্ষা প্ল্যাটফর্ম
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Bashar Quiz Master
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            সাধারণ জ্ঞান, বাংলা, ইংরেজি, গণিত, বিজ্ঞান ও ICT-র বাস্তব MCQ পরীক্ষা।
          </p>
        </div>

        <div className="flex items-center gap-2">
          {quizState !== 'setup' && (
            <button
              onClick={() => setQuizState('setup')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              নতুন পরীক্ষা
            </button>
          )}

          <button
            onClick={() => setQuizState(quizState === 'history' ? 'setup' : 'history')}
            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl transition cursor-pointer ${
              quizState === 'history'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 hover:bg-indigo-100 dark:hover:bg-indigo-900/60'
            }`}
          >
            <History className="w-4 h-4" />
            পূর্বের ইতিহাস
          </button>
        </div>
      </div>

      {/* STATE 1: SETUP SCREEN */}
      {quizState === 'setup' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Category selection */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              ১. পরীক্ষার ক্যাটাগরি নির্বাচন করুন
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {QUIZ_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? DEFAULT_QUESTIONS.length
                    : DEFAULT_QUESTIONS.filter((q) => q.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{cat.nameBn}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {count} টি প্রশ্ন
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{cat.nameEn}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question count selection */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              ২. প্রশ্নের সংখ্যা নির্বাচন করুন
            </h2>
            <div className="flex flex-wrap gap-3">
              {[5, 10, 15, 20].map((num) => (
                <button
                  key={num}
                  onClick={() => setQuestionCount(num)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition cursor-pointer ${
                    questionCount === num
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-600 text-white shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900'
                  }`}
                >
                  {num} টি প্রশ্ন ({num * 45 / 60} মিনিট)
                </button>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 dark:from-indigo-950 dark:via-purple-950 dark:to-slate-900 p-6 rounded-2xl text-white shadow-lg shadow-indigo-100 dark:shadow-none border border-transparent dark:border-slate-800">
            <div>
              <h3 className="text-lg font-bold">আপনি কি প্রস্তুত?</h3>
              <p className="text-xs text-indigo-200 dark:text-slate-300 mt-0.5">
                প্রতিটি প্রশ্নের জন্য ৪৫ সেকেন্ড সময় থাকবে। ভুল উত্তরে কোনো নেগেটিভ মার্কিং নেই।
              </p>
            </div>
            <button
              onClick={handleStartQuiz}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-indigo-700 hover:bg-indigo-50 font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-indigo-600" />
              পরীক্ষা শুরু করুন
            </button>
          </div>
        </div>
      )}

      {/* STATE 2: ACTIVE QUIZ */}
      {quizState === 'active' && activeQuestions.length > 0 && (
        <div className="space-y-6 animate-in fade-in">
          {/* Progress & Countdown Header */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-4 transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">প্রশ্ন</span>
              <span className="text-base font-bold text-slate-800 dark:text-slate-100">
                {currentIndex + 1} / {activeQuestions.length}
              </span>
            </div>

            {/* Timer Badge */}
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-sm font-bold ${
                timeLeft < 30 ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 animate-pulse' : 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{formatSeconds(timeLeft)}</span>
            </div>

            <button
              onClick={handleSubmitQuiz}
              className="px-4 py-1.5 text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/60 rounded-lg transition cursor-pointer border border-rose-200 dark:border-rose-800"
            >
              পরীক্ষা শেষ করুন
            </button>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed mb-6">
              {currentIndex + 1}. {activeQuestions[currentIndex].question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {activeQuestions[currentIndex].options.map((option, optIdx) => {
                const isSelected = selectedAnswers[currentIndex] === optIdx;
                const optionLetters = ['ক', 'খ', 'গ', 'ঘ'];

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3.5 cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/50 shadow-xs text-indigo-900 dark:text-indigo-200'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {optionLetters[optIdx]}
                    </span>
                    <span className="text-sm font-medium leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 rounded-xl transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                পূর্ববর্তী
              </button>

              <div className="flex gap-1.5 max-w-[200px] sm:max-w-xs overflow-x-auto py-1">
                {activeQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-semibold flex-shrink-0 transition cursor-pointer ${
                      currentIndex === idx
                        ? 'bg-indigo-600 text-white'
                        : selectedAnswers[idx] !== undefined
                        ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {currentIndex < activeQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition cursor-pointer shadow-xs"
                >
                  পরবর্তী
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition cursor-pointer shadow-sm"
                >
                  জমা দিন
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STATE 3: RESULT SCREEN */}
      {quizState === 'result' && lastAttempt && (
        <div className="space-y-8 animate-in zoom-in-95">
          {/* Result Summary Card */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md text-center transition-colors">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 text-white mb-4 shadow-lg shadow-indigo-100 dark:shadow-none">
              <Award className="w-10 h-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {lastAttempt.percentage >= 80
                ? 'অসাধারণ ফলাফল! 🎉'
                : lastAttempt.percentage >= 50
                ? 'ভালো প্রচেষ্টা! 👍'
                : 'আরও বেশি অনুশীলনের প্রয়োজন 💪'}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{lastAttempt.quizTitle}</p>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 max-w-2xl mx-auto">
              <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-2xl border border-indigo-100 dark:border-indigo-900/60">
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase">প্রাপ্ত নম্বর</p>
                <p className="text-2xl font-bold text-indigo-950 dark:text-indigo-200 mt-1">
                  {lastAttempt.score} / {lastAttempt.totalQuestions}
                </p>
              </div>

              <div className="p-4 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl border border-emerald-100 dark:border-emerald-900/60">
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase">শতকরা হার</p>
                <p className="text-2xl font-bold text-emerald-950 dark:text-emerald-200 mt-1">{lastAttempt.percentage}%</p>
              </div>

              <div className="p-4 bg-amber-50/70 dark:bg-amber-950/40 rounded-2xl border border-amber-100 dark:border-amber-900/60">
                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase">মোট সময়</p>
                <p className="text-2xl font-bold text-amber-950 dark:text-amber-200 mt-1">
                  {formatSeconds(lastAttempt.timeTakenSeconds)}
                </p>
              </div>

              <div className="p-4 bg-purple-50/70 dark:bg-purple-950/40 rounded-2xl border border-purple-100 dark:border-purple-900/60">
                <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase">ভুল উত্তর</p>
                <p className="text-2xl font-bold text-purple-950 dark:text-purple-200 mt-1">
                  {lastAttempt.totalQuestions - lastAttempt.score} টি
                </p>
              </div>
            </div>

            {/* Save Status */}
            {saveStatus && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                {saveStatus}
              </div>
            )}

            {!user && (
              <div className="mb-6 p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 rounded-xl text-xs text-amber-800 dark:text-amber-300 flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                <span>আপনার ফলাফল চিরস্থায়ীভাবে ক্লাউডে সংরক্ষণ করতে লগইন করুন।</span>
                <button
                  onClick={onOpenAuth}
                  className="font-bold underline text-amber-900 dark:text-amber-200 cursor-pointer"
                >
                  লগইন
                </button>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleStartQuiz}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                পুনরায় পরীক্ষা দিন
              </button>
              <button
                onClick={() => setQuizState('setup')}
                className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl transition cursor-pointer"
              >
                অন্য ক্যাটাগরি বেছে নিন
              </button>
              <button
                onClick={() => setShowReview(!showReview)}
                className="px-6 py-2.5 bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-xl transition cursor-pointer"
              >
                {showReview ? 'উত্তর পর্যালোচনা লুকান' : 'উত্তর পর্যালোচনা দেখুন'}
              </button>
            </div>
          </div>

          {/* Question Review Section */}
          {showReview && activeQuestions.length > 0 && (
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                বিস্তারিত উত্তরমালা ও ব্যাখ্যা (Answer Review)
              </h3>
              <div className="space-y-6">
                {activeQuestions.map((q, qIdx) => {
                  const chosenOpt = selectedAnswers[qIdx];
                  const isCorrect = chosenOpt === q.correctIndex;
                  const isSkipped = chosenOpt === undefined;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border-2 transition ${
                        isCorrect
                          ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/20'
                          : isSkipped
                          ? 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'
                          : 'border-rose-200 dark:border-rose-800 bg-rose-50/30 dark:bg-rose-950/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                          {qIdx + 1}. {q.question}
                        </h4>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0 flex items-center gap-1 ${
                            isCorrect
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                              : isSkipped
                              ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                              : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> সঠিক
                            </>
                          ) : isSkipped ? (
                            'উত্তর দেওয়া হয়নি'
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" /> ভুল
                            </>
                          )}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const isThisCorrect = oIdx === q.correctIndex;
                          const isThisChosen = oIdx === chosenOpt;

                          return (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-xl border flex items-center justify-between ${
                                isThisCorrect
                                  ? 'bg-emerald-100/70 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-950 dark:text-emerald-200 font-semibold'
                                  : isThisChosen
                                  ? 'bg-rose-100/70 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700 text-rose-950 dark:text-rose-200'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {isThisCorrect && (
                                <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.5 rounded">
                                  সঠিক
                                </span>
                              )}
                              {isThisChosen && !isThisCorrect && (
                                <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-rose-200 dark:bg-rose-900 px-1.5 py-0.5 rounded">
                                  আপনার উত্তর
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {q.explanation && (
                        <div className="mt-3 p-3 bg-white/80 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          <strong className="text-slate-800 dark:text-slate-200 font-semibold">ব্যাখ্যা: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* STATE 4: HISTORY SCREEN */}
      {quizState === 'history' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              আপনার পূর্বের কুইজ পরীক্ষার ইতিহাস (Quiz Records)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Firestore ডেটাবেজে সংরক্ষিত আপনার সকল পরীক্ষার রেকর্ড।
            </p>

            {!user ? (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">লগইন প্রয়োজন</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1 mb-4">
                  আপনার পূর্ববর্তী কুইজের রেকর্ড ও ইতিহাস দেখতে এবং ক্লাউডে স্থায়ীভাবে সংরক্ষণ করতে অনুগ্রহ করে লগইন করুন।
                </p>
                <button
                  onClick={onOpenAuth}
                  className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition cursor-pointer"
                >
                  লগইন বা সাইন আপ করুন
                </button>
              </div>
            ) : loadingHistory ? (
              <div className="py-12 flex flex-col items-center justify-center text-slate-400">
                <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-xs">ডেটাবেজ থেকে ইতিহাস লোড হচ্ছে...</p>
              </div>
            ) : historyList.length === 0 ? (
              <div className="py-12 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">এখনও কোনো পরীক্ষা দেওয়া হয়নি</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                  একটি কুইজ সম্পন্ন করলেই আপনার ফলাফল এখানে স্বয়ংক্রিয়ভাবে সংরক্ষিত হবে।
                </p>
                <button
                  onClick={() => setQuizState('setup')}
                  className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition cursor-pointer"
                >
                  প্রথম পরীক্ষা শুরু করুন
                </button>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {historyList.map((item) => (
                  <div
                    key={item.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 dark:hover:bg-slate-800/50 p-3 rounded-xl transition"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                          {item.quizTitle}
                        </span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                            item.percentage >= 80
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                              : item.percentage >= 50
                              ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                              : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                          }`}
                        >
                          {item.percentage}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        নম্বর: {item.score} / {item.totalQuestions} • সময়: {formatSeconds(item.timeTakenSeconds)} •{' '}
                        {new Date(item.createdAt).toLocaleDateString('bn-BD', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteHistory(item.id)}
                      className="text-slate-400 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer self-end sm:self-center"
                      title="মুছে ফেলুন"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
