import { QuizQuestion } from '../types';

export const QUIZ_CATEGORIES = [
  { id: 'all', nameBn: 'সকল বিষয়', nameEn: 'All Topics', icon: 'Sparkles', color: 'bg-indigo-500' },
  { id: 'bangla', nameBn: 'বাংলা সাহিত্য ও ব্যাকরণ', nameEn: 'Bangla Literature & Grammar', icon: 'BookOpen', color: 'bg-emerald-500' },
  { id: 'english', nameBn: 'ইংরেজি ভাষা ও ব্যাকরণ', nameEn: 'English Language & Grammar', icon: 'Languages', color: 'bg-blue-500' },
  { id: 'gk', nameBn: 'সাধারণ জ্ঞান (বাংলাদেশ ও বিশ্ব)', nameEn: 'General Knowledge', icon: 'Globe', color: 'bg-amber-500' },
  { id: 'math', nameBn: 'গণিত ও মানসিক দক্ষতা', nameEn: 'Mathematics & Mental Ability', icon: 'Calculator', color: 'bg-rose-500' },
  { id: 'science', nameBn: 'সাধারণ বিজ্ঞান', nameEn: 'General Science', icon: 'Atom', color: 'bg-purple-500' },
  { id: 'ict', nameBn: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)', nameEn: 'ICT & Computer', icon: 'Cpu', color: 'bg-cyan-500' },
];

export const DEFAULT_QUESTIONS: QuizQuestion[] = [
  // Bangla
  {
    id: 'bn-1',
    category: 'bangla',
    question: 'বাংলা সাহিত্যের প্রথম মহাকাব্য কোনটি এবং এর রচয়িতা কে?',
    options: [
      'পদ্মাবতী — আলাওল',
      'মেঘনাদবধ কাব্য — মাইকেল মধুসূদন দত্ত',
      'মনসামঙ্গল — বিজয়গুপ্ত',
      'অন্নদামঙ্গল — ভারতচন্দ্র রায়গুণাকর'
    ],
    correctIndex: 1,
    explanation: '১৮৬১ সালে প্রকাশিত মাইকেল মধুসূদন দত্তের "মেঘনাদবধ কাব্য" বাংলা সাহিত্যের প্রথম সার্থক মহাকাব্য। এটি অমিত্রাক্ষর ছন্দে রচিত।'
  },
  {
    id: 'bn-2',
    category: 'bangla',
    question: '"আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি" গানটির মূল সুরকার কে?',
    options: [
      'আবদুল লতিফ',
      'আলতাফ মাহমুদ',
      'শহীদ আলতাফ হোসেন',
      'আবদুল গাফফার চৌধুরী'
    ],
    correctIndex: 0,
    explanation: 'গানটির রচয়িতা আবদুল গাফফার চৌধুরী। গানটির প্রথম সুরকার ছিলেন আবদুল লতিফ। পরবর্তীতে শহীদ আলতাফ মাহমুদের করা সুরটি বর্তমানে প্রচলিত ও জনপ্রিয়।'
  },
  {
    id: 'bn-3',
    category: 'bangla',
    question: 'বাংলা বর্ণমালায় অর্ধমাত্রার বর্ণ কয়টি?',
    options: ['৭টি', '৮টি', '১০টি', '১১টি'],
    correctIndex: 1,
    explanation: 'বাংলা বর্ণমালায় অর্ধমাত্রার বর্ণ মোট ৮টি (স্বরবর্ণে ১টি: ঋ, এবং ব্যঞ্জনবর্ণে ৭টি: খ, গ, ণ, থ, ধ, প, শ)।'
  },
  {
    id: 'bn-4',
    category: 'bangla',
    question: '"সন্ধি" ব্যাকরণের কোন অংশে আলোচিত হয়?',
    options: ['রূপতত্ত্বে', 'শব্দতত্ত্বে', 'ধ্বনিাতত্ত্বে', 'বাক্যতত্ত্বে'],
    correctIndex: 2,
    explanation: 'যেহেতু সন্ধি হলো পাশাপাশি দুটি ধ্বনির মিলন, তাই এটি ব্যাকরণের ধ্বনিতত্ত্বে (Phonology) আলোচিত হয়।'
  },

  // English
  {
    id: 'en-1',
    category: 'english',
    question: 'Choose the correct synonym for the word "BENEVOLENT":',
    options: ['Hostile', 'Generous and Kind', 'Cruel', 'Deceitful'],
    correctIndex: 1,
    explanation: '"Benevolent" means kind, generous, and well-meaning. Antonyms include malevolent or cruel.'
  },
  {
    id: 'en-2',
    category: 'english',
    question: 'Identify the sentence with correct subject-verb agreement:',
    options: [
      'Each of the students are participating in the quiz.',
      'Each of the students is participating in the quiz.',
      'Each of the students were participating in the quiz.',
      'Each of the students have participate in the quiz.'
    ],
    correctIndex: 1,
    explanation: '"Each" is a singular distributive pronoun and requires a singular verb ("is participating").'
  },
  {
    id: 'en-3',
    category: 'english',
    question: 'What is the passive form of: "Who did this work?"',
    options: [
      'By whom this work was done?',
      'By whom was this work done?',
      'Who was done this work by?',
      'Whom did do this work?'
    ],
    correctIndex: 1,
    explanation: 'For interrogative sentences with "Who", the structure is: By whom + auxiliary verb + object + past participle? Hence, "By whom was this work done?".'
  },
  {
    id: 'en-4',
    category: 'english',
    question: 'Choose the correct spelling:',
    options: ['Accomodation', 'Accommodation', 'Acommodation', 'Acomodation'],
    correctIndex: 1,
    explanation: 'The correct spelling is "Accommodation" with double "c" and double "m".'
  },

  // General Knowledge
  {
    id: 'gk-1',
    category: 'gk',
    question: 'ঐতিহাসিক ৭ই মার্চের ভাষণকে ইউনেস্কো কোন তারিখে বিশ্ব প্রামাণ্য ঐতিহ্য হিসেবে স্বীকৃতি দেয়?',
    options: [
      '৩০ অক্টোবর ২০১৭',
      '৭ মার্চ ২০১৮',
      '২১ ফেব্রুয়ারি ২০১৬',
      '১৬ ডিসেম্বর ২০১৭'
    ],
    correctIndex: 0,
    explanation: '২০১৭ সালের ৩০ অক্টোবর ইউনেস্কো জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের ৭ই মার্চের ঐতিহাসিক ভাষণকে "Memory of the World International Register"-এ অন্তর্ভুক্ত করে বিশ্ব প্রামাণ্য ঐতিহ্য হিসেবে স্বীকৃতি দেয়।'
  },
  {
    id: 'gk-2',
    category: 'gk',
    question: 'বাংলাদেশের সংবিধান প্রণয়ন কমিটির মোট সদস্য সংখ্যা কত ছিল?',
    options: ['৩২ জন', '৩৪ জন', '৩৬ জন', '৪০ জন'],
    correctIndex: 1,
    explanation: '১৯৭২ সালের ১১ এপ্রিল ড. কামাল হোসেনকে সভাপতি করে ৩৪ সদস্যবিশিষ্ট খসড়া সংবিধান প্রণয়ন কমিটি গঠিত হয়।'
  },
  {
    id: 'gk-3',
    category: 'gk',
    question: 'নোবেল পুরস্কারের প্রবর্তক আলফ্রেড নোবেল কোন আবিষ্কারের জন্য বিখ্যাত?',
    options: ['টেলিফোন', 'ডিনামাইট', 'বিদ্যুৎ বাল্ব', 'পেনিসিলিন'],
    correctIndex: 1,
    explanation: 'সুইডিশ বিজ্ঞানী আলফ্রেড নোবেল ১৮৬৭ সালে ডিনামাইট আবিষ্কার করেন।'
  },
  {
    id: 'gk-4',
    category: 'gk',
    question: 'বিশ্বের বৃহত্তম ব-দ্বীপ (Delta) কোনটি?',
    options: ['মিসিসিপি ব-দ্বীপ', 'গঙ্গা-ব্রহ্মপুত্র ব-দ্বীপ (বাংলাদেশ)', 'নীলনদ ব-দ্বীপ', 'আমাজন ব-দ্বীপ'],
    correctIndex: 1,
    explanation: 'বাংলাদেশ তথা গঙ্গা-ব্রহ্মপুত্র-মেঘনা অববাহিকার ব-দ্বীপটি আয়তনের দিক থেকে পৃথিবীর বৃহত্তম ব-দ্বীপ।'
  },

  // Math
  {
    id: 'math-1',
    category: 'math',
    question: '১ থেকে ৫০ পর্যন্ত মৌলিক সংখ্যা কয়টি?',
    options: ['১২টি', '১৫টি', '১৭টি', '২০টি'],
    correctIndex: 1,
    explanation: '১ থেকে ৫০ পর্যন্ত মোট ১৫টি মৌলিক সংখ্যা রয়েছে (২, ৩, ৫, ৭, ১১, ১৩, ১৭, ১৯, ২৩, ২৯, ৩১, ৩৭, ৪১, ৪৩, ৪৭)।'
  },
  {
    id: 'math-2',
    category: 'math',
    question: 'যদি একটি সমকোণী ত্রিভুজের ভূমি ৪ সেমি এবং লম্ব ৩ সেমি হয়, তবে অতিভুজ কত?',
    options: ['৫ সেমি', '৬ সেমি', '৭ সেমি', '৮ সেমি'],
    correctIndex: 0,
    explanation: 'পিথাগোরাসের সূত্রানুযায়ী: অতিভুজ = √(৩² + ৪²) = √(৯ + ১৬) = √২৫ = ৫ সেমি।'
  },
  {
    id: 'math-3',
    category: 'math',
    question: 'একটি বৃত্তের ব্যাসার্ধ দ্বিগুণ করা হলে তার ক্ষেত্রফল কতগুণ বৃদ্ধি পাবে?',
    options: ['২ গুণ', '৩ গুণ', '৪ গুণ', '৮ গুণ'],
    correctIndex: 2,
    explanation: 'বৃত্তের ক্ষেত্রফল = πr²। ব্যাসার্ধ ২r হলে নতুন ক্ষেত্রফল = π(2r)² = 4πr², অর্থাৎ ক্ষেত্রফল ৪ গুণ হবে।'
  },

  // Science
  {
    id: 'science-1',
    category: 'science',
    question: 'সূর্য থেকে পৃথিবীতে আলো এসে পৌঁছাতে আনুমানিক কত সময় লাগে?',
    options: ['৬ মিনিট ২০ সেকেন্ড', '৮ মিনিট ২০ সেকেন্ড', '১০ মিনিট', '১২ মিনিট ১০ সেকেন্ড'],
    correctIndex: 1,
    explanation: 'সূর্য ও পৃথিবীর গড় দূরত্ব প্রায় ১৫ কোটি কিলোমিটার। আলোর গতি প্রতি সেকেন্ডে ৩ লক্ষ কিমি হওয়ায় আলো পৌঁছাতে প্রায় ৫০০ সেকেন্ড বা ৮ মিনিট ২০ সেকেন্ড সময় লাগে।'
  },
  {
    id: 'science-2',
    category: 'science',
    question: 'মানবদেহের কোন অঙ্গ রক্ত পরিশোধনে (Filtration) প্রধান ভূমিকা পালন করে?',
    options: ['যকৃৎ (Liver)', 'হৃদপিণ্ড (Heart)', 'বৃক্ক বা কিডনি (Kidney)', 'ফুসফুস (Lungs)'],
    correctIndex: 2,
    explanation: 'কিডনি বা বৃক্ক মানবদেহের রক্ত থেকে ইউরিয়া ও অন্যান্য নাইট্রোজেনঘটিত বর্জ্য পদার্থ ছেঁকে মূত্র হিসেবে বের করে রক্ত পরিশোধন করে।'
  },
  {
    id: 'science-3',
    category: 'science',
    question: 'বায়ুমণ্ডলে সর্বাধিক পরিমাণে উপস্থিত গ্যাস কোনটি?',
    options: ['অক্সিজেন', 'কার্বন ডাই অক্সাইড', 'নাইট্রোজেন', 'আর্গন'],
    correctIndex: 2,
    explanation: 'বায়ুমণ্ডলে নাইট্রোজেনের পরিমাণ সর্বাধিক, প্রায় ৭৮.০৯%। এরপর অক্সিজেন প্রায় ২০.৯৫%।'
  },

  // ICT
  {
    id: 'ict-1',
    category: 'ict',
    question: 'কম্পিউটারের কোন মেমোরি বিদ্যুৎ চলে গেলে তথ্য মুছে যায় (Volatile)?',
    options: ['ROM', 'RAM', 'Hard Disk', 'SSD'],
    correctIndex: 1,
    explanation: 'RAM (Random Access Memory) একটি ভোলাটাইল বা অস্থায়ী মেমোরি। পাওয়ার চলে গেলে এতে থাকা সমস্ত ডেটা মুছে যায়।'
  },
  {
    id: 'ict-2',
    category: 'ict',
    question: 'IPv4 অ্যাড্রেস কত বিট বিশিষ্ট হয়?',
    options: ['১৬ বিট', '৩২ বিট', '৬৪ বিট', '১২৮ বিট'],
    correctIndex: 1,
    explanation: 'IPv4 অ্যাড্রেস ৩২ বিট বিশিষ্ট হয় (৪টি অক্টেট)। পক্ষান্তরে IPv6 অ্যাড্রেস ১২৮ বিটের হয়।'
  },
  {
    id: 'ict-3',
    category: 'ict',
    question: 'HTTPS-এর পূর্ণরূপ কী এবং এটি নিরাপত্তার জন্য কী ব্যবহার করে?',
    options: [
      'HyperText Transfer Protocol Secure — SSL/TLS এনক্রিপশন',
      'High Transmission Transfer Protocol System — ফায়ারওয়াল',
      'HyperText Technical Page Security — পাসওয়ার্ড হ্যাশিং',
      'Home Tool Transfer Protocol Standard — পাবলিক কি'
    ],
    correctIndex: 0,
    explanation: 'HTTPS হলো HyperText Transfer Protocol Secure, যা ব্রাউজার ও ওয়েব সার্ভারের মধ্যকার তথ্য SSL/TLS প্রোটোকলের মাধ্যমে এনক্রিপ্ট করে নিরাপদ রাখে।'
  },
  {
    id: 'ict-4',
    category: 'ict',
    question: 'ক্লাউড ডেটাবেজ ফায়ারস্টোর (Firestore) কোন মডেলের ডেটাবেজ?',
    options: ['Relational SQL', 'NoSQL Document Store', 'Graph Database', 'Key-Value Memory Cache'],
    correctIndex: 1,
    explanation: 'Cloud Firestore একটি স্কেলেবল ও ফ্লেক্সিবল NoSQL Document-Oriented ডাটাবেজ, যা Collections এবং Documents আকারে ডেটা সংরক্ষণ করে।'
  }
];
