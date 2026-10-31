import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth, db, handleFirestoreError, OperationType } from '../../lib/firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { CalendarEvent, EventPriority, EventStatus } from '../../types';
import {
  Calendar as CalendarIcon,
  Plus,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
  Circle,
  Trash2,
  Edit2,
  Search,
  Bell,
  Check,
  AlertCircle,
  Tag,
  CalendarCheck
} from 'lucide-react';

export const CalendarTool: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { user } = useAuth();

  // Navigation & View State
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDateStr, setSelectedDateStr] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [viewMode, setViewMode] = useState<'month' | 'agenda'>('month');

  // Events & Tasks state
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('10:00');
  const [priority, setPriority] = useState<EventPriority>('medium');
  const [category, setCategory] = useState<string>('কাজ (Work)');
  const [color, setColor] = useState<string>('indigo');

  // Notification status
  const [notificationStatus, setNotificationStatus] = useState<string>('default');

  // Check notification permission
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setNotificationStatus(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      const perm = await Notification.requestPermission();
      setNotificationStatus(perm);
      if (perm === 'granted') {
        new Notification('Bashar Smart Tools', {
          body: 'ক্যালেন্ডার ও টাস্ক নোটিফিকেশন সফলভাবে চালু করা হয়েছে!',
        });
      }
    }
  };

  // Real-Time listener for events (Cloud Firestore or Local Database)
  useEffect(() => {
    if (!user) {
      setEvents([]);
      setLoading(false);
      return;
    }

    // Local authenticated user
    if (!auth.currentUser) {
      const userKey = `bashar_events_${user.uid}`;
      const saved = localStorage.getItem(userKey);
      if (saved) {
        try {
          const items: CalendarEvent[] = JSON.parse(saved);
          items.sort((a, b) => (a.date + (a.startTime || '')).localeCompare(b.date + (b.startTime || '')));
          setEvents(items);
        } catch (e) {}
      } else {
        setEvents([]);
      }
      setLoading(false);
      return;
    }

    // Cloud Firestore user
    setLoading(true);
    const eventsPath = `users/${user.uid}/calendarEvents`;
    const q = query(collection(db, 'users', user.uid, 'calendarEvents'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: CalendarEvent[] = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<CalendarEvent, 'id'>),
        }));
        // Sort items by date & startTime
        items.sort((a, b) => (a.date + (a.startTime || '')).localeCompare(b.date + (b.startTime || '')));
        setEvents(items);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, eventsPath);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Calendar calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNamesBn = [
    'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
  ];

  const monthNamesEn = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const jumpToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDateStr(today.toISOString().split('T')[0]);
  };

  // Open modal for new event
  const openNewEventModal = (dateStr?: string) => {
    setEditingEventId(null);
    setTitle('');
    setDescription('');
    setEventDate(dateStr || selectedDateStr || new Date().toISOString().split('T')[0]);
    setStartTime('09:00');
    setEndTime('10:00');
    setPriority('medium');
    setCategory('কাজ (Work)');
    setColor('indigo');
    setIsModalOpen(true);
  };

  // Open modal for editing
  const openEditModal = (event: CalendarEvent) => {
    setEditingEventId(event.id);
    setTitle(event.title);
    setDescription(event.description || '');
    setEventDate(event.date);
    setStartTime(event.startTime || '09:00');
    setEndTime(event.endTime || '10:00');
    setPriority(event.priority);
    setCategory(event.category || 'কাজ (Work)');
    setColor(event.color || 'indigo');
    setIsModalOpen(true);
  };

  // Save or Update event
  const handleSaveEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      onOpenAuth();
      return;
    }

    if (!title.trim()) return;

    const userKey = `bashar_events_${user.uid}`;
    const nowIso = new Date().toISOString();

    try {
      if (editingEventId) {
        if (auth.currentUser) {
          const docRef = doc(db, 'users', user.uid, 'calendarEvents', editingEventId);
          await updateDoc(docRef, {
            title: title.trim(),
            description: description.trim(),
            date: eventDate,
            startTime,
            endTime,
            priority,
            category,
            color,
            updatedAt: nowIso,
          });
        } else {
          setEvents((prev) => {
            const next = prev.map((ev) =>
              ev.id === editingEventId
                ? {
                    ...ev,
                    title: title.trim(),
                    description: description.trim(),
                    date: eventDate,
                    startTime,
                    endTime,
                    priority,
                    category,
                    color,
                    updatedAt: nowIso,
                  }
                : ev
            );
            next.sort((a, b) => (a.date + (a.startTime || '')).localeCompare(b.date + (b.startTime || '')));
            try {
              localStorage.setItem(userKey, JSON.stringify(next));
            } catch (err) {}
            return next;
          });
        }
      } else {
        const newEventId = 'ev_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
        const newEvent: CalendarEvent = {
          id: newEventId,
          userId: user.uid,
          title: title.trim(),
          description: description.trim(),
          date: eventDate,
          startTime,
          endTime,
          priority,
          status: 'pending' as EventStatus,
          category,
          color,
          createdAt: nowIso,
          updatedAt: nowIso,
        };

        if (auth.currentUser) {
          const docRef = await addDoc(collection(db, 'users', user.uid, 'calendarEvents'), {
            userId: user.uid,
            title: newEvent.title,
            description: newEvent.description,
            date: newEvent.date,
            startTime: newEvent.startTime,
            endTime: newEvent.endTime,
            priority: newEvent.priority,
            status: newEvent.status,
            category: newEvent.category,
            color: newEvent.color,
            createdAt: newEvent.createdAt,
            updatedAt: newEvent.updatedAt,
          });
          newEvent.id = docRef.id;
        } else {
          setEvents((prev) => {
            const next = [...prev, newEvent];
            next.sort((a, b) => (a.date + (a.startTime || '')).localeCompare(b.date + (b.startTime || '')));
            try {
              localStorage.setItem(userKey, JSON.stringify(next));
            } catch (err) {}
            return next;
          });
        }
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error('Failed to save event:', err);
    }
  };

  // Toggle Event Status (Pending / Completed)
  const handleToggleStatus = async (event: CalendarEvent) => {
    if (!user) return;
    const nextStatus: EventStatus = event.status === 'completed' ? 'pending' : 'completed';
    const nowIso = new Date().toISOString();

    if (auth.currentUser) {
      try {
        const docRef = doc(db, 'users', user.uid, 'calendarEvents', event.id);
        await updateDoc(docRef, {
          status: nextStatus,
          updatedAt: nowIso,
        });
      } catch (err) {
        console.error('Failed to toggle event status:', err);
      }
    } else {
      const userKey = `bashar_events_${user.uid}`;
      setEvents((prev) => {
        const next = prev.map((ev) => (ev.id === event.id ? { ...ev, status: nextStatus, updatedAt: nowIso } : ev));
        try {
          localStorage.setItem(userKey, JSON.stringify(next));
        } catch (err) {}
        return next;
      });
    }
  };

  // Delete Event
  const handleDeleteEvent = async (eventId: string) => {
    if (!user) return;
    if (auth.currentUser) {
      try {
        await deleteDoc(doc(db, 'users', user.uid, 'calendarEvents', eventId));
      } catch (err) {
        console.error('Failed to delete event:', err);
      }
    } else {
      const userKey = `bashar_events_${user.uid}`;
      setEvents((prev) => {
        const next = prev.filter((ev) => ev.id !== eventId);
        try {
          localStorage.setItem(userKey, JSON.stringify(next));
        } catch (err) {}
        return next;
      });
    }
  };

  // Filter events
  const filteredEvents = events.filter((ev) => {
    const matchesSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPriority = priorityFilter === 'all' || ev.priority === priorityFilter;
    const matchesStatus = statusFilter === 'all' || ev.status === statusFilter;

    return matchesSearch && matchesPriority && matchesStatus;
  });

  const selectedDateEvents = filteredEvents.filter((ev) => ev.date === selectedDateStr);
  const todayStr = new Date().toISOString().split('T')[0];
  const todayEvents = events.filter((ev) => ev.date === todayStr);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 mb-2">
            <CalendarCheck className="w-3.5 h-3.5" />
            সময়সূচি ও কাজ পরিচালনা (Task & Calendar)
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Bashar Smart Calendar
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            দৈনিক, সাপ্তাহিক ও মাসিক সময়সূচি নির্ধারণ এবং টাস্ক ম্যানেজমেন্ট।
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {notificationStatus !== 'granted' && (
            <button
              onClick={requestNotificationPermission}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800 rounded-xl transition cursor-pointer"
              title="ব্রাউজার নোটিফিকেশন সক্রিয় করুন"
            >
              <Bell className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              নোটিফিকেশন সক্রিয় করুন
            </button>
          )}

          <button
            onClick={jumpToToday}
            className="px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition cursor-pointer"
          >
            আজকের দিন (Today)
          </button>

          <button
            onClick={() => (user ? openNewEventModal() : onOpenAuth())}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            নতুন কাজ যোগ করুন
          </button>
        </div>
      </div>

      {/* Auth Notice if guest */}
      {!user && (
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-amber-800 dark:text-amber-300 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <span>
              ক্যালেন্ডারে ইভেন্ট তৈরি ও ক্লাউড ডেটাবেজে সংরক্ষণের জন্য দয়া করে লগইন করুন।
            </span>
          </div>
          <button
            onClick={onOpenAuth}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition cursor-pointer"
          >
            লগইন করুন
          </button>
        </div>
      )}

      {/* Main Grid: Calendar Grid (Left) + Selected Day Tasks / Filters (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Calendar / Month View */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            {/* Month Header Nav */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {monthNamesBn[month]} {year}
                </h2>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {monthNamesEn[month]} {year}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevMonth}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition cursor-pointer"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekday Labels */}
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-xs text-slate-400 dark:text-slate-500 mb-2">
              <div>রবি (Sun)</div>
              <div>সোম (Mon)</div>
              <div>মঙ্গল (Tue)</div>
              <div>বুধ (Wed)</div>
              <div>বৃহঃ (Thu)</div>
              <div>শুক্র (Fri)</div>
              <div>শনি (Sat)</div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {/* Empty padding days for previous month */}
              {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
                <div key={`empty-${idx}`} className="h-20 sm:h-24 p-1 bg-slate-50/50 dark:bg-slate-800/20 rounded-xl"></div>
              ))}

              {/* Days of the current month */}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const dayNum = idx + 1;
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                const isToday = dateStr === todayStr;
                const isSelected = dateStr === selectedDateStr;
                const dayEventsList = filteredEvents.filter((ev) => ev.date === dateStr);

                return (
                  <div
                    key={dayNum}
                    onClick={() => setSelectedDateStr(dateStr)}
                    className={`h-20 sm:h-24 p-1.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/40 ring-2 ring-indigo-200 dark:ring-indigo-800'
                        : isToday
                        ? 'border-indigo-300 dark:border-indigo-700 bg-indigo-50/20 dark:bg-indigo-950/20'
                        : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                          isToday
                            ? 'bg-indigo-600 text-white'
                            : isSelected
                            ? 'text-indigo-600 dark:text-indigo-400'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {dayNum}
                      </span>
                      {dayEventsList.length > 0 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                          {dayEventsList.length}
                        </span>
                      )}
                    </div>

                    {/* Mini event tags */}
                    <div className="space-y-0.5 overflow-hidden">
                      {dayEventsList.slice(0, 2).map((ev) => (
                        <div
                          key={ev.id}
                          className={`text-[10px] font-medium px-1 py-0.5 rounded truncate ${
                            ev.status === 'completed'
                              ? 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 line-through'
                              : ev.priority === 'high'
                              ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300'
                              : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300'
                          }`}
                        >
                          {ev.title}
                        </div>
                      ))}
                      {dayEventsList.length > 2 && (
                        <div className="text-[9px] text-slate-400 dark:text-slate-500 font-medium pl-1">
                          +{dayEventsList.length - 2} আরও
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Today's Quick Summary Banner */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/60 dark:to-purple-950/60 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-between transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                {todayEvents.length}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">আজকের নির্ধারিত কাজ</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {todayEvents.filter((e) => e.status === 'completed').length} টি সম্পন্ন •{' '}
                  {todayEvents.filter((e) => e.status === 'pending').length} টি বাকি
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedDateStr(todayStr);
                openNewEventModal(todayStr);
              }}
              className="px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded-lg transition cursor-pointer"
            >
              + আজ কাজ যোগ করুন
            </button>
          </div>
        </div>

        {/* Right Column: Selected Date Details & Search */}
        <div className="lg:col-span-4 space-y-4">
          {/* Search & Filter box */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ইভেন্ট বা টাস্ক খুঁজুন..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="flex-1 text-xs border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
              >
                <option value="all">সকল প্রায়োরিটি</option>
                <option value="high">উচ্চ (High)</option>
                <option value="medium">মাঝারি (Medium)</option>
                <option value="low">সাধারণ (Low)</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 text-xs border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
              >
                <option value="all">সকল অবস্থা</option>
                <option value="pending">বাকি কাজ (Pending)</option>
                <option value="completed">সম্পন্ন (Completed)</option>
              </select>
            </div>
          </div>

          {/* Selected Date Task List */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                  {selectedDateStr === todayStr ? 'আজকের কাজ' : 'নির্বাচিত তারিখের কাজ'}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {new Date(selectedDateStr).toLocaleDateString('bn-BD', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <button
                onClick={() => openNewEventModal(selectedDateStr)}
                className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition cursor-pointer"
                title="যোগ করুন"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {loading ? (
              <div className="py-8 text-center text-slate-400">
                <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-xs">লোড হচ্ছে...</p>
              </div>
            ) : selectedDateEvents.length === 0 ? (
              <div className="py-8 text-center bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
                <CalendarIcon className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">এই তারিখে কোনো কাজ নেই</p>
                <button
                  onClick={() => openNewEventModal(selectedDateStr)}
                  className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  + নতুন কাজ তৈরি করুন
                </button>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {selectedDateEvents.map((ev) => {
                  const isDone = ev.status === 'completed';

                  return (
                    <div
                      key={ev.id}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-70'
                          : ev.priority === 'high'
                          ? 'bg-rose-50/50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <button
                          onClick={() => handleToggleStatus(ev)}
                          className="mt-0.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer"
                          aria-label={isDone ? 'Mark as pending' : 'Mark as complete'}
                        >
                          {isDone ? (
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </button>

                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug truncate ${
                              isDone ? 'line-through text-slate-400 dark:text-slate-500' : ''
                            }`}
                          >
                            {ev.title}
                          </h4>

                          {ev.description && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                              {ev.description}
                            </p>
                          )}

                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            {ev.startTime && (
                              <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                                <Clock className="w-3 h-3 text-slate-400" />
                                {ev.startTime}
                                {ev.endTime ? ` - ${ev.endTime}` : ''}
                              </span>
                            )}

                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                ev.priority === 'high'
                                  ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                                  : ev.priority === 'medium'
                                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                              }`}
                            >
                              {ev.priority === 'high'
                                ? 'উচ্চ'
                                : ev.priority === 'medium'
                                ? 'মাঝারি'
                                : 'সাধারণ'}
                            </span>

                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-medium">
                              {ev.category}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openEditModal(ev)}
                            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition cursor-pointer"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(ev.id)}
                            className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded transition cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL: ADD / EDIT EVENT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-white">
              <h3 className="font-bold text-lg">
                {editingEventId ? 'কাজ সম্পাদন করুন (Edit Task)' : 'নতুন সময়সূচি / কাজ যোগ করুন'}
              </h3>
              <p className="text-xs text-indigo-100 mt-0.5">
                ক্লাউড ডেটাবেজে সংরক্ষিত থাকবে এবং সময়মতো ট্র্যাক রাখা যাবে।
              </p>
            </div>

            <form onSubmit={handleSaveEvent} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  শিরোনাম (Title) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="যেমন: প্রজেক্ট মিটিং বা কুইজ প্রস্তুতি"
                  className="w-full px-3 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  বিবরণ (Description)
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="কাজের বিস্তারিত বিবরণ..."
                  className="w-full px-3 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    তারিখ (Date)
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    ক্যাটাগরি
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
                  >
                    <option value="কাজ (Work)">কাজ (Work)</option>
                    <option value="পড়াশোনা (Study)">পড়াশোনা (Study)</option>
                    <option value="ব্যক্তিগত (Personal)">ব্যক্তিগত (Personal)</option>
                    <option value="মিটিং (Meeting)">মিটিং (Meeting)</option>
                    <option value="ডেডলাইন (Deadline)">ডেডলাইন (Deadline)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    শুরুর সময়
                  </label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-2 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    শেষ সময়
                  </label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-2 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    প্রায়োরিটি
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as EventPriority)}
                    className="w-full px-2 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/50 font-semibold text-slate-800 dark:text-slate-100"
                  >
                    <option value="low">Low (সাধারণ)</option>
                    <option value="medium">Medium (মাঝারি)</option>
                    <option value="high">High (জরুরি)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition cursor-pointer"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition cursor-pointer"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
