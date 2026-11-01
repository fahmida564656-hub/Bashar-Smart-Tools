import { QuizQuestion } from '../types';

export interface QuizCategoryItem {
  id: string;
  nameBn: string;
  nameEn: string;
  group?: string;
  icon: string;
  color: string;
}

export const QUIZ_CATEGORIES: QuizCategoryItem[] = [
  {
    "id": "all",
    "nameBn": "সকল বিষয় (১৫০০টি প্রশ্ন)",
    "nameEn": "All Topics (1,500 Questions)",
    "group": "all",
    "icon": "Sparkles",
    "color": "bg-indigo-600"
  },
  {
    "id": "bangla_affairs",
    "nameBn": "১. বাংলাদেশ বিষয়াবলি",
    "nameEn": "Bangladesh Affairs",
    "group": "general",
    "icon": "Flag",
    "color": "bg-emerald-600"
  },
  {
    "id": "international",
    "nameBn": "২. আন্তর্জাতিক বিষয়াবলি",
    "nameEn": "International Affairs",
    "group": "general",
    "icon": "Globe",
    "color": "bg-blue-600"
  },
  {
    "id": "science",
    "nameBn": "৩. সাধারণ বিজ্ঞান ও প্রকৃতি",
    "nameEn": "General Science",
    "group": "science",
    "icon": "Atom",
    "color": "bg-purple-600"
  },
  {
    "id": "health",
    "nameBn": "৪. মানবদেহ ও স্বাস্থ্য",
    "nameEn": "Human Body & Health",
    "group": "science",
    "icon": "HeartPulse",
    "color": "bg-rose-500"
  },
  {
    "id": "ict",
    "nameBn": "৫. তথ্যপ্রযুক্তি ও কম্পিউটার",
    "nameEn": "ICT & Computer",
    "group": "science",
    "icon": "Cpu",
    "color": "bg-cyan-600"
  },
  {
    "id": "math",
    "nameBn": "৬. সাধারণ গণিত ও যুক্তি",
    "nameEn": "Basic Math & Logic",
    "group": "math",
    "icon": "Calculator",
    "color": "bg-amber-600"
  },
  {
    "id": "bangla",
    "nameBn": "৭. বাংলা ভাষা ও ব্যাকরণ",
    "nameEn": "Bangla Language",
    "group": "language",
    "icon": "BookOpen",
    "color": "bg-teal-600"
  },
  {
    "id": "english",
    "nameBn": "৮. ইংরেজি ভাষা ও ব্যাকরণ",
    "nameEn": "English Grammar",
    "group": "language",
    "icon": "Languages",
    "color": "bg-indigo-500"
  },
  {
    "id": "islamic",
    "nameBn": "৯. ইসলামিক জ্ঞান ও মূল্যবোধ",
    "nameEn": "Islamic Knowledge",
    "group": "social",
    "icon": "Moon",
    "color": "bg-emerald-700"
  },
  {
    "id": "sports",
    "nameBn": "১০. খেলাধুলা ও বিনোদন",
    "nameEn": "Sports & Entertainment",
    "group": "social",
    "icon": "Trophy",
    "color": "bg-orange-500"
  },
  {
    "id": "world_geography",
    "nameBn": "১১. বিশ্ব ভূগোল ও মহাদেশ",
    "nameEn": "World Geography",
    "group": "general",
    "icon": "Compass",
    "color": "bg-sky-600"
  },
  {
    "id": "physics",
    "nameBn": "১২. পদার্থবিজ্ঞান",
    "nameEn": "Physics",
    "group": "science",
    "icon": "Zap",
    "color": "bg-violet-600"
  },
  {
    "id": "chemistry",
    "nameBn": "১৩. রসায়ন বিজ্ঞান",
    "nameEn": "Chemistry",
    "group": "science",
    "icon": "FlaskConical",
    "color": "bg-pink-600"
  },
  {
    "id": "biology",
    "nameBn": "১৪. জীববিজ্ঞান ও প্রাণীজগৎ",
    "nameEn": "Biology & Zoology",
    "group": "science",
    "icon": "Dna",
    "color": "bg-green-600"
  },
  {
    "id": "astronomy",
    "nameBn": "১৫. মহাকাশ ও জ্যোতির্বিজ্ঞান",
    "nameEn": "Space & Astronomy",
    "group": "science",
    "icon": "Telescope",
    "color": "bg-slate-700"
  },
  {
    "id": "world_history",
    "nameBn": "১৬. বিশ্ব ইতিহাস ও সভ্যতা",
    "nameEn": "World History",
    "group": "general",
    "icon": "Landmark",
    "color": "bg-amber-700"
  },
  {
    "id": "bangladesh_heritage",
    "nameBn": "১৭. বাংলাদেশ ঐতিহ্য ও সংস্কৃতি",
    "nameEn": "Bangladesh Heritage",
    "group": "general",
    "icon": "ShieldCheck",
    "color": "bg-emerald-800"
  },
  {
    "id": "inventions",
    "nameBn": "১৮. আবিষ্কার ও বিজ্ঞানী",
    "nameEn": "Inventions & Scientists",
    "group": "science",
    "icon": "Lightbulb",
    "color": "bg-yellow-600"
  },
  {
    "id": "nutrition_medical",
    "nameBn": "১৯. পুষ্টি ও চিকিৎসাবিজ্ঞান",
    "nameEn": "Nutrition & Medical Science",
    "group": "science",
    "icon": "Stethoscope",
    "color": "bg-red-600"
  },
  {
    "id": "environment",
    "nameBn": "২০. পরিবেশ ও জলবায়ু রক্ষা",
    "nameEn": "Ecology & Climate",
    "group": "science",
    "icon": "Leaf",
    "color": "bg-lime-600"
  },
  {
    "id": "capitals_organizations",
    "nameBn": "২১. দেশ, রাজধানী ও বিশ্বসংস্থা",
    "nameEn": "Capitals & Organizations",
    "group": "general",
    "icon": "Building2",
    "color": "bg-blue-700"
  },
  {
    "id": "advanced_math",
    "nameBn": "২২. উচ্চতর গণিত ও যুক্তি",
    "nameEn": "Advanced Math & Logic",
    "group": "math",
    "icon": "Binary",
    "color": "bg-orange-600"
  },
  {
    "id": "programming_tech",
    "nameBn": "২৩. প্রোগ্রামিং ও আধুনিক প্রযুক্তি",
    "nameEn": "Coding & Modern Tech",
    "group": "science",
    "icon": "Code2",
    "color": "bg-indigo-700"
  },
  {
    "id": "english_advanced",
    "nameBn": "২৪. English Vocabulary & Usage",
    "nameEn": "English Vocabulary",
    "group": "language",
    "icon": "BookMarked",
    "color": "bg-blue-800"
  },
  {
    "id": "islamic_history",
    "nameBn": "২৫. ইসলামিক ইতিহাস ও খেলাফত",
    "nameEn": "Islamic History",
    "group": "social",
    "icon": "ScrollText",
    "color": "bg-teal-700"
  },
  {
    "id": "sports_olympics",
    "nameBn": "২৬. অলিম্পিক ও বিশ্ব ক্রীড়া",
    "nameEn": "Olympics & World Sports",
    "group": "social",
    "icon": "Medal",
    "color": "bg-yellow-700"
  },
  {
    "id": "world_literature_arts",
    "nameBn": "২৭. সাহিত্য, শিল্প ও সংগীত",
    "nameEn": "Literature, Art & Music",
    "group": "social",
    "icon": "Palette",
    "color": "bg-fuchsia-600"
  },
  {
    "id": "agriculture_botany",
    "nameBn": "২৮. কৃষি, খাদ্য ও উদ্ভিদবিজ্ঞান",
    "nameEn": "Agriculture & Botany",
    "group": "science",
    "icon": "Sprout",
    "color": "bg-emerald-600"
  },
  {
    "id": "economics_commerce",
    "nameBn": "২৯. অর্থনীতি, ব্যাংকিং ও বাণিজ্য",
    "nameEn": "Economics & Banking",
    "group": "social",
    "icon": "TrendingUp",
    "color": "bg-cyan-700"
  },
  {
    "id": "ethics_society",
    "nameBn": "৩০. নীতিশাস্ত্র ও সুনাগরিকতা",
    "nameEn": "Ethics, Society & Values",
    "group": "social",
    "icon": "HeartHandshake",
    "color": "bg-rose-600"
  }
];

export const DEFAULT_QUESTIONS: QuizQuestion[] = [
  {
    "id": "q-1",
    "num": "১",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের রাজধানীর নাম কী?",
    "options": [
      "চট্টগ্রাম",
      "ঢাকা",
      "সিলেট",
      "রাজশাহী"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ঢাকা"
  },
  {
    "id": "q-2",
    "num": "২",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় ফুল কোনটি?",
    "options": [
      "গোলাপ",
      "জবা",
      "শাপলা",
      "বেলি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) শাপলা"
  },
  {
    "id": "q-3",
    "num": "৩",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় ফল কোনটি?",
    "options": [
      "আম",
      "কাঁঠাল",
      "কলা",
      "লিচু"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কাঁঠাল"
  },
  {
    "id": "q-4",
    "num": "৪",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় মাছ কোনটি?",
    "options": [
      "রুই",
      "কাতলা",
      "ইলিশ",
      "বোয়াল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ইলিশ"
  },
  {
    "id": "q-5",
    "num": "৫",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় পাখি কোনটি?",
    "options": [
      "ময়না",
      "দোয়েল",
      "টিয়া",
      "কাক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দোয়েল"
  },
  {
    "id": "q-6",
    "num": "৬",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় পশু কোনটি?",
    "options": [
      "হাতি",
      "হরিণ",
      "রয়েল বেঙ্গল টাইগার",
      "সিংহ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) রয়েল বেঙ্গল টাইগার"
  },
  {
    "id": "q-7",
    "num": "৭",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় কবি কে?",
    "options": [
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "জসীমউদ্দীন",
      "জীবনানন্দ দাশ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কাজী নজরুল ইসলাম"
  },
  {
    "id": "q-8",
    "num": "৮",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের স্বাধীনতা দিবস কবে?",
    "options": [
      "২১ ফেব্রুয়ারি",
      "২৬ মার্চ",
      "১৬ ডিসেম্বর",
      "১৪ এপ্রিল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২৬ মার্চ"
  },
  {
    "id": "q-9",
    "num": "৯",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের বিজয় দিবস কবে?",
    "options": [
      "২৬ মার্চ",
      "২১ ফেব্রুয়ারি",
      "১৬ ডিসেম্বর",
      "১ মে"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৬ ডিসেম্বর"
  },
  {
    "id": "q-10",
    "num": "১০",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের রাষ্ট্রভাষা কী?",
    "options": [
      "ইংরেজি",
      "আরবি",
      "হিন্দি",
      "বাংলা"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) বাংলা"
  },
  {
    "id": "q-11",
    "num": "১১",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় খেলা কী?",
    "options": [
      "ক্রিকেট",
      "ফুটবল",
      "কাবাডি",
      "হকি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) কাবাডি"
  },
  {
    "id": "q-12",
    "num": "১২",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় সংসদ ভবনের স্থপতি কে?",
    "options": [
      "লুই আই কান",
      "এফ আর খান",
      "মাজহারুল ইসলাম",
      "লে করবুজিয়ে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লুই আই কান"
  },
  {
    "id": "q-13",
    "num": "১৩",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় মসজিদের নাম কী?",
    "options": [
      "ষাট গম্বুজ মসজিদ",
      "বায়তুল মোকাররম",
      "তারা মসজিদ",
      "আতিয়া মসজিদ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বায়তুল মোকাররম"
  },
  {
    "id": "q-14",
    "num": "১৪",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের দীর্ঘতম সমুদ্রসৈকত কোথায়?",
    "options": [
      "কুয়াকাটা",
      "পতেঙ্গা",
      "কক্সবাজার",
      "সেন্ট মার্টিন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) কক্সবাজার"
  },
  {
    "id": "q-15",
    "num": "১৫",
    "category": "bangla_affairs",
    "question": "সুন্দরবন কোন প্রাণীর জন্য বিখ্যাত?",
    "options": [
      "হাতি",
      "রয়েল বেঙ্গল টাইগার",
      "সিংহ",
      "জিরাফ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রয়েল বেঙ্গল টাইগার"
  },
  {
    "id": "q-16",
    "num": "১৬",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের মুদ্রার নাম কী?",
    "options": [
      "রুপি",
      "ডলার",
      "টাকা",
      "দিনার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) টাকা"
  },
  {
    "id": "q-17",
    "num": "১৭",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় সংগীতের রচয়িতা কে?",
    "options": [
      "কাজী নজরুল ইসলাম",
      "রবীন্দ্রনাথ ঠাকুর",
      "জসীমউদ্দীন",
      "দ্বিজেন্দ্রলাল রায়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রবীন্দ্রনাথ ঠাকুর"
  },
  {
    "id": "q-18",
    "num": "১৮",
    "category": "bangla_affairs",
    "question": "কেন্দ্রীয় শহীদ মিনার কোথায় অবস্থিত?",
    "options": [
      "চট্টগ্রাম",
      "সিলেট",
      "ঢাকা",
      "খুলনা"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ঢাকা"
  },
  {
    "id": "q-19",
    "num": "১৯",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?",
    "options": [
      "শেখ মুজিবুর রহমান",
      "তাজউদ্দীন আহমদ",
      "সৈয়দ নজরুল ইসলাম",
      "জিয়াউর রহমান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) তাজউদ্দীন আহমদ"
  },
  {
    "id": "q-20",
    "num": "২০",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের মুক্তিযুদ্ধ কত মাস স্থায়ী হয়েছিল?",
    "options": [
      "৬ মাস",
      "৭ মাস",
      "৯ মাস",
      "১২ মাস"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯ মাস"
  },
  {
    "id": "q-21",
    "num": "২১",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় পতাকায় কয়টি রং রয়েছে?",
    "options": [
      "১টি",
      "২টি",
      "৩টি",
      "৪টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২টি"
  },
  {
    "id": "q-22",
    "num": "২২",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় পতাকার মাঝখানে কোন রঙের বৃত্ত রয়েছে?",
    "options": [
      "নীল",
      "হলুদ",
      "লাল",
      "সাদা"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) লাল"
  },
  {
    "id": "q-23",
    "num": "২৩",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের প্রথম কৃত্রিম উপগ্রহের নাম কী?",
    "options": [
      "বাংলাদেশ-১",
      "বঙ্গবন্ধু স্যাটেলাইট-১",
      "পদ্মা স্যাটেলাইট",
      "বিজয় স্যাটেলাইট"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বঙ্গবন্ধু স্যাটেলাইট-১"
  },
  {
    "id": "q-24",
    "num": "২৪",
    "category": "bangla_affairs",
    "question": "বঙ্গবন্ধু স্যাটেলাইট-১ কত সালে উৎক্ষেপণ করা হয়?",
    "options": [
      "২০১৫",
      "২০১৬",
      "২০১৮",
      "২০২০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২০১৮"
  },
  {
    "id": "q-25",
    "num": "২৫",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের বৃহত্তম ম্যানগ্রোভ বন কোনটি?",
    "options": [
      "ভাওয়াল বন",
      "মধুপুর বন",
      "সুন্দরবন",
      "লাউয়াছড়া বন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) সুন্দরবন"
  },
  {
    "id": "q-26",
    "num": "২৬",
    "category": "bangla_affairs",
    "question": "পাহাড়পুর বৌদ্ধবিহার কোন জেলায় অবস্থিত?",
    "options": [
      "নওগাঁ",
      "বগুড়া",
      "রাজশাহী",
      "দিনাজপুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নওগাঁ"
  },
  {
    "id": "q-27",
    "num": "২৭",
    "category": "bangla_affairs",
    "question": "ষাট গম্বুজ মসজিদ কোন জেলায় অবস্থিত?",
    "options": [
      "খুলনা",
      "বাগেরহাট",
      "যশোর",
      "সাতক্ষীরা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বাগেরহাট"
  },
  {
    "id": "q-28",
    "num": "২৮",
    "category": "bangla_affairs",
    "question": "লালবাগ কেল্লা কোথায় অবস্থিত?",
    "options": [
      "ঢাকায়",
      "সিলেটে",
      "রাজশাহীতে",
      "কুমিল্লায়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঢাকায়"
  },
  {
    "id": "q-29",
    "num": "২৯",
    "category": "bangla_affairs",
    "question": "আহসান মঞ্জিল কোথায় অবস্থিত?",
    "options": [
      "পুরান ঢাকা",
      "চট্টগ্রাম",
      "ময়মনসিংহ",
      "বরিশাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পুরান ঢাকা"
  },
  {
    "id": "q-30",
    "num": "৩০",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের প্রধান খাদ্যশস্য কোনটি?",
    "options": [
      "গম",
      "ভুট্টা",
      "ধান",
      "যব"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ধান"
  },
  {
    "id": "q-31",
    "num": "৩১",
    "category": "bangla_affairs",
    "question": "কাপ্তাই হ্রদ কোন জেলায় অবস্থিত?",
    "options": [
      "বান্দরবান",
      "রাঙামাটি",
      "খাগড়াছড়ি",
      "কক্সবাজার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রাঙামাটি"
  },
  {
    "id": "q-32",
    "num": "৩২",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের প্রধান অর্থকরী ফসল কোনটি?",
    "options": [
      "পাট",
      "আলু",
      "গাজর",
      "পেঁয়াজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাট"
  },
  {
    "id": "q-33",
    "num": "৩৩",
    "category": "bangla_affairs",
    "question": "আন্তর্জাতিক মাতৃভাষা দিবস কবে?",
    "options": [
      "২৬ মার্চ",
      "১৬ ডিসেম্বর",
      "২১ ফেব্রুয়ারি",
      "১ জানুয়ারি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২১ ফেব্রুয়ারি"
  },
  {
    "id": "q-34",
    "num": "৩৪",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের স্বাধীনতার পর প্রথম জাতীয় সংসদ নির্বাচন কত সালে অনুষ্ঠিত হয়?",
    "options": [
      "১৯৭১",
      "১৯৭২",
      "১৯৭৩",
      "১৯৭৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৭৩"
  },
  {
    "id": "q-35",
    "num": "৩৫",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের মুক্তিযুদ্ধের সর্বাধিনায়ক কে ছিলেন?",
    "options": [
      "জেনারেল ওসমানী",
      "তাজউদ্দীন আহমদ",
      "সৈয়দ নজরুল ইসলাম",
      "এম. মনসুর আলী"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জেনারেল ওসমানী"
  },
  {
    "id": "q-36",
    "num": "৩৬",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত?",
    "options": [
      "গাজীপুর",
      "সাভার",
      "নারায়ণগঞ্জ",
      "মুন্সীগঞ্জ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সাভার"
  },
  {
    "id": "q-37",
    "num": "৩৭",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের সবচেয়ে বড় দ্বীপ কোনটি?",
    "options": [
      "সন্দ্বীপ",
      "হাতিয়া",
      "ভোলা",
      "মহেশখালী"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ভোলা"
  },
  {
    "id": "q-38",
    "num": "৩৮",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের চা উৎপাদনের জন্য কোন অঞ্চল বিখ্যাত?",
    "options": [
      "সিলেট",
      "বরিশাল",
      "ফরিদপুর",
      "কুষ্টিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সিলেট"
  },
  {
    "id": "q-39",
    "num": "৩৯",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় জাদুঘর কোথায় অবস্থিত?",
    "options": [
      "রাজশাহী",
      "ঢাকা",
      "খুলনা",
      "চট্টগ্রাম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ঢাকা"
  },
  {
    "id": "q-40",
    "num": "৪০",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের প্রধান সমুদ্রবন্দর কোনটি?",
    "options": [
      "মোংলা",
      "পায়রা",
      "চট্টগ্রাম",
      "নারায়ণগঞ্জ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) চট্টগ্রাম"
  },
  {
    "id": "q-41",
    "num": "৪১",
    "category": "bangla_affairs",
    "question": "গঙ্গা নদী বাংলাদেশে প্রবেশের পর কোন নামে পরিচিত?",
    "options": [
      "পদ্মা",
      "কর্ণফুলী",
      "তিস্তা",
      "সুরমা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পদ্মা"
  },
  {
    "id": "q-42",
    "num": "৪২",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় পতাকার সবুজ রং কী নির্দেশ করে?",
    "options": [
      "মরুভূমি",
      "দেশের সবুজ প্রকৃতি",
      "বরফ",
      "আগুন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দেশের সবুজ প্রকৃতি"
  },
  {
    "id": "q-43",
    "num": "৪৩",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের একটি পার্বত্য জেলার নাম কী?",
    "options": [
      "রাঙামাটি",
      "মানিকগঞ্জ",
      "গোপালগঞ্জ",
      "মাগুরা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাঙামাটি"
  },
  {
    "id": "q-44",
    "num": "৪৪",
    "category": "bangla_affairs",
    "question": "কাজী নজরুল ইসলামের উপাধি কী?",
    "options": [
      "পল্লিকবি",
      "বিদ্রোহী কবি",
      "বিশ্বকবি",
      "রূপসী বাংলার কবি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বিদ্রোহী কবি"
  },
  {
    "id": "q-45",
    "num": "৪৫",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় সংগীতের প্রথম শব্দ কোনটি?",
    "options": [
      "আমার",
      "বাংলার",
      "সোনার",
      "মাগো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আমার"
  },
  {
    "id": "q-46",
    "num": "৪৬",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের প্রবাল দ্বীপ কোনটি?",
    "options": [
      "কুতুবদিয়া",
      "সেন্ট মার্টিন",
      "সন্দ্বীপ",
      "হাতিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সেন্ট মার্টিন"
  },
  {
    "id": "q-47",
    "num": "৪৭",
    "category": "bangla_affairs",
    "question": "কোন শহরকে বাংলাদেশের বন্দরনগরী বলা হয়?",
    "options": [
      "ঢাকা",
      "সিলেট",
      "চট্টগ্রাম",
      "রাজশাহী"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) চট্টগ্রাম"
  },
  {
    "id": "q-48",
    "num": "৪৮",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় ফলের ইংরেজি নাম কী?",
    "options": [
      "Mango",
      "Jackfruit",
      "Banana",
      "Coconut"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Jackfruit"
  },
  {
    "id": "q-49",
    "num": "৪৯",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের রাষ্ট্রীয় মূলনীতি কয়টি?",
    "options": [
      "২টি",
      "৩টি",
      "৪টি",
      "৫টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪টি"
  },
  {
    "id": "q-50",
    "num": "৫০",
    "category": "bangla_affairs",
    "question": "বাংলাদেশের জাতীয় দিবসগুলোর মধ্যে শহীদ দিবস কোনটি?",
    "options": [
      "২১ ফেব্রুয়ারি",
      "২৬ মার্চ",
      "১৬ ডিসেম্বর",
      "১৪ এপ্রিল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২১ ফেব্রুয়ারি"
  },
  {
    "id": "q-51",
    "num": "৫১",
    "category": "international",
    "question": "পৃথিবীর সবচেয়ে বড় মহাদেশ কোনটি?",
    "options": [
      "আফ্রিকা",
      "এশিয়া",
      "ইউরোপ",
      "অস্ট্রেলিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) এশিয়া"
  },
  {
    "id": "q-52",
    "num": "৫২",
    "category": "international",
    "question": "পৃথিবীর সবচেয়ে ছোট মহাদেশ কোনটি?",
    "options": [
      "এশিয়া",
      "আফ্রিকা",
      "অস্ট্রেলিয়া",
      "ইউরোপ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) অস্ট্রেলিয়া"
  },
  {
    "id": "q-53",
    "num": "৫৩",
    "category": "international",
    "question": "পৃথিবীর বৃহত্তম মহাসাগর কোনটি?",
    "options": [
      "আটলান্টিক",
      "ভারত",
      "প্রশান্ত",
      "উত্তর মহাসাগর"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) প্রশান্ত"
  },
  {
    "id": "q-54",
    "num": "৫৪",
    "category": "international",
    "question": "পৃথিবীর সর্বোচ্চ পর্বতশৃঙ্গ কোনটি?",
    "options": [
      "কে-টু",
      "এভারেস্ট",
      "কাঞ্চনজঙ্ঘা",
      "লোৎসে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) এভারেস্ট"
  },
  {
    "id": "q-55",
    "num": "৫৫",
    "category": "international",
    "question": "আয়তনে পৃথিবীর বৃহত্তম দেশ কোনটি?",
    "options": [
      "চীন",
      "কানাডা",
      "রাশিয়া",
      "যুক্তরাষ্ট্র"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) রাশিয়া"
  },
  {
    "id": "q-56",
    "num": "৫৬",
    "category": "international",
    "question": "পৃথিবীর ক্ষুদ্রতম স্বাধীন রাষ্ট্র কোনটি?",
    "options": [
      "মোনাকো",
      "ভ্যাটিকান সিটি",
      "মালদ্বীপ",
      "সিঙ্গাপুর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ভ্যাটিকান সিটি"
  },
  {
    "id": "q-57",
    "num": "৫৭",
    "category": "international",
    "question": "জাপানের রাজধানী কী?",
    "options": [
      "টোকিও",
      "বেইজিং",
      "সিউল",
      "ব্যাংকক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টোকিও"
  },
  {
    "id": "q-58",
    "num": "৫৮",
    "category": "international",
    "question": "ভারতের রাজধানী কী?",
    "options": [
      "মুম্বাই",
      "কলকাতা",
      "নয়াদিল্লি",
      "চেন্নাই"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) নয়াদিল্লি"
  },
  {
    "id": "q-59",
    "num": "৫৯",
    "category": "international",
    "question": "নেপালের রাজধানী কী?",
    "options": [
      "কাঠমান্ডু",
      "থিম্পু",
      "ঢাকা",
      "কলম্বো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাঠমান্ডু"
  },
  {
    "id": "q-60",
    "num": "৬০",
    "category": "international",
    "question": "সৌদি আরবের রাজধানী কী?",
    "options": [
      "জেদ্দা",
      "রিয়াদ",
      "মক্কা",
      "মদিনা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রিয়াদ"
  },
  {
    "id": "q-61",
    "num": "৬১",
    "category": "international",
    "question": "পাকিস্তানের রাজধানী কী?",
    "options": [
      "লাহোর",
      "করাচি",
      "ইসলামাবাদ",
      "পেশোয়ার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ইসলামাবাদ"
  },
  {
    "id": "q-62",
    "num": "৬২",
    "category": "international",
    "question": "চীনের রাজধানী কী?",
    "options": [
      "সাংহাই",
      "বেইজিং",
      "উহান",
      "নানজিং"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বেইজিং"
  },
  {
    "id": "q-63",
    "num": "৬৩",
    "category": "international",
    "question": "যুক্তরাজ্যের রাজধানী কী?",
    "options": [
      "লন্ডন",
      "ম্যানচেস্টার",
      "লিভারপুল",
      "বার্মিংহাম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লন্ডন"
  },
  {
    "id": "q-64",
    "num": "৬৪",
    "category": "international",
    "question": "ফ্রান্সের রাজধানী কী?",
    "options": [
      "রোম",
      "প্যারিস",
      "বার্লিন",
      "মাদ্রিদ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) প্যারিস"
  },
  {
    "id": "q-65",
    "num": "৬৫",
    "category": "international",
    "question": "ইতালির রাজধানী কী?",
    "options": [
      "ভেনিস",
      "মিলান",
      "রোম",
      "ফ্লোরেন্স"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) রোম"
  },
  {
    "id": "q-66",
    "num": "৬৬",
    "category": "international",
    "question": "জার্মানির রাজধানী কী?",
    "options": [
      "মিউনিখ",
      "বার্লিন",
      "হামবুর্গ",
      "ফ্রাঙ্কফুর্ট"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বার্লিন"
  },
  {
    "id": "q-67",
    "num": "৬৭",
    "category": "international",
    "question": "যুক্তরাষ্ট্রের রাজধানী কী?",
    "options": [
      "নিউইয়র্ক",
      "ওয়াশিংটন ডিসি",
      "লস অ্যাঞ্জেলেস",
      "শিকাগো"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ওয়াশিংটন ডিসি"
  },
  {
    "id": "q-68",
    "num": "৬৮",
    "category": "international",
    "question": "কানাডার রাজধানী কী?",
    "options": [
      "টরন্টো",
      "ভ্যাঙ্কুভার",
      "অটোয়া",
      "মন্ট্রিয়ল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) অটোয়া"
  },
  {
    "id": "q-69",
    "num": "৬৯",
    "category": "international",
    "question": "অস্ট্রেলিয়ার রাজধানী কী?",
    "options": [
      "সিডনি",
      "মেলবোর্ন",
      "ক্যানবেরা",
      "পার্থ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ক্যানবেরা"
  },
  {
    "id": "q-70",
    "num": "৭০",
    "category": "international",
    "question": "মিশরের রাজধানী কী?",
    "options": [
      "কায়রো",
      "আলেকজান্দ্রিয়া",
      "গিজা",
      "লুক্সর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কায়রো"
  },
  {
    "id": "q-71",
    "num": "৭১",
    "category": "international",
    "question": "তুরস্কের রাজধানী কী?",
    "options": [
      "ইস্তাম্বুল",
      "আঙ্কারা",
      "ইজমির",
      "আনতালিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আঙ্কারা"
  },
  {
    "id": "q-72",
    "num": "৭২",
    "category": "international",
    "question": "ভুটানের রাজধানী কী?",
    "options": [
      "থিম্পু",
      "কাঠমান্ডু",
      "ঢাকা",
      "মালে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) থিম্পু"
  },
  {
    "id": "q-73",
    "num": "৭৩",
    "category": "international",
    "question": "মালদ্বীপের রাজধানী কী?",
    "options": [
      "মালে",
      "কলম্বো",
      "ঢাকা",
      "জাকার্তা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মালে"
  },
  {
    "id": "q-74",
    "num": "৭৪",
    "category": "international",
    "question": "শ্রীলঙ্কার আইনসভা ও প্রশাসনিক রাজধানী কোনটি?",
    "options": [
      "কলম্বো",
      "শ্রী জয়বর্ধনেপুরা কোট্টে",
      "ক্যান্ডি",
      "গল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শ্রী জয়বর্ধনেপুরা কোট্টে"
  },
  {
    "id": "q-75",
    "num": "৭৫",
    "category": "international",
    "question": "থাইল্যান্ডের রাজধানী কী?",
    "options": [
      "ব্যাংকক",
      "হ্যানয়",
      "ম্যানিলা",
      "সিঙ্গাপুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাংকক"
  },
  {
    "id": "q-76",
    "num": "৭৬",
    "category": "international",
    "question": "মালয়েশিয়ার রাজধানী কী?",
    "options": [
      "জাকার্তা",
      "কুয়ালালামপুর",
      "ব্যাংকক",
      "সিউল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কুয়ালালামপুর"
  },
  {
    "id": "q-77",
    "num": "৭৭",
    "category": "international",
    "question": "ইন্দোনেশিয়ার রাজধানী হিসেবে বর্তমানে কোন শহরটি সরকারি রাজধানী?",
    "options": [
      "বান্দুং",
      "জাকার্তা",
      "সুরাবায়া",
      "মেদান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জাকার্তা"
  },
  {
    "id": "q-78",
    "num": "৭৮",
    "category": "international",
    "question": "দক্ষিণ কোরিয়ার রাজধানী কী?",
    "options": [
      "টোকিও",
      "সিউল",
      "বেইজিং",
      "পিয়ংইয়ং"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সিউল"
  },
  {
    "id": "q-79",
    "num": "৭৯",
    "category": "international",
    "question": "রাশিয়ার রাজধানী কী?",
    "options": [
      "মস্কো",
      "কাজান",
      "সোচি",
      "সেন্ট পিটার্সবার্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মস্কো"
  },
  {
    "id": "q-80",
    "num": "৮০",
    "category": "international",
    "question": "স্পেনের রাজধানী কী?",
    "options": [
      "বার্সেলোনা",
      "মাদ্রিদ",
      "সেভিয়া",
      "ভ্যালেন্সিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মাদ্রিদ"
  },
  {
    "id": "q-81",
    "num": "৮১",
    "category": "international",
    "question": "ব্রাজিলের রাজধানী কী?",
    "options": [
      "রিও ডি জেনেইরো",
      "সাও পাওলো",
      "ব্রাসিলিয়া",
      "সালভাদর"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ব্রাসিলিয়া"
  },
  {
    "id": "q-82",
    "num": "৮২",
    "category": "international",
    "question": "আর্জেন্টিনার রাজধানী কী?",
    "options": [
      "বুয়েনস এইরেস",
      "লিমা",
      "সান্তিয়াগো",
      "বোগোতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বুয়েনস এইরেস"
  },
  {
    "id": "q-83",
    "num": "৮৩",
    "category": "international",
    "question": "কেনিয়ার রাজধানী কী?",
    "options": [
      "নাইরোবি",
      "কায়রো",
      "লাগোস",
      "আক্রা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নাইরোবি"
  },
  {
    "id": "q-84",
    "num": "৮৪",
    "category": "international",
    "question": "নাইজেরিয়ার রাজধানী কী?",
    "options": [
      "লাগোস",
      "আবুজা",
      "কানো",
      "ইবাদান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আবুজা"
  },
  {
    "id": "q-85",
    "num": "৮৫",
    "category": "international",
    "question": "জাতিসংঘ প্রতিষ্ঠিত হয় কত সালে?",
    "options": [
      "১৯১৯",
      "১৯৪৫",
      "১৯৫০",
      "১৯৬০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৪৫"
  },
  {
    "id": "q-86",
    "num": "৮৬",
    "category": "international",
    "question": "জাতিসংঘের সদর দপ্তর কোথায়?",
    "options": [
      "লন্ডন",
      "নিউইয়র্ক",
      "প্যারিস",
      "জেনেভা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নিউইয়র্ক"
  },
  {
    "id": "q-87",
    "num": "৮৭",
    "category": "international",
    "question": "বিশ্ব স্বাস্থ্য সংস্থার সংক্ষিপ্ত নাম কী?",
    "options": [
      "UNICEF",
      "WHO",
      "UNESCO",
      "WTO"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) WHO"
  },
  {
    "id": "q-88",
    "num": "৮৮",
    "category": "international",
    "question": "UNESCO মূলত কোন বিষয়ের সঙ্গে কাজ করে?",
    "options": [
      "শিক্ষা, বিজ্ঞান ও সংস্কৃতি",
      "সামরিক নিরাপত্তা",
      "ব্যাংকিং",
      "খেলাধুলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শিক্ষা, বিজ্ঞান ও সংস্কৃতি"
  },
  {
    "id": "q-89",
    "num": "৮৯",
    "category": "international",
    "question": "জাপানের মুদ্রার নাম কী?",
    "options": [
      "ইউরো",
      "ইয়েন",
      "রুপি",
      "ডলার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ইয়েন"
  },
  {
    "id": "q-90",
    "num": "৯০",
    "category": "international",
    "question": "যুক্তরাজ্যের মুদ্রার নাম কী?",
    "options": [
      "ইউরো",
      "পাউন্ড স্টার্লিং",
      "ডলার",
      "দিনার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) পাউন্ড স্টার্লিং"
  },
  {
    "id": "q-91",
    "num": "৯১",
    "category": "international",
    "question": "যুক্তরাষ্ট্রের মুদ্রার নাম কী?",
    "options": [
      "ইউরো",
      "ডলার",
      "ইয়েন",
      "রিয়াল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ডলার"
  },
  {
    "id": "q-92",
    "num": "৯২",
    "category": "international",
    "question": "পিরামিডের জন্য বিখ্যাত দেশ কোনটি?",
    "options": [
      "মিশর",
      "জাপান",
      "নেপাল",
      "ব্রাজিল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মিশর"
  },
  {
    "id": "q-93",
    "num": "৯৩",
    "category": "international",
    "question": "আইফেল টাওয়ার কোন শহরে অবস্থিত?",
    "options": [
      "লন্ডন",
      "প্যারিস",
      "রোম",
      "মাদ্রিদ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) প্যারিস"
  },
  {
    "id": "q-94",
    "num": "৯৪",
    "category": "international",
    "question": "গ্রেট ওয়াল বা মহাপ্রাচীর কোন দেশে?",
    "options": [
      "ভারত",
      "চীন",
      "জাপান",
      "রাশিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) চীন"
  },
  {
    "id": "q-95",
    "num": "৯৫",
    "category": "international",
    "question": "পিসার হেলানো টাওয়ার কোন দেশে?",
    "options": [
      "ইতালি",
      "ফ্রান্স",
      "জার্মানি",
      "স্পেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইতালি"
  },
  {
    "id": "q-96",
    "num": "৯৬",
    "category": "international",
    "question": "সাহারা মরুভূমি কোন মহাদেশে অবস্থিত?",
    "options": [
      "এশিয়া",
      "ইউরোপ",
      "আফ্রিকা",
      "অস্ট্রেলিয়া"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) আফ্রিকা"
  },
  {
    "id": "q-97",
    "num": "৯৭",
    "category": "international",
    "question": "আমাজন বন প্রধানত কোন দেশে বিস্তৃত?",
    "options": [
      "ব্রাজিল",
      "মিশর",
      "কানাডা",
      "জাপান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রাজিল"
  },
  {
    "id": "q-98",
    "num": "৯৮",
    "category": "international",
    "question": "পৃথিবীর বৃহত্তম উষ্ণ মরুভূমি কোনটি?",
    "options": [
      "গোবি",
      "সাহারা",
      "কালাহারি",
      "থর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সাহারা"
  },
  {
    "id": "q-99",
    "num": "৯৯",
    "category": "international",
    "question": "নীল নদ কোন মহাদেশে অবস্থিত?",
    "options": [
      "এশিয়া",
      "আফ্রিকা",
      "ইউরোপ",
      "অস্ট্রেলিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আফ্রিকা"
  },
  {
    "id": "q-100",
    "num": "১০০",
    "category": "international",
    "question": "পৃথিবীকে কোন নামে ডাকা হয়?",
    "options": [
      "লাল গ্রহ",
      "নীল গ্রহ",
      "সবুজ গ্রহ",
      "হলুদ গ্রহ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নীল গ্রহ"
  },
  {
    "id": "q-101",
    "num": "১০১",
    "category": "science",
    "question": "বিজ্ঞানের জনক হিসেবে কাকে অভিহিত করা হয়?",
    "options": [
      "আইজ্যাক নিউটন",
      "গ্যালিলিও গ্যালিলি",
      "অ্যারিস্টটল",
      "আলবার্ট আইনস্টাইন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) অ্যারিস্টটল"
  },
  {
    "id": "q-102",
    "num": "১০২",
    "category": "science",
    "question": "পানির রাসায়নিক সংকেত কী?",
    "options": [
      "CO₂",
      "H₂O",
      "O₂",
      "NaCl"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) H₂O"
  },
  {
    "id": "q-103",
    "num": "১০৩",
    "category": "science",
    "question": "অক্সিজেনের রাসায়নিক প্রতীক কী?",
    "options": [
      "O",
      "Ox",
      "Om",
      "X"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) O"
  },
  {
    "id": "q-104",
    "num": "১০৪",
    "category": "science",
    "question": "সূর্য কী?",
    "options": [
      "গ্রহ",
      "নক্ষত্র",
      "উপগ্রহ",
      "ধূমকেতু"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নক্ষত্র"
  },
  {
    "id": "q-105",
    "num": "১০৫",
    "category": "science",
    "question": "পৃথিবী কোন গ্রহ থেকে সূর্যকে ঘিরে ঘোরে?",
    "options": [
      "প্রথম",
      "দ্বিতীয়",
      "তৃতীয়",
      "চতুর্থ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) তৃতীয়"
  },
  {
    "id": "q-106",
    "num": "১০৬",
    "category": "science",
    "question": "সৌরজগতের বৃহত্তম গ্রহ কোনটি?",
    "options": [
      "পৃথিবী",
      "মঙ্গল",
      "বৃহস্পতি",
      "শুক্র"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) বৃহস্পতি"
  },
  {
    "id": "q-107",
    "num": "১০৭",
    "category": "science",
    "question": "লাল গ্রহ বলা হয় কোন গ্রহকে?",
    "options": [
      "শুক্র",
      "মঙ্গল",
      "শনি",
      "বুধ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মঙ্গল"
  },
  {
    "id": "q-108",
    "num": "১০৮",
    "category": "science",
    "question": "পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ কোনটি?",
    "options": [
      "সূর্য",
      "চাঁদ",
      "মঙ্গল",
      "শুক্র"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) চাঁদ"
  },
  {
    "id": "q-109",
    "num": "১০৯",
    "category": "science",
    "question": "সূর্যের আলো পৃথিবীতে পৌঁছাতে প্রায় কত সময় লাগে?",
    "options": [
      "৮ মিনিট ২০ সেকেন্ড",
      "১ ঘণ্টা",
      "১ সেকেন্ড",
      "২৪ ঘণ্টা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৮ মিনিট ২০ সেকেন্ড"
  },
  {
    "id": "q-110",
    "num": "১১০",
    "category": "science",
    "question": "উদ্ভিদ কীভাবে নিজের খাদ্য তৈরি করে?",
    "options": [
      "শ্বসন",
      "সালোকসংশ্লেষণ",
      "পরিপাক",
      "বাষ্পীভবন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সালোকসংশ্লেষণ"
  },
  {
    "id": "q-111",
    "num": "১১১",
    "category": "science",
    "question": "সালোকসংশ্লেষণের জন্য কোন গ্যাস প্রয়োজন?",
    "options": [
      "অক্সিজেন",
      "কার্বন ডাই-অক্সাইড",
      "নাইট্রোজেন",
      "হাইড্রোজেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কার্বন ডাই-অক্সাইড"
  },
  {
    "id": "q-112",
    "num": "১১২",
    "category": "science",
    "question": "গাছের পাতার সবুজ রঞ্জক পদার্থের নাম কী?",
    "options": [
      "হিমোগ্লোবিন",
      "ক্লোরোফিল",
      "মেলানিন",
      "কেরাটিন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ক্লোরোফিল"
  },
  {
    "id": "q-113",
    "num": "১১৩",
    "category": "science",
    "question": "শব্দ চলাচলের জন্য কী প্রয়োজন?",
    "options": [
      "মাধ্যম",
      "শূন্যস্থান",
      "আলো",
      "আগুন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাধ্যম"
  },
  {
    "id": "q-114",
    "num": "১১৪",
    "category": "science",
    "question": "আলো সবচেয়ে দ্রুত কোথায় চলে?",
    "options": [
      "পানিতে",
      "কাচে",
      "শূন্যস্থানে",
      "বাতাসে"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) শূন্যস্থানে"
  },
  {
    "id": "q-115",
    "num": "১১৫",
    "category": "science",
    "question": "বলের SI একক কী?",
    "options": [
      "ওয়াট",
      "নিউটন",
      "জুল",
      "ভোল্ট"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নিউটন"
  },
  {
    "id": "q-116",
    "num": "১১৬",
    "category": "science",
    "question": "শক্তির SI একক কী?",
    "options": [
      "জুল",
      "নিউটন",
      "কেলভিন",
      "অ্যাম্পিয়ার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জুল"
  },
  {
    "id": "q-117",
    "num": "১১৭",
    "category": "science",
    "question": "বৈদ্যুতিক প্রবাহের SI একক কী?",
    "options": [
      "ভোল্ট",
      "অ্যাম্পিয়ার",
      "ওয়াট",
      "ওহম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) অ্যাম্পিয়ার"
  },
  {
    "id": "q-118",
    "num": "১১৮",
    "category": "science",
    "question": "তাপমাত্রার SI একক কী?",
    "options": [
      "ডিগ্রি সেলসিয়াস",
      "কেলভিন",
      "ফারেনহাইট",
      "জুল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কেলভিন"
  },
  {
    "id": "q-119",
    "num": "১১৯",
    "category": "science",
    "question": "বরফ কত ডিগ্রি সেলসিয়াসে গলে?",
    "options": [
      "০°",
      "১০°",
      "৫০°",
      "১০০°"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ০°"
  },
  {
    "id": "q-120",
    "num": "১২০",
    "category": "science",
    "question": "স্বাভাবিক বায়ুচাপে পানি কত ডিগ্রি সেলসিয়াসে ফুটে?",
    "options": [
      "৫০°",
      "৭৫°",
      "১০০°",
      "১৫০°"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০০°"
  },
  {
    "id": "q-121",
    "num": "১২১",
    "category": "science",
    "question": "কোন ধাতু সাধারণ তাপমাত্রায় তরল থাকে?",
    "options": [
      "লোহা",
      "পারদ",
      "তামা",
      "সোনা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) পারদ"
  },
  {
    "id": "q-122",
    "num": "১২২",
    "category": "science",
    "question": "সোনার রাসায়নিক প্রতীক কী?",
    "options": [
      "Ag",
      "Au",
      "Fe",
      "Cu"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Au"
  },
  {
    "id": "q-123",
    "num": "১২৩",
    "category": "science",
    "question": "লোহার রাসায়নিক প্রতীক কী?",
    "options": [
      "Fe",
      "Au",
      "Ag",
      "Al"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Fe"
  },
  {
    "id": "q-124",
    "num": "১২৪",
    "category": "science",
    "question": "রুপার রাসায়নিক প্রতীক কী?",
    "options": [
      "S",
      "Ag",
      "Au",
      "Si"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Ag"
  },
  {
    "id": "q-125",
    "num": "১২৫",
    "category": "science",
    "question": "সাধারণ লবণের রাসায়নিক সংকেত কী?",
    "options": [
      "H₂O",
      "NaCl",
      "CO₂",
      "HCl"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) NaCl"
  },
  {
    "id": "q-126",
    "num": "১২৬",
    "category": "science",
    "question": "বায়ুমণ্ডলে সবচেয়ে বেশি কোন গ্যাস রয়েছে?",
    "options": [
      "অক্সিজেন",
      "নাইট্রোজেন",
      "কার্বন ডাই-অক্সাইড",
      "হাইড্রোজেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নাইট্রোজেন"
  },
  {
    "id": "q-127",
    "num": "১২৭",
    "category": "science",
    "question": "মানুষ শ্বাস নেওয়ার সময় কোন গ্যাস গ্রহণ করে?",
    "options": [
      "অক্সিজেন",
      "হিলিয়াম",
      "মিথেন",
      "ধোঁয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্সিজেন"
  },
  {
    "id": "q-128",
    "num": "১২৮",
    "category": "science",
    "question": "চুম্বকের কয়টি মেরু থাকে?",
    "options": [
      "১টি",
      "২টি",
      "৩টি",
      "৪টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২টি"
  },
  {
    "id": "q-129",
    "num": "১২৯",
    "category": "science",
    "question": "পৃথিবী নিজের অক্ষে একবার ঘুরতে প্রায় কত সময় নেয়?",
    "options": [
      "১২ ঘণ্টা",
      "২৪ ঘণ্টা",
      "৩০ দিন",
      "৩৬৫ দিন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২৪ ঘণ্টা"
  },
  {
    "id": "q-130",
    "num": "১৩০",
    "category": "science",
    "question": "পৃথিবী সূর্যকে একবার প্রদক্ষিণ করতে কত সময় নেয়?",
    "options": [
      "২৪ ঘণ্টা",
      "প্রায় ৩৬৫ দিন",
      "৩০ দিন",
      "৭ দিন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) প্রায় ৩৬৫ দিন"
  },
  {
    "id": "q-131",
    "num": "১৩১",
    "category": "science",
    "question": "বজ্রপাতের সময় প্রথমে কোনটি দেখা যায়?",
    "options": [
      "শব্দ",
      "আলো",
      "বৃষ্টি",
      "বাতাস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আলো"
  },
  {
    "id": "q-132",
    "num": "১৩২",
    "category": "science",
    "question": "রংধনুতে সাধারণত কয়টি রং দেখা যায়?",
    "options": [
      "৫টি",
      "৬টি",
      "৭টি",
      "৮টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭টি"
  },
  {
    "id": "q-133",
    "num": "১৩৩",
    "category": "science",
    "question": "কোন প্রাণী ডিম পাড়ে?",
    "options": [
      "গরু",
      "মুরগি",
      "ছাগল",
      "বিড়াল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মুরগি"
  },
  {
    "id": "q-134",
    "num": "১৩৪",
    "category": "science",
    "question": "কোন প্রাণীকে মরুভূমির জাহাজ বলা হয়?",
    "options": [
      "ঘোড়া",
      "উট",
      "হাতি",
      "গাধা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) উট"
  },
  {
    "id": "q-135",
    "num": "১৩৫",
    "category": "science",
    "question": "মৌমাছি কী তৈরি করে?",
    "options": [
      "দুধ",
      "মধু",
      "তেল",
      "মোমবাতি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মধু"
  },
  {
    "id": "q-136",
    "num": "১৩৬",
    "category": "science",
    "question": "মাকড়সার কয়টি পা থাকে?",
    "options": [
      "৬টি",
      "৮টি",
      "১০টি",
      "১২টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৮টি"
  },
  {
    "id": "q-137",
    "num": "১৩৭",
    "category": "science",
    "question": "পোকামাকড়ের কয়টি পা থাকে?",
    "options": [
      "৪টি",
      "৬টি",
      "৮টি",
      "১০টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৬টি"
  },
  {
    "id": "q-138",
    "num": "১৩৮",
    "category": "science",
    "question": "মাছ কী দিয়ে শ্বাস নেয়?",
    "options": [
      "ফুসফুস",
      "ফুলকা",
      "নাক",
      "ত্বক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ফুলকা"
  },
  {
    "id": "q-139",
    "num": "১৩৯",
    "category": "science",
    "question": "উভচর প্রাণীর উদাহরণ কোনটি?",
    "options": [
      "ব্যাঙ",
      "বাঘ",
      "ঘোড়া",
      "ঈগল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাঙ"
  },
  {
    "id": "q-140",
    "num": "১৪০",
    "category": "science",
    "question": "পৃথিবীর সবচেয়ে বড় স্তন্যপায়ী প্রাণী কোনটি?",
    "options": [
      "হাতি",
      "নীল তিমি",
      "জিরাফ",
      "গণ্ডার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নীল তিমি"
  },
  {
    "id": "q-141",
    "num": "১৪১",
    "category": "science",
    "question": "প্রজাপতি কোন প্রাণীর জীবনচক্রের অংশ?",
    "options": [
      "ব্যাঙ",
      "শুঁয়োপোকা",
      "মাছ",
      "পাখি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শুঁয়োপোকা"
  },
  {
    "id": "q-142",
    "num": "১৪২",
    "category": "science",
    "question": "ডাইনোসর কোন যুগে পৃথিবীতে বিচরণ করত?",
    "options": [
      "মেসোজোয়িক যুগ",
      "আধুনিক যুগ",
      "প্রস্তর যুগ",
      "বরফ যুগ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মেসোজোয়িক যুগ"
  },
  {
    "id": "q-143",
    "num": "১৪৩",
    "category": "science",
    "question": "আগ্নেয়গিরি থেকে কী বের হতে পারে?",
    "options": [
      "বরফ",
      "লাভা",
      "দুধ",
      "বালি মাত্র"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) লাভা"
  },
  {
    "id": "q-144",
    "num": "১৪৪",
    "category": "science",
    "question": "ভূমিকম্প মাপার যন্ত্রের নাম কী?",
    "options": [
      "থার্মোমিটার",
      "সিসমোগ্রাফ",
      "ব্যারোমিটার",
      "হাইড্রোমিটার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সিসমোগ্রাফ"
  },
  {
    "id": "q-145",
    "num": "১৪৫",
    "category": "science",
    "question": "বাতাসের চাপ মাপার যন্ত্র কোনটি?",
    "options": [
      "ব্যারোমিটার",
      "থার্মোমিটার",
      "স্পিডোমিটার",
      "অ্যামিটার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যারোমিটার"
  },
  {
    "id": "q-146",
    "num": "১৪৬",
    "category": "science",
    "question": "তাপমাত্রা মাপার যন্ত্র কোনটি?",
    "options": [
      "ব্যারোমিটার",
      "থার্মোমিটার",
      "কম্পাস",
      "ঘড়ি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) থার্মোমিটার"
  },
  {
    "id": "q-147",
    "num": "১৪৭",
    "category": "science",
    "question": "পৃথিবীর কোন স্তরে আমরা বাস করি?",
    "options": [
      "ভূত্বক",
      "বহিঃকেন্দ্র",
      "অন্তঃকেন্দ্র",
      "ম্যান্টলের গভীর অংশ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভূত্বক"
  },
  {
    "id": "q-148",
    "num": "১৪৮",
    "category": "science",
    "question": "পানির বাষ্পে পরিণত হওয়ার প্রক্রিয়াকে কী বলে?",
    "options": [
      "ঘনীভবন",
      "বাষ্পীভবন",
      "হিমায়ন",
      "গলন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বাষ্পীভবন"
  },
  {
    "id": "q-149",
    "num": "১৪৯",
    "category": "science",
    "question": "বাষ্প ঠান্ডা হয়ে পানিতে পরিণত হওয়ার প্রক্রিয়া কী?",
    "options": [
      "ঘনীভবন",
      "বাষ্পীভবন",
      "দহন",
      "গলন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঘনীভবন"
  },
  {
    "id": "q-150",
    "num": "১৫০",
    "category": "science",
    "question": "উদ্ভিদের কোন অংশ সাধারণত মাটি থেকে পানি শোষণ করে?",
    "options": [
      "ফুল",
      "মূল",
      "ফল",
      "পাতা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মূল"
  },
  {
    "id": "q-151",
    "num": "১৫১",
    "category": "health",
    "question": "মানুষের শরীরে রক্ত পাম্প করে কোন অঙ্গ?",
    "options": [
      "ফুসফুস",
      "হৃদপিণ্ড",
      "পাকস্থলী",
      "যকৃৎ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) হৃদপিণ্ড"
  },
  {
    "id": "q-152",
    "num": "১৫২",
    "category": "health",
    "question": "মানুষের শরীরে কয়টি ফুসফুস থাকে?",
    "options": [
      "১টি",
      "২টি",
      "৩টি",
      "৪টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২টি"
  },
  {
    "id": "q-153",
    "num": "১৫৩",
    "category": "health",
    "question": "মানুষের শরীরের সবচেয়ে বড় অঙ্গ কোনটি?",
    "options": [
      "হৃদপিণ্ড",
      "ত্বক",
      "মস্তিষ্ক",
      "যকৃৎ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ত্বক"
  },
  {
    "id": "q-154",
    "num": "১৫৪",
    "category": "health",
    "question": "মানুষের শরীরের সবচেয়ে বড় অভ্যন্তরীণ অঙ্গ কোনটি?",
    "options": [
      "যকৃৎ",
      "পাকস্থলী",
      "হৃদপিণ্ড",
      "কিডনি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যকৃৎ"
  },
  {
    "id": "q-155",
    "num": "১৫৫",
    "category": "health",
    "question": "মানুষ কোন অঙ্গ দিয়ে চিন্তা করে?",
    "options": [
      "হৃদপিণ্ড",
      "মস্তিষ্ক",
      "ফুসফুস",
      "কিডনি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মস্তিষ্ক"
  },
  {
    "id": "q-156",
    "num": "১৫৬",
    "category": "health",
    "question": "মানুষের শরীরে সাধারণত কয়টি কিডনি থাকে?",
    "options": [
      "১টি",
      "২টি",
      "৩টি",
      "৪টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২টি"
  },
  {
    "id": "q-157",
    "num": "১৫৭",
    "category": "health",
    "question": "মানুষের দাঁত সাধারণত কয় ধরনের?",
    "options": [
      "২ ধরনের",
      "৩ ধরনের",
      "৪ ধরনের",
      "৫ ধরনের"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪ ধরনের"
  },
  {
    "id": "q-158",
    "num": "১৫৮",
    "category": "health",
    "question": "প্রাপ্তবয়স্ক মানুষের সাধারণত স্থায়ী দাঁত কয়টি?",
    "options": [
      "২০টি",
      "২৮টি",
      "৩২টি",
      "৩৬টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩২টি"
  },
  {
    "id": "q-159",
    "num": "১৫৯",
    "category": "health",
    "question": "মানুষের শরীরের হাড়ের সংখ্যা প্রাপ্তবয়স্ক অবস্থায় সাধারণত কত?",
    "options": [
      "১০৬",
      "২০৬",
      "৩০৬",
      "৪০৬"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২০৬"
  },
  {
    "id": "q-160",
    "num": "১৬০",
    "category": "health",
    "question": "রক্তের লাল রঙের জন্য দায়ী কোন পদার্থ?",
    "options": [
      "ক্লোরোফিল",
      "হিমোগ্লোবিন",
      "ইনসুলিন",
      "ক্যালসিয়াম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) হিমোগ্লোবিন"
  },
  {
    "id": "q-161",
    "num": "১৬১",
    "category": "health",
    "question": "রক্তের কোন উপাদান শরীরকে জীবাণুর বিরুদ্ধে লড়তে সাহায্য করে?",
    "options": [
      "লোহিত রক্তকণিকা",
      "শ্বেত রক্তকণিকা",
      "প্লাজমা",
      "প্লেটলেট"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শ্বেত রক্তকণিকা"
  },
  {
    "id": "q-162",
    "num": "১৬২",
    "category": "health",
    "question": "রক্ত জমাট বাঁধতে কোন উপাদান সাহায্য করে?",
    "options": [
      "প্লেটলেট",
      "হিমোগ্লোবিন",
      "পানি",
      "অক্সিজেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্লেটলেট"
  },
  {
    "id": "q-163",
    "num": "১৬৩",
    "category": "health",
    "question": "খাবার হজম শুরু হয় কোথায়?",
    "options": [
      "মুখে",
      "পাকস্থলীতে",
      "ক্ষুদ্রান্ত্রে",
      "বৃহদান্ত্রে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মুখে"
  },
  {
    "id": "q-164",
    "num": "১৬৪",
    "category": "health",
    "question": "খাবার চিবানোর কাজ কোনটি করে?",
    "options": [
      "জিহ্বা",
      "দাঁত",
      "নাক",
      "কান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দাঁত"
  },
  {
    "id": "q-165",
    "num": "১৬৫",
    "category": "health",
    "question": "খাবার পাকস্থলীতে পৌঁছায় কোন নালির মাধ্যমে?",
    "options": [
      "শ্বাসনালি",
      "খাদ্যনালি",
      "রক্তনালি",
      "মূত্রনালি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) খাদ্যনালি"
  },
  {
    "id": "q-166",
    "num": "১৬৬",
    "category": "health",
    "question": "মানুষের শ্বাসপ্রশ্বাসের প্রধান অঙ্গ কোনটি?",
    "options": [
      "ফুসফুস",
      "যকৃৎ",
      "পাকস্থলী",
      "মস্তিষ্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফুসফুস"
  },
  {
    "id": "q-167",
    "num": "১৬৭",
    "category": "health",
    "question": "চোখের কোন অংশ দিয়ে আলো প্রবেশ করে?",
    "options": [
      "পিউপিল",
      "কানের পর্দা",
      "জিহ্বা",
      "নখ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিউপিল"
  },
  {
    "id": "q-168",
    "num": "১৬৮",
    "category": "health",
    "question": "আমরা কোন অঙ্গ দিয়ে শুনি?",
    "options": [
      "চোখ",
      "কান",
      "নাক",
      "জিহ্বা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কান"
  },
  {
    "id": "q-169",
    "num": "১৬৯",
    "category": "health",
    "question": "স্বাদ অনুভব করতে কোন অঙ্গ সাহায্য করে?",
    "options": [
      "জিহ্বা",
      "কনুই",
      "হাঁটু",
      "কপাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জিহ্বা"
  },
  {
    "id": "q-170",
    "num": "১৭০",
    "category": "health",
    "question": "গন্ধ অনুভব করতে কোন অঙ্গ ব্যবহার করি?",
    "options": [
      "কান",
      "নাক",
      "চোখ",
      "হাত"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নাক"
  },
  {
    "id": "q-171",
    "num": "১৭১",
    "category": "health",
    "question": "সূর্যের আলো থেকে শরীরে কোন ভিটামিন তৈরি হতে সাহায্য করে?",
    "options": [
      "ভিটামিন A",
      "ভিটামিন B",
      "ভিটামিন C",
      "ভিটামিন D"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ভিটামিন D"
  },
  {
    "id": "q-172",
    "num": "১৭২",
    "category": "health",
    "question": "ভিটামিন C-এর একটি ভালো উৎস কোনটি?",
    "options": [
      "লেবু",
      "চিনি",
      "লবণ",
      "তেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লেবু"
  },
  {
    "id": "q-173",
    "num": "১৭৩",
    "category": "health",
    "question": "চোখের স্বাভাবিক দৃষ্টিশক্তির জন্য কোন ভিটামিন গুরুত্বপূর্ণ?",
    "options": [
      "ভিটামিন A",
      "ভিটামিন C",
      "ভিটামিন D",
      "ভিটামিন K"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভিটামিন A"
  },
  {
    "id": "q-174",
    "num": "১৭৪",
    "category": "health",
    "question": "হাড় ও দাঁতের জন্য কোন খনিজ উপাদান গুরুত্বপূর্ণ?",
    "options": [
      "ক্যালসিয়াম",
      "আয়োডিন",
      "সোডিয়াম",
      "ক্লোরিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্যালসিয়াম"
  },
  {
    "id": "q-175",
    "num": "১৭৫",
    "category": "health",
    "question": "শরীরের জন্য সবচেয়ে প্রয়োজনীয় পানীয় কোনটি?",
    "options": [
      "কোমল পানীয়",
      "বিশুদ্ধ পানি",
      "অতিরিক্ত চিনি মেশানো শরবত",
      "এনার্জি ড্রিংক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বিশুদ্ধ পানি"
  },
  {
    "id": "q-176",
    "num": "১৭৬",
    "category": "health",
    "question": "নিয়মিত দাঁত পরিষ্কার করতে কী ব্যবহার করা হয়?",
    "options": [
      "সাবান",
      "টুথব্রাশ ও টুথপেস্ট",
      "তেল",
      "শ্যাম্পু"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) টুথব্রাশ ও টুথপেস্ট"
  },
  {
    "id": "q-177",
    "num": "১৭৭",
    "category": "health",
    "question": "হাত কখন ধোয়া উচিত?",
    "options": [
      "শুধু ঘুমানোর আগে",
      "খাবারের আগে ও টয়লেট ব্যবহারের পরে",
      "শুধু সকালে",
      "কখনো নয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) খাবারের আগে ও টয়লেট ব্যবহারের পরে"
  },
  {
    "id": "q-178",
    "num": "১৭৮",
    "category": "health",
    "question": "শরীরের তাপমাত্রা মাপতে কী ব্যবহার করা হয়?",
    "options": [
      "কম্পাস",
      "থার্মোমিটার",
      "মাইক্রোস্কোপ",
      "টেলিস্কোপ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) থার্মোমিটার"
  },
  {
    "id": "q-179",
    "num": "১৭৯",
    "category": "health",
    "question": "হাঁটাচলায় শরীরের কোন অংশ গুরুত্বপূর্ণ?",
    "options": [
      "পা",
      "চুল",
      "নখ",
      "দাঁত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পা"
  },
  {
    "id": "q-180",
    "num": "১৮০",
    "category": "health",
    "question": "শরীরের রক্ত পরিশোধনে কোন অঙ্গ গুরুত্বপূর্ণ?",
    "options": [
      "কিডনি",
      "চোখ",
      "কান",
      "দাঁত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কিডনি"
  },
  {
    "id": "q-181",
    "num": "১৮১",
    "category": "health",
    "question": "শরীরে অক্সিজেন পরিবহন করে প্রধানত কোন রক্তকণিকা?",
    "options": [
      "শ্বেত রক্তকণিকা",
      "লোহিত রক্তকণিকা",
      "প্লেটলেট",
      "স্নায়ুকোষ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) লোহিত রক্তকণিকা"
  },
  {
    "id": "q-182",
    "num": "১৮২",
    "category": "health",
    "question": "শিশুর সুস্থ বিকাশে কোনটি গুরুত্বপূর্ণ?",
    "options": [
      "সুষম খাবার",
      "শুধু মিষ্টি",
      "শুধু চিপস",
      "শুধু কোমল পানীয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুষম খাবার"
  },
  {
    "id": "q-183",
    "num": "১৮৩",
    "category": "health",
    "question": "পর্যাপ্ত ঘুমের একটি উপকারিতা কী?",
    "options": [
      "শরীর ও মস্তিষ্ক বিশ্রাম পায়",
      "চোখ দুর্বল হয়",
      "ক্ষুধা বন্ধ হয়",
      "দাঁত পড়ে যায়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শরীর ও মস্তিষ্ক বিশ্রাম পায়"
  },
  {
    "id": "q-184",
    "num": "১৮৪",
    "category": "health",
    "question": "খাবারের আঁশ বা ফাইবার কোন কাজে সাহায্য করে?",
    "options": [
      "হজমে",
      "শ্রবণে",
      "দৃষ্টিতে",
      "ঘ্রাণে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হজমে"
  },
  {
    "id": "q-185",
    "num": "১৮৫",
    "category": "health",
    "question": "শরীরের গঠন ও মেরামতে কোন পুষ্টি উপাদান গুরুত্বপূর্ণ?",
    "options": [
      "প্রোটিন",
      "পানি মাত্র",
      "লবণ",
      "রং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোটিন"
  },
  {
    "id": "q-186",
    "num": "১৮৬",
    "category": "health",
    "question": "শরীরের প্রধান শক্তির উৎস হিসেবে কোন পুষ্টি উপাদান কাজ করে?",
    "options": [
      "কার্বোহাইড্রেট",
      "ভিটামিন",
      "খনিজ",
      "পানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কার্বোহাইড্রেট"
  },
  {
    "id": "q-187",
    "num": "১৮৭",
    "category": "health",
    "question": "দুধে কোন খনিজ উপাদান পাওয়া যায়?",
    "options": [
      "ক্যালসিয়াম",
      "সোনা",
      "রূপা",
      "পারদ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্যালসিয়াম"
  },
  {
    "id": "q-188",
    "num": "১৮৮",
    "category": "health",
    "question": "কোনটি স্বাস্থ্যকর অভ্যাস?",
    "options": [
      "নিয়মিত ব্যায়াম",
      "অপরিষ্কার থাকা",
      "অতিরিক্ত রাত জাগা",
      "খাবার না খাওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিয়মিত ব্যায়াম"
  },
  {
    "id": "q-189",
    "num": "১৮৯",
    "category": "health",
    "question": "পরিষ্কার পানি পান করা কেন জরুরি?",
    "options": [
      "স্বাস্থ্য ভালো রাখতে",
      "ঘুম কমাতে",
      "চুলের রং বদলাতে",
      "উচ্চতা সঙ্গে সঙ্গে বাড়াতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্বাস্থ্য ভালো রাখতে"
  },
  {
    "id": "q-190",
    "num": "১৯০",
    "category": "health",
    "question": "শরীরের অঙ্গপ্রত্যঙ্গের সঙ্গে মস্তিষ্কের যোগাযোগে কী কাজ করে?",
    "options": [
      "স্নায়ুতন্ত্র",
      "পরিপাকতন্ত্র",
      "কঙ্কালতন্ত্র",
      "শ্বসনতন্ত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্নায়ুতন্ত্র"
  },
  {
    "id": "q-191",
    "num": "১৯১",
    "category": "health",
    "question": "মানবদেহের সবচেয়ে শক্ত পদার্থ কোনটি?",
    "options": [
      "ত্বক",
      "দাঁতের এনামেল",
      "রক্ত",
      "পেশি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দাঁতের এনামেল"
  },
  {
    "id": "q-192",
    "num": "১৯২",
    "category": "health",
    "question": "মানুষের শরীরে পেশির প্রধান কাজ কী?",
    "options": [
      "চলাফেরায় সাহায্য করা",
      "খাবার তৈরি করা",
      "রক্তের রং তৈরি করা",
      "আলো তৈরি করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চলাফেরায় সাহায্য করা"
  },
  {
    "id": "q-193",
    "num": "১৯৩",
    "category": "health",
    "question": "দেহের রোগ প্রতিরোধক্ষমতাকে কী বলে?",
    "options": [
      "ইমিউনিটি",
      "গ্র্যাভিটি",
      "মেমোরি",
      "ইলেকট্রিসিটি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমিউনিটি"
  },
  {
    "id": "q-194",
    "num": "১৯৪",
    "category": "health",
    "question": "মশা কোন রোগ ছড়াতে পারে?",
    "options": [
      "ডেঙ্গু",
      "স্কার্ভি",
      "রাতকানা",
      "রিকেটস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডেঙ্গু"
  },
  {
    "id": "q-195",
    "num": "১৯৫",
    "category": "health",
    "question": "ডেঙ্গু ছড়ায় কোন মশা?",
    "options": [
      "এডিস",
      "অ্যানোফিলিস",
      "কিউলেক্স",
      "সব মাছি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এডিস"
  },
  {
    "id": "q-196",
    "num": "১৯৬",
    "category": "health",
    "question": "ধূমপান শরীরের কোন অঙ্গের জন্য বিশেষভাবে ক্ষতিকর?",
    "options": [
      "ফুসফুস",
      "নখ",
      "চুল",
      "দাঁতের গঠন মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফুসফুস"
  },
  {
    "id": "q-197",
    "num": "১৯৭",
    "category": "health",
    "question": "নিরাপদ খাবার খেতে কোনটি করা উচিত?",
    "options": [
      "খাবার ঢেকে রাখা",
      "ময়লা হাতে খাওয়া",
      "পচা খাবার খাওয়া",
      "খোলা নোংরা পানি পান করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) খাবার ঢেকে রাখা"
  },
  {
    "id": "q-198",
    "num": "১৯৮",
    "category": "health",
    "question": "হাঁচি বা কাশির সময় কী দিয়ে মুখ ঢেকে রাখা উচিত?",
    "options": [
      "কনুই বা টিস্যু",
      "খোলা হাতের তালু দিয়ে সবসময় মুখ মুছে ফেলা",
      "বই",
      "জামার পকেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কনুই বা টিস্যু"
  },
  {
    "id": "q-199",
    "num": "১৯৯",
    "category": "health",
    "question": "মানুষের শরীরের রক্ত সঞ্চালনের প্রধান অঙ্গ কোনটি?",
    "options": [
      "হৃদপিণ্ড",
      "পাকস্থলী",
      "কিডনি",
      "চোখ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হৃদপিণ্ড"
  },
  {
    "id": "q-200",
    "num": "২০০",
    "category": "health",
    "question": "স্বাস্থ্য ভালো রাখতে কোনটি সবচেয়ে ভালো অভ্যাস?",
    "options": [
      "সুষম খাবার, পরিচ্ছন্নতা ও ব্যায়াম",
      "শুধু মিষ্টি খাওয়া",
      "সারাদিন বসে থাকা",
      "পর্যাপ্ত ঘুম নাানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুষম খাবার, পরিচ্ছন্নতা ও ব্যায়াম"
  },
  {
    "id": "q-201",
    "num": "২০১",
    "category": "ict",
    "question": "কম্পিউটারের প্রধান কাজ কী?",
    "options": [
      "তথ্য প্রক্রিয়াকরণ",
      "রান্না করা",
      "কাপড় ধোয়া",
      "গাছ লাগানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য প্রক্রিয়াকরণ"
  },
  {
    "id": "q-202",
    "num": "২০২",
    "category": "ict",
    "question": "CPU-এর পূর্ণরূপ কী?",
    "options": [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Power Unit"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Central Processing Unit"
  },
  {
    "id": "q-203",
    "num": "২০৩",
    "category": "ict",
    "question": "কম্পিউটারের মস্তিষ্ক বলা হয় কাকে?",
    "options": [
      "মনিটর",
      "CPU",
      "কিবোর্ড",
      "মাউস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) CPU"
  },
  {
    "id": "q-204",
    "num": "২০৪",
    "category": "ict",
    "question": "কম্পিউটারে লেখার জন্য কোন যন্ত্র ব্যবহার করা হয়?",
    "options": [
      "মাউস",
      "কিবোর্ড",
      "স্পিকার",
      "প্রিন্টার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কিবোর্ড"
  },
  {
    "id": "q-205",
    "num": "২০৫",
    "category": "ict",
    "question": "কম্পিউটারের পর্দাকে কী বলে?",
    "options": [
      "প্রিন্টার",
      "মনিটর",
      "স্ক্যানার",
      "মাউস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মনিটর"
  },
  {
    "id": "q-206",
    "num": "২০৬",
    "category": "ict",
    "question": "কম্পিউটারে নির্দেশ দিতে কোন যন্ত্র ব্যবহার করা হয়?",
    "options": [
      "মাউস",
      "স্পিকার",
      "প্রিন্টার",
      "মাইক্রোফোন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাউস"
  },
  {
    "id": "q-207",
    "num": "২০৭",
    "category": "ict",
    "question": "কাগজে লেখা বা ছবি ছাপানোর যন্ত্র কোনটি?",
    "options": [
      "স্ক্যানার",
      "প্রিন্টার",
      "মাউস",
      "কিবোর্ড"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) প্রিন্টার"
  },
  {
    "id": "q-208",
    "num": "২০৮",
    "category": "ict",
    "question": "কাগজের ছবি বা লেখা কম্পিউটারে নেওয়ার যন্ত্র কোনটি?",
    "options": [
      "স্ক্যানার",
      "স্পিকার",
      "মনিটর",
      "রাউটার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্ক্যানার"
  },
  {
    "id": "q-209",
    "num": "২০৯",
    "category": "ict",
    "question": "ইন্টারনেট কী?",
    "options": [
      "বিশ্বব্যাপী কম্পিউটার নেটওয়ার্ক",
      "একটি খেলনা",
      "একটি ফল",
      "একটি গাড়ি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিশ্বব্যাপী কম্পিউটার নেটওয়ার্ক"
  },
  {
    "id": "q-210",
    "num": "২১০",
    "category": "ict",
    "question": "ওয়েবসাইট দেখার সফটওয়্যারকে কী বলে?",
    "options": [
      "ব্রাউজার",
      "ক্যালকুলেটর",
      "ক্যামেরা",
      "গেমপ্যাড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রাউজার"
  },
  {
    "id": "q-211",
    "num": "২১১",
    "category": "ict",
    "question": "নিচের কোনটি ওয়েব ব্রাউজার?",
    "options": [
      "Google Chrome",
      "MS Paint",
      "Calculator",
      "Notepad"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Google Chrome"
  },
  {
    "id": "q-212",
    "num": "২১২",
    "category": "ict",
    "question": "ই-মেইল কী কাজে ব্যবহৃত হয়?",
    "options": [
      "ইলেকট্রনিক বার্তা পাঠাতে",
      "খাবার রান্না করতে",
      "কাপড় সেলাই করতে",
      "পানি গরম করতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইলেকট্রনিক বার্তা পাঠাতে"
  },
  {
    "id": "q-213",
    "num": "২১৩",
    "category": "ict",
    "question": "WWW-এর পূর্ণরূপ কী?",
    "options": [
      "World Wide Web",
      "World Web Window",
      "Wide World Wire",
      "Web World Work"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) World Wide Web"
  },
  {
    "id": "q-214",
    "num": "২১৪",
    "category": "ict",
    "question": "HTML কী কাজে ব্যবহৃত হয়?",
    "options": [
      "ওয়েব পেজ তৈরি করতে",
      "ছবি আঁকতে মাত্র",
      "গান গাইতে",
      "কম্পিউটার পরিষ্কার করতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ওয়েব পেজ তৈরি করতে"
  },
  {
    "id": "q-215",
    "num": "২১৫",
    "category": "ict",
    "question": "AI-এর পূর্ণরূপ কী?",
    "options": [
      "Artificial Intelligence",
      "Automatic Internet",
      "Advanced Input",
      "Artificial Information"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Artificial Intelligence"
  },
  {
    "id": "q-216",
    "num": "২১৬",
    "category": "ict",
    "question": "AI বলতে কী বোঝায়?",
    "options": [
      "কৃত্রিম বুদ্ধিমত্তা",
      "কৃত্রিম আলো",
      "স্বয়ংক্রিয় গাড়ির চাকা",
      "ইন্টারনেটের তার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কৃত্রিম বুদ্ধিমত্তা"
  },
  {
    "id": "q-217",
    "num": "২১৭",
    "category": "ict",
    "question": "রোবট কী?",
    "options": [
      "প্রোগ্রাম করা যন্ত্র",
      "এক ধরনের গাছ",
      "এক ধরনের মাছ",
      "এক ধরনের ফল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোগ্রাম করা যন্ত্র"
  },
  {
    "id": "q-218",
    "num": "২১৮",
    "category": "ict",
    "question": "স্মার্টফোনের টাচস্ক্রিনে কী দিয়ে নির্দেশ দেওয়া যায়?",
    "options": [
      "আঙুল",
      "পাথর",
      "পানি",
      "বালি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আঙুল"
  },
  {
    "id": "q-219",
    "num": "২১৯",
    "category": "ict",
    "question": "RAM কী ধরনের মেমোরি?",
    "options": [
      "অস্থায়ী মেমোরি",
      "স্থায়ী মেমোরি",
      "কাগজের মেমোরি",
      "বাহ্যিক ডিস্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অস্থায়ী মেমোরি"
  },
  {
    "id": "q-220",
    "num": "২২০",
    "category": "ict",
    "question": "ROM-এর পূর্ণরূপ কী?",
    "options": [
      "Read Only Memory",
      "Random Open Memory",
      "Run Only Machine",
      "Read Online Machine"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Read Only Memory"
  },
  {
    "id": "q-221",
    "num": "২২১",
    "category": "ict",
    "question": "কম্পিউটারে তথ্যের ক্ষুদ্রতম একক কোনটি?",
    "options": [
      "বিট",
      "বাইট",
      "কিলোবাইট",
      "মেগাবাইট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিট"
  },
  {
    "id": "q-222",
    "num": "২২২",
    "category": "ict",
    "question": "৮ বিটে কত বাইট হয়?",
    "options": [
      "১",
      "২",
      "৪",
      "৮"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১"
  },
  {
    "id": "q-223",
    "num": "২২৩",
    "category": "ict",
    "question": "USB-এর পূর্ণরূপ কী?",
    "options": [
      "Universal Serial Bus",
      "United System Board",
      "Universal Storage Box",
      "User Service Base"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Universal Serial Bus"
  },
  {
    "id": "q-224",
    "num": "২২৪",
    "category": "ict",
    "question": "Wi-Fi কী কাজে ব্যবহৃত হয়?",
    "options": [
      "বেতার নেটওয়ার্কে সংযোগ করতে",
      "খাবার তৈরি করতে",
      "বিদ্যুৎ উৎপাদন করতে",
      "ছবি ছাপাতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বেতার নেটওয়ার্কে সংযোগ করতে"
  },
  {
    "id": "q-225",
    "num": "২২৫",
    "category": "ict",
    "question": "Bluetooth কী কাজে ব্যবহৃত হয়?",
    "options": [
      "কাছাকাছি ডিভাইসে বেতার যোগাযোগে",
      "জমি মাপতে",
      "পানি শোধন করতে",
      "কাগজ কাটতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাছাকাছি ডিভাইসে বেতার যোগাযোগে"
  },
  {
    "id": "q-226",
    "num": "২২৬",
    "category": "ict",
    "question": "কম্পিউটারে তথ্য স্থায়ীভাবে সংরক্ষণের একটি মাধ্যম কোনটি?",
    "options": [
      "SSD",
      "RAM",
      "CPU",
      "মনিটর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) SSD"
  },
  {
    "id": "q-227",
    "num": "২২৭",
    "category": "ict",
    "question": "Windows কী?",
    "options": [
      "অপারেটিং সিস্টেম",
      "সার্চ ইঞ্জিন",
      "ওয়েবসাইট",
      "প্রিন্টার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অপারেটিং সিস্টেম"
  },
  {
    "id": "q-228",
    "num": "২২৮",
    "category": "ict",
    "question": "Android কী?",
    "options": [
      "অপারেটিং সিস্টেম",
      "ক্যামেরা",
      "কিবোর্ড",
      "মাউস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অপারেটিং সিস্টেম"
  },
  {
    "id": "q-229",
    "num": "২২৯",
    "category": "ict",
    "question": "Google কী হিসেবে পরিচিত?",
    "options": [
      "সার্চ ইঞ্জিন",
      "প্রিন্টার",
      "ক্যামেরা",
      "অপারেটিং সিস্টেম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সার্চ ইঞ্জিন"
  },
  {
    "id": "q-230",
    "num": "২৩০",
    "category": "ict",
    "question": "YouTube মূলত কীসের প্ল্যাটফর্ম?",
    "options": [
      "ভিডিও",
      "ব্যাংকিং",
      "মানচিত্র ছাপানো",
      "বই বাঁধাই"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভিডিও"
  },
  {
    "id": "q-231",
    "num": "২৩১",
    "category": "ict",
    "question": "Microsoft Word কী কাজে ব্যবহৃত হয়?",
    "options": [
      "লেখালেখি ও ডকুমেন্ট তৈরি",
      "ভিডিও গেম",
      "গান শোনা",
      "ছবি তোলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লেখালেখি ও ডকুমেন্ট তৈরি"
  },
  {
    "id": "q-232",
    "num": "২৩২",
    "category": "ict",
    "question": "Microsoft Excel কী কাজে ব্যবহৃত হয়?",
    "options": [
      "স্প্রেডশিট ও হিসাব",
      "ভিডিও ধারণ",
      "গান সম্পাদনা",
      "মানচিত্র আঁকা মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্প্রেডশিট ও হিসাব"
  },
  {
    "id": "q-233",
    "num": "২৩৩",
    "category": "ict",
    "question": "Microsoft PowerPoint কী কাজে ব্যবহৃত হয়?",
    "options": [
      "প্রেজেন্টেশন তৈরি",
      "কম্পিউটার চালু করা",
      "ভাইরাস তৈরি",
      "ফাইল মুছে ফেলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রেজেন্টেশন তৈরি"
  },
  {
    "id": "q-234",
    "num": "২৩৪",
    "category": "ict",
    "question": "কম্পিউটার ভাইরাস কী?",
    "options": [
      "ক্ষতিকর প্রোগ্রাম",
      "একটি প্রিন্টার",
      "একটি মনিটর",
      "একটি কেবল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্ষতিকর প্রোগ্রাম"
  },
  {
    "id": "q-235",
    "num": "২৩৫",
    "category": "ict",
    "question": "কম্পিউটারকে ভাইরাস থেকে রক্ষা করতে কোন সফটওয়্যার ব্যবহার করা হয়?",
    "options": [
      "অ্যান্টিভাইরাস",
      "ক্যালকুলেটর",
      "পেইন্ট",
      "নোটপ্যাড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যান্টিভাইরাস"
  },
  {
    "id": "q-236",
    "num": "২৩৬",
    "category": "ict",
    "question": "শক্তিশালী পাসওয়ার্ড কেমন হওয়া উচিত?",
    "options": [
      "সহজে অনুমানযোগ্য",
      "নামমাত্র",
      "অক্ষর, সংখ্যা ও চিহ্নের মিশ্রণ",
      "শুধু ১২৩৪"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) অক্ষর, সংখ্যা ও চিহ্নের মিশ্রণ"
  },
  {
    "id": "q-237",
    "num": "২৩৭",
    "category": "ict",
    "question": "অনলাইনে ব্যক্তিগত পাসওয়ার্ড কী করা উচিত?",
    "options": [
      "সবার সঙ্গে শেয়ার করা",
      "গোপন রাখা",
      "সামাজিক মাধ্যমে পোস্ট করা",
      "অপরিচিতকে পাঠানো"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) গোপন রাখা"
  },
  {
    "id": "q-238",
    "num": "২৩৮",
    "category": "ict",
    "question": "ফাইল সংরক্ষণের সাধারণ শর্টকাট কোনটি?",
    "options": [
      "Ctrl + S",
      "Ctrl + P",
      "Ctrl + C",
      "Ctrl + X"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Ctrl + S"
  },
  {
    "id": "q-239",
    "num": "২৩৯",
    "category": "ict",
    "question": "কপি করার শর্টকাট কোনটি?",
    "options": [
      "Ctrl + V",
      "Ctrl + C",
      "Ctrl + X",
      "Ctrl + Z"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Ctrl + C"
  },
  {
    "id": "q-240",
    "num": "২৪০",
    "category": "ict",
    "question": "পেস্ট করার শর্টকাট কোনটি?",
    "options": [
      "Ctrl + A",
      "Ctrl + C",
      "Ctrl + V",
      "Ctrl + S"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Ctrl + V"
  },
  {
    "id": "q-241",
    "num": "২৪১",
    "category": "ict",
    "question": "Undo করার শর্টকাট কোনটি?",
    "options": [
      "Ctrl + Z",
      "Ctrl + P",
      "Ctrl + Y",
      "Ctrl + O"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Ctrl + Z"
  },
  {
    "id": "q-242",
    "num": "২৪২",
    "category": "ict",
    "question": "কোনো লেখা নির্বাচন করতে সাধারণত কোন শর্টকাট ব্যবহার করা হয়?",
    "options": [
      "Ctrl + A",
      "Ctrl + S",
      "Ctrl + P",
      "Ctrl + N"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Ctrl + A"
  },
  {
    "id": "q-243",
    "num": "২৪৩",
    "category": "ict",
    "question": "PDF-এর পূর্ণরূপ কী?",
    "options": [
      "Portable Document Format",
      "Personal Data File",
      "Program Document Form",
      "Printed Digital Folder"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Portable Document Format"
  },
  {
    "id": "q-244",
    "num": "২৪৪",
    "category": "ict",
    "question": "QR Code-এর প্রধান কাজ কী?",
    "options": [
      "তথ্য দ্রুত স্ক্যান করে পাওয়া",
      "বিদ্যুৎ তৈরি",
      "ছবি প্রিন্ট",
      "কম্পিউটার ঠান্ডা করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য দ্রুত স্ক্যান করে পাওয়া"
  },
  {
    "id": "q-245",
    "num": "২৪৫",
    "category": "ict",
    "question": "GPS কী কাজে ব্যবহৃত হয়?",
    "options": [
      "অবস্থান নির্ণয়ে",
      "রান্না করতে",
      "গান তৈরি করতে",
      "পানি মাপতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অবস্থান নির্ণয়ে"
  },
  {
    "id": "q-246",
    "num": "২৪৬",
    "category": "ict",
    "question": "ড্রোন কী?",
    "options": [
      "চালকবিহীন উড়ন্ত যন্ত্র",
      "পানির মাছ",
      "স্থলজ উদ্ভিদ",
      "গাড়ির চাকা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চালকবিহীন উড়ন্ত যন্ত্র"
  },
  {
    "id": "q-247",
    "num": "২৪৭",
    "category": "ict",
    "question": "ক্লাউড স্টোরেজ কী?",
    "options": [
      "অনলাইনে তথ্য সংরক্ষণের ব্যবস্থা",
      "আকাশে ফাইল রাখা",
      "কাগজের আলমারি",
      "কম্পিউটারের স্ক্রিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অনলাইনে তথ্য সংরক্ষণের ব্যবস্থা"
  },
  {
    "id": "q-248",
    "num": "২৪৮",
    "category": "ict",
    "question": "ভিডিও কনফারেন্স কী?",
    "options": [
      "দূরে থেকে সরাসরি ভিডিও যোগাযোগ",
      "ছবি আঁকা",
      "বই ছাপানো",
      "গান রেকর্ড করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দূরে থেকে সরাসরি ভিডিও যোগাযোগ"
  },
  {
    "id": "q-249",
    "num": "২৪৯",
    "category": "ict",
    "question": "প্রোগ্রামিং কী?",
    "options": [
      "কম্পিউটারকে নির্দেশনা লেখার প্রক্রিয়া",
      "ছবি দেখা",
      "কাগজ কাটা",
      "পানি পান করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কম্পিউটারকে নির্দেশনা লেখার প্রক্রিয়া"
  },
  {
    "id": "q-250",
    "num": "২৫০",
    "category": "ict",
    "question": "Python কী?",
    "options": [
      "প্রোগ্রামিং ভাষা",
      "কম্পিউটারের যন্ত্রাংশ",
      "সার্চ ইঞ্জিন",
      "মনিটর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোগ্রামিং ভাষা"
  },
  {
    "id": "q-251",
    "num": "২৫১",
    "category": "math",
    "question": "৫ + ৭ = কত?",
    "options": [
      "১০",
      "১১",
      "১২",
      "১৩"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১২"
  },
  {
    "id": "q-252",
    "num": "২৫২",
    "category": "math",
    "question": "১৫ - ৮ = কত?",
    "options": [
      "৫",
      "৬",
      "৭",
      "৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭"
  },
  {
    "id": "q-253",
    "num": "২৫৩",
    "category": "math",
    "question": "৬ × ৭ = কত?",
    "options": [
      "৩৬",
      "৪২",
      "৪৮",
      "৫৪"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৪২"
  },
  {
    "id": "q-254",
    "num": "২৫৪",
    "category": "math",
    "question": "৫৬ ÷ ৮ = কত?",
    "options": [
      "৬",
      "৭",
      "৮",
      "৯"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৭"
  },
  {
    "id": "q-255",
    "num": "২৫৫",
    "category": "math",
    "question": "১২-এর বর্গ কত?",
    "options": [
      "১২৪",
      "১৩৪",
      "১৪৪",
      "১৫৪"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৪৪"
  },
  {
    "id": "q-256",
    "num": "২৫৬",
    "category": "math",
    "question": "৯-এর বর্গ কত?",
    "options": [
      "১৮",
      "৭২",
      "৮১",
      "৯৯"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৮১"
  },
  {
    "id": "q-257",
    "num": "২৫৭",
    "category": "math",
    "question": "১০০-এর বর্গমূল কত?",
    "options": [
      "৫",
      "১০",
      "২০",
      "৫০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০"
  },
  {
    "id": "q-258",
    "num": "২৫৮",
    "category": "math",
    "question": "২৫-এর বর্গমূল কত?",
    "options": [
      "৩",
      "৪",
      "৫",
      "৬"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫"
  },
  {
    "id": "q-259",
    "num": "২৫৯",
    "category": "math",
    "question": "১ ডজন সমান কতটি?",
    "options": [
      "১০",
      "১২",
      "১৫",
      "২০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১২"
  },
  {
    "id": "q-260",
    "num": "২৬০",
    "category": "math",
    "question": "১ শতক সমান কত?",
    "options": [
      "১০",
      "৫০",
      "১০০",
      "১০০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০০"
  },
  {
    "id": "q-261",
    "num": "২৬১",
    "category": "math",
    "question": "১ কিলোমিটার সমান কত মিটার?",
    "options": [
      "১০০",
      "৫০০",
      "১০০০",
      "১০,০০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০০০"
  },
  {
    "id": "q-262",
    "num": "২৬২",
    "category": "math",
    "question": "১ মিটার সমান কত সেন্টিমিটার?",
    "options": [
      "১০",
      "৫০",
      "১০০",
      "১০০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০০"
  },
  {
    "id": "q-263",
    "num": "২৬৩",
    "category": "math",
    "question": "১ ঘণ্টায় কত মিনিট?",
    "options": [
      "৩০",
      "৪৫",
      "৬০",
      "৯০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬০"
  },
  {
    "id": "q-264",
    "num": "২৬৪",
    "category": "math",
    "question": "১ দিনে কত ঘণ্টা?",
    "options": [
      "১২",
      "১৮",
      "২৪",
      "৩০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২৪"
  },
  {
    "id": "q-265",
    "num": "২৬৫",
    "category": "math",
    "question": "১ সপ্তাহে কত দিন?",
    "options": [
      "৫",
      "৬",
      "৭",
      "৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭"
  },
  {
    "id": "q-266",
    "num": "২৬৬",
    "category": "math",
    "question": "১ বছরে সাধারণত কত মাস?",
    "options": [
      "১০",
      "১১",
      "১২",
      "১৩"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১২"
  },
  {
    "id": "q-267",
    "num": "২৬৭",
    "category": "math",
    "question": "একটি ত্রিভুজের কয়টি বাহু থাকে?",
    "options": [
      "২",
      "৩",
      "৪",
      "৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৩"
  },
  {
    "id": "q-268",
    "num": "২৬৮",
    "category": "math",
    "question": "একটি চতুর্ভুজের কয়টি বাহু থাকে?",
    "options": [
      "৩",
      "৪",
      "৫",
      "৬"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৪"
  },
  {
    "id": "q-269",
    "num": "২৬৯",
    "category": "math",
    "question": "বর্গক্ষেত্রের চারটি বাহু কেমন?",
    "options": [
      "সব সমান",
      "সব অসমান",
      "দুটি মাত্র সমান",
      "কোনো বাহু নেই"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সব সমান"
  },
  {
    "id": "q-270",
    "num": "২৭০",
    "category": "math",
    "question": "আয়তক্ষেত্রের বিপরীত বাহুগুলো কেমন?",
    "options": [
      "সমান",
      "সব ভিন্ন",
      "বাঁকা",
      "শূন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সমান"
  },
  {
    "id": "q-271",
    "num": "২৭১",
    "category": "math",
    "question": "একটি বৃত্তের কেন্দ্র থেকে পরিধি পর্যন্ত দূরত্বকে কী বলে?",
    "options": [
      "ব্যাস",
      "ব্যাসার্ধ",
      "পরিধি",
      "ক্ষেত্রফল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ব্যাসার্ধ"
  },
  {
    "id": "q-272",
    "num": "২৭২",
    "category": "math",
    "question": "৫০-এর অর্ধেক কত?",
    "options": [
      "১০",
      "২০",
      "২৫",
      "৩০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২৫"
  },
  {
    "id": "q-273",
    "num": "২৭৩",
    "category": "math",
    "question": "৮০-এর এক-চতুর্থাংশ কত?",
    "options": [
      "১০",
      "২০",
      "৩০",
      "৪০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২০"
  },
  {
    "id": "q-274",
    "num": "২৭৪",
    "category": "math",
    "question": "২০০-এর ১০% কত?",
    "options": [
      "১০",
      "২০",
      "৩০",
      "৪০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২০"
  },
  {
    "id": "q-275",
    "num": "২৭৫",
    "category": "math",
    "question": "৫০০-এর ২০% কত?",
    "options": [
      "৫০",
      "৭৫",
      "১০০",
      "১৫০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০০"
  },
  {
    "id": "q-276",
    "num": "২৭৬",
    "category": "math",
    "question": "৩/৪-এর দশমিক মান কত?",
    "options": [
      "০.২৫",
      "০.৫০",
      "০.৭৫",
      "১.২৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ০.৭৫"
  },
  {
    "id": "q-277",
    "num": "২৭৭",
    "category": "math",
    "question": "১/২-এর দশমিক মান কত?",
    "options": [
      "০.২৫",
      "০.৫০",
      "০.৭৫",
      "১.৫০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ০.৫০"
  },
  {
    "id": "q-278",
    "num": "২৭৮",
    "category": "math",
    "question": "সবচেয়ে ছোট মৌলিক সংখ্যা কোনটি?",
    "options": [
      "১",
      "২",
      "৩",
      "৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২"
  },
  {
    "id": "q-279",
    "num": "২৭৯",
    "category": "math",
    "question": "নিচের কোনটি জোড় সংখ্যা?",
    "options": [
      "৭",
      "৯",
      "১২",
      "১৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১২"
  },
  {
    "id": "q-280",
    "num": "২৮০",
    "category": "math",
    "question": "নিচের কোনটি বিজোড় সংখ্যা?",
    "options": [
      "১০",
      "১৬",
      "২২",
      "১৭"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ১৭"
  },
  {
    "id": "q-281",
    "num": "২৮১",
    "category": "math",
    "question": "২, ৪, ৬, ৮, পরের সংখ্যা কত?",
    "options": [
      "৯",
      "১০",
      "১২",
      "১৪"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০"
  },
  {
    "id": "q-282",
    "num": "২৮২",
    "category": "math",
    "question": "৫, ১০, ১৫, ২০, পরের সংখ্যা কত?",
    "options": [
      "২১",
      "২৫",
      "৩০",
      "৩৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২৫"
  },
  {
    "id": "q-283",
    "num": "২৮৩",
    "category": "math",
    "question": "১, ২, ৪, ৮, পরের সংখ্যা কত?",
    "options": [
      "১০",
      "১২",
      "১৬",
      "১৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৬"
  },
  {
    "id": "q-284",
    "num": "২৮৪",
    "category": "math",
    "question": "১০০০ থেকে ২৫০ বাদ দিলে কত থাকে?",
    "options": [
      "৬৫০",
      "৭০০",
      "৭৫০",
      "৮০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭৫০"
  },
  {
    "id": "q-285",
    "num": "২৮৫",
    "category": "math",
    "question": "১২ × ১২ = কত?",
    "options": [
      "১২৪",
      "১৩৪",
      "১৪৪",
      "১৫৪"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৪৪"
  },
  {
    "id": "q-286",
    "num": "২৮৬",
    "category": "math",
    "question": "১৪ × ৫ = কত?",
    "options": [
      "৬০",
      "৬৫",
      "৭০",
      "৭৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭০"
  },
  {
    "id": "q-287",
    "num": "২৮৭",
    "category": "math",
    "question": "৯৯ + ১ = কত?",
    "options": [
      "৯৯",
      "১০০",
      "১০১",
      "১১০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০০"
  },
  {
    "id": "q-288",
    "num": "২৮৮",
    "category": "math",
    "question": "১০০০ ÷ ১০ = কত?",
    "options": [
      "১০",
      "৫০",
      "১০০",
      "১০০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০০"
  },
  {
    "id": "q-289",
    "num": "২৮৯",
    "category": "math",
    "question": "৩ ঘণ্টা সমান কত মিনিট?",
    "options": [
      "৬০",
      "১২০",
      "১৮০",
      "২৪০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৮০"
  },
  {
    "id": "q-290",
    "num": "২৯০",
    "category": "math",
    "question": "সমকোণের পরিমাণ কত ডিগ্রি?",
    "options": [
      "৪৫°",
      "৬০°",
      "৯০°",
      "১৮০°"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯০°"
  },
  {
    "id": "q-291",
    "num": "২৯১",
    "category": "math",
    "question": "সরলকোণের পরিমাণ কত?",
    "options": [
      "৪৫°",
      "৯০°",
      "১৮০°",
      "৩৬০°"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৮০°"
  },
  {
    "id": "q-292",
    "num": "২৯২",
    "category": "math",
    "question": "পূর্ণকোণের পরিমাণ কত?",
    "options": [
      "৯০°",
      "১৮০°",
      "২৭০°",
      "৩৬০°"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ৩৬০°"
  },
  {
    "id": "q-293",
    "num": "২৯৩",
    "category": "math",
    "question": "ত্রিভুজের তিন কোণের সমষ্টি কত?",
    "options": [
      "৯০°",
      "১৮০°",
      "২৭০°",
      "৩৬০°"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৮০°"
  },
  {
    "id": "q-294",
    "num": "২৯৪",
    "category": "math",
    "question": "৭-এর নামতা অনুযায়ী ৭ × ৮ কত?",
    "options": [
      "৪৮",
      "৫৬",
      "৬৪",
      "৭২"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৫৬"
  },
  {
    "id": "q-295",
    "num": "২৯৫",
    "category": "math",
    "question": "১৩ + ১৭ = কত?",
    "options": [
      "২০",
      "২৫",
      "৩০",
      "৩৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩০"
  },
  {
    "id": "q-296",
    "num": "২৯৬",
    "category": "math",
    "question": "৪৫ ÷ ৫ = কত?",
    "options": [
      "৫",
      "৮",
      "৯",
      "১০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯"
  },
  {
    "id": "q-297",
    "num": "২৯৭",
    "category": "math",
    "question": "৬০-এর ৫০% কত?",
    "options": [
      "২০",
      "২৫",
      "৩০",
      "৪০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩০"
  },
  {
    "id": "q-298",
    "num": "২৯৮",
    "category": "math",
    "question": "একটি কলমের দাম ১০ টাকা হলে ৫টি কলমের দাম কত?",
    "options": [
      "৩০ টাকা",
      "৪০ টাকা",
      "৫০ টাকা",
      "৬০ টাকা"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫০ টাকা"
  },
  {
    "id": "q-299",
    "num": "২৯৯",
    "category": "math",
    "question": "১, ৩, ৫, ৭, পরের সংখ্যা কত?",
    "options": [
      "৮",
      "৯",
      "১০",
      "১১"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৯"
  },
  {
    "id": "q-300",
    "num": "৩০০",
    "category": "math",
    "question": "১০, ২০, ৩০, ৪০, পরের সংখ্যা কত?",
    "options": [
      "৪৫",
      "৫০",
      "৫৫",
      "৬০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৫০"
  },
  {
    "id": "q-301",
    "num": "৩০১",
    "category": "bangla",
    "question": "বাংলা বর্ণমালায় স্বরবর্ণ কয়টি?",
    "options": [
      "৯টি",
      "১১টি",
      "১২টি",
      "১৩টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১১টি"
  },
  {
    "id": "q-302",
    "num": "৩০২",
    "category": "bangla",
    "question": "বাংলা বর্ণমালায় ব্যঞ্জনবর্ণ কয়টি?",
    "options": [
      "৩০টি",
      "৩৫টি",
      "৩৯টি",
      "৪০টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩৯টি"
  },
  {
    "id": "q-303",
    "num": "৩০৩",
    "category": "bangla",
    "question": "বাংলা ভাষার প্রথম মাস কোনটি?",
    "options": [
      "বৈশাখ",
      "জ্যৈষ্ঠ",
      "আষাঢ়",
      "শ্রাবণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৈশাখ"
  },
  {
    "id": "q-304",
    "num": "৩০৪",
    "category": "bangla",
    "question": "বাংলা ভাষায় মোট কয়টি ঋতু?",
    "options": [
      "৪টি",
      "৫টি",
      "৬টি",
      "৭টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬টি"
  },
  {
    "id": "q-305",
    "num": "৩০৫",
    "category": "bangla",
    "question": "বাংলা বছরের শেষ মাস কোনটি?",
    "options": [
      "ফাল্গুন",
      "চৈত্র",
      "মাঘ",
      "পৌষ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) চৈত্র"
  },
  {
    "id": "q-306",
    "num": "৩০৬",
    "category": "bangla",
    "question": "‘আকাশ’ শব্দের সমার্থক শব্দ কোনটি?",
    "options": [
      "গগন",
      "মাটি",
      "নদী",
      "বন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গগন"
  },
  {
    "id": "q-307",
    "num": "৩০৭",
    "category": "bangla",
    "question": "‘সূর্য’ শব্দের সমার্থক শব্দ কোনটি?",
    "options": [
      "চন্দ্র",
      "রবি",
      "তারা",
      "মেঘ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রবি"
  },
  {
    "id": "q-308",
    "num": "৩০৮",
    "category": "bangla",
    "question": "‘পৃথিবী’ শব্দের সমার্থক শব্দ কোনটি?",
    "options": [
      "ধরিত্রী",
      "আকাশ",
      "বাতাস",
      "সাগর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ধরিত্রী"
  },
  {
    "id": "q-309",
    "num": "৩০৯",
    "category": "bangla",
    "question": "‘আলো’ শব্দের বিপরীত শব্দ কোনটি?",
    "options": [
      "উজ্জ্বল",
      "অন্ধকার",
      "দীপ্তি",
      "রোদ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) অন্ধকার"
  },
  {
    "id": "q-310",
    "num": "৩১০",
    "category": "bangla",
    "question": "‘দিন’ শব্দের বিপরীত শব্দ কোনটি?",
    "options": [
      "সকাল",
      "দুপুর",
      "রাত",
      "বিকেল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) রাত"
  },
  {
    "id": "q-311",
    "num": "৩১১",
    "category": "bangla",
    "question": "‘সুখ’ শব্দের বিপরীত শব্দ কোনটি?",
    "options": [
      "আনন্দ",
      "দুঃখ",
      "হাসি",
      "শান্তি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দুঃখ"
  },
  {
    "id": "q-312",
    "num": "৩১২",
    "category": "bangla",
    "question": "‘সত্য’ শব্দের বিপরীত শব্দ কোনটি?",
    "options": [
      "মিথ্যা",
      "ন্যায়",
      "ভালো",
      "সুন্দর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মিথ্যা"
  },
  {
    "id": "q-313",
    "num": "৩১৩",
    "category": "bangla",
    "question": "‘যে উপকার করে’ তাকে কী বলে?",
    "options": [
      "উপকারী",
      "অপকারী",
      "অলস",
      "নিষ্ঠুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উপকারী"
  },
  {
    "id": "q-314",
    "num": "৩১৪",
    "category": "bangla",
    "question": "যে দেশকে ভালোবাসে তাকে কী বলে?",
    "options": [
      "দেশদ্রোহী",
      "দেশপ্রেমিক",
      "পর্যটক",
      "ব্যবসায়ী"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দেশপ্রেমিক"
  },
  {
    "id": "q-315",
    "num": "৩১৫",
    "category": "bangla",
    "question": "‘অরণ্য’ শব্দের অর্থ কী?",
    "options": [
      "নদী",
      "বন",
      "পাহাড়",
      "সমুদ্র"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বন"
  },
  {
    "id": "q-316",
    "num": "৩১৬",
    "category": "bangla",
    "question": "‘নীর’ শব্দের অর্থ কী?",
    "options": [
      "আগুন",
      "পানি",
      "বাতাস",
      "মাটি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) পানি"
  },
  {
    "id": "q-317",
    "num": "৩১৭",
    "category": "bangla",
    "question": "‘গৃহ’ শব্দের অর্থ কী?",
    "options": [
      "বাড়ি",
      "মাঠ",
      "নদী",
      "বাজার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাড়ি"
  },
  {
    "id": "q-318",
    "num": "৩১৮",
    "category": "bangla",
    "question": "‘অমর’ শব্দের অর্থ কী?",
    "options": [
      "যে কখনো জন্মায় না",
      "যার মৃত্যু নেই",
      "যে ঘুমায়",
      "যে কথা বলে না"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) যার মৃত্যু নেই"
  },
  {
    "id": "q-319",
    "num": "৩১৯",
    "category": "bangla",
    "question": "‘অল্প’ শব্দের বিপরীত শব্দ কী?",
    "options": [
      "কম",
      "বেশি",
      "ক্ষুদ্র",
      "সামান্য"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বেশি"
  },
  {
    "id": "q-320",
    "num": "৩২০",
    "category": "bangla",
    "question": "‘শিক্ষক’ শব্দের স্ত্রীলিঙ্গ কোনটি?",
    "options": [
      "শিক্ষার্থী",
      "শিক্ষিকা",
      "শিক্ষিত",
      "শিক্ষা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শিক্ষিকা"
  },
  {
    "id": "q-321",
    "num": "৩২১",
    "category": "bangla",
    "question": "‘রাজা’ শব্দের স্ত্রীলিঙ্গ কী?",
    "options": [
      "রাজকন্যা",
      "রানি",
      "রাজমাতা",
      "রাজত্ব"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রানি"
  },
  {
    "id": "q-322",
    "num": "৩২২",
    "category": "bangla",
    "question": "‘ছেলে’ শব্দের স্ত্রীলিঙ্গ কী?",
    "options": [
      "বোন",
      "মেয়ে",
      "মা",
      "নারী"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মেয়ে"
  },
  {
    "id": "q-323",
    "num": "৩২৩",
    "category": "bangla",
    "question": "‘পাখিরা আকাশে উড়ে’ বাক্যে ক্রিয়া কোনটি?",
    "options": [
      "পাখিরা",
      "আকাশে",
      "উড়ে",
      "কোনোটি নয়"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) উড়ে"
  },
  {
    "id": "q-324",
    "num": "৩২৪",
    "category": "bangla",
    "question": "‘রহিম বই পড়ে’ বাক্যে কর্তা কে?",
    "options": [
      "রহিম",
      "বই",
      "পড়ে",
      "কোনোটি নয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রহিম"
  },
  {
    "id": "q-325",
    "num": "৩২৫",
    "category": "bangla",
    "question": "‘আমি স্কুলে যাই’ বাক্যে সর্বনাম কোনটি?",
    "options": [
      "স্কুলে",
      "যাই",
      "আমি",
      "কোনোটি নয়"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) আমি"
  },
  {
    "id": "q-326",
    "num": "৩২৬",
    "category": "bangla",
    "question": "‘সুন্দর ফুল’ কথায় বিশেষণ কোনটি?",
    "options": [
      "সুন্দর",
      "ফুল",
      "দুটিই",
      "কোনোটিই নয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুন্দর"
  },
  {
    "id": "q-327",
    "num": "৩২৭",
    "category": "bangla",
    "question": "ভাষার ক্ষুদ্রতম ধ্বনিগত একক কী?",
    "options": [
      "ধ্বনি",
      "বাক্য",
      "অনুচ্ছেদ",
      "গল্প"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ধ্বনি"
  },
  {
    "id": "q-328",
    "num": "৩২৮",
    "category": "bangla",
    "question": "বাক্যের শেষে সাধারণত কোন বিরামচিহ্ন বসে?",
    "options": [
      "কমা",
      "দাঁড়ি",
      "কোলন",
      "সেমিকোলন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দাঁড়ি"
  },
  {
    "id": "q-329",
    "num": "৩২৯",
    "category": "bangla",
    "question": "প্রশ্নবোধক বাক্যের শেষে কোন চিহ্ন বসে?",
    "options": [
      "!",
      "?",
      ",",
      ":"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ?"
  },
  {
    "id": "q-330",
    "num": "৩৩০",
    "category": "bangla",
    "question": "‘বিদ্রোহী’ কবিতার রচয়িতা কে?",
    "options": [
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "জসীমউদ্দীন",
      "সুকান্ত ভট্টাচার্য"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কাজী নজরুল ইসলাম"
  },
  {
    "id": "q-331",
    "num": "৩৩১",
    "category": "bangla",
    "question": "‘গীতাঞ্জলি’ কার রচনা?",
    "options": [
      "রবীন্দ্রনাথ ঠাকুর",
      "কাজী নজরুল ইসলাম",
      "শরৎচন্দ্র",
      "বঙ্কিমচন্দ্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রবীন্দ্রনাথ ঠাকুর"
  },
  {
    "id": "q-332",
    "num": "৩৩২",
    "category": "bangla",
    "question": "‘পল্লিকবি’ নামে পরিচিত কে?",
    "options": [
      "জসীমউদ্দীন",
      "জীবনানন্দ দাশ",
      "রবীন্দ্রনাথ ঠাকুর",
      "মাইকেল মধুসূদন দত্ত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জসীমউদ্দীন"
  },
  {
    "id": "q-333",
    "num": "৩৩৩",
    "category": "bangla",
    "question": "‘রূপসী বাংলা’ কাব্যগ্রন্থের রচয়িতা কে?",
    "options": [
      "সুকান্ত ভট্টাচার্য",
      "জীবনানন্দ দাশ",
      "নজরুল ইসলাম",
      "জসীমউদ্দীন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জীবনানন্দ দাশ"
  },
  {
    "id": "q-334",
    "num": "৩৩৪",
    "category": "bangla",
    "question": "‘মেঘনাদবধ কাব্য’ কার লেখা?",
    "options": [
      "বঙ্কিমচন্দ্র",
      "মাইকেল মধুসূদন দত্ত",
      "শরৎচন্দ্র",
      "রবীন্দ্রনাথ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মাইকেল মধুসূদন দত্ত"
  },
  {
    "id": "q-335",
    "num": "৩৩৫",
    "category": "bangla",
    "question": "‘আনন্দমঠ’ উপন্যাসের লেখক কে?",
    "options": [
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "শরৎচন্দ্র চট্টোপাধ্যায়",
      "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      "মানিক বন্দ্যোপাধ্যায়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বঙ্কিমচন্দ্র চট্টোপাধ্যায়"
  },
  {
    "id": "q-336",
    "num": "৩৩৬",
    "category": "bangla",
    "question": "‘পথের পাঁচালী’ উপন্যাসের লেখক কে?",
    "options": [
      "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
      "শরৎচন্দ্র",
      "বঙ্কিমচন্দ্র",
      "তারাশঙ্কর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিভূতিভূষণ বন্দ্যোপাধ্যায়"
  },
  {
    "id": "q-337",
    "num": "৩৩৭",
    "category": "bangla",
    "question": "‘হাজার বছর ধরে’ উপন্যাসের লেখক কে?",
    "options": [
      "জহির রায়হান",
      "হুমায়ূন আহমেদ",
      "শওকত ওসমান",
      "সেলিনা হোসেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জহির রায়হান"
  },
  {
    "id": "q-338",
    "num": "৩৩৮",
    "category": "bangla",
    "question": "‘কবর’ কবিতার রচয়িতা কে?",
    "options": [
      "জসীমউদ্দীন",
      "রবীন্দ্রনাথ ঠাকুর",
      "জীবনানন্দ দাশ",
      "সুকান্ত ভট্টাচার্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জসীমউদ্দীন"
  },
  {
    "id": "q-339",
    "num": "৩৩৯",
    "category": "bangla",
    "question": "বাংলা সাহিত্যের প্রথম সার্থক উপন্যাস হিসেবে কোনটি পরিচিত?",
    "options": [
      "দুর্গেশনন্দিনী",
      "দেবদাস",
      "পথের পাঁচালী",
      "কপালকুণ্ডলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দুর্গেশনন্দিনী"
  },
  {
    "id": "q-340",
    "num": "৩৪০",
    "category": "bangla",
    "question": "‘আমার ভাইয়ের রক্তে রাঙানো’ গানটির গীতিকার কে?",
    "options": [
      "আবদুল গাফ্‌ফার চৌধুরী",
      "আলতাফ মাহমুদ",
      "কাজী নজরুল ইসলাম",
      "রবীন্দ্রনাথ ঠাকুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আবদুল গাফ্‌ফার চৌধুরী"
  },
  {
    "id": "q-341",
    "num": "৩৪১",
    "category": "bangla",
    "question": "‘আমার ভাইয়ের রক্তে রাঙানো’ গানের সুরকার কে?",
    "options": [
      "আবদুল লতিফ",
      "আলতাফ মাহমুদ",
      "শাহনেওয়াজ",
      "সমর দাস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আলতাফ মাহমুদ"
  },
  {
    "id": "q-342",
    "num": "৩৪২",
    "category": "bangla",
    "question": "বাংলা নববর্ষের প্রথম দিন কোনটি?",
    "options": [
      "১ বৈশাখ",
      "১ জ্যৈষ্ঠ",
      "১ ফাল্গুন",
      "১ চৈত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১ বৈশাখ"
  },
  {
    "id": "q-343",
    "num": "৩৪৩",
    "category": "bangla",
    "question": "‘বই’ শব্দের বহুবচন কোনটি?",
    "options": [
      "বইটি",
      "বইগুলো",
      "বইয়ের",
      "বইকে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বইগুলো"
  },
  {
    "id": "q-344",
    "num": "৩৪৪",
    "category": "bangla",
    "question": "‘মানুষ’ শব্দের বহুবচন বোঝাতে কোনটি সঠিক?",
    "options": [
      "মানুষগুলো",
      "মানুষটি",
      "মানুষকে",
      "মানুষে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মানুষগুলো"
  },
  {
    "id": "q-345",
    "num": "৩৪৫",
    "category": "bangla",
    "question": "‘বিদ্যালয়’ শব্দের সমার্থক শব্দ কী?",
    "options": [
      "হাসপাতাল",
      "স্কুল",
      "বাজার",
      "কারখানা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) স্কুল"
  },
  {
    "id": "q-346",
    "num": "৩৪৬",
    "category": "bangla",
    "question": "‘চন্দ্র’ শব্দের সমার্থক শব্দ কোনটি?",
    "options": [
      "শশী",
      "রবি",
      "অগ্নি",
      "অনল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শশী"
  },
  {
    "id": "q-347",
    "num": "৩৪৭",
    "category": "bangla",
    "question": "‘অগ্নি’ শব্দের অর্থ কী?",
    "options": [
      "পানি",
      "আগুন",
      "বাতাস",
      "মাটি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আগুন"
  },
  {
    "id": "q-348",
    "num": "৩৪৮",
    "category": "bangla",
    "question": "বাংলা ভাষার প্রধান লিপি কোনটি?",
    "options": [
      "রোমান",
      "বাংলা লিপি",
      "আরবি",
      "দেবনাগরী"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বাংলা লিপি"
  },
  {
    "id": "q-349",
    "num": "৩৪৯",
    "category": "bangla",
    "question": "‘যে সত্য কথা বলে’ তাকে কী বলা হয়?",
    "options": [
      "সত্যবাদী",
      "মিথ্যাবাদী",
      "কৃপণ",
      "অলস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সত্যবাদী"
  },
  {
    "id": "q-350",
    "num": "৩৫০",
    "category": "bangla",
    "question": "‘পরিশ্রম সৌভাগ্যের প্রসূতি’ প্রবাদটির মূল শিক্ষা কী?",
    "options": [
      "অলসতা ভালো",
      "পরিশ্রমে সাফল্য আসে",
      "সময় নষ্ট করা উচিত",
      "কাজ না করাই ভালো"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) পরিশ্রমে সাফল্য আসে"
  },
  {
    "id": "q-351",
    "num": "৩৫১",
    "category": "english",
    "question": "What is the English of “বই”?",
    "options": [
      "Pen",
      "Book",
      "Table",
      "Chair"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Book"
  },
  {
    "id": "q-352",
    "num": "৩৫২",
    "category": "english",
    "question": "What is the English of “পানি”?",
    "options": [
      "Milk",
      "Juice",
      "Water",
      "Tea"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Water"
  },
  {
    "id": "q-353",
    "num": "৩৫৩",
    "category": "english",
    "question": "What is the plural of “Child”?",
    "options": [
      "Childs",
      "Children",
      "Childes",
      "Childrens"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Children"
  },
  {
    "id": "q-354",
    "num": "৩৫৪",
    "category": "english",
    "question": "What is the plural of “Man”?",
    "options": [
      "Mans",
      "Men",
      "Manes",
      "Mens"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Men"
  },
  {
    "id": "q-355",
    "num": "৩৫৫",
    "category": "english",
    "question": "What is the plural of “Foot”?",
    "options": [
      "Foots",
      "Feets",
      "Feet",
      "Footes"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Feet"
  },
  {
    "id": "q-356",
    "num": "৩৫৬",
    "category": "english",
    "question": "What is the opposite of “Hot”?",
    "options": [
      "Warm",
      "Cold",
      "Heat",
      "Fire"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Cold"
  },
  {
    "id": "q-357",
    "num": "৩৫৭",
    "category": "english",
    "question": "What is the opposite of “Big”?",
    "options": [
      "Large",
      "Small",
      "Tall",
      "Long"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Small"
  },
  {
    "id": "q-358",
    "num": "৩৫৮",
    "category": "english",
    "question": "What is the opposite of “Happy”?",
    "options": [
      "Glad",
      "Sad",
      "Joyful",
      "Nice"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Sad"
  },
  {
    "id": "q-359",
    "num": "৩৫৯",
    "category": "english",
    "question": "What is the opposite of “Day”?",
    "options": [
      "Morning",
      "Night",
      "Noon",
      "Evening"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Night"
  },
  {
    "id": "q-360",
    "num": "৩৬০",
    "category": "english",
    "question": "What is the opposite of “Fast”?",
    "options": [
      "Quick",
      "Slow",
      "Rapid",
      "Speedy"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Slow"
  },
  {
    "id": "q-361",
    "num": "৩৬১",
    "category": "english",
    "question": "Which one is a noun?",
    "options": [
      "Run",
      "Beautiful",
      "Book",
      "Quickly"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Book"
  },
  {
    "id": "q-362",
    "num": "৩৬২",
    "category": "english",
    "question": "Which one is a verb?",
    "options": [
      "Eat",
      "Table",
      "Beautiful",
      "Blue"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Eat"
  },
  {
    "id": "q-363",
    "num": "৩৬৩",
    "category": "english",
    "question": "Which one is an adjective?",
    "options": [
      "Run",
      "Beautiful",
      "Quickly",
      "Eat"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Beautiful"
  },
  {
    "id": "q-364",
    "num": "৩৬৪",
    "category": "english",
    "question": "Which one is a pronoun?",
    "options": [
      "He",
      "Book",
      "School",
      "Water"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) He"
  },
  {
    "id": "q-365",
    "num": "৩৬৫",
    "category": "english",
    "question": "What is the past tense of “Go”?",
    "options": [
      "Goed",
      "Went",
      "Gone",
      "Going"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Went"
  },
  {
    "id": "q-366",
    "num": "৩৬৬",
    "category": "english",
    "question": "What is the past tense of “Eat”?",
    "options": [
      "Eated",
      "Ate",
      "Eating",
      "Eats"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Ate"
  },
  {
    "id": "q-367",
    "num": "৩৬৭",
    "category": "english",
    "question": "What is the past tense of “Write”?",
    "options": [
      "Wrote",
      "Written",
      "Writing",
      "Writes"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Wrote"
  },
  {
    "id": "q-368",
    "num": "৩৬৮",
    "category": "english",
    "question": "What is the past tense of “See”?",
    "options": [
      "Seen",
      "Saw",
      "Seeing",
      "Sees"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Saw"
  },
  {
    "id": "q-369",
    "num": "৩৬৯",
    "category": "english",
    "question": "What is the past participle of “Break”?",
    "options": [
      "Broke",
      "Breaking",
      "Broken",
      "Breaks"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Broken"
  },
  {
    "id": "q-370",
    "num": "৩৭০",
    "category": "english",
    "question": "What is the correct article before “Apple”?",
    "options": [
      "A",
      "An",
      "The only",
      "No article always"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) An"
  },
  {
    "id": "q-371",
    "num": "৩৭১",
    "category": "english",
    "question": "What is the correct article before “Book”?",
    "options": [
      "An",
      "A",
      "Am",
      "Are"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) A"
  },
  {
    "id": "q-372",
    "num": "৩৭২",
    "category": "english",
    "question": "Which is the correct spelling?",
    "options": [
      "School",
      "Skool",
      "Scool",
      "Scholl"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) School"
  },
  {
    "id": "q-373",
    "num": "৩৭৩",
    "category": "english",
    "question": "Which is the correct spelling?",
    "options": [
      "Beautifull",
      "Beutiful",
      "Beautiful",
      "Butiful"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Beautiful"
  },
  {
    "id": "q-374",
    "num": "৩৭৪",
    "category": "english",
    "question": "Which is the correct spelling?",
    "options": [
      "Frend",
      "Friend",
      "Freind",
      "Friand"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Friend"
  },
  {
    "id": "q-375",
    "num": "৩৭৫",
    "category": "english",
    "question": "What is the English of “সূর্য”?",
    "options": [
      "Moon",
      "Star",
      "Sun",
      "Sky"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Sun"
  },
  {
    "id": "q-376",
    "num": "৩৭৬",
    "category": "english",
    "question": "What is the English of “চাঁদ”?",
    "options": [
      "Moon",
      "Sun",
      "Earth",
      "Cloud"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Moon"
  },
  {
    "id": "q-377",
    "num": "৩৭৭",
    "category": "english",
    "question": "What is the English of “বাঘ”?",
    "options": [
      "Lion",
      "Tiger",
      "Bear",
      "Deer"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Tiger"
  },
  {
    "id": "q-378",
    "num": "৩৭৮",
    "category": "english",
    "question": "What is the English of “হাতি”?",
    "options": [
      "Horse",
      "Elephant",
      "Camel",
      "Zebra"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Elephant"
  },
  {
    "id": "q-379",
    "num": "৩৭৯",
    "category": "english",
    "question": "What is the English of “পাখি”?",
    "options": [
      "Fish",
      "Bird",
      "Animal",
      "Insect"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Bird"
  },
  {
    "id": "q-380",
    "num": "৩৮০",
    "category": "english",
    "question": "How many letters are there in the English alphabet?",
    "options": [
      "২৪",
      "২৫",
      "২৬",
      "২৭"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২৬"
  },
  {
    "id": "q-381",
    "num": "৩৮১",
    "category": "english",
    "question": "How many vowels are there in the English alphabet?",
    "options": [
      "৪",
      "৫",
      "৬",
      "৭"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৫"
  },
  {
    "id": "q-382",
    "num": "৩৮২",
    "category": "english",
    "question": "Which one is a vowel?",
    "options": [
      "B",
      "C",
      "E",
      "G"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) E"
  },
  {
    "id": "q-383",
    "num": "৩৮৩",
    "category": "english",
    "question": "What is the opposite of “Clean”?",
    "options": [
      "Neat",
      "Dirty",
      "Pure",
      "Fresh"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Dirty"
  },
  {
    "id": "q-384",
    "num": "৩৮৪",
    "category": "english",
    "question": "What is the opposite of “Strong”?",
    "options": [
      "Powerful",
      "Weak",
      "Brave",
      "Hard"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Weak"
  },
  {
    "id": "q-385",
    "num": "৩৮৫",
    "category": "english",
    "question": "What is the opposite of “Early”?",
    "options": [
      "Soon",
      "Late",
      "Fast",
      "Quick"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Late"
  },
  {
    "id": "q-386",
    "num": "৩৮৬",
    "category": "english",
    "question": "Which sentence is correct?",
    "options": [
      "He are a boy.",
      "He is a boy.",
      "He am a boy.",
      "He be a boy."
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) He is a boy."
  },
  {
    "id": "q-387",
    "num": "৩৮৭",
    "category": "english",
    "question": "Which sentence is correct?",
    "options": [
      "I is happy.",
      "I am happy.",
      "I are happy.",
      "I be happy."
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) I am happy."
  },
  {
    "id": "q-388",
    "num": "৩৮৮",
    "category": "english",
    "question": "What is the past tense of “Play”?",
    "options": [
      "Played",
      "Playing",
      "Plays",
      "Playen"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Played"
  },
  {
    "id": "q-389",
    "num": "৩৮৯",
    "category": "english",
    "question": "What is the meaning of “Honest”?",
    "options": [
      "সৎ",
      "অলস",
      "রাগী",
      "দুর্বল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সৎ"
  },
  {
    "id": "q-390",
    "num": "৩৯০",
    "category": "english",
    "question": "What is the meaning of “Brave”?",
    "options": [
      "ভীতু",
      "সাহসী",
      "অলস",
      "দুর্বল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সাহসী"
  },
  {
    "id": "q-391",
    "num": "৩৯১",
    "category": "english",
    "question": "What is the meaning of “Beautiful”?",
    "options": [
      "কুৎসিত",
      "সুন্দর",
      "কঠিন",
      "দ্রুত"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সুন্দর"
  },
  {
    "id": "q-392",
    "num": "৩৯২",
    "category": "english",
    "question": "What is the meaning of “Knowledge”?",
    "options": [
      "জ্ঞান",
      "আনন্দ",
      "দুঃখ",
      "ভয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জ্ঞান"
  },
  {
    "id": "q-393",
    "num": "৩৯৩",
    "category": "english",
    "question": "What is the meaning of “Wisdom”?",
    "options": [
      "প্রজ্ঞা",
      "দুর্বলতা",
      "রাগ",
      "ভয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রজ্ঞা"
  },
  {
    "id": "q-394",
    "num": "৩৯৪",
    "category": "english",
    "question": "What is the meaning of “Kindness”?",
    "options": [
      "নিষ্ঠুরতা",
      "দয়া",
      "অহংকার",
      "হিংসা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দয়া"
  },
  {
    "id": "q-395",
    "num": "৩৯৫",
    "category": "english",
    "question": "Which one is a preposition?",
    "options": [
      "In",
      "Run",
      "Happy",
      "Boy"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) In"
  },
  {
    "id": "q-396",
    "num": "৩৯৬",
    "category": "english",
    "question": "Which one is a conjunction?",
    "options": [
      "And",
      "Book",
      "Blue",
      "Walk"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) And"
  },
  {
    "id": "q-397",
    "num": "৩৯৭",
    "category": "english",
    "question": "What is the plural of “Mouse”?",
    "options": [
      "Mouses",
      "Mice",
      "Mousees",
      "Mousen"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Mice"
  },
  {
    "id": "q-398",
    "num": "৩৯৮",
    "category": "english",
    "question": "What is the plural of “Tooth”?",
    "options": [
      "Tooths",
      "Teeth",
      "Toothes",
      "Teath"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Teeth"
  },
  {
    "id": "q-399",
    "num": "৩৯৯",
    "category": "english",
    "question": "What is the opposite of “Love”?",
    "options": [
      "Care",
      "Hate",
      "Like",
      "Enjoy"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Hate"
  },
  {
    "id": "q-400",
    "num": "৪০০",
    "category": "english",
    "question": "Which word means “পৃথিবী”?",
    "options": [
      "Earth",
      "Sky",
      "Sea",
      "Star"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Earth"
  },
  {
    "id": "q-401",
    "num": "৪০১",
    "category": "islamic",
    "question": "মুসলমানদের পবিত্র ধর্মগ্রন্থের নাম কী?",
    "options": [
      "তাওরাত",
      "কুরআন মাজিদ",
      "ইঞ্জিল",
      "যাবুর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কুরআন মাজিদ"
  },
  {
    "id": "q-402",
    "num": "৪০২",
    "category": "islamic",
    "question": "পবিত্র কুরআনে মোট কয়টি সূরা রয়েছে?",
    "options": [
      "১০০",
      "১১৪",
      "১২০",
      "১২৪"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১১৪"
  },
  {
    "id": "q-403",
    "num": "৪০৩",
    "category": "islamic",
    "question": "পবিত্র কুরআনের প্রথম সূরার নাম কী?",
    "options": [
      "আল-বাকারা",
      "আল-ফাতিহা",
      "আল-ইখলাস",
      "আন-নাস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আল-ফাতিহা"
  },
  {
    "id": "q-404",
    "num": "৪০৪",
    "category": "islamic",
    "question": "পবিত্র কুরআনের শেষ সূরার নাম কী?",
    "options": [
      "আল-ফালাক",
      "আল-ইখলাস",
      "আন-নাস",
      "আল-কাওসার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) আন-নাস"
  },
  {
    "id": "q-405",
    "num": "৪০৫",
    "category": "islamic",
    "question": "পবিত্র কুরআন কোন ভাষায় নাজিল হয়েছে?",
    "options": [
      "বাংলা",
      "আরবি",
      "ফারসি",
      "উর্দু"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আরবি"
  },
  {
    "id": "q-406",
    "num": "৪০৬",
    "category": "islamic",
    "question": "সর্বশেষ নবী কে?",
    "options": [
      "হজরত মুসা (আ.)",
      "হজরত ঈসা (আ.)",
      "হজরত মুহাম্মদ (সা.)",
      "হজরত ইবরাহিম (আ.)"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) হজরত মুহাম্মদ (সা.)"
  },
  {
    "id": "q-407",
    "num": "৪০৭",
    "category": "islamic",
    "question": "হজরত মুহাম্মদ (সা.) কোথায় জন্মগ্রহণ করেন?",
    "options": [
      "মদিনা",
      "মক্কা",
      "জেরুজালেম",
      "তায়েফ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মক্কা"
  },
  {
    "id": "q-408",
    "num": "৪০৮",
    "category": "islamic",
    "question": "হজরত মুহাম্মদ (সা.)-এর পিতার নাম কী?",
    "options": [
      "আবু তালিব",
      "আবদুল্লাহ",
      "আবদুল মুত্তালিব",
      "আবু বকর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আবদুল্লাহ"
  },
  {
    "id": "q-409",
    "num": "৪০৯",
    "category": "islamic",
    "question": "হজরত মুহাম্মদ (সা.)-এর মাতার নাম কী?",
    "options": [
      "আমিনা",
      "খাদিজা",
      "আয়েশা",
      "ফাতিমা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আমিনা"
  },
  {
    "id": "q-410",
    "num": "৪১০",
    "category": "islamic",
    "question": "হজরত মুহাম্মদ (সা.)-এর প্রথম স্ত্রী কে ছিলেন?",
    "options": [
      "আয়েশা (রা.)",
      "খাদিজা (রা.)",
      "হাফসা (রা.)",
      "সাওদা (রা.)"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) খাদিজা (রা.)"
  },
  {
    "id": "q-411",
    "num": "৪১১",
    "category": "islamic",
    "question": "ইসলামের পাঁচটি স্তম্ভের প্রথমটি কী?",
    "options": [
      "সালাত",
      "সাওম",
      "শাহাদাত",
      "হজ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) শাহাদাত"
  },
  {
    "id": "q-412",
    "num": "৪১২",
    "category": "islamic",
    "question": "মুসলমানরা দিনে কয় ওয়াক্ত ফরজ নামাজ আদায় করেন?",
    "options": [
      "৩",
      "৪",
      "৫",
      "৬"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫"
  },
  {
    "id": "q-413",
    "num": "৪১৩",
    "category": "islamic",
    "question": "রমজান মাসে মুসলমানরা কী পালন করেন?",
    "options": [
      "হজ",
      "রোজা",
      "কুরবানি",
      "আকিকা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রোজা"
  },
  {
    "id": "q-414",
    "num": "৪১৪",
    "category": "islamic",
    "question": "মুসলমানদের কিবলা কোনটি?",
    "options": [
      "মসজিদে নববি",
      "কাবা শরিফ",
      "আল-আকসা",
      "মসজিদে কুবা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কাবা শরিফ"
  },
  {
    "id": "q-415",
    "num": "৪১৫",
    "category": "islamic",
    "question": "কাবা শরিফ কোথায় অবস্থিত?",
    "options": [
      "মদিনা",
      "মক্কা",
      "জেদ্দা",
      "রিয়াদ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মক্কা"
  },
  {
    "id": "q-416",
    "num": "৪১৬",
    "category": "islamic",
    "question": "হিজরি সনের প্রথম মাস কোনটি?",
    "options": [
      "রমজান",
      "শাওয়াল",
      "মুহাররম",
      "সফর"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) মুহাররম"
  },
  {
    "id": "q-417",
    "num": "৪১৭",
    "category": "islamic",
    "question": "হিজরি সনের নবম মাস কোনটি?",
    "options": [
      "রজব",
      "শাবান",
      "রমজান",
      "শাওয়াল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) রমজান"
  },
  {
    "id": "q-418",
    "num": "৪১৮",
    "category": "islamic",
    "question": "ঈদুল ফিতর কোন মাসের পর আসে?",
    "options": [
      "শাবান",
      "রমজান",
      "জিলহজ",
      "সফর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রমজান"
  },
  {
    "id": "q-419",
    "num": "৪১৯",
    "category": "islamic",
    "question": "ঈদুল আজহা কোন মাসে পালিত হয়?",
    "options": [
      "রমজান",
      "শাওয়াল",
      "জিলহজ",
      "মুহাররম"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) জিলহজ"
  },
  {
    "id": "q-420",
    "num": "৪২০",
    "category": "islamic",
    "question": "মুসলমানদের পবিত্রতম রাতগুলোর একটি শবে কদর কোন মাসে?",
    "options": [
      "রজব",
      "রমজান",
      "শাওয়াল",
      "সফর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রমজান"
  },
  {
    "id": "q-421",
    "num": "৪২১",
    "category": "islamic",
    "question": "কুরআন নাজিলের সূচনা কোন গুহায় হয়েছিল?",
    "options": [
      "সওর গুহা",
      "হেরা গুহা",
      "উহুদ গুহা",
      "কুবা গুহা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) হেরা গুহা"
  },
  {
    "id": "q-422",
    "num": "৪২২",
    "category": "islamic",
    "question": "প্রথম ওহির প্রথম শব্দ কী ছিল?",
    "options": [
      "কুল",
      "ইকরা",
      "আল্লাহ",
      "সালাম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ইকরা"
  },
  {
    "id": "q-423",
    "num": "৪২৩",
    "category": "islamic",
    "question": "প্রথম ওহি কোন ফেরেশতা নিয়ে এসেছিলেন?",
    "options": [
      "মিকাইল (আ.)",
      "ইসরাফিল (আ.)",
      "জিবরাইল (আ.)",
      "আজরাইল (আ.)"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) জিবরাইল (আ.)"
  },
  {
    "id": "q-424",
    "num": "৪২৪",
    "category": "islamic",
    "question": "ইসলামের প্রথম খলিফা কে ছিলেন?",
    "options": [
      "উমর (রা.)",
      "আবু বকর (রা.)",
      "উসমান (রা.)",
      "আলী (রা.)"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আবু বকর (রা.)"
  },
  {
    "id": "q-425",
    "num": "৪২৫",
    "category": "islamic",
    "question": "ইসলামের দ্বিতীয় খলিফা কে ছিলেন?",
    "options": [
      "উমর (রা.)",
      "আবু বকর (রা.)",
      "উসমান (রা.)",
      "আলী (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উমর (রা.)"
  },
  {
    "id": "q-426",
    "num": "৪২৬",
    "category": "islamic",
    "question": "ইসলামের তৃতীয় খলিফা কে ছিলেন?",
    "options": [
      "আলী (রা.)",
      "উসমান (রা.)",
      "উমর (রা.)",
      "আবু বকর (রা.)"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) উসমান (রা.)"
  },
  {
    "id": "q-427",
    "num": "৪২৭",
    "category": "islamic",
    "question": "ইসলামের চতুর্থ খলিফা কে ছিলেন?",
    "options": [
      "আলী (রা.)",
      "উসমান (রা.)",
      "উমর (রা.)",
      "আবু বকর (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলী (রা.)"
  },
  {
    "id": "q-428",
    "num": "৪২৮",
    "category": "islamic",
    "question": "হিজরতের পর মহানবী (সা.) কোন শহরে গমন করেন?",
    "options": [
      "তায়েফ",
      "মদিনা",
      "জেদ্দা",
      "দামেস্ক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মদিনা"
  },
  {
    "id": "q-429",
    "num": "৪২৯",
    "category": "islamic",
    "question": "মদিনার পুরোনো নাম কী ছিল?",
    "options": [
      "ইয়াসরিব",
      "বাগদাদ",
      "কুফা",
      "বসরা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইয়াসরিব"
  },
  {
    "id": "q-430",
    "num": "৪৩০",
    "category": "islamic",
    "question": "ইসলামের প্রথম মসজিদ হিসেবে পরিচিত কোনটি?",
    "options": [
      "মসজিদে নববি",
      "মসজিদে কুবা",
      "বায়তুল মোকাররম",
      "আল-আকসা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মসজিদে কুবা"
  },
  {
    "id": "q-431",
    "num": "৪৩১",
    "category": "islamic",
    "question": "মসজিদে নববি কোথায় অবস্থিত?",
    "options": [
      "মক্কা",
      "মদিনা",
      "তায়েফ",
      "জেদ্দা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মদিনা"
  },
  {
    "id": "q-432",
    "num": "৪৩২",
    "category": "islamic",
    "question": "ইসলামের প্রথম মুয়াজ্জিন কে ছিলেন?",
    "options": [
      "বিলাল (রা.)",
      "আবু বকর (রা.)",
      "উমর (রা.)",
      "আলী (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিলাল (রা.)"
  },
  {
    "id": "q-433",
    "num": "৪৩৩",
    "category": "islamic",
    "question": "পবিত্র কুরআনের সবচেয়ে বড় সূরা কোনটি?",
    "options": [
      "আল-ফাতিহা",
      "আল-বাকারা",
      "আল-ইখলাস",
      "আন-নাস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আল-বাকারা"
  },
  {
    "id": "q-434",
    "num": "৪৩৪",
    "category": "islamic",
    "question": "পবিত্র কুরআনের সবচেয়ে ছোট সূরা কোনটি?",
    "options": [
      "আল-কাওসার",
      "আল-ফালাক",
      "আন-নাস",
      "আল-আসর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আল-কাওসার"
  },
  {
    "id": "q-435",
    "num": "৪৩৫",
    "category": "islamic",
    "question": "সূরা ইখলাসে কয়টি আয়াত রয়েছে?",
    "options": [
      "৩",
      "৪",
      "৫",
      "৬"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৪"
  },
  {
    "id": "q-436",
    "num": "৪৩৬",
    "category": "islamic",
    "question": "ফেরেশতারা কিসের তৈরি?",
    "options": [
      "মাটি",
      "আগুন",
      "নূর",
      "পানি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) নূর"
  },
  {
    "id": "q-437",
    "num": "৪৩৭",
    "category": "islamic",
    "question": "জিন জাতিকে কী দিয়ে সৃষ্টি করা হয়েছে?",
    "options": [
      "নূর",
      "ধোঁয়াবিহীন আগুন",
      "মাটি",
      "পানি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ধোঁয়াবিহীন আগুন"
  },
  {
    "id": "q-438",
    "num": "৪৩৮",
    "category": "islamic",
    "question": "আদম (আ.) কী দিয়ে সৃষ্টি হয়েছেন?",
    "options": [
      "মাটি",
      "আগুন",
      "নূর",
      "পানি মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাটি"
  },
  {
    "id": "q-439",
    "num": "৪৩৯",
    "category": "islamic",
    "question": "কোন নবীকে খলিলুল্লাহ বলা হয়?",
    "options": [
      "ইবরাহিম (আ.)",
      "মুসা (আ.)",
      "ইউসুফ (আ.)",
      "ইউনুস (আ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইবরাহিম (আ.)"
  },
  {
    "id": "q-440",
    "num": "৪৪০",
    "category": "islamic",
    "question": "কোন নবী মাছের পেটে ছিলেন?",
    "options": [
      "মুসা (আ.)",
      "ইউনুস (আ.)",
      "ইব্রাহিম (আ.)",
      "ঈসা (আ.)"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ইউনুস (আ.)"
  },
  {
    "id": "q-441",
    "num": "৪৪১",
    "category": "islamic",
    "question": "কোন নবীকে আল্লাহ তাআলা তাওরাত কিতাব দিয়েছিলেন?",
    "options": [
      "মুসা (আ.)",
      "ঈসা (আ.)",
      "দাউদ (আ.)",
      "ইব্রাহিম (আ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মুসা (আ.)"
  },
  {
    "id": "q-442",
    "num": "৪৪২",
    "category": "islamic",
    "question": "কোন নবীকে যাবুর কিতাব দেওয়া হয়েছিল?",
    "options": [
      "দাউদ (আ.)",
      "মুসা (আ.)",
      "ঈসা (আ.)",
      "ইউসুফ (আ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দাউদ (আ.)"
  },
  {
    "id": "q-443",
    "num": "৪৪৩",
    "category": "islamic",
    "question": "কোন নবীকে ইঞ্জিল কিতাব দেওয়া হয়েছিল?",
    "options": [
      "মুসা (আ.)",
      "ঈসা (আ.)",
      "দাউদ (আ.)",
      "নূহ (আ.)"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ঈসা (আ.)"
  },
  {
    "id": "q-444",
    "num": "৪৪৪",
    "category": "islamic",
    "question": "নূহ (আ.) কী নির্মাণ করেছিলেন?",
    "options": [
      "প্রাসাদ",
      "নৌকা",
      "মসজিদ",
      "মিনার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নৌকা"
  },
  {
    "id": "q-445",
    "num": "৪৪৫",
    "category": "islamic",
    "question": "ইসলামে পিতামাতার সঙ্গে কেমন আচরণ করতে বলা হয়েছে?",
    "options": [
      "অবাধ্য হতে",
      "সদাচরণ করতে",
      "অবহেলা করতে",
      "অসম্মান করতে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সদাচরণ করতে"
  },
  {
    "id": "q-446",
    "num": "৪৪৬",
    "category": "islamic",
    "question": "সালামের উত্তম জবাব কী?",
    "options": [
      "আলহামদুলিল্লাহ",
      "ওয়া আলাইকুমুস সালাম",
      "সুবহানাল্লাহ",
      "আস্তাগফিরুল্লাহ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ওয়া আলাইকুমুস সালাম"
  },
  {
    "id": "q-447",
    "num": "৪৪৭",
    "category": "islamic",
    "question": "খাবার শুরু করার আগে কোনটি বলা সুন্নত?",
    "options": [
      "বিসমিল্লাহ",
      "আলহামদুলিল্লাহ",
      "ইনশাআল্লাহ",
      "মাশাআল্লাহ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিসমিল্লাহ"
  },
  {
    "id": "q-448",
    "num": "৪৪৮",
    "category": "islamic",
    "question": "ভালো কাজের জন্য কোন গুণটি প্রয়োজন?",
    "options": [
      "অহংকার",
      "সততা",
      "হিংসা",
      "মিথ্যা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সততা"
  },
  {
    "id": "q-449",
    "num": "৪৪৯",
    "category": "islamic",
    "question": "কারও সঙ্গে ভালো ব্যবহার করাকে কী বলা হয়?",
    "options": [
      "অসদাচরণ",
      "সদাচরণ",
      "প্রতারণা",
      "অবহেলা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সদাচরণ"
  },
  {
    "id": "q-450",
    "num": "৪৫০",
    "category": "islamic",
    "question": "একজন ভালো মানুষের অন্যতম গুণ কোনটি?",
    "options": [
      "মিথ্যা বলা",
      "অন্যের ক্ষতি করা",
      "সত্যবাদিতা",
      "অহংকার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) সত্যবাদিতা"
  },
  {
    "id": "q-451",
    "num": "৪৫১",
    "category": "sports",
    "question": "ফুটবল খেলায় একটি দলে মাঠে কতজন খেলোয়াড় থাকে?",
    "options": [
      "৯ জন",
      "১০ জন",
      "১১ জন",
      "১২ জন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১১ জন"
  },
  {
    "id": "q-452",
    "num": "৪৫২",
    "category": "sports",
    "question": "ক্রিকেট খেলায় একটি দলে কতজন খেলোয়াড় থাকে?",
    "options": [
      "৯ জন",
      "১০ জন",
      "১১ জন",
      "১২ জন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১১ জন"
  },
  {
    "id": "q-453",
    "num": "৪৫৩",
    "category": "sports",
    "question": "ফুটবল খেলার প্রধান লক্ষ্য কী?",
    "options": [
      "বল জালে পাঠানো",
      "বল হাতে ধরা",
      "বল পানিতে ফেলা",
      "বল লুকিয়ে রাখা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বল জালে পাঠানো"
  },
  {
    "id": "q-454",
    "num": "৪৫৪",
    "category": "sports",
    "question": "ক্রিকেটে ব্যাট দিয়ে কী করা হয়?",
    "options": [
      "বল মারা",
      "বল ছোড়া",
      "গোল করা",
      "দৌড়ানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বল মারা"
  },
  {
    "id": "q-455",
    "num": "৪৫৫",
    "category": "sports",
    "question": "ক্রিকেটে বল ছোড়েন কে?",
    "options": [
      "ব্যাটার",
      "বোলার",
      "আম্পায়ার",
      "দর্শক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বোলার"
  },
  {
    "id": "q-456",
    "num": "৪৫৬",
    "category": "sports",
    "question": "অলিম্পিক গেমস কত বছর পরপর অনুষ্ঠিত হয়?",
    "options": [
      "২ বছর",
      "৩ বছর",
      "৪ বছর",
      "৫ বছর"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪ বছর"
  },
  {
    "id": "q-457",
    "num": "৪৫৭",
    "category": "sports",
    "question": "অলিম্পিকের প্রতীকে কয়টি রিং আছে?",
    "options": [
      "৩টি",
      "৪টি",
      "৫টি",
      "৬টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫টি"
  },
  {
    "id": "q-458",
    "num": "৪৫৮",
    "category": "sports",
    "question": "দাবা খেলায় প্রত্যেক খেলোয়াড়ের শুরুতে কয়টি ঘুঁটি থাকে?",
    "options": [
      "৮টি",
      "১২টি",
      "১৬টি",
      "২০টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৬টি"
  },
  {
    "id": "q-459",
    "num": "৪৫৯",
    "category": "sports",
    "question": "ব্যাডমিন্টনে কী দিয়ে খেলা হয়?",
    "options": [
      "ফুটবল",
      "শাটলকক",
      "ক্রিকেট বল",
      "বাস্কেটবল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শাটলকক"
  },
  {
    "id": "q-460",
    "num": "৪৬০",
    "category": "sports",
    "question": "টেনিসে বল মারার জন্য কী ব্যবহার করা হয়?",
    "options": [
      "ব্যাট",
      "র‍্যাকেট",
      "লাঠি",
      "গ্লাভস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) র‍্যাকেট"
  },
  {
    "id": "q-461",
    "num": "৪৬১",
    "category": "sports",
    "question": "বাস্কেটবলে বল কোথায় ফেলতে হয়?",
    "options": [
      "গোলপোস্টে",
      "ঝুড়ির মতো বাস্কেটে",
      "জালে",
      "মাটিতে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ঝুড়ির মতো বাস্কেটে"
  },
  {
    "id": "q-462",
    "num": "৪৬২",
    "category": "sports",
    "question": "ভলিবলে একটি দলে মাঠে কয়জন খেলোয়াড় থাকে?",
    "options": [
      "৫ জন",
      "৬ জন",
      "৭ জন",
      "৮ জন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৬ জন"
  },
  {
    "id": "q-463",
    "num": "৪৬৩",
    "category": "sports",
    "question": "দাবা খেলার সবচেয়ে গুরুত্বপূর্ণ ঘুঁটি কোনটি?",
    "options": [
      "নৌকা",
      "রাজা",
      "ঘোড়া",
      "বোড়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রাজা"
  },
  {
    "id": "q-464",
    "num": "৪৬৪",
    "category": "sports",
    "question": "দাবার খেলায় রানির ইংরেজি নাম কী?",
    "options": [
      "King",
      "Queen",
      "Bishop",
      "Knight"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Queen"
  },
  {
    "id": "q-465",
    "num": "৪৬৫",
    "category": "sports",
    "question": "বাংলাদেশ কোন খেলায় টেস্ট মর্যাদা পেয়েছে?",
    "options": [
      "ক্রিকেট",
      "বাস্কেটবল",
      "ভলিবল",
      "হকি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্রিকেট"
  },
  {
    "id": "q-466",
    "num": "৪৬৬",
    "category": "sports",
    "question": "FIFA কোন খেলার আন্তর্জাতিক সংস্থা?",
    "options": [
      "ক্রিকেট",
      "ফুটবল",
      "টেনিস",
      "হকি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ফুটবল"
  },
  {
    "id": "q-467",
    "num": "৪৬৭",
    "category": "sports",
    "question": "ICC কোন খেলার আন্তর্জাতিক সংস্থা?",
    "options": [
      "ক্রিকেট",
      "ফুটবল",
      "ব্যাডমিন্টন",
      "দাবা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্রিকেট"
  },
  {
    "id": "q-468",
    "num": "৪৬৮",
    "category": "sports",
    "question": "ম্যারাথন দৌড়ের স্বীকৃত দূরত্ব কত?",
    "options": [
      "১০ কিলোমিটার",
      "২১.১ কিলোমিটার",
      "৪২.১৯৫ কিলোমিটার",
      "৫০ কিলোমিটার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪২.১৯৫ কিলোমিটার"
  },
  {
    "id": "q-469",
    "num": "৪৬৯",
    "category": "sports",
    "question": "একটি ফুটবল ম্যাচের নির্ধারিত সময় কত?",
    "options": [
      "৬০ মিনিট",
      "৭০ মিনিট",
      "৮০ মিনিট",
      "৯০ মিনিট"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ৯০ মিনিট"
  },
  {
    "id": "q-470",
    "num": "৪৭০",
    "category": "sports",
    "question": "কোন খেলায় ‘চেকমেট’ শব্দটি ব্যবহৃত হয়?",
    "options": [
      "ফুটবল",
      "দাবা",
      "ক্রিকেট",
      "টেনিস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দাবা"
  },
  {
    "id": "q-471",
    "num": "৪৭১",
    "category": "sports",
    "question": "সঙ্গীতের সাতটি স্বর কী?",
    "options": [
      "সা, রে, গা, মা, পা, ধা, নি",
      "ক, খ, গ, ঘ, ঙ, চ, ছ",
      "দো, রে, মি, ফা, সো, লা, তি",
      "অ, আ, ই, ঈ, উ, ঊ, ঋ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সা, রে, গা, মা, পা, ধা, নি"
  },
  {
    "id": "q-472",
    "num": "৪৭২",
    "category": "sports",
    "question": "ছবি আঁকার কাজে কোনটি ব্যবহার করা হয়?",
    "options": [
      "ব্রাশ",
      "হাতুড়ি",
      "করাত",
      "স্ক্রু"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রাশ"
  },
  {
    "id": "q-473",
    "num": "৪৭৩",
    "category": "sports",
    "question": "ক্যামেরার প্রধান কাজ কী?",
    "options": [
      "ছবি তোলা",
      "খাবার রান্না",
      "পানি গরম",
      "কাপড় ধোয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ছবি তোলা"
  },
  {
    "id": "q-474",
    "num": "৪৭৪",
    "category": "sports",
    "question": "চলচ্চিত্র তৈরিতে প্রধানত কী ব্যবহার করা হয়?",
    "options": [
      "ভিডিও ও শব্দ",
      "শুধু কাগজ",
      "শুধু কাঠ",
      "শুধু পানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভিডিও ও শব্দ"
  },
  {
    "id": "q-475",
    "num": "৪৭৫",
    "category": "sports",
    "question": "নাটক মঞ্চস্থ করার স্থানকে কী বলে?",
    "options": [
      "মঞ্চ",
      "মাঠ",
      "বাজার",
      "কারখানা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মঞ্চ"
  },
  {
    "id": "q-476",
    "num": "৪৭৬",
    "category": "sports",
    "question": "বই পড়ার জন্য কোন স্থানটি উপযুক্ত?",
    "options": [
      "লাইব্রেরি",
      "রান্নাঘর",
      "গাড়ির গ্যারেজ",
      "কারখানা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লাইব্রেরি"
  },
  {
    "id": "q-477",
    "num": "৪৭৭",
    "category": "sports",
    "question": "সংবাদপত্রের প্রধান কাজ কী?",
    "options": [
      "সংবাদ পরিবেশন",
      "খেলনা তৈরি",
      "রান্না করা",
      "কাপড় তৈরি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংবাদ পরিবেশন"
  },
  {
    "id": "q-478",
    "num": "৪৭৮",
    "category": "sports",
    "question": "মানচিত্র কী কাজে ব্যবহার করা হয়?",
    "options": [
      "স্থান ও পথ চেনার জন্য",
      "গান গাওয়ার জন্য",
      "খাবার তৈরির জন্য",
      "পোশাক সেলাইয়ের জন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্থান ও পথ চেনার জন্য"
  },
  {
    "id": "q-479",
    "num": "৪৭৯",
    "category": "sports",
    "question": "কম্পাসের সাহায্যে কোন দিক নির্ণয় করা যায়?",
    "options": [
      "উত্তর-দক্ষিণ-পূর্ব-পশ্চিম",
      "শুধু ওপর-নিচ",
      "শুধু ডান-বাম",
      "শুধু সময়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উত্তর-দক্ষিণ-পূর্ব-পশ্চিম"
  },
  {
    "id": "q-480",
    "num": "৪৮০",
    "category": "sports",
    "question": "পৃথিবীর চারটি প্রধান দিকের একটি কোনটি?",
    "options": [
      "উত্তর",
      "ওপর",
      "নিচ",
      "মাঝখান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উত্তর"
  },
  {
    "id": "q-481",
    "num": "৪৮১",
    "category": "sports",
    "question": "পরিবেশ রক্ষার জন্য কোন কাজটি ভালো?",
    "options": [
      "গাছ লাগানো",
      "গাছ কেটে ফেলা",
      "নদী দূষণ",
      "ময়লা ছড়ানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গাছ লাগানো"
  },
  {
    "id": "q-482",
    "num": "৪৮২",
    "category": "sports",
    "question": "পৃথিবীর তাপমাত্রা বৃদ্ধির একটি প্রধান কারণ কী?",
    "options": [
      "গ্রিনহাউস গ্যাস বৃদ্ধি",
      "গাছ লাগানো",
      "বৃষ্টিপাত",
      "নদীর পানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্রিনহাউস গ্যাস বৃদ্ধি"
  },
  {
    "id": "q-483",
    "num": "৪৮৩",
    "category": "sports",
    "question": "পুনর্ব্যবহারযোগ্য বর্জ্যকে ইংরেজিতে কী বলে?",
    "options": [
      "Recyclable waste",
      "Food only",
      "Smoke",
      "Dust only"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Recyclable waste"
  },
  {
    "id": "q-484",
    "num": "৪৮৪",
    "category": "sports",
    "question": "নিচের কোনটি নবায়নযোগ্য শক্তির উৎস?",
    "options": [
      "কয়লা",
      "সূর্যের আলো",
      "পেট্রোল",
      "ডিজেল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সূর্যের আলো"
  },
  {
    "id": "q-485",
    "num": "৪৮৫",
    "category": "sports",
    "question": "বায়ু থেকে উৎপন্ন শক্তিকে কী বলে?",
    "options": [
      "সৌরশক্তি",
      "বায়ুশক্তি",
      "পারমাণবিক শক্তি",
      "রাসায়নিক শক্তি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বায়ুশক্তি"
  },
  {
    "id": "q-486",
    "num": "৪৮৬",
    "category": "sports",
    "question": "সৌর প্যানেল কী থেকে বিদ্যুৎ উৎপাদন করে?",
    "options": [
      "সূর্যের আলো",
      "মাটির ধুলো",
      "কয়লা",
      "শব্দ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সূর্যের আলো"
  },
  {
    "id": "q-487",
    "num": "৪৮৭",
    "category": "sports",
    "question": "গাছ আমাদের কোন গ্যাস সরবরাহ করতে সাহায্য করে?",
    "options": [
      "অক্সিজেন",
      "মিথেন",
      "হিলিয়াম",
      "ধোঁয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্সিজেন"
  },
  {
    "id": "q-488",
    "num": "৪৮৮",
    "category": "sports",
    "question": "যানবাহন চলাচলের নিয়ম নিয়ন্ত্রণ করে কোনটি?",
    "options": [
      "ট্রাফিক আইন",
      "রান্নার নিয়ম",
      "খেলার নিয়ম",
      "স্কুলের ঘণ্টা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ট্রাফিক আইন"
  },
  {
    "id": "q-489",
    "num": "৪৮৯",
    "category": "sports",
    "question": "রাস্তা পার হওয়ার জন্য কোথায় যাওয়া উচিত?",
    "options": [
      "যেকোনো জায়গায়",
      "জেব্রা ক্রসিংয়ে",
      "চলন্ত গাড়ির সামনে",
      "রাস্তার মাঝখানে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জেব্রা ক্রসিংয়ে"
  },
  {
    "id": "q-490",
    "num": "৪৯০",
    "category": "sports",
    "question": "লাল ট্রাফিক বাতির অর্থ কী?",
    "options": [
      "চলুন",
      "থামুন",
      "দ্রুত চলুন",
      "বাঁয়ে যান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) থামুন"
  },
  {
    "id": "q-491",
    "num": "৪৯১",
    "category": "sports",
    "question": "সবুজ ট্রাফিক বাতির অর্থ কী?",
    "options": [
      "থামুন",
      "চলুন, নিরাপত্তা দেখে",
      "বিপদ",
      "রাস্তা বন্ধ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) চলুন, নিরাপত্তা দেখে"
  },
  {
    "id": "q-492",
    "num": "৪৯২",
    "category": "sports",
    "question": "হলুদ ট্রাফিক বাতির অর্থ কী?",
    "options": [
      "সতর্ক হন",
      "দ্রুত দৌড়ান",
      "রাস্তা ছেড়ে দিন",
      "গাড়ি বন্ধ করুন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সতর্ক হন"
  },
  {
    "id": "q-493",
    "num": "৪৯৩",
    "category": "sports",
    "question": "আগুন লাগলে সাহায্যের জন্য বাংলাদেশের জরুরি সেবা নম্বর কোনটি?",
    "options": [
      "৯৯৯",
      "১০০",
      "১১১",
      "১২৩"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৯৯৯"
  },
  {
    "id": "q-494",
    "num": "৪৯৪",
    "category": "sports",
    "question": "বাংলাদেশের জাতীয় জরুরি সেবা নম্বর কত?",
    "options": [
      "৯৯৯",
      "৯১১",
      "১০১",
      "১০০"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৯৯৯"
  },
  {
    "id": "q-495",
    "num": "৪৯৫",
    "category": "sports",
    "question": "বইয়ের লেখককে ইংরেজিতে কী বলে?",
    "options": [
      "Reader",
      "Author",
      "Teacher",
      "Student"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Author"
  },
  {
    "id": "q-496",
    "num": "৪৯৬",
    "category": "sports",
    "question": "যে ব্যক্তি মহাকাশ নিয়ে গবেষণা করেন তাঁকে কী বলা হয়?",
    "options": [
      "কৃষক",
      "জ্যোতির্বিজ্ঞানী",
      "চিকিৎসক",
      "স্থপতি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জ্যোতির্বিজ্ঞানী"
  },
  {
    "id": "q-497",
    "num": "৪৯৭",
    "category": "sports",
    "question": "মহাকাশে ভ্রমণকারী ব্যক্তিকে কী বলা হয়?",
    "options": [
      "নভোচারী",
      "নাবিক",
      "চালক",
      "শিক্ষক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নভোচারী"
  },
  {
    "id": "q-498",
    "num": "৪৯৮",
    "category": "sports",
    "question": "প্রথম চাঁদে পা রাখা মানুষ কে?",
    "options": [
      "ইউরি গ্যাগারিন",
      "নিল আর্মস্ট্রং",
      "বাজ অলড্রিন",
      "জন গ্লেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নিল আর্মস্ট্রং"
  },
  {
    "id": "q-499",
    "num": "৪৯৯",
    "category": "sports",
    "question": "বিশ্বের প্রথম কৃত্রিম উপগ্রহের নাম কী?",
    "options": [
      "অ্যাপোলো-১১",
      "স্পুটনিক-১",
      "ভয়েজার-১",
      "হাবল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) স্পুটনিক-১"
  },
  {
    "id": "q-500",
    "num": "৫০০",
    "category": "sports",
    "question": "জ্ঞান অর্জনের সবচেয়ে ভালো উপায়গুলোর একটি কী?",
    "options": [
      "নিয়মিত পড়াশোনা ও অনুশীলন",
      "সময় নষ্ট করা",
      "বই এড়িয়ে চলা",
      "প্রশ্ন না করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিয়মিত পড়াশোনা ও অনুশীলন\n🎉 ৫০০ প্রশ্ন সম্পন্ন!\n500 / 500\nবাংলাদেশ • আন্তর্জাতিক • বিজ্ঞান • স্বাস্থ্য • প্রযুক্তি • গণিত • বাংলা • ইংরেজি • ইসলামিক জ্ঞান • খেলাধুলা"
  },
  {
    "id": "q-501",
    "num": "৫০১",
    "category": "world_geography",
    "question": "পৃথিবীর দীর্ঘতম পর্বতমালা কোনটি?",
    "options": [
      "হিমালয়",
      "আন্দিজ",
      "আল্পস",
      "রকি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আন্দিজ"
  },
  {
    "id": "q-502",
    "num": "৫০২",
    "category": "world_geography",
    "question": "পৃথিবীর গভীরতম মহাসাগরীয় খাদ কোনটি?",
    "options": [
      "মারিয়ানা খাদ",
      "টোঙ্গা খাদ",
      "জাভা খাদ",
      "পুয়ের্তো রিকো খাদ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মারিয়ানা খাদ"
  },
  {
    "id": "q-503",
    "num": "৫০৩",
    "category": "world_geography",
    "question": "আয়তনে আফ্রিকার বৃহত্তম দেশ কোনটি?",
    "options": [
      "সুদান",
      "আলজেরিয়া",
      "মিশর",
      "লিবিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আলজেরিয়া"
  },
  {
    "id": "q-504",
    "num": "৫০৪",
    "category": "world_geography",
    "question": "ইউরোপের দীর্ঘতম নদী কোনটি?",
    "options": [
      "দানিউব",
      "রাইন",
      "ভলগা",
      "টেমস"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ভলগা"
  },
  {
    "id": "q-505",
    "num": "৫০৫",
    "category": "world_geography",
    "question": "পৃথিবীর বৃহত্তম দ্বীপ কোনটি?",
    "options": [
      "মাদাগাস্কার",
      "গ্রিনল্যান্ড",
      "বোর্নিও",
      "নিউগিনি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) গ্রিনল্যান্ড"
  },
  {
    "id": "q-506",
    "num": "৫০৬",
    "category": "world_geography",
    "question": "গ্রিনল্যান্ড কোন দেশের স্বায়ত্তশাসিত অঞ্চল?",
    "options": [
      "নরওয়ে",
      "ডেনমার্ক",
      "সুইডেন",
      "কানাডা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ডেনমার্ক"
  },
  {
    "id": "q-507",
    "num": "৫০৭",
    "category": "world_geography",
    "question": "পেরুর বিখ্যাত প্রাচীন নগরী মাচু পিচু কোন পর্বতমালায় অবস্থিত?",
    "options": [
      "আন্দিজ",
      "আল্পস",
      "রকি",
      "হিমালয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আন্দিজ"
  },
  {
    "id": "q-508",
    "num": "৫০৮",
    "category": "world_geography",
    "question": "জাপান কোন মহাদেশে অবস্থিত?",
    "options": [
      "ইউরোপ",
      "আফ্রিকা",
      "এশিয়া",
      "অস্ট্রেলিয়া"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) এশিয়া"
  },
  {
    "id": "q-509",
    "num": "৫০৯",
    "category": "world_geography",
    "question": "মাদাগাস্কার কোন মহাদেশের কাছে অবস্থিত?",
    "options": [
      "আফ্রিকা",
      "ইউরোপ",
      "উত্তর আমেরিকা",
      "অস্ট্রেলিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আফ্রিকা"
  },
  {
    "id": "q-510",
    "num": "৫১০",
    "category": "world_geography",
    "question": "ভূমধ্যসাগর কোন দুটি মহাদেশের মাঝখানে অবস্থিত?",
    "options": [
      "এশিয়া ও ইউরোপ মাত্র",
      "ইউরোপ ও আফ্রিকা",
      "আফ্রিকা ও অস্ট্রেলিয়া",
      "আমেরিকা ও ইউরোপ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ইউরোপ ও আফ্রিকা"
  },
  {
    "id": "q-511",
    "num": "৫১১",
    "category": "world_geography",
    "question": "পৃথিবীর বৃহত্তম প্রবালপ্রাচীর কোনটি?",
    "options": [
      "গ্রেট ব্যারিয়ার রিফ",
      "মালদ্বীপ রিফ",
      "লোহিত সাগর রিফ",
      "বাহামা রিফ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্রেট ব্যারিয়ার রিফ"
  },
  {
    "id": "q-512",
    "num": "৫১২",
    "category": "world_geography",
    "question": "গ্রেট ব্যারিয়ার রিফ কোন দেশের উপকূলে?",
    "options": [
      "ব্রাজিল",
      "অস্ট্রেলিয়া",
      "ভারত",
      "জাপান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) অস্ট্রেলিয়া"
  },
  {
    "id": "q-513",
    "num": "৫১৩",
    "category": "world_geography",
    "question": "নায়াগ্রা জলপ্রপাত কোন দুটি দেশের সীমান্তে?",
    "options": [
      "যুক্তরাষ্ট্র ও কানাডা",
      "মেক্সিকো ও যুক্তরাষ্ট্র",
      "ভারত ও নেপাল",
      "চীন ও রাশিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যুক্তরাষ্ট্র ও কানাডা"
  },
  {
    "id": "q-514",
    "num": "৫১৪",
    "category": "world_geography",
    "question": "ভিক্টোরিয়া জলপ্রপাত কোন নদীর ওপর?",
    "options": [
      "নীল",
      "জাম্বেজি",
      "কঙ্গো",
      "নাইজার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জাম্বেজি"
  },
  {
    "id": "q-515",
    "num": "৫১৫",
    "category": "world_geography",
    "question": "পৃথিবীর সবচেয়ে বড় উপদ্বীপ কোনটি?",
    "options": [
      "আরব উপদ্বীপ",
      "ভারতীয় উপদ্বীপ",
      "স্ক্যান্ডিনেভীয় উপদ্বীপ",
      "আইবেরীয় উপদ্বীপ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আরব উপদ্বীপ"
  },
  {
    "id": "q-516",
    "num": "৫১৬",
    "category": "world_geography",
    "question": "কোন দেশকে উদীয়মান সূর্যের দেশ বলা হয়?",
    "options": [
      "চীন",
      "জাপান",
      "থাইল্যান্ড",
      "দক্ষিণ কোরিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জাপান"
  },
  {
    "id": "q-517",
    "num": "৫১৭",
    "category": "world_geography",
    "question": "কোন মহাদেশে স্থায়ীভাবে বসবাসকারী স্থানীয় জনসংখ্যা নেই?",
    "options": [
      "এশিয়া",
      "ইউরোপ",
      "অ্যান্টার্কটিকা",
      "আফ্রিকা"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) অ্যান্টার্কটিকা"
  },
  {
    "id": "q-518",
    "num": "৫১৮",
    "category": "world_geography",
    "question": "অ্যান্টার্কটিকায় কোন প্রাণী বেশি পরিচিত?",
    "options": [
      "পেঙ্গুইন",
      "উট",
      "জিরাফ",
      "বাঘ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পেঙ্গুইন"
  },
  {
    "id": "q-519",
    "num": "৫১৯",
    "category": "world_geography",
    "question": "সুয়েজ খাল কোন দুটি সাগরকে যুক্ত করেছে?",
    "options": [
      "ভূমধ্যসাগর ও লোহিত সাগর",
      "আরব সাগর ও বঙ্গোপসাগর",
      "কৃষ্ণসাগর ও কাস্পিয়ান সাগর",
      "উত্তর সাগর ও বাল্টিক সাগর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভূমধ্যসাগর ও লোহিত সাগর"
  },
  {
    "id": "q-520",
    "num": "৫২০",
    "category": "world_geography",
    "question": "পানামা খাল কোন দুটি মহাসাগরকে যুক্ত করেছে?",
    "options": [
      "ভারত ও প্রশান্ত",
      "আটলান্টিক ও প্রশান্ত",
      "ভারত ও আটলান্টিক",
      "আর্কটিক ও প্রশান্ত"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আটলান্টিক ও প্রশান্ত"
  },
  {
    "id": "q-521",
    "num": "৫২১",
    "category": "world_geography",
    "question": "কঙ্গো রেইনফরেস্ট কোন মহাদেশে?",
    "options": [
      "এশিয়া",
      "আফ্রিকা",
      "ইউরোপ",
      "অস্ট্রেলিয়া"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আফ্রিকা"
  },
  {
    "id": "q-522",
    "num": "৫২২",
    "category": "world_geography",
    "question": "পৃথিবীর সবচেয়ে বড় হ্রদ আয়তনে কোনটি?",
    "options": [
      "সুপিরিয়র",
      "ভিক্টোরিয়া",
      "কাস্পিয়ান সাগর",
      "বাইকাল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) কাস্পিয়ান সাগর"
  },
  {
    "id": "q-523",
    "num": "৫২৩",
    "category": "world_geography",
    "question": "বিশ্বের গভীরতম স্বাদুপানির হ্রদ কোনটি?",
    "options": [
      "বাইকাল",
      "সুপিরিয়র",
      "টিটিকাকা",
      "ভিক্টোরিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাইকাল"
  },
  {
    "id": "q-524",
    "num": "৫২৪",
    "category": "world_geography",
    "question": "টিটিকাকা হ্রদ কোন দুটি দেশের মধ্যে অবস্থিত?",
    "options": [
      "পেরু ও বলিভিয়া",
      "ভারত ও নেপাল",
      "চীন ও মঙ্গোলিয়া",
      "ফ্রান্স ও জার্মানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পেরু ও বলিভিয়া"
  },
  {
    "id": "q-525",
    "num": "৫২৫",
    "category": "world_geography",
    "question": "ইউরোপের আল্পস পর্বতমালার সর্বোচ্চ শৃঙ্গ কোনটি?",
    "options": [
      "মন্ট ব্ল্যাঙ্ক",
      "মাউন্ট এলব্রুস",
      "ম্যাটারহর্ন",
      "এভারেস্ট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মন্ট ব্ল্যাঙ্ক"
  },
  {
    "id": "q-526",
    "num": "৫২৬",
    "category": "world_geography",
    "question": "পৃথিবীর সবচেয়ে বড় উপসাগর কোনটি?",
    "options": [
      "বঙ্গোপসাগর",
      "পারস্য উপসাগর",
      "মেক্সিকো উপসাগর",
      "হাডসন উপসাগর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বঙ্গোপসাগর"
  },
  {
    "id": "q-527",
    "num": "৫২৭",
    "category": "world_geography",
    "question": "কোন নদী লন্ডনের মধ্য দিয়ে প্রবাহিত হয়েছে?",
    "options": [
      "টেমস",
      "সিন",
      "টাইবার",
      "দানিউব"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টেমস"
  },
  {
    "id": "q-528",
    "num": "৫২৮",
    "category": "world_geography",
    "question": "প্যারিস শহরের মধ্য দিয়ে কোন নদী প্রবাহিত হয়েছে?",
    "options": [
      "রাইন",
      "সিন",
      "ভলগা",
      "টেমস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সিন"
  },
  {
    "id": "q-529",
    "num": "৫২৯",
    "category": "world_geography",
    "question": "রোম শহরের মধ্য দিয়ে কোন নদী প্রবাহিত হয়েছে?",
    "options": [
      "টাইবার",
      "নীল",
      "আমাজন",
      "গঙ্গা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টাইবার"
  },
  {
    "id": "q-530",
    "num": "৫৩০",
    "category": "world_geography",
    "question": "আফ্রিকার সর্বোচ্চ পর্বত কোনটি?",
    "options": [
      "কিলিমাঞ্জারো",
      "কেনিয়া পর্বত",
      "আটলাস",
      "ড্রাকেন্সবার্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কিলিমাঞ্জারো"
  },
  {
    "id": "q-531",
    "num": "৫৩১",
    "category": "world_geography",
    "question": "কোন দেশকে হাজার হ্রদের দেশ বলা হয়?",
    "options": [
      "ফিনল্যান্ড",
      "মিশর",
      "সৌদি আরব",
      "মেক্সিকো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফিনল্যান্ড"
  },
  {
    "id": "q-532",
    "num": "৫৩২",
    "category": "world_geography",
    "question": "কোন দেশকে মধ্যরাতের সূর্যের দেশ বলা হয়?",
    "options": [
      "নরওয়ে",
      "ভারত",
      "ব্রাজিল",
      "স্পেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নরওয়ে"
  },
  {
    "id": "q-533",
    "num": "৫৩৩",
    "category": "world_geography",
    "question": "আন্দিজ পর্বতমালা কোন মহাদেশে?",
    "options": [
      "দক্ষিণ আমেরিকা",
      "উত্তর আমেরিকা",
      "ইউরোপ",
      "এশিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দক্ষিণ আমেরিকা"
  },
  {
    "id": "q-534",
    "num": "৫৩৪",
    "category": "world_geography",
    "question": "রকি পর্বতমালা কোন মহাদেশে?",
    "options": [
      "আফ্রিকা",
      "উত্তর আমেরিকা",
      "এশিয়া",
      "ইউরোপ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) উত্তর আমেরিকা"
  },
  {
    "id": "q-535",
    "num": "৫৩৫",
    "category": "world_geography",
    "question": "গবি মরুভূমি কোন দুটি দেশে বিস্তৃত?",
    "options": [
      "চীন ও মঙ্গোলিয়া",
      "ভারত ও পাকিস্তান",
      "মিশর ও লিবিয়া",
      "ইরান ও ইরাক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চীন ও মঙ্গোলিয়া"
  },
  {
    "id": "q-536",
    "num": "৫৩৬",
    "category": "world_geography",
    "question": "থর মরুভূমি প্রধানত কোন অঞ্চলে?",
    "options": [
      "ভারত ও পাকিস্তান",
      "চীন ও জাপান",
      "মিশর ও সুদান",
      "ব্রাজিল ও পেরু"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভারত ও পাকিস্তান"
  },
  {
    "id": "q-537",
    "num": "৫৩৭",
    "category": "world_geography",
    "question": "বিশ্বের বৃহত্তম উপত্যকা-অববাহিকাগুলোর একটি আমাজন কোন মহাদেশে?",
    "options": [
      "দক্ষিণ আমেরিকা",
      "আফ্রিকা",
      "ইউরোপ",
      "এশিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দক্ষিণ আমেরিকা"
  },
  {
    "id": "q-538",
    "num": "৫৩৮",
    "category": "world_geography",
    "question": "কাস্পিয়ান সাগর আসলে কী ধরনের জলাশয়?",
    "options": [
      "মহাসাগর",
      "বিশ্বের বৃহত্তম অন্তর্দেশীয় জলাশয়",
      "নদী",
      "খাল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বিশ্বের বৃহত্তম অন্তর্দেশীয় জলাশয়"
  },
  {
    "id": "q-539",
    "num": "৫৩৯",
    "category": "world_geography",
    "question": "কোন প্রণালি এশিয়া ও ইউরোপের একটি অংশকে পৃথক করেছে?",
    "options": [
      "বসফরাস",
      "মালাক্কা",
      "হরমুজ",
      "বেরিং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বসফরাস"
  },
  {
    "id": "q-540",
    "num": "৫৪০",
    "category": "world_geography",
    "question": "বেরিং প্রণালি কোন দুটি মহাদেশকে পৃথক করেছে?",
    "options": [
      "এশিয়া ও উত্তর আমেরিকা",
      "ইউরোপ ও আফ্রিকা",
      "এশিয়া ও আফ্রিকা",
      "অস্ট্রেলিয়া ও এশিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এশিয়া ও উত্তর আমেরিকা"
  },
  {
    "id": "q-541",
    "num": "৫৪১",
    "category": "world_geography",
    "question": "মালাক্কা প্রণালি কোন দুটি ভূখণ্ডের মাঝখানে?",
    "options": [
      "মালয় উপদ্বীপ ও সুমাত্রা",
      "ভারত ও শ্রীলঙ্কা",
      "ইউরোপ ও আফ্রিকা",
      "অস্ট্রেলিয়া ও নিউজিল্যান্ড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মালয় উপদ্বীপ ও সুমাত্রা"
  },
  {
    "id": "q-542",
    "num": "৫৪২",
    "category": "world_geography",
    "question": "পৃথিবীর সবচেয়ে বড় উষ্ণমণ্ডলীয় জলাভূমি কোনটি?",
    "options": [
      "প্যান্টানাল",
      "সুন্দরবন",
      "এভারগ্লেডস",
      "ওকাভাঙ্গো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্যান্টানাল"
  },
  {
    "id": "q-543",
    "num": "৫৪৩",
    "category": "world_geography",
    "question": "কোন দেশটি দ্বীপমালা বা আর্কিপেলাগো রাষ্ট্র হিসেবে বিখ্যাত?",
    "options": [
      "ইন্দোনেশিয়া",
      "সুইজারল্যান্ড",
      "নেপাল",
      "মঙ্গোলিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইন্দোনেশিয়া"
  },
  {
    "id": "q-544",
    "num": "৫৪৪",
    "category": "world_geography",
    "question": "নিউজিল্যান্ড কোন মহাসাগরে অবস্থিত?",
    "options": [
      "প্রশান্ত",
      "আটলান্টিক",
      "আর্কটিক",
      "ভারত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রশান্ত"
  },
  {
    "id": "q-545",
    "num": "৫৪৫",
    "category": "world_geography",
    "question": "কোরীয় উপদ্বীপের দক্ষিণে কোন দেশ অবস্থিত?",
    "options": [
      "দক্ষিণ কোরিয়া",
      "জাপান",
      "চীন",
      "মঙ্গোলিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দক্ষিণ কোরিয়া"
  },
  {
    "id": "q-546",
    "num": "৫৪৬",
    "category": "world_geography",
    "question": "আফ্রিকার সবচেয়ে জনবহুল দেশ কোনটি?",
    "options": [
      "নাইজেরিয়া",
      "কেনিয়া",
      "ঘানা",
      "মরক্কো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নাইজেরিয়া"
  },
  {
    "id": "q-547",
    "num": "৫৪৭",
    "category": "world_geography",
    "question": "দক্ষিণ আমেরিকার সবচেয়ে বড় দেশ কোনটি?",
    "options": [
      "আর্জেন্টিনা",
      "ব্রাজিল",
      "পেরু",
      "চিলি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ব্রাজিল"
  },
  {
    "id": "q-548",
    "num": "৫৪৮",
    "category": "world_geography",
    "question": "ইউরোপীয় ইউনিয়নের সদর দপ্তরের প্রধান কেন্দ্র কোথায়?",
    "options": [
      "ব্রাসেলস",
      "লন্ডন",
      "মাদ্রিদ",
      "রোম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রাসেলস"
  },
  {
    "id": "q-549",
    "num": "৫৪৯",
    "category": "world_geography",
    "question": "সুইজারল্যান্ডের রাজধানী কোনটি?",
    "options": [
      "জুরিখ",
      "জেনেভা",
      "বার্ন",
      "বাসেল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) বার্ন"
  },
  {
    "id": "q-550",
    "num": "৫৫০",
    "category": "world_geography",
    "question": "আইসল্যান্ডের রাজধানী কোনটি?",
    "options": [
      "অসলো",
      "রেইকিয়াভিক",
      "হেলসিঙ্কি",
      "স্টকহোম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রেইকিয়াভিক"
  },
  {
    "id": "q-551",
    "num": "৫৫১",
    "category": "physics",
    "question": "গতির SI একক কী?",
    "options": [
      "মিটার",
      "মিটার/সেকেন্ড",
      "কিলোগ্রাম",
      "নিউটন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মিটার/সেকেন্ড"
  },
  {
    "id": "q-552",
    "num": "৫৫২",
    "category": "physics",
    "question": "ভরের SI একক কী?",
    "options": [
      "কিলোগ্রাম",
      "মিটার",
      "সেকেন্ড",
      "জুল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কিলোগ্রাম"
  },
  {
    "id": "q-553",
    "num": "৫৫৩",
    "category": "physics",
    "question": "সময়ের SI একক কী?",
    "options": [
      "মিনিট",
      "ঘণ্টা",
      "সেকেন্ড",
      "দিন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) সেকেন্ড"
  },
  {
    "id": "q-554",
    "num": "৫৫৪",
    "category": "physics",
    "question": "বিদ্যুৎ বিভবের একক কী?",
    "options": [
      "ভোল্ট",
      "অ্যাম্পিয়ার",
      "ওহম",
      "ওয়াট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভোল্ট"
  },
  {
    "id": "q-555",
    "num": "৫৫৫",
    "category": "physics",
    "question": "বৈদ্যুতিক রোধের একক কী?",
    "options": [
      "ভোল্ট",
      "ওহম",
      "জুল",
      "নিউটন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ওহম"
  },
  {
    "id": "q-556",
    "num": "৫৫৬",
    "category": "physics",
    "question": "ক্ষমতার SI একক কী?",
    "options": [
      "জুল",
      "ওয়াট",
      "নিউটন",
      "পাসকেল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ওয়াট"
  },
  {
    "id": "q-557",
    "num": "৫৫৭",
    "category": "physics",
    "question": "চাপের SI একক কী?",
    "options": [
      "পাসকেল",
      "জুল",
      "কেলভিন",
      "ওহম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাসকেল"
  },
  {
    "id": "q-558",
    "num": "৫৫৮",
    "category": "physics",
    "question": "মহাকর্ষ আবিষ্কার ও ব্যাখ্যার সঙ্গে কোন বিজ্ঞানীর নাম বিশেষভাবে জড়িত?",
    "options": [
      "নিউটন",
      "ডারউইন",
      "পাস্তুর",
      "মেন্ডেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিউটন"
  },
  {
    "id": "q-559",
    "num": "৫৫৯",
    "category": "physics",
    "question": "নিউটনের প্রথম গতিসূত্র কোন ধারণার সঙ্গে সম্পর্কিত?",
    "options": [
      "জড়তা",
      "তাপ",
      "আলো",
      "চুম্বকত্ব"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জড়তা"
  },
  {
    "id": "q-560",
    "num": "৫৬০",
    "category": "physics",
    "question": "নিউটনের তৃতীয় গতিসূত্র কী বলে?",
    "options": [
      "প্রত্যেক ক্রিয়ার সমান ও বিপরীত প্রতিক্রিয়া আছে",
      "শক্তি সৃষ্টি হয়",
      "আলো বাঁকে না",
      "বস্তু কখনো নড়ে না"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রত্যেক ক্রিয়ার সমান ও বিপরীত প্রতিক্রিয়া আছে"
  },
  {
    "id": "q-561",
    "num": "৫৬১",
    "category": "physics",
    "question": "শব্দের কম্পাঙ্কের একক কী?",
    "options": [
      "হার্টজ",
      "ডেসিবেল",
      "ওয়াট",
      "মিটার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হার্টজ"
  },
  {
    "id": "q-562",
    "num": "৫৬২",
    "category": "physics",
    "question": "শব্দের তীব্রতা সাধারণত কোন এককে প্রকাশ করা হয়?",
    "options": [
      "ডেসিবেল",
      "কিলোগ্রাম",
      "কেলভিন",
      "ভোল্ট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডেসিবেল"
  },
  {
    "id": "q-563",
    "num": "৫৬৩",
    "category": "physics",
    "question": "আলো একটি কী ধরনের শক্তি?",
    "options": [
      "তড়িৎচুম্বকীয় শক্তি",
      "রাসায়নিক শক্তি",
      "শব্দশক্তি",
      "যান্ত্রিক শক্তি মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তড়িৎচুম্বকীয় শক্তি"
  },
  {
    "id": "q-564",
    "num": "৫৬৪",
    "category": "physics",
    "question": "আলোর প্রতিফলন কী?",
    "options": [
      "আলো পৃষ্ঠ থেকে ফিরে আসা",
      "আলো সম্পূর্ণ হারিয়ে যাওয়া",
      "আলো শব্দে পরিণত হওয়া",
      "আলো জমে যাওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলো পৃষ্ঠ থেকে ফিরে আসা"
  },
  {
    "id": "q-565",
    "num": "৫৬৫",
    "category": "physics",
    "question": "আলোর প্রতিসরণ কী?",
    "options": [
      "মাধ্যম পরিবর্তনে আলোর দিক পরিবর্তন",
      "আলো নিভে যাওয়া",
      "আলো জমে যাওয়া",
      "শব্দ তৈরি হওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাধ্যম পরিবর্তনে আলোর দিক পরিবর্তন"
  },
  {
    "id": "q-566",
    "num": "৫৬৬",
    "category": "physics",
    "question": "সাদা আলো প্রিজমে কয়টি দৃশ্যমান রঙে বিভক্ত হতে পারে?",
    "options": [
      "৩",
      "৫",
      "৭",
      "৯"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭"
  },
  {
    "id": "q-567",
    "num": "৫৬৭",
    "category": "physics",
    "question": "উত্তল লেন্স সাধারণত কী করে?",
    "options": [
      "আলোকে অভিসারী করে",
      "আলোকে সবসময় ছড়িয়ে দেয়",
      "আলো শোষণ করে",
      "আলোকে শব্দে রূপান্তর করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলোকে অভিসারী করে"
  },
  {
    "id": "q-568",
    "num": "৫৬৮",
    "category": "physics",
    "question": "অবতল লেন্স সাধারণত কী করে?",
    "options": [
      "আলোকে অপসারী করে",
      "আলোকে অভিসারী করে",
      "আলো সৃষ্টি করে",
      "আলো বন্ধ করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলোকে অপসারী করে"
  },
  {
    "id": "q-569",
    "num": "৫৬৯",
    "category": "physics",
    "question": "আয়নায় নিজের প্রতিবিম্ব দেখা কোন ঘটনার উদাহরণ?",
    "options": [
      "প্রতিফলন",
      "বাষ্পীভবন",
      "গলন",
      "দহন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রতিফলন"
  },
  {
    "id": "q-570",
    "num": "৫৭০",
    "category": "physics",
    "question": "রংধনু তৈরি হয় মূলত কোন ঘটনার কারণে?",
    "options": [
      "আলোর প্রতিসরণ, বিচ্ছুরণ ও প্রতিফলন",
      "শব্দের প্রতিফলন",
      "চৌম্বকত্ব",
      "বিদ্যুৎ প্রবাহ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলোর প্রতিসরণ, বিচ্ছুরণ ও প্রতিফলন"
  },
  {
    "id": "q-571",
    "num": "৫৭১",
    "category": "physics",
    "question": "তাপ কোন দিকে প্রবাহিত হয়?",
    "options": [
      "ঠান্ডা থেকে গরমে",
      "গরম থেকে ঠান্ডায়",
      "দুই দিকে কখনো নয়",
      "কেবল শূন্যস্থানে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) গরম থেকে ঠান্ডায়"
  },
  {
    "id": "q-572",
    "num": "৫৭২",
    "category": "physics",
    "question": "তাপ সঞ্চালনের কয়টি প্রধান পদ্ধতি রয়েছে?",
    "options": [
      "১টি",
      "২টি",
      "৩টি",
      "৪টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩টি"
  },
  {
    "id": "q-573",
    "num": "৫৭৩",
    "category": "physics",
    "question": "তাপ সঞ্চালনের যে পদ্ধতিতে মাধ্যম লাগে না, সেটি কী?",
    "options": [
      "পরিবহন",
      "পরিচলন",
      "বিকিরণ",
      "গলন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) বিকিরণ"
  },
  {
    "id": "q-574",
    "num": "৫৭৪",
    "category": "physics",
    "question": "বিদ্যুতের ভালো পরিবাহী কোনটি?",
    "options": [
      "তামা",
      "কাঠ",
      "রাবার",
      "প্লাস্টিক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তামা"
  },
  {
    "id": "q-575",
    "num": "৫৭৫",
    "category": "physics",
    "question": "বিদ্যুতের অপরিবাহী পদার্থ কোনটি?",
    "options": [
      "তামা",
      "অ্যালুমিনিয়াম",
      "রাবার",
      "লোহা"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) রাবার"
  },
  {
    "id": "q-576",
    "num": "৫৭৬",
    "category": "physics",
    "question": "একটি সাধারণ বৈদ্যুতিক সার্কিটে সুইচের কাজ কী?",
    "options": [
      "প্রবাহ চালু বা বন্ধ করা",
      "আলো তৈরি করা মাত্র",
      "বিদ্যুৎ সংরক্ষণ",
      "তার ঠান্ডা করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রবাহ চালু বা বন্ধ করা"
  },
  {
    "id": "q-577",
    "num": "৫৭৭",
    "category": "physics",
    "question": "ব্যাটারি কী ধরনের শক্তি বিদ্যুৎশক্তিতে রূপান্তর করে?",
    "options": [
      "রাসায়নিক শক্তি",
      "শব্দশক্তি",
      "আলোশক্তি",
      "তাপশক্তি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাসায়নিক শক্তি"
  },
  {
    "id": "q-578",
    "num": "৫৭৮",
    "category": "physics",
    "question": "জেনারেটর কোন শক্তিকে বৈদ্যুতিক শক্তিতে রূপান্তর করে?",
    "options": [
      "যান্ত্রিক শক্তি",
      "শব্দশক্তি",
      "রাসায়নিক শক্তি",
      "আলোশক্তি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যান্ত্রিক শক্তি"
  },
  {
    "id": "q-579",
    "num": "৫৭৯",
    "category": "physics",
    "question": "বৈদ্যুতিক মোটর কী করে?",
    "options": [
      "বৈদ্যুতিক শক্তিকে যান্ত্রিক শক্তিতে রূপান্তর করে",
      "তাপকে ঠান্ডায় রূপান্তর করে",
      "পানি তৈরি করে",
      "আলো শোষণ করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৈদ্যুতিক শক্তিকে যান্ত্রিক শক্তিতে রূপান্তর করে"
  },
  {
    "id": "q-580",
    "num": "৫৮০",
    "category": "physics",
    "question": "বৈদ্যুতিক পাখা কোন নীতিতে চলে?",
    "options": [
      "বৈদ্যুতিক মোটর",
      "সৌর কক্ষপথ",
      "বাষ্পীভবন",
      "আলোর প্রতিফলন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৈদ্যুতিক মোটর"
  },
  {
    "id": "q-581",
    "num": "৫৮১",
    "category": "physics",
    "question": "চুম্বকের একই মেরু কাছাকাছি আনলে কী হয়?",
    "options": [
      "আকর্ষণ",
      "বিকর্ষণ",
      "গলে যায়",
      "আলো দেয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বিকর্ষণ"
  },
  {
    "id": "q-582",
    "num": "৫৮২",
    "category": "physics",
    "question": "চুম্বকের বিপরীত মেরু কাছাকাছি আনলে কী হয়?",
    "options": [
      "বিকর্ষণ",
      "আকর্ষণ",
      "ভেঙে যায়",
      "অদৃশ্য হয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আকর্ষণ"
  },
  {
    "id": "q-583",
    "num": "৫৮৩",
    "category": "physics",
    "question": "পৃথিবীর মহাকর্ষীয় ত্বরণ প্রায় কত?",
    "options": [
      "১.৮ মি/সে²",
      "৯.৮ মি/সে²",
      "২০ মি/সে²",
      "৩০ মি/সে²"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৯.৮ মি/সে²"
  },
  {
    "id": "q-584",
    "num": "৫৮৪",
    "category": "physics",
    "question": "বস্তুর গতির পরিবর্তনের হারকে কী বলে?",
    "options": [
      "ত্বরণ",
      "ভর",
      "আয়তন",
      "ঘনত্ব"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ত্বরণ"
  },
  {
    "id": "q-585",
    "num": "৫৮৫",
    "category": "physics",
    "question": "ঘনত্ব নির্ণয়ের সূত্র কোনটি?",
    "options": [
      "ভর ÷ আয়তন",
      "আয়তন ÷ ভর",
      "ভর × সময়",
      "দূরত্ব ÷ সময়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভর ÷ আয়তন"
  },
  {
    "id": "q-586",
    "num": "৫৮৬",
    "category": "physics",
    "question": "বস্তুর অবস্থান পরিবর্তনের পরিমাণকে কী বলা হয়?",
    "options": [
      "সরণ",
      "ঘনত্ব",
      "তাপ",
      "চাপ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সরণ"
  },
  {
    "id": "q-587",
    "num": "৫৮৭",
    "category": "physics",
    "question": "পৃথিবীর বায়ুমণ্ডলে শব্দের গতি আলোর গতির তুলনায় কেমন?",
    "options": [
      "অনেক বেশি",
      "অনেক কম",
      "সমান",
      "অসীম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) অনেক কম"
  },
  {
    "id": "q-588",
    "num": "৫৮৮",
    "category": "physics",
    "question": "বিদ্যুতের ক্ষমতা নির্ণয়ের একটি সূত্র কোনটি?",
    "options": [
      "P = VI",
      "P = m/v",
      "P = F/a",
      "P = d/t"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) P = VI"
  },
  {
    "id": "q-589",
    "num": "৫৮৯",
    "category": "physics",
    "question": "বৈদ্যুতিক শক্তির বাণিজ্যিক একক কোনটি?",
    "options": [
      "কিলোওয়াট-ঘণ্টা",
      "মিটার",
      "কিলোগ্রাম",
      "কেলভিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কিলোওয়াট-ঘণ্টা"
  },
  {
    "id": "q-590",
    "num": "৫৯০",
    "category": "physics",
    "question": "শব্দ কোন মাধ্যমে চলতে পারে না?",
    "options": [
      "বায়ু",
      "পানি",
      "কঠিন পদার্থ",
      "শূন্যস্থান"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) শূন্যস্থান"
  },
  {
    "id": "q-591",
    "num": "৫৯১",
    "category": "physics",
    "question": "কোনো বস্তুর ওপর বল প্রয়োগ না করলে স্থির বস্তু কী করে?",
    "options": [
      "স্থির থাকতে চায়",
      "নিজে থেকে সবসময় উড়ে যায়",
      "গলে যায়",
      "বিস্ফোরিত হয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্থির থাকতে চায়"
  },
  {
    "id": "q-592",
    "num": "৫৯২",
    "category": "physics",
    "question": "ঘর্ষণ বল সাধারণত কী করে?",
    "options": [
      "আপেক্ষিক গতির বিরোধিতা করে",
      "সবসময় গতি বাড়ায়",
      "ভর বাড়ায়",
      "আলো তৈরি করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আপেক্ষিক গতির বিরোধিতা করে"
  },
  {
    "id": "q-593",
    "num": "৫৯৩",
    "category": "physics",
    "question": "ঘর্ষণ কমাতে কোনটি ব্যবহার করা যায়?",
    "options": [
      "লুব্রিকেন্ট",
      "বালি",
      "পাথর",
      "কাঠের গুঁড়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লুব্রিকেন্ট"
  },
  {
    "id": "q-594",
    "num": "৫৯৪",
    "category": "physics",
    "question": "চাপ নির্ণয়ের সূত্র কী?",
    "options": [
      "বল ÷ ক্ষেত্রফল",
      "ভর × আয়তন",
      "দূরত্ব ÷ সময়",
      "শক্তি × সময়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বল ÷ ক্ষেত্রফল"
  },
  {
    "id": "q-595",
    "num": "৫৯৫",
    "category": "physics",
    "question": "একটি সরল দোলকের দোলন নির্ভর করে প্রধানত কীসের ওপর?",
    "options": [
      "দৈর্ঘ্য ও অভিকর্ষজ ত্বরণ",
      "রং",
      "গন্ধ",
      "ভরের রং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দৈর্ঘ্য ও অভিকর্ষজ ত্বরণ"
  },
  {
    "id": "q-596",
    "num": "৫৯৬",
    "category": "physics",
    "question": "পরমাণুর কেন্দ্রে কী থাকে?",
    "options": [
      "নিউক্লিয়াস",
      "ইলেকট্রন মেঘ",
      "ফোটন",
      "আলো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিউক্লিয়াস"
  },
  {
    "id": "q-597",
    "num": "৫৯৭",
    "category": "physics",
    "question": "ইলেকট্রনের আধান কী?",
    "options": [
      "ধনাত্মক",
      "ঋণাত্মক",
      "নিরপেক্ষ",
      "কোনো আধান নেই"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ঋণাত্মক"
  },
  {
    "id": "q-598",
    "num": "৫৯৮",
    "category": "physics",
    "question": "প্রোটনের আধান কী?",
    "options": [
      "ধনাত্মক",
      "ঋণাত্মক",
      "নিরপেক্ষ",
      "পরিবর্তনশীল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ধনাত্মক"
  },
  {
    "id": "q-599",
    "num": "৫৯৯",
    "category": "physics",
    "question": "নিউট্রনের আধান কী?",
    "options": [
      "ধনাত্মক",
      "ঋণাত্মক",
      "নিরপেক্ষ",
      "দ্বিগুণ ধনাত্মক"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) নিরপেক্ষ"
  },
  {
    "id": "q-600",
    "num": "৬০০",
    "category": "physics",
    "question": "পদার্থের তিনটি সাধারণ অবস্থা কোনগুলো?",
    "options": [
      "কঠিন, তরল, গ্যাস",
      "আগুন, আলো, শব্দ",
      "মাটি, বালি, ধোঁয়া",
      "দিন, রাত, সন্ধ্যা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কঠিন, তরল, গ্যাস"
  },
  {
    "id": "q-601",
    "num": "৬০১",
    "category": "chemistry",
    "question": "রসায়নের জনক হিসেবে কাকে পরিচিত করা হয়?",
    "options": [
      "নিউটন",
      "অ্যান্টনি ল্যাভয়জিয়ে",
      "ডারউইন",
      "আইনস্টাইন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) অ্যান্টনি ল্যাভয়জিয়ে"
  },
  {
    "id": "q-602",
    "num": "৬০২",
    "category": "chemistry",
    "question": "পর্যায় সারণি প্রণয়নের জন্য কে বিখ্যাত?",
    "options": [
      "মেন্ডেলিভ",
      "নিউটন",
      "পাস্তুর",
      "ফ্যারাডে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মেন্ডেলিভ"
  },
  {
    "id": "q-603",
    "num": "৬০৩",
    "category": "chemistry",
    "question": "কার্বনের রাসায়নিক প্রতীক কী?",
    "options": [
      "Ca",
      "C",
      "Co",
      "Cr"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) C"
  },
  {
    "id": "q-604",
    "num": "৬০৪",
    "category": "chemistry",
    "question": "হাইড্রোজেনের রাসায়নিক প্রতীক কী?",
    "options": [
      "H",
      "He",
      "Hy",
      "Hg"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) H"
  },
  {
    "id": "q-605",
    "num": "৬০৫",
    "category": "chemistry",
    "question": "নাইট্রোজেনের রাসায়নিক প্রতীক কী?",
    "options": [
      "Ni",
      "N",
      "Na",
      "Ne"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) N"
  },
  {
    "id": "q-606",
    "num": "৬০৬",
    "category": "chemistry",
    "question": "সোডিয়ামের রাসায়নিক প্রতীক কী?",
    "options": [
      "S",
      "So",
      "Na",
      "Sd"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Na"
  },
  {
    "id": "q-607",
    "num": "৬০৭",
    "category": "chemistry",
    "question": "পটাশিয়ামের রাসায়নিক প্রতীক কী?",
    "options": [
      "P",
      "K",
      "Pt",
      "Po"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) K"
  },
  {
    "id": "q-608",
    "num": "৬০৮",
    "category": "chemistry",
    "question": "ক্যালসিয়ামের রাসায়নিক প্রতীক কী?",
    "options": [
      "Ca",
      "C",
      "Cl",
      "Cs"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Ca"
  },
  {
    "id": "q-609",
    "num": "৬০৯",
    "category": "chemistry",
    "question": "তামার রাসায়নিক প্রতীক কী?",
    "options": [
      "Tm",
      "Cu",
      "Co",
      "C"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Cu"
  },
  {
    "id": "q-610",
    "num": "৬১০",
    "category": "chemistry",
    "question": "হিলিয়ামের রাসায়নিক প্রতীক কী?",
    "options": [
      "H",
      "He",
      "Hl",
      "Hg"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) He"
  },
  {
    "id": "q-611",
    "num": "৬১১",
    "category": "chemistry",
    "question": "কার্বন ডাই-অক্সাইডের সংকেত কী?",
    "options": [
      "CO",
      "CO₂",
      "C₂O",
      "O₂"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) CO₂"
  },
  {
    "id": "q-612",
    "num": "৬১২",
    "category": "chemistry",
    "question": "অ্যামোনিয়ার রাসায়নিক সংকেত কী?",
    "options": [
      "NH₃",
      "NO₂",
      "H₂O",
      "CH₄"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) NH₃"
  },
  {
    "id": "q-613",
    "num": "৬১৩",
    "category": "chemistry",
    "question": "মিথেনের রাসায়নিক সংকেত কী?",
    "options": [
      "CH₄",
      "CO₂",
      "NH₃",
      "HCl"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) CH₄"
  },
  {
    "id": "q-614",
    "num": "৬১৪",
    "category": "chemistry",
    "question": "ওজোনের রাসায়নিক সংকেত কী?",
    "options": [
      "O",
      "O₂",
      "O₃",
      "CO₂"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) O₃"
  },
  {
    "id": "q-615",
    "num": "৬১৫",
    "category": "chemistry",
    "question": "সালফিউরিক অ্যাসিডের সংকেত কী?",
    "options": [
      "HCl",
      "H₂SO₄",
      "HNO₃",
      "NaOH"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) H₂SO₄"
  },
  {
    "id": "q-616",
    "num": "৬১৬",
    "category": "chemistry",
    "question": "হাইড্রোক্লোরিক অ্যাসিডের সংকেত কী?",
    "options": [
      "HCl",
      "H₂O",
      "H₂SO₄",
      "NaCl"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) HCl"
  },
  {
    "id": "q-617",
    "num": "৬১৭",
    "category": "chemistry",
    "question": "নাইট্রিক অ্যাসিডের সংকেত কী?",
    "options": [
      "HNO₃",
      "HCl",
      "NH₃",
      "CO₂"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) HNO₃"
  },
  {
    "id": "q-618",
    "num": "৬১৮",
    "category": "chemistry",
    "question": "বিশুদ্ধ পানির pH মান কত?",
    "options": [
      "৩",
      "৫",
      "৭",
      "১০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭"
  },
  {
    "id": "q-619",
    "num": "৬১৯",
    "category": "chemistry",
    "question": "pH মান ৭-এর কম হলে দ্রবণ সাধারণত কেমন?",
    "options": [
      "অম্লীয়",
      "ক্ষারীয়",
      "নিরপেক্ষ",
      "ধাতব"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অম্লীয়"
  },
  {
    "id": "q-620",
    "num": "৬২০",
    "category": "chemistry",
    "question": "pH মান ৭-এর বেশি হলে দ্রবণ সাধারণত কেমন?",
    "options": [
      "অম্লীয়",
      "ক্ষারীয়",
      "নিরপেক্ষ",
      "গ্যাসীয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ক্ষারীয়"
  },
  {
    "id": "q-621",
    "num": "৬২১",
    "category": "chemistry",
    "question": "লেবুর রসে প্রধানত কোন অ্যাসিড থাকে?",
    "options": [
      "সাইট্রিক অ্যাসিড",
      "সালফিউরিক অ্যাসিড",
      "হাইড্রোক্লোরিক অ্যাসিড",
      "নাইট্রিক অ্যাসিড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাইট্রিক অ্যাসিড"
  },
  {
    "id": "q-622",
    "num": "৬২২",
    "category": "chemistry",
    "question": "ভিনেগারে কোন অ্যাসিড থাকে?",
    "options": [
      "অ্যাসিটিক অ্যাসিড",
      "সাইট্রিক অ্যাসিড",
      "ল্যাকটিক অ্যাসিড",
      "সালফিউরিক অ্যাসিড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যাসিটিক অ্যাসিড"
  },
  {
    "id": "q-623",
    "num": "৬২৩",
    "category": "chemistry",
    "question": "দুধে কোন অ্যাসিড পাওয়া যায়?",
    "options": [
      "ল্যাকটিক অ্যাসিড",
      "নাইট্রিক অ্যাসিড",
      "সালফিউরিক অ্যাসিড",
      "কার্বনিক অ্যাসিড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ল্যাকটিক অ্যাসিড"
  },
  {
    "id": "q-624",
    "num": "৬২৪",
    "category": "chemistry",
    "question": "বেকিং সোডার রাসায়নিক নাম কী?",
    "options": [
      "সোডিয়াম বাইকার্বোনেট",
      "সোডিয়াম ক্লোরাইড",
      "ক্যালসিয়াম কার্বোনেট",
      "পটাশিয়াম নাইট্রেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সোডিয়াম বাইকার্বোনেট"
  },
  {
    "id": "q-625",
    "num": "৬২৫",
    "category": "chemistry",
    "question": "খাবার লবণের রাসায়নিক নাম কী?",
    "options": [
      "সোডিয়াম ক্লোরাইড",
      "ক্যালসিয়াম অক্সাইড",
      "সোডিয়াম হাইড্রোক্সাইড",
      "পটাশিয়াম ক্লোরাইড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সোডিয়াম ক্লোরাইড"
  },
  {
    "id": "q-626",
    "num": "৬২৬",
    "category": "chemistry",
    "question": "মরিচা মূলত কী দিয়ে গঠিত?",
    "options": [
      "আয়রন অক্সাইড",
      "কপার সালফেট",
      "সোডিয়াম ক্লোরাইড",
      "ক্যালসিয়াম কার্বোনেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আয়রন অক্সাইড"
  },
  {
    "id": "q-627",
    "num": "৬২৭",
    "category": "chemistry",
    "question": "লোহার মরিচা পড়ার জন্য সাধারণত কী প্রয়োজন?",
    "options": [
      "অক্সিজেন ও পানি",
      "শুধু আলো",
      "শুধু নাইট্রোজেন",
      "শুধু হিলিয়াম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্সিজেন ও পানি"
  },
  {
    "id": "q-628",
    "num": "৬২৮",
    "category": "chemistry",
    "question": "হীরা ও গ্রাফাইট কোন মৌলের ভিন্ন রূপ?",
    "options": [
      "অক্সিজেন",
      "কার্বন",
      "লোহা",
      "সালফার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কার্বন"
  },
  {
    "id": "q-629",
    "num": "৬২৯",
    "category": "chemistry",
    "question": "সবচেয়ে হালকা মৌল কোনটি?",
    "options": [
      "অক্সিজেন",
      "হাইড্রোজেন",
      "হিলিয়াম",
      "নাইট্রোজেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) হাইড্রোজেন"
  },
  {
    "id": "q-630",
    "num": "৬৩০",
    "category": "chemistry",
    "question": "সাধারণ তাপমাত্রায় তরল অধাতু কোনটি?",
    "options": [
      "ব্রোমিন",
      "সালফার",
      "কার্বন",
      "ফসফরাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রোমিন"
  },
  {
    "id": "q-631",
    "num": "৬৩১",
    "category": "chemistry",
    "question": "কোন গ্যাস আগুন নেভানোর যন্ত্রে ব্যবহার করা হয়?",
    "options": [
      "অক্সিজেন",
      "কার্বন ডাই-অক্সাইড",
      "হাইড্রোজেন",
      "মিথেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কার্বন ডাই-অক্সাইড"
  },
  {
    "id": "q-632",
    "num": "৬৩২",
    "category": "chemistry",
    "question": "বায়ুমণ্ডলে ওজোন স্তর আমাদের কী থেকে রক্ষা করে?",
    "options": [
      "অতিবেগুনি রশ্মি",
      "শব্দ",
      "বৃষ্টির পানি",
      "বাতাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অতিবেগুনি রশ্মি"
  },
  {
    "id": "q-633",
    "num": "৬৩৩",
    "category": "chemistry",
    "question": "LPG-এর প্রধান উপাদান কোনগুলো?",
    "options": [
      "প্রোপেন ও বিউটেন",
      "অক্সিজেন ও নাইট্রোজেন",
      "হাইড্রোজেন ও হিলিয়াম",
      "কার্বন ও সালফার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোপেন ও বিউটেন"
  },
  {
    "id": "q-634",
    "num": "৬৩৪",
    "category": "chemistry",
    "question": "প্রাকৃতিক গ্যাসের প্রধান উপাদান কী?",
    "options": [
      "মিথেন",
      "অক্সিজেন",
      "হিলিয়াম",
      "ক্লোরিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মিথেন"
  },
  {
    "id": "q-635",
    "num": "৬৩৫",
    "category": "chemistry",
    "question": "সিমেন্ট তৈরির গুরুত্বপূর্ণ কাঁচামাল কোনটি?",
    "options": [
      "চুনাপাথর",
      "তুলা",
      "রাবার",
      "কাগজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চুনাপাথর"
  },
  {
    "id": "q-636",
    "num": "৬৩৬",
    "category": "chemistry",
    "question": "কাচ তৈরির প্রধান কাঁচামাল কোনটি?",
    "options": [
      "সিলিকা বালি",
      "কাঠ",
      "তুলা",
      "লোহা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সিলিকা বালি"
  },
  {
    "id": "q-637",
    "num": "৬৩৭",
    "category": "chemistry",
    "question": "প্লাস্টিক সাধারণত কোন ধরনের পদার্থ?",
    "options": [
      "পলিমার",
      "বিশুদ্ধ ধাতু",
      "প্রাকৃতিক গ্যাস",
      "বিশুদ্ধ পানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পলিমার"
  },
  {
    "id": "q-638",
    "num": "৬৩৮",
    "category": "chemistry",
    "question": "সাবান তৈরির প্রক্রিয়াকে কী বলে?",
    "options": [
      "স্যাপনিফিকেশন",
      "বাষ্পীভবন",
      "সালোকসংশ্লেষণ",
      "পাতন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্যাপনিফিকেশন"
  },
  {
    "id": "q-639",
    "num": "৬৩৯",
    "category": "chemistry",
    "question": "লোহা থেকে ইস্পাত তৈরির মূল উপাদান কী?",
    "options": [
      "লোহা ও নির্দিষ্ট পরিমাণ কার্বন",
      "শুধু সোনা",
      "শুধু রূপা",
      "শুধু অক্সিজেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লোহা ও নির্দিষ্ট পরিমাণ কার্বন"
  },
  {
    "id": "q-640",
    "num": "৬৪০",
    "category": "chemistry",
    "question": "পর্যায় সারণিতে মৌলগুলো কী অনুযায়ী সাজানো?",
    "options": [
      "পারমাণবিক সংখ্যা",
      "রং",
      "গন্ধ",
      "আবিষ্কারের সাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পারমাণবিক সংখ্যা"
  },
  {
    "id": "q-641",
    "num": "৬৪১",
    "category": "chemistry",
    "question": "মৌলের পারমাণবিক সংখ্যা কী নির্দেশ করে?",
    "options": [
      "প্রোটনের সংখ্যা",
      "নিউট্রনের সংখ্যা",
      "অণুর সংখ্যা",
      "ভরের রং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোটনের সংখ্যা"
  },
  {
    "id": "q-642",
    "num": "৬৪২",
    "category": "chemistry",
    "question": "একটি পরমাণুর নিউক্লিয়াসে কোন কণাগুলো থাকে?",
    "options": [
      "প্রোটন ও নিউট্রন",
      "ইলেকট্রন ও ফোটন",
      "শুধু ইলেকট্রন",
      "শুধু আলো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোটন ও নিউট্রন"
  },
  {
    "id": "q-643",
    "num": "৬৪৩",
    "category": "chemistry",
    "question": "রাসায়নিক বিক্রিয়ায় নতুন পদার্থ তৈরি হওয়াকে কী বলে?",
    "options": [
      "রাসায়নিক পরিবর্তন",
      "ভৌত পরিবর্তন",
      "গলন",
      "বাষ্পীভবন মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাসায়নিক পরিবর্তন"
  },
  {
    "id": "q-644",
    "num": "৬৪৪",
    "category": "chemistry",
    "question": "বরফ গলে পানি হওয়া কোন ধরনের পরিবর্তন?",
    "options": [
      "ভৌত পরিবর্তন",
      "রাসায়নিক পরিবর্তন",
      "পারমাণবিক পরিবর্তন",
      "দহন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভৌত পরিবর্তন"
  },
  {
    "id": "q-645",
    "num": "৬৪৫",
    "category": "chemistry",
    "question": "লোহায় মরিচা পড়া কোন ধরনের পরিবর্তন?",
    "options": [
      "ভৌত পরিবর্তন",
      "রাসায়নিক পরিবর্তন",
      "শুধু অবস্থার পরিবর্তন",
      "কোনো পরিবর্তন নয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রাসায়নিক পরিবর্তন"
  },
  {
    "id": "q-646",
    "num": "৬৪৬",
    "category": "chemistry",
    "question": "মোম গলে যাওয়া কোন ধরনের পরিবর্তন?",
    "options": [
      "ভৌত পরিবর্তন",
      "রাসায়নিক পরিবর্তন",
      "পারমাণবিক পরিবর্তন",
      "জৈব পরিবর্তন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভৌত পরিবর্তন"
  },
  {
    "id": "q-647",
    "num": "৬৪৭",
    "category": "chemistry",
    "question": "কোনো মৌলের সবচেয়ে ক্ষুদ্র রাসায়নিক পরিচয় বজায় রাখা কণা কী?",
    "options": [
      "পরমাণু",
      "কোষ",
      "টিস্যু",
      "অঙ্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পরমাণু"
  },
  {
    "id": "q-648",
    "num": "৬৪৮",
    "category": "chemistry",
    "question": "দুটি বা ততোধিক পরমাণু রাসায়নিক বন্ধনে যুক্ত হলে কী তৈরি হয়?",
    "options": [
      "অণু",
      "কোষ",
      "টিস্যু",
      "অঙ্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অণু"
  },
  {
    "id": "q-649",
    "num": "৬৪৯",
    "category": "chemistry",
    "question": "পর্যায় সারণিতে নিষ্ক্রিয় গ্যাসগুলো কোন গ্রুপে রয়েছে?",
    "options": [
      "গ্রুপ ১",
      "গ্রুপ ২",
      "গ্রুপ ১৭",
      "গ্রুপ ১৮"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) গ্রুপ ১৮"
  },
  {
    "id": "q-650",
    "num": "৬৫০",
    "category": "chemistry",
    "question": "সোনার বিশুদ্ধতা পরিমাপের প্রচলিত একক কী?",
    "options": [
      "ক্যারেট",
      "লিটার",
      "মিটার",
      "ওয়াট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্যারেট"
  },
  {
    "id": "q-651",
    "num": "৬৫১",
    "category": "biology",
    "question": "জীবদেহের গঠন ও কাজের মৌলিক একক কী?",
    "options": [
      "টিস্যু",
      "কোষ",
      "অঙ্গ",
      "অঙ্গতন্ত্র"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কোষ"
  },
  {
    "id": "q-652",
    "num": "৬৫২",
    "category": "biology",
    "question": "কোষের নিয়ন্ত্রণকেন্দ্র কোনটি?",
    "options": [
      "নিউক্লিয়াস",
      "কোষপ্রাচীর",
      "সাইটোপ্লাজম",
      "রাইবোজোম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিউক্লিয়াস"
  },
  {
    "id": "q-653",
    "num": "৬৫৩",
    "category": "biology",
    "question": "কোষের শক্তিঘর বলা হয় কাকে?",
    "options": [
      "নিউক্লিয়াস",
      "মাইটোকন্ড্রিয়া",
      "রাইবোজোম",
      "কোষপ্রাচীর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মাইটোকন্ড্রিয়া"
  },
  {
    "id": "q-654",
    "num": "৬৫৪",
    "category": "biology",
    "question": "উদ্ভিদ কোষে কোষপ্রাচীর প্রধানত কী দিয়ে গঠিত?",
    "options": [
      "সেলুলোজ",
      "প্রোটিন",
      "চর্বি",
      "হিমোগ্লোবিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সেলুলোজ"
  },
  {
    "id": "q-655",
    "num": "৬৫৫",
    "category": "biology",
    "question": "কোন কোষে সাধারণত ক্লোরোপ্লাস্ট থাকে?",
    "options": [
      "উদ্ভিদ কোষ",
      "প্রাণী কোষ",
      "লোহিত রক্তকণিকা",
      "স্নায়ুকোষ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উদ্ভিদ কোষ"
  },
  {
    "id": "q-656",
    "num": "৬৫৬",
    "category": "biology",
    "question": "মানুষের বংশগতির প্রধান উপাদান কী?",
    "options": [
      "DNA",
      "পানি",
      "গ্লুকোজ",
      "ক্যালসিয়াম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) DNA"
  },
  {
    "id": "q-657",
    "num": "৬৫৭",
    "category": "biology",
    "question": "DNA-এর পূর্ণরূপ কী?",
    "options": [
      "Deoxyribonucleic Acid",
      "Digital Nuclear Acid",
      "Double Nitrogen Atom",
      "Dynamic Natural Atom"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Deoxyribonucleic Acid"
  },
  {
    "id": "q-658",
    "num": "৬৫৮",
    "category": "biology",
    "question": "বংশগতির একক কী?",
    "options": [
      "জিন",
      "টিস্যু",
      "অঙ্গ",
      "হরমোন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জিন"
  },
  {
    "id": "q-659",
    "num": "৬৫৯",
    "category": "biology",
    "question": "বংশগতিবিদ্যার জনক কে?",
    "options": [
      "গ্রেগর মেন্ডেল",
      "চার্লস ডারউইন",
      "লুই পাস্তুর",
      "রবার্ট হুক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্রেগর মেন্ডেল"
  },
  {
    "id": "q-660",
    "num": "৬৬০",
    "category": "biology",
    "question": "বিবর্তন তত্ত্বের সঙ্গে কোন বিজ্ঞানীর নাম বিশেষভাবে জড়িত?",
    "options": [
      "চার্লস ডারউইন",
      "নিউটন",
      "ফ্যারাডে",
      "মেন্ডেলিভ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চার্লস ডারউইন"
  },
  {
    "id": "q-661",
    "num": "৬৬১",
    "category": "biology",
    "question": "মানুষের শরীরে লোহিত রক্তকণিকা কোথায় তৈরি হয়?",
    "options": [
      "অস্থিমজ্জা",
      "পাকস্থলী",
      "ফুসফুস",
      "ত্বক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অস্থিমজ্জা"
  },
  {
    "id": "q-662",
    "num": "৬৬২",
    "category": "biology",
    "question": "মানুষের রক্তের তরল অংশকে কী বলে?",
    "options": [
      "প্লাজমা",
      "প্লেটলেট",
      "হিমোগ্লোবিন",
      "লোহিত কণিকা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্লাজমা"
  },
  {
    "id": "q-663",
    "num": "৬৬৩",
    "category": "biology",
    "question": "মানুষের হৃদপিণ্ডে কয়টি প্রকোষ্ঠ থাকে?",
    "options": [
      "২টি",
      "৩টি",
      "৪টি",
      "৫টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪টি"
  },
  {
    "id": "q-664",
    "num": "৬৬৪",
    "category": "biology",
    "question": "মানুষের মস্তিষ্ক কোন অঙ্গতন্ত্রের অংশ?",
    "options": [
      "স্নায়ুতন্ত্র",
      "পরিপাকতন্ত্র",
      "শ্বসনতন্ত্র",
      "কঙ্কালতন্ত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্নায়ুতন্ত্র"
  },
  {
    "id": "q-665",
    "num": "৬৬৫",
    "category": "biology",
    "question": "মানুষের শরীরে ইনসুলিন কোন অঙ্গ থেকে নিঃসৃত হয়?",
    "options": [
      "অগ্ন্যাশয়",
      "যকৃৎ",
      "কিডনি",
      "ফুসফুস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অগ্ন্যাশয়"
  },
  {
    "id": "q-666",
    "num": "৬৬৬",
    "category": "biology",
    "question": "ইনসুলিনের প্রধান কাজ কী?",
    "options": [
      "রক্তে গ্লুকোজ নিয়ন্ত্রণে সাহায্য করা",
      "চোখের রং পরিবর্তন",
      "হাড় তৈরি",
      "শব্দ শোনা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রক্তে গ্লুকোজ নিয়ন্ত্রণে সাহায্য করা"
  },
  {
    "id": "q-667",
    "num": "৬৬৭",
    "category": "biology",
    "question": "মানুষের শরীরের স্বাভাবিক তাপমাত্রা প্রায় কত?",
    "options": [
      "২৫° সেলসিয়াস",
      "৩৭° সেলসিয়াস",
      "৪৫° সেলসিয়াস",
      "৫০° সেলসিয়াস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৩৭° সেলসিয়াস"
  },
  {
    "id": "q-668",
    "num": "৬৬৮",
    "category": "biology",
    "question": "মানুষ কোন শ্রেণির প্রাণী?",
    "options": [
      "স্তন্যপায়ী",
      "সরীসৃপ",
      "উভচর",
      "মাছ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্তন্যপায়ী"
  },
  {
    "id": "q-669",
    "num": "৬৬৯",
    "category": "biology",
    "question": "কোন প্রাণী উড়তে পারে কিন্তু পাখি নয়?",
    "options": [
      "বাদুড়",
      "মুরগি",
      "হাঁস",
      "ঈগল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাদুড়"
  },
  {
    "id": "q-670",
    "num": "৬৭০",
    "category": "biology",
    "question": "পৃথিবীর সবচেয়ে বড় স্থলজ প্রাণী কোনটি?",
    "options": [
      "আফ্রিকান হাতি",
      "জিরাফ",
      "গণ্ডার",
      "জলহস্তী"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আফ্রিকান হাতি"
  },
  {
    "id": "q-671",
    "num": "৬৭১",
    "category": "biology",
    "question": "সবচেয়ে দ্রুতগামী স্থলজ প্রাণী কোনটি?",
    "options": [
      "চিতা",
      "সিংহ",
      "ঘোড়া",
      "হরিণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চিতা"
  },
  {
    "id": "q-672",
    "num": "৬৭২",
    "category": "biology",
    "question": "কোন প্রাণীর গলায় সবচেয়ে বেশি কশেরুকা থাকে?",
    "options": [
      "জিরাফ",
      "কুকুর",
      "বাঘ",
      "হাতি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জিরাফ"
  },
  {
    "id": "q-673",
    "num": "৬৭৩",
    "category": "biology",
    "question": "কোন পাখি পেছনের দিকে উড়তে পারে?",
    "options": [
      "হামিংবার্ড",
      "কাক",
      "কবুতর",
      "ঈগল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হামিংবার্ড"
  },
  {
    "id": "q-674",
    "num": "৬৭৪",
    "category": "biology",
    "question": "কোন পাখি সবচেয়ে বড় ডিম পাড়ে?",
    "options": [
      "উটপাখি",
      "মুরগি",
      "কবুতর",
      "টিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উটপাখি"
  },
  {
    "id": "q-675",
    "num": "৬৭৫",
    "category": "biology",
    "question": "কোন প্রাণী শীতনিদ্রায় যেতে পারে?",
    "options": [
      "ভালুক",
      "গরু",
      "ঘোড়া",
      "মুরগি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভালুক"
  },
  {
    "id": "q-676",
    "num": "৬৭৬",
    "category": "biology",
    "question": "কোন প্রাণী নিজের রং পরিবর্তন করতে পারে?",
    "options": [
      "গিরগিটি",
      "হাতি",
      "গরু",
      "ছাগল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গিরগিটি"
  },
  {
    "id": "q-677",
    "num": "৬৭৭",
    "category": "biology",
    "question": "সাপ কোন শ্রেণির প্রাণী?",
    "options": [
      "সরীসৃপ",
      "স্তন্যপায়ী",
      "উভচর",
      "পাখি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সরীসৃপ"
  },
  {
    "id": "q-678",
    "num": "৬৭৮",
    "category": "biology",
    "question": "কচ্ছপ কোন শ্রেণির প্রাণী?",
    "options": [
      "পাখি",
      "সরীসৃপ",
      "স্তন্যপায়ী",
      "মাছ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সরীসৃপ"
  },
  {
    "id": "q-679",
    "num": "৬৭৯",
    "category": "biology",
    "question": "ডলফিন কোন শ্রেণির প্রাণী?",
    "options": [
      "মাছ",
      "স্তন্যপায়ী",
      "উভচর",
      "সরীসৃপ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) স্তন্যপায়ী"
  },
  {
    "id": "q-680",
    "num": "৬৮০",
    "category": "biology",
    "question": "তিমি কোন শ্রেণির প্রাণী?",
    "options": [
      "মাছ",
      "স্তন্যপায়ী",
      "সরীসৃপ",
      "উভচর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) স্তন্যপায়ী"
  },
  {
    "id": "q-681",
    "num": "৬৮১",
    "category": "biology",
    "question": "কোন প্রাণী সামাজিকভাবে দলবদ্ধ জীবনযাপনের জন্য পরিচিত?",
    "options": [
      "পিঁপড়া",
      "বাঘ",
      "চিতা",
      "চিতা বাঘ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিঁপড়া"
  },
  {
    "id": "q-682",
    "num": "৬৮২",
    "category": "biology",
    "question": "রেশম পাওয়া যায় কোন প্রাণী থেকে?",
    "options": [
      "রেশমকীট",
      "মৌমাছি",
      "প্রজাপতি",
      "মাকড়সা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রেশমকীট"
  },
  {
    "id": "q-683",
    "num": "৬৮৩",
    "category": "biology",
    "question": "মুক্তা সাধারণত কোন প্রাণীর দেহে তৈরি হয়?",
    "options": [
      "ঝিনুক",
      "কাঁকড়া",
      "চিংড়ি",
      "অক্টোপাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঝিনুক"
  },
  {
    "id": "q-684",
    "num": "৬৮৪",
    "category": "biology",
    "question": "অক্টোপাসের কয়টি বাহু থাকে?",
    "options": [
      "৬টি",
      "৮টি",
      "১০টি",
      "১২টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৮টি"
  },
  {
    "id": "q-685",
    "num": "৬৮৫",
    "category": "biology",
    "question": "তারামাছ সাধারণত কতটি বাহু বিশিষ্ট?",
    "options": [
      "৩টি",
      "৪টি",
      "৫টি",
      "৮টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫টি"
  },
  {
    "id": "q-686",
    "num": "৬৮৬",
    "category": "biology",
    "question": "কোন প্রাণীর রক্ত নীল হতে পারে?",
    "options": [
      "অক্টোপাস",
      "গরু",
      "মুরগি",
      "বাঘ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্টোপাস"
  },
  {
    "id": "q-687",
    "num": "৬৮৭",
    "category": "biology",
    "question": "মশার জীবনচক্রের প্রথম পর্যায় কোনটি?",
    "options": [
      "ডিম",
      "লার্ভা",
      "পিউপা",
      "পূর্ণাঙ্গ মশা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডিম"
  },
  {
    "id": "q-688",
    "num": "৬৮৮",
    "category": "biology",
    "question": "প্রজাপতির জীবনচক্রে কয়টি প্রধান পর্যায় থাকে?",
    "options": [
      "২টি",
      "৩টি",
      "৪টি",
      "৫টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪টি"
  },
  {
    "id": "q-689",
    "num": "৬৮৯",
    "category": "biology",
    "question": "ব্যাঙের বাচ্চাকে কী বলা হয়?",
    "options": [
      "শুঁয়োপোকা",
      "ব্যাঙাচি",
      "লার্ভা মাছ",
      "পিউপা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ব্যাঙাচি"
  },
  {
    "id": "q-690",
    "num": "৬৯০",
    "category": "biology",
    "question": "উদ্ভিদের বীজ অঙ্কুরোদ্গমের জন্য কী প্রয়োজন?",
    "options": [
      "পানি, উপযুক্ত তাপমাত্রা ও অক্সিজেন",
      "শুধু আলো",
      "শুধু মাটি",
      "শুধু সার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানি, উপযুক্ত তাপমাত্রা ও অক্সিজেন"
  },
  {
    "id": "q-691",
    "num": "৬৯১",
    "category": "biology",
    "question": "পরাগায়ন কী?",
    "options": [
      "পরাগরেণু পুংকেশর থেকে গর্ভমুণ্ডে পৌঁছানো",
      "ফল পচে যাওয়া",
      "পাতা ঝরে পড়া",
      "মূল বড় হওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পরাগরেণু পুংকেশর থেকে গর্ভমুণ্ডে পৌঁছানো"
  },
  {
    "id": "q-692",
    "num": "৬৯২",
    "category": "biology",
    "question": "উদ্ভিদের কোন অংশে সাধারণত বীজ তৈরি হয়?",
    "options": [
      "ফুল",
      "মূল",
      "কাণ্ড",
      "পাতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফুল"
  },
  {
    "id": "q-693",
    "num": "৬৯৩",
    "category": "biology",
    "question": "গাছের কোন অংশ সাধারণত খাদ্য পরিবহন করে?",
    "options": [
      "কাণ্ড ও পরিবহন টিস্যু",
      "শুধু ফুল",
      "শুধু ফল",
      "শুধু বীজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাণ্ড ও পরিবহন টিস্যু"
  },
  {
    "id": "q-694",
    "num": "৬৯৪",
    "category": "biology",
    "question": "উদ্ভিদের মূলের একটি প্রধান কাজ কী?",
    "options": [
      "পানি ও খনিজ শোষণ",
      "আলো তৈরি",
      "বীজ উড়ানো",
      "ফুলের রং পরিবর্তন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানি ও খনিজ শোষণ"
  },
  {
    "id": "q-695",
    "num": "৬৯৫",
    "category": "biology",
    "question": "মাশরুম কোন জীবজগতের অন্তর্ভুক্ত?",
    "options": [
      "ছত্রাক",
      "প্রাণী",
      "উদ্ভিদ",
      "ব্যাকটেরিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ছত্রাক"
  },
  {
    "id": "q-696",
    "num": "৬৯৬",
    "category": "biology",
    "question": "দই তৈরিতে কোন ধরনের অণুজীব ভূমিকা রাখে?",
    "options": [
      "ব্যাকটেরিয়া",
      "ভাইরাস",
      "শৈবাল",
      "প্রোটোজোয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাকটেরিয়া"
  },
  {
    "id": "q-697",
    "num": "৬৯৭",
    "category": "biology",
    "question": "অ্যান্টিবায়োটিক সাধারণত কোনটির বিরুদ্ধে কার্যকর?",
    "options": [
      "ব্যাকটেরিয়া",
      "সব ভাইরাস",
      "সব অ্যালার্জি",
      "সব ধরনের ব্যথা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাকটেরিয়া"
  },
  {
    "id": "q-698",
    "num": "৬৯৮",
    "category": "biology",
    "question": "পরিবেশে খাদ্যশৃঙ্খলের প্রথম স্তরে সাধারণত কারা থাকে?",
    "options": [
      "উৎপাদক",
      "শিকারি",
      "পরজীবী",
      "মৃতভোজী মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উৎপাদক"
  },
  {
    "id": "q-699",
    "num": "৬৯৯",
    "category": "biology",
    "question": "বাস্তুতন্ত্রে পচনকারীর উদাহরণ কোনটি?",
    "options": [
      "ছত্রাক",
      "বাঘ",
      "হরিণ",
      "ঈগল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ছত্রাক"
  },
  {
    "id": "q-700",
    "num": "৭০০",
    "category": "biology",
    "question": "জীববৈচিত্র্য বলতে কী বোঝায়?",
    "options": [
      "জীবের বৈচিত্র্য",
      "শুধু গাছের উচ্চতা",
      "শুধু প্রাণীর ওজন",
      "শুধু পানির পরিমাণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জীবের বৈচিত্র্য"
  },
  {
    "id": "q-701",
    "num": "৭০১",
    "category": "astronomy",
    "question": "সৌরজগতে মোট কয়টি গ্রহ রয়েছে?",
    "options": [
      "৭টি",
      "৮টি",
      "৯টি",
      "১০টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৮টি"
  },
  {
    "id": "q-702",
    "num": "৭০২",
    "category": "astronomy",
    "question": "সূর্যের সবচেয়ে কাছের গ্রহ কোনটি?",
    "options": [
      "শুক্র",
      "পৃথিবী",
      "বুধ",
      "মঙ্গল"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) বুধ"
  },
  {
    "id": "q-703",
    "num": "৭০৩",
    "category": "astronomy",
    "question": "সৌরজগতের সবচেয়ে উষ্ণ গ্রহ কোনটি?",
    "options": [
      "বুধ",
      "শুক্র",
      "মঙ্গল",
      "বৃহস্পতি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শুক্র"
  },
  {
    "id": "q-704",
    "num": "৭০৪",
    "category": "astronomy",
    "question": "কোন গ্রহের চারপাশে সবচেয়ে বিখ্যাত বলয় রয়েছে?",
    "options": [
      "মঙ্গল",
      "শনি",
      "পৃথিবী",
      "বুধ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শনি"
  },
  {
    "id": "q-705",
    "num": "৭০৫",
    "category": "astronomy",
    "question": "সৌরজগতের সবচেয়ে বড় গ্রহের নাম কী?",
    "options": [
      "শনি",
      "পৃথিবী",
      "বৃহস্পতি",
      "নেপচুন"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) বৃহস্পতি"
  },
  {
    "id": "q-706",
    "num": "৭০৬",
    "category": "astronomy",
    "question": "সৌরজগতের সবচেয়ে দূরের গ্রহ কোনটি?",
    "options": [
      "ইউরেনাস",
      "নেপচুন",
      "শনি",
      "মঙ্গল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নেপচুন"
  },
  {
    "id": "q-707",
    "num": "৭০৭",
    "category": "astronomy",
    "question": "ইউরেনাস গ্রহের বিশেষ বৈশিষ্ট্য কী?",
    "options": [
      "প্রায় পাশ ফিরে ঘোরে",
      "কোনো বায়ুমণ্ডল নেই",
      "সূর্যের চারপাশে ঘোরে না",
      "এটি নক্ষত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রায় পাশ ফিরে ঘোরে"
  },
  {
    "id": "q-708",
    "num": "৭০৮",
    "category": "astronomy",
    "question": "সূর্যের শক্তির প্রধান উৎস কী?",
    "options": [
      "রাসায়নিক দহন",
      "নিউক্লীয় সংযোজন",
      "বিদ্যুৎ",
      "কয়লা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নিউক্লীয় সংযোজন"
  },
  {
    "id": "q-709",
    "num": "৭০৯",
    "category": "astronomy",
    "question": "সূর্য প্রধানত কোন গ্যাস দিয়ে গঠিত?",
    "options": [
      "অক্সিজেন ও নাইট্রোজেন",
      "হাইড্রোজেন ও হিলিয়াম",
      "কার্বন ও সালফার",
      "মিথেন ও ক্লোরিন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) হাইড্রোজেন ও হিলিয়াম"
  },
  {
    "id": "q-710",
    "num": "৭১০",
    "category": "astronomy",
    "question": "পৃথিবীর নিকটতম নক্ষত্র কোনটি?",
    "options": [
      "ধ্রুবতারা",
      "সূর্য",
      "সিরিয়াস",
      "প্রক্সিমা সেন্টরি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সূর্য"
  },
  {
    "id": "q-711",
    "num": "৭১১",
    "category": "astronomy",
    "question": "পৃথিবীর নিকটতম সৌরজগতের বাইরের নক্ষত্র কোনটি?",
    "options": [
      "সিরিয়াস",
      "প্রক্সিমা সেন্টরি",
      "বেটেলজুস",
      "ভেগা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) প্রক্সিমা সেন্টরি"
  },
  {
    "id": "q-712",
    "num": "৭১২",
    "category": "astronomy",
    "question": "চাঁদের নিজস্ব আলো আছে কি?",
    "options": [
      "আছে",
      "নেই, সূর্যের আলো প্রতিফলিত করে",
      "শুধু রাতে তৈরি হয়",
      "দিনে তৈরি হয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নেই, সূর্যের আলো প্রতিফলিত করে"
  },
  {
    "id": "q-713",
    "num": "৭১৩",
    "category": "astronomy",
    "question": "পূর্ণিমার রাতে চাঁদ দেখতে কেমন লাগে?",
    "options": [
      "সম্পূর্ণ গোল",
      "অর্ধেক",
      "সরু রেখা",
      "দেখা যায় না"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সম্পূর্ণ গোল"
  },
  {
    "id": "q-714",
    "num": "৭১৪",
    "category": "astronomy",
    "question": "অমাবস্যায় চাঁদ সাধারণত কেমন দেখা যায়?",
    "options": [
      "সম্পূর্ণ উজ্জ্বল",
      "দৃশ্যমান অংশ খুব কম বা দেখা যায় না",
      "লাল",
      "নীল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) দৃশ্যমান অংশ খুব কম বা দেখা যায় না"
  },
  {
    "id": "q-715",
    "num": "৭১৫",
    "category": "astronomy",
    "question": "সূর্যগ্রহণ কখন হয়?",
    "options": [
      "চাঁদ পৃথিবী ও সূর্যের মাঝখানে এলে",
      "পৃথিবী সূর্য ও চাঁদের মাঝে এলে",
      "চাঁদ অদৃশ্য হলে",
      "মঙ্গল পৃথিবীর কাছে এলে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চাঁদ পৃথিবী ও সূর্যের মাঝখানে এলে"
  },
  {
    "id": "q-716",
    "num": "৭১৬",
    "category": "astronomy",
    "question": "চন্দ্রগ্রহণ কখন হয়?",
    "options": [
      "চাঁদ সূর্যের সামনে এলে",
      "পৃথিবী সূর্য ও চাঁদের মাঝখানে এলে",
      "সূর্য নিভে গেলে",
      "শুক্র পৃথিবীকে ঢেকে দিলে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) পৃথিবী সূর্য ও চাঁদের মাঝখানে এলে"
  },
  {
    "id": "q-717",
    "num": "৭১৭",
    "category": "astronomy",
    "question": "চাঁদে প্রথম মানুষ অবতরণ করেন কত সালে?",
    "options": [
      "১৯৫৯",
      "১৯৬৫",
      "১৯৬৯",
      "১৯৭৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৬৯"
  },
  {
    "id": "q-718",
    "num": "৭১৮",
    "category": "astronomy",
    "question": "প্রথম মানববাহী চন্দ্রাভিযানের নাম কী?",
    "options": [
      "অ্যাপোলো ১১",
      "স্পুটনিক ১",
      "ভয়েজার ১",
      "মার্স পাথফাইন্ডার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যাপোলো ১১"
  },
  {
    "id": "q-719",
    "num": "৭১৯",
    "category": "astronomy",
    "question": "মহাকাশে প্রথম মানুষ কে ছিলেন?",
    "options": [
      "নিল আর্মস্ট্রং",
      "ইউরি গ্যাগারিন",
      "বাজ অলড্রিন",
      "জন গ্লেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ইউরি গ্যাগারিন"
  },
  {
    "id": "q-720",
    "num": "৭২০",
    "category": "astronomy",
    "question": "মহাকাশে প্রথম নারী কে ছিলেন?",
    "options": [
      "ভ্যালেন্তিনা তেরেশকোভা",
      "স্যালি রাইড",
      "কাল্পনা চাওলা",
      "সুনিতা উইলিয়ামস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভ্যালেন্তিনা তেরেশকোভা"
  },
  {
    "id": "q-721",
    "num": "৭২১",
    "category": "astronomy",
    "question": "পৃথিবীর কক্ষপথে স্থাপিত বিখ্যাত মহাকাশ গবেষণাগারের নাম কী?",
    "options": [
      "আন্তর্জাতিক মহাকাশ স্টেশন",
      "পিরামিড",
      "আইফেল টাওয়ার",
      "গ্রিনিচ মানমন্দির"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আন্তর্জাতিক মহাকাশ স্টেশন"
  },
  {
    "id": "q-722",
    "num": "৭২২",
    "category": "astronomy",
    "question": "হাবল কী?",
    "options": [
      "মহাকাশ দূরবীক্ষণ যন্ত্র",
      "রকেটের জ্বালানি",
      "গ্রহ",
      "উপগ্রহের শহর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মহাকাশ দূরবীক্ষণ যন্ত্র"
  },
  {
    "id": "q-723",
    "num": "৭২৩",
    "category": "astronomy",
    "question": "জেমস ওয়েব কী ধরনের যন্ত্র?",
    "options": [
      "মহাকাশ দূরবীক্ষণ যন্ত্র",
      "সমুদ্রের জাহাজ",
      "আবহাওয়া বেলুন",
      "যোগাযোগ তার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মহাকাশ দূরবীক্ষণ যন্ত্র"
  },
  {
    "id": "q-724",
    "num": "৭২৪",
    "category": "astronomy",
    "question": "আমাদের সৌরজগৎ কোন গ্যালাক্সিতে অবস্থিত?",
    "options": [
      "অ্যান্ড্রোমিডা",
      "আকাশগঙ্গা",
      "সোমব্রেরো",
      "হুইরলপুল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আকাশগঙ্গা"
  },
  {
    "id": "q-725",
    "num": "৭২৫",
    "category": "astronomy",
    "question": "গ্যালাক্সি বলতে কী বোঝায়?",
    "options": [
      "অসংখ্য নক্ষত্র, গ্যাস ও ধুলিকণার মহাকর্ষীয় ব্যবস্থা",
      "একটি গ্রহ",
      "একটি উপগ্রহ",
      "একটি ছোট পাথর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অসংখ্য নক্ষত্র, গ্যাস ও ধুলিকণার মহাকর্ষীয় ব্যবস্থা"
  },
  {
    "id": "q-726",
    "num": "৭২৬",
    "category": "astronomy",
    "question": "ধূমকেতুর লেজ সাধারণত কোন দিকে থাকে?",
    "options": [
      "সূর্যের দিকে",
      "সূর্যের বিপরীত দিকে",
      "পৃথিবীর দিকে সবসময়",
      "উত্তর দিকে"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) সূর্যের বিপরীত দিকে"
  },
  {
    "id": "q-727",
    "num": "৭২৭",
    "category": "astronomy",
    "question": "উল্কা বলতে সাধারণত কী বোঝায়?",
    "options": [
      "বায়ুমণ্ডলে প্রবেশ করে জ্বলে ওঠা মহাজাগতিক বস্তু",
      "একটি নক্ষত্র",
      "একটি গ্রহ",
      "একটি গ্যালাক্সি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বায়ুমণ্ডলে প্রবেশ করে জ্বলে ওঠা মহাজাগতিক বস্তু"
  },
  {
    "id": "q-728",
    "num": "৭২৮",
    "category": "astronomy",
    "question": "গ্রহাণু প্রধানত কোন দুটি গ্রহের মাঝের বলয়ে বেশি পাওয়া যায়?",
    "options": [
      "পৃথিবী ও মঙ্গল",
      "মঙ্গল ও বৃহস্পতি",
      "বৃহস্পতি ও শনি",
      "শুক্র ও বুধ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মঙ্গল ও বৃহস্পতি"
  },
  {
    "id": "q-729",
    "num": "৭২৯",
    "category": "astronomy",
    "question": "মঙ্গল গ্রহের দুটি প্রাকৃতিক উপগ্রহের নাম কী?",
    "options": [
      "ফোবোস ও ডেইমোস",
      "টাইটান ও ইউরোপা",
      "আয়ো ও গ্যানিমিড",
      "ট্রাইটন ও চারন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফোবোস ও ডেইমোস"
  },
  {
    "id": "q-730",
    "num": "৭৩০",
    "category": "astronomy",
    "question": "পৃথিবীর বৃহত্তম প্রাকৃতিক উপগ্রহ কোনটি?",
    "options": [
      "চাঁদ",
      "টাইটান",
      "গ্যানিমিড",
      "ইউরোপা"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) গ্যানিমিড"
  },
  {
    "id": "q-731",
    "num": "৭৩১",
    "category": "astronomy",
    "question": "বৃহস্পতির সবচেয়ে বড় উপগ্রহ কোনটি?",
    "options": [
      "ইউরোপা",
      "গ্যানিমিড",
      "আয়ো",
      "ক্যালিস্টো"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) গ্যানিমিড"
  },
  {
    "id": "q-732",
    "num": "৭৩২",
    "category": "astronomy",
    "question": "শনির সবচেয়ে বড় উপগ্রহ কোনটি?",
    "options": [
      "টাইটান",
      "গ্যানিমিড",
      "ট্রাইটন",
      "ফোবোস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টাইটান"
  },
  {
    "id": "q-733",
    "num": "৭৩৩",
    "category": "astronomy",
    "question": "প্লুটোকে বর্তমানে কোন শ্রেণিতে রাখা হয়েছে?",
    "options": [
      "পূর্ণ গ্রহ",
      "বামন গ্রহ",
      "নক্ষত্র",
      "ধূমকেতু"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বামন গ্রহ"
  },
  {
    "id": "q-734",
    "num": "৭৩৪",
    "category": "astronomy",
    "question": "পৃথিবীর আকৃতি কেমন?",
    "options": [
      "সম্পূর্ণ সমতল",
      "প্রায় গোলাকার, মেরুতে সামান্য চাপা",
      "চৌকো",
      "ত্রিভুজাকার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) প্রায় গোলাকার, মেরুতে সামান্য চাপা"
  },
  {
    "id": "q-735",
    "num": "৭৩৫",
    "category": "astronomy",
    "question": "দিন ও রাত হওয়ার মূল কারণ কী?",
    "options": [
      "পৃথিবীর নিজ অক্ষে ঘূর্ণন",
      "চাঁদের ঘূর্ণন",
      "সূর্যের ঘূর্ণন",
      "মঙ্গলের গতি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পৃথিবীর নিজ অক্ষে ঘূর্ণন"
  },
  {
    "id": "q-736",
    "num": "৭৩৬",
    "category": "astronomy",
    "question": "ঋতু পরিবর্তনের প্রধান কারণ কী?",
    "options": [
      "পৃথিবীর অক্ষের হেলানো অবস্থাসহ সূর্যকে প্রদক্ষিণ",
      "শুধু চাঁদের আলো",
      "সূর্যের আকার বদল",
      "মহাসাগরের ঢেউ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পৃথিবীর অক্ষের হেলানো অবস্থাসহ সূর্যকে প্রদক্ষিণ"
  },
  {
    "id": "q-737",
    "num": "৭৩৭",
    "category": "astronomy",
    "question": "পৃথিবীর উত্তর ও দক্ষিণ মেরু যুক্ত করে কল্পিত রেখাকে কী বলে?",
    "options": [
      "অক্ষ",
      "বিষুবরেখা",
      "দ্রাঘিমারেখা",
      "কর্কটক্রান্তি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্ষ"
  },
  {
    "id": "q-738",
    "num": "৭৩৮",
    "category": "astronomy",
    "question": "বিষুবরেখা পৃথিবীকে কোন দুটি ভাগে ভাগ করে?",
    "options": [
      "পূর্ব ও পশ্চিম",
      "উত্তর ও দক্ষিণ",
      "স্থল ও জল",
      "দিন ও রাত"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) উত্তর ও দক্ষিণ"
  },
  {
    "id": "q-739",
    "num": "৭৩৯",
    "category": "astronomy",
    "question": "পৃথিবীর বিষুবরেখার অক্ষাংশ কত?",
    "options": [
      "০°",
      "২৩.৫°",
      "৬৬.৫°",
      "৯০°"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ০°"
  },
  {
    "id": "q-740",
    "num": "৭৪০",
    "category": "astronomy",
    "question": "উত্তর মেরুর অক্ষাংশ কত?",
    "options": [
      "০°",
      "২৩.৫° উত্তর",
      "৬৬.৫° উত্তর",
      "৯০° উত্তর"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ৯০° উত্তর"
  },
  {
    "id": "q-741",
    "num": "৭৪১",
    "category": "astronomy",
    "question": "পৃথিবীর কক্ষপথের আকৃতি কেমন?",
    "options": [
      "বৃত্তের কাছাকাছি উপবৃত্তাকার",
      "বর্গাকার",
      "ত্রিভুজাকার",
      "সরলরেখা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৃত্তের কাছাকাছি উপবৃত্তাকার"
  },
  {
    "id": "q-742",
    "num": "৭৪২",
    "category": "astronomy",
    "question": "সূর্যের আলো ও তাপের কারণে পৃথিবীতে কোন প্রক্রিয়া চলে?",
    "options": [
      "জলচক্র",
      "শুধু ভূমিকম্প",
      "শুধু আগ্নেয়গিরি",
      "শুধু জোয়ার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জলচক্র"
  },
  {
    "id": "q-743",
    "num": "৭৪৩",
    "category": "astronomy",
    "question": "সূর্যের বাইরের দৃশ্যমান স্তরের নাম কী?",
    "options": [
      "ফটোস্ফিয়ার",
      "নিউক্লিয়াস",
      "ম্যান্টল",
      "ভূত্বক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফটোস্ফিয়ার"
  },
  {
    "id": "q-744",
    "num": "৭৪৪",
    "category": "astronomy",
    "question": "সূর্যের বাইরের সবচেয়ে বিস্তৃত বায়ুমণ্ডলীয় স্তর কী?",
    "options": [
      "করোনা",
      "ফটোস্ফিয়ার",
      "ক্রোমোস্ফিয়ার",
      "নিউক্লিয়াস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) করোনা"
  },
  {
    "id": "q-745",
    "num": "৭৪৫",
    "category": "astronomy",
    "question": "সূর্যের কালো দাগের মতো অঞ্চলের নাম কী?",
    "options": [
      "সৌরকলঙ্ক",
      "গ্যালাক্সি",
      "উল্কা",
      "ধূমকেতু"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সৌরকলঙ্ক"
  },
  {
    "id": "q-746",
    "num": "৭৪৬",
    "category": "astronomy",
    "question": "পৃথিবী থেকে চাঁদের গড় দূরত্ব প্রায় কত?",
    "options": [
      "৩৮৪,৪০০ কিলোমিটার",
      "১০,০০০ কিলোমিটার",
      "১ মিলিয়ন কিলোমিটার",
      "১০ মিলিয়ন কিলোমিটার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৩৮৪,৪০০ কিলোমিটার"
  },
  {
    "id": "q-747",
    "num": "৭৪৭",
    "category": "astronomy",
    "question": "নক্ষত্রের আলো উৎপন্ন হয় প্রধানত কী কারণে?",
    "options": [
      "নিউক্লীয় সংযোজন",
      "পানি ফুটে",
      "বাতাসের ঘর্ষণ",
      "কয়লা জ্বলে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিউক্লীয় সংযোজন"
  },
  {
    "id": "q-748",
    "num": "৭৪৮",
    "category": "astronomy",
    "question": "মহাবিশ্বের সম্প্রসারণের পক্ষে গুরুত্বপূর্ণ প্রমাণ কোনটি?",
    "options": [
      "গ্যালাক্সির লাল সরণ",
      "সমুদ্রের জোয়ার",
      "বাতাসের গতি",
      "ভূমিকম্প"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্যালাক্সির লাল সরণ"
  },
  {
    "id": "q-749",
    "num": "৭৪৯",
    "category": "astronomy",
    "question": "মহাবিশ্বের উৎপত্তি ব্যাখ্যার বহুল স্বীকৃত মডেল কোনটি?",
    "options": [
      "বিগ ব্যাং মডেল",
      "স্থির পৃথিবী মডেল",
      "জলচক্র মডেল",
      "পরমাণু মডেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিগ ব্যাং মডেল"
  },
  {
    "id": "q-750",
    "num": "৭৫০",
    "category": "astronomy",
    "question": "কোন গ্রহকে পৃথিবীর যমজ গ্রহ বলা হয়?",
    "options": [
      "শুক্র",
      "মঙ্গল",
      "শনি",
      "নেপচুন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শুক্র"
  },
  {
    "id": "q-751",
    "num": "৭৫১",
    "category": "world_history",
    "question": "প্রাচীন মিশরের শাসকদের কী বলা হতো?",
    "options": [
      "সম্রাট",
      "ফারাও",
      "সুলতান",
      "খলিফা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ফারাও"
  },
  {
    "id": "q-752",
    "num": "৭৫২",
    "category": "world_history",
    "question": "প্রাচীন মিশরের লেখার পদ্ধতির নাম কী?",
    "options": [
      "হায়ারোগ্লিফিক",
      "কিউনিফর্ম",
      "লাতিন",
      "ব্রেইল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হায়ারোগ্লিফিক"
  },
  {
    "id": "q-753",
    "num": "৭৫৩",
    "category": "world_history",
    "question": "মেসোপটেমিয়া কোন দুটি নদীর মধ্যবর্তী অঞ্চলে গড়ে উঠেছিল?",
    "options": [
      "টাইগ্রিস ও ইউফ্রেটিস",
      "নীল ও কঙ্গো",
      "সিন্ধু ও গঙ্গা",
      "রাইন ও টেমস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টাইগ্রিস ও ইউফ্রেটিস"
  },
  {
    "id": "q-754",
    "num": "৭৫৪",
    "category": "world_history",
    "question": "প্রাচীন অলিম্পিক প্রতিযোগিতা কোথায় শুরু হয়েছিল?",
    "options": [
      "রোম",
      "গ্রিস",
      "মিশর",
      "চীন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) গ্রিস"
  },
  {
    "id": "q-755",
    "num": "৭৫৫",
    "category": "world_history",
    "question": "রোমান সাম্রাজ্যের বিখ্যাত কলোসিয়াম কোথায়?",
    "options": [
      "রোম",
      "এথেন্স",
      "কায়রো",
      "প্যারিস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রোম"
  },
  {
    "id": "q-756",
    "num": "৭৫৬",
    "category": "world_history",
    "question": "প্রাচীন গ্রিসের বিখ্যাত দার্শনিক সক্রেটিসের শিষ্য কে ছিলেন?",
    "options": [
      "প্লেটো",
      "নিউটন",
      "অ্যারিস্টটল",
      "ডারউইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্লেটো"
  },
  {
    "id": "q-757",
    "num": "৭৫৭",
    "category": "world_history",
    "question": "প্লেটোর শিষ্য কে ছিলেন?",
    "options": [
      "অ্যারিস্টটল",
      "সক্রেটিস",
      "হেরোডোটাস",
      "পিথাগোরাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যারিস্টটল"
  },
  {
    "id": "q-758",
    "num": "৭৫৮",
    "category": "world_history",
    "question": "প্রাচীন ভারতের মৌর্য সাম্রাজ্যের প্রতিষ্ঠাতা কে?",
    "options": [
      "অশোক",
      "চন্দ্রগুপ্ত মৌর্য",
      "আকবর",
      "হর্ষবর্ধন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) চন্দ্রগুপ্ত মৌর্য"
  },
  {
    "id": "q-759",
    "num": "৭৫৯",
    "category": "world_history",
    "question": "সম্রাট অশোক কোন সাম্রাজ্যের শাসক ছিলেন?",
    "options": [
      "গুপ্ত",
      "মৌর্য",
      "মুঘল",
      "পাল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মৌর্য"
  },
  {
    "id": "q-760",
    "num": "৭৬০",
    "category": "world_history",
    "question": "তাজমহল নির্মাণ করেন কে?",
    "options": [
      "আকবর",
      "শাহজাহান",
      "বাবর",
      "আওরঙ্গজেব"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শাহজাহান"
  },
  {
    "id": "q-761",
    "num": "৭৬১",
    "category": "world_history",
    "question": "মুঘল সাম্রাজ্যের প্রতিষ্ঠাতা কে?",
    "options": [
      "আকবর",
      "বাবর",
      "হুমায়ুন",
      "শাহজাহান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বাবর"
  },
  {
    "id": "q-762",
    "num": "৭৬২",
    "category": "world_history",
    "question": "মুঘল সম্রাট আকবরের শাসনকালের জন্য তিনি কী কারণে বিখ্যাত?",
    "options": [
      "প্রশাসন ও ধর্মীয় সহনশীলতার নীতি",
      "সমুদ্র আবিষ্কার",
      "বিদ্যুৎ আবিষ্কার",
      "ছাপাখানা নির্মাণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রশাসন ও ধর্মীয় সহনশীলতার নীতি"
  },
  {
    "id": "q-763",
    "num": "৭৬৩",
    "category": "world_history",
    "question": "চীনের মহাপ্রাচীর নির্মাণের প্রধান উদ্দেশ্য কী ছিল?",
    "options": [
      "প্রতিরক্ষা",
      "পানি সংরক্ষণ",
      "কৃষিকাজ",
      "রেল চলাচল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রতিরক্ষা"
  },
  {
    "id": "q-764",
    "num": "৭৬৪",
    "category": "world_history",
    "question": "সিল্ক রোড মূলত কী ছিল?",
    "options": [
      "বাণিজ্যপথের নেটওয়ার্ক",
      "নদী",
      "পাহাড়",
      "যুদ্ধক্ষেত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাণিজ্যপথের নেটওয়ার্ক"
  },
  {
    "id": "q-765",
    "num": "৭৬৫",
    "category": "world_history",
    "question": "ইউরোপে রেনেসাঁর সূচনা কোথায় হয়েছিল?",
    "options": [
      "ইতালি",
      "নরওয়ে",
      "রাশিয়া",
      "আয়ারল্যান্ড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইতালি"
  },
  {
    "id": "q-766",
    "num": "৭৬৬",
    "category": "world_history",
    "question": "রেনেসাঁ শব্দের অর্থ কী?",
    "options": [
      "পুনর্জাগরণ",
      "যুদ্ধ",
      "রাজত্ব",
      "বিপর্যয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পুনর্জাগরণ"
  },
  {
    "id": "q-767",
    "num": "৭৬৭",
    "category": "world_history",
    "question": "ছাপাখানার উন্নত প্রযুক্তির সঙ্গে কার নাম জড়িত?",
    "options": [
      "জোহানেস গুটেনবার্গ",
      "নিউটন",
      "এডিসন",
      "ফ্যারাডে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জোহানেস গুটেনবার্গ"
  },
  {
    "id": "q-768",
    "num": "৭৬৮",
    "category": "world_history",
    "question": "আমেরিকা মহাদেশে ইউরোপীয় অভিযানের সঙ্গে কোন নাবিকের নাম বিখ্যাত?",
    "options": [
      "ক্রিস্টোফার কলম্বাস",
      "মার্কো পোলো",
      "ফার্দিনান্দ ম্যাগেলান",
      "জেমস কুক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্রিস্টোফার কলম্বাস"
  },
  {
    "id": "q-769",
    "num": "৭৬৯",
    "category": "world_history",
    "question": "পৃথিবী প্রদক্ষিণের প্রথম সফল অভিযানের নেতৃত্ব দেন কে?",
    "options": [
      "ফার্দিনান্দ ম্যাগেলান অভিযানের শুরু করেন",
      "নিউটন",
      "কলম্বাস",
      "আমুন্ডসেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফার্দিনান্দ ম্যাগেলান অভিযানের শুরু করেন"
  },
  {
    "id": "q-770",
    "num": "৭৭০",
    "category": "world_history",
    "question": "শিল্পবিপ্লব প্রথম কোথায় শুরু হয়?",
    "options": [
      "ব্রিটেন",
      "চীন",
      "মিশর",
      "ব্রাজিল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রিটেন"
  },
  {
    "id": "q-771",
    "num": "৭৭১",
    "category": "world_history",
    "question": "ফরাসি বিপ্লব শুরু হয় কত সালে?",
    "options": [
      "১৭৭৬",
      "১৭৮৯",
      "১৮১৫",
      "১৯১৪"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৭৮৯"
  },
  {
    "id": "q-772",
    "num": "৭৭২",
    "category": "world_history",
    "question": "আমেরিকার স্বাধীনতার ঘোষণাপত্র গৃহীত হয় কত সালে?",
    "options": [
      "১৭৭৬",
      "১৭৮৯",
      "১৮১২",
      "১৮৬৫"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৭৭৬"
  },
  {
    "id": "q-773",
    "num": "৭৭৩",
    "category": "world_history",
    "question": "ফরাসি বিপ্লবের বিখ্যাত স্লোগান কী ছিল?",
    "options": [
      "স্বাধীনতা, সাম্য, ভ্রাতৃত্ব",
      "কাজ, বিশ্রাম, ঘুম",
      "শক্তি, সম্পদ, ক্ষমতা",
      "যুদ্ধ, জয়, শান্তি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্বাধীনতা, সাম্য, ভ্রাতৃত্ব"
  },
  {
    "id": "q-774",
    "num": "৭৭৪",
    "category": "world_history",
    "question": "প্রথম বিশ্বযুদ্ধ শুরু হয় কত সালে?",
    "options": [
      "১৯০৫",
      "১৯১৪",
      "১৯১৮",
      "১৯৩৯"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯১৪"
  },
  {
    "id": "q-775",
    "num": "৭৭৫",
    "category": "world_history",
    "question": "প্রথম বিশ্বযুদ্ধ শেষ হয় কত সালে?",
    "options": [
      "১৯১৬",
      "১৯১৭",
      "১৯১৮",
      "১৯২০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯১৮"
  },
  {
    "id": "q-776",
    "num": "৭৭৬",
    "category": "world_history",
    "question": "দ্বিতীয় বিশ্বযুদ্ধ শুরু হয় কত সালে?",
    "options": [
      "১৯১৪",
      "১৯২৯",
      "১৯৩৯",
      "১৯৪৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৩৯"
  },
  {
    "id": "q-777",
    "num": "৭৭৭",
    "category": "world_history",
    "question": "দ্বিতীয় বিশ্বযুদ্ধ শেষ হয় কত সালে?",
    "options": [
      "১৯৪২",
      "১৯৪৫",
      "১৯৪৮",
      "১৯৫০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৪৫"
  },
  {
    "id": "q-778",
    "num": "৭৭৮",
    "category": "world_history",
    "question": "জাতিসংঘ প্রতিষ্ঠার মূল উদ্দেশ্য কী?",
    "options": [
      "আন্তর্জাতিক শান্তি ও নিরাপত্তা রক্ষা",
      "শুধু ব্যবসা করা",
      "খেলাধুলা আয়োজন",
      "মহাকাশে যাওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আন্তর্জাতিক শান্তি ও নিরাপত্তা রক্ষা"
  },
  {
    "id": "q-779",
    "num": "৭৭৯",
    "category": "world_history",
    "question": "বার্লিন প্রাচীরের পতন ঘটে কত সালে?",
    "options": [
      "১৯৭১",
      "১৯৮৯",
      "১৯৯৫",
      "২০০১"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৮৯"
  },
  {
    "id": "q-780",
    "num": "৭৮০",
    "category": "world_history",
    "question": "দক্ষিণ আফ্রিকার বর্ণবাদবিরোধী নেতা কে ছিলেন?",
    "options": [
      "নেলসন ম্যান্ডেলা",
      "আব্রাহাম লিংকন",
      "উইনস্টন চার্চিল",
      "চার্লস ডারউইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নেলসন ম্যান্ডেলা"
  },
  {
    "id": "q-781",
    "num": "৭৮১",
    "category": "world_history",
    "question": "নেলসন ম্যান্ডেলা কত সালে দক্ষিণ আফ্রিকার প্রেসিডেন্ট হন?",
    "options": [
      "১৯৮০",
      "১৯৯০",
      "১৯৯৪",
      "২০০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৯৪"
  },
  {
    "id": "q-782",
    "num": "৭৮২",
    "category": "world_history",
    "question": "আমেরিকার গৃহযুদ্ধ কোন দুই পক্ষের মধ্যে হয়েছিল?",
    "options": [
      "উত্তর ও দক্ষিণের রাজ্যগুলোর মধ্যে",
      "ইউরোপ ও এশিয়ার মধ্যে",
      "চীন ও জাপানের মধ্যে",
      "ভারত ও পাকিস্তানের মধ্যে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উত্তর ও দক্ষিণের রাজ্যগুলোর মধ্যে"
  },
  {
    "id": "q-783",
    "num": "৭৮৩",
    "category": "world_history",
    "question": "যুক্তরাষ্ট্রের গৃহযুদ্ধের সময় প্রেসিডেন্ট কে ছিলেন?",
    "options": [
      "জর্জ ওয়াশিংটন",
      "আব্রাহাম লিংকন",
      "জন এফ. কেনেডি",
      "থমাস জেফারসন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আব্রাহাম লিংকন"
  },
  {
    "id": "q-784",
    "num": "৭৮৪",
    "category": "world_history",
    "question": "রুশ বিপ্লব সংঘটিত হয় কত সালে?",
    "options": [
      "১৯০৫",
      "১৯১৭",
      "১৯২৫",
      "১৯৩৯"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯১৭"
  },
  {
    "id": "q-785",
    "num": "৭৮৫",
    "category": "world_history",
    "question": "মহাত্মা গান্ধী কোন আন্দোলনের সঙ্গে যুক্ত ছিলেন?",
    "options": [
      "ভারতের স্বাধীনতা আন্দোলন",
      "ফরাসি বিপ্লব",
      "রুশ বিপ্লব",
      "আমেরিকার গৃহযুদ্ধ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভারতের স্বাধীনতা আন্দোলন"
  },
  {
    "id": "q-786",
    "num": "৭৮৬",
    "category": "world_history",
    "question": "ভারতের স্বাধীনতা দিবস কবে?",
    "options": [
      "২৬ জানুয়ারি",
      "১৫ আগস্ট",
      "২ অক্টোবর",
      "১৪ নভেম্বর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৫ আগস্ট"
  },
  {
    "id": "q-787",
    "num": "৭৮৭",
    "category": "world_history",
    "question": "পাকিস্তানের স্বাধীনতা দিবস কবে?",
    "options": [
      "১৪ আগস্ট",
      "১৫ আগস্ট",
      "২৩ মার্চ",
      "১৬ ডিসেম্বর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৪ আগস্ট"
  },
  {
    "id": "q-788",
    "num": "৭৮৮",
    "category": "world_history",
    "question": "চীনে গণপ্রজাতন্ত্রী রাষ্ট্র প্রতিষ্ঠিত হয় কত সালে?",
    "options": [
      "১৯১১",
      "১৯৪৫",
      "১৯৪৯",
      "১৯৬০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৪৯"
  },
  {
    "id": "q-789",
    "num": "৭৮৯",
    "category": "world_history",
    "question": "জাপানের হিরোশিমায় পারমাণবিক বোমা নিক্ষেপ করা হয় কত সালে?",
    "options": [
      "১৯৩৯",
      "১৯৪৫",
      "১৯৫০",
      "১৯৬৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৪৫"
  },
  {
    "id": "q-790",
    "num": "৭৯০",
    "category": "world_history",
    "question": "প্রথম বিশ্বযুদ্ধের আগে ইউরোপে সংঘাতের অন্যতম কারণ কী ছিল?",
    "options": [
      "সাম্রাজ্যবাদ ও জোটব্যবস্থা",
      "ইন্টারনেট",
      "মহাকাশ অভিযান",
      "শিল্পীর প্রতিযোগিতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাম্রাজ্যবাদ ও জোটব্যবস্থা"
  },
  {
    "id": "q-791",
    "num": "৭৯১",
    "category": "world_history",
    "question": "প্রাচীন মিশরের পিরামিড কী কাজে ব্যবহৃত হতো?",
    "options": [
      "সমাধি হিসেবে",
      "বাজার হিসেবে",
      "বিদ্যালয় হিসেবে",
      "সমুদ্রবন্দর হিসেবে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সমাধি হিসেবে"
  },
  {
    "id": "q-792",
    "num": "৭৯২",
    "category": "world_history",
    "question": "প্রাচীন মেসোপটেমিয়ার কিউনিফর্ম কী ছিল?",
    "options": [
      "লেখার পদ্ধতি",
      "যুদ্ধের অস্ত্র",
      "কৃষিযন্ত্র",
      "নৌকা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লেখার পদ্ধতি"
  },
  {
    "id": "q-793",
    "num": "৭৯৩",
    "category": "world_history",
    "question": "রোমান সাম্রাজ্যে প্রচলিত গুরুত্বপূর্ণ ভাষা কোনটি ছিল?",
    "options": [
      "লাতিন",
      "বাংলা",
      "জাপানি",
      "চীনা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লাতিন"
  },
  {
    "id": "q-794",
    "num": "৭৯৪",
    "category": "world_history",
    "question": "প্রাচীন গ্রিক সভ্যতায় গণতন্ত্রের বিকাশ কোন শহরে বিখ্যাত ছিল?",
    "options": [
      "এথেন্স",
      "স্পার্টা",
      "রোম",
      "আলেকজান্দ্রিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এথেন্স"
  },
  {
    "id": "q-795",
    "num": "৭৯৫",
    "category": "world_history",
    "question": "প্রাচীন ভারতের নালন্দা কী ছিল?",
    "options": [
      "শিক্ষা কেন্দ্র",
      "সমুদ্রবন্দর",
      "দুর্গ",
      "বাজার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শিক্ষা কেন্দ্র"
  },
  {
    "id": "q-796",
    "num": "৭৯৬",
    "category": "world_history",
    "question": "সম্রাট অশোক কোন ধর্মের প্রচারে বিশেষ ভূমিকা রেখেছিলেন?",
    "options": [
      "বৌদ্ধধর্ম",
      "খ্রিষ্টধর্ম",
      "ইহুদিধর্ম",
      "শিন্তো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৌদ্ধধর্ম"
  },
  {
    "id": "q-797",
    "num": "৭৯৭",
    "category": "world_history",
    "question": "মুদ্রণযন্ত্রের প্রসার ইউরোপে কোন ক্ষেত্রে বড় পরিবর্তন আনে?",
    "options": [
      "বই ও জ্ঞান প্রচার",
      "সমুদ্রের গভীরতা",
      "আবহাওয়া নিয়ন্ত্রণ",
      "কৃষিজমি সৃষ্টি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বই ও জ্ঞান প্রচার"
  },
  {
    "id": "q-798",
    "num": "৭৯৮",
    "category": "world_history",
    "question": "ম্যাগনা কার্টা স্বাক্ষরিত হয় কত সালে?",
    "options": [
      "১০৬৬",
      "১২১৫",
      "১৪৯২",
      "১৭৭৬"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১২১৫"
  },
  {
    "id": "q-799",
    "num": "৭৯৯",
    "category": "world_history",
    "question": "ম্যাগনা কার্টা কোন দেশের ইতিহাসের সঙ্গে যুক্ত?",
    "options": [
      "ইংল্যান্ড",
      "জাপান",
      "মিশর",
      "ব্রাজিল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইংল্যান্ড"
  },
  {
    "id": "q-800",
    "num": "৮০০",
    "category": "world_history",
    "question": "প্রাচীন অলিম্পিক গেমস কোন দেবতার সম্মানে অনুষ্ঠিত হতো?",
    "options": [
      "জিউস",
      "অ্যাপোলো",
      "পসেইডন",
      "অ্যারিস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জিউস"
  },
  {
    "id": "q-801",
    "num": "৮০১",
    "category": "bangladesh_heritage",
    "question": "বাংলা ভাষা আন্দোলনের ঐতিহাসিক দিন কোনটি?",
    "options": [
      "২১ ফেব্রুয়ারি",
      "২৬ মার্চ",
      "১৬ ডিসেম্বর",
      "১ মে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২১ ফেব্রুয়ারি"
  },
  {
    "id": "q-802",
    "num": "৮০২",
    "category": "bangladesh_heritage",
    "question": "ভাষা আন্দোলন সংঘটিত হয় কোন সালে?",
    "options": [
      "১৯৪৭",
      "১৯৫২",
      "১৯৫৪",
      "১৯৬৯"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৫২"
  },
  {
    "id": "q-803",
    "num": "৮০৩",
    "category": "bangladesh_heritage",
    "question": "ভাষা আন্দোলনের স্মৃতিতে নির্মিত স্থাপনার নাম কী?",
    "options": [
      "জাতীয় স্মৃতিসৌধ",
      "কেন্দ্রীয় শহীদ মিনার",
      "জাতীয় সংসদ ভবন",
      "জাতীয় জাদুঘর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কেন্দ্রীয় শহীদ মিনার"
  },
  {
    "id": "q-804",
    "num": "৮০৪",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের ছয় দফা দাবি উত্থাপিত হয় কত সালে?",
    "options": [
      "১৯৫২",
      "১৯৬৬",
      "১৯৬৯",
      "১৯৭১"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৬৬"
  },
  {
    "id": "q-805",
    "num": "৮০৫",
    "category": "bangladesh_heritage",
    "question": "ঐতিহাসিক ৭ মার্চের ভাষণ কোথায় দেওয়া হয়েছিল?",
    "options": [
      "পল্টন ময়দান",
      "রেসকোর্স ময়দান",
      "সোহরাওয়ার্দী উদ্যানের বাইরে",
      "কার্জন হল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) রেসকোর্স ময়দান"
  },
  {
    "id": "q-806",
    "num": "৮০৬",
    "category": "bangladesh_heritage",
    "question": "ঐতিহাসিক ৭ মার্চের ভাষণ কোন সালে দেওয়া হয়?",
    "options": [
      "১৯৬৬",
      "১৯৬৯",
      "১৯৭১",
      "১৯৭২"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৭১"
  },
  {
    "id": "q-807",
    "num": "৮০৭",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের মুক্তিযুদ্ধের সময় দেশকে কয়টি সেক্টরে ভাগ করা হয়েছিল?",
    "options": [
      "৭টি",
      "৯টি",
      "১১টি",
      "১৫টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১১টি"
  },
  {
    "id": "q-808",
    "num": "৮০৮",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের মুক্তিযুদ্ধের সময় অস্থায়ী সরকার কোথায় শপথ গ্রহণ করে?",
    "options": [
      "ঢাকা",
      "মুজিবনগর",
      "চট্টগ্রাম",
      "সিলেট"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মুজিবনগর"
  },
  {
    "id": "q-809",
    "num": "৮০৯",
    "category": "bangladesh_heritage",
    "question": "মুজিবনগর সরকার শপথ গ্রহণ করে কবে?",
    "options": [
      "২৬ মার্চ ১৯৭১",
      "১০ এপ্রিল ১৯৭১",
      "১৭ এপ্রিল ১৯৭১",
      "১৬ ডিসেম্বর ১৯৭১"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৭ এপ্রিল ১৯৭১"
  },
  {
    "id": "q-810",
    "num": "৮১০",
    "category": "bangladesh_heritage",
    "question": "মুজিবনগর সরকারের রাষ্ট্রপতি কে ছিলেন?",
    "options": [
      "সৈয়দ নজরুল ইসলাম",
      "বঙ্গবন্ধু শেখ মুজিবুর রহমান",
      "তাজউদ্দীন আহমদ",
      "এম. এ. জি. ওসমানী"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বঙ্গবন্ধু শেখ মুজিবুর রহমান"
  },
  {
    "id": "q-811",
    "num": "৮১১",
    "category": "bangladesh_heritage",
    "question": "মুজিবনগর সরকারের অস্থায়ী রাষ্ট্রপতি কে ছিলেন?",
    "options": [
      "সৈয়দ নজরুল ইসলাম",
      "তাজউদ্দীন আহমদ",
      "খন্দকার মোশতাক আহমদ",
      "এ এইচ এম কামারুজ্জামান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সৈয়দ নজরুল ইসলাম"
  },
  {
    "id": "q-812",
    "num": "৮১২",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের মুক্তিযুদ্ধের সময় মুজিবনগর সরকারের প্রধানমন্ত্রী কে ছিলেন?",
    "options": [
      "এম. মনসুর আলী",
      "তাজউদ্দীন আহমদ",
      "সৈয়দ নজরুল ইসলাম",
      "জেনারেল ওসমানী"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) তাজউদ্দীন আহমদ"
  },
  {
    "id": "q-813",
    "num": "৮১৩",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের মুক্তিযুদ্ধে আত্মসমর্পণকারী পাকিস্তানি বাহিনীর প্রধান কে ছিলেন?",
    "options": [
      "এ. এ. কে. নিয়াজী",
      "ইয়াহিয়া খান",
      "টিক্কা খান",
      "আইয়ুব খান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এ. এ. কে. নিয়াজী"
  },
  {
    "id": "q-814",
    "num": "৮১৪",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের বিজয় অর্জিত হয় কোন সালে?",
    "options": [
      "১৯৬৯",
      "১৯৭০",
      "১৯৭১",
      "১৯৭২"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৯৭১"
  },
  {
    "id": "q-815",
    "num": "৮১৫",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের সংবিধান গৃহীত হয় কবে?",
    "options": [
      "২৬ মার্চ ১৯৭১",
      "৪ নভেম্বর ১৯৭২",
      "১৬ ডিসেম্বর ১৯৭১",
      "১০ জানুয়ারি ১৯৭২"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৪ নভেম্বর ১৯৭২"
  },
  {
    "id": "q-816",
    "num": "৮১৬",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের সংবিধান কার্যকর হয় কবে?",
    "options": [
      "১৬ ডিসেম্বর ১৯৭২",
      "৪ নভেম্বর ১৯৭২",
      "২৬ মার্চ ১৯৭৩",
      "২১ ফেব্রুয়ারি ১৯৭২"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৬ ডিসেম্বর ১৯৭২"
  },
  {
    "id": "q-817",
    "num": "৮১৭",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় পতাকার বর্তমান নকশার শিল্পী কে?",
    "options": [
      "কামরুল হাসান",
      "জয়নুল আবেদিন",
      "এস এম সুলতান",
      "কাইয়ুম চৌধুরী"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কামরুল হাসান"
  },
  {
    "id": "q-818",
    "num": "৮১৮",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় পতাকার প্রথম নকশার সঙ্গে কোন সংগঠনের নাম জড়িত?",
    "options": [
      "স্বাধীন বাংলা নিউক্লিয়াস ও ছাত্রনেতাদের উদ্যোগ",
      "জাতিসংঘ",
      "ব্রিটিশ সংসদ",
      "অলিম্পিক কমিটি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্বাধীন বাংলা নিউক্লিয়াস ও ছাত্রনেতাদের উদ্যোগ"
  },
  {
    "id": "q-819",
    "num": "৮১৯",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় স্মৃতিসৌধের স্থপতি কে?",
    "options": [
      "সৈয়দ মঈনুল হোসেন",
      "লুই আই কান",
      "মাজহারুল ইসলাম",
      "এফ আর খান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সৈয়দ মঈনুল হোসেন"
  },
  {
    "id": "q-820",
    "num": "৮২০",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় স্মৃতিসৌধের কয়টি স্তম্ভ রয়েছে?",
    "options": [
      "৫টি",
      "৭টি",
      "৯টি",
      "১১টি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৭টি"
  },
  {
    "id": "q-821",
    "num": "৮২১",
    "category": "bangladesh_heritage",
    "question": "একুশে পদক প্রবর্তিত হয় কত সালে?",
    "options": [
      "১৯৭২",
      "১৯৭৬",
      "১৯৮০",
      "১৯৯০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৭৬"
  },
  {
    "id": "q-822",
    "num": "৮২২",
    "category": "bangladesh_heritage",
    "question": "স্বাধীনতা পুরস্কার কী ধরনের সম্মাননা?",
    "options": [
      "বাংলাদেশের সর্বোচ্চ রাষ্ট্রীয় বেসামরিক পুরস্কার",
      "খেলাধুলার পদক",
      "আন্তর্জাতিক সামরিক পুরস্কার",
      "স্কুলের পুরস্কার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাংলাদেশের সর্বোচ্চ রাষ্ট্রীয় বেসামরিক পুরস্কার"
  },
  {
    "id": "q-823",
    "num": "৮২৩",
    "category": "bangladesh_heritage",
    "question": "বাংলা একাডেমি প্রতিষ্ঠিত হয় কত সালে?",
    "options": [
      "১৯৫২",
      "১৯৫৫",
      "১৯৬১",
      "১৯৭১"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৫৫"
  },
  {
    "id": "q-824",
    "num": "৮২৪",
    "category": "bangladesh_heritage",
    "question": "বাংলা একাডেমি কোথায় অবস্থিত?",
    "options": [
      "ঢাকার বর্ধমান হাউসে",
      "সাভারে",
      "চট্টগ্রামে",
      "রাজশাহীতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঢাকার বর্ধমান হাউসে"
  },
  {
    "id": "q-825",
    "num": "৮২৫",
    "category": "bangladesh_heritage",
    "question": "অমর একুশে বইমেলা সাধারণত কোন মাসে অনুষ্ঠিত হয়?",
    "options": [
      "জানুয়ারি",
      "ফেব্রুয়ারি",
      "জুন",
      "ডিসেম্বর"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ফেব্রুয়ারি"
  },
  {
    "id": "q-826",
    "num": "৮২৬",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের লোকসংগীতের একটি পরিচিত ধারা কোনটি?",
    "options": [
      "বাউল গান",
      "অপেরা",
      "সিম্ফনি",
      "জ্যাজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাউল গান"
  },
  {
    "id": "q-827",
    "num": "৮২৭",
    "category": "bangladesh_heritage",
    "question": "লালন শাহ কোন ধারার গানের জন্য বিখ্যাত?",
    "options": [
      "বাউল গান",
      "রক গান",
      "অপেরা",
      "ধ্রুপদি পাশ্চাত্য সংগীত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাউল গান"
  },
  {
    "id": "q-828",
    "num": "৮২৮",
    "category": "bangladesh_heritage",
    "question": "লালন শাহের আখড়া কোথায় অবস্থিত?",
    "options": [
      "ছেঁউড়িয়া, কুষ্টিয়া",
      "সাভার, ঢাকা",
      "রামু, কক্সবাজার",
      "পাহাড়পুর, নওগাঁ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ছেঁউড়িয়া, কুষ্টিয়া"
  },
  {
    "id": "q-829",
    "num": "৮২৯",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের ঐতিহ্যবাহী নকশিকাঁথা কী দিয়ে তৈরি হয়?",
    "options": [
      "সুতা ও কাপড়ের নকশা",
      "কাচ",
      "লোহা",
      "পাথর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুতা ও কাপড়ের নকশা"
  },
  {
    "id": "q-830",
    "num": "৮৩০",
    "category": "bangladesh_heritage",
    "question": "জামদানি কী ধরনের শিল্প?",
    "options": [
      "বস্ত্রশিল্প",
      "ধাতুশিল্প",
      "মৃৎশিল্প",
      "কাঠশিল্প"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বস্ত্রশিল্প"
  },
  {
    "id": "q-831",
    "num": "৮৩১",
    "category": "bangladesh_heritage",
    "question": "জামদানি শাড়ির ঐতিহ্যের সঙ্গে কোন এলাকার নাম বিশেষভাবে জড়িত?",
    "options": [
      "ঢাকা অঞ্চল",
      "বরিশাল অঞ্চল",
      "রংপুর অঞ্চল",
      "পার্বত্য চট্টগ্রাম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঢাকা অঞ্চল"
  },
  {
    "id": "q-832",
    "num": "৮৩২",
    "category": "bangladesh_heritage",
    "question": "মঙ্গল শোভাযাত্রা কোন উৎসবের অংশ?",
    "options": [
      "বাংলা নববর্ষ",
      "ঈদুল ফিতর",
      "বড়দিন",
      "বুদ্ধপূর্ণিমা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাংলা নববর্ষ"
  },
  {
    "id": "q-833",
    "num": "৮৩৩",
    "category": "bangladesh_heritage",
    "question": "মঙ্গল শোভাযাত্রা UNESCO-এর কোন তালিকায় অন্তর্ভুক্ত?",
    "options": [
      "অমূর্ত সাংস্কৃতিক ঐতিহ্য",
      "বিশ্ব প্রাকৃতিক ঐতিহ্য",
      "সামরিক ঐতিহ্য",
      "মহাকাশ ঐতিহ্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অমূর্ত সাংস্কৃতিক ঐতিহ্য"
  },
  {
    "id": "q-834",
    "num": "৮৩৪",
    "category": "bangladesh_heritage",
    "question": "পহেলা বৈশাখে কোন খাবারটি জনপ্রিয়?",
    "options": [
      "পান্তা-ইলিশ",
      "পিৎজা",
      "বার্গার",
      "পাস্তা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পান্তা-ইলিশ"
  },
  {
    "id": "q-835",
    "num": "৮৩৫",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের ঐতিহ্যবাহী নৌকাবাইচে কী ব্যবহার করা হয়?",
    "options": [
      "নৌকা",
      "বিমান",
      "রেলগাড়ি",
      "সাইকেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নৌকা"
  },
  {
    "id": "q-836",
    "num": "৮৩৬",
    "category": "bangladesh_heritage",
    "question": "ভাওয়াইয়া গান বাংলাদেশের কোন অঞ্চলে বেশি প্রচলিত?",
    "options": [
      "উত্তরবঙ্গ",
      "দক্ষিণ-পূর্ব পাহাড়",
      "সুন্দরবন অঞ্চল",
      "ঢাকা শহর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উত্তরবঙ্গ"
  },
  {
    "id": "q-837",
    "num": "৮৩৭",
    "category": "bangladesh_heritage",
    "question": "ভাটিয়ালি গান সাধারণত কোন পরিবেশের সঙ্গে সম্পর্কিত?",
    "options": [
      "নদী ও মাঝির জীবন",
      "মরুভূমি",
      "পাহাড়ি যুদ্ধ",
      "শহুরে যানজট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নদী ও মাঝির জীবন"
  },
  {
    "id": "q-838",
    "num": "৮৩৮",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় জাদুঘর কোন এলাকায়?",
    "options": [
      "শাহবাগ",
      "উত্তরা",
      "সাভার",
      "গুলশান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শাহবাগ"
  },
  {
    "id": "q-839",
    "num": "৮৩৯",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের সবচেয়ে পরিচিত প্রত্নতাত্ত্বিক বৌদ্ধবিহার কোনটি?",
    "options": [
      "সোমপুর মহাবিহার",
      "লালবাগ কেল্লা",
      "আহসান মঞ্জিল",
      "কার্জন হল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সোমপুর মহাবিহার"
  },
  {
    "id": "q-840",
    "num": "৮৪০",
    "category": "bangladesh_heritage",
    "question": "সোমপুর মহাবিহার কোন নামে বেশি পরিচিত?",
    "options": [
      "পাহাড়পুর বৌদ্ধবিহার",
      "ষাট গম্বুজ মসজিদ",
      "ময়নামতি জাদুঘর",
      "মহাস্থানগড়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাহাড়পুর বৌদ্ধবিহার"
  },
  {
    "id": "q-841",
    "num": "৮৪১",
    "category": "bangladesh_heritage",
    "question": "মহাস্থানগড় কোন জেলায় অবস্থিত?",
    "options": [
      "বগুড়া",
      "কুমিল্লা",
      "খুলনা",
      "সিলেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বগুড়া"
  },
  {
    "id": "q-842",
    "num": "৮৪২",
    "category": "bangladesh_heritage",
    "question": "ময়নামতি প্রত্নতাত্ত্বিক স্থান কোন জেলায়?",
    "options": [
      "কুমিল্লা",
      "নওগাঁ",
      "বাগেরহাট",
      "দিনাজপুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কুমিল্লা"
  },
  {
    "id": "q-843",
    "num": "৮৪৩",
    "category": "bangladesh_heritage",
    "question": "কান্তজিউ মন্দির কোথায় অবস্থিত?",
    "options": [
      "দিনাজপুর",
      "রাজশাহী",
      "ঢাকা",
      "সিলেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দিনাজপুর"
  },
  {
    "id": "q-844",
    "num": "৮৪৪",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের ঐতিহ্যবাহী মৃৎশিল্পে কোন উপাদান প্রধানত ব্যবহৃত হয়?",
    "options": [
      "মাটি",
      "প্লাস্টিক",
      "কাচ",
      "অ্যালুমিনিয়াম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাটি"
  },
  {
    "id": "q-845",
    "num": "৮৪৫",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের প্রাচীনতম নগর প্রত্নস্থলগুলোর একটি মহাস্থানগড়ের প্রাচীন নাম কী?",
    "options": [
      "পুণ্ড্রনগর",
      "তাম্রলিপ্ত",
      "তক্ষশীলা",
      "পাটলিপুত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পুণ্ড্রনগর"
  },
  {
    "id": "q-846",
    "num": "৮৪৬",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় উদ্যান ভাওয়াল কোথায় অবস্থিত?",
    "options": [
      "গাজীপুর",
      "খুলনা",
      "সিলেট",
      "বরিশাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গাজীপুর"
  },
  {
    "id": "q-847",
    "num": "৮৪৭",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের ক্ষুদ্র নৃগোষ্ঠীর ঐতিহ্যবাহী পোশাক বোনা হয় কোন কাজে?",
    "options": [
      "তাঁতশিল্পে",
      "লৌহশিল্পে",
      "কাগজশিল্পে",
      "পাথরশিল্পে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তাঁতশিল্পে"
  },
  {
    "id": "q-848",
    "num": "৮৪৮",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের জাতীয় ফল কাঁঠাল কী ধরনের খাদ্য?",
    "options": [
      "ফল",
      "শস্য",
      "ডাল",
      "মসলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফল"
  },
  {
    "id": "q-849",
    "num": "৮৪৯",
    "category": "bangladesh_heritage",
    "question": "ঢাকা বিশ্ববিদ্যালয় প্রতিষ্ঠিত হয় কত সালে?",
    "options": [
      "১৯০৫",
      "১৯২১",
      "১৯৪৭",
      "১৯৫২"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯২১"
  },
  {
    "id": "q-850",
    "num": "৮৫০",
    "category": "bangladesh_heritage",
    "question": "বাংলাদেশের প্রথম নারী প্রধানমন্ত্রী কে ছিলেন?",
    "options": [
      "শেখ হাসিনা",
      "খালেদা জিয়া",
      "বেগম সুফিয়া কামাল",
      "ইলা মিত্র"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) খালেদা জিয়া"
  },
  {
    "id": "q-851",
    "num": "৮৫১",
    "category": "inventions",
    "question": "টেলিফোন আবিষ্কারের সঙ্গে কার নাম জড়িত?",
    "options": [
      "আলেকজান্ডার গ্রাহাম বেল",
      "নিউটন",
      "এডিসন",
      "আইনস্টাইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলেকজান্ডার গ্রাহাম বেল"
  },
  {
    "id": "q-852",
    "num": "৮৫২",
    "category": "inventions",
    "question": "ব্যবহারিক বৈদ্যুতিক বাতির উন্নয়নে কে বিখ্যাত?",
    "options": [
      "টমাস এডিসন",
      "চার্লস ডারউইন",
      "গ্যালিলিও",
      "পাস্তুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টমাস এডিসন"
  },
  {
    "id": "q-853",
    "num": "৮৫৩",
    "category": "inventions",
    "question": "প্রথম সফল বিমান উড্ডয়নের সঙ্গে কারা জড়িত?",
    "options": [
      "রাইট ভ্রাতৃদ্বয়",
      "বেল ভ্রাতৃদ্বয়",
      "কুরি দম্পতি",
      "নিউটন ও আইনস্টাইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাইট ভ্রাতৃদ্বয়"
  },
  {
    "id": "q-854",
    "num": "৮৫৪",
    "category": "inventions",
    "question": "বাষ্পীয় ইঞ্জিনের উন্নয়নে কে বিখ্যাত?",
    "options": [
      "জেমস ওয়াট",
      "মাইকেল ফ্যারাডে",
      "গ্রাহাম বেল",
      "লুই পাস্তুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জেমস ওয়াট"
  },
  {
    "id": "q-855",
    "num": "৮৫৫",
    "category": "inventions",
    "question": "পেনিসিলিন আবিষ্কার করেন কে?",
    "options": [
      "আলেকজান্ডার ফ্লেমিং",
      "নিউটন",
      "ডারউইন",
      "মেন্ডেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলেকজান্ডার ফ্লেমিং"
  },
  {
    "id": "q-856",
    "num": "৮৫৬",
    "category": "inventions",
    "question": "এক্স-রে আবিষ্কার করেন কে?",
    "options": [
      "উইলহেল্ম কনরাড রন্টজেন",
      "মেরি কুরি",
      "নিকোলা টেসলা",
      "জেমস ওয়াট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উইলহেল্ম কনরাড রন্টজেন"
  },
  {
    "id": "q-857",
    "num": "৮৫৭",
    "category": "inventions",
    "question": "রেডিওঅ্যাকটিভিটির আবিষ্কারের সঙ্গে কার নাম জড়িত?",
    "options": [
      "অঁরি বেকেরেল",
      "নিউটন",
      "এডিসন",
      "মার্কনি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অঁরি বেকেরেল"
  },
  {
    "id": "q-858",
    "num": "৮৫৮",
    "category": "inventions",
    "question": "রেডিও যোগাযোগের উন্নয়নে কে বিখ্যাত?",
    "options": [
      "গুলিয়েলমো মার্কনি",
      "লুই পাস্তুর",
      "জোহানেস গুটেনবার্গ",
      "চার্লস ব্যাবেজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গুলিয়েলমো মার্কনি"
  },
  {
    "id": "q-859",
    "num": "৮৫৯",
    "category": "inventions",
    "question": "আধুনিক কম্পিউটারের ধারণার পথিকৃৎ কে?",
    "options": [
      "চার্লস ব্যাবেজ",
      "টমাস এডিসন",
      "নিউটন",
      "রাইট ভ্রাতৃদ্বয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চার্লস ব্যাবেজ"
  },
  {
    "id": "q-860",
    "num": "৮৬০",
    "category": "inventions",
    "question": "কম্পিউটার প্রোগ্রামিংয়ের প্রথম দিকের পথিকৃৎ হিসেবে কে পরিচিত?",
    "options": [
      "অ্যাডা লাভলেস",
      "মেরি কুরি",
      "রোজালিন্ড ফ্র্যাঙ্কলিন",
      "জেন গুডল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যাডা লাভলেস"
  },
  {
    "id": "q-861",
    "num": "৮৬১",
    "category": "inventions",
    "question": "বিশ্বব্যাপী ওয়েবের উদ্ভাবক কে?",
    "options": [
      "টিম বার্নার্স-লি",
      "বিল গেটস",
      "স্টিভ জবস",
      "মার্ক জাকারবার্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টিম বার্নার্স-লি"
  },
  {
    "id": "q-862",
    "num": "৮৬২",
    "category": "inventions",
    "question": "প্রথম দিকের সফল প্রোগ্রামযোগ্য সাধারণ কম্পিউটারগুলোর একটি ENIAC কোথায় তৈরি হয়েছিল?",
    "options": [
      "যুক্তরাষ্ট্র",
      "জাপান",
      "ভারত",
      "মিশর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যুক্তরাষ্ট্র"
  },
  {
    "id": "q-863",
    "num": "৮৬৩",
    "category": "inventions",
    "question": "মুদ্রণযন্ত্রের উন্নত আবিষ্কারের সঙ্গে কার নাম জড়িত?",
    "options": [
      "গুটেনবার্গ",
      "নিউটন",
      "গ্যালিলিও",
      "ডারউইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গুটেনবার্গ"
  },
  {
    "id": "q-864",
    "num": "৮৬৪",
    "category": "inventions",
    "question": "স্টেথোস্কোপ আবিষ্কার করেন কে?",
    "options": [
      "রেনে লেনেক",
      "ফ্লেমিং",
      "পাস্তুর",
      "রন্টজেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রেনে লেনেক"
  },
  {
    "id": "q-865",
    "num": "৮৬৫",
    "category": "inventions",
    "question": "আধুনিক টিকাদানের সূচনার সঙ্গে কোন চিকিৎসকের নাম জড়িত?",
    "options": [
      "এডওয়ার্ড জেনার",
      "নিউটন",
      "আইনস্টাইন",
      "ফ্যারাডে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এডওয়ার্ড জেনার"
  },
  {
    "id": "q-866",
    "num": "৮৬৬",
    "category": "inventions",
    "question": "জলাতঙ্কের টিকা তৈরির সঙ্গে কার নাম জড়িত?",
    "options": [
      "লুই পাস্তুর",
      "মেন্ডেল",
      "গ্যালিলিও",
      "ওয়াট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লুই পাস্তুর"
  },
  {
    "id": "q-867",
    "num": "৮৬৭",
    "category": "inventions",
    "question": "ম্যালেরিয়ার পরজীবী আবিষ্কারের সঙ্গে কোন বিজ্ঞানীর নাম জড়িত?",
    "options": [
      "রোনাল্ড রস",
      "নিউটন",
      "বেল",
      "এডিসন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রোনাল্ড রস"
  },
  {
    "id": "q-868",
    "num": "৮৬৮",
    "category": "inventions",
    "question": "ইনসুলিন আবিষ্কারের সঙ্গে কোন বিজ্ঞানীরা বিশেষভাবে যুক্ত?",
    "options": [
      "ব্যান্টিং ও বেস্ট",
      "রাইট ও রাইট",
      "বেল ও এডিসন",
      "নিউটন ও ওয়াট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যান্টিং ও বেস্ট"
  },
  {
    "id": "q-869",
    "num": "৮৬৯",
    "category": "inventions",
    "question": "DNA-এর দ্বি-হেলিক্স গঠন ব্যাখ্যার সঙ্গে কারা বিখ্যাত?",
    "options": [
      "ওয়াটসন ও ক্রিক",
      "নিউটন ও গ্যালিলিও",
      "মেন্ডেল ও ডারউইন",
      "এডিসন ও বেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ওয়াটসন ও ক্রিক"
  },
  {
    "id": "q-870",
    "num": "৮৭০",
    "category": "inventions",
    "question": "মহাকর্ষের সূত্র প্রণয়ন করেন কে?",
    "options": [
      "আইজ্যাক নিউটন",
      "আলবার্ট আইনস্টাইন",
      "গ্যালিলিও",
      "ডারউইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আইজ্যাক নিউটন"
  },
  {
    "id": "q-871",
    "num": "৮৭১",
    "category": "inventions",
    "question": "আপেক্ষিকতার বিশেষ তত্ত্ব দেন কে?",
    "options": [
      "আলবার্ট আইনস্টাইন",
      "নিউটন",
      "গ্যালিলিও",
      "পিথাগোরাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলবার্ট আইনস্টাইন"
  },
  {
    "id": "q-872",
    "num": "৮৭২",
    "category": "inventions",
    "question": "টেলিভিশনের প্রাথমিক উদ্ভাবনে কে বিশেষভাবে পরিচিত?",
    "options": [
      "জন লোগি বেয়ার্ড",
      "জেমস ওয়াট",
      "লুই পাস্তুর",
      "মেন্ডেল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জন লোগি বেয়ার্ড"
  },
  {
    "id": "q-873",
    "num": "৮৭৩",
    "category": "inventions",
    "question": "ফটোগ্রাফির প্রাথমিক স্থায়ী ছবির সঙ্গে কার নাম জড়িত?",
    "options": [
      "নিসেফোর নিয়েপস",
      "এডিসন",
      "মার্কনি",
      "ফ্যারাডে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিসেফোর নিয়েপস"
  },
  {
    "id": "q-874",
    "num": "৮৭৪",
    "category": "inventions",
    "question": "যান্ত্রিক উড়োজাহাজের প্রথম সফল উড্ডয়ন কোন সালে হয়?",
    "options": [
      "১৮৯৯",
      "১৯০৩",
      "১৯১৪",
      "১৯২০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯০৩"
  },
  {
    "id": "q-875",
    "num": "৮৭৫",
    "category": "inventions",
    "question": "রেফ্রিজারেটরের মূল কাজ কী?",
    "options": [
      "খাবার ঠান্ডা রেখে সংরক্ষণ",
      "খাবার পোড়ানো",
      "পানি বিশুদ্ধ করা মাত্র",
      "শব্দ তৈরি করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) খাবার ঠান্ডা রেখে সংরক্ষণ"
  },
  {
    "id": "q-876",
    "num": "৮৭৬",
    "category": "inventions",
    "question": "মাইক্রোস্কোপ কী কাজে ব্যবহৃত হয়?",
    "options": [
      "ক্ষুদ্র বস্তু বড় করে দেখতে",
      "দূরের নক্ষত্র দেখতে",
      "শব্দ বাড়াতে",
      "তাপ মাপতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্ষুদ্র বস্তু বড় করে দেখতে"
  },
  {
    "id": "q-877",
    "num": "৮৭৭",
    "category": "inventions",
    "question": "টেলিস্কোপ কী কাজে ব্যবহৃত হয়?",
    "options": [
      "দূরের বস্তু দেখতে",
      "ক্ষুদ্র কোষ দেখতে",
      "ওজন মাপতে",
      "বিদ্যুৎ মাপতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দূরের বস্তু দেখতে"
  },
  {
    "id": "q-878",
    "num": "৮৭৮",
    "category": "inventions",
    "question": "বারকোড রিডার কী কাজে লাগে?",
    "options": [
      "পণ্যের বারকোড পড়তে",
      "রক্ত পরীক্ষা করতে",
      "রান্না করতে",
      "শব্দ রেকর্ড করতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পণ্যের বারকোড পড়তে"
  },
  {
    "id": "q-879",
    "num": "৮৭৯",
    "category": "inventions",
    "question": "লেজার শব্দের সঙ্গে কোন ধারণা যুক্ত?",
    "options": [
      "আলোর উদ্দীপিত নির্গমন",
      "শব্দের প্রতিফলন",
      "পানির বাষ্পীভবন",
      "তাপের পরিবহন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলোর উদ্দীপিত নির্গমন"
  },
  {
    "id": "q-880",
    "num": "৮৮০",
    "category": "inventions",
    "question": "আধুনিক ব্যাটারির উন্নয়নে আলেসান্দ্রো ভোল্টা কী আবিষ্কার করেছিলেন?",
    "options": [
      "ভোল্টাইক পাইল",
      "টেলিফোন",
      "রেডিও",
      "বিমান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভোল্টাইক পাইল"
  },
  {
    "id": "q-881",
    "num": "৮৮১",
    "category": "inventions",
    "question": "ইলেক্ট্রোম্যাগনেটিক ইন্ডাকশনের আবিষ্কারের সঙ্গে কার নাম জড়িত?",
    "options": [
      "মাইকেল ফ্যারাডে",
      "নিউটন",
      "ডারউইন",
      "গুটেনবার্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাইকেল ফ্যারাডে"
  },
  {
    "id": "q-882",
    "num": "৮৮২",
    "category": "inventions",
    "question": "বিকল্প বিদ্যুৎ ব্যবস্থার উন্নয়নে কে বিশেষভাবে পরিচিত?",
    "options": [
      "নিকোলা টেসলা",
      "গ্যালিলিও",
      "রন্টজেন",
      "লুই পাস্তুর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিকোলা টেসলা"
  },
  {
    "id": "q-883",
    "num": "৮৮৩",
    "category": "inventions",
    "question": "নিরাপদ লিফট ব্যবস্থার উন্নয়নে কে বিখ্যাত?",
    "options": [
      "এলিশা ওটিস",
      "এডিসন",
      "ওয়াট",
      "মার্কনি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এলিশা ওটিস"
  },
  {
    "id": "q-884",
    "num": "৮৮৪",
    "category": "inventions",
    "question": "সেলাই মেশিনের সফল বাণিজ্যিক সংস্করণের সঙ্গে কার নাম জড়িত?",
    "options": [
      "আইজ্যাক সিঙ্গার",
      "চার্লস ব্যাবেজ",
      "টিম বার্নার্স-লি",
      "নিউটন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আইজ্যাক সিঙ্গার"
  },
  {
    "id": "q-885",
    "num": "৮৮৫",
    "category": "inventions",
    "question": "ডিজেল ইঞ্জিনের উদ্ভাবক কে?",
    "options": [
      "রুডলফ ডিজেল",
      "জেমস ওয়াট",
      "কার্ল বেঞ্জ",
      "নিকোলা টেসলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রুডলফ ডিজেল"
  },
  {
    "id": "q-886",
    "num": "৮৮৬",
    "category": "inventions",
    "question": "অটোমোবাইলের প্রাথমিক পেট্রোলচালিত গাড়ির সঙ্গে কার নাম জড়িত?",
    "options": [
      "কার্ল বেঞ্জ",
      "রাইট ভ্রাতৃদ্বয়",
      "মার্কনি",
      "ফ্যারাডে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কার্ল বেঞ্জ"
  },
  {
    "id": "q-887",
    "num": "৮৮৭",
    "category": "inventions",
    "question": "আধুনিক মোটরগাড়ির উন্নয়নে হেনরি ফোর্ড কী কারণে বিখ্যাত?",
    "options": [
      "অ্যাসেম্বলি লাইন উৎপাদন",
      "টেলিফোন",
      "রেডিও",
      "টেলিস্কোপ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যাসেম্বলি লাইন উৎপাদন"
  },
  {
    "id": "q-888",
    "num": "৮৮৮",
    "category": "inventions",
    "question": "পেসমেকার কী কাজে ব্যবহৃত হয়?",
    "options": [
      "হৃদস্পন্দন নিয়ন্ত্রণে সহায়তা",
      "চোখের দৃষ্টি বাড়াতে",
      "দাঁত পরিষ্কার করতে",
      "শ্রবণ বাড়াতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হৃদস্পন্দন নিয়ন্ত্রণে সহায়তা"
  },
  {
    "id": "q-889",
    "num": "৮৮৯",
    "category": "inventions",
    "question": "আল্ট্রাসাউন্ড কী ধরনের তরঙ্গ ব্যবহার করে?",
    "options": [
      "উচ্চ কম্পাঙ্কের শব্দতরঙ্গ",
      "রেডিও তরঙ্গ",
      "দৃশ্যমান আলো",
      "এক্স-রে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উচ্চ কম্পাঙ্কের শব্দতরঙ্গ"
  },
  {
    "id": "q-890",
    "num": "৮৯০",
    "category": "inventions",
    "question": "MRI-এর পূর্ণরূপ কী?",
    "options": [
      "Magnetic Resonance Imaging",
      "Medical Radio Input",
      "Machine Reading Instrument",
      "Magnetic Radiation Index"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Magnetic Resonance Imaging"
  },
  {
    "id": "q-891",
    "num": "৮৯১",
    "category": "inventions",
    "question": "CT Scan-এর পূর্ণরূপ কী?",
    "options": [
      "Computed Tomography",
      "Computer Test",
      "Chemical Therapy",
      "Central Treatment"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Computed Tomography"
  },
  {
    "id": "q-892",
    "num": "৮৯২",
    "category": "inventions",
    "question": "GPS প্রযুক্তির পূর্ণরূপ কী?",
    "options": [
      "Global Positioning System",
      "General Power Service",
      "Global Printing Software",
      "Geographic Program System"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Global Positioning System"
  },
  {
    "id": "q-893",
    "num": "৮৯৩",
    "category": "inventions",
    "question": "USB ফ্ল্যাশ ড্রাইভ কী কাজে ব্যবহার হয়?",
    "options": [
      "তথ্য সংরক্ষণ ও স্থানান্তর",
      "ছবি সরাসরি ছাপানো",
      "বিদ্যুৎ তৈরি",
      "কাগজ কাটতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য সংরক্ষণ ও স্থানান্তর"
  },
  {
    "id": "q-894",
    "num": "৮৯৪",
    "category": "inventions",
    "question": "3D প্রিন্টিং কী করে?",
    "options": [
      "স্তর ধরে ত্রিমাত্রিক বস্তু তৈরি করে",
      "শুধু কাগজে লেখা ছাপে",
      "শব্দ রেকর্ড করে",
      "পানির চাপ মাপে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্তর ধরে ত্রিমাত্রিক বস্তু তৈরি করে"
  },
  {
    "id": "q-895",
    "num": "৮৯৫",
    "category": "inventions",
    "question": "সেমিকন্ডাক্টর কোন প্রযুক্তিতে অত্যন্ত গুরুত্বপূর্ণ?",
    "options": [
      "কম্পিউটার চিপ",
      "কাগজ তৈরি",
      "কাঠ কাটা",
      "কাপড় বোনা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কম্পিউটার চিপ"
  },
  {
    "id": "q-896",
    "num": "৮৯৬",
    "category": "inventions",
    "question": "ট্রানজিস্টরের প্রধান কাজ কী?",
    "options": [
      "বৈদ্যুতিক সংকেত নিয়ন্ত্রণ ও পরিবর্ধন",
      "পানি সংরক্ষণ",
      "তাপমাত্রা মাপা",
      "কাগজ ছাপা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৈদ্যুতিক সংকেত নিয়ন্ত্রণ ও পরিবর্ধন"
  },
  {
    "id": "q-897",
    "num": "৮৯৭",
    "category": "inventions",
    "question": "সৌরকোষ কোন শক্তিকে সরাসরি বিদ্যুতে রূপান্তর করে?",
    "options": [
      "আলোশক্তি",
      "শব্দশক্তি",
      "গতিশক্তি",
      "রাসায়নিক শক্তি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলোশক্তি"
  },
  {
    "id": "q-898",
    "num": "৮৯৮",
    "category": "inventions",
    "question": "রাডার কী কাজে ব্যবহৃত হয়?",
    "options": [
      "দূরের বস্তু শনাক্ত করতে",
      "রক্তের গ্রুপ দেখতে",
      "মাটি চাষ করতে",
      "বই ছাপতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দূরের বস্তু শনাক্ত করতে"
  },
  {
    "id": "q-899",
    "num": "৮৯৯",
    "category": "inventions",
    "question": "স্যাটেলাইট যোগাযোগে কোন ধরনের তরঙ্গ ব্যবহৃত হয়?",
    "options": [
      "রেডিও তরঙ্গ",
      "পানির ঢেউ",
      "শব্দতরঙ্গ",
      "ভূমিকম্পের তরঙ্গ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রেডিও তরঙ্গ"
  },
  {
    "id": "q-900",
    "num": "৯০০",
    "category": "inventions",
    "question": "কৃত্রিম বুদ্ধিমত্তার একটি ব্যবহার কোনটি?",
    "options": [
      "ভাষা অনুবাদ",
      "পাথর জন্মানো",
      "সূর্য থামানো",
      "সমুদ্র শুকানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভাষা অনুবাদ"
  },
  {
    "id": "q-901",
    "num": "৯০১",
    "category": "nutrition_medical",
    "question": "মানুষের শরীরের রোগ প্রতিরোধব্যবস্থার গুরুত্বপূর্ণ অঙ্গ কোনটি?",
    "options": [
      "প্লীহা",
      "নখ",
      "চুল",
      "দাঁত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্লীহা"
  },
  {
    "id": "q-902",
    "num": "৯০২",
    "category": "nutrition_medical",
    "question": "রক্তের গ্রুপ আবিষ্কার করেন কে?",
    "options": [
      "কার্ল ল্যান্ডস্টাইনার",
      "লুই পাস্তুর",
      "আলেকজান্ডার ফ্লেমিং",
      "এডওয়ার্ড জেনার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কার্ল ল্যান্ডস্টাইনার"
  },
  {
    "id": "q-903",
    "num": "৯০৩",
    "category": "nutrition_medical",
    "question": "ABO রক্তের গ্রুপ পদ্ধতিতে কয়টি প্রধান গ্রুপ রয়েছে?",
    "options": [
      "২টি",
      "৩টি",
      "৪টি",
      "৫টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪টি"
  },
  {
    "id": "q-904",
    "num": "৯০৪",
    "category": "nutrition_medical",
    "question": "মানবদেহে হাড় ও পেশিকে সংযুক্ত করে কী?",
    "options": [
      "টেন্ডন",
      "লিগামেন্ট",
      "স্নায়ু",
      "রক্তনালি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টেন্ডন"
  },
  {
    "id": "q-905",
    "num": "৯০৫",
    "category": "nutrition_medical",
    "question": "দুটি হাড়কে সংযুক্ত করে কোনটি?",
    "options": [
      "টেন্ডন",
      "লিগামেন্ট",
      "পেশি",
      "ত্বক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) লিগামেন্ট"
  },
  {
    "id": "q-906",
    "num": "৯০৬",
    "category": "nutrition_medical",
    "question": "মানুষের শরীরের সবচেয়ে বড় গ্রন্থি কোনটি?",
    "options": [
      "থাইরয়েড",
      "যকৃৎ",
      "পিটুইটারি",
      "অগ্ন্যাশয়"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) যকৃৎ"
  },
  {
    "id": "q-907",
    "num": "৯০৭",
    "category": "nutrition_medical",
    "question": "শরীরের প্রধান বিপাকীয় নিয়ন্ত্রণে কোন গ্রন্থির হরমোন গুরুত্বপূর্ণ?",
    "options": [
      "থাইরয়েড",
      "অশ্রুগ্রন্থি",
      "লালাগ্রন্থি",
      "ঘর্মগ্রন্থি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) থাইরয়েড"
  },
  {
    "id": "q-908",
    "num": "৯০৮",
    "category": "nutrition_medical",
    "question": "শরীরের ‘মাস্টার গ্রন্থি’ বলা হয় কোনটিকে?",
    "options": [
      "পিটুইটারি",
      "অগ্ন্যাশয়",
      "ঘর্মগ্রন্থি",
      "লালাগ্রন্থি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিটুইটারি"
  },
  {
    "id": "q-909",
    "num": "৯০৯",
    "category": "nutrition_medical",
    "question": "হজমে পিত্তরস কোথায় তৈরি হয়?",
    "options": [
      "পাকস্থলী",
      "যকৃৎ",
      "কিডনি",
      "ফুসফুস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) যকৃৎ"
  },
  {
    "id": "q-910",
    "num": "৯১০",
    "category": "nutrition_medical",
    "question": "পিত্তরস কোথায় জমা থাকে?",
    "options": [
      "পিত্তথলি",
      "হৃদপিণ্ড",
      "মূত্রথলি",
      "ফুসফুস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিত্তথলি"
  },
  {
    "id": "q-911",
    "num": "৯১১",
    "category": "nutrition_medical",
    "question": "খাবারের অধিকাংশ পুষ্টি উপাদান শোষিত হয় কোথায়?",
    "options": [
      "ক্ষুদ্রান্ত্র",
      "পাকস্থলী",
      "বৃহদান্ত্র",
      "খাদ্যনালি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্ষুদ্রান্ত্র"
  },
  {
    "id": "q-912",
    "num": "৯১২",
    "category": "nutrition_medical",
    "question": "মানুষের শরীরে প্রস্রাব জমা থাকে কোন অঙ্গে?",
    "options": [
      "কিডনি",
      "মূত্রথলি",
      "যকৃৎ",
      "প্লীহা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মূত্রথলি"
  },
  {
    "id": "q-913",
    "num": "৯১৩",
    "category": "nutrition_medical",
    "question": "শরীরে ইনসুলিনের অভাবে কোন রোগ হতে পারে?",
    "options": [
      "ডায়াবেটিস",
      "রাতকানা",
      "স্কার্ভি",
      "রিকেটস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডায়াবেটিস"
  },
  {
    "id": "q-914",
    "num": "৯১৪",
    "category": "nutrition_medical",
    "question": "আয়োডিনের অভাবে কোন সমস্যা হতে পারে?",
    "options": [
      "গলগণ্ড",
      "রাতকানা",
      "স্কার্ভি",
      "রক্ত জমাট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গলগণ্ড"
  },
  {
    "id": "q-915",
    "num": "৯১৫",
    "category": "nutrition_medical",
    "question": "ভিটামিন C-এর অভাবে কোন রোগ হয়?",
    "options": [
      "স্কার্ভি",
      "রিকেটস",
      "বেরিবেরি",
      "রাতকানা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্কার্ভি"
  },
  {
    "id": "q-916",
    "num": "৯১৬",
    "category": "nutrition_medical",
    "question": "ভিটামিন D-এর অভাবে শিশুদের কোন রোগ হতে পারে?",
    "options": [
      "রিকেটস",
      "স্কার্ভি",
      "রাতকানা",
      "বেরিবেরি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রিকেটস"
  },
  {
    "id": "q-917",
    "num": "৯১৭",
    "category": "nutrition_medical",
    "question": "ভিটামিন B₁-এর অভাবে কোন রোগ হতে পারে?",
    "options": [
      "বেরিবেরি",
      "স্কার্ভি",
      "রাতকানা",
      "রিকেটস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বেরিবেরি"
  },
  {
    "id": "q-918",
    "num": "৯১৮",
    "category": "nutrition_medical",
    "question": "ভিটামিন K কী কাজে গুরুত্বপূর্ণ?",
    "options": [
      "রক্ত জমাট বাঁধায়",
      "চোখের রং তৈরিতে",
      "শ্রবণশক্তিতে",
      "চুলের রং তৈরিতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রক্ত জমাট বাঁধায়"
  },
  {
    "id": "q-919",
    "num": "৯১৯",
    "category": "nutrition_medical",
    "question": "রক্তস্বল্পতা বা অ্যানিমিয়ার একটি সাধারণ কারণ কী?",
    "options": [
      "আয়রনের অভাব",
      "অতিরিক্ত ক্যালসিয়াম",
      "অতিরিক্ত পানি",
      "অতিরিক্ত অক্সিজেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আয়রনের অভাব"
  },
  {
    "id": "q-920",
    "num": "৯২০",
    "category": "nutrition_medical",
    "question": "হিমোগ্লোবিনে কোন ধাতু থাকে?",
    "options": [
      "লোহা",
      "সোনা",
      "রুপা",
      "তামা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লোহা"
  },
  {
    "id": "q-921",
    "num": "৯২১",
    "category": "nutrition_medical",
    "question": "কলেরার জীবাণু কী?",
    "options": [
      "Vibrio cholerae",
      "Plasmodium",
      "HIV",
      "Influenza virus"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Vibrio cholerae"
  },
  {
    "id": "q-922",
    "num": "৯২২",
    "category": "nutrition_medical",
    "question": "যক্ষ্মা রোগের জীবাণু কী?",
    "options": [
      "Mycobacterium tuberculosis",
      "Vibrio cholerae",
      "Salmonella",
      "Rhinovirus"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Mycobacterium tuberculosis"
  },
  {
    "id": "q-923",
    "num": "৯২৩",
    "category": "nutrition_medical",
    "question": "ম্যালেরিয়া রোগের জীবাণু কোনটি?",
    "options": [
      "প্লাজমোডিয়াম",
      "ব্যাকটেরিয়া",
      "ছত্রাক",
      "শৈবাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্লাজমোডিয়াম"
  },
  {
    "id": "q-924",
    "num": "৯২৪",
    "category": "nutrition_medical",
    "question": "ম্যালেরিয়া কোন মশার মাধ্যমে ছড়ায়?",
    "options": [
      "স্ত্রী অ্যানোফিলিস",
      "এডিস",
      "কিউলেক্স",
      "সব মাছি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্ত্রী অ্যানোফিলিস"
  },
  {
    "id": "q-925",
    "num": "৯২৫",
    "category": "nutrition_medical",
    "question": "হাম কোন ধরনের রোগ?",
    "options": [
      "ভাইরাসজনিত",
      "শুধু পুষ্টির অভাবজনিত",
      "হাড়ের রোগ",
      "দাঁতের রোগ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভাইরাসজনিত"
  },
  {
    "id": "q-926",
    "num": "৯২৬",
    "category": "nutrition_medical",
    "question": "জলাতঙ্ক সাধারণত কোন প্রাণীর কামড়ে ছড়াতে পারে?",
    "options": [
      "সংক্রমিত কুকুর",
      "প্রজাপতি",
      "প্রজাপতির শুঁয়োপোকা",
      "মাছ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংক্রমিত কুকুর"
  },
  {
    "id": "q-927",
    "num": "৯২৭",
    "category": "nutrition_medical",
    "question": "টিটেনাস রোগের জীবাণু সাধারণত কী ধরনের?",
    "options": [
      "ব্যাকটেরিয়া",
      "ভাইরাস",
      "শৈবাল",
      "কৃমি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাকটেরিয়া"
  },
  {
    "id": "q-928",
    "num": "৯২৮",
    "category": "nutrition_medical",
    "question": "অ্যান্টিবায়োটিক ব্যবহারে কোন নিয়মটি গুরুত্বপূর্ণ?",
    "options": [
      "চিকিৎসকের নির্দেশ মেনে চলা",
      "ইচ্ছামতো খাওয়া",
      "অন্যের ওষুধ নেওয়া",
      "ভালো লাগলে যেকোনো সময় বন্ধ করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চিকিৎসকের নির্দেশ মেনে চলা"
  },
  {
    "id": "q-929",
    "num": "৯২৯",
    "category": "nutrition_medical",
    "question": "টিকা দেওয়ার প্রধান উদ্দেশ্য কী?",
    "options": [
      "রোগ প্রতিরোধে শরীরকে প্রস্তুত করা",
      "উচ্চতা বাড়ানো",
      "চুল কালো করা",
      "ক্ষুধা বন্ধ করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রোগ প্রতিরোধে শরীরকে প্রস্তুত করা"
  },
  {
    "id": "q-930",
    "num": "৯৩০",
    "category": "nutrition_medical",
    "question": "রক্তচাপ মাপার যন্ত্রের নাম কী?",
    "options": [
      "স্ফিগমোম্যানোমিটার",
      "থার্মোমিটার",
      "স্টেথোস্কোপ",
      "মাইক্রোস্কোপ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্ফিগমোম্যানোমিটার"
  },
  {
    "id": "q-931",
    "num": "৯৩১",
    "category": "nutrition_medical",
    "question": "হৃদপিণ্ডের বৈদ্যুতিক কার্যকলাপ পরীক্ষা করতে কোন পরীক্ষা করা হয়?",
    "options": [
      "ECG",
      "CBC",
      "MRI মাত্র",
      "EEG"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ECG"
  },
  {
    "id": "q-932",
    "num": "৯৩২",
    "category": "nutrition_medical",
    "question": "মস্তিষ্কের বৈদ্যুতিক কার্যকলাপ পরীক্ষা করতে কোন পরীক্ষা ব্যবহৃত হয়?",
    "options": [
      "ECG",
      "EEG",
      "X-ray",
      "CBC"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) EEG"
  },
  {
    "id": "q-933",
    "num": "৯৩৩",
    "category": "nutrition_medical",
    "question": "রক্তের সম্পূর্ণ কোষীয় গণনা পরীক্ষাকে কী বলে?",
    "options": [
      "CBC",
      "ECG",
      "MRI",
      "EEG"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) CBC"
  },
  {
    "id": "q-934",
    "num": "৯৩৪",
    "category": "nutrition_medical",
    "question": "চোখ পরীক্ষা করেন কোন বিশেষজ্ঞ চিকিৎসক?",
    "options": [
      "চক্ষু বিশেষজ্ঞ",
      "হৃদরোগ বিশেষজ্ঞ",
      "চর্মরোগ বিশেষজ্ঞ",
      "দন্ত চিকিৎসক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চক্ষু বিশেষজ্ঞ"
  },
  {
    "id": "q-935",
    "num": "৯৩৫",
    "category": "nutrition_medical",
    "question": "দাঁতের চিকিৎসককে কী বলা হয়?",
    "options": [
      "দন্ত চিকিৎসক",
      "নিউরোলজিস্ট",
      "কার্ডিওলজিস্ট",
      "অর্থোপেডিক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দন্ত চিকিৎসক"
  },
  {
    "id": "q-936",
    "num": "৯৩৬",
    "category": "nutrition_medical",
    "question": "হৃদরোগের চিকিৎসায় বিশেষজ্ঞ চিকিৎসককে কী বলা হয়?",
    "options": [
      "কার্ডিওলজিস্ট",
      "ডার্মাটোলজিস্ট",
      "চক্ষু বিশেষজ্ঞ",
      "দন্ত চিকিৎসক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কার্ডিওলজিস্ট"
  },
  {
    "id": "q-937",
    "num": "৯৩৭",
    "category": "nutrition_medical",
    "question": "ত্বকের রোগের বিশেষজ্ঞ চিকিৎসক কে?",
    "options": [
      "ডার্মাটোলজিস্ট",
      "নিউরোলজিস্ট",
      "কার্ডিওলজিস্ট",
      "পেডিয়াট্রিশিয়ান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডার্মাটোলজিস্ট"
  },
  {
    "id": "q-938",
    "num": "৯৩৮",
    "category": "nutrition_medical",
    "question": "শিশুদের চিকিৎসায় বিশেষজ্ঞ চিকিৎসক কে?",
    "options": [
      "পেডিয়াট্রিশিয়ান",
      "কার্ডিওলজিস্ট",
      "সার্জন",
      "চক্ষু বিশেষজ্ঞ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পেডিয়াট্রিশিয়ান"
  },
  {
    "id": "q-939",
    "num": "৯৩৯",
    "category": "nutrition_medical",
    "question": "হাড় ও জোড়ার চিকিৎসায় কোন বিশেষজ্ঞ কাজ করেন?",
    "options": [
      "অর্থোপেডিক চিকিৎসক",
      "চক্ষু চিকিৎসক",
      "দন্ত চিকিৎসক",
      "চর্মরোগ চিকিৎসক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অর্থোপেডিক চিকিৎসক"
  },
  {
    "id": "q-940",
    "num": "৯৪০",
    "category": "nutrition_medical",
    "question": "শরীরের পানিশূন্যতা হলে কোনটি জরুরি হতে পারে?",
    "options": [
      "উপযুক্ত তরল ও প্রয়োজনে ORS",
      "শুধু মিষ্টি",
      "কোনো পানি নয়",
      "শুধু চা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উপযুক্ত তরল ও প্রয়োজনে ORS"
  },
  {
    "id": "q-941",
    "num": "৯৪১",
    "category": "nutrition_medical",
    "question": "ORS-এর প্রধান ব্যবহার কী?",
    "options": [
      "পানিশূন্যতা পূরণে সহায়তা",
      "হাড়ের দৈর্ঘ্য বাড়ানো",
      "চোখের দৃষ্টি বাড়ানো",
      "দাঁত পরিষ্কার করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানিশূন্যতা পূরণে সহায়তা"
  },
  {
    "id": "q-942",
    "num": "৯৪২",
    "category": "nutrition_medical",
    "question": "সুষম খাদ্য বলতে কী বোঝায়?",
    "options": [
      "প্রয়োজনীয় পুষ্টি উপাদানসমৃদ্ধ খাবার",
      "শুধু ভাত",
      "শুধু ফল",
      "শুধু মিষ্টি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রয়োজনীয় পুষ্টি উপাদানসমৃদ্ধ খাবার"
  },
  {
    "id": "q-943",
    "num": "৯৪৩",
    "category": "nutrition_medical",
    "question": "খাদ্য আঁশ বেশি পাওয়া যায় কোনটিতে?",
    "options": [
      "শাকসবজি ও ফল",
      "বিশুদ্ধ তেল",
      "চিনি",
      "লবণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শাকসবজি ও ফল"
  },
  {
    "id": "q-944",
    "num": "৯৪৪",
    "category": "nutrition_medical",
    "question": "শরীরের জন্য স্বাস্থ্যকর চর্বির উৎস কোনটি?",
    "options": [
      "বাদাম",
      "অতিরিক্ত ভাজাপোড়া",
      "ট্রান্স ফ্যাটসমৃদ্ধ খাবার",
      "অতিরিক্ত চিনি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাদাম"
  },
  {
    "id": "q-945",
    "num": "৯৪৫",
    "category": "nutrition_medical",
    "question": "দেহে পানি কমে গেলে কী হতে পারে?",
    "options": [
      "পানিশূন্যতা",
      "শ্রবণশক্তি বৃদ্ধি",
      "চোখের রং বদল",
      "হাড়ের সংখ্যা বৃদ্ধি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানিশূন্যতা"
  },
  {
    "id": "q-946",
    "num": "৯৪৬",
    "category": "nutrition_medical",
    "question": "শরীরের জন্য ঘুম কেন প্রয়োজন?",
    "options": [
      "বিশ্রাম ও পুনরুদ্ধারের জন্য",
      "স্মৃতি মুছে ফেলার জন্য",
      "খাবার বন্ধ করার জন্য",
      "রক্ত চলাচল বন্ধ করার জন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিশ্রাম ও পুনরুদ্ধারের জন্য"
  },
  {
    "id": "q-947",
    "num": "৯৪৭",
    "category": "nutrition_medical",
    "question": "হাত ধোয়ার ক্ষেত্রে কোনটি সবচেয়ে কার্যকর?",
    "options": [
      "সাবান ও পরিষ্কার পানি",
      "শুধু শুকনো কাপড়",
      "শুধু সুগন্ধি",
      "শুধু ধুলো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাবান ও পরিষ্কার পানি"
  },
  {
    "id": "q-948",
    "num": "৯৪৮",
    "category": "nutrition_medical",
    "question": "নিরাপদ পানির জন্য কোনটি গুরুত্বপূর্ণ?",
    "options": [
      "জীবাণুমুক্ত ও নিরাপদ পানি পান করা",
      "যেকোনো খোলা পানি পান করা",
      "দূষিত পানি পান করা",
      "পানি না পান করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জীবাণুমুক্ত ও নিরাপদ পানি পান করা"
  },
  {
    "id": "q-949",
    "num": "৯৪৯",
    "category": "nutrition_medical",
    "question": "দৃষ্টিশক্তি পরীক্ষা করতে কোন চার্ট প্রচলিত?",
    "options": [
      "স্নেলেন চার্ট",
      "বার চার্ট",
      "পাই চার্ট",
      "ফ্লোচার্ট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্নেলেন চার্ট"
  },
  {
    "id": "q-950",
    "num": "৯৫০",
    "category": "nutrition_medical",
    "question": "প্রাথমিক চিকিৎসা বলতে কী বোঝায়?",
    "options": [
      "জরুরি অবস্থায় তাৎক্ষণিক প্রাথমিক সহায়তা",
      "দীর্ঘমেয়াদি অস্ত্রোপচার",
      "শুধু ওষুধ বিক্রি",
      "রোগের নাম লেখা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জরুরি অবস্থায় তাৎক্ষণিক প্রাথমিক সহায়তা"
  },
  {
    "id": "q-951",
    "num": "৯৫১",
    "category": "environment",
    "question": "পরিবেশের প্রধান উপাদান কোনগুলো?",
    "options": [
      "বায়ু, পানি, মাটি ও জীবজগৎ",
      "শুধু বাড়ি",
      "শুধু রাস্তা",
      "শুধু যানবাহন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বায়ু, পানি, মাটি ও জীবজগৎ"
  },
  {
    "id": "q-952",
    "num": "৯৫২",
    "category": "environment",
    "question": "বৈশ্বিক উষ্ণায়ন বলতে কী বোঝায়?",
    "options": [
      "পৃথিবীর গড় তাপমাত্রা বৃদ্ধি",
      "পৃথিবীর গড় তাপমাত্রা কমা",
      "বৃষ্টির পরিমাণ শূন্য হওয়া",
      "সমুদ্রের পানি মিষ্টি হওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পৃথিবীর গড় তাপমাত্রা বৃদ্ধি"
  },
  {
    "id": "q-953",
    "num": "৯৫৩",
    "category": "environment",
    "question": "গ্রিনহাউস প্রভাবের জন্য গুরুত্বপূর্ণ গ্যাস কোনটি?",
    "options": [
      "কার্বন ডাই-অক্সাইড",
      "হিলিয়াম",
      "নিয়ন",
      "আর্গন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কার্বন ডাই-অক্সাইড"
  },
  {
    "id": "q-954",
    "num": "৯৫৪",
    "category": "environment",
    "question": "মিথেন কোন ধরনের গ্যাস?",
    "options": [
      "গ্রিনহাউস গ্যাস",
      "নিষ্ক্রিয় গ্যাস",
      "বিশুদ্ধ অক্সিজেন",
      "ধাতব গ্যাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্রিনহাউস গ্যাস"
  },
  {
    "id": "q-955",
    "num": "৯৫৫",
    "category": "environment",
    "question": "ওজোন স্তর কোথায় অবস্থিত?",
    "options": [
      "স্ট্র্যাটোস্ফিয়ারে",
      "ভূত্বকে",
      "সমুদ্রের তলে",
      "ম্যান্টলে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্ট্র্যাটোস্ফিয়ারে"
  },
  {
    "id": "q-956",
    "num": "৯৫৬",
    "category": "environment",
    "question": "অ্যাসিড বৃষ্টির জন্য কোন গ্যাসগুলো দায়ী হতে পারে?",
    "options": [
      "সালফার ডাই-অক্সাইড ও নাইট্রোজেন অক্সাইড",
      "অক্সিজেন ও হিলিয়াম",
      "হাইড্রোজেন ও নিয়ন",
      "শুধু আর্গন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সালফার ডাই-অক্সাইড ও নাইট্রোজেন অক্সাইড"
  },
  {
    "id": "q-957",
    "num": "৯৫৭",
    "category": "environment",
    "question": "বন উজাড়ের একটি ক্ষতিকর ফল কী?",
    "options": [
      "জীববৈচিত্র্য হ্রাস",
      "বন বৃদ্ধি",
      "বৃষ্টির পানি মিষ্টি হওয়া",
      "বাতাসে অক্সিজেন সবসময় বৃদ্ধি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জীববৈচিত্র্য হ্রাস"
  },
  {
    "id": "q-958",
    "num": "৯৫৮",
    "category": "environment",
    "question": "পরিবেশবান্ধব যাতায়াতের একটি উপায় কোনটি?",
    "options": [
      "সাইকেল চালানো",
      "অপ্রয়োজনীয় গাড়ি ব্যবহার",
      "খোলা জায়গায় আবর্জনা পোড়ানো",
      "একা গাড়ি চালানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাইকেল চালানো"
  },
  {
    "id": "q-959",
    "num": "৯৫৯",
    "category": "environment",
    "question": "বর্জ্য ব্যবস্থাপনায় 3R-এর একটি R কী?",
    "options": [
      "Reduce",
      "Repeat",
      "Remove only",
      "Return only"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Reduce"
  },
  {
    "id": "q-960",
    "num": "৯৬০",
    "category": "environment",
    "question": "3R-এর পূর্ণ ধারণা কোনটি?",
    "options": [
      "Reduce, Reuse, Recycle",
      "Read, Run, Rest",
      "Rain, River, Road",
      "Repair, Rise, Reach"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Reduce, Reuse, Recycle"
  },
  {
    "id": "q-961",
    "num": "৯৬১",
    "category": "environment",
    "question": "প্লাস্টিক বর্জ্য পরিবেশে কী সমস্যা সৃষ্টি করে?",
    "options": [
      "দীর্ঘস্থায়ী দূষণ",
      "দ্রুত মাটিতে মিশে সার হয়",
      "বিশুদ্ধ অক্সিজেন তৈরি করে",
      "বৃষ্টির পরিমাণ বাড়ায়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দীর্ঘস্থায়ী দূষণ"
  },
  {
    "id": "q-962",
    "num": "৯৬২",
    "category": "environment",
    "question": "সমুদ্রের পানিতে অতিরিক্ত প্লাস্টিক জমলে কোন প্রাণীরা ক্ষতিগ্রস্ত হতে পারে?",
    "options": [
      "সামুদ্রিক প্রাণী",
      "শুধু গৃহপালিত প্রাণী",
      "শুধু পোকামাকড়",
      "কোনো প্রাণী নয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সামুদ্রিক প্রাণী"
  },
  {
    "id": "q-963",
    "num": "৯৬৩",
    "category": "environment",
    "question": "নদী দূষণ রোধে কোন কাজটি করা উচিত?",
    "options": [
      "বর্জ্য শোধন করে ফেলা",
      "অপরিশোধিত বর্জ্য নদীতে ফেলা",
      "প্লাস্টিক ফেলা",
      "তেল ফেলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বর্জ্য শোধন করে ফেলা"
  },
  {
    "id": "q-964",
    "num": "৯৬৪",
    "category": "environment",
    "question": "বন সংরক্ষণ কেন জরুরি?",
    "options": [
      "জীববৈচিত্র্য ও পরিবেশের ভারসাম্য রক্ষায়",
      "সব গাছ কেটে ফেলতে",
      "নদী শুকাতে",
      "মাটি দূষণ বাড়াতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জীববৈচিত্র্য ও পরিবেশের ভারসাম্য রক্ষায়"
  },
  {
    "id": "q-965",
    "num": "৯৬৫",
    "category": "environment",
    "question": "ম্যানগ্রোভ বন কোন দুর্যোগের ক্ষতি কমাতে সাহায্য করে?",
    "options": [
      "ঘূর্ণিঝড় ও জলোচ্ছ্বাস",
      "ভূমিকম্প",
      "আগ্নেয়গিরি",
      "তুষারধস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঘূর্ণিঝড় ও জলোচ্ছ্বাস"
  },
  {
    "id": "q-966",
    "num": "৯৬৬",
    "category": "environment",
    "question": "সুন্দরবন বাংলাদেশের কোন ধরনের বন?",
    "options": [
      "ম্যানগ্রোভ বন",
      "শঙ্কুযুক্ত বন",
      "মরুভূমির বন",
      "তৃণভূমি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ম্যানগ্রোভ বন"
  },
  {
    "id": "q-967",
    "num": "৯৬৭",
    "category": "environment",
    "question": "জীবাশ্ম জ্বালানির উদাহরণ কোনটি?",
    "options": [
      "কয়লা",
      "সূর্যের আলো",
      "বাতাস",
      "জোয়ারের পানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কয়লা"
  },
  {
    "id": "q-968",
    "num": "৯৬৮",
    "category": "environment",
    "question": "নবায়নযোগ্য শক্তির উৎস কোনটি?",
    "options": [
      "বায়ুশক্তি",
      "কয়লা",
      "পেট্রোল",
      "প্রাকৃতিক গ্যাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বায়ুশক্তি"
  },
  {
    "id": "q-969",
    "num": "৯৬৯",
    "category": "environment",
    "question": "জলবিদ্যুৎ উৎপাদনে প্রধানত কী ব্যবহার করা হয়?",
    "options": [
      "পানির প্রবাহ",
      "বালু",
      "ধোঁয়া",
      "শুকনো কাঠ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানির প্রবাহ"
  },
  {
    "id": "q-970",
    "num": "৯৭০",
    "category": "environment",
    "question": "ভূগর্ভস্থ পানির একটি উৎস কী?",
    "options": [
      "বৃষ্টির পানি মাটিতে প্রবেশ করা",
      "শুধু সূর্যের আলো",
      "আগুন",
      "ধোঁয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৃষ্টির পানি মাটিতে প্রবেশ করা"
  },
  {
    "id": "q-971",
    "num": "৯৭১",
    "category": "environment",
    "question": "অতিরিক্ত ভূগর্ভস্থ পানি উত্তোলনের ফলে কী সমস্যা হতে পারে?",
    "options": [
      "পানির স্তর নেমে যাওয়া",
      "বন বেড়ে যাওয়া",
      "সমুদ্র শুকিয়ে যাওয়া",
      "বৃষ্টি বন্ধ হওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানির স্তর নেমে যাওয়া"
  },
  {
    "id": "q-972",
    "num": "৯৭২",
    "category": "environment",
    "question": "জলচক্রে বৃষ্টির পানি কোথা থেকে আসে?",
    "options": [
      "ঘনীভূত জলীয়বাষ্প থেকে",
      "আগুন থেকে",
      "পাথর থেকে",
      "সূর্যের ভেতর থেকে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঘনীভূত জলীয়বাষ্প থেকে"
  },
  {
    "id": "q-973",
    "num": "৯৭৩",
    "category": "environment",
    "question": "মাটিক্ষয় রোধে কোনটি সাহায্য করে?",
    "options": [
      "গাছের শিকড়",
      "বন উজাড়",
      "অতিরিক্ত খনন",
      "পাহাড় কাটা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গাছের শিকড়"
  },
  {
    "id": "q-974",
    "num": "৯৭৪",
    "category": "environment",
    "question": "পাহাড় ধসের ঝুঁকি বাড়ায় কোন কাজটি?",
    "options": [
      "নির্বিচারে পাহাড় কাটা",
      "বৃক্ষরোপণ",
      "সঠিক পানি নিষ্কাশন",
      "বন সংরক্ষণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নির্বিচারে পাহাড় কাটা"
  },
  {
    "id": "q-975",
    "num": "৯৭৫",
    "category": "environment",
    "question": "মরুকরণ বলতে কী বোঝায়?",
    "options": [
      "উর্বর ভূমি ক্রমে শুষ্ক ও অনুর্বর হওয়া",
      "বরফ গলে নদী হওয়া",
      "বন তৈরি হওয়া",
      "বৃষ্টি বাড়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উর্বর ভূমি ক্রমে শুষ্ক ও অনুর্বর হওয়া"
  },
  {
    "id": "q-976",
    "num": "৯৭৬",
    "category": "environment",
    "question": "জলবায়ু বলতে কী বোঝায়?",
    "options": [
      "দীর্ঘ সময়ের আবহাওয়ার গড় ধরন",
      "এক দিনের বৃষ্টি",
      "এক ঘণ্টার বাতাস",
      "একটি দিনের তাপমাত্রা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দীর্ঘ সময়ের আবহাওয়ার গড় ধরন"
  },
  {
    "id": "q-977",
    "num": "৯৭৭",
    "category": "environment",
    "question": "আবহাওয়া বলতে কী বোঝায়?",
    "options": [
      "নির্দিষ্ট সময়ের বায়ুমণ্ডলীয় অবস্থা",
      "কয়েক দশকের গড়",
      "শুধু সমুদ্রের গভীরতা",
      "পৃথিবীর বয়স"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নির্দিষ্ট সময়ের বায়ুমণ্ডলীয় অবস্থা"
  },
  {
    "id": "q-978",
    "num": "৯৭৮",
    "category": "environment",
    "question": "ঘূর্ণিঝড়ের কেন্দ্রের তুলনামূলক শান্ত অংশকে কী বলে?",
    "options": [
      "চোখ",
      "লেজ",
      "পাখা",
      "শাখা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চোখ"
  },
  {
    "id": "q-979",
    "num": "৯৭৯",
    "category": "environment",
    "question": "সুনামির প্রধান কারণগুলোর একটি কী?",
    "options": [
      "সমুদ্রতলের ভূমিকম্প",
      "মরুভূমির ঝড়",
      "তুষারপাত",
      "সাধারণ বৃষ্টি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সমুদ্রতলের ভূমিকম্প"
  },
  {
    "id": "q-980",
    "num": "৯৮০",
    "category": "environment",
    "question": "ভূমিকম্পের সময় নিরাপদ থাকার সাধারণ নিয়ম কোনটি?",
    "options": [
      "নিচু হয়ে আশ্রয় নেওয়া, মাথা ঢেকে থাকা ও ধরে থাকা",
      "জানালার পাশে দাঁড়ানো",
      "লিফট ব্যবহার করা",
      "বারান্দায় দাঁড়ানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিচু হয়ে আশ্রয় নেওয়া, মাথা ঢেকে থাকা ও ধরে থাকা"
  },
  {
    "id": "q-981",
    "num": "৯৮১",
    "category": "environment",
    "question": "বন্যার সময় পানিবাহিত রোগ প্রতিরোধে কী জরুরি?",
    "options": [
      "নিরাপদ পানি ও স্বাস্থ্যবিধি",
      "দূষিত পানি পান",
      "খোলা খাবার খাওয়া",
      "হাত না ধোয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিরাপদ পানি ও স্বাস্থ্যবিধি"
  },
  {
    "id": "q-982",
    "num": "৯৮২",
    "category": "environment",
    "question": "বিশ্ব পরিবেশ দিবস কবে?",
    "options": [
      "৫ জুন",
      "২২ এপ্রিল",
      "১ মে",
      "১৬ সেপ্টেম্বর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৫ জুন"
  },
  {
    "id": "q-983",
    "num": "৯৮৩",
    "category": "environment",
    "question": "বিশ্ব ধরিত্রী দিবস কবে পালিত হয়?",
    "options": [
      "২২ এপ্রিল",
      "৫ জুন",
      "২১ ফেব্রুয়ারি",
      "১০ ডিসেম্বর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২২ এপ্রিল"
  },
  {
    "id": "q-984",
    "num": "৯৮৪",
    "category": "environment",
    "question": "আন্তর্জাতিক জীববৈচিত্র্য দিবস কবে?",
    "options": [
      "২২ মে",
      "৫ জুন",
      "১৬ ডিসেম্বর",
      "১ জানুয়ারি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২২ মে"
  },
  {
    "id": "q-985",
    "num": "৯৮৫",
    "category": "environment",
    "question": "আন্তর্জাতিক ওজোন স্তর সংরক্ষণ দিবস কবে?",
    "options": [
      "১৬ সেপ্টেম্বর",
      "৫ জুন",
      "২২ এপ্রিল",
      "১ মার্চ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৬ সেপ্টেম্বর"
  },
  {
    "id": "q-986",
    "num": "৯৮৬",
    "category": "environment",
    "question": "পৃথিবীর জলাভূমি সংরক্ষণ বিষয়ে রামসার কনভেনশন কোন সালে গৃহীত হয়?",
    "options": [
      "১৯৫০",
      "১৯৭১",
      "১৯৮০",
      "২০০০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৯৭১"
  },
  {
    "id": "q-987",
    "num": "৯৮৭",
    "category": "environment",
    "question": "রামসার কনভেনশনের মূল বিষয় কী?",
    "options": [
      "জলাভূমি সংরক্ষণ",
      "মহাকাশ গবেষণা",
      "আন্তর্জাতিক বাণিজ্য",
      "ফুটবল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জলাভূমি সংরক্ষণ"
  },
  {
    "id": "q-988",
    "num": "৯৮৮",
    "category": "environment",
    "question": "নবায়নযোগ্য সম্পদের উদাহরণ কোনটি?",
    "options": [
      "বন, যদি টেকসইভাবে ব্যবস্থাপনা করা হয়",
      "কয়লা",
      "পেট্রোল",
      "প্রাকৃতিক গ্যাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বন, যদি টেকসইভাবে ব্যবস্থাপনা করা হয়"
  },
  {
    "id": "q-989",
    "num": "৯৮৯",
    "category": "environment",
    "question": "পরিবেশ দূষণের একটি প্রধান উৎস কোনটি?",
    "options": [
      "অপরিশোধিত শিল্পবর্জ্য",
      "গাছ লাগানো",
      "পরিচ্ছন্নতা",
      "বৃষ্টির পানি সংরক্ষণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অপরিশোধিত শিল্পবর্জ্য"
  },
  {
    "id": "q-990",
    "num": "৯৯০",
    "category": "environment",
    "question": "শব্দদূষণ কমাতে কী করা উচিত?",
    "options": [
      "অপ্রয়োজনীয় হর্ন না বাজানো",
      "সবসময় মাইক বাজানো",
      "উচ্চ শব্দে গান চালানো",
      "অতিরিক্ত শব্দ তৈরি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অপ্রয়োজনীয় হর্ন না বাজানো"
  },
  {
    "id": "q-991",
    "num": "৯৯১",
    "category": "environment",
    "question": "বায়ুদূষণের একটি ক্ষতিকর প্রভাব কী?",
    "options": [
      "শ্বাসযন্ত্রের সমস্যা",
      "দৃষ্টিশক্তি নিশ্চিতভাবে বৃদ্ধি",
      "হাড় শক্ত হওয়া",
      "উচ্চতা বেড়ে যাওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শ্বাসযন্ত্রের সমস্যা"
  },
  {
    "id": "q-992",
    "num": "৯৯২",
    "category": "environment",
    "question": "পরিবেশবান্ধব কৃষির একটি পদ্ধতি কী?",
    "options": [
      "জৈব সার ব্যবহার",
      "অতিরিক্ত রাসায়নিক প্রয়োগ",
      "নির্বিচারে বন কাটা",
      "বিষাক্ত বর্জ্য জমিতে ফেলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জৈব সার ব্যবহার"
  },
  {
    "id": "q-993",
    "num": "৯৯৩",
    "category": "environment",
    "question": "কম্পোস্ট কী থেকে তৈরি করা যায়?",
    "options": [
      "পচনশীল জৈব বর্জ্য",
      "কাচ",
      "লোহা",
      "প্লাস্টিক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পচনশীল জৈব বর্জ্য"
  },
  {
    "id": "q-994",
    "num": "৯৯৪",
    "category": "environment",
    "question": "কৃষিতে ফসল আবর্তনের একটি সুবিধা কী?",
    "options": [
      "মাটির উর্বরতা বজায় রাখতে সাহায্য করা",
      "মাটি সম্পূর্ণ নষ্ট করা",
      "সব পানি শেষ করা",
      "বৃষ্টিপাত বন্ধ করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাটির উর্বরতা বজায় রাখতে সাহায্য করা"
  },
  {
    "id": "q-995",
    "num": "৯৯৫",
    "category": "environment",
    "question": "জীববৈচিত্র্য রক্ষায় কোনটি প্রয়োজন?",
    "options": [
      "প্রাকৃতিক আবাসস্থল সংরক্ষণ",
      "নির্বিচারে শিকার",
      "বন ধ্বংস",
      "নদী দূষণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রাকৃতিক আবাসস্থল সংরক্ষণ"
  },
  {
    "id": "q-996",
    "num": "৯৯৬",
    "category": "environment",
    "question": "বিপন্ন প্রাণী বলতে কী বোঝায়?",
    "options": [
      "বিলুপ্ত হওয়ার উচ্চ ঝুঁকিতে থাকা প্রাণী",
      "খুব বেশি সংখ্যায় থাকা প্রাণী",
      "শুধু গৃহপালিত প্রাণী",
      "শুধু পোষা পাখি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিলুপ্ত হওয়ার উচ্চ ঝুঁকিতে থাকা প্রাণী"
  },
  {
    "id": "q-997",
    "num": "৯৯৭",
    "category": "environment",
    "question": "বন্যপ্রাণী সংরক্ষণে কোন কাজটি ভালো?",
    "options": [
      "জাতীয় উদ্যান ও অভয়ারণ্য রক্ষা",
      "বেআইনি শিকার",
      "আবাসস্থল ধ্বংস",
      "বন পোড়ানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জাতীয় উদ্যান ও অভয়ারণ্য রক্ষা"
  },
  {
    "id": "q-998",
    "num": "৯৯৮",
    "category": "environment",
    "question": "নদীর স্বাভাবিক প্রবাহ বজায় রাখা কেন জরুরি?",
    "options": [
      "জলজ প্রাণী ও পরিবেশের ভারসাম্যের জন্য",
      "নদী শুকানোর জন্য",
      "দূষণ বাড়ানোর জন্য",
      "পানির রং বদলানোর জন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জলজ প্রাণী ও পরিবেশের ভারসাম্যের জন্য"
  },
  {
    "id": "q-999",
    "num": "৯৯৯",
    "category": "environment",
    "question": "জলবায়ু পরিবর্তনের কারণে সমুদ্রপৃষ্ঠের উচ্চতা কেন বাড়তে পারে?",
    "options": [
      "বরফ গলা ও সমুদ্রের পানি উষ্ণ হয়ে প্রসারিত হওয়া",
      "সমুদ্রে মাছ বৃদ্ধি",
      "বাতাস কমে যাওয়া",
      "নদীর পানি মিষ্টি হওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বরফ গলা ও সমুদ্রের পানি উষ্ণ হয়ে প্রসারিত হওয়া"
  },
  {
    "id": "q-1000",
    "num": "১০০০",
    "category": "environment",
    "question": "পরিবেশ রক্ষায় একজন শিক্ষার্থীর ভালো কাজ কোনটি?",
    "options": [
      "গাছ লাগানো ও বর্জ্য কমানো",
      "যেখানে-সেখানে ময়লা ফেলা",
      "পানি অপচয় করা",
      "প্লাস্টিক পোড়ানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গাছ লাগানো ও বর্জ্য কমানো"
  },
  {
    "id": "q-1001",
    "num": "১০০১",
    "category": "capitals_organizations",
    "question": "পর্তুগালের রাজধানী কোনটি?",
    "options": [
      "মাদ্রিদ",
      "লিসবন",
      "রোম",
      "এথেন্স"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) লিসবন"
  },
  {
    "id": "q-1002",
    "num": "১০০২",
    "category": "capitals_organizations",
    "question": "গ্রিসের রাজধানী কী?",
    "options": [
      "এথেন্স",
      "রোম",
      "সোফিয়া",
      "বুখারেস্ট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এথেন্স"
  },
  {
    "id": "q-1003",
    "num": "১০০৩",
    "category": "capitals_organizations",
    "question": "সুইডেনের রাজধানী কোনটি?",
    "options": [
      "অসলো",
      "স্টকহোম",
      "হেলসিঙ্কি",
      "কোপেনহেগেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) স্টকহোম"
  },
  {
    "id": "q-1004",
    "num": "১০০৪",
    "category": "capitals_organizations",
    "question": "নরওয়ের রাজধানী কী?",
    "options": [
      "অসলো",
      "বার্ন",
      "রেইকিয়াভিক",
      "বার্লিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অসলো"
  },
  {
    "id": "q-1005",
    "num": "১০০৫",
    "category": "capitals_organizations",
    "question": "ডেনমার্কের রাজধানী কোনটি?",
    "options": [
      "কোপেনহেগেন",
      "স্টকহোম",
      "হেলসিঙ্কি",
      "আমস্টারডাম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কোপেনহেগেন"
  },
  {
    "id": "q-1006",
    "num": "১০০৬",
    "category": "capitals_organizations",
    "question": "নেদারল্যান্ডসের রাজধানী কী?",
    "options": [
      "ব্রাসেলস",
      "আমস্টারডাম",
      "বার্লিন",
      "প্যারিস"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আমস্টারডাম"
  },
  {
    "id": "q-1007",
    "num": "১০০৭",
    "category": "capitals_organizations",
    "question": "বেলজিয়ামের রাজধানী কোনটি?",
    "options": [
      "ব্রাসেলস",
      "বার্ন",
      "ভিয়েনা",
      "মাদ্রিদ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্রাসেলস"
  },
  {
    "id": "q-1008",
    "num": "১০০৮",
    "category": "capitals_organizations",
    "question": "অস্ট্রিয়ার রাজধানী কী?",
    "options": [
      "প্রাগ",
      "ভিয়েনা",
      "রোম",
      "ওয়ারশ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ভিয়েনা"
  },
  {
    "id": "q-1009",
    "num": "১০০৯",
    "category": "capitals_organizations",
    "question": "পোল্যান্ডের রাজধানী কোনটি?",
    "options": [
      "ওয়ারশ",
      "বুদাপেস্ট",
      "প্রাগ",
      "ব্রাতিস্লাভা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ওয়ারশ"
  },
  {
    "id": "q-1010",
    "num": "১০১০",
    "category": "capitals_organizations",
    "question": "হাঙ্গেরির রাজধানী কী?",
    "options": [
      "বুদাপেস্ট",
      "বুখারেস্ট",
      "সোফিয়া",
      "এথেন্স"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বুদাপেস্ট"
  },
  {
    "id": "q-1011",
    "num": "১০১১",
    "category": "capitals_organizations",
    "question": "চেক প্রজাতন্ত্রের রাজধানী কোনটি?",
    "options": [
      "প্রাগ",
      "ভিয়েনা",
      "বার্লিন",
      "ওয়ারশ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রাগ"
  },
  {
    "id": "q-1012",
    "num": "১০১২",
    "category": "capitals_organizations",
    "question": "রোমানিয়ার রাজধানী কী?",
    "options": [
      "বুখারেস্ট",
      "বুদাপেস্ট",
      "সোফিয়া",
      "এথেন্স"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বুখারেস্ট"
  },
  {
    "id": "q-1013",
    "num": "১০১৩",
    "category": "capitals_organizations",
    "question": "বুলগেরিয়ার রাজধানী কোনটি?",
    "options": [
      "সোফিয়া",
      "প্রাগ",
      "রোম",
      "প্যারিস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সোফিয়া"
  },
  {
    "id": "q-1014",
    "num": "১০১৪",
    "category": "capitals_organizations",
    "question": "আয়ারল্যান্ডের রাজধানী কী?",
    "options": [
      "ডাবলিন",
      "লন্ডন",
      "এডিনবরা",
      "কার্ডিফ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডাবলিন"
  },
  {
    "id": "q-1015",
    "num": "১০১৫",
    "category": "capitals_organizations",
    "question": "কিউবার রাজধানী কোনটি?",
    "options": [
      "হাভানা",
      "লিমা",
      "বোগোতা",
      "কুইটো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হাভানা"
  },
  {
    "id": "q-1016",
    "num": "১০১৬",
    "category": "capitals_organizations",
    "question": "মেক্সিকোর রাজধানী কী?",
    "options": [
      "মেক্সিকো সিটি",
      "মন্টেরি",
      "গুয়াদালাহারা",
      "ক্যানকুন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মেক্সিকো সিটি"
  },
  {
    "id": "q-1017",
    "num": "১০১৭",
    "category": "capitals_organizations",
    "question": "চিলির রাজধানী কোনটি?",
    "options": [
      "সান্তিয়াগো",
      "লিমা",
      "বুয়েনস এইরেস",
      "বোগোতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সান্তিয়াগো"
  },
  {
    "id": "q-1018",
    "num": "১০১৮",
    "category": "capitals_organizations",
    "question": "পেরুর রাজধানী কী?",
    "options": [
      "লিমা",
      "কুইটো",
      "কারাকাস",
      "সান্তিয়াগো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লিমা"
  },
  {
    "id": "q-1019",
    "num": "১০১৯",
    "category": "capitals_organizations",
    "question": "কলম্বিয়ার রাজধানী কোনটি?",
    "options": [
      "বোগোতা",
      "লিমা",
      "ব্রাসিলিয়া",
      "হাভানা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বোগোতা"
  },
  {
    "id": "q-1020",
    "num": "১০২০",
    "category": "capitals_organizations",
    "question": "নিউজিল্যান্ডের রাজধানী কী?",
    "options": [
      "অকল্যান্ড",
      "ওয়েলিংটন",
      "ক্রাইস্টচার্চ",
      "ডানেডিন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ওয়েলিংটন"
  },
  {
    "id": "q-1021",
    "num": "১০২১",
    "category": "capitals_organizations",
    "question": "ফিজির রাজধানী কোনটি?",
    "options": [
      "সুভা",
      "আপিয়া",
      "নুকু'আলোফা",
      "পোর্ট মোরেসবি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুভা"
  },
  {
    "id": "q-1022",
    "num": "১০২২",
    "category": "capitals_organizations",
    "question": "আফগানিস্তানের রাজধানী কী?",
    "options": [
      "কাবুল",
      "হেরাত",
      "কান্দাহার",
      "মাজার-ই-শরিফ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাবুল"
  },
  {
    "id": "q-1023",
    "num": "১০২৩",
    "category": "capitals_organizations",
    "question": "ইরানের রাজধানী কোনটি?",
    "options": [
      "তেহরান",
      "বাগদাদ",
      "দামেস্ক",
      "আঙ্কারা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তেহরান"
  },
  {
    "id": "q-1024",
    "num": "১০২৪",
    "category": "capitals_organizations",
    "question": "ইরাকের রাজধানী কী?",
    "options": [
      "বাগদাদ",
      "তেহরান",
      "কুয়েত সিটি",
      "আম্মান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাগদাদ"
  },
  {
    "id": "q-1025",
    "num": "১০২৫",
    "category": "capitals_organizations",
    "question": "জর্ডানের রাজধানী কোনটি?",
    "options": [
      "আম্মান",
      "দামেস্ক",
      "বৈরুত",
      "রিয়াদ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আম্মান"
  },
  {
    "id": "q-1026",
    "num": "১০২৬",
    "category": "capitals_organizations",
    "question": "লেবাননের রাজধানী কী?",
    "options": [
      "বৈরুত",
      "আম্মান",
      "বাগদাদ",
      "দোহা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বৈরুত"
  },
  {
    "id": "q-1027",
    "num": "১০২৭",
    "category": "capitals_organizations",
    "question": "কাতারের রাজধানী কোনটি?",
    "options": [
      "দোহা",
      "দুবাই",
      "আবুধাবি",
      "মাসকাট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দোহা"
  },
  {
    "id": "q-1028",
    "num": "১০২৮",
    "category": "capitals_organizations",
    "question": "সংযুক্ত আরব আমিরাতের রাজধানী কী?",
    "options": [
      "দুবাই",
      "আবুধাবি",
      "শারজাহ",
      "আজমান"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) আবুধাবি"
  },
  {
    "id": "q-1029",
    "num": "১০২৯",
    "category": "capitals_organizations",
    "question": "ওমানের রাজধানী কোনটি?",
    "options": [
      "মাসকাট",
      "দোহা",
      "রিয়াদ",
      "মানামা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাসকাট"
  },
  {
    "id": "q-1030",
    "num": "১০৩০",
    "category": "capitals_organizations",
    "question": "কুয়েতের রাজধানী কী?",
    "options": [
      "কুয়েত সিটি",
      "দোহা",
      "বৈরুত",
      "আম্মান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কুয়েত সিটি"
  },
  {
    "id": "q-1031",
    "num": "১০৩১",
    "category": "capitals_organizations",
    "question": "বাহরাইনের রাজধানী কোনটি?",
    "options": [
      "মানামা",
      "রিয়াদ",
      "মাসকাট",
      "দোহা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মানামা"
  },
  {
    "id": "q-1032",
    "num": "১০৩২",
    "category": "capitals_organizations",
    "question": "ইয়েমেনের আন্তর্জাতিকভাবে স্বীকৃত অস্থায়ী রাজধানী হিসেবে কোন শহর ব্যবহৃত হয়?",
    "options": [
      "এডেন",
      "সানা",
      "তায়েজ",
      "হোদেইদা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এডেন"
  },
  {
    "id": "q-1033",
    "num": "১০৩৩",
    "category": "capitals_organizations",
    "question": "তানজানিয়ার রাজধানী কী?",
    "options": [
      "দোদোমা",
      "নাইরোবি",
      "কাম্পালা",
      "কিগালি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দোদোমা"
  },
  {
    "id": "q-1034",
    "num": "১০৩৪",
    "category": "capitals_organizations",
    "question": "উগান্ডার রাজধানী কোনটি?",
    "options": [
      "কাম্পালা",
      "কিগালি",
      "নাইরোবি",
      "দার এস সালাম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাম্পালা"
  },
  {
    "id": "q-1035",
    "num": "১০৩৫",
    "category": "capitals_organizations",
    "question": "রুয়ান্ডার রাজধানী কী?",
    "options": [
      "কিগালি",
      "লুসাকা",
      "হারারে",
      "আবুজা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কিগালি"
  },
  {
    "id": "q-1036",
    "num": "১০৩৬",
    "category": "capitals_organizations",
    "question": "ইথিওপিয়ার রাজধানী কোনটি?",
    "options": [
      "আদ্দিস আবাবা",
      "নাইরোবি",
      "আক্রা",
      "কায়রো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আদ্দিস আবাবা"
  },
  {
    "id": "q-1037",
    "num": "১০৩৭",
    "category": "capitals_organizations",
    "question": "ঘানার রাজধানী কী?",
    "options": [
      "আক্রা",
      "আবুজা",
      "লাগোস",
      "ডাকার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আক্রা"
  },
  {
    "id": "q-1038",
    "num": "১০৩৮",
    "category": "capitals_organizations",
    "question": "সেনেগালের রাজধানী কোনটি?",
    "options": [
      "ডাকার",
      "আক্রা",
      "কায়রো",
      "লাগোস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডাকার"
  },
  {
    "id": "q-1039",
    "num": "১০৩৯",
    "category": "capitals_organizations",
    "question": "মরক্কোর রাজধানী কী?",
    "options": [
      "রাবাত",
      "কাসাব্লাঙ্কা",
      "মারাকেশ",
      "ফেজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাবাত"
  },
  {
    "id": "q-1040",
    "num": "১০৪০",
    "category": "capitals_organizations",
    "question": "আলজেরিয়ার রাজধানী কোনটি?",
    "options": [
      "আলজিয়ার্স",
      "তিউনিস",
      "ত্রিপোলি",
      "রাবাত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলজিয়ার্স"
  },
  {
    "id": "q-1041",
    "num": "১০৪১",
    "category": "capitals_organizations",
    "question": "তিউনিসিয়ার রাজধানী কী?",
    "options": [
      "তিউনিস",
      "আলজিয়ার্স",
      "কায়রো",
      "খার্তুম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তিউনিস"
  },
  {
    "id": "q-1042",
    "num": "১০৪২",
    "category": "capitals_organizations",
    "question": "লিবিয়ার রাজধানী কোনটি?",
    "options": [
      "ত্রিপোলি",
      "বেনগাজি",
      "রাবাত",
      "কায়রো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ত্রিপোলি"
  },
  {
    "id": "q-1043",
    "num": "১০৪৩",
    "category": "capitals_organizations",
    "question": "জাতিসংঘের শিশু বিষয়ক সংস্থার নাম কী?",
    "options": [
      "UNICEF",
      "WHO",
      "UNESCO",
      "IMF"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) UNICEF"
  },
  {
    "id": "q-1044",
    "num": "১০৪৪",
    "category": "capitals_organizations",
    "question": "আন্তর্জাতিক শ্রম সংস্থার সংক্ষিপ্ত নাম কী?",
    "options": [
      "ILO",
      "WHO",
      "WTO",
      "FAO"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ILO"
  },
  {
    "id": "q-1045",
    "num": "১০৪৫",
    "category": "capitals_organizations",
    "question": "বিশ্ব বাণিজ্য সংস্থার সংক্ষিপ্ত নাম কী?",
    "options": [
      "WTO",
      "WHO",
      "IMF",
      "UNESCO"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) WTO"
  },
  {
    "id": "q-1046",
    "num": "১০৪৬",
    "category": "capitals_organizations",
    "question": "আন্তর্জাতিক মুদ্রা তহবিলের সংক্ষিপ্ত নাম কী?",
    "options": [
      "IMF",
      "ILO",
      "FAO",
      "UNICEF"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) IMF"
  },
  {
    "id": "q-1047",
    "num": "১০৪৭",
    "category": "capitals_organizations",
    "question": "বিশ্বব্যাংকের সদর দপ্তর কোথায়?",
    "options": [
      "ওয়াশিংটন ডিসি",
      "লন্ডন",
      "টোকিও",
      "ঢাকা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ওয়াশিংটন ডিসি"
  },
  {
    "id": "q-1048",
    "num": "১০৪৮",
    "category": "capitals_organizations",
    "question": "খাদ্য ও কৃষি সংস্থার সংক্ষিপ্ত নাম কী?",
    "options": [
      "FAO",
      "WHO",
      "WTO",
      "ILO"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) FAO"
  },
  {
    "id": "q-1049",
    "num": "১০৪৯",
    "category": "capitals_organizations",
    "question": "আন্তর্জাতিক অলিম্পিক কমিটির সদর দপ্তর কোথায়?",
    "options": [
      "লুজান",
      "প্যারিস",
      "লন্ডন",
      "নিউইয়র্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লুজান"
  },
  {
    "id": "q-1050",
    "num": "১০৫০",
    "category": "capitals_organizations",
    "question": "রেড ক্রস আন্দোলনের প্রতিষ্ঠার সঙ্গে কার নাম জড়িত?",
    "options": [
      "হেনরি ডুনান",
      "নিউটন",
      "এডিসন",
      "গ্যালিলিও"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হেনরি ডুনান"
  },
  {
    "id": "q-1051",
    "num": "১০৫১",
    "category": "advanced_math",
    "question": "১৫ × ১২ কত?",
    "options": [
      "১৬০",
      "১৭০",
      "১৮০",
      "১৯০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৮০"
  },
  {
    "id": "q-1052",
    "num": "১০৫২",
    "category": "advanced_math",
    "question": "১৪৪ ÷ ১২ কত?",
    "options": [
      "১০",
      "১২",
      "১৪",
      "১৬"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১২"
  },
  {
    "id": "q-1053",
    "num": "১০৫৩",
    "category": "advanced_math",
    "question": "২৫-এর ঘন কত?",
    "options": [
      "১৫৬২৫",
      "১২৫",
      "৬২৫",
      "২৫০০"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৫৬২৫"
  },
  {
    "id": "q-1054",
    "num": "১০৫৪",
    "category": "advanced_math",
    "question": "৪-এর ঘন কত?",
    "options": [
      "১৬",
      "৩২",
      "৬৪",
      "১২৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬৪"
  },
  {
    "id": "q-1055",
    "num": "১০৫৫",
    "category": "advanced_math",
    "question": "২-এর পঞ্চম ঘাত কত?",
    "options": [
      "১৬",
      "২৪",
      "৩২",
      "৬৪"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩২"
  },
  {
    "id": "q-1056",
    "num": "১০৫৬",
    "category": "advanced_math",
    "question": "১ থেকে ১০ পর্যন্ত সংখ্যার যোগফল কত?",
    "options": [
      "৪৫",
      "৫০",
      "৫৫",
      "৬০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫৫"
  },
  {
    "id": "q-1057",
    "num": "১০৫৭",
    "category": "advanced_math",
    "question": "১ থেকে ৫ পর্যন্ত বিজোড় সংখ্যাগুলোর যোগফল কত?",
    "options": [
      "৬",
      "৮",
      "৯",
      "১২"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯"
  },
  {
    "id": "q-1058",
    "num": "১০৫৮",
    "category": "advanced_math",
    "question": "৩৬ ও ৪৮-এর গসাগু কত?",
    "options": [
      "৬",
      "৮",
      "১২",
      "১৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১২"
  },
  {
    "id": "q-1059",
    "num": "১০৫৯",
    "category": "advanced_math",
    "question": "৬ ও ৮-এর লসাগু কত?",
    "options": [
      "১২",
      "২৪",
      "৩৬",
      "৪৮"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২৪"
  },
  {
    "id": "q-1060",
    "num": "১০৬০",
    "category": "advanced_math",
    "question": "০.৫ + ০.২৫ কত?",
    "options": [
      "০.৬০",
      "০.৭৫",
      "১.০০",
      "১.২৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ০.৭৫"
  },
  {
    "id": "q-1061",
    "num": "১০৬১",
    "category": "advanced_math",
    "question": "২.৫ × ৪ কত?",
    "options": [
      "৫",
      "৮",
      "১০",
      "১২"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০"
  },
  {
    "id": "q-1062",
    "num": "১০৬২",
    "category": "advanced_math",
    "question": "১.২৫ × ৮ কত?",
    "options": [
      "৮",
      "১০",
      "১২",
      "১৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০"
  },
  {
    "id": "q-1063",
    "num": "১০৬৩",
    "category": "advanced_math",
    "question": "৩/৫-এর শতকরা মান কত?",
    "options": [
      "২০%",
      "৪০%",
      "৬০%",
      "৮০%"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬০%"
  },
  {
    "id": "q-1064",
    "num": "১০৬৪",
    "category": "advanced_math",
    "question": "০.১২৫ ভগ্নাংশে কত?",
    "options": [
      "১/২",
      "১/৪",
      "১/৮",
      "১/১০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১/৮"
  },
  {
    "id": "q-1065",
    "num": "১০৬৫",
    "category": "advanced_math",
    "question": "৪০-এর ২৫% কত?",
    "options": [
      "৫",
      "১০",
      "১৫",
      "২০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০"
  },
  {
    "id": "q-1066",
    "num": "১০৬৬",
    "category": "advanced_math",
    "question": "৩০০ টাকার ১৫% কত?",
    "options": [
      "৩০ টাকা",
      "৪৫ টাকা",
      "৬০ টাকা",
      "৭৫ টাকা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৪৫ টাকা"
  },
  {
    "id": "q-1067",
    "num": "১০৬৭",
    "category": "advanced_math",
    "question": "৮০ টাকা থেকে ১০ টাকা কমালে কত থাকে?",
    "options": [
      "৬০",
      "৭০",
      "৭৫",
      "৮০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৭০"
  },
  {
    "id": "q-1068",
    "num": "১০৬৮",
    "category": "advanced_math",
    "question": "একটি পণ্যের দাম ২০০ টাকা। ১০% ছাড়ে বিক্রয়মূল্য কত?",
    "options": [
      "১৭০",
      "১৮০",
      "১৯০",
      "১৯৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১৮০"
  },
  {
    "id": "q-1069",
    "num": "১০৬৯",
    "category": "advanced_math",
    "question": "৫টি সংখ্যার যোগফল ৫০ হলে গড় কত?",
    "options": [
      "৫",
      "১০",
      "১৫",
      "২০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০"
  },
  {
    "id": "q-1070",
    "num": "১০৭০",
    "category": "advanced_math",
    "question": "৪, ৬, ৮, ১০-এর গড় কত?",
    "options": [
      "৬",
      "৭",
      "৮",
      "৯"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৭"
  },
  {
    "id": "q-1071",
    "num": "১০৭১",
    "category": "advanced_math",
    "question": "x + ৫ = ১২ হলে x কত?",
    "options": [
      "৫",
      "৬",
      "৭",
      "৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৭"
  },
  {
    "id": "q-1072",
    "num": "১০৭২",
    "category": "advanced_math",
    "question": "২x = ১৮ হলে x কত?",
    "options": [
      "৬",
      "৮",
      "৯",
      "১২"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯"
  },
  {
    "id": "q-1073",
    "num": "১০৭৩",
    "category": "advanced_math",
    "question": "৩x + ২ = ১৪ হলে x কত?",
    "options": [
      "২",
      "৩",
      "৪",
      "৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪"
  },
  {
    "id": "q-1074",
    "num": "১০৭৪",
    "category": "advanced_math",
    "question": "একটি আয়তক্ষেত্রের দৈর্ঘ্য ৮ মিটার ও প্রস্থ ৫ মিটার। ক্ষেত্রফল কত?",
    "options": [
      "১৩ বর্গমিটার",
      "২৬ বর্গমিটার",
      "৪০ বর্গমিটার",
      "৫০ বর্গমিটার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪০ বর্গমিটার"
  },
  {
    "id": "q-1075",
    "num": "১০৭৫",
    "category": "advanced_math",
    "question": "বর্গক্ষেত্রের বাহু ৬ সেমি হলে ক্ষেত্রফল কত?",
    "options": [
      "১২",
      "২৪",
      "৩৬",
      "৪৮ বর্গসেমি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৩৬ বর্গসেমি"
  },
  {
    "id": "q-1076",
    "num": "১০৭৬",
    "category": "advanced_math",
    "question": "৫ সেমি বাহুবিশিষ্ট বর্গের পরিসীমা কত?",
    "options": [
      "১০",
      "১৫",
      "২০",
      "২৫ সেমি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২০ সেমি"
  },
  {
    "id": "q-1077",
    "num": "১০৭৭",
    "category": "advanced_math",
    "question": "ত্রিভুজের ক্ষেত্রফলের সূত্র কোনটি?",
    "options": [
      "ভূমি × উচ্চতা",
      "১/২ × ভূমি × উচ্চতা",
      "দৈর্ঘ্য × প্রস্থ",
      "২ × দৈর্ঘ্য"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১/২ × ভূমি × উচ্চতা"
  },
  {
    "id": "q-1078",
    "num": "১০৭৮",
    "category": "advanced_math",
    "question": "বৃত্তের পরিধির সূত্র কোনটি?",
    "options": [
      "πr²",
      "২πr",
      "r²",
      "৪πr"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২πr"
  },
  {
    "id": "q-1079",
    "num": "১০৭৯",
    "category": "advanced_math",
    "question": "বৃত্তের ক্ষেত্রফলের সূত্র কোনটি?",
    "options": [
      "২πr",
      "πr²",
      "πd",
      "৪πr"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) πr²"
  },
  {
    "id": "q-1080",
    "num": "১০৮০",
    "category": "advanced_math",
    "question": "π-এর প্রচলিত আনুমানিক মান কত?",
    "options": [
      "২.১৪",
      "৩.১৪",
      "৪.১৪",
      "৫.১৪"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৩.১৪"
  },
  {
    "id": "q-1081",
    "num": "১০৮১",
    "category": "advanced_math",
    "question": "একটি পাশা ছুড়লে কয়টি সম্ভাব্য সংখ্যা পাওয়া যায়?",
    "options": [
      "৪",
      "৫",
      "৬",
      "৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬"
  },
  {
    "id": "q-1082",
    "num": "১০৮২",
    "category": "advanced_math",
    "question": "একটি সাধারণ কয়েন ছুড়লে কয়টি সম্ভাব্য ফল হতে পারে?",
    "options": [
      "১",
      "২",
      "৩",
      "৪"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২"
  },
  {
    "id": "q-1083",
    "num": "১০৮৩",
    "category": "advanced_math",
    "question": "একটি সাধারণ পাশায় ৭ পাওয়ার সম্ভাবনা কত?",
    "options": [
      "০",
      "১/৬",
      "১/২",
      "১"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ০"
  },
  {
    "id": "q-1084",
    "num": "১০৮৪",
    "category": "advanced_math",
    "question": "২, ৩, ৫, ৭ কোন ধরনের সংখ্যা?",
    "options": [
      "জোড় সংখ্যা",
      "মৌলিক সংখ্যা",
      "যৌগিক সংখ্যা",
      "ঋণাত্মক সংখ্যা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মৌলিক সংখ্যা"
  },
  {
    "id": "q-1085",
    "num": "১০৮৫",
    "category": "advanced_math",
    "question": "২১ কোন ধরনের সংখ্যা?",
    "options": [
      "মৌলিক",
      "যৌগিক",
      "জোড়",
      "শূন্য"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) যৌগিক"
  },
  {
    "id": "q-1086",
    "num": "১০৮৬",
    "category": "advanced_math",
    "question": "সবচেয়ে বড় দুই অঙ্কের সংখ্যা কত?",
    "options": [
      "৯০",
      "৯৮",
      "৯৯",
      "১০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯৯"
  },
  {
    "id": "q-1087",
    "num": "১০৮৭",
    "category": "advanced_math",
    "question": "সবচেয়ে ছোট তিন অঙ্কের সংখ্যা কত?",
    "options": [
      "৯৯",
      "১০০",
      "১০১",
      "১১০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০০"
  },
  {
    "id": "q-1088",
    "num": "১০৮৮",
    "category": "advanced_math",
    "question": "৯৯৯-এর পরের সংখ্যা কত?",
    "options": [
      "৯৯৮",
      "১০০০",
      "১০০১",
      "১০১০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ১০০০"
  },
  {
    "id": "q-1089",
    "num": "১০৮৯",
    "category": "advanced_math",
    "question": "ধারাটি পূরণ করুন: ১, ৪, ৯, ১৬, ?",
    "options": [
      "২০",
      "২৪",
      "২৫",
      "৩৬"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২৫"
  },
  {
    "id": "q-1090",
    "num": "১০৯০",
    "category": "advanced_math",
    "question": "ধারাটি পূরণ করুন: ৩, ৬, ১২, ২৪, ?",
    "options": [
      "৩০",
      "৩৬",
      "৪৮",
      "৬০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪৮"
  },
  {
    "id": "q-1091",
    "num": "১০৯১",
    "category": "advanced_math",
    "question": "ধারাটি পূরণ করুন: ১০০, ৯০, ৮০, ৭০, ?",
    "options": [
      "৫০",
      "৬০",
      "৬৫",
      "৭৫"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৬০"
  },
  {
    "id": "q-1092",
    "num": "১০৯২",
    "category": "advanced_math",
    "question": "ধারাটি পূরণ করুন: ২, ৫, ৮, ১১, ?",
    "options": [
      "১২",
      "১৩",
      "১৪",
      "১৫"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৪"
  },
  {
    "id": "q-1093",
    "num": "১০৯৩",
    "category": "advanced_math",
    "question": "একটি গাড়ি ঘণ্টায় ৬০ কিলোমিটার বেগে চললে ২ ঘণ্টায় কত দূর যাবে?",
    "options": [
      "৬০",
      "৯০",
      "১২০",
      "১৫০ কিলোমিটার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১২০ কিলোমিটার"
  },
  {
    "id": "q-1094",
    "num": "১০৯৪",
    "category": "advanced_math",
    "question": "৫০০ গ্রাম সমান কত কিলোগ্রাম?",
    "options": [
      "০.২৫",
      "০.৫",
      "১",
      "২"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ০.৫ কিলোগ্রাম"
  },
  {
    "id": "q-1095",
    "num": "১০৯৫",
    "category": "advanced_math",
    "question": "২.৫ লিটার সমান কত মিলিলিটার?",
    "options": [
      "২৫০",
      "৫০০",
      "২৫০০",
      "৫০০০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ২৫০০ মিলিলিটার"
  },
  {
    "id": "q-1096",
    "num": "১০৯৬",
    "category": "advanced_math",
    "question": "এক বছরে সাধারণত কত সপ্তাহ থাকে?",
    "options": [
      "৪৮",
      "৫২",
      "৫৪",
      "৫৬"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৫২"
  },
  {
    "id": "q-1097",
    "num": "১০৯৭",
    "category": "advanced_math",
    "question": "অধিবর্ষে ফেব্রুয়ারি মাসে কত দিন থাকে?",
    "options": [
      "২৮",
      "২৯",
      "৩০",
      "৩১"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২৯"
  },
  {
    "id": "q-1098",
    "num": "১০৯৮",
    "category": "advanced_math",
    "question": "একটি সরলরেখার ওপর দুটি সন্নিহিত কোণের যোগফল কত?",
    "options": [
      "৯০°",
      "১২০°",
      "১৮০°",
      "৩৬০°"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৮০°"
  },
  {
    "id": "q-1099",
    "num": "১০৯৯",
    "category": "advanced_math",
    "question": "রোমান সংখ্যায় ১০ কীভাবে লেখা হয়?",
    "options": [
      "V",
      "X",
      "L",
      "C"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) X"
  },
  {
    "id": "q-1100",
    "num": "১১০০",
    "category": "advanced_math",
    "question": "রোমান সংখ্যায় ৫০ কীভাবে লেখা হয়?",
    "options": [
      "X",
      "C",
      "L",
      "D"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) L"
  },
  {
    "id": "q-1101",
    "num": "১১০১",
    "category": "programming_tech",
    "question": "কম্পিউটারের প্রধান সার্কিট বোর্ডকে কী বলা হয়?",
    "options": [
      "মাদারবোর্ড",
      "কিবোর্ড",
      "মনিটর",
      "স্পিকার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মাদারবোর্ড"
  },
  {
    "id": "q-1102",
    "num": "১১০২",
    "category": "programming_tech",
    "question": "GPU-এর পূর্ণরূপ কী?",
    "options": [
      "General Program Unit",
      "Graphics Processing Unit",
      "Global Power Utility",
      "Graphical Personal User"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Graphics Processing Unit"
  },
  {
    "id": "q-1103",
    "num": "১১০৩",
    "category": "programming_tech",
    "question": "GPU প্রধানত কোন কাজে ব্যবহৃত হয়?",
    "options": [
      "গ্রাফিক্স ও সমান্তরাল গণনা",
      "কাগজ ছাপানো",
      "পানি গরম",
      "শব্দ মাপা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্রাফিক্স ও সমান্তরাল গণনা"
  },
  {
    "id": "q-1104",
    "num": "১১০৪",
    "category": "programming_tech",
    "question": "SSD-এর পূর্ণরূপ কী?",
    "options": [
      "Solid State Drive",
      "System Storage Data",
      "Secure Software Device",
      "Serial System Disk"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Solid State Drive"
  },
  {
    "id": "q-1105",
    "num": "১১০৫",
    "category": "programming_tech",
    "question": "HDD-এর পূর্ণরূপ কী?",
    "options": [
      "Hard Disk Drive",
      "High Data Device",
      "Human Digital Disk",
      "Hardware Data Design"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Hard Disk Drive"
  },
  {
    "id": "q-1106",
    "num": "১১০৬",
    "category": "programming_tech",
    "question": "কোনটি সাধারণত দ্রুততর তথ্য সংরক্ষণকারী ড্রাইভ?",
    "options": [
      "SSD",
      "পুরোনো HDD",
      "ফ্লপি ডিস্ক",
      "সিডি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) SSD"
  },
  {
    "id": "q-1107",
    "num": "১১০৭",
    "category": "programming_tech",
    "question": "BIOS-এর কাজ কী?",
    "options": [
      "কম্পিউটার চালুর সময় প্রাথমিক হার্ডওয়্যার পরীক্ষা ও চালু করতে সহায়তা",
      "ছবি আঁকা",
      "ইমেইল লেখা",
      "ভিডিও দেখা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কম্পিউটার চালুর সময় প্রাথমিক হার্ডওয়্যার পরীক্ষা ও চালু করতে সহায়তা"
  },
  {
    "id": "q-1108",
    "num": "১১০৮",
    "category": "programming_tech",
    "question": "কম্পিউটারে Operating System-এর প্রধান কাজ কী?",
    "options": [
      "হার্ডওয়্যার ও সফটওয়্যার পরিচালনা",
      "শুধু গান বাজানো",
      "শুধু ছবি ছাপা",
      "বিদ্যুৎ উৎপাদন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হার্ডওয়্যার ও সফটওয়্যার পরিচালনা"
  },
  {
    "id": "q-1109",
    "num": "১১০৯",
    "category": "programming_tech",
    "question": "Linux কী?",
    "options": [
      "অপারেটিং সিস্টেম",
      "সার্চ ইঞ্জিন",
      "ক্যামেরা",
      "প্রিন্টার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অপারেটিং সিস্টেম"
  },
  {
    "id": "q-1110",
    "num": "১১১০",
    "category": "programming_tech",
    "question": "macOS কোন প্রতিষ্ঠানের অপারেটিং সিস্টেম?",
    "options": [
      "Apple",
      "Google",
      "Microsoft",
      "Intel"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Apple"
  },
  {
    "id": "q-1111",
    "num": "১১১১",
    "category": "programming_tech",
    "question": "Open Source Software বলতে কী বোঝায়?",
    "options": [
      "যার সোর্স কোড নির্দিষ্ট লাইসেন্সে দেখা ও পরিবর্তন করা যায়",
      "শুধু টাকা দিয়ে ব্যবহারযোগ্য",
      "যার কোনো কোড নেই",
      "শুধু গেমের সফটওয়্যার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যার সোর্স কোড নির্দিষ্ট লাইসেন্সে দেখা ও পরিবর্তন করা যায়"
  },
  {
    "id": "q-1112",
    "num": "১১১২",
    "category": "programming_tech",
    "question": "URL-এর পূর্ণরূপ কী?",
    "options": [
      "Uniform Resource Locator",
      "Universal Random Link",
      "User Resource Language",
      "Unified Read Location"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Uniform Resource Locator"
  },
  {
    "id": "q-1113",
    "num": "১১১৩",
    "category": "programming_tech",
    "question": "HTTP-এর পূর্ণরূপ কী?",
    "options": [
      "Hypertext Transfer Protocol",
      "High Text Transmission Program",
      "Hyperlink Text Tool Protocol",
      "Home Transfer Technology"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Hypertext Transfer Protocol"
  },
  {
    "id": "q-1114",
    "num": "১১১৪",
    "category": "programming_tech",
    "question": "HTTPS কী নির্দেশ করে?",
    "options": [
      "নিরাপদ সংযোগের জন্য এনক্রিপশনসহ HTTP",
      "একটি কম্পিউটার ভাইরাস",
      "একটি ছবি",
      "একটি কিবোর্ড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিরাপদ সংযোগের জন্য এনক্রিপশনসহ HTTP"
  },
  {
    "id": "q-1115",
    "num": "১১১৫",
    "category": "programming_tech",
    "question": "DNS কী কাজ করে?",
    "options": [
      "ডোমেইন নামকে IP ঠিকানার সঙ্গে মিলিয়ে দেয়",
      "ছবি সম্পাদনা করে",
      "গান বাজায়",
      "ফাইল প্রিন্ট করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডোমেইন নামকে IP ঠিকানার সঙ্গে মিলিয়ে দেয়"
  },
  {
    "id": "q-1116",
    "num": "১১১৬",
    "category": "programming_tech",
    "question": "IP Address কী?",
    "options": [
      "নেটওয়ার্কে ডিভাইস শনাক্ত করার ঠিকানা",
      "কম্পিউটারের রং",
      "একটি গেম",
      "একটি কিবোর্ড বোতাম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নেটওয়ার্কে ডিভাইস শনাক্ত করার ঠিকানা"
  },
  {
    "id": "q-1117",
    "num": "১১১৭",
    "category": "programming_tech",
    "question": "LAN-এর পূর্ণরূপ কী?",
    "options": [
      "Local Area Network",
      "Large Access Number",
      "Long Area Node",
      "Local Application Name"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Local Area Network"
  },
  {
    "id": "q-1118",
    "num": "১১১৮",
    "category": "programming_tech",
    "question": "WAN-এর পূর্ণরূপ কী?",
    "options": [
      "Wide Area Network",
      "Wireless Access Name",
      "World Application Number",
      "Web Area Node"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Wide Area Network"
  },
  {
    "id": "q-1119",
    "num": "১১১৯",
    "category": "programming_tech",
    "question": "রাউটারের প্রধান কাজ কী?",
    "options": [
      "নেটওয়ার্কের মধ্যে তথ্য পাঠানোর পথ নির্ধারণ",
      "ছবি আঁকা",
      "কাগজ কাটা",
      "শব্দ রেকর্ড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নেটওয়ার্কের মধ্যে তথ্য পাঠানোর পথ নির্ধারণ"
  },
  {
    "id": "q-1120",
    "num": "১১২০",
    "category": "programming_tech",
    "question": "Modem-এর প্রধান কাজ কী?",
    "options": [
      "সংকেত রূপান্তরের মাধ্যমে সংযোগে সহায়তা",
      "কাগজ প্রিন্ট",
      "ভিডিও সম্পাদনা",
      "ব্যাটারি চার্জ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংকেত রূপান্তরের মাধ্যমে সংযোগে সহায়তা"
  },
  {
    "id": "q-1121",
    "num": "১১২১",
    "category": "programming_tech",
    "question": "Firewall কী কাজে ব্যবহৃত হয়?",
    "options": [
      "নেটওয়ার্ক সুরক্ষা",
      "ছবি আঁকা",
      "গান তৈরি",
      "বিদ্যুৎ সঞ্চয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নেটওয়ার্ক সুরক্ষা"
  },
  {
    "id": "q-1122",
    "num": "১১২২",
    "category": "programming_tech",
    "question": "Phishing বলতে কী বোঝায়?",
    "options": [
      "প্রতারণার মাধ্যমে গোপন তথ্য হাতিয়ে নেওয়ার চেষ্টা",
      "ছবি তোলা",
      "ফাইল সংরক্ষণ",
      "বৈধ সফটওয়্যার আপডেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রতারণার মাধ্যমে গোপন তথ্য হাতিয়ে নেওয়ার চেষ্টা"
  },
  {
    "id": "q-1123",
    "num": "১১২৩",
    "category": "programming_tech",
    "question": "Malware কী?",
    "options": [
      "ক্ষতিকর সফটওয়্যার",
      "শিক্ষামূলক বই",
      "নিরাপদ কেবল",
      "হার্ডওয়্যার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্ষতিকর সফটওয়্যার"
  },
  {
    "id": "q-1124",
    "num": "১১২৪",
    "category": "programming_tech",
    "question": "Ransomware কী ধরনের সফটওয়্যার?",
    "options": [
      "তথ্য আটকে মুক্তিপণ দাবি করে এমন ক্ষতিকর সফটওয়্যার",
      "ছবি সম্পাদনার সফটওয়্যার",
      "ক্যালকুলেটর",
      "টাইপিং সফটওয়্যার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য আটকে মুক্তিপণ দাবি করে এমন ক্ষতিকর সফটওয়্যার"
  },
  {
    "id": "q-1125",
    "num": "১১২৫",
    "category": "programming_tech",
    "question": "Two-Factor Authentication-এর উদ্দেশ্য কী?",
    "options": [
      "অ্যাকাউন্টের নিরাপত্তা বাড়ানো",
      "স্ক্রিনের উজ্জ্বলতা বাড়ানো",
      "ইন্টারনেট বন্ধ করা",
      "ব্যাটারি কমানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যাকাউন্টের নিরাপত্তা বাড়ানো"
  },
  {
    "id": "q-1126",
    "num": "১১২৬",
    "category": "programming_tech",
    "question": "CAPTCHA কী কাজে ব্যবহৃত হয়?",
    "options": [
      "মানুষ ও স্বয়ংক্রিয় বট আলাদা করতে",
      "গান শোনাতে",
      "ফাইল মুছতে",
      "রং পরিবর্তন করতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মানুষ ও স্বয়ংক্রিয় বট আলাদা করতে"
  },
  {
    "id": "q-1127",
    "num": "১১২৭",
    "category": "programming_tech",
    "question": "Database কী?",
    "options": [
      "সংগঠিত তথ্যের সংগ্রহ",
      "একটি মনিটর",
      "একটি তার",
      "একটি ব্যাটারি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংগঠিত তথ্যের সংগ্রহ"
  },
  {
    "id": "q-1128",
    "num": "১১২৮",
    "category": "programming_tech",
    "question": "SQL কী কাজে ব্যবহৃত হয়?",
    "options": [
      "ডেটাবেজ পরিচালনা ও অনুসন্ধান",
      "ছবি তোলা",
      "গান শোনা",
      "ভিডিও ধারণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডেটাবেজ পরিচালনা ও অনুসন্ধান"
  },
  {
    "id": "q-1129",
    "num": "১১২৯",
    "category": "programming_tech",
    "question": "GUI-এর পূর্ণরূপ কী?",
    "options": [
      "Graphical User Interface",
      "General Utility Input",
      "Global User Internet",
      "Graphic Unit Information"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Graphical User Interface"
  },
  {
    "id": "q-1130",
    "num": "১১৩০",
    "category": "programming_tech",
    "question": "CLI কী?",
    "options": [
      "Command Line Interface",
      "Computer Link Internet",
      "Central Logic Input",
      "Creative Language Instruction"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Command Line Interface"
  },
  {
    "id": "q-1131",
    "num": "১১৩১",
    "category": "programming_tech",
    "question": "Algorithm বলতে কী বোঝায়?",
    "options": [
      "সমস্যা সমাধানের ধাপে ধাপে নির্দেশনা",
      "একটি যন্ত্র",
      "একটি ভাইরাস",
      "একটি ছবি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সমস্যা সমাধানের ধাপে ধাপে নির্দেশনা"
  },
  {
    "id": "q-1132",
    "num": "১১৩২",
    "category": "programming_tech",
    "question": "Flowchart কী?",
    "options": [
      "প্রক্রিয়ার চিত্রভিত্তিক উপস্থাপন",
      "একটি গেম",
      "একটি হার্ডডিস্ক",
      "একটি ই-মেইল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রক্রিয়ার চিত্রভিত্তিক উপস্থাপন"
  },
  {
    "id": "q-1133",
    "num": "১১৩৩",
    "category": "programming_tech",
    "question": "Python-এ লেখা প্রদর্শনের জন্য সাধারণত কোন ফাংশন ব্যবহৃত হয়?",
    "options": [
      "print()",
      "showtext()",
      "displayword()",
      "typeout()"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) print()"
  },
  {
    "id": "q-1134",
    "num": "১১৩৪",
    "category": "programming_tech",
    "question": "Python-এ মন্তব্য লেখার জন্য কোন চিহ্ন ব্যবহৃত হয়?",
    "options": [
      "#",
      "@",
      "$",
      "%"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) #"
  },
  {
    "id": "q-1135",
    "num": "১১৩৫",
    "category": "programming_tech",
    "question": "Python-এ শর্ত পরীক্ষা করতে কোন শব্দ ব্যবহৃত হয়?",
    "options": [
      "if",
      "repeat",
      "print",
      "input"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) if"
  },
  {
    "id": "q-1136",
    "num": "১১৩৬",
    "category": "programming_tech",
    "question": "Python-এ পুনরাবৃত্তির জন্য কোনটি ব্যবহার করা যায়?",
    "options": [
      "for",
      "title",
      "color",
      "image"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) for"
  },
  {
    "id": "q-1137",
    "num": "১১৩৭",
    "category": "programming_tech",
    "question": "Python-এ ব্যবহারকারীর কাছ থেকে ইনপুট নিতে কোন ফাংশন ব্যবহৃত হয়?",
    "options": [
      "input()",
      "print()",
      "len()",
      "range()"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) input()"
  },
  {
    "id": "q-1138",
    "num": "১১৩৮",
    "category": "programming_tech",
    "question": "HTML-এ অনুচ্ছেদ তৈরির ট্যাগ কোনটি?",
    "options": [
      "<p>",
      "<h1>",
      "<img>",
      "<br>"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) <p>"
  },
  {
    "id": "q-1139",
    "num": "১১৩৯",
    "category": "programming_tech",
    "question": "HTML-এ ছবির জন্য কোন ট্যাগ ব্যবহার হয়?",
    "options": [
      "<img>",
      "<table>",
      "<title>",
      "<body>"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) <img>"
  },
  {
    "id": "q-1140",
    "num": "১১৪০",
    "category": "programming_tech",
    "question": "HTML-এ লিংক তৈরির ট্যাগ কোনটি?",
    "options": [
      "<a>",
      "<p>",
      "<div>",
      "<hr>"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) <a>"
  },
  {
    "id": "q-1141",
    "num": "১১৪১",
    "category": "programming_tech",
    "question": "CSS কী কাজে ব্যবহৃত হয়?",
    "options": [
      "ওয়েব পেজের নকশা ও স্টাইল",
      "ডেটাবেজ সংরক্ষণ",
      "হার্ডডিস্ক মেরামত",
      "ভাইরাস তৈরি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ওয়েব পেজের নকশা ও স্টাইল"
  },
  {
    "id": "q-1142",
    "num": "১১৪২",
    "category": "programming_tech",
    "question": "JavaScript কী?",
    "options": [
      "প্রোগ্রামিং ভাষা",
      "কম্পিউটারের যন্ত্রাংশ",
      "সার্চ ইঞ্জিন",
      "প্রিন্টার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রোগ্রামিং ভাষা"
  },
  {
    "id": "q-1143",
    "num": "১১৪৩",
    "category": "programming_tech",
    "question": "Git কী কাজে ব্যবহৃত হয়?",
    "options": [
      "সংস্করণ নিয়ন্ত্রণ",
      "ছবি প্রিন্ট",
      "ভিডিও ধারণ",
      "শব্দ মাপা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংস্করণ নিয়ন্ত্রণ"
  },
  {
    "id": "q-1144",
    "num": "১১৪৪",
    "category": "programming_tech",
    "question": "GitHub কী?",
    "options": [
      "কোড সংরক্ষণ ও সহযোগিতার প্ল্যাটফর্ম",
      "একটি কিবোর্ড",
      "একটি ক্যামেরা",
      "একটি অপারেটিং সিস্টেম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কোড সংরক্ষণ ও সহযোগিতার প্ল্যাটফর্ম"
  },
  {
    "id": "q-1145",
    "num": "১১৪৫",
    "category": "programming_tech",
    "question": "API-এর পূর্ণরূপ কী?",
    "options": [
      "Application Programming Interface",
      "Automatic Personal Internet",
      "Advanced Program Input",
      "Application Power Indicator"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Application Programming Interface"
  },
  {
    "id": "q-1146",
    "num": "১১৪৬",
    "category": "programming_tech",
    "question": "AI মডেলকে প্রশিক্ষণ দিতে কোনটি প্রয়োজন হতে পারে?",
    "options": [
      "তথ্য ও গণনাগত সম্পদ",
      "শুধু কাগজ",
      "শুধু পানি",
      "শুধু বাতাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য ও গণনাগত সম্পদ"
  },
  {
    "id": "q-1147",
    "num": "১১৪৭",
    "category": "programming_tech",
    "question": "Machine Learning কী?",
    "options": [
      "তথ্য থেকে প্যাটার্ন শেখার AI পদ্ধতি",
      "একটি প্রিন্টার",
      "কেবল টাইপিং",
      "একটি ক্যামেরা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য থেকে প্যাটার্ন শেখার AI পদ্ধতি"
  },
  {
    "id": "q-1148",
    "num": "১১৪৮",
    "category": "programming_tech",
    "question": "Chatbot কী?",
    "options": [
      "কথোপকথন করতে পারে এমন সফটওয়্যার",
      "একটি গাড়ি",
      "একটি ব্যাটারি",
      "একটি রাউটার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কথোপকথন করতে পারে এমন সফটওয়্যার"
  },
  {
    "id": "q-1149",
    "num": "১১৪৯",
    "category": "programming_tech",
    "question": "Prompt বলতে AI-এর ক্ষেত্রে কী বোঝায়?",
    "options": [
      "AI-কে দেওয়া নির্দেশ বা প্রশ্ন",
      "কম্পিউটারের স্ক্রিন",
      "কিবোর্ডের তার",
      "ফাইলের নাম মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) AI-কে দেওয়া নির্দেশ বা প্রশ্ন"
  },
  {
    "id": "q-1150",
    "num": "১১৫০",
    "category": "programming_tech",
    "question": "ডিজিটাল নাগরিকত্বের একটি গুরুত্বপূর্ণ দায়িত্ব কী?",
    "options": [
      "অনলাইনে দায়িত্বশীল ও সম্মানজনক আচরণ",
      "মিথ্যা তথ্য ছড়ানো",
      "অন্যের অ্যাকাউন্ট ব্যবহার",
      "ব্যক্তিগত তথ্য প্রকাশ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অনলাইনে দায়িত্বশীল ও সম্মানজনক আচরণ"
  },
  {
    "id": "q-1151",
    "num": "১১৫১",
    "category": "english_advanced",
    "question": "What is the opposite of “Ancient”?",
    "options": [
      "Modern",
      "Old",
      "Historic",
      "Past"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Modern"
  },
  {
    "id": "q-1152",
    "num": "১১৫২",
    "category": "english_advanced",
    "question": "What is the opposite of “Victory”?",
    "options": [
      "Success",
      "Defeat",
      "Achievement",
      "Win"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Defeat"
  },
  {
    "id": "q-1153",
    "num": "১১৫৩",
    "category": "english_advanced",
    "question": "What is the opposite of “Accept”?",
    "options": [
      "Receive",
      "Reject",
      "Agree",
      "Allow"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Reject"
  },
  {
    "id": "q-1154",
    "num": "১১৫৪",
    "category": "english_advanced",
    "question": "What is the opposite of “Increase”?",
    "options": [
      "Grow",
      "Expand",
      "Decrease",
      "Improve"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) Decrease"
  },
  {
    "id": "q-1155",
    "num": "১১৫৫",
    "category": "english_advanced",
    "question": "What is the opposite of “Generous”?",
    "options": [
      "Kind",
      "Selfish",
      "Helpful",
      "Friendly"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Selfish"
  },
  {
    "id": "q-1156",
    "num": "১১৫৬",
    "category": "english_advanced",
    "question": "What is the synonym of “Begin”?",
    "options": [
      "Start",
      "Finish",
      "Stop",
      "Close"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Start"
  },
  {
    "id": "q-1157",
    "num": "১১৫৭",
    "category": "english_advanced",
    "question": "What is the synonym of “Intelligent”?",
    "options": [
      "Clever",
      "Foolish",
      "Weak",
      "Lazy"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Clever"
  },
  {
    "id": "q-1158",
    "num": "১১৫৮",
    "category": "english_advanced",
    "question": "What is the synonym of “Quick”?",
    "options": [
      "Slow",
      "Rapid",
      "Late",
      "Weak"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Rapid"
  },
  {
    "id": "q-1159",
    "num": "১১৫৯",
    "category": "english_advanced",
    "question": "What is the synonym of “Difficult”?",
    "options": [
      "Easy",
      "Hard",
      "Simple",
      "Light"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Hard"
  },
  {
    "id": "q-1160",
    "num": "১১৬০",
    "category": "english_advanced",
    "question": "What is the synonym of “Silent”?",
    "options": [
      "Quiet",
      "Noisy",
      "Loud",
      "Angry"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Quiet"
  },
  {
    "id": "q-1161",
    "num": "১১৬১",
    "category": "english_advanced",
    "question": "What is the plural of “Leaf”?",
    "options": [
      "Leafs",
      "Leaves",
      "Leafes",
      "Leavs"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Leaves"
  },
  {
    "id": "q-1162",
    "num": "১১৬২",
    "category": "english_advanced",
    "question": "What is the plural of “Knife”?",
    "options": [
      "Knifes",
      "Knives",
      "Knifees",
      "Knifs"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Knives"
  },
  {
    "id": "q-1163",
    "num": "১১৬৩",
    "category": "english_advanced",
    "question": "What is the plural of “Goose”?",
    "options": [
      "Gooses",
      "Geese",
      "Goose",
      "Geeses"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Geese"
  },
  {
    "id": "q-1164",
    "num": "১১৬৪",
    "category": "english_advanced",
    "question": "What is the plural of “Woman”?",
    "options": [
      "Womans",
      "Women",
      "Womanes",
      "Womenses"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Women"
  },
  {
    "id": "q-1165",
    "num": "১১৬৫",
    "category": "english_advanced",
    "question": "What is the plural of “Ox”?",
    "options": [
      "Oxes",
      "Oxen",
      "Oxs",
      "Oxies"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Oxen"
  },
  {
    "id": "q-1166",
    "num": "১১৬৬",
    "category": "english_advanced",
    "question": "What is the comparative form of “Good”?",
    "options": [
      "Gooder",
      "Better",
      "Best",
      "More good"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Better"
  },
  {
    "id": "q-1167",
    "num": "১১৬৭",
    "category": "english_advanced",
    "question": "What is the superlative form of “Bad”?",
    "options": [
      "Worse",
      "Worst",
      "Badder",
      "Baddest"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Worst"
  },
  {
    "id": "q-1168",
    "num": "১১৬৮",
    "category": "english_advanced",
    "question": "What is the comparative form of “Beautiful”?",
    "options": [
      "Beautifuller",
      "More beautiful",
      "Most beautiful",
      "Beautifulest"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) More beautiful"
  },
  {
    "id": "q-1169",
    "num": "১১৬৯",
    "category": "english_advanced",
    "question": "What is the superlative form of “Tall”?",
    "options": [
      "Taller",
      "Tallest",
      "More tall",
      "Most tall"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Tallest"
  },
  {
    "id": "q-1170",
    "num": "১১৭০",
    "category": "english_advanced",
    "question": "Which is the correct past tense of “Buy”?",
    "options": [
      "Buyed",
      "Bought",
      "Buying",
      "Buys"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Bought"
  },
  {
    "id": "q-1171",
    "num": "১১৭১",
    "category": "english_advanced",
    "question": "Which is the correct past tense of “Teach”?",
    "options": [
      "Teached",
      "Taught",
      "Teaching",
      "Teaches"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Taught"
  },
  {
    "id": "q-1172",
    "num": "১১৭২",
    "category": "english_advanced",
    "question": "Which is the correct past tense of “Bring”?",
    "options": [
      "Bringed",
      "Brought",
      "Brings",
      "Bringing"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Brought"
  },
  {
    "id": "q-1173",
    "num": "১১৭৩",
    "category": "english_advanced",
    "question": "Which is the correct past tense of “Think”?",
    "options": [
      "Thinked",
      "Thought",
      "Thinking",
      "Thinks"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Thought"
  },
  {
    "id": "q-1174",
    "num": "১১৭৪",
    "category": "english_advanced",
    "question": "Which is the past participle of “Choose”?",
    "options": [
      "Chose",
      "Chosen",
      "Choosing",
      "Choosed"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Chosen"
  },
  {
    "id": "q-1175",
    "num": "১১৭৫",
    "category": "english_advanced",
    "question": "Complete the sentence: She ___ a doctor.",
    "options": [
      "am",
      "are",
      "is",
      "be"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) is"
  },
  {
    "id": "q-1176",
    "num": "১১৭৬",
    "category": "english_advanced",
    "question": "Complete the sentence: They ___ playing football.",
    "options": [
      "is",
      "am",
      "are",
      "was"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) are"
  },
  {
    "id": "q-1177",
    "num": "১১৭৭",
    "category": "english_advanced",
    "question": "Complete the sentence: I ___ to school every day.",
    "options": [
      "goes",
      "go",
      "going",
      "gone"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) go"
  },
  {
    "id": "q-1178",
    "num": "১১৭৮",
    "category": "english_advanced",
    "question": "Complete the sentence: He ___ football yesterday.",
    "options": [
      "play",
      "plays",
      "played",
      "playing"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) played"
  },
  {
    "id": "q-1179",
    "num": "১১৭৯",
    "category": "english_advanced",
    "question": "Complete the sentence: We ___ our homework already.",
    "options": [
      "have finished",
      "finishing",
      "finishes",
      "finish yesterday"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) have finished"
  },
  {
    "id": "q-1180",
    "num": "১১৮০",
    "category": "english_advanced",
    "question": "Which article is correct? ___ honest man.",
    "options": [
      "A",
      "An",
      "The only",
      "No article"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) An"
  },
  {
    "id": "q-1181",
    "num": "১১৮১",
    "category": "english_advanced",
    "question": "Which preposition is correct? He lives ___ Dhaka.",
    "options": [
      "in",
      "on",
      "at",
      "by"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) in"
  },
  {
    "id": "q-1182",
    "num": "১১৮২",
    "category": "english_advanced",
    "question": "Which preposition is correct? The book is ___ the table.",
    "options": [
      "at",
      "on",
      "into",
      "from"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) on"
  },
  {
    "id": "q-1183",
    "num": "১১৮৩",
    "category": "english_advanced",
    "question": "Which preposition is correct? I was born ___ 2012.",
    "options": [
      "in",
      "on",
      "at",
      "by"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) in"
  },
  {
    "id": "q-1184",
    "num": "১১৮৪",
    "category": "english_advanced",
    "question": "Which conjunction shows contrast?",
    "options": [
      "And",
      "But",
      "Or",
      "Because"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) But"
  },
  {
    "id": "q-1185",
    "num": "১১৮৫",
    "category": "english_advanced",
    "question": "Which word is an adverb?",
    "options": [
      "Slowly",
      "Beautiful",
      "Table",
      "Boy"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Slowly"
  },
  {
    "id": "q-1186",
    "num": "১১৮৬",
    "category": "english_advanced",
    "question": "Which word is a pronoun?",
    "options": [
      "They",
      "School",
      "Pencil",
      "Beautiful"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) They"
  },
  {
    "id": "q-1187",
    "num": "১১৮৭",
    "category": "english_advanced",
    "question": "Which sentence is in the passive voice?",
    "options": [
      "The boy kicked the ball.",
      "The ball was kicked by the boy.",
      "The boy kicks.",
      "The boy is kicking."
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) The ball was kicked by the boy."
  },
  {
    "id": "q-1188",
    "num": "১১৮৮",
    "category": "english_advanced",
    "question": "What is the question tag? You are happy, ___?",
    "options": [
      "are you",
      "aren't you",
      "isn't it",
      "don't you"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) aren't you"
  },
  {
    "id": "q-1189",
    "num": "১১৮৯",
    "category": "english_advanced",
    "question": "What is the correct indirect speech? He said, “I am tired.”",
    "options": [
      "He said that he was tired.",
      "He said that I am tired.",
      "He says tired.",
      "He said I tired."
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) He said that he was tired."
  },
  {
    "id": "q-1190",
    "num": "১১৯০",
    "category": "english_advanced",
    "question": "Which sentence is an imperative sentence?",
    "options": [
      "Please open the door.",
      "What a beautiful day!",
      "Are you ready?",
      "The sky is blue."
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Please open the door."
  },
  {
    "id": "q-1191",
    "num": "১১৯১",
    "category": "english_advanced",
    "question": "Which is an interrogative sentence?",
    "options": [
      "Close the window.",
      "Where do you live?",
      "What a nice flower!",
      "He is a student."
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) Where do you live?"
  },
  {
    "id": "q-1192",
    "num": "১১৯২",
    "category": "english_advanced",
    "question": "What is the meaning of “Environment”?",
    "options": [
      "পরিবেশ",
      "শিক্ষা",
      "চিকিৎসা",
      "ব্যবসা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পরিবেশ"
  },
  {
    "id": "q-1193",
    "num": "১১৯৩",
    "category": "english_advanced",
    "question": "What is the meaning of “Courage”?",
    "options": [
      "সাহস",
      "ভয়",
      "দুঃখ",
      "অলসতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাহস"
  },
  {
    "id": "q-1194",
    "num": "১১৯৪",
    "category": "english_advanced",
    "question": "What is the meaning of “Improve”?",
    "options": [
      "উন্নতি করা",
      "ধ্বংস করা",
      "ভুলে যাওয়া",
      "থামানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উন্নতি করা"
  },
  {
    "id": "q-1195",
    "num": "১১৯৫",
    "category": "english_advanced",
    "question": "What is the meaning of “Discover”?",
    "options": [
      "আবিষ্কার করা",
      "হারিয়ে ফেলা",
      "বিক্রি করা",
      "বন্ধ করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আবিষ্কার করা"
  },
  {
    "id": "q-1196",
    "num": "১১৯৬",
    "category": "english_advanced",
    "question": "What is the meaning of “Protect”?",
    "options": [
      "রক্ষা করা",
      "আঘাত করা",
      "ভাঙা",
      "ফেলে দেওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রক্ষা করা"
  },
  {
    "id": "q-1197",
    "num": "১১৯৭",
    "category": "english_advanced",
    "question": "What is the meaning of “Ancient”?",
    "options": [
      "প্রাচীন",
      "আধুনিক",
      "দ্রুত",
      "সুন্দর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রাচীন"
  },
  {
    "id": "q-1198",
    "num": "১১৯৮",
    "category": "english_advanced",
    "question": "What is the meaning of “Reliable”?",
    "options": [
      "নির্ভরযোগ্য",
      "দুর্বল",
      "অলস",
      "অজানা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নির্ভরযোগ্য"
  },
  {
    "id": "q-1199",
    "num": "১১৯৯",
    "category": "english_advanced",
    "question": "What is the meaning of “Opportunity”?",
    "options": [
      "সুযোগ",
      "বিপদ",
      "বাধা",
      "ক্ষতি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুযোগ"
  },
  {
    "id": "q-1200",
    "num": "১২০০",
    "category": "english_advanced",
    "question": "What is the meaning of “Responsibility”?",
    "options": [
      "দায়িত্ব",
      "আনন্দ",
      "ভয়",
      "গতি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দায়িত্ব"
  },
  {
    "id": "q-1201",
    "num": "১২০১",
    "category": "islamic_history",
    "question": "মহানবী (সা.) কত বছর বয়সে নবুওয়াত লাভ করেন?",
    "options": [
      "২৫ বছর",
      "৩০ বছর",
      "৪০ বছর",
      "৫০ বছর"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪০ বছর"
  },
  {
    "id": "q-1202",
    "num": "১২০২",
    "category": "islamic_history",
    "question": "মহানবী (সা.)-এর উপাধি কী ছিল?",
    "options": [
      "আল-আমিন",
      "আল-ফারুক",
      "জুলনুরাইন",
      "সাইফুল্লাহ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আল-আমিন"
  },
  {
    "id": "q-1203",
    "num": "১২০৩",
    "category": "islamic_history",
    "question": "হিজরি সন গণনা কোন ঘটনা থেকে শুরু হয়?",
    "options": [
      "বদর যুদ্ধ",
      "মক্কা বিজয়",
      "মদিনায় হিজরত",
      "বিদায় হজ"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) মদিনায় হিজরত"
  },
  {
    "id": "q-1204",
    "num": "১২০৪",
    "category": "islamic_history",
    "question": "ইসলামের ইতিহাসে প্রথম বড় যুদ্ধ কোনটি?",
    "options": [
      "উহুদ",
      "বদর",
      "খন্দক",
      "হুনাইন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বদর"
  },
  {
    "id": "q-1205",
    "num": "১২০৫",
    "category": "islamic_history",
    "question": "বদর যুদ্ধ কত হিজরিতে সংঘটিত হয়?",
    "options": [
      "১ হিজরি",
      "২ হিজরি",
      "৩ হিজরি",
      "৫ হিজরি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২ হিজরি"
  },
  {
    "id": "q-1206",
    "num": "১২০৬",
    "category": "islamic_history",
    "question": "উহুদ যুদ্ধ কত হিজরিতে সংঘটিত হয়?",
    "options": [
      "২ হিজরি",
      "৩ হিজরি",
      "৪ হিজরি",
      "৬ হিজরি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৩ হিজরি"
  },
  {
    "id": "q-1207",
    "num": "১২০৭",
    "category": "islamic_history",
    "question": "খন্দক যুদ্ধের অন্য নাম কী?",
    "options": [
      "আহযাবের যুদ্ধ",
      "বদরের যুদ্ধ",
      "হুনাইনের যুদ্ধ",
      "তাবুকের যুদ্ধ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আহযাবের যুদ্ধ"
  },
  {
    "id": "q-1208",
    "num": "১২০৮",
    "category": "islamic_history",
    "question": "হুদাইবিয়ার সন্ধি কত হিজরিতে হয়েছিল?",
    "options": [
      "৪ হিজরি",
      "৫ হিজরি",
      "৬ হিজরি",
      "৮ হিজরি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬ হিজরি"
  },
  {
    "id": "q-1209",
    "num": "১২০৯",
    "category": "islamic_history",
    "question": "মক্কা বিজয় কত হিজরিতে সংঘটিত হয়?",
    "options": [
      "৬ হিজরি",
      "৭ হিজরি",
      "৮ হিজরি",
      "১০ হিজরি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৮ হিজরি"
  },
  {
    "id": "q-1210",
    "num": "১২১০",
    "category": "islamic_history",
    "question": "বিদায় হজ কত হিজরিতে অনুষ্ঠিত হয়?",
    "options": [
      "৮ হিজরি",
      "৯ হিজরি",
      "১০ হিজরি",
      "১১ হিজরি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১০ হিজরি"
  },
  {
    "id": "q-1211",
    "num": "১২১১",
    "category": "islamic_history",
    "question": "মহানবী (সা.) কোথায় ইন্তেকাল করেন?",
    "options": [
      "মক্কা",
      "মদিনা",
      "তায়েফ",
      "জেরুজালেম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মদিনা"
  },
  {
    "id": "q-1212",
    "num": "১২১২",
    "category": "islamic_history",
    "question": "মহানবী (সা.)-এর কবর কোথায় অবস্থিত?",
    "options": [
      "মসজিদে হারাম",
      "মসজিদে নববির সংলগ্ন পবিত্র কক্ষে",
      "মসজিদে কুবা",
      "মসজিদে আকসা"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) মসজিদে নববির সংলগ্ন পবিত্র কক্ষে"
  },
  {
    "id": "q-1213",
    "num": "১২১৩",
    "category": "islamic_history",
    "question": "মহানবী (সা.)-এর দুধমায়ের নাম কী?",
    "options": [
      "হালিমা সাদিয়া (রা.)",
      "আয়েশা (রা.)",
      "ফাতিমা (রা.)",
      "সাওদা (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হালিমা সাদিয়া (রা.)"
  },
  {
    "id": "q-1214",
    "num": "১২১৪",
    "category": "islamic_history",
    "question": "মহানবী (সা.)-এর চাচা আবু তালিব কে ছিলেন?",
    "options": [
      "তাঁর অভিভাবক ও চাচা",
      "তাঁর শিক্ষক",
      "তাঁর সাহাবি",
      "তাঁর পুত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তাঁর অভিভাবক ও চাচা"
  },
  {
    "id": "q-1215",
    "num": "১২১৫",
    "category": "islamic_history",
    "question": "মহানবী (সা.)-এর কন্যাদের একজনের নাম কী?",
    "options": [
      "ফাতিমা (রা.)",
      "মারইয়াম (আ.)",
      "হাজেরা (আ.)",
      "আসিয়া (আ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফাতিমা (রা.)"
  },
  {
    "id": "q-1216",
    "num": "১২১৬",
    "category": "islamic_history",
    "question": "মহানবী (সা.)-এর কন্যা ফাতিমা (রা.)-এর স্বামী কে ছিলেন?",
    "options": [
      "আলী (রা.)",
      "উমর (রা.)",
      "উসমান (রা.)",
      "আবু বকর (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলী (রা.)"
  },
  {
    "id": "q-1217",
    "num": "১২১৭",
    "category": "islamic_history",
    "question": "‘আস-সিদ্দিক’ উপাধিতে কে পরিচিত?",
    "options": [
      "আবু বকর (রা.)",
      "উমর (রা.)",
      "উসমান (রা.)",
      "আলী (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আবু বকর (রা.)"
  },
  {
    "id": "q-1218",
    "num": "১২১৮",
    "category": "islamic_history",
    "question": "‘আল-ফারুক’ উপাধিতে কে পরিচিত?",
    "options": [
      "আবু বকর (রা.)",
      "উমর (রা.)",
      "উসমান (রা.)",
      "আলী (রা.)"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) উমর (রা.)"
  },
  {
    "id": "q-1219",
    "num": "১২১৯",
    "category": "islamic_history",
    "question": "‘জুননুরাইন’ উপাধিতে কে পরিচিত?",
    "options": [
      "উসমান (রা.)",
      "আলী (রা.)",
      "উমর (রা.)",
      "আবু বকর (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উসমান (রা.)"
  },
  {
    "id": "q-1220",
    "num": "১২২০",
    "category": "islamic_history",
    "question": "‘আসাদুল্লাহ’ উপাধি কার সঙ্গে সম্পর্কিত?",
    "options": [
      "আলী (রা.)",
      "বিলাল (রা.)",
      "সালমান ফারসি (রা.)",
      "আবু হুরায়রা (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলী (রা.)"
  },
  {
    "id": "q-1221",
    "num": "১২২১",
    "category": "islamic_history",
    "question": "ইসলামের ইতিহাসে প্রথম নারী শহীদ কে?",
    "options": [
      "সুমাইয়া (রা.)",
      "খাদিজা (রা.)",
      "আয়েশা (রা.)",
      "ফাতিমা (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুমাইয়া (রা.)"
  },
  {
    "id": "q-1222",
    "num": "১২২২",
    "category": "islamic_history",
    "question": "প্রথম ইসলাম গ্রহণকারী নারী কে?",
    "options": [
      "খাদিজা (রা.)",
      "আয়েশা (রা.)",
      "হাফসা (রা.)",
      "ফাতিমা (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) খাদিজা (রা.)"
  },
  {
    "id": "q-1223",
    "num": "১২২৩",
    "category": "islamic_history",
    "question": "প্রাপ্তবয়স্ক পুরুষদের মধ্যে প্রথম ইসলাম গ্রহণ করেন কে?",
    "options": [
      "আবু বকর (রা.)",
      "উমর (রা.)",
      "উসমান (রা.)",
      "আবু সুফিয়ান (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আবু বকর (রা.)"
  },
  {
    "id": "q-1224",
    "num": "১২২৪",
    "category": "islamic_history",
    "question": "শিশুদের মধ্যে প্রথম ইসলাম গ্রহণকারী কে ছিলেন?",
    "options": [
      "আলী (রা.)",
      "হাসান (রা.)",
      "হুসাইন (রা.)",
      "আবদুল্লাহ ইবনে আব্বাস (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আলী (রা.)"
  },
  {
    "id": "q-1225",
    "num": "১২২৫",
    "category": "islamic_history",
    "question": "কুরআনের ওহি লেখার দায়িত্বে পরিচিত সাহাবি কে?",
    "options": [
      "যায়েদ ইবনে সাবিত (রা.)",
      "বিলাল (রা.)",
      "আবু হুরায়রা (রা.)",
      "খালিদ ইবনে ওয়ালিদ (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যায়েদ ইবনে সাবিত (রা.)"
  },
  {
    "id": "q-1226",
    "num": "১২২৬",
    "category": "islamic_history",
    "question": "কুরআন মাজিদ একত্রে সংকলনের উদ্যোগ প্রথম খলিফার সময়ে নেওয়া হয় কার পরামর্শে?",
    "options": [
      "উমর (রা.)",
      "আলী (রা.)",
      "বিলাল (রা.)",
      "মুয়াজ (রা.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উমর (রা.)"
  },
  {
    "id": "q-1227",
    "num": "১২২৭",
    "category": "islamic_history",
    "question": "এক মানক কুরআন মুসহাফের কপি বিভিন্ন অঞ্চলে পাঠানোর উদ্যোগ কোন খলিফার সময়ে হয়েছিল?",
    "options": [
      "আবু বকর (রা.)",
      "উমর (রা.)",
      "উসমান (রা.)",
      "আলী (রা.)"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) উসমান (রা.)"
  },
  {
    "id": "q-1228",
    "num": "১২২৮",
    "category": "islamic_history",
    "question": "হাদিসশাস্ত্রে ‘সহিহ বুখারি’ সংকলন করেন কে?",
    "options": [
      "ইমাম বুখারি (রহ.)",
      "ইমাম মুসলিম (রহ.)",
      "ইমাম তিরমিজি (রহ.)",
      "ইমাম আবু দাউদ (রহ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমাম বুখারি (রহ.)"
  },
  {
    "id": "q-1229",
    "num": "১২২৯",
    "category": "islamic_history",
    "question": "‘সহিহ মুসলিম’ সংকলন করেন কে?",
    "options": [
      "ইমাম মুসলিম (রহ.)",
      "ইমাম মালিক (রহ.)",
      "ইমাম বুখারি (রহ.)",
      "ইমাম নাসাঈ (রহ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমাম মুসলিম (রহ.)"
  },
  {
    "id": "q-1230",
    "num": "১২৩০",
    "category": "islamic_history",
    "question": "ইসলামের চারটি প্রসিদ্ধ সুন্নি ফিকহি মাজহাবের একটি কোনটি?",
    "options": [
      "হানাফি",
      "শিন্তো",
      "বৌদ্ধ",
      "কনফুসীয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হানাফি"
  },
  {
    "id": "q-1231",
    "num": "১২৩১",
    "category": "islamic_history",
    "question": "হানাফি মাজহাবের প্রতিষ্ঠাতা কে?",
    "options": [
      "ইমাম আবু হানিফা (রহ.)",
      "ইমাম শাফেয়ি (রহ.)",
      "ইমাম মালিক (রহ.)",
      "ইমাম আহমদ ইবনে হাম্বল (রহ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমাম আবু হানিফা (রহ.)"
  },
  {
    "id": "q-1232",
    "num": "১২৩২",
    "category": "islamic_history",
    "question": "শাফেয়ি মাজহাবের প্রতিষ্ঠাতা কে?",
    "options": [
      "ইমাম শাফেয়ি (রহ.)",
      "ইমাম মালিক (রহ.)",
      "ইমাম আবু হানিফা (রহ.)",
      "ইমাম বুখারি (রহ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমাম শাফেয়ি (রহ.)"
  },
  {
    "id": "q-1233",
    "num": "১২৩৩",
    "category": "islamic_history",
    "question": "মালিকি মাজহাবের প্রতিষ্ঠাতা কে?",
    "options": [
      "ইমাম মালিক (রহ.)",
      "ইমাম শাফেয়ি (রহ.)",
      "ইমাম আবু হানিফা (রহ.)",
      "ইমাম মুসলিম (রহ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমাম মালিক (রহ.)"
  },
  {
    "id": "q-1234",
    "num": "১২৩৪",
    "category": "islamic_history",
    "question": "হাম্বলি মাজহাবের প্রতিষ্ঠাতা কে?",
    "options": [
      "ইমাম আহমদ ইবনে হাম্বল (রহ.)",
      "ইমাম মালিক (রহ.)",
      "ইমাম বুখারি (রহ.)",
      "ইমাম তিরমিজি (রহ.)"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইমাম আহমদ ইবনে হাম্বল (রহ.)"
  },
  {
    "id": "q-1235",
    "num": "১২৩৫",
    "category": "islamic_history",
    "question": "ইসলামের পবিত্র কাবা শরিফের কালো পাথরের নাম কী?",
    "options": [
      "হাজরে আসওয়াদ",
      "মাকামে ইবরাহিম",
      "জমজম",
      "সাফা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হাজরে আসওয়াদ"
  },
  {
    "id": "q-1236",
    "num": "১২৩৬",
    "category": "islamic_history",
    "question": "জমজম কূপ কোথায় অবস্থিত?",
    "options": [
      "মসজিদে হারাম",
      "মসজিদে নববি",
      "মসজিদে কুবা",
      "মসজিদে আকসা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মসজিদে হারাম"
  },
  {
    "id": "q-1237",
    "num": "১২৩৭",
    "category": "islamic_history",
    "question": "সাফা ও মারওয়া কী?",
    "options": [
      "মক্কার দুটি পাহাড়",
      "দুটি নদী",
      "দুটি শহর",
      "দুটি মরুভূমি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মক্কার দুটি পাহাড়"
  },
  {
    "id": "q-1238",
    "num": "১২৩৮",
    "category": "islamic_history",
    "question": "হজের গুরুত্বপূর্ণ কার্যক্রমের একটি আরাফাতের ময়দানে অবস্থান কোন তারিখে হয়?",
    "options": [
      "৮ জিলহজ",
      "৯ জিলহজ",
      "১০ জিলহজ",
      "১২ জিলহজ"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ৯ জিলহজ"
  },
  {
    "id": "q-1239",
    "num": "১২৩৯",
    "category": "islamic_history",
    "question": "মুসলমানরা হজ পালনের জন্য কোন শহরে যান?",
    "options": [
      "মক্কা",
      "কায়রো",
      "বাগদাদ",
      "দামেস্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মক্কা"
  },
  {
    "id": "q-1240",
    "num": "১২৪০",
    "category": "islamic_history",
    "question": "ইসলামের প্রথম কিবলা কোনটি?",
    "options": [
      "বায়তুল মাকদিস",
      "কাবা শরিফ",
      "মসজিদে নববি",
      "মসজিদে কুবা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বায়তুল মাকদিস"
  },
  {
    "id": "q-1241",
    "num": "১২৪১",
    "category": "islamic_history",
    "question": "আল-আকসা মসজিদ কোথায় অবস্থিত?",
    "options": [
      "জেরুজালেম",
      "মদিনা",
      "মক্কা",
      "কায়রো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জেরুজালেম"
  },
  {
    "id": "q-1242",
    "num": "১২৪২",
    "category": "islamic_history",
    "question": "ইসলামের ইতিহাসে উমাইয়া খিলাফতের রাজধানী কোন শহর ছিল?",
    "options": [
      "দামেস্ক",
      "বাগদাদ",
      "কায়রো",
      "কর্ডোভা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দামেস্ক"
  },
  {
    "id": "q-1243",
    "num": "১২৪৩",
    "category": "islamic_history",
    "question": "আব্বাসীয় খিলাফতের বিখ্যাত রাজধানী কোনটি?",
    "options": [
      "বাগদাদ",
      "দামেস্ক",
      "মক্কা",
      "মদিনা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাগদাদ"
  },
  {
    "id": "q-1244",
    "num": "১২৪৪",
    "category": "islamic_history",
    "question": "বায়তুল হিকমাহ কোন শহরে প্রতিষ্ঠিত হয়েছিল?",
    "options": [
      "বাগদাদ",
      "রোম",
      "এথেন্স",
      "মক্কা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাগদাদ"
  },
  {
    "id": "q-1245",
    "num": "১২৪৫",
    "category": "islamic_history",
    "question": "বায়তুল হিকমাহ কী হিসেবে পরিচিত ছিল?",
    "options": [
      "জ্ঞান ও অনুবাদের কেন্দ্র",
      "সেনাবাহিনীর দুর্গ",
      "সমুদ্রবন্দর",
      "বাজার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জ্ঞান ও অনুবাদের কেন্দ্র"
  },
  {
    "id": "q-1246",
    "num": "১২৪৬",
    "category": "islamic_history",
    "question": "মুসলিম জ্যোতির্বিজ্ঞানী আল-বিরুনি কোন বিষয়ে বিখ্যাত?",
    "options": [
      "জ্যোতির্বিজ্ঞান ও ভূগোল",
      "শুধু সংগীত",
      "শুধু চিত্রকলা",
      "শুধু কৃষিকাজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জ্যোতির্বিজ্ঞান ও ভূগোল"
  },
  {
    "id": "q-1247",
    "num": "১২৪৭",
    "category": "islamic_history",
    "question": "বিখ্যাত মুসলিম চিকিৎসাবিদ ইবনে সিনার গ্রন্থ কোনটি?",
    "options": [
      "আল-কানুন ফিত-তিব",
      "গীতাঞ্জলি",
      "রিপাবলিক",
      "ইলিয়াড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আল-কানুন ফিত-তিব"
  },
  {
    "id": "q-1248",
    "num": "১২৪৮",
    "category": "islamic_history",
    "question": "ইবনে খালদুন কোন বিষয়ের জন্য বিশেষভাবে পরিচিত?",
    "options": [
      "ইতিহাস ও সমাজচিন্তা",
      "মহাকাশচারিতা",
      "চিত্রকলা",
      "জাহাজ নির্মাণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইতিহাস ও সমাজচিন্তা"
  },
  {
    "id": "q-1249",
    "num": "১২৪৯",
    "category": "islamic_history",
    "question": "রমজানের শেষে মুসলমানরা কোন ঈদ পালন করেন?",
    "options": [
      "ঈদুল ফিতর",
      "ঈদুল আজহা",
      "আশুরা",
      "শবে বরাত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঈদুল ফিতর"
  },
  {
    "id": "q-1250",
    "num": "১২৫০",
    "category": "islamic_history",
    "question": "ইসলামের নৈতিক শিক্ষায় প্রতিবেশীর সঙ্গে কেমন আচরণ করতে বলা হয়েছে?",
    "options": [
      "সদাচরণ করতে",
      "অবহেলা করতে",
      "অন্যায় করতে",
      "বিরোধ সৃষ্টি করতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সদাচরণ করতে"
  },
  {
    "id": "q-1251",
    "num": "১২৫১",
    "category": "sports_olympics",
    "question": "ক্রিকেটে এক ওভারে সাধারণত কয়টি বৈধ বল থাকে?",
    "options": [
      "৪টি",
      "৫টি",
      "৬টি",
      "৮টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬টি"
  },
  {
    "id": "q-1252",
    "num": "১২৫২",
    "category": "sports_olympics",
    "question": "ক্রিকেটে শূন্য রানে আউট হলে তাকে কী বলা হয়?",
    "options": [
      "সেঞ্চুরি",
      "ডাক",
      "হ্যাটট্রিক",
      "চার"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ডাক"
  },
  {
    "id": "q-1253",
    "num": "১২৫৩",
    "category": "sports_olympics",
    "question": "ক্রিকেটে এক ইনিংসে একজন ব্যাটার ১০০ রান করলে কী বলা হয়?",
    "options": [
      "অর্ধশতক",
      "শতক",
      "ডাবল ডাক",
      "হ্যাটট্রিক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) শতক"
  },
  {
    "id": "q-1254",
    "num": "১২৫৪",
    "category": "sports_olympics",
    "question": "ক্রিকেটে ৫০ রান করলে কী বলা হয়?",
    "options": [
      "অর্ধশতক",
      "শতক",
      "ডাবল সেঞ্চুরি",
      "হ্যাটট্রিক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অর্ধশতক"
  },
  {
    "id": "q-1255",
    "num": "১২৫৫",
    "category": "sports_olympics",
    "question": "ক্রিকেটে পরপর তিন বলে তিন উইকেট নিলে কী বলা হয়?",
    "options": [
      "হ্যাটট্রিক",
      "সেঞ্চুরি",
      "ডাক",
      "বাউন্ডারি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হ্যাটট্রিক"
  },
  {
    "id": "q-1256",
    "num": "১২৫৬",
    "category": "sports_olympics",
    "question": "ক্রিকেটে বল সীমানার বাইরে মাটিতে গড়িয়ে গেলে কত রান হয়?",
    "options": [
      "২",
      "৩",
      "৪",
      "৬"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৪"
  },
  {
    "id": "q-1257",
    "num": "১২৫৭",
    "category": "sports_olympics",
    "question": "ক্রিকেটে বল সরাসরি সীমানার বাইরে গেলে কত রান হয়?",
    "options": [
      "২",
      "৪",
      "৫",
      "৬"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ৬"
  },
  {
    "id": "q-1258",
    "num": "১২৫৮",
    "category": "sports_olympics",
    "question": "ক্রিকেটে উইকেটের পেছনে ফিল্ডিং করেন কে?",
    "options": [
      "উইকেটকিপার",
      "বোলার",
      "আম্পায়ার",
      "কোচ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উইকেটকিপার"
  },
  {
    "id": "q-1259",
    "num": "১২৫৯",
    "category": "sports_olympics",
    "question": "ক্রিকেটের একটি ঐতিহ্যবাহী আন্তর্জাতিক ফরম্যাটের নাম কী?",
    "options": [
      "টেস্ট ক্রিকেট",
      "হ্যান্ডবল",
      "রাগবি",
      "বেসবল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টেস্ট ক্রিকেট"
  },
  {
    "id": "q-1260",
    "num": "১২৬০",
    "category": "sports_olympics",
    "question": "ওয়ানডে ক্রিকেটে প্রতি ইনিংসে সর্বোচ্চ কত ওভার থাকে?",
    "options": [
      "২০",
      "৪০",
      "৫০",
      "৬০"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৫০"
  },
  {
    "id": "q-1261",
    "num": "১২৬১",
    "category": "sports_olympics",
    "question": "টি-টোয়েন্টি ক্রিকেটে প্রতি ইনিংসে কত ওভার থাকে?",
    "options": [
      "১০",
      "২০",
      "৩০",
      "৫০"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ২০"
  },
  {
    "id": "q-1262",
    "num": "১২৬২",
    "category": "sports_olympics",
    "question": "ক্রিকেটে LBW-এর পূর্ণরূপ কী?",
    "options": [
      "Leg Before Wicket",
      "Long Ball Wide",
      "Last Bat Winner",
      "Leg Behind Wall"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Leg Before Wicket"
  },
  {
    "id": "q-1263",
    "num": "১২৬৩",
    "category": "sports_olympics",
    "question": "ফুটবলে গোলরক্ষক কোন জায়গায় হাত দিয়ে বল ধরতে পারেন?",
    "options": [
      "নিজের পেনাল্টি এলাকার মধ্যে",
      "পুরো মাঠে",
      "প্রতিপক্ষের পেনাল্টি এলাকায়",
      "কেন্দ্রবিন্দুতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিজের পেনাল্টি এলাকার মধ্যে"
  },
  {
    "id": "q-1264",
    "num": "১২৬৪",
    "category": "sports_olympics",
    "question": "ফুটবলে পেনাল্টি কিকের দূরত্ব কত?",
    "options": [
      "৯ মিটার",
      "১০ মিটার",
      "১১ মিটার",
      "১২ মিটার"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১১ মিটার"
  },
  {
    "id": "q-1265",
    "num": "১২৬৫",
    "category": "sports_olympics",
    "question": "ফুটবলে একটি লাল কার্ডের ফল কী?",
    "options": [
      "খেলোয়াড় মাঠ থেকে বহিষ্কৃত হন",
      "অতিরিক্ত গোল হয়",
      "খেলা শুরু হয়",
      "খেলোয়াড় বদলানো বাধ্যতামূলক হয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) খেলোয়াড় মাঠ থেকে বহিষ্কৃত হন"
  },
  {
    "id": "q-1266",
    "num": "১২৬৬",
    "category": "sports_olympics",
    "question": "ফুটবলে হলুদ কার্ড কী বোঝায়?",
    "options": [
      "সতর্কবার্তা",
      "গোল",
      "ম্যাচ জয়",
      "খেলা শেষ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সতর্কবার্তা"
  },
  {
    "id": "q-1267",
    "num": "১২৬৭",
    "category": "sports_olympics",
    "question": "ফুটবল বিশ্বকাপের আয়োজক সংস্থা কোনটি?",
    "options": [
      "FIFA",
      "ICC",
      "IOC",
      "FIDE"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) FIFA"
  },
  {
    "id": "q-1268",
    "num": "১২৬৮",
    "category": "sports_olympics",
    "question": "ফুটবলে হ্যাটট্রিক বলতে কী বোঝায়?",
    "options": [
      "একজন খেলোয়াড়ের এক ম্যাচে তিন গোল",
      "তিনটি পাস",
      "তিনটি কর্নার",
      "তিনটি হলুদ কার্ড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) একজন খেলোয়াড়ের এক ম্যাচে তিন গোল"
  },
  {
    "id": "q-1269",
    "num": "১২৬৯",
    "category": "sports_olympics",
    "question": "বাস্কেটবলের আবিষ্কারক কে?",
    "options": [
      "জেমস নাইসমিথ",
      "পিয়ের দ্য কুবার্তাঁ",
      "উইলিয়াম মরগান",
      "জেমস ওয়াট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জেমস নাইসমিথ"
  },
  {
    "id": "q-1270",
    "num": "১২৭০",
    "category": "sports_olympics",
    "question": "ভলিবলের আবিষ্কারক কে?",
    "options": [
      "উইলিয়াম মরগান",
      "জেমস নাইসমিথ",
      "জেমস ওয়াট",
      "কার্ল বেঞ্জ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উইলিয়াম মরগান"
  },
  {
    "id": "q-1271",
    "num": "১২৭১",
    "category": "sports_olympics",
    "question": "টেবিল টেনিসে বলের প্রচলিত রং কী হতে পারে?",
    "options": [
      "সাদা বা কমলা",
      "সবুজ মাত্র",
      "নীল মাত্র",
      "কালো মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাদা বা কমলা"
  },
  {
    "id": "q-1272",
    "num": "১২৭২",
    "category": "sports_olympics",
    "question": "টেবিল টেনিসের আরেকটি পরিচিত নাম কী?",
    "options": [
      "পিংপং",
      "রাগবি",
      "হকি",
      "পোলো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিংপং"
  },
  {
    "id": "q-1273",
    "num": "১২৭৩",
    "category": "sports_olympics",
    "question": "ব্যাডমিন্টনে ব্যবহৃত পালকযুক্ত বস্তুর নাম কী?",
    "options": [
      "শাটলকক",
      "ফুটবল",
      "পক",
      "ডিস্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শাটলকক"
  },
  {
    "id": "q-1274",
    "num": "১২৭৪",
    "category": "sports_olympics",
    "question": "টেনিসে শূন্য পয়েন্টকে কী বলা হয়?",
    "options": [
      "লাভ",
      "ডিউস",
      "অ্যাডভান্টেজ",
      "সেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লাভ"
  },
  {
    "id": "q-1275",
    "num": "১২৭৫",
    "category": "sports_olympics",
    "question": "টেনিসে ৪০-৪০ স্কোরকে কী বলা হয়?",
    "options": [
      "লাভ",
      "ডিউস",
      "সেট পয়েন্ট",
      "ম্যাচ পয়েন্ট"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ডিউস"
  },
  {
    "id": "q-1276",
    "num": "১২৭৬",
    "category": "sports_olympics",
    "question": "উইম্বলডন কোন খেলার বিখ্যাত প্রতিযোগিতা?",
    "options": [
      "টেনিস",
      "ক্রিকেট",
      "ফুটবল",
      "বাস্কেটবল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টেনিস"
  },
  {
    "id": "q-1277",
    "num": "১২৭৭",
    "category": "sports_olympics",
    "question": "ফ্রেঞ্চ ওপেন কোন খেলার প্রতিযোগিতা?",
    "options": [
      "টেনিস",
      "হকি",
      "গলফ",
      "ক্রিকেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) টেনিস"
  },
  {
    "id": "q-1278",
    "num": "১২৭৮",
    "category": "sports_olympics",
    "question": "ট্যুর দ্য ফ্রান্স কোন খেলার প্রতিযোগিতা?",
    "options": [
      "সাইক্লিং",
      "দৌড়",
      "সাঁতার",
      "স্কেটিং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাইক্লিং"
  },
  {
    "id": "q-1279",
    "num": "১২৭৯",
    "category": "sports_olympics",
    "question": "গলফ খেলায় বল গর্তে ফেলতে কী ব্যবহার করা হয়?",
    "options": [
      "ক্লাব",
      "ব্যাট",
      "র‍্যাকেট",
      "লাঠি মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ক্লাব"
  },
  {
    "id": "q-1280",
    "num": "১২৮০",
    "category": "sports_olympics",
    "question": "বক্সিংয়ে খেলোয়াড়রা কী পরে হাতে আঘাতের সুরক্ষার জন্য?",
    "options": [
      "গ্লাভস",
      "বুট",
      "হেলমেট মাত্র",
      "চশমা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্লাভস"
  },
  {
    "id": "q-1281",
    "num": "১২৮১",
    "category": "sports_olympics",
    "question": "জুডো কোন দেশের উদ্ভাবিত মার্শাল আর্ট?",
    "options": [
      "জাপান",
      "চীন",
      "ভারত",
      "ব্রাজিল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জাপান"
  },
  {
    "id": "q-1282",
    "num": "১২৮২",
    "category": "sports_olympics",
    "question": "তায়কোয়ানডো কোন দেশের মার্শাল আর্ট?",
    "options": [
      "দক্ষিণ কোরিয়া",
      "জাপান",
      "থাইল্যান্ড",
      "মিশর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দক্ষিণ কোরিয়া"
  },
  {
    "id": "q-1283",
    "num": "১২৮৩",
    "category": "sports_olympics",
    "question": "কারাতে কোন দেশের মার্শাল আর্ট?",
    "options": [
      "জাপান",
      "ব্রাজিল",
      "মেক্সিকো",
      "নেপাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জাপান"
  },
  {
    "id": "q-1284",
    "num": "১২৮৪",
    "category": "sports_olympics",
    "question": "কুস্তিতে সাধারণত কী লক্ষ্য থাকে?",
    "options": [
      "প্রতিপক্ষকে নিয়ম অনুযায়ী পরাস্ত করা",
      "গোল করা",
      "ব্যাট দিয়ে বল মারা",
      "শাটলকক ছোড়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রতিপক্ষকে নিয়ম অনুযায়ী পরাস্ত করা"
  },
  {
    "id": "q-1285",
    "num": "১২৮৫",
    "category": "sports_olympics",
    "question": "দাবায় এক খেলায় মোট কতটি ঘুঁটি নিয়ে প্রত্যেক খেলোয়াড় শুরু করেন?",
    "options": [
      "১২",
      "১৪",
      "১৬",
      "১৮"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ১৬"
  },
  {
    "id": "q-1286",
    "num": "১২৮৬",
    "category": "sports_olympics",
    "question": "দাবায় ঘোড়ার চাল কেমন?",
    "options": [
      "L আকৃতির",
      "শুধু সরলরেখা",
      "শুধু তির্যক",
      "যেকোনো দিকে এক ঘর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) L আকৃতির"
  },
  {
    "id": "q-1287",
    "num": "১২৮৭",
    "category": "sports_olympics",
    "question": "দাবায় বিশপ কোন দিকে চলে?",
    "options": [
      "তির্যকভাবে",
      "শুধু সামনে",
      "শুধু পেছনে",
      "L আকৃতিতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তির্যকভাবে"
  },
  {
    "id": "q-1288",
    "num": "১২৮৮",
    "category": "sports_olympics",
    "question": "দাবায় রুক কোন দিকে চলে?",
    "options": [
      "সোজা সারি ও স্তম্ভ বরাবর",
      "শুধু তির্যক",
      "L আকৃতিতে",
      "এক ঘর মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সোজা সারি ও স্তম্ভ বরাবর"
  },
  {
    "id": "q-1289",
    "num": "১২৮৯",
    "category": "sports_olympics",
    "question": "দাবার বোর্ডে মোট কয়টি ঘর থাকে?",
    "options": [
      "৩৬",
      "৪৯",
      "৬৪",
      "৮১"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬৪"
  },
  {
    "id": "q-1290",
    "num": "১২৯০",
    "category": "sports_olympics",
    "question": "অলিম্পিক পতাকার পাঁচটি রিং কী নির্দেশ করে?",
    "options": [
      "পাঁচটি বসবাসযোগ্য মহাদেশের ঐক্য",
      "পাঁচটি মহাসাগর",
      "পাঁচটি দেশ",
      "পাঁচটি খেলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাঁচটি বসবাসযোগ্য মহাদেশের ঐক্য"
  },
  {
    "id": "q-1291",
    "num": "১২৯১",
    "category": "sports_olympics",
    "question": "আধুনিক অলিম্পিক গেমস পুনরায় শুরু হয় কত সালে?",
    "options": [
      "১৮৯৬",
      "১৯০০",
      "১৯১২",
      "১৯২০"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৮৯৬"
  },
  {
    "id": "q-1292",
    "num": "১২৯২",
    "category": "sports_olympics",
    "question": "আধুনিক অলিম্পিকের প্রথম আয়োজন কোথায় হয়েছিল?",
    "options": [
      "এথেন্স",
      "প্যারিস",
      "লন্ডন",
      "রোম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এথেন্স"
  },
  {
    "id": "q-1293",
    "num": "১২৯৩",
    "category": "sports_olympics",
    "question": "প্যারালিম্পিক গেমস কাদের জন্য আয়োজিত হয়?",
    "options": [
      "প্রতিবন্ধী ক্রীড়াবিদদের জন্য",
      "শুধু শিশুদের জন্য",
      "শুধু শিক্ষকদের জন্য",
      "শুধু কোচদের জন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রতিবন্ধী ক্রীড়াবিদদের জন্য"
  },
  {
    "id": "q-1294",
    "num": "১২৯৪",
    "category": "sports_olympics",
    "question": "দাবা খেলার আন্তর্জাতিক সংস্থার সংক্ষিপ্ত নাম কী?",
    "options": [
      "FIDE",
      "FIFA",
      "ICC",
      "IOC"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) FIDE"
  },
  {
    "id": "q-1295",
    "num": "১২৯৫",
    "category": "sports_olympics",
    "question": "রাগবি খেলায় প্রধানত কী ব্যবহার করা হয়?",
    "options": [
      "ডিম্বাকৃতির বল",
      "শাটলকক",
      "গোলাকার টেবিল টেনিস বল",
      "দাবার ঘুঁটি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডিম্বাকৃতির বল"
  },
  {
    "id": "q-1296",
    "num": "১২৯৬",
    "category": "sports_olympics",
    "question": "সাঁতার প্রতিযোগিতা কোথায় অনুষ্ঠিত হয়?",
    "options": [
      "সুইমিং পুলে",
      "ফুটবল মাঠে",
      "বাস্কেটবল কোর্টে",
      "ক্রিকেট পিচে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুইমিং পুলে"
  },
  {
    "id": "q-1297",
    "num": "১২৯৭",
    "category": "sports_olympics",
    "question": "দৌড় প্রতিযোগিতায় ১০০ মিটার কোন ধরনের ইভেন্ট?",
    "options": [
      "স্প্রিন্ট",
      "ম্যারাথন",
      "সাঁতার",
      "সাইক্লিং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্প্রিন্ট"
  },
  {
    "id": "q-1298",
    "num": "১২৯৮",
    "category": "sports_olympics",
    "question": "হকি খেলায় গোল করার জন্য কী ব্যবহার করা হয়?",
    "options": [
      "স্টিক",
      "ব্যাট",
      "র‍্যাকেট",
      "গ্লাভস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্টিক"
  },
  {
    "id": "q-1299",
    "num": "১২৯৯",
    "category": "sports_olympics",
    "question": "বাংলাদেশ কোন খেলায় বিশেষভাবে জাতীয় পর্যায়ে কাবাডির ঐতিহ্যের জন্য পরিচিত?",
    "options": [
      "কাবাডি",
      "গলফ",
      "স্কিইং",
      "আইস হকি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাবাডি"
  },
  {
    "id": "q-1300",
    "num": "১৩০০",
    "category": "sports_olympics",
    "question": "খেলাধুলার সবচেয়ে গুরুত্বপূর্ণ নৈতিক গুণগুলোর একটি কী?",
    "options": [
      "খেলোয়াড়সুলভ মনোভাব",
      "প্রতারণা",
      "অন্যায়",
      "অসৌজন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) খেলোয়াড়সুলভ মনোভাব"
  },
  {
    "id": "q-1301",
    "num": "১৩০১",
    "category": "world_literature_arts",
    "question": "‘ডন কিহোতে’ উপন্যাসের লেখক কে?",
    "options": [
      "মিগেল দে সার্ভান্তেস",
      "শেক্সপিয়ার",
      "চার্লস ডিকেন্স",
      "মার্ক টোয়েন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মিগেল দে সার্ভান্তেস"
  },
  {
    "id": "q-1302",
    "num": "১৩০২",
    "category": "world_literature_arts",
    "question": "‘রোমিও অ্যান্ড জুলিয়েট’ নাটকের রচয়িতা কে?",
    "options": [
      "উইলিয়াম শেক্সপিয়ার",
      "হোমার",
      "রবীন্দ্রনাথ",
      "জর্জ অরওয়েল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উইলিয়াম শেক্সপিয়ার"
  },
  {
    "id": "q-1303",
    "num": "১৩০৩",
    "category": "world_literature_arts",
    "question": "‘হ্যামলেট’ কোন ধরনের সাহিত্যকর্ম?",
    "options": [
      "নাটক",
      "কবিতা",
      "বিজ্ঞান বই",
      "জীবনী"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নাটক"
  },
  {
    "id": "q-1304",
    "num": "১৩০৪",
    "category": "world_literature_arts",
    "question": "‘অলিভার টুইস্ট’ উপন্যাসের লেখক কে?",
    "options": [
      "চার্লস ডিকেন্স",
      "মার্ক টোয়েন",
      "জুল ভার্ন",
      "টলস্টয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চার্লস ডিকেন্স"
  },
  {
    "id": "q-1305",
    "num": "১৩০৫",
    "category": "world_literature_arts",
    "question": "‘অ্যাডভেঞ্চারস অব টম সয়ার’ কার লেখা?",
    "options": [
      "মার্ক টোয়েন",
      "শেক্সপিয়ার",
      "হোমার",
      "ডিকেন্স"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মার্ক টোয়েন"
  },
  {
    "id": "q-1306",
    "num": "১৩০৬",
    "category": "world_literature_arts",
    "question": "‘ওয়ার অ্যান্ড পিস’ উপন্যাসের লেখক কে?",
    "options": [
      "লিও টলস্টয়",
      "দস্তয়েভস্কি",
      "ভিক্টর হুগো",
      "জুল ভার্ন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লিও টলস্টয়"
  },
  {
    "id": "q-1307",
    "num": "১৩০৭",
    "category": "world_literature_arts",
    "question": "‘লা মিজারেবল’ উপন্যাসের লেখক কে?",
    "options": [
      "ভিক্টর হুগো",
      "টলস্টয়",
      "হোমার",
      "মার্ক টোয়েন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভিক্টর হুগো"
  },
  {
    "id": "q-1308",
    "num": "১৩০৮",
    "category": "world_literature_arts",
    "question": "‘দ্য জাঙ্গল বুক’ কার লেখা?",
    "options": [
      "রুডইয়ার্ড কিপলিং",
      "চার্লস ডিকেন্স",
      "জুল ভার্ন",
      "লুইস ক্যারল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রুডইয়ার্ড কিপলিং"
  },
  {
    "id": "q-1309",
    "num": "১৩০৯",
    "category": "world_literature_arts",
    "question": "‘অ্যালিস ইন ওয়ান্ডারল্যান্ড’ কার লেখা?",
    "options": [
      "লুইস ক্যারল",
      "জে. কে. রাউলিং",
      "মার্ক টোয়েন",
      "হোমার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লুইস ক্যারল"
  },
  {
    "id": "q-1310",
    "num": "১৩১০",
    "category": "world_literature_arts",
    "question": "‘হ্যারি পটার’ বইয়ের লেখক কে?",
    "options": [
      "জে. কে. রাউলিং",
      "আগাথা ক্রিস্টি",
      "লুইস ক্যারল",
      "জেন অস্টেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জে. কে. রাউলিং"
  },
  {
    "id": "q-1311",
    "num": "১৩১১",
    "category": "world_literature_arts",
    "question": "‘দ্য লিটল প্রিন্স’ বইয়ের লেখক কে?",
    "options": [
      "অঁতোয়ান দ্য সাঁত-একজুপেরি",
      "ভিক্টর হুগো",
      "ডিকেন্স",
      "শেক্সপিয়ার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অঁতোয়ান দ্য সাঁত-একজুপেরি"
  },
  {
    "id": "q-1312",
    "num": "১৩১২",
    "category": "world_literature_arts",
    "question": "‘দ্য ওডিসি’ মহাকাব্যের রচয়িতা হিসেবে কে পরিচিত?",
    "options": [
      "হোমার",
      "প্লেটো",
      "সক্রেটিস",
      "অ্যারিস্টটল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হোমার"
  },
  {
    "id": "q-1313",
    "num": "১৩১৩",
    "category": "world_literature_arts",
    "question": "‘ইলিয়াড’ কোন সভ্যতার মহাকাব্য?",
    "options": [
      "প্রাচীন গ্রিস",
      "প্রাচীন চীন",
      "প্রাচীন মিশর",
      "প্রাচীন রোম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রাচীন গ্রিস"
  },
  {
    "id": "q-1314",
    "num": "১৩১৪",
    "category": "world_literature_arts",
    "question": "‘পঞ্চতন্ত্র’ মূলত কোন ভাষায় রচিত?",
    "options": [
      "সংস্কৃত",
      "বাংলা",
      "আরবি",
      "ইংরেজি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংস্কৃত"
  },
  {
    "id": "q-1315",
    "num": "১৩১৫",
    "category": "world_literature_arts",
    "question": "‘আলিফ লায়লা’ আর কী নামে পরিচিত?",
    "options": [
      "এক হাজার এক রজনী",
      "রামায়ণ",
      "মহাভারত",
      "ইলিয়াড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এক হাজার এক রজনী"
  },
  {
    "id": "q-1316",
    "num": "১৩১৬",
    "category": "world_literature_arts",
    "question": "‘রামায়ণ’ মহাকাব্যের প্রাচীন রচয়িতা হিসেবে কে পরিচিত?",
    "options": [
      "বাল্মীকি",
      "কালিদাস",
      "ব্যাসদেব",
      "তুলসীদাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাল্মীকি"
  },
  {
    "id": "q-1317",
    "num": "১৩১৭",
    "category": "world_literature_arts",
    "question": "‘মহাভারত’ মহাকাব্যের রচয়িতা হিসেবে কাকে মানা হয়?",
    "options": [
      "ব্যাসদেব",
      "বাল্মীকি",
      "কালিদাস",
      "ভাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাসদেব"
  },
  {
    "id": "q-1318",
    "num": "১৩১৮",
    "category": "world_literature_arts",
    "question": "‘অভিজ্ঞানশকুন্তলম’ নাটকটি কার রচনা?",
    "options": [
      "কালিদাস",
      "বাণভট্ট",
      "ভাস",
      "তুলসীদাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কালিদাস"
  },
  {
    "id": "q-1319",
    "num": "১৩১৯",
    "category": "world_literature_arts",
    "question": "‘মেঘদূত’ কার রচনা?",
    "options": [
      "কালিদাস",
      "বাল্মীকি",
      "ব্যাসদেব",
      "শেক্সপিয়ার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কালিদাস"
  },
  {
    "id": "q-1320",
    "num": "১৩২০",
    "category": "world_literature_arts",
    "question": "‘দ্য প্রিন্স’ বইটির লেখক কে?",
    "options": [
      "নিকোলো ম্যাকিয়াভেলি",
      "প্লেটো",
      "সক্রেটিস",
      "মার্ক টোয়েন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিকোলো ম্যাকিয়াভেলি"
  },
  {
    "id": "q-1321",
    "num": "১৩২১",
    "category": "world_literature_arts",
    "question": "মোনালিসা চিত্রকর্মের শিল্পী কে?",
    "options": [
      "লিওনার্দো দা ভিঞ্চি",
      "মাইকেলেঞ্জেলো",
      "পিকাসো",
      "ভ্যান গঘ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লিওনার্দো দা ভিঞ্চি"
  },
  {
    "id": "q-1322",
    "num": "১৩২২",
    "category": "world_literature_arts",
    "question": "‘দ্য স্টারি নাইট’ ছবির শিল্পী কে?",
    "options": [
      "ভিনসেন্ট ভ্যান গঘ",
      "পাবলো পিকাসো",
      "ক্লদ মনে",
      "রেমব্রান্ট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভিনসেন্ট ভ্যান গঘ"
  },
  {
    "id": "q-1323",
    "num": "১৩২৩",
    "category": "world_literature_arts",
    "question": "‘গুয়ের্নিকা’ চিত্রকর্মের শিল্পী কে?",
    "options": [
      "পাবলো পিকাসো",
      "লিওনার্দো দা ভিঞ্চি",
      "ভ্যান গঘ",
      "রাফায়েল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাবলো পিকাসো"
  },
  {
    "id": "q-1324",
    "num": "১৩২৪",
    "category": "world_literature_arts",
    "question": "মাইকেলেঞ্জেলো কোন শিল্পের জন্য বিখ্যাত?",
    "options": [
      "ভাস্কর্য ও চিত্রকলা",
      "শুধু সংগীত",
      "শুধু সাহিত্য",
      "শুধু বিজ্ঞান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভাস্কর্য ও চিত্রকলা"
  },
  {
    "id": "q-1325",
    "num": "১৩২৫",
    "category": "world_literature_arts",
    "question": "‘দ্য লাস্ট সাপার’ কার আঁকা?",
    "options": [
      "লিওনার্দো দা ভিঞ্চি",
      "পিকাসো",
      "ভ্যান গঘ",
      "সালভাদর দালি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লিওনার্দো দা ভিঞ্চি"
  },
  {
    "id": "q-1326",
    "num": "১৩২৬",
    "category": "world_literature_arts",
    "question": "মাইকেলেঞ্জেলোর বিখ্যাত ভাস্কর্য ‘ডেভিড’ কোন দেশে রয়েছে?",
    "options": [
      "ইতালি",
      "ফ্রান্স",
      "জাপান",
      "মিশর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইতালি"
  },
  {
    "id": "q-1327",
    "num": "১৩২৭",
    "category": "world_literature_arts",
    "question": "বিখ্যাত ‘দ্য থিঙ্কার’ ভাস্কর্যটির শিল্পী কে?",
    "options": [
      "অগুস্ত রদ্যাঁ",
      "মাইকেলেঞ্জেলো",
      "পিকাসো",
      "দা ভিঞ্চি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অগুস্ত রদ্যাঁ"
  },
  {
    "id": "q-1328",
    "num": "১৩২৮",
    "category": "world_literature_arts",
    "question": "কাগজের ভাঁজ দিয়ে বিভিন্ন আকৃতি তৈরির জাপানি শিল্পের নাম কী?",
    "options": [
      "অরিগামি",
      "ক্যালিগ্রাফি",
      "কাবুকি",
      "ইকেবানা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অরিগামি"
  },
  {
    "id": "q-1329",
    "num": "১৩২৯",
    "category": "world_literature_arts",
    "question": "জাপানের ঐতিহ্যবাহী ফুল সাজানোর শিল্পের নাম কী?",
    "options": [
      "ইকেবানা",
      "অরিগামি",
      "সুমো",
      "হাইকু"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইকেবানা"
  },
  {
    "id": "q-1330",
    "num": "১৩৩০",
    "category": "world_literature_arts",
    "question": "জাপানের ছোট কবিতার একটি পরিচিত রূপ কোনটি?",
    "options": [
      "হাইকু",
      "সনেট",
      "মহাকাব্য",
      "গজল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হাইকু"
  },
  {
    "id": "q-1331",
    "num": "১৩৩১",
    "category": "world_literature_arts",
    "question": "সাধারণ সনেট কবিতায় কয়টি পঙ্‌ক্তি থাকে?",
    "options": [
      "৮টি",
      "১০টি",
      "১২টি",
      "১৪টি"
    ],
    "correctIndex": 3,
    "explanation": "সঠিক উত্তর: ঘ) ১৪টি"
  },
  {
    "id": "q-1332",
    "num": "১৩৩২",
    "category": "world_literature_arts",
    "question": "অপেরা কী ধরনের শিল্প?",
    "options": [
      "সংগীতনির্ভর মঞ্চনাট্য",
      "ভাস্কর্য",
      "চিত্রকলা",
      "কাগজের শিল্প"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংগীতনির্ভর মঞ্চনাট্য"
  },
  {
    "id": "q-1333",
    "num": "১৩৩৩",
    "category": "world_literature_arts",
    "question": "পিয়ানো কোন ধরনের বাদ্যযন্ত্র?",
    "options": [
      "কিবোর্ড বাদ্যযন্ত্র",
      "বায়ুবাদ্য",
      "পারকাশন মাত্র",
      "তারবিহীন বাদ্যযন্ত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কিবোর্ড বাদ্যযন্ত্র"
  },
  {
    "id": "q-1334",
    "num": "১৩৩৪",
    "category": "world_literature_arts",
    "question": "বাঁশি কোন ধরনের বাদ্যযন্ত্র?",
    "options": [
      "বায়ুবাদ্য",
      "তারবাদ্য",
      "কিবোর্ড",
      "পারকাশন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বায়ুবাদ্য"
  },
  {
    "id": "q-1335",
    "num": "১৩৩৫",
    "category": "world_literature_arts",
    "question": "তবলা কোন ধরনের বাদ্যযন্ত্র?",
    "options": [
      "তালবাদ্য",
      "তারবাদ্য",
      "বায়ুবাদ্য",
      "কিবোর্ড"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তালবাদ্য"
  },
  {
    "id": "q-1336",
    "num": "১৩৩৬",
    "category": "world_literature_arts",
    "question": "সেতার কোন দেশের ঐতিহ্যবাহী বাদ্যযন্ত্র?",
    "options": [
      "ভারত",
      "ব্রাজিল",
      "মিশর",
      "সুইডেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভারত"
  },
  {
    "id": "q-1337",
    "num": "১৩৩৭",
    "category": "world_literature_arts",
    "question": "ভায়োলিন কোন ধরনের বাদ্যযন্ত্র?",
    "options": [
      "তারবাদ্য",
      "বায়ুবাদ্য",
      "তালবাদ্য",
      "ইলেকট্রনিক মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তারবাদ্য"
  },
  {
    "id": "q-1338",
    "num": "১৩৩৮",
    "category": "world_literature_arts",
    "question": "গিটার সাধারণত কয়টি তারবিশিষ্ট হয়?",
    "options": [
      "৪টি",
      "৫টি",
      "৬টি",
      "৮টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৬টি"
  },
  {
    "id": "q-1339",
    "num": "১৩৩৯",
    "category": "world_literature_arts",
    "question": "পিয়ানোতে সাধারণত কয়টি কী থাকে?",
    "options": [
      "৬১টি",
      "৭২টি",
      "৮৮টি",
      "১০০টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৮৮টি"
  },
  {
    "id": "q-1340",
    "num": "১৩৪০",
    "category": "world_literature_arts",
    "question": "সংগীতে তাল কী নির্দেশ করে?",
    "options": [
      "ছন্দের নিয়মিত বিন্যাস",
      "গানের রং",
      "গায়কের উচ্চতা",
      "শব্দের অর্থ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ছন্দের নিয়মিত বিন্যাস"
  },
  {
    "id": "q-1341",
    "num": "১৩৪১",
    "category": "world_literature_arts",
    "question": "গ্র্যামি পুরস্কার কোন ক্ষেত্রে দেওয়া হয়?",
    "options": [
      "সংগীত",
      "চিকিৎসা",
      "কৃষি",
      "স্থাপত্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সংগীত"
  },
  {
    "id": "q-1342",
    "num": "১৩৪২",
    "category": "world_literature_arts",
    "question": "অস্কার পুরস্কার কোন শিল্পের সঙ্গে সম্পর্কিত?",
    "options": [
      "চলচ্চিত্র",
      "সাহিত্য",
      "কৃষি",
      "খেলাধুলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চলচ্চিত্র"
  },
  {
    "id": "q-1343",
    "num": "১৩৪৩",
    "category": "world_literature_arts",
    "question": "পুলিৎজার পুরস্কার কোন ক্ষেত্রগুলোর সঙ্গে সম্পর্কিত?",
    "options": [
      "সাংবাদিকতা ও সাহিত্যসহ কয়েকটি ক্ষেত্র",
      "শুধু ফুটবল",
      "শুধু চিকিৎসা",
      "শুধু গণিত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সাংবাদিকতা ও সাহিত্যসহ কয়েকটি ক্ষেত্র"
  },
  {
    "id": "q-1344",
    "num": "১৩৪৪",
    "category": "world_literature_arts",
    "question": "বুকার পুরস্কার মূলত কোন ক্ষেত্রে দেওয়া হয়?",
    "options": [
      "কথাসাহিত্য",
      "বিজ্ঞান",
      "খেলাধুলা",
      "চিত্রকলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কথাসাহিত্য"
  },
  {
    "id": "q-1345",
    "num": "১৩৪৫",
    "category": "world_literature_arts",
    "question": "নোবেল পুরস্কারের প্রতিষ্ঠাতা আলফ্রেড নোবেল কোন দেশের নাগরিক ছিলেন?",
    "options": [
      "সুইডেন",
      "ইতালি",
      "জার্মানি",
      "জাপান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুইডেন"
  },
  {
    "id": "q-1346",
    "num": "১৩৪৬",
    "category": "world_literature_arts",
    "question": "বাংলাদেশের বিখ্যাত চিত্রশিল্পী জয়নুল আবেদিন কোন প্রতিষ্ঠানের প্রতিষ্ঠায় গুরুত্বপূর্ণ ভূমিকা রাখেন?",
    "options": [
      "ঢাকা আর্ট কলেজ",
      "বাংলা একাডেমি",
      "ঢাকা বিশ্ববিদ্যালয়ের আইন বিভাগ",
      "জাতীয় সংসদ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঢাকা আর্ট কলেজ"
  },
  {
    "id": "q-1347",
    "num": "১৩৪৭",
    "category": "world_literature_arts",
    "question": "জয়নুল আবেদিনের বিখ্যাত শিল্পকর্ম কোন দুর্ভিক্ষের চিত্র তুলে ধরে?",
    "options": [
      "১৯৪৩ সালের দুর্ভিক্ষ",
      "১৯৭৪ সালের দুর্ভিক্ষ",
      "১৯১৮ সালের দুর্ভিক্ষ",
      "১৯৫২ সালের ভাষা আন্দোলন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৯৪৩ সালের দুর্ভিক্ষ"
  },
  {
    "id": "q-1348",
    "num": "১৩৪৮",
    "category": "world_literature_arts",
    "question": "বাংলাদেশের বিখ্যাত ভাস্কর হামিদুজ্জামান খান কোন শিল্পের সঙ্গে যুক্ত?",
    "options": [
      "ভাস্কর্য",
      "কণ্ঠসংগীত",
      "নাট্যরচনা",
      "চলচ্চিত্র অভিনয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভাস্কর্য"
  },
  {
    "id": "q-1349",
    "num": "১৩৪৯",
    "category": "world_literature_arts",
    "question": "বাংলাদেশের ঐতিহ্যবাহী মুখোশশিল্প কোন উৎসবের সঙ্গে বিশেষভাবে যুক্ত?",
    "options": [
      "পহেলা বৈশাখ",
      "ঈদুল আজহা",
      "বড়দিন",
      "বুদ্ধপূর্ণিমা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পহেলা বৈশাখ"
  },
  {
    "id": "q-1350",
    "num": "১৩৫০",
    "category": "world_literature_arts",
    "question": "বইয়ের প্রচ্ছদ ও পৃষ্ঠার নকশা তৈরির কাজকে কী বলা হয়?",
    "options": [
      "গ্রাফিক ডিজাইন",
      "কৃষিকাজ",
      "ধাতুশিল্প",
      "মৃৎশিল্প"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গ্রাফিক ডিজাইন"
  },
  {
    "id": "q-1351",
    "num": "১৩৫১",
    "category": "agriculture_botany",
    "question": "ধান কোন ধরনের ফসল?",
    "options": [
      "খাদ্যশস্য",
      "মসলা",
      "তেলবীজ",
      "আঁশ ফসল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) খাদ্যশস্য"
  },
  {
    "id": "q-1352",
    "num": "১৩৫২",
    "category": "agriculture_botany",
    "question": "পাটকে কী ধরনের ফসল বলা হয়?",
    "options": [
      "আঁশ ফসল",
      "ফল ফসল",
      "মসলা",
      "ডাল ফসল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আঁশ ফসল"
  },
  {
    "id": "q-1353",
    "num": "১৩৫৩",
    "category": "agriculture_botany",
    "question": "তুলা কোন কাজে প্রধানত ব্যবহৃত হয়?",
    "options": [
      "বস্ত্র তৈরিতে",
      "কাচ তৈরিতে",
      "ইট তৈরিতে",
      "সিমেন্ট তৈরিতে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বস্ত্র তৈরিতে"
  },
  {
    "id": "q-1354",
    "num": "১৩৫৪",
    "category": "agriculture_botany",
    "question": "সরিষা কোন ধরনের ফসল?",
    "options": [
      "তেলবীজ",
      "খাদ্যশস্য মাত্র",
      "আঁশ ফসল",
      "ফল ফসল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তেলবীজ"
  },
  {
    "id": "q-1355",
    "num": "১৩৫৫",
    "category": "agriculture_botany",
    "question": "মসুর ডাল কোন ধরনের ফসল?",
    "options": [
      "ডালজাতীয়",
      "তেলবীজ",
      "আঁশ",
      "মসলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ডালজাতীয়"
  },
  {
    "id": "q-1356",
    "num": "১৩৫৬",
    "category": "agriculture_botany",
    "question": "আলু উদ্ভিদের কোন অংশ?",
    "options": [
      "কাণ্ডের পরিবর্তিত অংশ",
      "মূল",
      "ফুল",
      "পাতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কাণ্ডের পরিবর্তিত অংশ"
  },
  {
    "id": "q-1357",
    "num": "১৩৫৭",
    "category": "agriculture_botany",
    "question": "গাজর উদ্ভিদের কোন অংশ?",
    "options": [
      "মূল",
      "কাণ্ড",
      "ফুল",
      "বীজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মূল"
  },
  {
    "id": "q-1358",
    "num": "১৩৫৮",
    "category": "agriculture_botany",
    "question": "পেঁয়াজের খাওয়ার উপযোগী অংশটি মূলত কী?",
    "options": [
      "পরিবর্তিত পাতার স্তরযুক্ত বাল্ব",
      "ফুল",
      "ফল",
      "বীজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পরিবর্তিত পাতার স্তরযুক্ত বাল্ব"
  },
  {
    "id": "q-1359",
    "num": "১৩৫৯",
    "category": "agriculture_botany",
    "question": "আদা উদ্ভিদের কোন অংশ?",
    "options": [
      "ভূগর্ভস্থ কাণ্ড বা রাইজোম",
      "মূল",
      "ফুল",
      "ফল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভূগর্ভস্থ কাণ্ড বা রাইজোম"
  },
  {
    "id": "q-1360",
    "num": "১৩৬০",
    "category": "agriculture_botany",
    "question": "হলুদ কোন ধরনের উদ্ভিদ অংশ?",
    "options": [
      "রাইজোম",
      "বীজ",
      "ফুল",
      "ফল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাইজোম"
  },
  {
    "id": "q-1361",
    "num": "১৩৬১",
    "category": "agriculture_botany",
    "question": "উদ্ভিদের পাতায় সবুজ কণার নাম কী?",
    "options": [
      "মাইটোকন্ড্রিয়া",
      "ক্লোরোফিল",
      "রাইবোজোম",
      "সাইটোপ্লাজম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ক্লোরোফিল"
  },
  {
    "id": "q-1362",
    "num": "১৩৬২",
    "category": "agriculture_botany",
    "question": "সালোকসংশ্লেষণ প্রক্রিয়ায় উদ্ভিদ বাতাস থেকে কোন গ্যাস গ্রহণ করে?",
    "options": [
      "অক্সিজেন",
      "কার্বন ডাই-অক্সাইড",
      "নাইট্রোজেন",
      "মিথেন"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) কার্বন ডাই-অক্সাইড"
  },
  {
    "id": "q-1363",
    "num": "১৩৬৩",
    "category": "agriculture_botany",
    "question": "সালোকসংশ্লেষণের উপজাত হিসেবে উদ্ভিদ কোন গ্যাস বাতাসে ছাড়ে?",
    "options": [
      "অক্সিজেন",
      "কার্বন ডাই-অক্সাইড",
      "ক্লোরিন",
      "হিলিয়াম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্সিজেন"
  },
  {
    "id": "q-1364",
    "num": "১৩৬৪",
    "category": "agriculture_botany",
    "question": "ইউরিয়া সারের প্রধান পুষ্টি উপাদান কোনটি?",
    "options": [
      "ফসফরাস",
      "নাইট্রোজেন",
      "পটাশিয়াম",
      "ক্যালসিয়াম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) নাইট্রোজেন"
  },
  {
    "id": "q-1365",
    "num": "১৩৬৫",
    "category": "agriculture_botany",
    "question": "টিএসপি (TSP) সার উদ্ভিদে কোন পুষ্টি জোগায়?",
    "options": [
      "নাইট্রোজেন",
      "ফসফরাস",
      "সালফার",
      "জিঙ্ক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ফসফরাস"
  },
  {
    "id": "q-1366",
    "num": "১৩৬৬",
    "category": "agriculture_botany",
    "question": "এমওপি (MOP) সারের মূল পুষ্টি উপাদান কোনটি?",
    "options": [
      "পটাশিয়াম",
      "ম্যাগনেসিয়াম",
      "নাইট্রোজেন",
      "বোরন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পটাশিয়াম"
  },
  {
    "id": "q-1367",
    "num": "১৩৬৭",
    "category": "agriculture_botany",
    "question": "মাটির উর্বরতা বাড়াতে কেঁচো তৈরি করা সারকে কী বলে?",
    "options": [
      "ইউরিয়া",
      "ভার্মিকম্পোস্ট",
      "ডিএপি",
      "জিপসাম"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ভার্মিকম্পোস্ট"
  },
  {
    "id": "q-1368",
    "num": "১৩৬৮",
    "category": "agriculture_botany",
    "question": "মাটির অম্লত্ব দূর করতে কোনটি ব্যবহার করা হয়?",
    "options": [
      "চুন",
      "সালফার",
      "অ্যাসিড",
      "ইউরিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) চুন"
  },
  {
    "id": "q-1369",
    "num": "১৩৬৯",
    "category": "agriculture_botany",
    "question": "মাটির ক্ষারত্ব কমাতে কোনটি ব্যবহার করা হয়?",
    "options": [
      "চুন",
      "জিপসাম",
      "লবণ",
      "প্লাস্টিক"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) জিপসাম"
  },
  {
    "id": "q-1370",
    "num": "১৩৭০",
    "category": "agriculture_botany",
    "question": "সবুজ সার হিসেবে কোন জাতীয় ফসল মাটিতে মিশিয়ে দেওয়া হয়?",
    "options": [
      "শনপাট ও ধইঞ্চা",
      "গম",
      "ধান",
      "তুলা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শনপাট ও ধইঞ্চা"
  },
  {
    "id": "q-1371",
    "num": "১৩৭১",
    "category": "agriculture_botany",
    "question": "বাংলাদেশের প্রধান দানাদার খাদ্যশস্য কোনটি?",
    "options": [
      "গম",
      "ধান",
      "ভুট্টা",
      "বার্লি"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) ধান"
  },
  {
    "id": "q-1372",
    "num": "১৩৭২",
    "category": "agriculture_botany",
    "question": "কোন মৌসুমে আমন ধান রোপণ করা হয়?",
    "options": [
      "শীতকাল",
      "বর্ষাকাল",
      "বসন্তকাল",
      "গ্রীষ্মকাল"
    ],
    "correctIndex": 1,
    "explanation": "সঠিক উত্তর: খ) বর্ষাকাল"
  },
  {
    "id": "q-1373",
    "num": "১৩৭৩",
    "category": "agriculture_botany",
    "question": "বোরো ধান মূলত কোন মৌসুমে চাষ করা হয়?",
    "options": [
      "শীত ও বসন্তকাল",
      "বর্ষাকাল",
      "শরৎকাল",
      "হেমন্তকাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) শীত ও বসন্তকাল"
  },
  {
    "id": "q-1374",
    "num": "১৩৭৪",
    "category": "agriculture_botany",
    "question": "গম কোন ঋতুর ফসল?",
    "options": [
      "রবি শস্য",
      "খরিফ-১",
      "খরিফ-২",
      "বর্ষাকালীন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রবি শস্য"
  },
  {
    "id": "q-1375",
    "num": "১৩৭৫",
    "category": "agriculture_botany",
    "question": "ডালজাতীয় উদ্ভিদের মূলে কোন নাইট্রোজেন সংবন্ধনকারী ব্যাকটেরিয়া থাকে?",
    "options": [
      "রাইজোবিয়াম",
      "ই. কোলাই",
      "সালমোনেলা",
      "ভিব্রিও"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাইজোবিয়াম"
  },
  {
    "id": "q-1376",
    "num": "১৩৭৬",
    "category": "agriculture_botany",
    "question": "উদ্ভিদের বৃদ্ধি নিয়ন্ত্রণকারী হরমোন কোনটি?",
    "options": [
      "অক্সিন",
      "ইনসুলিন",
      "অ্যাড্রেনালিন",
      "হিমোগ্লোবিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অক্সিন"
  },
  {
    "id": "q-1377",
    "num": "১৩৭৭",
    "category": "agriculture_botany",
    "question": "ফল পাকাতে কোন গ্যাসীয় হরমোন সাহায্য করে?",
    "options": [
      "ইথিলিন",
      "অক্সিন",
      "জিবেরেলিন",
      "সাইটোকাইনিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইথিলিন"
  },
  {
    "id": "q-1378",
    "num": "১৩৭৮",
    "category": "agriculture_botany",
    "question": "উদ্ভিদের জাইলেম টিস্যুর প্রধান কাজ কী?",
    "options": [
      "পানি ও খনিজ লবণ পরিবহন",
      "খাদ্য সঞ্চয়",
      "প্রস্বেদন বন্ধ করা",
      "ফুল ফোটানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পানি ও খনিজ লবণ পরিবহন"
  },
  {
    "id": "q-1379",
    "num": "১৩৭৯",
    "category": "agriculture_botany",
    "question": "উদ্ভিদের ফ্লোয়েম টিস্যুর প্রধান কাজ কী?",
    "options": [
      "পাতায় তৈরি খাদ্য সারা দেহে পরিবহন",
      "পানি শোষণ",
      "কাণ্ড শক্ত করা",
      "মূল বৃদ্ধি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাতায় তৈরি খাদ্য সারা দেহে পরিবহন"
  },
  {
    "id": "q-1380",
    "num": "১৩৮০",
    "category": "agriculture_botany",
    "question": "উদ্ভিদের অতিরিক্ত পানি বাষ্পাকারে বের করে দেওয়ার প্রক্রিয়াকে কী বলে?",
    "options": [
      "প্রস্বেদন বা বাষ্পমোচন",
      "অভিস্রবণ",
      "ব্যাপন",
      "সালোকসংশ্লেষণ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্রস্বেদন বা বাষ্পমোচন"
  },
  {
    "id": "q-1381",
    "num": "১৩৮১",
    "category": "agriculture_botany",
    "question": "মাটিবিহীন পুষ্টিদ্রবণের সাহায্যে গাছ চাষ করার পদ্ধতিকে কী বলে?",
    "options": [
      "হাইড্রোপনিক্স",
      "অ্যারোপনিক্স",
      "প্লাস্টিকালচার",
      "সিলভিকালচার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হাইড্রোপনিক্স"
  },
  {
    "id": "q-1382",
    "num": "১৩৮২",
    "category": "agriculture_botany",
    "question": "মাশরুম কোন পদ্ধতিতে চাষ করা হয়?",
    "options": [
      "স্পন ও সাবস্ট্রেট মাধ্যম",
      "সরাসরি পানিতে",
      "বালুতে",
      "পাথরে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্পন ও সাবস্ট্রেট মাধ্যম"
  },
  {
    "id": "q-1383",
    "num": "১৩৮৩",
    "category": "agriculture_botany",
    "question": "বিটি বেগুন (Bt Brinjal) কী ধরনের প্রযুক্তি দ্বারা উদ্ভাবিত?",
    "options": [
      "জেনেটিক ইঞ্জিনিয়ারিং বা বায়োটেকনোলজি",
      "হাইড্রোপনিক্স",
      "টিস্যু কালচার মাত্র",
      "ক্লোনিং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জেনেটিক ইঞ্জিনিয়ারিং বা বায়োটেকনোলজি"
  },
  {
    "id": "q-1384",
    "num": "১৩৮৪",
    "category": "agriculture_botany",
    "question": "টিস্যু কালচারের জনক বলা হয় কাকে?",
    "options": [
      "গটলিয়েব হেবারল্যান্ডট",
      "রবার্ট হুক",
      "মেন্ডেল",
      "ডারউইন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) গটলিয়েব হেবারল্যান্ডট"
  },
  {
    "id": "q-1385",
    "num": "১৩৮৫",
    "category": "agriculture_botany",
    "question": "মাছের কৃত্রিম প্রজননে কোন গ্রন্থির নির্যাস ব্যবহার করা হয়?",
    "options": [
      "পিটুইটারি গ্রন্থি",
      "থাইরয়েড",
      "অগ্ন্যাশয়",
      "যকৃৎ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিটুইটারি গ্রন্থি"
  },
  {
    "id": "q-1386",
    "num": "১৩৮৬",
    "category": "agriculture_botany",
    "question": "পোলট্রি শিল্পে কোন প্রাণীর পালনকে বোঝায়?",
    "options": [
      "হাঁস-মুরগি ও কোয়েল",
      "গরু ও মহিষ",
      "মাছ",
      "মৌমাছি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হাঁস-মুরগি ও কোয়েল"
  },
  {
    "id": "q-1387",
    "num": "১৩৮৭",
    "category": "agriculture_botany",
    "question": "দুগ্ধ উৎপাদনের জন্য বিখ্যাত গরুর জাত কোনটি?",
    "options": [
      "হোলস্টেইন ফ্রিজিয়ান",
      "রেড চিটাগাং",
      "শাহিওয়াল",
      "দেশি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) হোলস্টেইন ফ্রিজিয়ান"
  },
  {
    "id": "q-1388",
    "num": "১৩৮৮",
    "category": "agriculture_botany",
    "question": "মৌমাছি পালনের বিজ্ঞানসম্মত বিদ্যাকে কী বলে?",
    "options": [
      "এপিকালচার",
      "পিসিকালচার",
      "সেরিকালচার",
      "হরটিকালচার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) এপিকালচার"
  },
  {
    "id": "q-1389",
    "num": "১৩৮৯",
    "category": "agriculture_botany",
    "question": "রেশম চাষের বিজ্ঞানসম্মত পদ্ধতিকে কী বলে?",
    "options": [
      "সেরিকালচার",
      "এপিকালচার",
      "পিসিকালচার",
      "অ্যাগ্রোনমি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সেরিকালচার"
  },
  {
    "id": "q-1390",
    "num": "১৩৯০",
    "category": "agriculture_botany",
    "question": "মাছ চাষের বিজ্ঞানসম্মত পদ্ধতিকে কী বলে?",
    "options": [
      "পিসিকালচার",
      "এপিকালচার",
      "সেরিকালচার",
      "সিলভিকালচার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পিসিকালচার"
  },
  {
    "id": "q-1391",
    "num": "১৩৯১",
    "category": "agriculture_botany",
    "question": "উদ্ভিদের পুষ্টির জন্য মুখ্য পুষ্টি উপাদান কয়টি?",
    "options": [
      "৪টি",
      "৬টি",
      "৯টি বা ১৬টি",
      "১০টি"
    ],
    "correctIndex": 2,
    "explanation": "সঠিক উত্তর: গ) ৯টি বা ১৬টি"
  },
  {
    "id": "q-1392",
    "num": "১৩৯২",
    "category": "agriculture_botany",
    "question": "বীজের সুপ্তাবস্থা ভাঙতে সাহায্য করে কোন হরমোন?",
    "options": [
      "জিবেরেলিন",
      "অক্সিন",
      "অ্যাবসিসিক অ্যাসিড",
      "ইথিলিন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জিবেরেলিন"
  },
  {
    "id": "q-1393",
    "num": "১৩৯৩",
    "category": "agriculture_botany",
    "question": "কোন আলোতে সালোকসংশ্লেষণ সবচেয়ে বেশি হয়?",
    "options": [
      "লাল ও নীল আলো",
      "সবুজ আলো",
      "হলুদ আলো",
      "অতিবেগুনি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) লাল ও নীল আলো"
  },
  {
    "id": "q-1394",
    "num": "১৩৯৪",
    "category": "agriculture_botany",
    "question": "সবচেয়ে দ্রুত বর্ধনশীল কাষ্ঠল ঘাসজাতীয় উদ্ভিদ কোনটি?",
    "options": [
      "বাঁশ",
      "আখ",
      "ভুট্টা",
      "ঘাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাঁশ"
  },
  {
    "id": "q-1395",
    "num": "১৩৯৫",
    "category": "agriculture_botany",
    "question": "পৃথিবীর সবচেয়ে বড় ফুলের নাম কী?",
    "options": [
      "রাফলেসিয়া আর্নল্ডি",
      "সূর্যমুখী",
      "পদ্ম",
      "গোলাপ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রাফলেসিয়া আর্নল্ডি"
  },
  {
    "id": "q-1396",
    "num": "১৩৯৬",
    "category": "agriculture_botany",
    "question": "পৃথিবীর সবচেয়ে ছোট সপুষ্পক উদ্ভিদ কোনটি?",
    "options": [
      "উলফিয়া",
      "স্পাইরোগাইরা",
      "ফার্ন",
      "মস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উলফিয়া"
  },
  {
    "id": "q-1397",
    "num": "১৩৯৭",
    "category": "agriculture_botany",
    "question": "স্বর্ণলতা কোন ধরনের উদ্ভিদ?",
    "options": [
      "পরজীবী উদ্ভিদ",
      "স্বভোজী",
      "কীটভুক",
      "মরুজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পরজীবী উদ্ভিদ"
  },
  {
    "id": "q-1398",
    "num": "১৩৯৮",
    "category": "agriculture_botany",
    "question": "কলসী উদ্ভিদ (Pitcher Plant) কোন ধরনের উদ্ভিদ?",
    "options": [
      "কীটভুক বা মাংসাশী উদ্ভিদ",
      "পরভোজী",
      "ছত্রাক",
      "শৈবাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কীটভুক বা মাংসাশী উদ্ভিদ"
  },
  {
    "id": "q-1399",
    "num": "১৩৯৯",
    "category": "agriculture_botany",
    "question": "সুন্দরী গাছ কোন বনাঞ্চলের প্রধান উদ্ভিদ?",
    "options": [
      "সুন্দরবন ম্যানগ্রোভ বন",
      "ভাওয়াল বন",
      "মধুপুর বন",
      "পার্বত্য বন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুন্দরবন ম্যানগ্রোভ বন"
  },
  {
    "id": "q-1400",
    "num": "১৪০০",
    "category": "agriculture_botany",
    "question": "ম্যানগ্রোভ উদ্ভিদের শ্বাসমূলকে বিজ্ঞানের ভাষায় কী বলে?",
    "options": [
      "নিউমাটোফোর",
      "প্যারাসাইট",
      "রাইজোম",
      "স্টোলন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিউমাটোফোর"
  },
  {
    "id": "q-1401",
    "num": "১৪০১",
    "category": "economics_commerce",
    "question": "অর্থনীতির জনক কাকে বলা হয়?",
    "options": [
      "অ্যাডাম স্মিথ",
      "জন মেইনার্ড কেইনস",
      "কার্ল মার্ক্স",
      "অমর্ত্য সেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অ্যাডাম স্মিথ"
  },
  {
    "id": "q-1402",
    "num": "১৪০২",
    "category": "economics_commerce",
    "question": "আধুনিক সামষ্টিক অর্থনীতির জনক কে?",
    "options": [
      "জন মেইনার্ড কেইনস",
      "অ্যাডাম স্মিথ",
      "ডেভিড রিকার্ডো",
      "আলফ্রেড মার্শাল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জন মেইনার্ড কেইনস"
  },
  {
    "id": "q-1403",
    "num": "১৪০৩",
    "category": "economics_commerce",
    "question": "অর্থনীতিতে নোবেলজয়ী প্রথম বাঙালি কে?",
    "options": [
      "অমর্ত্য সেন",
      "মুহাম্মদ ইউনূস",
      "রবীন্দ্রনাথ ঠাকুর",
      "সত্যজিৎ রায়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অমর্ত্য সেন"
  },
  {
    "id": "q-1404",
    "num": "১৪০৪",
    "category": "economics_commerce",
    "question": "গ্রামীণ ব্যাংকের প্রতিষ্ঠাতা ও শান্তিতে নোবেলজয়ী কে?",
    "options": [
      "ড. মুহাম্মদ ইউনূস",
      "অমর্ত্য সেন",
      "ফজলে হাসান আবেদ",
      "ড. আতিউর রহমান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ড. মুহাম্মদ ইউনূস"
  },
  {
    "id": "q-1405",
    "num": "১৪০৫",
    "category": "economics_commerce",
    "question": "GDP-এর পূর্ণরূপ কী?",
    "options": [
      "Gross Domestic Product",
      "General Domestic Power",
      "Gross Development Price",
      "Global Direct Product"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Gross Domestic Product"
  },
  {
    "id": "q-1406",
    "num": "১৪০৬",
    "category": "economics_commerce",
    "question": "GNP-এর পূর্ণরূপ কী?",
    "options": [
      "Gross National Product",
      "General National Price",
      "Global Natural Product",
      "Gross Net Profit"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Gross National Product"
  },
  {
    "id": "q-1407",
    "num": "১৪০৭",
    "category": "economics_commerce",
    "question": "মুদ্রাস্ফীতি (Inflation) বলতে কী বোঝায়?",
    "options": [
      "দ্রব্যমূল্যের ক্রমাগত বৃদ্ধি ও মুদ্রার ক্রয়ক্ষমতা হ্রাস",
      "দ্রব্যমূল্য কমে যাওয়া",
      "মুদ্রার মান বৃদ্ধি",
      "বেকারত্ব হ্রাস মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দ্রব্যমূল্যের ক্রমাগত বৃদ্ধি ও মুদ্রার ক্রয়ক্ষমতা হ্রাস"
  },
  {
    "id": "q-1408",
    "num": "১৪০৮",
    "category": "economics_commerce",
    "question": "মুদ্রাসঙ্কোচন (Deflation) কী?",
    "options": [
      "দ্রব্যমূল্যের সামগ্রিক পতন",
      "মুদ্রাস্ফীতি বৃদ্ধি",
      "ব্যাংকের ঋণ বৃদ্ধি",
      "ট্যাক্স বৃদ্ধি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দ্রব্যমূল্যের সামগ্রিক পতন"
  },
  {
    "id": "q-1409",
    "num": "১৪০৯",
    "category": "economics_commerce",
    "question": "বাংলাদেশের কেন্দ্রীয় ব্যাংকের নাম কী?",
    "options": [
      "বাংলাদেশ ব্যাংক",
      "সোনালী ব্যাংক",
      "রূপালী ব্যাংক",
      "জনতা ব্যাংক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাংলাদেশ ব্যাংক"
  },
  {
    "id": "q-1410",
    "num": "১৪১০",
    "category": "economics_commerce",
    "question": "বাংলাদেশ ব্যাংক কত সালে প্রতিষ্ঠিত হয়?",
    "options": [
      "১৯৭১ সালের ডিসেম্বরে (কার্যকর ১৯৭২)",
      "১৯৪৭",
      "১৯৫২",
      "১৯৮০"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৯৭১ সালের ডিসেম্বরে (কার্যকর ১৯৭২)"
  },
  {
    "id": "q-1411",
    "num": "১৪১১",
    "category": "economics_commerce",
    "question": "বাংলাদেশের কাগজি মুদ্রার প্রচলনকারী কর্তৃপক্ষ কে?",
    "options": [
      "বাংলাদেশ ব্যাংক ও অর্থ মন্ত্রণালয়",
      "বাণিজ্য মন্ত্রণালয়",
      "সংসদ সচিবালয়",
      "পররাষ্ট্র মন্ত্রণালয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বাংলাদেশ ব্যাংক ও অর্থ মন্ত্রণালয়"
  },
  {
    "id": "q-1412",
    "num": "১৪১২",
    "category": "economics_commerce",
    "question": "বাংলাদেশের ১, ২ ও ৫ টাকার নোট বা কয়েনকে কী বলা হয়?",
    "options": [
      "সরকারি মুদ্রা (সরকারি নোট)",
      "ব্যাংক নোট",
      "আন্তর্জাতিক মুদ্রা",
      "শেয়ার"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সরকারি মুদ্রা (সরকারি নোট)"
  },
  {
    "id": "q-1413",
    "num": "১৪১৩",
    "category": "economics_commerce",
    "question": "১০ টাকা থেকে ১০০০ টাকার নোটগুলোকে কী বলা হয়?",
    "options": [
      "ব্যাংক নোট (গভর্নরের স্বাক্ষরযুক্ত)",
      "সরকারি নোট",
      "টোকেন নোট",
      "ট্যাক্স নোট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যাংক নোট (গভর্নরের স্বাক্ষরযুক্ত)"
  },
  {
    "id": "q-1414",
    "num": "১৪১৪",
    "category": "economics_commerce",
    "question": "বিশ্বের সবচেয়ে বেশি ব্যবহৃত রিজার্ভ মুদ্রা কোনটি?",
    "options": [
      "মার্কিন ডলার (USD)",
      "ইউরো",
      "পাউন্ড",
      "ইউয়ান"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মার্কিন ডলার (USD)"
  },
  {
    "id": "q-1415",
    "num": "১৪১৫",
    "category": "economics_commerce",
    "question": "ইউরোপের একক মুদ্রার নাম কী?",
    "options": [
      "ইউরো (Euro)",
      "পাউন্ড",
      "ফ্রাঙ্ক",
      "মার্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইউরো (Euro)"
  },
  {
    "id": "q-1416",
    "num": "১৪১৬",
    "category": "economics_commerce",
    "question": "যুক্তরাজ্যের মুদ্রার নাম কী?",
    "options": [
      "পাউন্ড স্টার্লিং",
      "ডলার",
      "ইউরো",
      "রুবল"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পাউন্ড স্টার্লিং"
  },
  {
    "id": "q-1417",
    "num": "১৪১৭",
    "category": "economics_commerce",
    "question": "জাপানের মুদ্রার নাম কী?",
    "options": [
      "ইয়েন (Yen)",
      "ইউয়ান",
      "ওন",
      "রুপিয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইয়েন (Yen)"
  },
  {
    "id": "q-1418",
    "num": "১৪১৮",
    "category": "economics_commerce",
    "question": "চীনের সরকারি মুদ্রার নাম কী?",
    "options": [
      "রেনমিনবি বা ইউয়ান",
      "ইয়েন",
      "ডলার",
      "বাত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রেনমিনবি বা ইউয়ান"
  },
  {
    "id": "q-1419",
    "num": "১৪১৯",
    "category": "economics_commerce",
    "question": "ভারতের কেন্দ্রীয় ব্যাংকের নাম কী?",
    "options": [
      "রিজার্ভ ব্যাংক অব ইন্ডিয়া (RBI)",
      "স্টেট ব্যাংক অব ইন্ডিয়া",
      "ন্যাশনাল ব্যাংক",
      "ইউনিয়ন ব্যাংক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রিজার্ভ ব্যাংক অব ইন্ডিয়া (RBI)"
  },
  {
    "id": "q-1420",
    "num": "১৪২০",
    "category": "economics_commerce",
    "question": "যুক্তরাষ্ট্রের কেন্দ্রীয় ব্যাংকিং ব্যবস্থার নাম কী?",
    "options": [
      "ফেডারেল রিজার্ভ (Fed)",
      "ব্যাংক অব আমেরিকা",
      "ইউএস সেন্ট্রাল",
      "আইএমএফ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ফেডারেল রিজার্ভ (Fed)"
  },
  {
    "id": "q-1421",
    "num": "১৪২১",
    "category": "economics_commerce",
    "question": "চাহিদা ও জোগানের বিধিমতে, জোগান স্থির থাকলে চাহিদা বাড়লে দাম কেমন হয়?",
    "options": [
      "দাম বাড়ে",
      "দাম কমে",
      "দাম স্থির থাকে",
      "দাম শূন্য হয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দাম বাড়ে"
  },
  {
    "id": "q-1422",
    "num": "১৪২২",
    "category": "economics_commerce",
    "question": "চাহিদা ও জোগানের বিধিমতে, চাহিদা স্থির থেকে জোগান বাড়লে দাম কেমন হয়?",
    "options": [
      "দাম কমে",
      "দাম বাড়ে",
      "দাম দ্বিগুণ হয়",
      "পরিবর্তন হয় না"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দাম কমে"
  },
  {
    "id": "q-1423",
    "num": "১৪২৩",
    "category": "economics_commerce",
    "question": "ক্ষুদ্রঋণ (Microcredit) ধারণার প্রবক্তা কে?",
    "options": [
      "অধ্যাপক ড. মুহাম্মদ ইউনূস",
      "অ্যাডাম স্মিথ",
      "মিল্টন ফ্রিডম্যান",
      "অমর্ত্য সেন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অধ্যাপক ড. মুহাম্মদ ইউনূস"
  },
  {
    "id": "q-1424",
    "num": "১৪২৪",
    "category": "economics_commerce",
    "question": "বাংলাদেশের বৃহত্তম রপ্তানি খাত কোনটি?",
    "options": [
      "তৈরি পোশাক (RMG)",
      "পাট ও পাটজাত দ্রব্য",
      "চামড়াশিল্প",
      "চা শিল্প"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তৈরি পোশাক (RMG)"
  },
  {
    "id": "q-1425",
    "num": "১৪২৫",
    "category": "economics_commerce",
    "question": "রপ্তানি প্রক্রিয়াকরণ এলাকা সংক্ষেপে কী নামে পরিচিত?",
    "options": [
      "EPZ (Export Processing Zone)",
      "SEZ",
      "VAT",
      "TIN"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) EPZ (Export Processing Zone)"
  },
  {
    "id": "q-1426",
    "num": "১৪২৬",
    "category": "economics_commerce",
    "question": "TIN-এর পূর্ণরূপ কী?",
    "options": [
      "Taxpayer Identification Number",
      "Total Income Note",
      "Tax Internet Network",
      "Trade Import Number"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Taxpayer Identification Number"
  },
  {
    "id": "q-1427",
    "num": "১৪২৭",
    "category": "economics_commerce",
    "question": "VAT-এর পূর্ণরূপ কী?",
    "options": [
      "Value Added Tax",
      "Variable Added Tariff",
      "Very Active Tax",
      "Value Amount Trade"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Value Added Tax"
  },
  {
    "id": "q-1428",
    "num": "১৪২৮",
    "category": "economics_commerce",
    "question": "বাংলাদেশে ভ্যাট বা মূসক চালু হয় কত সালে?",
    "options": [
      "১৯৯১ সালে",
      "১৯৭২ সালে",
      "১৯৮৫ সালে",
      "২০০০ সালে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৯৯১ সালে"
  },
  {
    "id": "q-1429",
    "num": "১৪২৯",
    "category": "economics_commerce",
    "question": "জাতীয় রাজস্ব বোর্ড (NBR) কোন মন্ত্রণালয়ের অধীন?",
    "options": [
      "অর্থ মন্ত্রণালয়",
      "বাণিজ্য মন্ত্রণালয়",
      "শিল্প মন্ত্রণালয়",
      "স্বরাষ্ট্র মন্ত্রণালয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অর্থ মন্ত্রণালয়"
  },
  {
    "id": "q-1430",
    "num": "১৪৩০",
    "category": "economics_commerce",
    "question": "শেয়ারবাজার পরিচালনাকারী বাংলাদেশের প্রধান স্টক এক্সচেঞ্জ কোনটি?",
    "options": [
      "ঢাকা স্টক এক্সচেঞ্জ (DSE)",
      "চট্টগ্রাম চেম্বার",
      "এফবিসিসিআই",
      "বাংলাদেশ ব্যাংক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঢাকা স্টক এক্সচেঞ্জ (DSE)"
  },
  {
    "id": "q-1431",
    "num": "১৪৩১",
    "category": "economics_commerce",
    "question": "IPO-এর পূর্ণরূপ কী?",
    "options": [
      "Initial Public Offering",
      "International Payment Order",
      "Internal Public Office",
      "Income Profit Option"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Initial Public Offering"
  },
  {
    "id": "q-1432",
    "num": "১৪৩২",
    "category": "economics_commerce",
    "question": "ব্যাংক রেট (Bank Rate) বলতে কী বোঝায়?",
    "options": [
      "যে সুদের হারে কেন্দ্রীয় ব্যাংক বাণিজ্যিক ব্যাংকগুলোকে ঋণ দেয়",
      "গ্রাহকের সঞ্চয়ী সুদের হার",
      "ঋণখেলাপির জরিমানা",
      "বৈদেশিক মুদ্রার রেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যে সুদের হারে কেন্দ্রীয় ব্যাংক বাণিজ্যিক ব্যাংকগুলোকে ঋণ দেয়"
  },
  {
    "id": "q-1433",
    "num": "১৪৩৩",
    "category": "economics_commerce",
    "question": "চলতি হিসাব (Current Account) সাধারণত কাদের জন্য বেশি উপযুক্ত?",
    "options": [
      "ব্যবসায়ী ও বাণিজ্যিক প্রতিষ্ঠান",
      "শিক্ষার্থী",
      "গৃহিণী",
      "স্থায়ী সঞ্চয়ী"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যবসায়ী ও বাণিজ্যিক প্রতিষ্ঠান"
  },
  {
    "id": "q-1434",
    "num": "১৪৩৪",
    "category": "economics_commerce",
    "question": "ATM-এর পূর্ণরূপ কী?",
    "options": [
      "Automated Teller Machine",
      "Auto Transfer Money",
      "All Time Money",
      "Active Transaction Mode"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) Automated Teller Machine"
  },
  {
    "id": "q-1435",
    "num": "১৪৩৫",
    "category": "economics_commerce",
    "question": "SWIFT কোড কী কাজে ব্যবহৃত হয়?",
    "options": [
      "আন্তর্জাতিক ব্যাংক লেনদেনে ব্যাংক শনাক্তকরণ",
      "মোবাইল রিচার্জ",
      "ট্যাক্স ফাঁকি রোধ",
      "পাসপোর্ট যাচাই"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আন্তর্জাতিক ব্যাংক লেনদেনে ব্যাংক শনাক্তকরণ"
  },
  {
    "id": "q-1436",
    "num": "১৪৩৬",
    "category": "economics_commerce",
    "question": "সরাসরি কর (Direct Tax)-এর একটি উদাহরণ কোনটি?",
    "options": [
      "আয়কর (Income Tax)",
      "ভ্যাট",
      "কাস্টমস ডিউটি",
      "আমদানি শুল্ক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আয়কর (Income Tax)"
  },
  {
    "id": "q-1437",
    "num": "১৪৩৭",
    "category": "economics_commerce",
    "question": "পরোক্ষ কর (Indirect Tax)-এর একটি উদাহরণ কোনটি?",
    "options": [
      "ভ্যাট বা মূল্য সংযোজন কর",
      "আয়কর",
      "সম্পদ কর",
      "করপোরেট ট্যাক্স"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভ্যাট বা মূল্য সংযোজন কর"
  },
  {
    "id": "q-1438",
    "num": "১৪৩৮",
    "category": "economics_commerce",
    "question": "রাজস্ব নীতি (Fiscal Policy) কারা প্রণয়ন করে?",
    "options": [
      "সরকার ও অর্থ মন্ত্রণালয়",
      "কেন্দ্রীয় ব্যাংক মাত্র",
      "বাণিজ্যিক ব্যাংক",
      "বিশ্বব্যাংক"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সরকার ও অর্থ মন্ত্রণালয়"
  },
  {
    "id": "q-1439",
    "num": "১৪৩৯",
    "category": "economics_commerce",
    "question": "আর্থিক নীতি (Monetary Policy) কারা পরিচালনা করে?",
    "options": [
      "কেন্দ্রীয় ব্যাংক (বাংলাদেশ ব্যাংক)",
      "অর্থ মন্ত্রণালয়",
      "পররাষ্ট্র মন্ত্রণালয়",
      "জাতীয় সংসদ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) কেন্দ্রীয় ব্যাংক (বাংলাদেশ ব্যাংক)"
  },
  {
    "id": "q-1440",
    "num": "১৪৪০",
    "category": "economics_commerce",
    "question": "বাজেটে আয়ের চেয়ে ব্যয় বেশি হলে তাকে কী বাজেট বলে?",
    "options": [
      "ঘাটতি বাজেট (Deficit Budget)",
      "উদ্বৃত্ত বাজেট",
      "সুষম বাজেট",
      "শূন্য বাজেট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ঘাটতি বাজেট (Deficit Budget)"
  },
  {
    "id": "q-1441",
    "num": "১৪৪১",
    "category": "economics_commerce",
    "question": "বাজেটে ব্যয়ের চেয়ে আয় বেশি হলে তাকে কী বাজেট বলে?",
    "options": [
      "উদ্বৃত্ত বাজেট (Surplus Budget)",
      "ঘাটতি বাজেট",
      "সুষম বাজেট",
      "ভারসাম্যহীন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উদ্বৃত্ত বাজেট (Surplus Budget)"
  },
  {
    "id": "q-1442",
    "num": "১৪৪২",
    "category": "economics_commerce",
    "question": "মুদ্রার অবমূল্যায়ন (Devaluation) করলে সাধারণত কোনটি উৎসাহিত হয়?",
    "options": [
      "রপ্তানি বৃদ্ধি",
      "আমদানি বৃদ্ধি",
      "মুদ্রাস্ফীতি হ্রাস মাত্র",
      "ঋণ মাফ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) রপ্তানি বৃদ্ধি"
  },
  {
    "id": "q-1443",
    "num": "১৪৪৩",
    "category": "economics_commerce",
    "question": "বিশ্ব বাণিজ্য সংস্থার (WTO) সদর দপ্তর কোথায়?",
    "options": [
      "জেনেভা, সুইজারল্যান্ড",
      "ওয়াশিংটন ডিসি",
      "নিউইয়র্ক",
      "লন্ডন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) জেনেভা, সুইজারল্যান্ড"
  },
  {
    "id": "q-1444",
    "num": "১৪৪৪",
    "category": "economics_commerce",
    "question": "বিশ্বব্যাংকের বর্তমান সভাপতি নিয়োগে কোন দেশের প্রভাব প্রচলিত?",
    "options": [
      "যুক্তরাষ্ট্র",
      "চীন",
      "জাপান",
      "জার্মানি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যুক্তরাষ্ট্র"
  },
  {
    "id": "q-1445",
    "num": "১৪৪৫",
    "category": "economics_commerce",
    "question": "আন্তর্জাতিক মুদ্রা তহবিলের (IMF) প্রধানকে কী বলা হয়?",
    "options": [
      "ব্যবস্থাপনা পরিচালক (Managing Director)",
      "মহাসচিব",
      "প্রেসিডেন্ট",
      "গভর্নর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ব্যবস্থাপনা পরিচালক (Managing Director)"
  },
  {
    "id": "q-1446",
    "num": "১৪৪৬",
    "category": "economics_commerce",
    "question": "উদ্যোক্তা (Entrepreneur) বলতে কী বোঝায়?",
    "options": [
      "যিনি ঝুঁকি নিয়ে নতুন ব্যবসা বা উদ্যোগ শুরু করেন",
      "শুধু চাকরিজীবী",
      "ব্যাংক কর্মকর্তা",
      "শেয়ার ক্রেতা মাত্র"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যিনি ঝুঁকি নিয়ে নতুন ব্যবসা বা উদ্যোগ শুরু করেন"
  },
  {
    "id": "q-1447",
    "num": "১৪৪৭",
    "category": "economics_commerce",
    "question": "ই-কমার্স (E-Commerce) কী?",
    "options": [
      "ইন্টারনেটের মাধ্যমে পণ্য ও সেবা ক্রয়-বিক্রয়",
      "শুধু কাগজের বিজ্ঞাপন",
      "শুধু ব্যাংক ড্রাফট",
      "টেলিভিশন দেখা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইন্টারনেটের মাধ্যমে পণ্য ও সেবা ক্রয়-বিক্রয়"
  },
  {
    "id": "q-1448",
    "num": "১৪৪৮",
    "category": "economics_commerce",
    "question": "মোবাইল ফিন্যান্সিয়াল সার্ভিস (MFS)-এর একটি উদাহরণ কোনটি?",
    "options": [
      "বিকাশ / নগদ / রকেট",
      "ইউটিউব",
      "গুগল ড্রাইভ",
      "উইন্ডোজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিকাশ / নগদ / রকেট"
  },
  {
    "id": "q-1449",
    "num": "১৪৪৯",
    "category": "economics_commerce",
    "question": "অর্থনীতিতে 'অপরচুনিটি কস্ট' (Opportunity Cost) কী?",
    "options": [
      "একটি বিকল্প বেছে নেওয়ার জন্য অন্য সেরা সুযোগ ত্যাগ করা",
      "অতিরিক্ত মুনাফা",
      "ঋণের সুদ",
      "কর ছাড়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) একটি বিকল্প বেছে নেওয়ার জন্য অন্য সেরা সুযোগ ত্যাগ করা"
  },
  {
    "id": "q-1450",
    "num": "১৪৫০",
    "category": "economics_commerce",
    "question": "টেকসই উন্নয়ন লক্ষ্যমাত্রার (SDG) মেয়াদকাল কত?",
    "options": [
      "২০১৬ থেকে ২০৩০ সাল",
      "২০০০ থেকে ২০১৫",
      "২০১০ থেকে ২০২০",
      "২০২০ থেকে ২০৪০"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২০১৬ থেকে ২০৩০ সাল"
  },
  {
    "id": "q-1451",
    "num": "১৪৫১",
    "category": "ethics_society",
    "question": "সততা (Honesty) বলতে কী বোঝায়?",
    "options": [
      "সত্যবাদিতা ও ন্যায়নিষ্ঠ আচরণ",
      "চাতুর্য দিয়ে কাজ হাসিল",
      "অন্যের ক্ষতি করা",
      "স্বার্থপরতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সত্যবাদিতা ও ন্যায়নিষ্ঠ আচরণ"
  },
  {
    "id": "q-1452",
    "num": "১৪৫২",
    "category": "ethics_society",
    "question": "নৈতিকতা (Ethics) মূলত কিসের মানদণ্ড নির্ধারণ করে?",
    "options": [
      "ভালো ও মন্দের বিচার",
      "শারীরিক শক্তি",
      "অর্থের পরিমাণ",
      "গায়ের রং"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভালো ও মন্দের বিচার"
  },
  {
    "id": "q-1453",
    "num": "১৪৫৩",
    "category": "ethics_society",
    "question": "সহমর্মিতা (Empathy) বলতে কী বোঝায়?",
    "options": [
      "অন্যের সুখ-দুঃখ নিজের মতো অনুভব করা",
      "অন্যকে উপহাস করা",
      "উদাসীন থাকা",
      "রাগ দেখানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অন্যের সুখ-দুঃখ নিজের মতো অনুভব করা"
  },
  {
    "id": "q-1454",
    "num": "১৪৫৪",
    "category": "ethics_society",
    "question": "আইনের শাসন (Rule of Law) প্রতিষ্ঠিত হলে কী ঘটে?",
    "options": [
      "আইনের চোখে সবাই সমান অধিকার ও বিচার পায়",
      "ধনীরা বিশেষ ছাড় পায়",
      "আইন অকার্যকর থাকে",
      "অরাজকতা বাড়ে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আইনের চোখে সবাই সমান অধিকার ও বিচার পায়"
  },
  {
    "id": "q-1455",
    "num": "১৪৫৫",
    "category": "ethics_society",
    "question": "নাগরিকের একটি অন্যতম প্রধান মৌলিক দায়িত্ব কোনটি?",
    "options": [
      "আইন মেনে চলা ও নিয়মিত কর দেওয়া",
      "যেখানে-সেখানে আবর্জনা ফেলা",
      "গুজব ছড়ানো",
      "ভোটাধিকার বর্জন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আইন মেনে চলা ও নিয়মিত কর দেওয়া"
  },
  {
    "id": "q-1456",
    "num": "১৪৫৬",
    "category": "ethics_society",
    "question": "মানবাধিকারের সর্বজনীন ঘোষণাপত্র (UDHR) কত সালে গৃহীত হয়?",
    "options": [
      "১৯৪৮ সালে",
      "১৯৪৫ সালে",
      "১৯৫২ সালে",
      "১৯৭১ সালে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৯৪৮ সালে"
  },
  {
    "id": "q-1457",
    "num": "১৪৫৭",
    "category": "ethics_society",
    "question": "আন্তর্জাতিক মানবাধিকার দিবস কবে পালিত হয়?",
    "options": [
      "১০ ডিসেম্বর",
      "২৪ অক্টোবর",
      "২১ ফেব্রুয়ারি",
      "১ মে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১০ ডিসেম্বর"
  },
  {
    "id": "q-1458",
    "num": "১৪৫৮",
    "category": "ethics_society",
    "question": "সহনশীলতা (Tolerance) কেন সমাজে জরুরি?",
    "options": [
      "ভিন্ন মতাদর্শ ও সংস্কৃতির মানুষের শান্তিপূর্ণ সহাবস্থান",
      "বিবাদ বাড়ানো",
      "একনায়কত্ব প্রতিষ্ঠা",
      "আইন ভাঙা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ভিন্ন মতাদর্শ ও সংস্কৃতির মানুষের শান্তিপূর্ণ সহাবস্থান"
  },
  {
    "id": "q-1459",
    "num": "১৪৫৯",
    "category": "ethics_society",
    "question": "সামাজিক যোগাযোগ মাধ্যমে কোনো খবর বিশ্বাস করার আগে কী করা উচিত?",
    "options": [
      "তথ্য ও সূত্রের সত্যতা যাচাই করা",
      "যাচাই ছাড়া দ্রুত শেয়ার করা",
      "অন্যকে গালি দেওয়া",
      "গুজবে বিশ্বাস করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্য ও সূত্রের সত্যতা যাচাই করা"
  },
  {
    "id": "q-1460",
    "num": "১৪৬০",
    "category": "ethics_society",
    "question": "সাইবার বুলিং (Cyberbullying) বলতে কী বোঝায়?",
    "options": [
      "ইন্টারনেটে কাউকে হেয়, অপমান বা হুমকি দেওয়া",
      "অনলাইনে পড়াশোনা করা",
      "কোডিং শেখা",
      "ইমেইল পাঠানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ইন্টারনেটে কাউকে হেয়, অপমান বা হুমকি দেওয়া"
  },
  {
    "id": "q-1461",
    "num": "১৪৬১",
    "category": "ethics_society",
    "question": "ডিজিটাল শিষ্টাচার (Netiquette) বলতে কী বোঝায়?",
    "options": [
      "অনলাইনে ভদ্র, মার্জিত ও দায়িত্বশীল আচরণ",
      "সবসময় হ্যাকিং করা",
      "স্প্যামিং করা",
      "অশালীন মন্তব্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অনলাইনে ভদ্র, মার্জিত ও দায়িত্বশীল আচরণ"
  },
  {
    "id": "q-1462",
    "num": "১৪৬২",
    "category": "ethics_society",
    "question": "পাবলিক স্পেস বা গণপরিবহনে জ্যেষ্ঠ বা অসুস্থ ব্যক্তিদের প্রতি কী করা উচিত?",
    "options": [
      "আসন ছেড়ে সম্মান প্রদর্শন করা",
      "উপেক্ষা করা",
      "হাস্যরস করা",
      "বিরক্তি প্রকাশ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আসন ছেড়ে সম্মান প্রদর্শন করা"
  },
  {
    "id": "q-1463",
    "num": "১৪৬৩",
    "category": "ethics_society",
    "question": "দলগত কাজের (Teamwork) মূল চালিকাশক্তি কোনটি?",
    "options": [
      "পারস্পরিক সহযোগিতা ও শ্রদ্ধা",
      "একক অহংকার",
      "অন্যের দোষ ধরা",
      "কাজে ফাঁকি দেওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পারস্পরিক সহযোগিতা ও শ্রদ্ধা"
  },
  {
    "id": "q-1464",
    "num": "১৪৬৪",
    "category": "ethics_society",
    "question": "সময়নিষ্ঠতা (Punctuality) একজন মানুষের কী নির্দেশ করে?",
    "options": [
      "সময়ানুবর্তিতা ও নির্ভরযোগ্যতা",
      "অলসতা",
      "কঠোরতা",
      "দাম্ভিকতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সময়ানুবর্তিতা ও নির্ভরযোগ্যতা"
  },
  {
    "id": "q-1465",
    "num": "১৪৬৫",
    "category": "ethics_society",
    "question": "সুনাগরিকের প্রধান তিনটি গুণ কী কী?",
    "options": [
      "বুদ্ধি, আত্মসংযম ও বিবেক",
      "ধন, ক্ষমতা ও চাতুর্য",
      "শারীরিক শক্তি, রাগ ও অহংকার",
      "বিলাসিতা, প্রচার ও অলসতা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বুদ্ধি, আত্মসংযম ও বিবেক"
  },
  {
    "id": "q-1466",
    "num": "১৪৬৬",
    "category": "ethics_society",
    "question": "দুর্নীতি (Corruption) সমাজ ও অর্থনীতির জন্য কী ক্ষতি করে?",
    "options": [
      "উন্নয়ন ব্যাহত করে ও বৈষম্য বাড়ায়",
      "অর্থনীতি শক্তিশালী করে",
      "সুশাসন প্রতিষ্ঠা করে",
      "দারিদ্র্য দূর করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) উন্নয়ন ব্যাহত করে ও বৈষম্য বাড়ায়"
  },
  {
    "id": "q-1467",
    "num": "১৪৬৭",
    "category": "ethics_society",
    "question": "স্বচ্ছতা ও জবাবদিহিতা (Transparency & Accountability) কীসে সাহায্য করে?",
    "options": [
      "সুশাসন প্রতিষ্ঠায়",
      "দুর্নীতি বাড়াতে",
      "গোপনীয়তা বজায় রাখতে",
      "স্বৈরাচারী শাসনে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সুশাসন প্রতিষ্ঠায়"
  },
  {
    "id": "q-1468",
    "num": "১৪৬৮",
    "category": "ethics_society",
    "question": "শিশুশ্রম বন্ধে সমাজের করণীয় কী?",
    "options": [
      "সব শিশুর শিক্ষার সুযোগ নিশ্চিত করা",
      "শিশুশ্রমে উৎসাহ দেওয়া",
      "স্কুল বন্ধ রাখা",
      "উদাসীন থাকা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সব শিশুর শিক্ষার সুযোগ নিশ্চিত করা"
  },
  {
    "id": "q-1469",
    "num": "১৪৬৯",
    "category": "ethics_society",
    "question": "বিশ্ব শিশু দিবস কবে পালিত হয়?",
    "options": [
      "২০ নভেম্বর",
      "১ জুন",
      "৮ মার্চ",
      "১ মে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২০ নভেম্বর"
  },
  {
    "id": "q-1470",
    "num": "১৪৭০",
    "category": "ethics_society",
    "question": "আন্তর্জাতিক নারী দিবস কোন তারিখে পালিত হয়?",
    "options": [
      "৮ মার্চ",
      "১ মে",
      "১০ ডিসেম্বর",
      "৫ জুন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৮ মার্চ"
  },
  {
    "id": "q-1471",
    "num": "১৪৭১",
    "category": "ethics_society",
    "question": "মে দিবস বা আন্তর্জাতিক শ্রমিক দিবস কবে?",
    "options": [
      "১ মে",
      "৮ মার্চ",
      "২৬ মার্চ",
      "১৬ ডিসেম্বর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১ মে"
  },
  {
    "id": "q-1472",
    "num": "১৪৭২",
    "category": "ethics_society",
    "question": "আন্তর্জাতিক শান্তি দিবস কবে উদযাপিত হয়?",
    "options": [
      "২১ সেপ্টেম্বর",
      "১০ ডিসেম্বর",
      "২৪ অক্টোবর",
      "৫ জুন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২১ সেপ্টেম্বর"
  },
  {
    "id": "q-1473",
    "num": "১৪৭৩",
    "category": "ethics_society",
    "question": "জাতিসংঘ দিবস পালিত হয় কোন তারিখে?",
    "options": [
      "২৪ অক্টোবর",
      "২১ সেপ্টেম্বর",
      "১০ ডিসেম্বর",
      "১ জানুয়ারি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ২৪ অক্টোবর"
  },
  {
    "id": "q-1474",
    "num": "১৪৭৪",
    "category": "ethics_society",
    "question": "পরিবেশ রক্ষার ব্যক্তিগত নৈতিক দায়িত্ব কোনটি?",
    "options": [
      "বিদ্যুৎ ও পানি অপচয় রোধ এবং গাছ লাগানো",
      "প্লাস্টিক নদীতে ফেলা",
      "বন পোড়ানো",
      "বেশি গাড়ি চালানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) বিদ্যুৎ ও পানি অপচয় রোধ এবং গাছ লাগানো"
  },
  {
    "id": "q-1475",
    "num": "১৪৭৫",
    "category": "ethics_society",
    "question": "অন্যের বুদ্ধিবৃত্তিক সম্পদ অনুমতি ছাড়া নিজের বলে চালানোকে কী বলে?",
    "options": [
      "প্লেজিয়ারিজম (চৌর্যবৃত্তি)",
      "কপিরাইট সুরক্ষা",
      "উদ্ভাবন",
      "গবেষণা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) প্লেজিয়ারিজম (চৌর্যবৃত্তি)"
  },
  {
    "id": "q-1476",
    "num": "১৪৭৬",
    "category": "ethics_society",
    "question": "কপিরাইট (Copyright) আইনের উদ্দেশ্য কী?",
    "options": [
      "স্রষ্টার মেধা ও কর্মের সুরক্ষার নিশ্চয়তা",
      "বিনামূল্যে সবার মাঝে বিতরণ",
      "চুরি উৎসাহিত করা",
      "রচনাকারীকে দমন করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) স্রষ্টার মেধা ও কর্মের সুরক্ষার নিশ্চয়তা"
  },
  {
    "id": "q-1477",
    "num": "১৪৭৭",
    "category": "ethics_society",
    "question": "প্যাটেন্ট (Patent) সাধারণত কিসের ওপর দেওয়া হয়?",
    "options": [
      "নতুন বৈজ্ঞানিক বা প্রযুক্তিগত উদ্ভাবন",
      "সাধারণ কথা",
      "ঐতিহাসিক ঘটনা",
      "নদীর নাম"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নতুন বৈজ্ঞানিক বা প্রযুক্তিগত উদ্ভাবন"
  },
  {
    "id": "q-1478",
    "num": "১৪৭৮",
    "category": "ethics_society",
    "question": "সমালোচনামূলক চিন্তাভাবনা (Critical Thinking) কী?",
    "options": [
      "যুক্তি, প্রমাণ ও তথ্য দিয়ে নিরপেক্ষ বিচার করা",
      "যা শোনা যায় তা অন্ধভাবে বিশ্বাস করা",
      "বিনা তর্কে ঝগড়া করা",
      "রাগ প্রদর্শন"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যুক্তি, প্রমাণ ও তথ্য দিয়ে নিরপেক্ষ বিচার করা"
  },
  {
    "id": "q-1479",
    "num": "১৪৭৯",
    "category": "ethics_society",
    "question": "সিদ্ধান্ত গ্রহণের ক্ষেত্রে কোনটি সবচেয়ে বেশি প্রয়োজন?",
    "options": [
      "তথ্যভিত্তিক যৌক্তিক বিশ্লেষণ",
      "তাড়াহুড়ো ও আবেগ",
      "অন্যের চাপে সিদ্ধান্ত",
      "অন্ধ বিশ্বাস"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) তথ্যভিত্তিক যৌক্তিক বিশ্লেষণ"
  },
  {
    "id": "q-1480",
    "num": "১৪৮০",
    "category": "ethics_society",
    "question": "ধৈর্য ও সহিষ্ণুতা জীবনে কী সুফল আনে?",
    "options": [
      "মানসিক শান্তি ও প্রতিকূলতা মোকাবিলার শক্তি",
      "হতাশা বৃদ্ধি",
      "কর্মে অনীহা",
      "সম্পর্ক নষ্ট"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মানসিক শান্তি ও প্রতিকূলতা মোকাবিলার শক্তি"
  },
  {
    "id": "q-1481",
    "num": "১৪৮১",
    "category": "ethics_society",
    "question": "অকৃতজ্ঞতা নৈতিকভাবে কেমন কাজ?",
    "options": [
      "অন্যায় ও নিন্দনীয় আচরণ",
      "প্রশংসনীয় কাজ",
      "বীরত্ব",
      "বুদ্ধিমত্তা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অন্যায় ও নিন্দনীয় আচরণ"
  },
  {
    "id": "q-1482",
    "num": "১৪৮২",
    "category": "ethics_society",
    "question": "কৃতজ্ঞতাবোধ (Gratitude) প্রকাশ মানুষের সম্পর্ককে কেমন করে?",
    "options": [
      "দৃঢ় ও সৌহার্দ্যপূর্ণ করে",
      "দূরত্ব বাড়ায়",
      "হিংসা ছড়ায়",
      "সম্পর্ক নষ্ট করে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দৃঢ় ও সৌহার্দ্যপূর্ণ করে"
  },
  {
    "id": "q-1483",
    "num": "১৪৮৩",
    "category": "ethics_society",
    "question": "জাতীয় সম্পদ (যেমন গ্যাস, বিদ্যুৎ, রাস্তা) রক্ষায় নাগরিকদের ভূমিকা কী?",
    "options": [
      "সতর্কতার সাথে সংরক্ষণ ও অপচয় বন্ধ করা",
      "নষ্ট করা",
      "ব্যক্তিগত সম্পদে দখল",
      "উপেক্ষা করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সতর্কতার সাথে সংরক্ষণ ও অপচয় বন্ধ করা"
  },
  {
    "id": "q-1484",
    "num": "১৪৮৪",
    "category": "ethics_society",
    "question": "ট্রাফিক আইন মেনে চলা কেন প্রয়োজন?",
    "options": [
      "নিজের ও পথচারীদের জীবনের নিরাপত্তা রক্ষার্থে",
      "শুধু জরিমানার ভয়ে",
      "দেরি করানোর জন্য",
      "আইন ভঙ্গ করার জন্য"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) নিজের ও পথচারীদের জীবনের নিরাপত্তা রক্ষার্থে"
  },
  {
    "id": "q-1485",
    "num": "১৪৮৫",
    "category": "ethics_society",
    "question": "জরুরি সেবা ৯৯৯ (বাংলাদেশ)-এ অপ্রয়োজনে বা মিথ্যা কল দেওয়া কেমন কাজ?",
    "options": [
      "আইনত দণ্ডনীয় ও অনৈতিক অপরাধ",
      "মজার বিষয়",
      "সাহসিকতা",
      "প্রশংসনীয়"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আইনত দণ্ডনীয় ও অনৈতিক অপরাধ"
  },
  {
    "id": "q-1486",
    "num": "১৪৮৬",
    "category": "ethics_society",
    "question": "রক্তদান করা কী ধরনের সামাজিক কাজ?",
    "options": [
      "মহৎ জীবন রক্ষাকারী মানবিক দায়িত্ব",
      "অর্থ উপার্জনের উপায়",
      "লোকদেখানো কাজ",
      "ক্ষতিকর কাজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মহৎ জীবন রক্ষাকারী মানবিক দায়িত্ব"
  },
  {
    "id": "q-1487",
    "num": "১৪৮৭",
    "category": "ethics_society",
    "question": "বিশ্ব রক্তদাতা দিবস কবে পালিত হয়?",
    "options": [
      "১৪ জুন",
      "১ ডিসেম্বর",
      "৭ এপ্রিল",
      "৫ মে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১৪ জুন"
  },
  {
    "id": "q-1488",
    "num": "১৪৮৮",
    "category": "ethics_society",
    "question": "বিশ্ব স্বাস্থ্য দিবস কবে উদযাপিত হয়?",
    "options": [
      "৭ এপ্রিল",
      "১ ডিসেম্বর",
      "১৪ জুন",
      "১০ অক্টোবর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৭ এপ্রিল"
  },
  {
    "id": "q-1489",
    "num": "১৪৮৯",
    "category": "ethics_society",
    "question": "বিশ্ব এইডস দিবস কবে পালিত হয়?",
    "options": [
      "১ ডিসেম্বর",
      "৭ এপ্রিল",
      "৮ মার্চ",
      "১০ ডিসেম্বর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১ ডিসেম্বর"
  },
  {
    "id": "q-1490",
    "num": "১৪৯০",
    "category": "ethics_society",
    "question": "বিশ্ব মানসিক স্বাস্থ্য দিবস কবে পালিত হয়?",
    "options": [
      "১০ অক্টোবর",
      "৭ এপ্রিল",
      "৫ জুন",
      "১ মে"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ১০ অক্টোবর"
  },
  {
    "id": "q-1491",
    "num": "১৪৯১",
    "category": "ethics_society",
    "question": "সমাজসেবা (Social Work)-এর মূল উদ্দেশ্য কী?",
    "options": [
      "অসহায় ও পিছিয়ে পড়া মানুষের কল্যাণ সাধন",
      "আত্মপ্রচার",
      "ক্ষমতা লাভ",
      "ব্যবসা বাড়ানো"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অসহায় ও পিছিয়ে পড়া মানুষের কল্যাণ সাধন"
  },
  {
    "id": "q-1492",
    "num": "১৪৯২",
    "category": "ethics_society",
    "question": "নেতৃত্বের (Leadership) সবচেয়ে বড় গুণ কোনটি?",
    "options": [
      "সততা, দূরদর্শিতা ও দলকে পথ দেখানো",
      "স্বার্থপরতা",
      "অন্যের ওপর কর্তৃত্ব খাটানো",
      "ভয় সৃষ্টি করা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) সততা, দূরদর্শিতা ও দলকে পথ দেখানো"
  },
  {
    "id": "q-1493",
    "num": "১৪৯৩",
    "category": "ethics_society",
    "question": "যোগাযোগ দক্ষতা (Communication Skill) উন্নত করার উপায় কী?",
    "options": [
      "মনোযোগ দিয়ে শোনা ও স্পষ্ট ভাষায় কথা বলা",
      "অন্যকে কথা বলতে না দেওয়া",
      "উচ্চ স্বরে চিৎকার করা",
      "উদাসীন থাকা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) মনোযোগ দিয়ে শোনা ও স্পষ্ট ভাষায় কথা বলা"
  },
  {
    "id": "q-1494",
    "num": "১৪৯৪",
    "category": "ethics_society",
    "question": "নিজের ভুল স্বীকার করা কীসের পরিচায়ক?",
    "options": [
      "আত্মসচেতনতা ও নৈতিক সাহস",
      "দুর্বলতা",
      "পরাজয়",
      "লজ্জাজনক কাজ"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আত্মসচেতনতা ও নৈতিক সাহস"
  },
  {
    "id": "q-1495",
    "num": "১৪৯৫",
    "category": "ethics_society",
    "question": "প্রতিশ্রুতি রক্ষা করা (Fulfilling Promises) সমাজে কী বৃদ্ধি করে?",
    "options": [
      "পারস্পরিক বিশ্বাস ও আস্থা",
      "অবিশ্বাস",
      "শত্রুতা",
      "দ্বিমত"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) পারস্পরিক বিশ্বাস ও আস্থা"
  },
  {
    "id": "q-1496",
    "num": "১৪৯৬",
    "category": "ethics_society",
    "question": "পরোপকারিতা (Altruism) মানুষের মনে কী সৃষ্টি করে?",
    "options": [
      "আত্মতৃপ্তি ও মানবিক আনন্দ",
      "লোভ",
      "হিংসা",
      "একাকিত্ব"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) আত্মতৃপ্তি ও মানবিক আনন্দ"
  },
  {
    "id": "q-1497",
    "num": "১৪৯৭",
    "category": "ethics_society",
    "question": "জাতি-ধর্ম-বর্ণ নির্বিশেষে সকল মানুষের প্রতি সমান আচরণকে কী বলে?",
    "options": [
      "অসাম্প্রদায়িকতা ও মানবিক সমতা",
      "পক্ষপাতিত্ব",
      "বর্ণবাদ",
      "স্বজনপ্রীতি"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) অসাম্প্রদায়িকতা ও মানবিক সমতা"
  },
  {
    "id": "q-1498",
    "num": "১৪৯৮",
    "category": "ethics_society",
    "question": "স্বজনপ্রীতি (Nepotism) প্রতিষ্ঠানে কী ক্ষতি ডেকে আনে?",
    "options": [
      "যোগ্য প্রার্থীর অধিকার হরণ ও মেধার অবমূল্যায়ন",
      "দক্ষতা বৃদ্ধি",
      "উন্নয়ন ত্বরান্বিত",
      "সততা প্রতিষ্ঠা"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) যোগ্য প্রার্থীর অধিকার হরণ ও মেধার অবমূল্যায়ন"
  },
  {
    "id": "q-1499",
    "num": "১৪৯৯",
    "category": "ethics_society",
    "question": "দেশপ্রেমের (Patriotism) প্রকৃত বহিঃপ্রকাশ কী?",
    "options": [
      "দেশের আইন মানা ও উন্নয়নকাজে সক্রিয় অবদান রাখা",
      "শুধু স্লোগান দেওয়া",
      "অন্য দেশকে ঘৃণা করা",
      "কর ফাঁকি দেওয়া"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) দেশের আইন মানা ও উন্নয়নকাজে সক্রিয় অবদান রাখা"
  },
  {
    "id": "q-1500",
    "num": "১৫০০",
    "category": "ethics_society",
    "question": "আন্তর্জাতিক সাক্ষরতা দিবস কবে পালিত হয়?",
    "options": [
      "৮ সেপ্টেম্বর",
      "৫ অক্টোবর",
      "২১ ফেব্রুয়ারি",
      "১ ডিসেম্বর"
    ],
    "correctIndex": 0,
    "explanation": "সঠিক উত্তর: ক) ৮ সেপ্টেম্বর"
  }
];
