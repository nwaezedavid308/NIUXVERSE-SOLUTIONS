export interface Speaker {
  name: string;
  role: string;
}

export interface Episode {
  id: string;
  number: string;
  title: string;
  hook: string;
  guest?: string;
  guestRole?: string;
  speakers?: Speaker[];
  moderator?: string;
  eventDate?: string;
  isComingSoon?: boolean;
  category: 'Ethics & Rights' | 'Human Condition' | 'Future Trends' | 'Creator Economy' | 'Futuristic Tech';
  description: string;
  keyQuestions: string[];
  duration: string;
  tag: string;
  featured?: boolean;
  image?: string;
}

export interface AcademyCourse {
  id: string;
  code: string;
  title: string;
  tagline: string;
  level: 'Foundation' | 'Specialist' | 'Mastery';
  duration: string;
  modules: string[];
  toolsUsed?: string[];
  outcome: string;
  highlight?: string;
  image?: string;
  speakers?: Speaker[];
  moderator?: string;
  eventDate?: string;
}

export interface ImpactSession {
  id: string;
  date: string;
  topic: string;
  format: string;
  host: string;
  guest?: string;
  speakers?: Speaker[];
  moderator?: string;
  spotsLeft: number;
  isComingSoon?: boolean;
  image?: string;
}
