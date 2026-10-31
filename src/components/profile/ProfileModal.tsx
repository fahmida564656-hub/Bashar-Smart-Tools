import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  X,
  User,
  Mail,
  Key,
  Calendar,
  Check,
  LogOut,
  ShieldCheck,
  Camera,
  Lock,
  Eye,
  EyeOff,
  Upload,
  Trash2,
  BarChart3,
  Copy,
  CheckCheck,
  AlertCircle,
  Loader2,
  Sparkles,
  FileText,
  HelpCircle,
  Clock,
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'info' | 'avatar' | 'security' | 'stats';

// Curated avatar presets with high quality SVG avatars or distinct styles
const PRESET_AVATARS = [
  {
    id: 'student',
    title: 'শিক্ষার্থী',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=student&backgroundColor=b6e3f4',
  },
  {
    id: 'scholar',
    title: 'গবেষক',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=scholar&backgroundColor=c0aede',
  },
  {
    id: 'pro',
    title: 'প্রফেশনাল',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=pro&backgroundColor=d1d4f9',
  },
  {
    id: 'tech',
    title: 'ডেভেলপার',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=coder&backgroundColor=ffd5dc',
  },
  {
    id: 'creative',
    title: 'ডিজাইনার',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=creative&backgroundColor=ffdfbf',
  },
  {
    id: 'leader',
    title: 'লিডার',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=leader&backgroundColor=c1f4c5',
  },
];

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, profile, updateName, changePassword, updateAvatar, logout } = useAuth();

  const [activeTab, setActiveTab] = useState<TabType>('info');

  // Name state
  const [displayName, setDisplayName] = useState('');
  const [nameUpdating, setNameUpdating] = useState(false);
  const [nameSuccess, setNameSuccess] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  // Password state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [passUpdating, setPassUpdating] = useState(false);
  const [passSuccess, setPassSuccess] = useState(false);
  const [passError, setPassError] = useState<string | null>(null);

  // Avatar state
  const [avatarUpdating, setAvatarUpdating] = useState(false);
  const [avatarSuccess, setAvatarSuccess] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Stats
  const [stats, setStats] = useState({ notesCount: 0, eventsCount: 0, quizCount: 0 });
  const [copiedUid, setCopiedUid] = useState(false);

  // Sync state when modal opens or user updates
  useEffect(() => {
    if (user) {
      setDisplayName(profile?.displayName || user.displayName || '');
      // Calculate local/session counts
      try {
        const notesRaw = localStorage.getItem(`bashar_notes_${user.uid}`) || localStorage.getItem('bashar_smart_notes');
        const notes = notesRaw ? JSON.parse(notesRaw) : [];

        const eventsRaw = localStorage.getItem(`bashar_events_${user.uid}`) || localStorage.getItem('bashar_calendar_events');
        const events = eventsRaw ? JSON.parse(eventsRaw) : [];

        const quizRaw = localStorage.getItem(`bashar_quiz_${user.uid}`) || localStorage.getItem('bashar_quiz_history');
        const quiz = quizRaw ? JSON.parse(quizRaw) : [];

        setStats({
          notesCount: Array.isArray(notes) ? notes.length : 0,
          eventsCount: Array.isArray(events) ? events.length : 0,
          quizCount: Array.isArray(quiz) ? quiz.length : 0,
        });
      } catch {
        // ignore
      }
    }
  }, [user, profile, isOpen]);

  if (!isOpen || !user) return null;

  // Handle Name Update
  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameError(null);
    setNameUpdating(true);
    try {
      await updateName(displayName);
      setNameSuccess(true);
      setTimeout(() => setNameSuccess(false), 3000);
    } catch (err: any) {
      setNameError(err.message || 'নাম পরিবর্তন করা যায়নি।');
    } finally {
      setNameUpdating(false);
    }
  };

  // Handle Password Change
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassError(null);
    setPassSuccess(false);

    if (newPassword.length < 6) {
      setPassError('নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPassError('নতুন পাসওয়ার্ড এবং নিশ্চিতকরণ পাসওয়ার্ড একই নয়। দয়া করে মিলিয়ে লিখুন।');
      return;
    }

    setPassUpdating(true);
    try {
      await changePassword(currentPassword, newPassword);
      setPassSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPassSuccess(false), 3500);
    } catch (err: any) {
      setPassError(err.message || 'পাসওয়ার্ড পরিবর্তন ব্যর্থ হয়েছে। দয়া করে আবার চেষ্টা করুন।');
    } finally {
      setPassUpdating(false);
    }
  };

  // Handle Image File Upload (Resize on Canvas to keep base64 compact)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setAvatarError('শুধুমাত্র ইমেজ ফাইল (JPG, PNG, WebP) আপলোড করুন।');
      return;
    }

    // Max 8MB raw size before compression
    if (file.size > 8 * 1024 * 1024) {
      setAvatarError('ফাইলের আকার সর্বোচ্চ ৮ মেগাবাইট হতে পারবে।');
      return;
    }

    setAvatarUpdating(true);
    setAvatarError(null);

    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = async () => {
        try {
          const canvas = document.createElement('canvas');
          const maxDim = 256;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxDim) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            }
          } else {
            if (height > maxDim) {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
            await updateAvatar(compressedDataUrl);
            setAvatarSuccess(true);
            setTimeout(() => setAvatarSuccess(false), 3000);
          }
        } catch (err: any) {
          setAvatarError(err.message || 'ছবি প্রসেস করতে সমস্যা হয়েছে।');
        } finally {
          setAvatarUpdating(false);
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      };
      img.onerror = () => {
        setAvatarError('ছবি লোড করা যায়নি। অন্য ছবি চেষ্টা করুন।');
        setAvatarUpdating(false);
      };
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = () => {
      setAvatarError('ফাইল পড়তে সমস্যা হয়েছে।');
      setAvatarUpdating(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSelectPreset = async (presetUrl: string) => {
    setAvatarUpdating(true);
    setAvatarError(null);
    try {
      await updateAvatar(presetUrl);
      setAvatarSuccess(true);
      setTimeout(() => setAvatarSuccess(false), 3000);
    } catch (err: any) {
      setAvatarError(err.message || 'অবতার সেট করতে সমস্যা হয়েছে।');
    } finally {
      setAvatarUpdating(false);
    }
  };

  const handleRemoveAvatar = async () => {
    setAvatarUpdating(true);
    setAvatarError(null);
    try {
      await updateAvatar('');
      setAvatarSuccess(true);
      setTimeout(() => setAvatarSuccess(false), 3000);
    } catch (err: any) {
      setAvatarError(err.message || 'ছবি মুছতে সমস্যা হয়েছে।');
    } finally {
      setAvatarUpdating(false);
    }
  };

  const handleCopyUid = () => {
    if (user?.uid) {
      navigator.clipboard.writeText(user.uid);
      setCopiedUid(true);
      setTimeout(() => setCopiedUid(false), 2000);
    }
  };

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  const currentPhoto = profile?.photoURL || user.photoURL;
  const initial = (profile?.displayName || user.displayName || user.email || 'B')[0].toUpperCase();

  const creationRaw = (user as any)?.metadata?.creationTime || profile?.createdAt;
  const formattedDate = creationRaw
    ? new Date(creationRaw).toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'নিবন্ধিত সদস্য';

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, text: '', color: '' };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) || /[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 1, text: 'দুর্বল (Weak)', color: 'bg-rose-500 text-rose-500' };
    if (score <= 2) return { score: 2, text: 'মাঝারি (Medium)', color: 'bg-amber-500 text-amber-500' };
    return { score: 3, text: 'শক্তিশালী (Strong)', color: 'bg-emerald-500 text-emerald-500' };
  };

  const passStrength = getPasswordStrength(newPassword);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Profile Banner */}
        <div className="relative bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 px-6 py-6 text-white shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                {currentPhoto ? (
                  <img
                    src={currentPhoto}
                    alt={displayName || 'User Avatar'}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white/60 shadow-lg bg-white/10"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold border-2 border-white/40 shadow-lg backdrop-blur-xs">
                    {initial}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setActiveTab('avatar')}
                  className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white shadow-md transition cursor-pointer border border-white/40"
                  title="লোগো বা ছবি পরিবর্তন করুন"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold leading-tight">
                    {profile?.displayName || user.displayName || 'ব্যবহারকারী'}
                  </h2>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-white/20 text-indigo-100 rounded-full border border-white/20">
                    সক্রিয় প্রোফাইল
                  </span>
                </div>
                <p className="text-xs text-indigo-100/90 mt-0.5">{user.email}</p>
                <p className="text-[11px] text-indigo-200/80 mt-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> যুক্ত হওয়ার তারিখ: {formattedDate}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              title="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 mt-6 pt-2 border-t border-white/15 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('info')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer shrink-0 ${
                activeTab === 'info'
                  ? 'bg-white text-indigo-900 shadow-md'
                  : 'text-indigo-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              প্রোফাইল তথ্য
            </button>
            <button
              onClick={() => setActiveTab('avatar')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer shrink-0 ${
                activeTab === 'avatar'
                  ? 'bg-white text-indigo-900 shadow-md'
                  : 'text-indigo-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              লোগো ও ছবি
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer shrink-0 ${
                activeTab === 'security'
                  ? 'bg-white text-indigo-900 shadow-md'
                  : 'text-indigo-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              পাসওয়ার্ড পরিবর্তন
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer shrink-0 ${
                activeTab === 'stats'
                  ? 'bg-white text-indigo-900 shadow-md'
                  : 'text-indigo-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              পরিসংখ্যান
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: Profile Info */}
          {activeTab === 'info' && (
            <div className="space-y-6 animate-in fade-in">
              {nameError && (
                <div className="p-3.5 text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 rounded-2xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{nameError}</span>
                </div>
              )}

              {nameSuccess && (
                <div className="p-3.5 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-2xl flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>আপনার নাম সফলভাবে আপডেট করা হয়েছে!</span>
                </div>
              )}

              {/* Edit Display Name */}
              <form onSubmit={handleUpdateName} className="space-y-3">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  ব্যবহারকারীর নাম (Display Name)
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="আপনার নাম লিখুন"
                      className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/70 dark:bg-slate-800/60 text-slate-900 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={nameUpdating || displayName === (profile?.displayName || user.displayName)}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl disabled:opacity-40 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    {nameUpdating ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      'নাম সংরক্ষণ'
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  এই নামটি ড্যাশবোর্ড, কুইজ রিপোর্ট ও নেভিগেশন বারে প্রদর্শিত হবে।
                </p>
              </form>

              {/* Account Meta Grid */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 space-y-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Mail className="w-4 h-4 text-indigo-500" /> নিবন্ধিত জিমেইল / ইমেইল
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{user.email}</span>
                    <span className="px-1.5 py-0.5 text-[10px] bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold rounded">
                      ভেরিফাইড
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-indigo-500" /> অ্যাকাউন্ট তৈরির তারিখ
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">{formattedDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Key className="w-4 h-4 text-indigo-500" /> অ্যাকাউন্ট আইডি (UID)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300 max-w-[170px] truncate" title={user.uid}>
                      {user.uid}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyUid}
                      className="p-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer"
                      title="কপি করুন"
                    >
                      {copiedUid ? <CheckCheck className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-slate-200 dark:border-slate-700">
                  <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> সিস্টেম নিরাপত্তা ও ক্লাউড সিঙ্ক
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold rounded text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    সক্রিয় ও সুরক্ষিত
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Avatar & Logo Upload */}
          {activeTab === 'avatar' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  প্রোফাইল লোগো বা ছবি আপলোড করুন
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  আপনার ছবি বা প্রতিষ্ঠানের লোগো আপলোড করুন অথবা নিচের পছন্দসই অবতারগুলোর যেকোনো একটি নির্বাচন করুন।
                </p>
              </div>

              {avatarError && (
                <div className="p-3.5 text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 rounded-2xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{avatarError}</span>
                </div>
              )}

              {avatarSuccess && (
                <div className="p-3.5 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-2xl flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>প্রোফাইল ছবি সফলভাবে আপডেট করা হয়েছে!</span>
                </div>
              )}

              {/* Upload Card */}
              <div className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-indigo-50/60 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
                <div className="relative">
                  {currentPhoto ? (
                    <img
                      src={currentPhoto}
                      alt="Avatar Preview"
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-indigo-200 dark:border-indigo-800 shadow-md bg-white dark:bg-slate-800"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                      {initial}
                    </div>
                  )}
                  {avatarUpdating && (
                    <div className="absolute inset-0 bg-slate-900/60 rounded-2xl flex items-center justify-center text-white">
                      <Loader2 className="w-6 h-6 animate-spin" />
                    </div>
                  )}
                </div>

                <div className="space-y-3 flex-1 text-center sm:text-left">
                  <div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      ডিভাইস থেকে ছবি/লোগো নির্বাচন
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      JPG, PNG বা WebP ফরম্যাট। অটোমেটিক হাই-স্পিড অপ্টিমাইজড রেজোলিউশন।
                    </p>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <button
                      type="button"
                      disabled={avatarUpdating}
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-xs disabled:opacity-50"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      লোগো আপলোড করুন
                    </button>

                    {currentPhoto && (
                      <button
                        type="button"
                        disabled={avatarUpdating}
                        onClick={handleRemoveAvatar}
                        className="px-3 py-2 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/60 text-xs font-medium rounded-xl transition cursor-pointer border border-rose-200 dark:border-rose-900 disabled:opacity-50 flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        মুছে ফেলুন
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Preset Avatars */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                  বা দ্রুত অবতার নির্বাচন করুন (Preset Avatars)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {PRESET_AVATARS.map((preset) => {
                    const isSelected = currentPhoto === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        disabled={avatarUpdating}
                        onClick={() => handleSelectPreset(preset.url)}
                        className={`group relative p-2 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-1.5 text-center ${
                          isSelected
                            ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/60 ring-2 ring-indigo-500/30'
                            : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <img
                          src={preset.url}
                          alt={preset.title}
                          className="w-12 h-12 rounded-xl object-contain bg-white dark:bg-slate-800 shadow-xs group-hover:scale-105 transition"
                        />
                        <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                          {preset.title}
                        </span>
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Change Password */}
          {activeTab === 'security' && (
            <form onSubmit={handlePasswordChange} className="space-y-4 animate-in fade-in">
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  অ্যাকাউন্টের পাসওয়ার্ড পরিবর্তন করুন
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  আপনার অ্যাকাউন্টের নিরাপত্তা নিশ্চিত করতে শক্তিশালী পাসওয়ার্ড ব্যবহার করুন।
                </p>
              </div>

              {passError && (
                <div className="p-3.5 text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 rounded-2xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{passError}</span>
                </div>
              )}

              {passSuccess && (
                <div className="p-3.5 text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-2xl flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে! পরবর্তী লগইনে নতুন পাসওয়ার্ড ব্যবহার করুন।</span>
                </div>
              )}

              {/* Current Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  বর্তমান পাসওয়ার্ড (Current Password)
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showCurrentPass ? 'text' : 'password'}
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="বর্তমান পাসওয়ার্ড দিন"
                    className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/70 dark:bg-slate-800/60 text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showCurrentPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  নতুন পাসওয়ার্ড (New Password - কমপক্ষে ৬ অক্ষর)
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showNewPass ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="নতুন শক্তিশালী পাসওয়ার্ড দিন"
                    className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/70 dark:bg-slate-800/60 text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPass(!showNewPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {newPassword && (
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex gap-1.5 flex-1 max-w-[140px]">
                      <div
                        className={`h-1.5 flex-1 rounded-full ${
                          passStrength.score >= 1 ? passStrength.color.split(' ')[0] : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      />
                      <div
                        className={`h-1.5 flex-1 rounded-full ${
                          passStrength.score >= 2 ? passStrength.color.split(' ')[0] : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      />
                      <div
                        className={`h-1.5 flex-1 rounded-full ${
                          passStrength.score >= 3 ? passStrength.color.split(' ')[0] : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {passStrength.text}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  নতুন পাসওয়ার্ড নিশ্চিত করুন (Confirm Password)
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="নতুন পাসওয়ার্ডটি পুনরায় লিখুন"
                    className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/70 dark:bg-slate-800/60 text-slate-900 dark:text-white"
                  />
                </div>
                {confirmPassword && newPassword !== confirmPassword && (
                  <p className="text-[11px] text-rose-500 mt-1">পাসওয়ার্ড দুটি মিলছে না।</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={passUpdating || !currentPassword || !newPassword || newPassword !== confirmPassword}
                  className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl disabled:opacity-40 transition cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  {passUpdating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>পাসওয়ার্ড আপডেট করা হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>পাসওয়ার্ড সংরক্ষণ করুন</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* TAB 4: Statistics & Activity */}
          {activeTab === 'stats' && (
            <div className="space-y-5 animate-in fade-in">
              <div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                  আপনার অ্যাকাউন্ট কার্যকলাপ ও পরিসংখ্যান
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Bashar Smart Tools প্ল্যাটফর্মে আপনার সাম্প্রতিক কাজের সারাংশ।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
                    <span className="text-xs font-semibold">সংরক্ষিত নোট</span>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="mt-3">
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">
                      {stats.notesCount}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">টি নোট</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-purple-600 dark:text-purple-400">
                    <span className="text-xs font-semibold">ক্যালেন্ডার ইভেন্ট</span>
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="mt-3">
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">
                      {stats.eventsCount}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">টি টাস্ক</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
                    <span className="text-xs font-semibold">কুইজ পরীক্ষা</span>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="mt-3">
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">
                      {stats.quizCount}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">বার অংশ নিয়েছেন</span>
                  </div>
                </div>
              </div>

              {/* Status details */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" /> সেশন স্ট্যাটাস
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">লগইন করা সক্রিয় সেশন</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> সংস্করণ
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">v2.5 Pro Edition</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/70 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl border border-rose-200 dark:border-rose-900 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            লগআউট করুন
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 text-xs font-semibold rounded-xl transition cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
