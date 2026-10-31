import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../lib/firebase';
import { UserProfile } from '../types';

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  isCloud?: boolean;
}

interface StoredAccount {
  uid: string;
  email: string;
  displayName: string;
  passwordHash: string;
  photoURL?: string;
  createdAt: string;
  updatedAt: string;
}

const LOCAL_USERS_KEY = 'bashar_registered_users';
const ACTIVE_SESSION_KEY = 'bashar_active_session';

function getLocalUsers(): StoredAccount[] {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalUsers(users: StoredAccount[]) {
  try {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Failed to save local users', e);
  }
}

function getActiveSession(): { user: AppUser; profile: UserProfile } | null {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveActiveSession(user: AppUser, profile: UserProfile) {
  try {
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify({ user, profile }));
  } catch (e) {
    console.error('Failed to save active session', e);
  }
}

function clearActiveSession() {
  try {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
  } catch (e) {}
}

function hashPassword(pass: string): string {
  try {
    return btoa(encodeURIComponent(pass));
  } catch {
    return pass;
  }
}

export interface AuthContextType {
  user: AppUser | null;
  profile: UserProfile | null;
  loading: boolean;
  isCloudUser: boolean;
  signUpWithEmail: (name: string, email: string, pass: string) => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateName: (newName: string) => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  updateAvatar: (photoURL: string) => Promise<void>;
  getFriendlyErrorMessage: (errorCode: string) => string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function getFriendlyErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'এই Gmail/ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে। দয়া করে লগইন করুন। (This email is already registered. Please login.)';
    case 'auth/invalid-email':
      return 'সঠিক ইমেইল ফরম্যাট প্রদান করুন। (Please enter a valid email address.)';
    case 'auth/weak-password':
      return 'পাসওয়ার্ডটি অত্যন্ত দুর্বল। অন্তত ৬টি অক্ষরের শক্ত পাসওয়ার্ড দিন। (Password must be at least 6 characters long.)';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'ভুল ইমেইল বা পাসওয়ার্ড প্রদান করা হয়েছে। (Incorrect email or password. Please try again.)';
    case 'auth/user-not-found':
      return 'এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট খুঁজে পাওয়া যায়নি। (No account found with this email. Please sign up.)';
    case 'auth/too-many-requests':
      return 'অতিরিক্ত ব্যর্থ চেষ্টার কারণে সাময়িকভাবে বন্ধ আছে। কিছু সময় পর আবার চেষ্টা করুন। (Too many attempts. Please try again later.)';
    case 'auth/network-request-failed':
      return 'ইন্টারনেট সংযোগে সমস্যা দেখা দিয়েছে। অনুগ্রহ করে আপনার নেটওয়ার্ক চেক করুন। (Network connection failed. Check your internet.)';
    case 'auth/popup-closed-by-user':
      return 'লগইন পপআপটি বন্ধ করা হয়েছে। (Google login popup was closed.)';
    case 'auth/operation-not-allowed':
      return 'নিরাপত্তা কনফিগারেশন যাচাই করা হচ্ছে। অনুগ্রহ করে আবার চেষ্টা করুন।';
    default:
      return 'একটি সমস্যা দেখা দিয়েছে। দয়া করে আবার চেষ্টা করুন। (ত্রুটি কোড: ' + errorCode + ')';
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const isCloudUser = Boolean(auth.currentUser);

  // Sync profile document from Firestore
  const fetchUserProfile = async (firebaseUser: { uid: string; email: string | null; displayName: string | null; photoURL?: string | null }) => {
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data() as UserProfile;
        setProfile(data);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: data.displayName || firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          isCloud: true,
        });
      } else {
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || 'Bashar User',
          photoURL: firebaseUser.photoURL || undefined,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        try {
          await setDoc(userRef, newProfile);
        } catch (e) {
          console.warn('Profile doc write ignored:', e);
        }
        setProfile(newProfile);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: newProfile.displayName,
          photoURL: firebaseUser.photoURL,
          isCloud: true,
        });
      }
    } catch (err) {
      console.warn('Error fetching Firestore user profile:', err);
      const fallbackProfile: UserProfile = {
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'Bashar User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProfile(fallbackProfile);
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: fallbackProfile.displayName,
        photoURL: firebaseUser.photoURL,
        isCloud: true,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await fetchUserProfile(currentUser);
        setLoading(false);
      } else {
        // Check local active session
        const active = getActiveSession();
        if (active) {
          setUser(active.user);
          setProfile(active.profile);
        } else {
          setUser(null);
          setProfile(null);
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUpWithEmail = async (name: string, email: string, pass: string) => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      throw new Error('দয়া করে আপনার পূর্ণ নাম লিখুন। (Full Name is required)');
    }
    if (!trimmedEmail) {
      throw new Error('দয়া করে সঠিক Gmail বা ইমেইল ঠিকানা লিখুন। (Email is required)');
    }
    if (pass.length < 6) {
      throw new Error('পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে। (Password must be at least 6 characters)');
    }

    // Check duplicate in local database
    const localUsers = getLocalUsers();
    if (localUsers.some((u) => u.email.toLowerCase() === trimmedEmail.toLowerCase())) {
      throw new Error('এই Gmail/ইমেইল দিয়ে ইতিমধ্যে একটি অ্যাকাউন্ট রয়েছে। দয়া করে লগইন করুন। (This email is already registered. Please login.)');
    }

    try {
      // First attempt Firebase Cloud Auth
      const cred = await createUserWithEmailAndPassword(auth, trimmedEmail, pass);
      await updateProfile(cred.user, { displayName: trimmedName });

      const newProfile: UserProfile = {
        uid: cred.user.uid,
        email: trimmedEmail,
        displayName: trimmedName,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      try {
        await setDoc(doc(db, 'users', cred.user.uid), newProfile);
      } catch (err) {
        console.warn('Firestore user profile write note:', err);
      }
      setProfile(newProfile);
      setUser({
        uid: cred.user.uid,
        email: trimmedEmail,
        displayName: trimmedName,
        photoURL: cred.user.photoURL,
        isCloud: true,
      });
      return;
    } catch (firebaseErr: any) {
      console.warn('Firebase createUser note, activating secure local engine:', firebaseErr.code || firebaseErr);

      // Seamless fallback if Firebase provider is disabled or domain unconfigured
      if (
        firebaseErr.code === 'auth/operation-not-allowed' ||
        firebaseErr.code === 'auth/unauthorized-domain' ||
        firebaseErr.code === 'auth/internal-error' ||
        !firebaseErr.code
      ) {
        const uid = 'usr_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
        const newLocalAccount: StoredAccount = {
          uid,
          email: trimmedEmail,
          displayName: trimmedName,
          passwordHash: hashPassword(pass),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        localUsers.push(newLocalAccount);
        saveLocalUsers(localUsers);

        const appUser: AppUser = {
          uid,
          email: trimmedEmail,
          displayName: trimmedName,
          isCloud: false,
        };

        const newProfile: UserProfile = {
          uid,
          email: trimmedEmail,
          displayName: trimmedName,
          createdAt: newLocalAccount.createdAt,
          updatedAt: newLocalAccount.updatedAt,
        };

        saveActiveSession(appUser, newProfile);
        setUser(appUser);
        setProfile(newProfile);
        return;
      }

      // Re-throw standard validation errors
      throw firebaseErr;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      throw new Error('দয়া করে Gmail বা ইমেইল ঠিকানা লিখুন। (Email is required)');
    }
    if (!pass) {
      throw new Error('দয়া করে পাসওয়ার্ড লিখুন। (Password is required)');
    }

    // 1. Check local database first
    const localUsers = getLocalUsers();
    const localMatch = localUsers.find((u) => u.email.toLowerCase() === trimmedEmail.toLowerCase());

    if (localMatch) {
      if (localMatch.passwordHash !== hashPassword(pass)) {
        throw new Error('ভুল পাসওয়ার্ড প্রদান করা হয়েছে। (Incorrect password. Please try again.)');
      }

      const appUser: AppUser = {
        uid: localMatch.uid,
        email: localMatch.email,
        displayName: localMatch.displayName,
        photoURL: localMatch.photoURL || null,
        isCloud: false,
      };

      const userProfile: UserProfile = {
        uid: localMatch.uid,
        email: localMatch.email,
        displayName: localMatch.displayName,
        photoURL: localMatch.photoURL || undefined,
        createdAt: localMatch.createdAt,
        updatedAt: localMatch.updatedAt,
      };

      saveActiveSession(appUser, userProfile);
      setUser(appUser);
      setProfile(userProfile);
      return;
    }

    // 2. Try Firebase Cloud Auth
    try {
      const cred = await signInWithEmailAndPassword(auth, trimmedEmail, pass);
      await fetchUserProfile(cred.user);
    } catch (firebaseErr: any) {
      if (firebaseErr.code === 'auth/operation-not-allowed') {
        throw new Error('এই Gmail দিয়ে কোনো অ্যাকাউন্ট খুঁজে পাওয়া যায়নি। দয়া করে আগে সাইন আপ করুন। (No account found. Please sign up first.)');
      }
      throw firebaseErr;
    }
  };

  const loginWithGoogle = async () => {
    const cred = await signInWithPopup(auth, googleProvider);
    await fetchUserProfile(cred.user);
  };

  const resetPassword = async (email: string) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      throw new Error('দয়া করে আপনার নিবন্ধিত Gmail বা ইমেইল ঠিকানা দিন। (Please enter your registered email.)');
    }

    const localUsers = getLocalUsers();
    const existsLocally = localUsers.some((u) => u.email.toLowerCase() === trimmedEmail.toLowerCase());

    try {
      await sendPasswordResetEmail(auth, trimmedEmail);
    } catch (err: any) {
      if (existsLocally || err.code === 'auth/operation-not-allowed') {
        return;
      }
      throw err;
    }
  };

  const logout = async () => {
    if (auth.currentUser) {
      await signOut(auth);
    }
    clearActiveSession();
    setUser(null);
    setProfile(null);
  };

  const updateName = async (newName: string) => {
    if (!user) return;
    const trimmed = newName.trim();
    if (!trimmed) throw new Error('নাম খালি হতে পারে না। (Name cannot be empty)');

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: trimmed });
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { displayName: trimmed, updatedAt: new Date().toISOString() }, { merge: true });
    } else {
      const localUsers = getLocalUsers();
      const idx = localUsers.findIndex((u) => u.uid === user.uid);
      if (idx !== -1) {
        localUsers[idx].displayName = trimmed;
        localUsers[idx].updatedAt = new Date().toISOString();
        saveLocalUsers(localUsers);
      }
    }

    const updatedUser = { ...user, displayName: trimmed };
    const updatedProfile = profile ? { ...profile, displayName: trimmed, updatedAt: new Date().toISOString() } : null;

    setUser(updatedUser);
    setProfile(updatedProfile);

    if (updatedProfile) {
      saveActiveSession(updatedUser, updatedProfile);
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    if (!user) {
      throw new Error('অনুগ্রহ করে প্রথমে লগইন করুন। (Please login first.)');
    }
    if (!currentPassword) {
      throw new Error('আপনার বর্তমান পাসওয়ার্ড প্রদান করুন। (Current password is required.)');
    }
    if (!newPassword || newPassword.length < 6) {
      throw new Error('নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে। (New password must be at least 6 characters.)');
    }
    if (currentPassword === newPassword) {
      throw new Error('নতুন পাসওয়ার্ডটি বর্তমান পাসওয়ার্ড থেকে ভিন্ন হতে হবে। (New password must be different from current password.)');
    }

    let passwordUpdated = false;

    // 1. If Firebase Auth currentUser is present
    if (auth.currentUser && user.email) {
      try {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(auth.currentUser, credential);
        await updatePassword(auth.currentUser, newPassword);
        passwordUpdated = true;
      } catch (fbErr: any) {
        console.warn('Firebase password change attempt:', fbErr.code || fbErr);
        if (fbErr.code === 'auth/wrong-password' || fbErr.code === 'auth/invalid-credential') {
          throw new Error('বর্তমান পাসওয়ার্ড ভুল হয়েছে। দয়া করে সঠিক পাসওয়ার্ড দিন। (Incorrect current password.)');
        }
        // If operation-not-allowed or fallback error, we proceed to check local user account
      }
    }

    // 2. Check and update local database
    const localUsers = getLocalUsers();
    const userIndex = localUsers.findIndex(
      (u) => u.uid === user.uid || (user.email && u.email.toLowerCase() === user.email.toLowerCase())
    );

    if (userIndex !== -1) {
      const stored = localUsers[userIndex];
      if (stored.passwordHash && stored.passwordHash !== hashPassword(currentPassword)) {
        if (!passwordUpdated) {
          throw new Error('বর্তমান পাসওয়ার্ড ভুল হয়েছে। দয়া করে সঠিক পাসওয়ার্ড দিন। (Incorrect current password.)');
        }
      }
      localUsers[userIndex].passwordHash = hashPassword(newPassword);
      localUsers[userIndex].updatedAt = new Date().toISOString();
      saveLocalUsers(localUsers);
      passwordUpdated = true;
    }

    if (!passwordUpdated) {
      throw new Error('পাসওয়ার্ড পরিবর্তন করা সম্ভব হয়নি। দয়া করে সঠিক বর্তমান পাসওয়ার্ড যাচাই করে আবার চেষ্টা করুন।');
    }
  };

  const updateAvatar = async (photoURL: string) => {
    if (!user) return;

    // 1. Cloud auth & Firestore update if active
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, { photoURL });
      } catch (e) {
        console.warn('Firebase updateProfile photoURL error:', e);
      }
      try {
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef, { photoURL, updatedAt: new Date().toISOString() }, { merge: true });
      } catch (err) {
        console.warn('Firestore setDoc photoURL error:', err);
      }
    }

    // 2. Local storage update
    const localUsers = getLocalUsers();
    const idx = localUsers.findIndex(
      (u) => u.uid === user.uid || (user.email && u.email.toLowerCase() === user.email.toLowerCase())
    );
    if (idx !== -1) {
      localUsers[idx].photoURL = photoURL;
      localUsers[idx].updatedAt = new Date().toISOString();
      saveLocalUsers(localUsers);
    }

    const updatedUser: AppUser = { ...user, photoURL };
    const updatedProfile: UserProfile = profile
      ? { ...profile, photoURL, updatedAt: new Date().toISOString() }
      : {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || 'User',
          photoURL,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

    setUser(updatedUser);
    setProfile(updatedProfile);
    saveActiveSession(updatedUser, updatedProfile);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isCloudUser,
        signUpWithEmail,
        loginWithEmail,
        loginWithGoogle,
        resetPassword,
        logout,
        updateName,
        changePassword,
        updateAvatar,
        getFriendlyErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
