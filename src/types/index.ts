export type ToolTab = 'dashboard' | 'quiz' | 'calendar' | 'notes';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface QuizAttempt {
  id: string;
  userId: string;
  category: string;
  quizTitle: string;
  totalQuestions: number;
  score: number;
  percentage: number;
  timeTakenSeconds: number;
  createdAt: string;
  answersSummary?: {
    questionId: string;
    question: string;
    selectedOption: number;
    correctOption: number;
    isCorrect: boolean;
  }[];
}

export type EventPriority = 'low' | 'medium' | 'high';
export type EventStatus = 'pending' | 'completed';

export interface CalendarEvent {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  startTime?: string; // HH:mm
  endTime?: string; // HH:mm
  priority: EventPriority;
  status: EventStatus;
  category: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export type TypingLanguage = 'en' | 'bn';
export type TypingDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'custom';

export interface TypingResult {
  id: string;
  userId: string;
  language: TypingLanguage;
  difficulty: TypingDifficulty;
  durationSeconds: number;
  wpm: number;
  cpm: number;
  accuracy: number;
  mistakes: number;
  totalChars: number;
  createdAt: string;
}

export interface NoteFolder {
  id: string;
  userId: string;
  name: string;
  color?: string;
  icon?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface SmartNote {
  id: string;
  userId: string;
  title: string;
  content: string;
  category: string;
  categories?: string[];
  labels?: string[];
  folderId?: string;
  folderName?: string;
  color: string;
  isPinned: boolean;
  isArchived: boolean;
  archivedAt?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}
