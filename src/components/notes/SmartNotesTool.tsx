import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db, handleFirestoreError, OperationType } from '../../lib/firebase';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { SmartNote } from '../../types';
import {
  FileText,
  Plus,
  Search,
  Pin,
  PinOff,
  Trash2,
  Copy,
  Download,
  Archive,
  ArchiveRestore,
  Sparkles,
  Check,
  AlertCircle,
  Tag,
  Clock,
  Folder,
  Eye,
  Edit3
} from 'lucide-react';

const NOTE_COLORS = [
  { id: 'indigo', bg: 'bg-indigo-50/70', border: 'border-indigo-200', text: 'text-indigo-800', dot: 'bg-indigo-500' },
  { id: 'emerald', bg: 'bg-emerald-50/70', border: 'border-emerald-200', text: 'text-emerald-800', dot: 'bg-emerald-500' },
  { id: 'amber', bg: 'bg-amber-50/70', border: 'border-amber-200', text: 'text-amber-800', dot: 'bg-amber-500' },
  { id: 'rose', bg: 'bg-rose-50/70', border: 'border-rose-200', text: 'text-rose-800', dot: 'bg-rose-500' },
  { id: 'purple', bg: 'bg-purple-50/70', border: 'border-purple-200', text: 'text-purple-800', dot: 'bg-purple-500' },
  { id: 'slate', bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800', dot: 'bg-slate-500' },
];

const NOTE_CATEGORIES = ['সকল নোট', 'কাজের নোট', 'ব্যক্তিগত', 'আইডিয়া ও চিন্তা', 'পড়াশোনা ও রিসার্চ'];

export const SmartNotesTool: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { user } = useAuth();

  // Notes state
  const [notes, setNotes] = useState<SmartNote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  // Editor State
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('সকল নোট');
  const [selectedColor, setSelectedColor] = useState<string>('indigo');
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [isArchived, setIsArchived] = useState<boolean>(false);

  // Status & Filters
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showArchivedOnly, setShowArchivedOnly] = useState<boolean>(false);

  const autoSaveTimerRef = useRef<any>(null);

  // Real-time Firestore sync
  useEffect(() => {
    if (!user) {
      // Local fallback drafts
      const savedLocal = localStorage.getItem('bashar_notes_local');
      if (savedLocal) {
        try {
          const parsed = JSON.parse(savedLocal);
          setNotes(parsed);
          if (parsed.length > 0 && !activeNoteId) {
            loadNoteIntoEditor(parsed[0]);
          }
        } catch (e) {}
      }
      setLoading(false);
      return;
    }

    setLoading(true);
    const notesPath = `users/${user.uid}/notes`;
    const q = query(collection(db, 'users', user.uid, 'notes'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: SmartNote[] = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<SmartNote, 'id'>),
        }));

        // Sort: Pinned first, then by updatedAt descending
        items.sort((a, b) => {
          if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
          return (b.updatedAt || '').localeCompare(a.updatedAt || '');
        });

        setNotes(items);
        setLoading(false);

        // If no active note is loaded, select the first one
        if (items.length > 0 && !activeNoteId) {
          loadNoteIntoEditor(items[0]);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, notesPath);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Load a note into editor
  const loadNoteIntoEditor = (note: SmartNote) => {
    setActiveNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category || 'সকল নোট');
    setSelectedColor(note.color || 'indigo');
    setIsPinned(note.isPinned || false);
    setIsArchived(note.isArchived || false);
    setSaveStatus('saved');
  };

  // Create a brand new note
  const handleCreateNewNote = async () => {
    if (!user) {
      onOpenAuth();
      return;
    }

    const newNoteData: Omit<SmartNote, 'id'> = {
      userId: user.uid,
      title: 'নতুন শিরোনামহীন নোট',
      content: '',
      category: 'সকল নোট',
      color: 'indigo',
      isPinned: false,
      isArchived: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      setSaveStatus('saving');
      const docRef = await addDoc(collection(db, 'users', user.uid, 'notes'), newNoteData);
      const createdNote: SmartNote = {
        id: docRef.id,
        ...newNoteData,
      };
      loadNoteIntoEditor(createdNote);
      setSaveStatus('saved');
    } catch (err) {
      console.error('Failed to create note:', err);
      setSaveStatus('error');
    }
  };

  // Debounced auto-save function
  useEffect(() => {
    if (!activeNoteId || !user) return;

    setSaveStatus('saving');

    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    autoSaveTimerRef.current = setTimeout(async () => {
      try {
        const noteRef = doc(db, 'users', user.uid, 'notes', activeNoteId);
        await updateDoc(noteRef, {
          title: title.trim() || 'শিরোনামহীন নোট',
          content,
          category,
          color: selectedColor,
          isPinned,
          isArchived,
          updatedAt: new Date().toISOString(),
        });
        setSaveStatus('saved');
      } catch (err) {
        console.error('Auto-save error:', err);
        setSaveStatus('error');
      }
    }, 800);

    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [title, content, category, selectedColor, isPinned, isArchived]);

  // Toggle Pin
  const handleTogglePin = async () => {
    const nextPin = !isPinned;
    setIsPinned(nextPin);
    if (activeNoteId && user) {
      try {
        await updateDoc(doc(db, 'users', user.uid, 'notes', activeNoteId), {
          isPinned: nextPin,
          updatedAt: new Date().toISOString(),
        });
      } catch (e) {}
    }
  };

  // Toggle Archive
  const handleToggleArchive = async () => {
    const nextArchive = !isArchived;
    setIsArchived(nextArchive);
    if (activeNoteId && user) {
      try {
        await updateDoc(doc(db, 'users', user.uid, 'notes', activeNoteId), {
          isArchived: nextArchive,
          updatedAt: new Date().toISOString(),
        });
      } catch (e) {}
    }
  };

  // Delete note
  const handleDeleteNote = async (idToDelete: string) => {
    if (!user) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'notes', idToDelete));
      if (activeNoteId === idToDelete) {
        const remaining = notes.filter((n) => n.id !== idToDelete);
        if (remaining.length > 0) {
          loadNoteIntoEditor(remaining[0]);
        } else {
          setActiveNoteId(null);
          setTitle('');
          setContent('');
        }
      }
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  // Duplicate note
  const handleDuplicateNote = async () => {
    if (!user || !activeNoteId) return;
    try {
      const duplicatedData = {
        userId: user.uid,
        title: `${title} (কপি)`,
        content,
        category,
        color: selectedColor,
        isPinned: false,
        isArchived: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const docRef = await addDoc(collection(db, 'users', user.uid, 'notes'), duplicatedData);
      loadNoteIntoEditor({ id: docRef.id, ...duplicatedData });
    } catch (e) {}
  };

  // Export note as text or markdown file
  const handleExportNote = () => {
    const blob = new Blob([`${title}\n\n${content}`], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_') || 'note'}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Word and character counts
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;

  // Filter notes
  const filteredNotes = notes.filter((n) => {
    if (showArchivedOnly) {
      if (!n.isArchived) return false;
    } else {
      if (n.isArchived) return false;
    }

    if (selectedCategory !== 'all' && n.category !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            স্মার্ট নোট তৈরি, সম্পাদনা ও সংরক্ষণ (Smart Notes)
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Bashar Smart Notes
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            অটো-সেভ, পিন, ক্যাটাগরি, তাৎক্ষণিক সার্চ এবং ক্লাউড ব্যাকআপ সম্বলিত আধুনিক নোটপ্যাড।
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowArchivedOnly(!showArchivedOnly)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
              showArchivedOnly
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Archive className="w-3.5 h-3.5" />
            {showArchivedOnly ? 'সকল নোট দেখুন' : 'আর্কাইভকৃত নোট'}
          </button>

          <button
            onClick={handleCreateNewNote}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            নতুন নোট তৈরি
          </button>
        </div>
      </div>

      {!user && (
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-amber-800 dark:text-amber-200 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <span>নোটগুলো ক্লাউডে স্থায়ীভাবে সেভ ও যেকোনো ডিভাইস থেকে অ্যাক্সেস করতে লগইন করুন।</span>
          </div>
          <button
            onClick={onOpenAuth}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition cursor-pointer"
          >
            লগইন করুন
          </button>
        </div>
      )}

      {/* Main 2-Column Split: Sidebar Notes List (Left) + Active Note Editor (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Notes Sidebar */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-4 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="নোট খুঁজুন (শিরোনাম বা টেক্সট)..."
              className="w-full pl-10 pr-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              সকল ({notes.length})
            </button>
            {NOTE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notes List */}
          <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {loading ? (
              <div className="py-12 text-center text-slate-400">
                <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-xs">নোট লোড হচ্ছে...</p>
              </div>
            ) : filteredNotes.length === 0 ? (
              <div className="py-12 text-center bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 p-4">
                <FileText className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">কোনো নোট পাওয়া যায়নি</p>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">উপরে '+ নতুন নোট তৈরি' বাটনে ক্লিক করুন।</p>
              </div>
            ) : (
              filteredNotes.map((note) => {
                const isActive = activeNoteId === note.id;
                const colorConfig =
                  NOTE_COLORS.find((c) => c.id === note.color) || NOTE_COLORS[0];

                return (
                  <div
                    key={note.id}
                    onClick={() => loadNoteIntoEditor(note)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer relative ${
                      isActive
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 shadow-xs ring-2 ring-indigo-200/50 dark:ring-indigo-800/40'
                        : 'border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50/60 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colorConfig.dot}`} />
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                          {note.title || 'শিরোনামহীন নোট'}
                        </h4>
                      </div>

                      {note.isPinned && (
                        <Pin className="w-3.5 h-3.5 text-amber-500 fill-amber-500 flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {note.content || 'খালি নোট...'}
                    </p>

                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500">
                      <span>{note.category || 'নোট'}</span>
                      <span>
                        {new Date(note.updatedAt || note.createdAt).toLocaleDateString('bn-BD', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Active Note Editor */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-6 space-y-4">
          {activeNoteId ? (
            <>
              {/* Editor Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                {/* Auto-save Status Indicator */}
                <div className="flex items-center gap-2 text-xs">
                  {saveStatus === 'saving' && (
                    <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      সংরক্ষণ করা হচ্ছে...
                    </span>
                  )}
                  {saveStatus === 'saved' && (
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ক্লাউডে সংরক্ষিত (Saved)
                    </span>
                  )}
                  {saveStatus === 'error' && (
                    <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      সংরক্ষণ ব্যর্থ
                    </span>
                  )}
                </div>

                {/* Color Selector */}
                <div className="flex items-center gap-1.5">
                  {NOTE_COLORS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedColor(c.id)}
                      className={`w-5 h-5 rounded-full ${c.dot} transition cursor-pointer ${
                        selectedColor === c.id ? 'ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-slate-900 scale-110' : ''
                      }`}
                      title={c.id}
                    />
                  ))}
                </div>

                {/* Actions Toolbar */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleTogglePin}
                    className={`p-2 rounded-xl transition cursor-pointer ${
                      isPinned
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400'
                        : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={isPinned ? 'আনপিন করুন' : 'উপরে পিন করুন'}
                  >
                    {isPinned ? <Pin className="w-4 h-4 fill-amber-500" /> : <Pin className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleToggleArchive}
                    className="p-2 rounded-xl text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition cursor-pointer"
                    title={isArchived ? 'আর্কাইভ থেকে ফিরিয়ে আনুন' : 'আর্কাইভে পাঠান'}
                  >
                    {isArchived ? <ArchiveRestore className="w-4 h-4" /> : <Archive className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleDuplicateNote}
                    className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition cursor-pointer"
                    title="ডুপ্লিকেট নোট"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleExportNote}
                    className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition cursor-pointer"
                    title="ডাউনলোড (.md)"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDeleteNote(activeNoteId)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition cursor-pointer"
                    title="মুছে ফেলুন"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title Input */}
              <div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="নোটের শিরোনাম লিখুন..."
                  className="w-full text-xl sm:text-2xl font-bold text-slate-900 dark:text-white border-none focus:outline-none placeholder-slate-300 dark:placeholder-slate-600 py-1 bg-transparent"
                />
              </div>

              {/* Category selector row */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">ক্যাটাগরি:</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="text-xs border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none"
                >
                  {NOTE_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Content Textarea */}
              <div>
                <textarea
                  rows={14}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="এখানে আপনার নোট, চিন্তা, চেকলিস্ট বা মিটিংয়ের সারাংশ লিখুন..."
                  className="w-full text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed border-none focus:outline-none placeholder-slate-300 dark:placeholder-slate-600 resize-none font-sans bg-transparent"
                />
              </div>

              {/* Word & Character counts */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500">
                <div className="flex items-center gap-4">
                  <span>শব্দ সংখ্যা: <strong className="text-slate-600 dark:text-slate-300">{wordCount}</strong></span>
                  <span>অক্ষর সংখ্যা: <strong className="text-slate-600 dark:text-slate-300">{charCount}</strong></span>
                </div>
                <div>
                  Markdown & টেক্সট সমর্থিত
                </div>
              </div>
            </>
          ) : (
            <div className="py-24 text-center">
              <FileText className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">কোনো নোট নির্বাচিত নেই</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 max-w-xs mx-auto mt-1 mb-4">
                বাম পাশের তালিকা থেকে একটি নোট বেছে নিন অথবা নতুন নোট তৈরি করুন।
              </p>
              <button
                onClick={handleCreateNewNote}
                className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition cursor-pointer"
              >
                + নতুন নোট তৈরি করুন
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
