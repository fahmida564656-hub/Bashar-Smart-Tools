import React, { useState, useMemo } from 'react';
import { QuizAttempt } from '../../types';
import { QUIZ_CATEGORIES } from '../../data/quizQuestions';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import {
  TrendingUp,
  Award,
  CheckCircle2,
  Clock,
  BookOpen,
  Target,
  Sparkles,
  ArrowUpRight,
  Flame,
  Filter,
  BarChart2,
  Layers,
  RotateCcw,
  Zap
} from 'lucide-react';

interface QuizDashboardAnalyticsProps {
  historyList: QuizAttempt[];
  onStartQuiz: () => void;
  onOpenAuth?: () => void;
  user: any;
  loading?: boolean;
}

export const QuizDashboardAnalytics: React.FC<QuizDashboardAnalyticsProps> = ({
  historyList,
  onStartQuiz,
  onOpenAuth,
  user,
  loading = false,
}) => {
  const [timeFilter, setTimeFilter] = useState<'all' | '30d' | '7q'>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [trendMetric, setTrendMetric] = useState<'percentage' | 'time'>('percentage');

  // Filter attempts based on category and time frame
  const filteredAttempts = useMemo(() => {
    let list = [...historyList];

    // Category filter
    if (selectedCategoryFilter !== 'all') {
      list = list.filter((a) => a.category === selectedCategoryFilter);
    }

    // Time frame filter
    if (timeFilter === '7q') {
      list = list.slice(0, 7);
    } else if (timeFilter === '30d') {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      list = list.filter((a) => new Date(a.createdAt) >= thirtyDaysAgo);
    }

    return list;
  }, [historyList, selectedCategoryFilter, timeFilter]);

  // Overall statistics
  const stats = useMemo(() => {
    if (filteredAttempts.length === 0) {
      return {
        totalQuizzes: 0,
        avgScore: 0,
        bestScore: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        accuracy: 0,
        totalTimeSeconds: 0,
        avgTimePerQuiz: 0,
      };
    }

    const totalQuizzes = filteredAttempts.length;
    const totalScorePct = filteredAttempts.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
    const avgScore = Math.round(totalScorePct / totalQuizzes);
    const bestScore = Math.max(...filteredAttempts.map((a) => a.percentage || 0));

    const totalQuestions = filteredAttempts.reduce((acc, curr) => acc + (curr.totalQuestions || 0), 0);
    const totalCorrect = filteredAttempts.reduce((acc, curr) => acc + (curr.score || 0), 0);
    const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    const totalTimeSeconds = filteredAttempts.reduce((acc, curr) => acc + (curr.timeTakenSeconds || 0), 0);
    const avgTimePerQuiz = Math.round(totalTimeSeconds / totalQuizzes);

    return {
      totalQuizzes,
      avgScore,
      bestScore,
      totalQuestions,
      totalCorrect,
      accuracy,
      totalTimeSeconds,
      avgTimePerQuiz,
    };
  }, [filteredAttempts]);

  // Prepare chronological data for Trends over time chart
  const trendChartData = useMemo(() => {
    // Reverse chronologically sorted attempts so they appear oldest to newest on X-Axis
    const chronological = [...filteredAttempts].reverse();

    return chronological.map((attempt, index) => {
      const dateObj = new Date(attempt.createdAt);
      const formattedDate = dateObj.toLocaleDateString('bn-BD', {
        month: 'short',
        day: 'numeric',
      });

      const matchedCat = QUIZ_CATEGORIES.find((c) => c.id === attempt.category);

      return {
        index: index + 1,
        attemptNumber: `কুইজ #${index + 1}`,
        date: formattedDate,
        title: attempt.quizTitle || 'কুইজ পরীক্ষা',
        categoryBn: matchedCat?.nameBn || attempt.category || 'সাধারণ',
        percentage: attempt.percentage,
        score: attempt.score,
        totalQuestions: attempt.totalQuestions,
        timeSeconds: attempt.timeTakenSeconds,
        formattedTime: `${Math.floor(attempt.timeTakenSeconds / 60)}মিনিট ${attempt.timeTakenSeconds % 60}সে`,
      };
    });
  }, [filteredAttempts]);

  // Calculate Category-wise proficiency
  const categoryProficiencyData = useMemo(() => {
    const catMap: Record<
      string,
      {
        totalScorePct: number;
        count: number;
        totalCorrect: number;
        totalQuestions: number;
        nameBn: string;
        nameEn: string;
      }
    > = {};

    historyList.forEach((attempt) => {
      const catKey = attempt.category || 'all';
      if (!catMap[catKey]) {
        const matched = QUIZ_CATEGORIES.find((c) => c.id === catKey);
        catMap[catKey] = {
          totalScorePct: 0,
          count: 0,
          totalCorrect: 0,
          totalQuestions: 0,
          nameBn: matched?.nameBn || (catKey === 'all' ? 'সকল বিষয়' : catKey),
          nameEn: matched?.nameEn || catKey,
        };
      }
      catMap[catKey].totalScorePct += attempt.percentage || 0;
      catMap[catKey].count += 1;
      catMap[catKey].totalCorrect += attempt.score || 0;
      catMap[catKey].totalQuestions += attempt.totalQuestions || 0;
    });

    const result = Object.entries(catMap).map(([catId, data]) => {
      const avgPct = Math.round(data.totalScorePct / data.count);
      return {
        categoryId: catId,
        name: data.nameBn.length > 15 ? data.nameBn.slice(0, 14) + '...' : data.nameBn,
        fullName: data.nameBn,
        nameEn: data.nameEn,
        proficiency: avgPct,
        quizzesTaken: data.count,
        correct: data.totalCorrect,
        total: data.totalQuestions,
      };
    });

    // Sort by proficiency descending
    return result.sort((a, b) => b.proficiency - a.proficiency);
  }, [historyList]);

  // Determine strongest and weakest categories
  const bestCategory = categoryProficiencyData.length > 0 ? categoryProficiencyData[0] : null;
  const weakestCategory =
    categoryProficiencyData.length > 1
      ? categoryProficiencyData[categoryProficiencyData.length - 1]
      : null;

  // Proficiency Badge Title
  const getProficiencyTier = (pct: number) => {
    if (pct >= 85) return { label: 'এক্সপার্ট (Expert)', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800' };
    if (pct >= 70) return { label: 'উন্নত (Advanced)', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800' };
    if (pct >= 50) return { label: 'মাঝারি (Intermediate)', color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800' };
    return { label: 'অনুশীলন প্রয়োজন (Beginner)', color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800' };
  };

  const tier = getProficiencyTier(stats.avgScore);

  if (loading) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
        <div className="w-10 h-10 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          অ্যানালিটিক্স ডেটা লোড হচ্ছে...
        </p>
      </div>
    );
  }

  // Empty State
  if (historyList.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center animate-in fade-in">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-100 dark:border-indigo-800">
          <BarChart2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          এখনও কোনো পারফরম্যান্স ডেটা নেই
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
          কমপক্ষে একটি কুইজ সম্পন্ন করলেই Recharts দিয়ে তৈরি আপনার পারফরম্যান্স ট্রেন্ড, গড় স্কোর এবং বিষয়ভিত্তিক দক্ষতার বিস্তারিত অ্যানালিটিক্স গ্রাফ দেখতে পাবেন।
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartQuiz}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition cursor-pointer shadow-sm flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            এখনই কুইজ পরীক্ষা শুরু করুন
          </button>
          {!user && onOpenAuth && (
            <button
              onClick={onOpenAuth}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-xl transition cursor-pointer"
            >
              রেকর্ড সংরক্ষণের জন্য লগইন করুন
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Top Filter & Overview Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              কুইজ পারফরম্যান্স ড্যাশবোর্ড
            </h2>
            <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${tier.color}`}>
              {tier.label}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Recharts ভিত্তিক ইন্টারেক্টিভ পারফরম্যান্স বিশ্লেষণ ও বিষয়ভিত্তিক অগ্রগতি
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Time Filter Tabs */}
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setTimeFilter('all')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                timeFilter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              সকল সময়
            </button>
            <button
              onClick={() => setTimeFilter('30d')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                timeFilter === '30d'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              গত ৩০ দিন
            </button>
            <button
              onClick={() => setTimeFilter('7q')}
              className={`px-3 py-1 rounded-lg transition cursor-pointer ${
                timeFilter === '7q'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              শেষ ৭টি কুইজ
            </button>
          </div>

          {/* Category Filter Dropdown */}
          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="text-xs border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="all">সকল বিষয় (All Categories)</option>
            {QUIZ_CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
              <option key={c.id} value={c.id}>
                {c.nameBn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI Stats Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Total Quizzes */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
              মোট পরীক্ষা সম্পন্ন
            </p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {stats.totalQuizzes}টি
            </p>
          </div>
        </div>

        {/* Card 2: Average Score */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
              গড় স্কোর (Average)
            </p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {stats.avgScore}%
            </p>
          </div>
        </div>

        {/* Card 3: Highest Score */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex-shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
              সর্বোচ্চ অর্জন (Best)
            </p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {stats.bestScore}%
            </p>
          </div>
        </div>

        {/* Card 4: Accuracy & Correct Answers */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex-shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
              সঠিক উত্তর ও নিখুঁততা
            </p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {stats.totalCorrect}/{stats.totalQuestions} ({stats.accuracy}%)
            </p>
          </div>
        </div>
      </div>

      {/* Main Charts Section: Trends Over Time & Category Proficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CHART 1: Trends Over Time (Score History Area Chart) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  স্কোর ও পারফরম্যান্স ট্রেন্ড (Trends Over Time)
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  পরপর পরীক্ষাগুলোতে আপনার স্কোরের পরিবর্তন ও অগ্রগতি
                </p>
              </div>

              {/* Metric Toggle */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-[11px]">
                <button
                  onClick={() => setTrendMetric('percentage')}
                  className={`px-2 py-0.5 rounded-md transition cursor-pointer font-semibold ${
                    trendMetric === 'percentage'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  স্কোর (%)
                </button>
                <button
                  onClick={() => setTrendMetric('time')}
                  className={`px-2 py-0.5 rounded-md transition cursor-pointer font-semibold ${
                    trendMetric === 'time'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  সময় (সেকেন্ড)
                </button>
              </div>
            </div>

            {/* Recharts Area/Line Chart */}
            <div className="h-64 sm:h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trendChartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="timeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-slate-100 dark:stroke-slate-800"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: '#94a3b8' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={trendMetric === 'percentage' ? [0, 100] : ['auto', 'auto']}
                    tick={{ fontSize: 11, fill: '#94a3b8' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val) => (trendMetric === 'percentage' ? `${val}%` : `${val}s`)}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900/95 text-white p-3 rounded-xl shadow-xl border border-slate-700 text-xs backdrop-blur-sm space-y-1 z-50">
                            <p className="font-bold text-indigo-300">{data.title}</p>
                            <p className="text-[11px] text-slate-300">
                              বিষয়: <span className="text-white font-medium">{data.categoryBn}</span>
                            </p>
                            <p className="text-[11px] text-slate-300">
                              তারিখ: <span className="text-white">{data.date}</span>
                            </p>
                            <div className="pt-1 border-t border-slate-800 flex items-center justify-between gap-4 font-semibold">
                              <span>স্কোর: {data.score}/{data.totalQuestions} ({data.percentage}%)</span>
                              <span className="text-indigo-300">{data.formattedTime}</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey={trendMetric === 'percentage' ? 'percentage' : 'timeSeconds'}
                    stroke={trendMetric === 'percentage' ? '#6366f1' : '#8b5cf6'}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill={trendMetric === 'percentage' ? 'url(#scoreGradient)' : 'url(#timeGradient)'}
                    dot={{
                      r: 4,
                      fill: trendMetric === 'percentage' ? '#6366f1' : '#8b5cf6',
                      strokeWidth: 2,
                      stroke: '#ffffff',
                    }}
                    activeDot={{ r: 6, stroke: '#6366f1', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trend Insights Footer */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
              টার্গেট বেঞ্চমার্ক: ৮০% বা তার বেশি
            </span>
            <span>সর্বশেষ কুইজ: {filteredAttempts[0]?.percentage || 0}%</span>
          </div>
        </div>

        {/* CHART 2: Category-wise Proficiency (Bar Chart) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                বিষয়ভিত্তিক দক্ষতা (Category Proficiency)
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                প্রতিটি বিষয়ে আপনার সফলতার গড় হার (%)
              </p>
            </div>

            {/* Recharts Bar Chart */}
            <div className="h-64 sm:h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryProficiencyData}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-slate-100 dark:stroke-slate-800"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    tick={{ fontSize: 10, fill: '#94a3b8' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val) => `${val}%`}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fontSize: 11, fill: '#64748b' }}
                    axisLine={false}
                    tickLine={false}
                    width={85}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-slate-900/95 text-white p-2.5 rounded-xl shadow-xl border border-slate-700 text-xs backdrop-blur-sm space-y-1 z-50">
                            <p className="font-bold text-emerald-300">{data.fullName}</p>
                            <p className="text-slate-300">ইংরেজি: {data.nameEn}</p>
                            <div className="pt-1 border-t border-slate-800">
                              <p className="font-semibold text-white">গড় দক্ষতা: {data.proficiency}%</p>
                              <p className="text-[11px] text-slate-400">
                                পরীক্ষা দেওয়া হয়েছে: {data.quizzesTaken} বার ({data.correct}/{data.total} সঠিক)
                              </p>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="proficiency" radius={[0, 8, 8, 0]}>
                    {categoryProficiencyData.map((entry, index) => {
                      let color = '#10b981'; // emerald
                      if (entry.proficiency < 50) color = '#f43f5e'; // rose
                      else if (entry.proficiency < 75) color = '#f59e0b'; // amber
                      return <Cell key={`cell-${index}`} fill={color} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Proficiency Legend */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
              ৭৫%-১০০% (দক্ষ)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
              ৫০%-৭৪% (মধ্যম)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
              &lt;৫০% (উন্নতি দরকার)
            </span>
          </div>
        </div>
      </div>

      {/* Strengths & Actionable Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strongest Subject */}
        {bestCategory && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/80 flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-emerald-500 text-white flex-shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                আপনার সবচেয়ে শক্তিশালী বিষয়
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {bestCategory.fullName}
              </h4>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 mt-1">
                এই বিষয়ে আপনার গড় সফলতা <strong>{bestCategory.proficiency}%</strong> ({bestCategory.quizzesTaken}টি পরীক্ষা)। অসাধারণ পারফরম্যান্স বজায় রাখুন!
              </p>
            </div>
          </div>
        )}

        {/* Weakest Subject / Improvement Opportunity */}
        {weakestCategory && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-500 text-white flex-shrink-0 mt-0.5">
              <Flame className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                অনুশীলন ও উন্নতির সুযোগ
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {weakestCategory.fullName}
              </h4>
              <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mt-1">
                এখানে বর্তমান গড় সফলতা <strong>{weakestCategory.proficiency}%</strong>। আরও কয়েকটি কুইজ দিয়ে প্রস্তুতি আরও মজবুত করুন।
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action: Take New Quiz */}
      <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              আপনার স্কোর আরও উন্নত করতে চান?
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              বিভিন্ন বিষয়ের কাস্টম প্রশ্নসংখ্যা ও টাইমারসহ যেকোনো সময় নতুন পরীক্ষা শুরু করুন।
            </p>
          </div>
        </div>
        <button
          onClick={onStartQuiz}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-sm flex items-center justify-center gap-1.5 flex-shrink-0"
        >
          <span>নতুন কুইজ শুরু করুন</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
