import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signUpWithEmail: (name: string, email: string, pass: string) => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  updateName: (newName: string) => Promise<void>;
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
    default:
      return 'একটি সমস্যা দেখা দিয়েছে। দয়া করে আবার চেষ্টা করুন। (Authentication error: ' + errorCode + ')';
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync profile document from Firestore
  const fetchUserProfile = async (firebaseUser: User) => {
    try {
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setProfile(userSnap.data() as UserProfile);
      } else {
        // Auto-create initial profile document if missing
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || 'Bashar User',
          photoURL: firebaseUser.photoURL || undefined,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await setDoc(userRef, newProfile);
        setProfile(newProfile);
      }
    } catch (err) {
      console.error('Error fetching user profile:', err);
      // Fallback local profile representation so user can still see their name
      setProfile({
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || 'Bashar User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchUserProfile(currentUser);
      } else {
        setProfile(null);
      }
      setLoading(false);
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
      setProfile(newProfile);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `users/${cred.user.uid}`);
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

    const cred = await signInWithEmailAndPassword(auth, trimmedEmail, pass);
    await fetchUserProfile(cred.user);
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
    await sendPasswordResetEmail(auth, trimmedEmail);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setProfile(null);
  };

  const updateName = async (newName: string) => {
    if (!user) return;
    const trimmed = newName.trim();
    if (!trimmed) throw new Error('নাম খালি হতে পারে না। (Name cannot be empty)');

    await updateProfile(user, { displayName: trimmed });
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, { displayName: trimmed, updatedAt: new Date().toISOString() }, { merge: true });

    setProfile((prev) => (prev ? { ...prev, displayName: trimmed } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signUpWithEmail,
        loginWithEmail,
        loginWithGoogle,
        resetPassword,
        logout,
        updateName,
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
