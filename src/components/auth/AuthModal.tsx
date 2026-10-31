import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  X,
  Mail,
  Lock,
  User as UserIcon,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Sparkles
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const { signUpWithEmail, loginWithEmail, resetPassword, getFriendlyErrorMessage } = useAuth();

  if (!isOpen) return null;

  const resetFormState = () => {
    setErrorMsg(null);
    setErrorCode(null);
    setSuccessMsg(null);
  };

  const handleModeChange = (newMode: 'login' | 'signup' | 'forgot') => {
    setMode(newMode);
    resetFormState();
  };

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetFormState();

    if (!validateEmail(email)) {
      setErrorMsg('দয়া করে সঠিক জিমেইল বা ইমেইল ঠিকানা দিন (Please enter a valid email address)');
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        if (!name.trim()) {
          throw new Error('দয়া করে আপনার পূর্ণ নাম লিখুন (Name is required)');
        }
        if (password.length < 6) {
          throw new Error('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে (Password must be at least 6 characters)');
        }
        if (password !== confirmPassword) {
          throw new Error('দুটি পাসওয়ার্ড মিলছে না (Passwords do not match)');
        }

        await signUpWithEmail(name, email, password);
        setSuccessMsg('অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে! ড্যাশবোর্ডে প্রবেশ করছেন...');
        setTimeout(() => {
          onClose();
        }, 1200);
      } else if (mode === 'login') {
        if (!password) {
          throw new Error('দয়া করে পাসওয়ার্ড দিন (Password is required)');
        }
        await loginWithEmail(email, password);
        setSuccessMsg('লগইন সফল হয়েছে! স্বাগতম...');
        setTimeout(() => {
          onClose();
        }, 800);
      } else if (mode === 'forgot') {
        await resetPassword(email);
        setSuccessMsg('পাসওয়ার্ড রিসেট করার লিংক আপনার ইমেইলে পাঠানো হয়েছে। অনুগ্রহ করে ইনবক্স চেক করুন।');
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      const code = err.code || '';
      setErrorCode(code);
      if (code) {
        setErrorMsg(getFriendlyErrorMessage(code));
      } else {
        setErrorMsg(err.message || 'একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800">
        {/* Header decoration */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 px-6 pt-7 pb-6 text-white">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-1.5 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold tracking-wide bg-white/20 rounded-full">
              Bashar Smart Tools
            </span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            {mode === 'login' && 'অ্যাকাউন্টে লগইন করুন'}
            {mode === 'signup' && 'নতুন অ্যাকাউন্ট তৈরি করুন'}
            {mode === 'forgot' && 'পাসওয়ার্ড পুনরুদ্ধার'}
          </h2>
          <p className="text-sm text-indigo-100 mt-1">
            {mode === 'login' && 'আপনার সংরক্ষিত কুইজ, ক্যালেন্ডার ও স্মার্ট নোট অ্যাক্সেস করুন।'}
            {mode === 'signup' && 'কয়েক সেকেন্ডে বিনামূল্যে যুক্ত হোন এবং আপনার ডেটা ক্লাউডে সংরক্ষণ করুন।'}
            {mode === 'forgot' && 'আপনার নিবন্ধিত Gmail দিন, আমরা একটি রিসেট লিংক পাঠাব।'}
          </p>
        </div>

        {/* Tab Switcher for Login / Signup */}
        {mode !== 'forgot' && (
          <div className="grid grid-cols-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 p-1.5 gap-1.5">
            <button
              type="button"
              onClick={() => handleModeChange('login')}
              className={`py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                mode === 'login'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              লগইন (Login)
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('signup')}
              className={`py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                mode === 'signup'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              সাইন আপ (Sign Up)
            </button>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {errorMsg && (
            <div className="mb-4 flex items-start gap-2.5 p-3.5 text-sm text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 rounded-xl animate-in fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
              <div className="flex-1">{errorMsg}</div>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 flex items-start gap-2.5 p-3.5 text-sm text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 rounded-xl animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
              <div className="flex-1 font-medium">{successMsg}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name (Sign Up only) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  আপনার পূর্ণ নাম (Full Name) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমন: মোঃ আবুল বাশার"
                    className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-slate-50/50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Gmail / ইমেইল ঠিকানা <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-slate-50/50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
            </div>

            {/* Password Field (for Login & Sign Up) */}
            {mode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    পাসওয়ার্ড (Password) <span className="text-rose-500">*</span>
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => handleModeChange('forgot')}
                      className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium hover:underline cursor-pointer"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={mode === 'signup' ? 'কমপক্ষে ৬ অক্ষর' : 'আপনার গোপন পাসওয়ার্ড'}
                    className="w-full pl-10 pr-11 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-slate-50/50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Confirm Password Field (Sign Up only) */}
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  পাসওয়ার্ড নিশ্চিত করুন (Confirm Password) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="পাসওয়ার্ডটি পুনরায় লিখুন"
                    className="w-full pl-10 pr-11 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-slate-50/50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Action Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-md shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 transition disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>
                    {mode === 'login' && 'লগইন করুন'}
                    {mode === 'signup' && 'অ্যাকাউন্ট তৈরি করুন'}
                    {mode === 'forgot' && 'রিসেট লিংক পাঠান'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Bottom Switcher text */}
          <div className="mt-6 text-center text-xs text-slate-600 dark:text-slate-400">
            {mode === 'login' && (
              <p>
                নতুন ব্যবহারকারী?{' '}
                <button
                  type="button"
                  onClick={() => handleModeChange('signup')}
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
                >
                  এখানে ক্লিক করে সাইন আপ করুন
                </button>
              </p>
            )}
            {mode === 'signup' && (
              <p>
                আগে থেকেই অ্যাকাউন্ট আছে?{' '}
                <button
                  type="button"
                  onClick={() => handleModeChange('login')}
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
                >
                  লগইন করুন
                </button>
              </p>
            )}
            {mode === 'forgot' && (
              <button
                type="button"
                onClick={() => handleModeChange('login')}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
              >
                ← লগইন পেজে ফিরে যান
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
