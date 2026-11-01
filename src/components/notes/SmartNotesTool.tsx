import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth, db, handleFirestoreError, OperationType } from '../../lib/firebase';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { SmartNote, NoteFolder } from '../../types';
import {
  FileText,
  Plus,
  Search,
  Pin,
  Trash2,
  Copy,
  Download,
  FileDown,
  Share2,
  Archive,
  ArchiveRestore,
  Sparkles,
  Check,
  AlertCircle,
  Tag,
  Folder,
  Hash,
  X,
  Edit2,
  Layers,
  Filter,
  CheckCircle2,
  SlidersHorizontal,
  FileQuestion,
  RotateCcw,
  Inbox,
  Mic,
  MicOff,
  Radio,
  CheckSquare,
  Square,
  ChevronDown,
  Tags,
  Globe,
  Volume2
} from 'lucide-react';

const NOTE_COLORS = [
  { id: 'indigo', bg: 'bg-indigo-50/70 dark:bg-indigo-950/30', border: 'border-indigo-200 dark:border-indigo-800', text: 'text-indigo-800 dark:text-indigo-300', dot: 'bg-indigo-500' },
  { id: 'emerald', bg: 'bg-emerald-50/70 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-800', text: 'text-emerald-800 dark:text-emerald-300', dot: 'bg-emerald-500' },
  { id: 'amber', bg: 'bg-amber-50/70 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-800', text: 'text-amber-800 dark:text-amber-300', dot: 'bg-amber-500' },
  { id: 'rose', bg: 'bg-rose-50/70 dark:bg-rose-950/30', border: 'border-rose-200 dark:border-rose-800', text: 'text-rose-800 dark:text-rose-300', dot: 'bg-rose-500' },
  { id: 'purple', bg: 'bg-purple-50/70 dark:bg-purple-950/30', border: 'border-purple-200 dark:border-purple-800', text: 'text-purple-800 dark:text-purple-300', dot: 'bg-purple-500' },
  { id: 'slate', bg: 'bg-slate-50 dark:bg-slate-800/60', border: 'border-slate-200 dark:border-slate-700', text: 'text-slate-800 dark:text-slate-300', dot: 'bg-slate-500' },
];

const FOLDER_COLORS = [
  { id: 'indigo', label: 'নীল (Indigo)', dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', badge: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' },
  { id: 'emerald', label: 'সবুজ (Green)', dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' },
  { id: 'amber', label: 'হলুদ (Amber)', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', badge: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
  { id: 'rose', label: 'লাল (Rose)', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', badge: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800' },
  { id: 'purple', label: 'বেগুনি (Purple)', dot: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800' },
  { id: 'teal', label: 'টিয়াল (Teal)', dot: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', badge: 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800' },
];

const DEFAULT_FOLDERS: Array<{ name: string; color: string }> = [
  { name: 'কাজের নোট (Work)', color: 'indigo' },
  { name: 'ব্যক্তিগত (Personal)', color: 'emerald' },
  { name: 'পড়াশোনা ও প্রস্তুতি (Study)', color: 'amber' },
  { name: 'আইডিয়া ও পরিকল্পনা (Ideas)', color: 'purple' },
];

const PRESET_CATEGORIES = [
  'কাজের নোট',
  'ব্যক্তিগত',
  'পড়াশোনা ও রিসার্চ',
  'আইডিয়া ও চিন্তা',
  'জরুরি',
  'পরিকল্পনা',
  'ফাইন্যান্স ও বাজেট',
  'প্রজেক্ট',
];

export type SearchScope = 'all' | 'title' | 'content';

// Helper to highlight matching characters in strings
const highlightMatch = (text: string, queryStr: string) => {
  if (!queryStr.trim() || !text) return text;
  try {
    const escaped = queryStr.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === queryStr.trim().toLowerCase() ? (
            <mark
              key={i}
              className="bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100 font-bold px-0.5 rounded"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  } catch (e) {
    return text;
  }
};

// Helper to extract a relevant snippet around the match
const getSnippetWithMatch = (fullContent: string, queryStr: string, maxLength = 100) => {
  if (!fullContent) return 'খালি নোট...';
  if (!queryStr.trim()) {
    return fullContent.length > maxLength ? fullContent.slice(0, maxLength) + '...' : fullContent;
  }

  const q = queryStr.toLowerCase().trim();
  const lower = fullContent.toLowerCase();
  const matchIndex = lower.indexOf(q);

  if (matchIndex === -1) {
    return fullContent.length > maxLength ? fullContent.slice(0, maxLength) + '...' : fullContent;
  }

  const start = Math.max(0, matchIndex - 30);
  const end = Math.min(fullContent.length, matchIndex + q.length + 55);
  let snippet = fullContent.slice(start, end);

  if (start > 0) snippet = '...' + snippet;
  if (end < fullContent.length) snippet = snippet + '...';
  return snippet;
};

export const SmartNotesTool: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { user } = useAuth();

  // Notes state
  const [notes, setNotes] = useState<SmartNote[]>([]);
  const [folders, setFolders] = useState<NoteFolder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  // Active Editor State
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('সকল নোট');
  const [categories, setCategories] = useState<string[]>([]);
  const [folderId, setFolderId] = useState<string>('');
  const [folderName, setFolderName] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('indigo');
  const [isPinned, setIsPinned] = useState<boolean>(false);
  const [isArchived, setIsArchived] = useState<boolean>(false);
  const [archivedAt, setArchivedAt] = useState<string | undefined>(undefined);

  // Tag & Multi-select Category Input in Editor
  const [newTagInput, setNewTagInput] = useState<string>('');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const [newCustomCategoryInput, setNewCustomCategoryInput] = useState<string>('');

  // Speech Recognition (Voice-to-Text) State
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speechLang, setSpeechLang] = useState<'bn-BD' | 'en-US'>('bn-BD');
  const [speechTarget, setSpeechTarget] = useState<'content' | 'title'>('content');
  const [speechInterim, setSpeechInterim] = useState<string>('');
  const recognitionRef = useRef<any>(null);

  // Status & Real-time Filters
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchScope, setSearchScope] = useState<SearchScope>('all'); // 'all', 'title', 'content'
  const [selectedFolderFilter, setSelectedFolderFilter] = useState<string>('all'); // 'all', 'pinned', 'archived', 'uncategorized', or folderId
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState<string[]>([]);
  const [selectedTagFilters, setSelectedTagFilters] = useState<string[]>([]);

  // Toast feedback state with Undo option
  const [toast, setToast] = useState<{
    id: string;
    message: string;
    undoAction?: () => void;
  } | null>(null);

  // Folder Management Modals / Forms
  const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>('');
  const [newFolderColor, setNewFolderColor] = useState<string>('indigo');
  const [editingFolderId, setEditingFolderId] = useState<string | null>(null);
  const [editFolderName, setEditFolderName] = useState<string>('');
  const [showFolderSidebar, setShowFolderSidebar] = useState<boolean>(true);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const autoSaveTimerRef = useRef<any>(null);
  const toastTimeoutRef = useRef<any>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const exportMenuRef = useRef<HTMLDivElement>(null);

  // Markdown Export & Sharing State
  const [isExportMenuOpen, setIsExportMenuOpen] = useState<boolean>(false);
  const [isCopiedMarkdown, setIsCopiedMarkdown] = useState<boolean>(false);

  // Show Toast helper
  const showToast = (message: string, undoAction?: () => void) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({
      id: Date.now().toString(),
      message,
      undoAction,
    });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Close category dropdown & export menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(e.target as Node)
      ) {
        setIsCategoryDropdownOpen(false);
      }
      if (
        exportMenuRef.current &&
        !exportMenuRef.current.contains(e.target as Node)
      ) {
        setIsExportMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Global Keyboard Shortcut: '/' to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (e.key === '/' && targetTag !== 'input' && targetTag !== 'textarea') {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Real-time Firestore sync or Local User database sync for Notes
  useEffect(() => {
    if (!user) {
      // Local fallback drafts for guests
      const savedLocalNotes = localStorage.getItem('bashar_notes_local');
      if (savedLocalNotes) {
        try {
          const parsed: SmartNote[] = JSON.parse(savedLocalNotes);
          setNotes(parsed);
          if (parsed.length > 0 && !activeNoteId) {
            loadNoteIntoEditor(parsed[0]);
          }
        } catch (e) {}
      } else {
        setNotes([]);
      }

      const savedLocalFolders = localStorage.getItem('bashar_folders_local');
      if (savedLocalFolders) {
        try {
          setFolders(JSON.parse(savedLocalFolders));
        } catch (e) {}
      } else {
        const initFolders: NoteFolder[] = DEFAULT_FOLDERS.map((f, i) => ({
          id: `folder_default_${i}`,
          userId: 'guest',
          name: f.name,
          color: f.color,
          createdAt: new Date().toISOString(),
        }));
        setFolders(initFolders);
        localStorage.setItem('bashar_folders_local', JSON.stringify(initFolders));
      }

      setLoading(false);
      return;
    }

    // Local authenticated user
    if (!auth.currentUser) {
      const userKey = `bashar_notes_${user.uid}`;
      const savedUserNotes = localStorage.getItem(userKey);
      if (savedUserNotes) {
        try {
          const parsed: SmartNote[] = JSON.parse(savedUserNotes);
          parsed.sort((a, b) => {
            if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
            return (b.updatedAt || '').localeCompare(a.updatedAt || '');
          });
          setNotes(parsed);
          if (parsed.length > 0 && !activeNoteId) {
            loadNoteIntoEditor(parsed[0]);
          }
        } catch (e) {}
      } else {
        setNotes([]);
      }

      const folderKey = `bashar_folders_${user.uid}`;
      const savedUserFolders = localStorage.getItem(folderKey);
      if (savedUserFolders) {
        try {
          setFolders(JSON.parse(savedUserFolders));
        } catch (e) {}
      } else {
        const initFolders: NoteFolder[] = DEFAULT_FOLDERS.map((f, i) => ({
          id: `folder_${Date.now()}_${i}`,
          userId: user.uid,
          name: f.name,
          color: f.color,
          createdAt: new Date().toISOString(),
        }));
        setFolders(initFolders);
        localStorage.setItem(folderKey, JSON.stringify(initFolders));
      }

      setLoading(false);
      return;
    }

    // Cloud Firestore user
    setLoading(true);
    const notesPath = `users/${user.uid}/notes`;
    const notesQuery = query(collection(db, 'users', user.uid, 'notes'));
    const foldersQuery = query(collection(db, 'users', user.uid, 'folders'));

    // Sync Folders
    const unsubscribeFolders = onSnapshot(
      foldersQuery,
      (snapshot) => {
        if (snapshot.empty) {
          DEFAULT_FOLDERS.forEach(async (f) => {
            try {
              await addDoc(collection(db, 'users', user.uid, 'folders'), {
                userId: user.uid,
                name: f.name,
                color: f.color,
                createdAt: new Date().toISOString(),
              });
            } catch (err) {}
          });
        } else {
          const items: NoteFolder[] = snapshot.docs.map((d) => ({
            id: d.id,
            ...(d.data() as Omit<NoteFolder, 'id'>),
          }));
          items.sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
          setFolders(items);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, `users/${user.uid}/folders`);
      }
    );

    // Sync Notes
    const unsubscribeNotes = onSnapshot(
      notesQuery,
      (snapshot) => {
        const items: SmartNote[] = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<SmartNote, 'id'>),
        }));

        items.sort((a, b) => {
          if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
          return (b.updatedAt || '').localeCompare(a.updatedAt || '');
        });

        setNotes(items);
        setLoading(false);

        if (items.length > 0 && !activeNoteId) {
          loadNoteIntoEditor(items[0]);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, notesPath);
      }
    );

    return () => {
      unsubscribeFolders();
      unsubscribeNotes();
    };
  }, [user]);

  // Load a note into editor
  const loadNoteIntoEditor = (note: SmartNote) => {
    setActiveNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category || 'সাধারণ নোট');
    const noteCategories = note.categories && note.categories.length > 0
      ? note.categories
      : (note.category ? [note.category] : ['সাধারণ নোট']);
    setCategories(noteCategories);
    setFolderId(note.folderId || '');
    setFolderName(note.folderName || '');
    setTags(note.tags || []);
    setSelectedColor(note.color || 'indigo');
    setIsPinned(note.isPinned || false);
    setIsArchived(note.isArchived || false);
    setArchivedAt(note.archivedAt);
    setSaveStatus('saved');
  };

  // Create a brand new note
  const handleCreateNewNote = async (customInitialTitle?: string) => {
    if (!user) {
      onOpenAuth();
      return;
    }

    const activeFolderObj = folders.find((f) => f.id === selectedFolderFilter);
    const initialFolderId = activeFolderObj ? activeFolderObj.id : '';
    const initialFolderName = activeFolderObj ? activeFolderObj.name : '';

    const newNoteData: SmartNote = {
      id: 'note_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
      userId: user.uid,
      title: customInitialTitle || 'নতুন শিরোনামহীন নোট',
      content: '',
      category: initialFolderName || 'সাধারণ নোট',
      categories: initialFolderName ? [initialFolderName] : ['সাধারণ নোট'],
      folderId: initialFolderId,
      folderName: initialFolderName,
      tags: selectedTagFilters.length > 0 ? [...selectedTagFilters] : [],
      color: 'indigo',
      isPinned: false,
      isArchived: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (auth.currentUser) {
      try {
        setSaveStatus('saving');
        const docRef = await addDoc(collection(db, 'users', user.uid, 'notes'), {
          userId: newNoteData.userId,
          title: newNoteData.title,
          content: newNoteData.content,
          category: newNoteData.category,
          categories: newNoteData.categories,
          folderId: newNoteData.folderId,
          folderName: newNoteData.folderName,
          tags: newNoteData.tags,
          color: newNoteData.color,
          isPinned: newNoteData.isPinned,
          isArchived: newNoteData.isArchived,
          createdAt: newNoteData.createdAt,
          updatedAt: newNoteData.updatedAt,
        });
        newNoteData.id = docRef.id;
      } catch (err) {
        console.error('Failed to create note in Cloud:', err);
      }
    } else {
      const userKey = `bashar_notes_${user.uid}`;
      const updated = [newNoteData, ...notes];
      setNotes(updated);
      try {
        localStorage.setItem(userKey, JSON.stringify(updated));
      } catch (e) {}
    }

    if (selectedFolderFilter === 'archived') {
      setSelectedFolderFilter('all');
    }

    loadNoteIntoEditor(newNoteData);
    setSaveStatus('saved');
  };

  // Debounced auto-save function
  useEffect(() => {
    if (!activeNoteId || !user) return;

    setSaveStatus('saving');

    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    autoSaveTimerRef.current = setTimeout(async () => {
      const updatedTime = new Date().toISOString();
      const updatedTitle = title.trim() || 'শিরোনামহীন নোট';
      const mainCategory = categories.length > 0 ? categories[0] : (category || 'সাধারণ নোট');

      if (auth.currentUser) {
        try {
          const noteRef = doc(db, 'users', user.uid, 'notes', activeNoteId);
          await updateDoc(noteRef, {
            title: updatedTitle,
            content,
            category: mainCategory,
            categories,
            folderId,
            folderName,
            tags,
            color: selectedColor,
            isPinned,
            isArchived,
            archivedAt: archivedAt || null,
            updatedAt: updatedTime,
          });
          setSaveStatus('saved');
        } catch (err) {
          console.error('Auto-save error:', err);
          setSaveStatus('error');
        }
      } else {
        const userKey = `bashar_notes_${user.uid}`;
        setNotes((prevNotes) => {
          const next = prevNotes.map((n) =>
            n.id === activeNoteId
              ? {
                  ...n,
                  title: updatedTitle,
                  content,
                  category: mainCategory,
                  categories,
                  folderId,
                  folderName,
                  tags,
                  color: selectedColor,
                  isPinned,
                  isArchived,
                  archivedAt,
                  updatedAt: updatedTime,
                }
              : n
          );
          try {
            localStorage.setItem(userKey, JSON.stringify(next));
          } catch (e) {}
          return next;
        });
        setSaveStatus('saved');
      }
    }, 700);

    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [title, content, category, categories, folderId, folderName, tags, selectedColor, isPinned, isArchived, archivedAt]);

  // Speech Recognition (Voice-to-Text) Handler
  const toggleSpeechRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      showToast('আপনার ব্রাউজার Web Speech Recognition সমর্থন করে না। Chrome বা Edge ব্রাউজার ব্যবহার করুন।');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
      setIsListening(false);
      setSpeechInterim('');
      showToast('ভয়েস টাইপিং সম্পন্ন হয়েছে');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = speechLang;

      recognition.onstart = () => {
        setIsListening(true);
        setSpeechInterim('');
        showToast(speechLang === 'bn-BD' ? '🎤 কথা বলুন... রেকর্ড হচ্ছে' : '🎤 Listening... Speak now');
      };

      recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcriptChunk = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcriptChunk;
          } else {
            interimTranscript += transcriptChunk;
          }
        }

        setSpeechInterim(interimTranscript);

        if (finalTranscript) {
          const cleanFinal = finalTranscript.trim();
          if (cleanFinal) {
            if (speechTarget === 'title') {
              setTitle((prev) => (prev ? `${prev} ${cleanFinal}` : cleanFinal));
            } else {
              setContent((prev) => (prev ? `${prev} ${cleanFinal}` : cleanFinal));
            }
          }
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setSpeechInterim('');
        if (event.error === 'not-allowed') {
          showToast('মাইক্রোফোন ব্যবহারের অনুমতি দেওয়া হয়নি। অনুগ্রহ করে অনুমতি দিন।');
        } else if (event.error !== 'no-speech') {
          showToast(`ভয়েস টাইপিং ত্রুটি: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
        setSpeechInterim('');
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setIsListening(false);
      showToast('ভয়েস টাইপিং চালু করতে সমস্যা হয়েছে');
    }
  };

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  // Dedicated Archive or Restore Function
  const handleSetNoteArchive = async (targetNoteId: string, shouldArchive: boolean) => {
    if (!user) return;

    const timeStamp = shouldArchive ? new Date().toISOString() : null;

    if (targetNoteId === activeNoteId) {
      setIsArchived(shouldArchive);
      setArchivedAt(timeStamp || undefined);
    }

    if (auth.currentUser) {
      try {
        const noteRef = doc(db, 'users', user.uid, 'notes', targetNoteId);
        await updateDoc(noteRef, {
          isArchived: shouldArchive,
          archivedAt: timeStamp,
          updatedAt: new Date().toISOString(),
        });
      } catch (err) {
        console.error('Error toggling archive:', err);
      }
    } else {
      const userKey = `bashar_notes_${user.uid}`;
      setNotes((prev) => {
        const next = prev.map((n) =>
          n.id === targetNoteId
            ? { ...n, isArchived: shouldArchive, archivedAt: timeStamp || undefined }
            : n
        );
        try {
          localStorage.setItem(userKey, JSON.stringify(next));
        } catch (e) {}
        return next;
      });
    }

    if (shouldArchive) {
      showToast('নোটটি সফলভাবে আর্কাইভে স্থানান্তর করা হয়েছে', () => {
        handleSetNoteArchive(targetNoteId, false);
      });

      if (selectedFolderFilter !== 'archived' && targetNoteId === activeNoteId) {
        const remainingActive = notes.filter((n) => !n.isArchived && n.id !== targetNoteId);
        if (remainingActive.length > 0) {
          loadNoteIntoEditor(remainingActive[0]);
        }
      }
    } else {
      showToast('নোটটি সক্রিয় তালিকায় ফিরিয়ে আনা হয়েছে (Restored)', () => {
        handleSetNoteArchive(targetNoteId, true);
      });

      if (selectedFolderFilter === 'archived' && targetNoteId === activeNoteId) {
        const remainingArchived = notes.filter((n) => n.isArchived && n.id !== targetNoteId);
        if (remainingArchived.length > 0) {
          loadNoteIntoEditor(remainingArchived[0]);
        }
      }
    }
  };

  // Folder Assignment
  const handleAssignFolder = (targetFolderId: string) => {
    setFolderId(targetFolderId);
    if (!targetFolderId) {
      setFolderName('');
    } else {
      const matched = folders.find((f) => f.id === targetFolderId);
      if (matched) {
        setFolderName(matched.name);
      }
    }
  };

  // Multi-Select Category Handlers
  const handleToggleCategory = (catName: string) => {
    const trimmed = catName.trim();
    if (!trimmed) return;
    if (categories.includes(trimmed)) {
      setCategories(categories.filter((c) => c !== trimmed));
    } else {
      setCategories([...categories, trimmed]);
    }
  };

  const handleAddCustomCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = newCustomCategoryInput.trim();
    if (!clean) return;
    if (!categories.includes(clean)) {
      setCategories([...categories, clean]);
    }
    setNewCustomCategoryInput('');
  };

  const handleRemoveCategory = (catName: string) => {
    setCategories(categories.filter((c) => c !== catName));
  };

  // Tag Operations
  const handleAddTag = (tagToAdd?: string) => {
    const raw = tagToAdd || newTagInput;
    const cleanTag = raw.trim().replace(/^#/, '');
    if (!cleanTag) return;
    if (!tags.includes(cleanTag)) {
      setTags([...tags, cleanTag]);
    }
    setNewTagInput('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  // Create Folder
  const handleCreateFolder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim() || !user) return;

    const trimmedName = newFolderName.trim();
    const folderData: NoteFolder = {
      id: 'folder_' + Date.now().toString(36),
      userId: user.uid,
      name: trimmedName,
      color: newFolderColor,
      createdAt: new Date().toISOString(),
    };

    if (auth.currentUser) {
      try {
        const docRef = await addDoc(collection(db, 'users', user.uid, 'folders'), {
          userId: folderData.userId,
          name: folderData.name,
          color: folderData.color,
          createdAt: folderData.createdAt,
        });
        folderData.id = docRef.id;
      } catch (err) {
        console.error('Failed to create folder in cloud:', err);
      }
    } else {
      const folderKey = `bashar_folders_${user.uid}`;
      const nextFolders = [...folders, folderData];
      setFolders(nextFolders);
      try {
        localStorage.setItem(folderKey, JSON.stringify(nextFolders));
      } catch (e) {}
    }

    setNewFolderName('');
    setIsCreatingFolder(false);
    setSelectedFolderFilter(folderData.id);
  };

  // Edit / Rename Folder
  const handleSaveRenameFolder = async (fId: string) => {
    if (!editFolderName.trim() || !user) return;
    const newName = editFolderName.trim();

    if (auth.currentUser) {
      try {
        await updateDoc(doc(db, 'users', user.uid, 'folders', fId), {
          name: newName,
          updatedAt: new Date().toISOString(),
        });
      } catch (e) {}
    } else {
      const folderKey = `bashar_folders_${user.uid}`;
      const nextFolders = folders.map((f) => (f.id === fId ? { ...f, name: newName } : f));
      setFolders(nextFolders);
      try {
        localStorage.setItem(folderKey, JSON.stringify(nextFolders));
      } catch (e) {}
    }

    if (folderId === fId) {
      setFolderName(newName);
    }

    setEditingFolderId(null);
    setEditFolderName('');
  };

  // Delete Folder
  const handleDeleteFolder = async (fId: string, fName: string) => {
    if (!confirm(`আপনি কি "${fName}" ফোল্ডারটি মুছে ফেলতে চান? এতে থাকা নোটগুলো সাধারণ নোটে স্থানান্তরিত হবে।`)) {
      return;
    }

    if (auth.currentUser && user) {
      try {
        await deleteDoc(doc(db, 'users', user.uid, 'folders', fId));
      } catch (e) {}
    } else if (user) {
      const folderKey = `bashar_folders_${user.uid}`;
      const remainingFolders = folders.filter((f) => f.id !== fId);
      setFolders(remainingFolders);
      try {
        localStorage.setItem(folderKey, JSON.stringify(remainingFolders));
      } catch (e) {}
    }

    if (folderId === fId) {
      setFolderId('');
      setFolderName('');
    }

    if (selectedFolderFilter === fId) {
      setSelectedFolderFilter('all');
    }
  };

  // Toggle Pin
  const handleTogglePin = async () => {
    const nextPin = !isPinned;
    setIsPinned(nextPin);
    if (activeNoteId && user) {
      if (auth.currentUser) {
        try {
          await updateDoc(doc(db, 'users', user.uid, 'notes', activeNoteId), {
            isPinned: nextPin,
            updatedAt: new Date().toISOString(),
          });
        } catch (e) {}
      } else {
        const userKey = `bashar_notes_${user.uid}`;
        setNotes((prev) => {
          const next = prev.map((n) => (n.id === activeNoteId ? { ...n, isPinned: nextPin } : n));
          try {
            localStorage.setItem(userKey, JSON.stringify(next));
          } catch (e) {}
          return next;
        });
      }
    }
  };

  // Delete note
  const handleDeleteNote = async (idToDelete: string) => {
    const noteToDelete = notes.find((n) => n.id === idToDelete);
    const isCurrentlyArchived = noteToDelete?.isArchived;

    if (
      isCurrentlyArchived &&
      !confirm('আপনি কি এই আর্কাইভকৃত নোটটি স্থায়ীভাবে মুছে ফেলতে চান? এটি আর ফিরিয়ে আনা যাবে না।')
    ) {
      return;
    }

    if (!user) return;
    if (auth.currentUser) {
      try {
        await deleteDoc(doc(db, 'users', user.uid, 'notes', idToDelete));
      } catch (err) {
        console.error('Failed to delete note:', err);
      }
    } else {
      const userKey = `bashar_notes_${user.uid}`;
      setNotes((prev) => {
        const remaining = prev.filter((n) => n.id !== idToDelete);
        try {
          localStorage.setItem(userKey, JSON.stringify(remaining));
        } catch (e) {}
        return remaining;
      });
    }

    showToast('নোটটি মুছে ফেলা হয়েছে');

    if (activeNoteId === idToDelete) {
      const remaining = notes.filter((n) => n.id !== idToDelete);
      if (remaining.length > 0) {
        loadNoteIntoEditor(remaining[0]);
      } else {
        setActiveNoteId(null);
        setTitle('');
        setContent('');
        setTags([]);
        setCategories([]);
        setFolderId('');
        setFolderName('');
      }
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
        categories,
        folderId,
        folderName,
        tags,
        color: selectedColor,
        isPinned: false,
        isArchived: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (auth.currentUser) {
        const docRef = await addDoc(collection(db, 'users', user.uid, 'notes'), duplicatedData);
        loadNoteIntoEditor({ id: docRef.id, ...duplicatedData });
      } else {
        const userKey = `bashar_notes_${user.uid}`;
        const newObj = {
          id: 'note_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
          ...duplicatedData,
        };
        const updated = [newObj, ...notes];
        setNotes(updated);
        try {
          localStorage.setItem(userKey, JSON.stringify(updated));
        } catch (e) {}
        loadNoteIntoEditor(newObj);
      }
      showToast('নোটের কপি তৈরি করা হয়েছে');
    } catch (e) {}
  };

  // Generate structured Markdown with YAML frontmatter, header metadata, and body
  const generateMarkdownForNote = (
    noteTitle: string,
    noteContent: string,
    noteCategories: string[] = [],
    noteFolderName?: string,
    noteTags: string[] = [],
    noteIsArchived?: boolean,
    noteDate?: string
  ) => {
    const cleanTitle = noteTitle.trim() || 'শিরোনামহীন নোট';
    const dateStr = noteDate
      ? new Date(noteDate).toLocaleDateString('bn-BD', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : new Date().toLocaleDateString('bn-BD', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
    const isoDate = noteDate || new Date().toISOString();

    const yamlFrontmatter = [
      '---',
      `title: "${cleanTitle.replace(/"/g, '\\"')}"`,
      `date: "${isoDate}"`,
      noteFolderName ? `folder: "${noteFolderName.replace(/"/g, '\\"')}"` : null,
      noteCategories && noteCategories.length > 0
        ? `categories:\n${noteCategories.map((c) => `  - "${c.replace(/"/g, '\\"')}"`).join('\n')}`
        : null,
      noteTags && noteTags.length > 0
        ? `tags:\n${noteTags.map((t) => `  - "${t.replace(/"/g, '\\"')}"`).join('\n')}`
        : null,
      `archived: ${Boolean(noteIsArchived)}`,
      '---',
      '',
    ]
      .filter((line) => line !== null)
      .join('\n');

    const markdownHeader = [
      `# ${cleanTitle}`,
      '',
      `> 📅 **তারিখ**: ${dateStr}`,
      noteFolderName ? `> 📁 **ফোল্ডার**: ${noteFolderName}` : null,
      noteCategories && noteCategories.length > 0
        ? `> 🏷️ **ক্যাটাগরি**: ${noteCategories.join(', ')}`
        : null,
      noteTags && noteTags.length > 0
        ? `> 🔖 **ট্যাগ**: ${noteTags.map((t) => `#${t}`).join(' ')}`
        : null,
      noteIsArchived ? `> 📦 **অবস্থা**: আর্কাইভকৃত (Archived)` : null,
      '',
      '---',
      '',
    ]
      .filter((line) => line !== null)
      .join('\n');

    return `${yamlFrontmatter}${markdownHeader}${noteContent || '_কোনো বিবরণ লেখা হয়নি_'}\n`;
  };

  // Export current active note as Markdown file
  const handleExportMarkdownFile = () => {
    const mdText = generateMarkdownForNote(
      title,
      content,
      categories,
      folderName,
      tags,
      isArchived,
      new Date().toISOString()
    );
    const blob = new Blob([mdText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const cleanFilename = (title.trim() || 'note')
      .replace(/[\/\\?%*:|"<>]/g, '_')
      .replace(/\s+/g, '_');
    link.href = url;
    link.download = `${cleanFilename}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`"${title || 'নোট'}" সফলভাবে Markdown (.md) ফাইল হিসেবে ডাউনলোড হয়েছে`);
  };

  // Backwards compatibility alias
  const handleExportNote = handleExportMarkdownFile;

  // Copy note as Markdown to clipboard
  const handleCopyMarkdown = async () => {
    const mdText = generateMarkdownForNote(
      title,
      content,
      categories,
      folderName,
      tags,
      isArchived,
      new Date().toISOString()
    );
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(mdText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = mdText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setIsCopiedMarkdown(true);
      setTimeout(() => setIsCopiedMarkdown(false), 2500);
      showToast('নোটের Markdown সফলভাবে ক্লিপবোর্ডে কপি করা হয়েছে');
    } catch (e) {
      showToast('ক্লিপবোর্ডে কপি করতে সমস্যা হয়েছে');
    }
  };

  // Share note via Web Share API or fallback to clipboard
  const handleShareNote = async () => {
    const mdText = generateMarkdownForNote(
      title,
      content,
      categories,
      folderName,
      tags,
      isArchived,
      new Date().toISOString()
    );
    const shareTitle = title.trim() || 'স্মার্ট নোট';

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: mdText,
        });
        showToast('নোটটি সফলভাবে শেয়ার করা হয়েছে');
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          await handleCopyMarkdown();
        }
      }
    } else {
      await handleCopyMarkdown();
    }
  };

  // Export specific note (from card list)
  const exportSpecificNote = (targetNote: SmartNote) => {
    const noteCats =
      targetNote.categories && Array.isArray(targetNote.categories) && targetNote.categories.length > 0
        ? targetNote.categories
        : targetNote.category
        ? [targetNote.category]
        : [];
    const mdText = generateMarkdownForNote(
      targetNote.title || 'শিরোনামহীন নোট',
      targetNote.content || '',
      noteCats,
      targetNote.folderName,
      targetNote.tags || [],
      targetNote.isArchived,
      targetNote.updatedAt || targetNote.createdAt
    );
    const blob = new Blob([mdText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const cleanFilename = (targetNote.title || 'note')
      .trim()
      .replace(/[\/\\?%*:|"<>]/g, '_')
      .replace(/\s+/g, '_');
    link.href = url;
    link.download = `${cleanFilename}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`"${targetNote.title || 'নোট'}" সফলভাবে ডাউনলোড হয়েছে`);
  };

  // Calculate unique categories across all notes
  const allCategoriesMap: { [key: string]: number } = {};
  PRESET_CATEGORIES.forEach((cat) => {
    allCategoriesMap[cat] = 0;
  });

  notes.forEach((n) => {
    const noteCats = n.categories && Array.isArray(n.categories) && n.categories.length > 0
      ? n.categories
      : (n.category ? [n.category] : []);
    noteCats.forEach((c) => {
      if (c) allCategoriesMap[c] = (allCategoriesMap[c] || 0) + 1;
    });
  });

  const allAvailableCategories = Object.keys(allCategoriesMap).sort((a, b) =>
    (allCategoriesMap[b] || 0) - (allCategoriesMap[a] || 0)
  );

  // Calculate unique tags and counts across all notes
  const allTagsMap: { [key: string]: number } = {};
  notes.forEach((n) => {
    if (n.tags && Array.isArray(n.tags)) {
      n.tags.forEach((t) => {
        if (t) allTagsMap[t] = (allTagsMap[t] || 0) + 1;
      });
    }
  });
  const allUniqueTags = Object.keys(allTagsMap).sort((a, b) => allTagsMap[b] - allTagsMap[a]);

  // Counts for folders
  const getFolderCount = (fId: string) => {
    return notes.filter((n) => !n.isArchived && n.folderId === fId).length;
  };

  const uncategorizedCount = notes.filter((n) => !n.isArchived && !n.folderId).length;
  const pinnedCount = notes.filter((n) => !n.isArchived && n.isPinned).length;
  const archivedCount = notes.filter((n) => n.isArchived).length;
  const activeNotesCount = notes.filter((n) => !n.isArchived).length;

  // Real-time filtering by folder, multiple categories, multiple tags, search query, and searchScope
  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      // Archive Separation
      if (selectedFolderFilter === 'archived') {
        if (!n.isArchived) return false;
      } else {
        if (n.isArchived) return false;
      }

      // Specific folder view filter
      if (selectedFolderFilter === 'pinned') {
        if (!n.isPinned) return false;
      } else if (selectedFolderFilter === 'uncategorized') {
        if (n.folderId) return false;
      } else if (selectedFolderFilter !== 'all' && selectedFolderFilter !== 'archived') {
        if (n.folderId !== selectedFolderFilter) return false;
      }

      // Multi-Select Category Filter (must match at least one of the selected categories)
      if (selectedCategoryFilters.length > 0) {
        const noteCats = n.categories && n.categories.length > 0
          ? n.categories
          : (n.category ? [n.category] : []);
        const hasMatchingCategory = selectedCategoryFilters.some((fCat) => noteCats.includes(fCat));
        if (!hasMatchingCategory) return false;
      }

      // Multi-Select Tag Filter (must match at least one of the selected tags)
      if (selectedTagFilters.length > 0) {
        if (!n.tags || n.tags.length === 0) return false;
        const hasMatchingTag = selectedTagFilters.some((fTag) => n.tags?.includes(fTag));
        if (!hasMatchingTag) return false;
      }

      // Real-time Search Query Filtering
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = (n.title || '').toLowerCase().includes(q);
        const matchContent = (n.content || '').toLowerCase().includes(q);
        const matchFolder = (n.folderName || '').toLowerCase().includes(q);
        const matchTags = n.tags?.some((t) => t.toLowerCase().includes(q));
        const matchCats = n.categories?.some((c) => c.toLowerCase().includes(q)) || n.category?.toLowerCase().includes(q);

        if (searchScope === 'title') {
          return matchTitle;
        }
        if (searchScope === 'content') {
          return matchContent;
        }
        return matchTitle || matchContent || matchFolder || matchTags || matchCats;
      }

      return true;
    });
  }, [notes, selectedFolderFilter, selectedCategoryFilters, selectedTagFilters, searchQuery, searchScope]);

  // Auto-switch to first matching note if current active note is not in filtered results during active filter/search
  useEffect(() => {
    if (filteredNotes.length > 0) {
      const isCurrentInResults = filteredNotes.some((n) => n.id === activeNoteId);
      if (!isCurrentInResults) {
        loadNoteIntoEditor(filteredNotes[0]);
      }
    }
  }, [selectedFolderFilter, selectedCategoryFilters, selectedTagFilters, searchQuery, searchScope, filteredNotes, activeNoteId]);

  // Count search term matches in active note
  const activeNoteMatchCount = useMemo(() => {
    if (!searchQuery.trim()) return 0;
    try {
      const q = searchQuery.toLowerCase().trim();
      const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'gi');
      let count = 0;
      if (title) {
        const m = title.match(regex);
        if (m) count += m.length;
      }
      if (content) {
        const m = content.match(regex);
        if (m) count += m.length;
      }
      return count;
    } catch (e) {
      return 0;
    }
  }, [searchQuery, title, content]);

  // Word and character counts
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 relative">
      {/* Toast Feedback Notification with Undo */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-700 text-xs animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{toast.message}</span>
          </div>
          {toast.undoAction && (
            <button
              onClick={() => {
                toast.undoAction?.();
                setToast(null);
              }}
              className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition cursor-pointer flex items-center gap-1 ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              পূর্বাবস্থায় আনুন (Undo)
            </button>
          )}
          <button
            onClick={() => setToast(null)}
            className="text-slate-400 hover:text-white cursor-pointer ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            ভয়েস-টু-টেক্সট, মাল্টি-ট্যাগ ও স্মার্ট ক্যাটাগরি (Smart Notes)
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Bashar Smart Notes
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            স্পিচ রেকগনিশন দিয়ে মুখে বলে নোট তৈরি, মাল্টিপল ক্যাটাগরি ও ট্যাগ ফিল্টারিং এবং ক্লাউড ব্যাকআপ।
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick toggle to Archive from Top Banner */}
          <button
            onClick={() => {
              if (selectedFolderFilter === 'archived') {
                setSelectedFolderFilter('all');
              } else {
                setSelectedFolderFilter('archived');
                setSelectedTagFilters([]);
                setSelectedCategoryFilters([]);
              }
            }}
            className={`px-3 py-2 text-xs font-semibold rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
              selectedFolderFilter === 'archived'
                ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}
            title={selectedFolderFilter === 'archived' ? 'সক্রিয় নোটগুলোতে ফিরুন' : 'আর্কাইভকৃত নোট দেখুন'}
          >
            <Archive className="w-3.5 h-3.5" />
            <span>{selectedFolderFilter === 'archived' ? 'সক্রিয় নোটসমূহ' : 'আর্কাইভ'}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedFolderFilter === 'archived'
                  ? 'bg-purple-700 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {archivedCount}
            </span>
          </button>

          <button
            onClick={() => setShowFolderSidebar(!showFolderSidebar)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
            title="ফোল্ডার ও ক্যাটাগরি প্যানেল প্রদর্শন বা আড়াল করুন"
          >
            <Folder className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            {showFolderSidebar ? 'প্যানেল লুকান' : 'প্যানেল প্রদর্শন'}
          </button>

          <button
            onClick={() => handleCreateNewNote()}
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
            <span>নোট, ট্যাগ ও ক্যাটাগরিগুলো ক্লাউডে স্থায়ীভাবে সেভ রাখতে অনুগ্রহ করে লগইন করুন।</span>
          </div>
          <button
            onClick={onOpenAuth}
            className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition cursor-pointer"
          >
            লগইন করুন
          </button>
        </div>
      )}

      {/* Main 3-Column / Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column 1: Folder, Views, Categories & Tag Navigator */}
        {showFolderSidebar && (
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-4 space-y-6">
            {/* Quick Views */}
            <div>
              <div className="flex items-center justify-between mb-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                <span>ভিউসমূহ (Views)</span>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setSelectedFolderFilter('all');
                    setSelectedTagFilters([]);
                    setSelectedCategoryFilters([]);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    selectedFolderFilter === 'all' && selectedTagFilters.length === 0 && selectedCategoryFilters.length === 0
                      ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Inbox className="w-4 h-4" />
                    <span>সকল সক্রিয় নোট (Active)</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      selectedFolderFilter === 'all' && selectedTagFilters.length === 0 && selectedCategoryFilters.length === 0
                        ? 'bg-indigo-700 text-indigo-100'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {activeNotesCount}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setSelectedFolderFilter('pinned');
                    setSelectedTagFilters([]);
                    setSelectedCategoryFilters([]);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    selectedFolderFilter === 'pinned'
                      ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Pin className="w-4 h-4 text-amber-500" />
                    <span>পিন করা নোট (Pinned)</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      selectedFolderFilter === 'pinned'
                        ? 'bg-indigo-700 text-indigo-100'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {pinnedCount}
                  </span>
                </button>

                {/* Dedicated Archive View Tab */}
                <button
                  onClick={() => {
                    setSelectedFolderFilter('archived');
                    setSelectedTagFilters([]);
                    setSelectedCategoryFilters([]);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    selectedFolderFilter === 'archived'
                      ? 'bg-purple-600 text-white shadow-xs font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Archive className="w-4 h-4 text-purple-400" />
                    <span>আর্কাইভ (Archived Notes)</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      selectedFolderFilter === 'archived'
                        ? 'bg-purple-700 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {archivedCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Multi-Select Category Filters Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Tags className="w-3.5 h-3.5 text-indigo-500" />
                  ক্যাটাগরি ও লেবেল ফিল্টার
                </span>
                {selectedCategoryFilters.length > 0 && (
                  <button
                    onClick={() => setSelectedCategoryFilters([])}
                    className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                  >
                    মুছুন
                  </button>
                )}
              </div>

              <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                {allAvailableCategories.map((cat) => {
                  const isChecked = selectedCategoryFilters.includes(cat);
                  const count = allCategoriesMap[cat] || 0;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        if (isChecked) {
                          setSelectedCategoryFilters(selectedCategoryFilters.filter((c) => c !== cat));
                        } else {
                          setSelectedCategoryFilters([...selectedCategoryFilters, cat]);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition cursor-pointer ${
                        isChecked
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {isChecked ? (
                          <CheckSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        )}
                        <span className="truncate">{cat}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200/60 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex-shrink-0">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Folders Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5" />
                  ফোল্ডারসমূহ ({folders.length})
                </span>
                <button
                  onClick={() => setIsCreatingFolder(true)}
                  className="p-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 rounded-lg transition cursor-pointer flex items-center gap-1 text-[11px] font-semibold"
                  title="নতুন ফোল্ডার তৈরি করুন"
                >
                  <Plus className="w-3.5 h-3.5" />
                  নতুন
                </button>
              </div>

              {/* Inline Create Folder Input */}
              {isCreatingFolder && (
                <form onSubmit={handleCreateFolder} className="p-3 mb-2 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800/80 space-y-2">
                  <input
                    type="text"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="ফোল্ডারের নাম লিখুন..."
                    autoFocus
                    className="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 border border-indigo-300 dark:border-indigo-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {FOLDER_COLORS.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setNewFolderColor(c.id)}
                          className={`w-3.5 h-3.5 rounded-full ${c.dot} cursor-pointer transition ${
                            newFolderColor === c.id ? 'ring-2 ring-indigo-500 scale-125' : 'opacity-70 hover:opacity-100'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          setIsCreatingFolder(false);
                          setNewFolderName('');
                        }}
                        className="px-2 py-1 text-[11px] text-slate-500 hover:text-slate-700 dark:text-slate-400 rounded-md cursor-pointer"
                      >
                        বাতিল
                      </button>
                      <button
                        type="submit"
                        disabled={!newFolderName.trim()}
                        className="px-2.5 py-1 text-[11px] font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-md cursor-pointer"
                      >
                        তৈরি করুন
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* Folders List */}
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                {folders.map((folder) => {
                  const isSelected = selectedFolderFilter === folder.id;
                  const colorObj = FOLDER_COLORS.find((c) => c.id === folder.color) || FOLDER_COLORS[0];
                  const count = getFolderCount(folder.id);
                  const isRenaming = editingFolderId === folder.id;

                  if (isRenaming) {
                    return (
                      <div key={folder.id} className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                        <input
                          type="text"
                          value={editFolderName}
                          onChange={(e) => setEditFolderName(e.target.value)}
                          autoFocus
                          className="w-full px-2 py-1 text-xs border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none"
                        />
                        <button
                          onClick={() => handleSaveRenameFolder(folder.id)}
                          className="p-1 text-emerald-600 hover:bg-emerald-50 rounded cursor-pointer"
                          title="সংরক্ষণ করুন"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setEditingFolderId(null)}
                          className="p-1 text-slate-400 hover:bg-slate-200 rounded cursor-pointer"
                          title="বাতিল"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={folder.id}
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div
                        onClick={() => {
                          setSelectedFolderFilter(folder.id);
                        }}
                        className="flex items-center gap-2 min-w-0 flex-1 py-0.5"
                      >
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${colorObj.dot}`} />
                        <span className="truncate">{folder.name}</span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span
                          className={`text-[11px] px-2 py-0.2 rounded-full ${
                            isSelected
                              ? 'bg-indigo-700 text-indigo-100'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {count}
                        </span>

                        <div className={`items-center gap-0.5 ${isSelected ? 'flex' : 'hidden group-hover:flex'}`}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingFolderId(folder.id);
                              setEditFolderName(folder.name);
                            }}
                            className={`p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 ${
                              isSelected ? 'text-indigo-100 hover:text-white' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                            }`}
                            title="নাম পরিবর্তন করুন"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteFolder(folder.id, folder.name);
                            }}
                            className={`p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 ${
                              isSelected ? 'text-rose-200 hover:text-rose-100' : 'text-slate-400 hover:text-rose-600'
                            }`}
                            title="ফোল্ডার মুছুন"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tags Cloud & Multi-Select Filter Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  ট্যাগসমূহ (Tags Multi-Filter)
                </span>
                {selectedTagFilters.length > 0 && (
                  <button
                    onClick={() => setSelectedTagFilters([])}
                    className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                  >
                    মুছুন
                  </button>
                )}
              </div>

              {allUniqueTags.length === 0 ? (
                <p className="text-[11px] text-slate-400 dark:text-slate-500 italic py-2">
                  কোনো ট্যাগ এখনো নেই। নোট এডিটরে `#ট্যাগ` যোগ করুন।
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {allUniqueTags.map((tg) => {
                    const isSelected = selectedTagFilters.includes(tg);
                    return (
                      <button
                        key={tg}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedTagFilters(selectedTagFilters.filter((t) => t !== tg));
                          } else {
                            setSelectedTagFilters([...selectedTagFilters, tg]);
                          }
                        }}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs transition cursor-pointer border ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-600 text-white font-semibold shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        <Hash className="w-3 h-3 opacity-70" />
                        <span>{tg}</span>
                        <span
                          className={`text-[10px] ml-0.5 px-1.5 py-0.2 rounded-full ${
                            isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {allTagsMap[tg]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Middle Column 2: Filtered Notes Sidebar / Real-Time Search List */}
        <div className={`${showFolderSidebar ? 'lg:col-span-4' : 'lg:col-span-5'} bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-4 space-y-3`}>
          {/* Dedicated Archive View Banner if viewing Archived */}
          {selectedFolderFilter === 'archived' && (
            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/70 rounded-xl flex items-center justify-between text-xs text-purple-900 dark:text-purple-200">
              <div className="flex items-center gap-2 min-w-0">
                <Archive className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold truncate">আর্কাইভকৃত নোটসমূহ ({archivedCount})</p>
                  <p className="text-[11px] text-purple-700 dark:text-purple-300 opacity-90 truncate">
                    পুরনো বা সম্পন্ন নোট মূল তালিকা থেকে সরিয়ে নিরাপদে রাখা হয়েছে।
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedFolderFilter('all')}
                className="px-2.5 py-1 text-[11px] font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition cursor-pointer flex-shrink-0 ml-2"
              >
                সক্রিয় নোটে যান
              </button>
            </div>
          )}

          {/* Real-time Search Box */}
          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setSearchQuery('');
                  }
                }}
                placeholder={
                  selectedFolderFilter === 'archived'
                    ? 'আর্কাইভকৃত নোটে খুঁজুন...'
                    : "শিরোনাম, লেখা বা ট্যাগে রিয়েল-টাইম সার্চ... ('/' চাপুন)"
                }
                className="w-full pl-10 pr-9 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-slate-50/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition shadow-2xs"
              />
              {searchQuery ? (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    searchInputRef.current?.focus();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                  title="সার্চ মুছুন (Esc)"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded font-mono">
                  /
                </kbd>
              )}
            </div>

            {/* Search Scope Filter Buttons */}
            <div className="flex items-center justify-between text-[11px] px-0.5">
              <div className="flex items-center gap-1">
                <span className="text-slate-400 dark:text-slate-500 mr-1 flex items-center gap-0.5">
                  <SlidersHorizontal className="w-2.5 h-2.5" />
                  স্কোপ:
                </span>
                <button
                  type="button"
                  onClick={() => setSearchScope('all')}
                  className={`px-2 py-0.5 rounded-md transition cursor-pointer font-medium ${
                    searchScope === 'all'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  উভয়
                </button>
                <button
                  type="button"
                  onClick={() => setSearchScope('title')}
                  className={`px-2 py-0.5 rounded-md transition cursor-pointer font-medium ${
                    searchScope === 'title'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  শিরোনাম
                </button>
                <button
                  type="button"
                  onClick={() => setSearchScope('content')}
                  className={`px-2 py-0.5 rounded-md transition cursor-pointer font-medium ${
                    searchScope === 'content'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  টেক্সট
                </button>
              </div>

              {/* Match Counter Badge */}
              {searchQuery.trim() && (
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {filteredNotes.length > 0 ? (
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {filteredNotes.length}টি মিল পাওয়া গেছে
                    </span>
                  ) : (
                    <span className="text-rose-500 dark:text-rose-400">০টি ফলাফল</span>
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Active Filter Indicators Banner */}
          {(selectedFolderFilter !== 'all' || selectedCategoryFilters.length > 0 || selectedTagFilters.length > 0 || searchQuery) && (
            <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-1.5 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-1">
                  <Filter className="w-3 h-3" />
                  ফিল্টার:
                </span>
                {selectedFolderFilter !== 'all' && (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border ${
                      selectedFolderFilter === 'archived'
                        ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                        : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                    }`}
                  >
                    {selectedFolderFilter === 'archived' ? (
                      <Archive className="w-3 h-3" />
                    ) : (
                      <Folder className="w-3 h-3" />
                    )}
                    {selectedFolderFilter === 'pinned'
                      ? 'পিন করা'
                      : selectedFolderFilter === 'archived'
                      ? 'আর্কাইভকৃত'
                      : selectedFolderFilter === 'uncategorized'
                      ? 'সাধারণ'
                      : folders.find((f) => f.id === selectedFolderFilter)?.name || 'ফোল্ডার'}
                  </span>
                )}

                {/* Category Filter Chips */}
                {selectedCategoryFilters.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-[11px] font-medium"
                  >
                    <Tags className="w-3 h-3" />
                    {cat}
                    <button
                      onClick={() => setSelectedCategoryFilters(selectedCategoryFilters.filter((c) => c !== cat))}
                      className="hover:text-rose-500 cursor-pointer ml-0.5"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </span>
                ))}

                {/* Tag Filter Chips */}
                {selectedTagFilters.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-[11px] font-medium"
                  >
                    <Hash className="w-3 h-3" />
                    {t}
                    <button
                      onClick={() => setSelectedTagFilters(selectedTagFilters.filter((item) => item !== t))}
                      className="hover:text-rose-500 cursor-pointer ml-0.5"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </span>
                ))}

                {searchQuery.trim() && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 text-[11px] font-medium">
                    <Search className="w-3 h-3 text-amber-600" />
                    &ldquo;{searchQuery}&rdquo;
                    <button onClick={() => setSearchQuery('')} className="hover:text-rose-500 cursor-pointer ml-0.5">
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  setSelectedFolderFilter('all');
                  setSelectedCategoryFilters([]);
                  setSelectedTagFilters([]);
                  setSearchQuery('');
                  setSearchScope('all');
                }}
                className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline font-semibold cursor-pointer"
              >
                সব রিসেট
              </button>
            </div>
          )}

          {/* Notes List with Real-time Keyword Highlighting and Quick Archive Action */}
          <div className="space-y-2 max-h-[620px] overflow-y-auto pr-1">
            {loading ? (
              <div className="py-12 text-center text-slate-400">
                <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-xs">নোট লোড হচ্ছে...</p>
              </div>
            ) : filteredNotes.length === 0 ? (
              <div className="py-10 text-center bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 p-5 space-y-3">
                {selectedFolderFilter === 'archived' ? (
                  <>
                    <Archive className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                        আর্কাইভে কোনো নোট নেই
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        যেসব কাজ সম্পন্ন হয়েছে বা পুরনো নোট আপনি প্রধান তালিকা পরিষ্কার রাখতে আর্কাইভে পাঠাতে পারেন।
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <FileQuestion className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                        {searchQuery.trim()
                          ? `"${searchQuery}" সংক্রান্ত কোনো নোট পাওয়া যায়নি`
                          : 'কোনো নোট পাওয়া যায়নি'}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                        ফিল্টার পরিবর্তন করে দেখতে পারেন অথবা নতুন নোট তৈরি করতে পারেন।
                      </p>
                    </div>
                  </>
                )}

                {searchQuery.trim() && (
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition cursor-pointer"
                    >
                      সার্চ ক্লিয়ার করুন
                    </button>
                    <button
                      onClick={() => handleCreateNewNote(searchQuery.trim())}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition cursor-pointer inline-flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      নতুন নোট তৈরি
                    </button>
                  </div>
                )}
              </div>
            ) : (
              filteredNotes.map((note) => {
                const isActive = activeNoteId === note.id;
                const colorConfig = NOTE_COLORS.find((c) => c.id === note.color) || NOTE_COLORS[0];
                const matchedFolder = folders.find((f) => f.id === note.folderId);
                const folderColorObj = matchedFolder ? FOLDER_COLORS.find((c) => c.id === matchedFolder.color) : null;
                const contentSnippet = getSnippetWithMatch(note.content, searchQuery, 90);
                const noteCategories = note.categories && note.categories.length > 0
                  ? note.categories
                  : (note.category ? [note.category] : []);

                return (
                  <div
                    key={note.id}
                    onClick={() => loadNoteIntoEditor(note)}
                    className={`group p-3.5 rounded-xl border transition-all cursor-pointer relative ${
                      isActive
                        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 shadow-xs ring-2 ring-indigo-200/50 dark:ring-indigo-800/40'
                        : 'border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50/60 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colorConfig.dot}`} />
                        <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                          {searchQuery.trim()
                            ? highlightMatch(note.title || 'শিরোনামহীন নোট', searchQuery)
                            : note.title || 'শিরোনামহীন নোট'}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1 flex-shrink-0">
                        {note.isPinned && !note.isArchived && (
                          <Pin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        )}
                        {note.isArchived && (
                          <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-semibold">
                            <Archive className="w-2.5 h-2.5" />
                            আর্কাইভ
                          </span>
                        )}

                        {/* Quick Card Export Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            exportSpecificNote(note);
                          }}
                          className="p-1 rounded-lg transition opacity-80 group-hover:opacity-100 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                          title="Markdown (.md) ডাউনলোড করুন"
                        >
                          <FileDown className="w-3.5 h-3.5" />
                        </button>

                        {/* Quick Card Archive / Unarchive Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSetNoteArchive(note.id, !note.isArchived);
                          }}
                          className={`p-1 rounded-lg transition opacity-80 group-hover:opacity-100 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer ${
                            note.isArchived
                              ? 'text-purple-600 dark:text-purple-400'
                              : 'text-slate-400 hover:text-purple-600 dark:hover:text-purple-400'
                          }`}
                          title={note.isArchived ? 'আর্কাইভ থেকে ফিরিয়ে আনুন (Restore)' : 'আর্কাইভে পাঠান (Archive)'}
                        >
                          {note.isArchived ? (
                            <ArchiveRestore className="w-3.5 h-3.5" />
                          ) : (
                            <Archive className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {searchQuery.trim()
                        ? highlightMatch(contentSnippet, searchQuery)
                        : note.content || 'খালি নোট...'}
                    </p>

                    {/* Multi-Categories and Tags preview on Note card */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {noteCategories.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-indigo-50/70 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50 font-medium"
                        >
                          <Tags className="w-2.5 h-2.5 text-indigo-500" />
                          {searchQuery.trim() ? highlightMatch(c, searchQuery) : c}
                        </span>
                      ))}

                      {note.tags && note.tags.slice(0, 2).map((tg) => (
                        <span
                          key={tg}
                          className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium"
                        >
                          <Hash className="w-2.5 h-2.5 opacity-60" />
                          {searchQuery.trim() ? highlightMatch(tg, searchQuery) : tg}
                        </span>
                      ))}

                      {note.tags && note.tags.length > 2 && (
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 self-center">
                          +{note.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500">
                      <div className="flex items-center gap-1 truncate max-w-[150px]">
                        {matchedFolder ? (
                          <span className={`inline-flex items-center gap-1 truncate font-medium ${folderColorObj?.text || 'text-slate-500'}`}>
                            <Folder className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">
                              {searchQuery.trim() ? highlightMatch(matchedFolder.name, searchQuery) : matchedFolder.name}
                            </span>
                          </span>
                        ) : note.folderName ? (
                          <span className="inline-flex items-center gap-1 truncate font-medium text-slate-500">
                            <Folder className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">
                              {searchQuery.trim() ? highlightMatch(note.folderName, searchQuery) : note.folderName}
                            </span>
                          </span>
                        ) : (
                          <span>সাধারণ নোট</span>
                        )}
                      </div>

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

        {/* Right Column 3: Active Note Editor */}
        <div className={`${showFolderSidebar ? 'lg:col-span-5' : 'lg:col-span-7'} bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs p-6 space-y-4`}>
          {activeNoteId ? (
            <>
              {/* Dedicated Archived Banner in Active Editor */}
              {isArchived && (
                <div className="p-3 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-purple-900 dark:text-purple-200">
                  <div className="flex items-center gap-2">
                    <Archive className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">এই নোটটি আর্কাইভে সংরক্ষিত আছে (Archived Note)</p>
                      <p className="text-[11px] text-purple-700 dark:text-purple-300">
                        {archivedAt
                          ? `আর্কাইভের তারিখ: ${new Date(archivedAt).toLocaleDateString('bn-BD')}`
                          : 'এটি প্রধান তালিকা থেকে আড়াল করা রয়েছে।'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSetNoteArchive(activeNoteId, false)}
                    className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5 flex-shrink-0"
                  >
                    <ArchiveRestore className="w-3.5 h-3.5" />
                    নোট পুনরুদ্ধার করুন (Restore)
                  </button>
                </div>
              )}

              {/* Real-time Search Occurrence Banner in Active Note */}
              {searchQuery.trim() && (
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 rounded-xl flex items-center justify-between text-xs text-amber-900 dark:text-amber-200">
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <span>
                      সার্চ টার্ম <strong>&ldquo;{searchQuery}&rdquo;</strong> বর্তমান নোটে{' '}
                      <strong>{activeNoteMatchCount}</strong> বার পাওয়া গেছে।
                    </span>
                  </div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 hover:underline cursor-pointer"
                  >
                    সার্চ মুছুন
                  </button>
                </div>
              )}

              {/* Voice Input (SpeechRecognition) Live Status Banner */}
              {isListening && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-rose-900 dark:text-rose-200 shadow-sm animate-pulse">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                    <div>
                      <p className="font-bold flex items-center gap-1.5">
                        <Mic className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        ভয়েস ইনপুট চালু আছে — কথা বলুন...
                      </p>
                      <p className="text-[11px] text-rose-700 dark:text-rose-300">
                        {speechInterim
                          ? `শোনা যাচ্ছে: "${speechInterim}"`
                          : `ভাষা: ${speechLang === 'bn-BD' ? 'বাংলা (Bengali)' : 'ইংরেজি (English)'} • গন্তব্য: ${speechTarget === 'content' ? 'নোটের বিষয়বস্তু' : 'শিরোনাম'}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleSpeechRecognition}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition cursor-pointer flex items-center gap-1"
                    >
                      <MicOff className="w-3.5 h-3.5" />
                      রেকর্ডিং বন্ধ করুন
                    </button>
                  </div>
                </div>
              )}

              {/* Editor Top Bar with Voice-to-Text Button and Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                {/* Auto-save Status Indicator */}
                <div className="flex items-center gap-2 text-xs">
                  {saveStatus === 'saving' && (
                    <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      সংরক্ষণ হচ্ছে...
                    </span>
                  )}
                  {saveStatus === 'saved' && (
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      সংরক্ষিত (Auto-saved)
                    </span>
                  )}
                  {saveStatus === 'error' && (
                    <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      সংরক্ষণ ব্যর্থ
                    </span>
                  )}
                </div>

                {/* Middle Left: Voice-to-Text and Markdown Export Toolbar */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Speech Recognition (Voice-to-Text) Button and Options */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={toggleSpeechRecognition}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer shadow-2xs ${
                        isListening
                          ? 'bg-rose-600 text-white ring-2 ring-rose-400/50 shadow-md animate-pulse'
                          : 'bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80'
                      }`}
                      title="স্পিচ রিকগনিশন (Voice Input) চালু করুন"
                    >
                      {isListening ? (
                        <>
                          <Radio className="w-3.5 h-3.5 animate-spin" />
                          <span>রেকর্ডিং হচ্ছে</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>ভয়েস টাইপিং</span>
                        </>
                      )}
                    </button>

                    {/* Speech Language & Target Selector Toggle */}
                    <select
                      value={speechLang}
                      onChange={(e) => setSpeechLang(e.target.value as 'bn-BD' | 'en-US')}
                      disabled={isListening}
                      className="text-[11px] border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
                      title="ভয়েস ভাষা নির্বাচন করুন"
                    >
                      <option value="bn-BD">🇧🇩 বাংলা</option>
                      <option value="en-US">🇺🇸 English</option>
                    </select>

                    <select
                      value={speechTarget}
                      onChange={(e) => setSpeechTarget(e.target.value as 'content' | 'title')}
                      disabled={isListening}
                      className="text-[11px] border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer hidden sm:block"
                      title="ভয়েস লেখার স্থান"
                    >
                      <option value="content">বডিতে লিখুন</option>
                      <option value="title">শিরোনামে লিখুন</option>
                    </select>
                  </div>

                  {/* Dedicated Markdown Export & Share Dropdown Button */}
                  <div className="relative" ref={exportMenuRef}>
                    <button
                      type="button"
                      onClick={() => setIsExportMenuOpen((prev) => !prev)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 transition cursor-pointer shadow-2xs"
                      title="নোটটি Markdown (.md) হিসেবে ডাউনলোড বা শেয়ার করুন"
                    >
                      <FileDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Markdown এক্সপোর্ট</span>
                      <ChevronDown
                        className={`w-3 h-3 text-emerald-600 dark:text-emerald-400 transition-transform ${
                          isExportMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Export & Sharing Options Dropdown Menu */}
                    {isExportMenuOpen && (
                      <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-1.5 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-1.5 z-40 animate-in fade-in zoom-in-95 duration-100">
                        <div className="px-2.5 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                            Markdown (.md) এক্সপোর্ট
                          </p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500">
                            মেটাডাটা, ক্যাটাগরি ও ট্যাগসহ
                          </p>
                        </div>

                        {/* Option 1: Download .md File */}
                        <button
                          type="button"
                          onClick={() => {
                            handleExportMarkdownFile();
                            setIsExportMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 hover:text-emerald-700 dark:hover:text-emerald-300 transition cursor-pointer"
                        >
                          <div className="p-1.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                            <Download className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-semibold block truncate">Markdown (.md) ডাউনলোড</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                              ডিভাইসে ফাইল সেভ করুন
                            </span>
                          </div>
                        </button>

                        {/* Option 2: Copy Markdown to Clipboard */}
                        <button
                          type="button"
                          onClick={() => {
                            handleCopyMarkdown();
                            setIsExportMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-700 dark:hover:text-indigo-300 transition cursor-pointer"
                        >
                          <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                            {isCopiedMarkdown ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <span className="font-semibold block truncate">Markdown টেক্সট কপি</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                              ক্লিপবোর্ডে কপি করে শেয়ার করুন
                            </span>
                          </div>
                        </button>

                        {/* Option 3: Share Note */}
                        <button
                          type="button"
                          onClick={() => {
                            handleShareNote();
                            setIsExportMenuOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-700 dark:hover:text-purple-300 transition cursor-pointer"
                        >
                          <div className="p-1.5 rounded-md bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400 flex-shrink-0">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="font-semibold block truncate">সরাসরি শেয়ার করুন</span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 block truncate">
                              WhatsApp, Mail বা সোশ্যাল অ্যাপে
                            </span>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
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

                  {/* Archive / Unarchive Button */}
                  <button
                    onClick={() => handleSetNoteArchive(activeNoteId, !isArchived)}
                    className={`p-2 rounded-xl transition cursor-pointer ${
                      isArchived
                        ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 ring-1 ring-purple-300 dark:ring-purple-700'
                        : 'text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50'
                    }`}
                    title={isArchived ? 'আর্কাইভ থেকে ফিরিয়ে আনুন (Restore)' : 'আর্কাইভে পাঠান (Archive)'}
                  >
                    {isArchived ? (
                      <ArchiveRestore className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    ) : (
                      <Archive className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={handleDuplicateNote}
                    className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition cursor-pointer"
                    title="ডুপ্লিকেট কপি করুন"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  {/* Quick Markdown Export Button */}
                  <button
                    onClick={handleExportMarkdownFile}
                    className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition cursor-pointer"
                    title="Markdown (.md) ফাইল ডাউনলোড করুন"
                  >
                    <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </button>

                  <button
                    onClick={() => handleDeleteNote(activeNoteId)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition cursor-pointer"
                    title={isArchived ? 'স্থায়ীভাবে মুছে ফেলুন' : 'মুছে ফেলুন'}
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

              {/* Organization Metadata Bar: Folder Selector, Multi-Select Categories & Tag Management */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 space-y-3.5">
                {/* Row 1: Folder Selector & Categories Multi-Select Dropdown */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Folder Selector */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                      <Folder className="w-3.5 h-3.5 text-indigo-500" />
                      ফোল্ডার:
                    </span>
                    <select
                      value={folderId}
                      onChange={(e) => handleAssignFolder(e.target.value)}
                      className="text-xs border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                    >
                      <option value="">সাধারণ / ফোল্ডারবিহীন</option>
                      {folders.map((f) => (
                        <option key={f.id} value={f.id}>
                          📁 {f.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Multi-Select Categories / Labels Dropdown */}
                  <div className="relative" ref={categoryDropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-lg cursor-pointer transition shadow-2xs"
                    >
                      <Tags className="w-3.5 h-3.5 text-indigo-500" />
                      <span>ক্যাটাগরি নির্বাচন ({categories.length})</span>
                      <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Popover */}
                    {isCategoryDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1.5 z-40 w-64 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 space-y-2.5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          একাধিক ক্যাটাগরি বেছে নিন:
                        </div>

                        {/* List with checkboxes */}
                        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                          {allAvailableCategories.map((cat) => {
                            const isChecked = categories.includes(cat);
                            return (
                              <button
                                key={cat}
                                type="button"
                                onClick={() => handleToggleCategory(cat)}
                                className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-xs transition cursor-pointer text-left ${
                                  isChecked
                                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold'
                                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                              >
                                <span className="truncate">{cat}</span>
                                {isChecked ? (
                                  <CheckSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                                ) : (
                                  <Square className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Add custom category inline form */}
                        <form onSubmit={handleAddCustomCategory} className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1">
                          <input
                            type="text"
                            value={newCustomCategoryInput}
                            onChange={(e) => setNewCustomCategoryInput(e.target.value)}
                            placeholder="নতুন ক্যাটাগরি তৈরি করুন..."
                            className="w-full px-2 py-1 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-800 dark:text-slate-100 focus:outline-none"
                          />
                          <button
                            type="submit"
                            disabled={!newCustomCategoryInput.trim()}
                            className="px-2 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-md hover:bg-indigo-700 disabled:opacity-50 cursor-pointer"
                          >
                            যোগ
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>

                {/* Display Active Selected Categories as Badges */}
                {categories.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-400 font-medium">নিযুক্ত ক্যাটাগরি:</span>
                    {categories.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-medium"
                      >
                        <Tags className="w-3 h-3 text-indigo-500" />
                        {c}
                        <button
                          type="button"
                          onClick={() => handleRemoveCategory(c)}
                          className="hover:text-rose-500 transition cursor-pointer ml-0.5"
                          title="ক্যাটাগরি মুছুন"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Row 2: Tags Management Input & Chips */}
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-purple-500" />
                      ট্যাগসমূহ (Tags):
                    </span>

                    {/* Active tags badges */}
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-medium"
                      >
                        <Hash className="w-3 h-3 text-purple-500" />
                        {t}
                        <button
                          onClick={() => handleRemoveTag(t)}
                          className="hover:text-rose-500 transition cursor-pointer ml-0.5"
                          title="ট্যাগ মুছুন"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}

                    {/* Add tag inline form */}
                    <div className="inline-flex items-center gap-1">
                      <div className="relative">
                        <Hash className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                        <input
                          type="text"
                          value={newTagInput}
                          onChange={(e) => setNewTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ',') {
                              e.preventDefault();
                              handleAddTag();
                            }
                          }}
                          placeholder="ট্যাগ লিখুন (Enter চাপুন)..."
                          className="pl-6 pr-2 py-0.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-44"
                        />
                      </div>
                      {newTagInput.trim() && (
                        <button
                          onClick={() => handleAddTag()}
                          className="px-2 py-0.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                        >
                          যোগ
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Quick-add popular existing tags */}
                  {allUniqueTags.filter((t) => !tags.includes(t)).length > 0 && (
                    <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                      <span>প্রস্তাবিত ট্যাগ:</span>
                      {allUniqueTags
                        .filter((t) => !tags.includes(t))
                        .slice(0, 5)
                        .map((suggestedTag) => (
                          <button
                            key={suggestedTag}
                            onClick={() => handleAddTag(suggestedTag)}
                            className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-400 transition cursor-pointer"
                          >
                            <Plus className="w-2.5 h-2.5 text-indigo-500" />
                            {suggestedTag}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Textarea */}
              <div>
                <textarea
                  rows={14}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="এখানে আপনার নোট, চেকলিস্ট বা মিটিংয়ের বিস্তারিত লিখুন অথবা উপরের 'ভয়েস টাইপিং' বাটন ব্যবহার করে মুখে বলুন..."
                  className="w-full text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed border-none focus:outline-none placeholder-slate-300 dark:placeholder-slate-600 resize-none font-sans bg-transparent min-h-[300px]"
                />
              </div>

              {/* Word & Character counts */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500">
                <div className="flex items-center gap-4">
                  <span>শব্দ সংখ্যা: <strong className="text-slate-600 dark:text-slate-300">{wordCount}</strong></span>
                  <span>অক্ষর সংখ্যা: <strong className="text-slate-600 dark:text-slate-300">{charCount}</strong></span>
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  ভয়েস ইনপুট, ট্যাগ ও অটো-ব্যাকআপ সক্রিয়
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
                onClick={() => handleCreateNewNote()}
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
