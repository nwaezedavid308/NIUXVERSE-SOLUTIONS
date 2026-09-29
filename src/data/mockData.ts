import { Episode, AcademyCourse, ImpactSession } from '../types';

export const SHOW_EPISODES: Episode[] = [
  {
    id: 'ep-what-makes-us-human',
    number: '01',
    title: 'What Makes Us Human?',
    hook: 'In a world of fast-moving technology, what truly sets human beings apart?',
    guest: 'Mr Ifeanyi Nwakpoke & Blessing Egbe',
    guestRole: 'Writer & AI Ethics Expert',
    speakers: [
      { name: 'Mr Ifeanyi Nwakpoke', role: 'Writer' },
      { name: 'Blessing Egbe', role: 'AI ethics and Governance expert' },
    ],
    moderator: 'King of Intelligence',
    eventDate: '4th of October 2026',
    category: 'Human Condition',
    duration: 'Live Session',
    tag: 'Happening 4th of October 2026',
    featured: true,
    isComingSoon: false,
    image: '/event-flyer.jpg',
    description:
      'A special live session moderated by the King of Intelligence, exploring what truly defines our humanity as technology evolves. Featuring writer Mr Ifeanyi Nwakpoke and AI ethics and Governance expert Blessing Egbe.',
    keyQuestions: [
      'What truly defines the human experience in an age of AI?',
      'Can technology ever replicate our emotions and empathy?',
      'How do we ensure future tools protect human dignity and relationships?',
    ],
  },
  {
    id: 'ep-01',
    number: '02',
    title: 'Should AI Have Rights?',
    hook: 'If an AI mimics feelings, where do we draw the line between code and rights?',
    guest: 'Bella & Odii Victor',
    guestRole: 'AI Ethics Researchers',
    category: 'Ethics & Rights',
    duration: '58 min',
    tag: 'Coming Soon',
    featured: false,
    isComingSoon: true,
    description:
      'Nwaeze David talks with Bella and Odii Victor about artificial intelligence, feelings, and what rules we need in the future.',
    keyQuestions: [
      'Can computer code ever feel anything?',
      'What happens if we give software legal rights?',
    ],
  },
  {
    id: 'ep-03',
    number: '03',
    title: 'Who Controls Your Daily Choices?',
    hook: 'Are we using technology, or is technology quietly guiding our daily decisions?',
    guest: 'Blessing Egbo',
    guestRole: 'Tech Strategist',
    category: 'Ethics & Rights',
    duration: '64 min',
    tag: 'Coming Soon',
    featured: false,
    isComingSoon: true,
    description:
      'Blessing Egbo joins Nwaeze David to discuss daily screen habits and how to protect your own decisions in a changing world.',
    keyQuestions: [
      'How algorithms influence our daily habits',
      'How to stay in control of your own choices',
    ],
  },
  {
    id: 'ep-04',
    number: '04',
    title: 'Social Life & Modern Isolation',
    hook: 'We are more connected digitally than ever, so why do so many people feel alone?',
    category: 'Human Condition',
    duration: '47 min',
    tag: 'Coming Soon',
    isComingSoon: true,
    description:
      'A look at how screen habits affect real-world relationships and how to build authentic friendships today.',
    keyQuestions: [
      'Why digital messages cannot replace real presence',
      'Simple ways to build closer friendships today',
    ],
  },
  {
    id: 'ep-05',
    number: '05',
    title: 'The Intelligence of Failure',
    hook: 'Can making mistakes teach us things that no formula or computer can?',
    category: 'Human Condition',
    duration: '50 min',
    tag: 'Coming Soon',
    featured: false,
    isComingSoon: true,
    description:
      'Nwaeze David shares why failure and setbacks are essential for personal growth and real confidence.',
    keyQuestions: [
      'Why making mistakes builds lasting resilience',
      'How to turn setbacks into lessons',
    ],
  },
  {
    id: 'ep-06',
    number: '06',
    title: 'Love & Modern Technology',
    hook: 'As virtual companions grow, what happens to real human relationships?',
    category: 'Human Condition',
    duration: '55 min',
    tag: 'Coming Soon',
    isComingSoon: true,
    description:
      'A conversation on how technology influences modern dating, friendships, and genuine human love.',
    keyQuestions: [
      'Can an app replace real human love?',
      'What makes real relationships worth the effort?',
    ],
  },
  {
    id: 'ep-07',
    number: '07',
    title: 'Why People Buy',
    hook: 'Why do we buy what we buy, and who is really shaping our desires?',
    guest: 'Monte (Master Salesman)',
    guestRole: 'Sales Expert',
    category: 'Creator Economy',
    duration: '61 min',
    tag: 'Coming Soon',
    isComingSoon: true,
    description:
      'Monte and Nwaeze David break down what drives consumer decisions and how to build honest businesses.',
    keyQuestions: [
      'The psychology behind trust and buying',
      'How modern feeds influence consumer desire',
    ],
  },
  {
    id: 'ep-08',
    number: '08',
    title: 'Digital Avatars & Human Presence',
    hook: 'What happens when an avatar can speak in your voice and copy your face?',
    category: 'Futuristic Tech',
    duration: '59 min',
    tag: 'Coming Soon',
    isComingSoon: true,
    description:
      'Exploring digital twins, voice clones, and what they mean for human trust and communication.',
    keyQuestions: [
      'How avatars will change online interaction',
      'What parts of human presence cannot be copied?',
    ],
  },
  {
    id: 'ep-09',
    number: '09',
    title: 'True Confidence in Changing Times',
    hook: 'When tools can do so much so quickly, where does real self-belief come from?',
    guest: 'Ruth',
    guestRole: 'Mindset Coach',
    category: 'Human Condition',
    duration: '48 min',
    tag: 'Coming Soon',
    featured: false,
    isComingSoon: true,
    description:
      'Ruth joins Nwaeze David to discuss staying confident, grounded, and clear-headed in a fast-paced world.',
    keyQuestions: [
      'Building self-confidence that lasts',
      'Staying calm when things change fast',
    ],
  },
  {
    id: 'ep-10',
    number: '10',
    title: 'Future Tech Horizons (2030–2050)',
    hook: 'Which skills will disappear with automation, and which will matter most?',
    category: 'Future Trends',
    duration: '72 min',
    tag: 'Coming Soon',
    featured: false,
    isComingSoon: true,
    description:
      'A forward look at the next decades of technology, everyday life, and human purpose.',
    keyQuestions: [
      'How work and tools will change over the next decades',
      'Which human abilities will matter most in the future?',
    ],
  },
  {
    id: 'ep-11',
    number: '11',
    title: 'The Algo-Rythm Principle',
    hook: 'Can you combine modern technology with human creativity and cultural soul?',
    category: 'Future Trends',
    duration: '54 min',
    tag: 'Coming Soon',
    isComingSoon: true,
    description:
      'Nwaeze David explores using technology as an instrument while staying true to your own creative voice.',
    keyQuestions: [
      'Using technology without losing your style',
      'Where original ideas really come from',
    ],
  },
  {
    id: 'ep-12',
    number: '12',
    title: 'Building Tech for Good',
    hook: 'How can we make sure future tools actually help everyday people?',
    category: 'Ethics & Rights',
    duration: '56 min',
    tag: 'Coming Soon',
    isComingSoon: true,
    description:
      'A conversation on creating technology that solves real problems and respects human dignity.',
    keyQuestions: [
      'How new tools shape everyday society',
      'Building projects that create positive impact',
    ],
  },
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'course-what-makes-us-human',
    code: 'NX-HMN',
    title: 'What Makes Us Human? (Special Track)',
    tagline: 'A transformative track exploring human consciousness, AI ethics, creative sovereignty, and what truly sets humans apart in the age of machines.',
    level: 'Specialist',
    duration: 'Live Session & 4-Week Track',
    image: '/event-flyer.jpg',
    highlight: 'Flagship Event',
    speakers: [
      { name: 'Mr Ifeanyi Nwakpoke', role: 'Writer' },
      { name: 'Blessing Egbe', role: 'AI Ethics & Governance Expert' },
    ],
    moderator: 'King of Intelligence',
    eventDate: 'Sunday, 4th of October 2026',
    modules: [
      'The Human Essence vs Synthetic Intelligence: Consciousness, empathy, and lived experience',
      'AI Ethics & Digital Governance: Guardrails for responsible technological progress',
      'Emotional Resilience in an Automated Era: Staying grounded and creatively sovereign',
      'Human-Centered Innovation: Building tools and platforms that elevate human dignity',
    ],
    outcome: 'A clear ethical framework, strong creative agency, and actionable skills to build and lead human-centered technology ventures.',
  },
  {
    id: 'course-graphics-brand',
    code: 'NX-DSN',
    title: 'Graphics Design and Brand Strategy',
    tagline: 'Master visual communication, typography, color psychology, and strategic brand positioning to create high-impact identities.',
    level: 'Specialist',
    duration: '6 Weeks',
    modules: [
      'Visual Design Foundations: Balance, typography hierarchy, and color theory',
      'Brand Strategy & Positioning: Defining voice, mission, and distinct brand narrative',
      'Visual Identity Systems: Logos, asset libraries, and brand guidelines',
      'Strategic Pitching & Decks: Presenting brand systems and creative direction with clarity',
    ],
    outcome: 'A comprehensive brand identity portfolio and strategic skills to direct visual branding for modern ventures.',
    highlight: 'Creative Track',
  },
  {
    id: 'course-product-design',
    code: 'NX-PRD',
    title: 'Product Design (6 Weeks Course)',
    tagline: 'A hands-on, human-centered deep dive into UI/UX design, wireframing, prototyping, and scalable design systems.',
    level: 'Specialist',
    duration: '6 Weeks',
    modules: [
      'User Research & Problem Discovery: Identifying user pain points and mapping user journeys',
      'Information Architecture & Wireframes: Structuring clear, intuitive digital experiences',
      'UI Design Systems & Components: Designing accessible, responsive interface components',
      'Interactive Prototyping & Usability Testing: Validating and refining products with real feedback',
    ],
    outcome: 'An end-to-end digital product case study and clickable interactive prototype ready for portfolio presentation.',
    highlight: '6 Weeks Intensive',
  },
];

export const UPCOMING_IMPACT_TALKS: ImpactSession[] = [
  {
    id: 'talk-what-makes-us-human',
    date: 'Sunday, 4th of October 2026',
    topic: 'What Makes Us Human?',
    format: 'Live Community Event & Broadcast',
    host: 'King of Intelligence',
    moderator: 'King of Intelligence',
    speakers: [
      { name: 'Mr Ifeanyi Nwakpoke', role: 'Writer' },
      { name: 'Blessing Egbe', role: 'AI ethics and Governance expert' },
    ],
    guest: 'Mr Ifeanyi Nwakpoke & Blessing Egbe',
    spotsLeft: 25,
    isComingSoon: false,
    image: '/event-flyer.jpg',
  },
  {
    id: 'talk-1',
    date: 'To be announced',
    topic: 'Modern Tech & Human Emotion: Building Strong Relationships',
    format: 'Google Meet Discussion',
    host: 'Nwaeze David (The King of Intelligence)',
    guest: 'Bella (Culture & Community)',
    spotsLeft: 0,
    isComingSoon: true,
  },
  {
    id: 'talk-2',
    date: 'To be announced',
    topic: 'Creating Real-World Impact: Solving Everyday Problems with Modern Tools',
    format: 'Live Project Review',
    host: 'Nwaeze David',
    guest: 'Monte (Human Psychology)',
    spotsLeft: 0,
    isComingSoon: true,
  },
];

export const PROFOUND_QUESTION_PROMPTS = [
  {
    question: "When technology creates art or music that moves me, what is really happening?",
    theme: "Art & Emotion",
    sovereigntyInsight: "The feelings belong to you. Technology arranges patterns, but your lived experience and human heart give them meaning."
  },
  {
    question: "How can we use modern tools while keeping real-world friendships strong?",
    theme: "Relationships",
    sovereigntyInsight: "Use tools to plan and stay in touch, but make room for in-person time, phone calls, and real conversation."
  },
  {
    question: "What human abilities will matter most as automation continues to grow?",
    theme: "The Future",
    sovereigntyInsight: "Empathy, honest listening, and caring for others. Machines can calculate, but only people can care."
  },
  {
    question: "How do we make sure future technology brings people together instead of isolating them?",
    theme: "Human-Centered Tech",
    sovereigntyInsight: "Focus on connection, not screen addiction. Choose tools that support real human life."
  }
];
