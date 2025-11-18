import { Project, Experience, Skill, SocialLink, Recommendation } from './types';

export const PERSONAL_INFO = {
  name: 'Anthony Urbanski',
  title: 'Développeur Full Stack',
  subtitle: 'Passionné par le code et les systèmes bas niveau',
  email: 'anthonyu2798@gmail.com',
  location: 'Pont-sur-Yonne, France',
  availability: 'Recherche alternance 12 mois (à pourvoir immédiatement)',
  bio: `Développeur avec 2 ans d'expérience en développement web full stack, actuellement en Bachelor SIN à l'EPSI. 
  Bonne maîtrise de Java et Python, avec une forte capacité d'adaptation démontrée sur des technologies variées. 
  Passionné par l'architecture logicielle et les systèmes bas niveau.`,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Laharls',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/anthonyurbanski/',
    icon: 'Linkedin',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', category: 'frontend', level: 'Avancé' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Intermédiaire' },
  { name: 'JavaScript', category: 'frontend', level: 'Intermédiaire' },
  { name: 'TypeScript', category: 'frontend', level: 'Intermédiaire' },
  { name: 'React', category: 'frontend', level: 'Intermédiaire' },
  { name: 'Next.js', category: 'frontend', level: 'Intermédiaire' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 'Intermédiaire' },
  { name: 'Express', category: 'backend', level: 'Intermédiaire' },
  { name: 'Laravel', category: 'backend', level: 'Intermédiaire' },
  
  // Langages systèmes
  { name: 'Python', category: 'languages', level: 'Intermédiaire' },
  { name: 'Java', category: 'languages', level: 'Intermédiaire' },
  { name: 'Rust', category: 'languages', level: 'Intermédiaire' },
  
  // Outils & Technologies
  { name: 'Git/GitHub', category: 'tools', level: 'Avancé' },
  { name: 'Docker', category: 'tools', level: 'Intermédiaire' },
  { name: 'API REST', category: 'tools', level: 'Intermédiaire' },

  // Base de données
  { name: 'SQL', category: 'database', level: 'Intermédiaire' },
  { name: 'MariaDb', category: 'database', level: 'Intermédiaire' },

  // OS
  { name: 'Linux', category: 'environnement', level: 'Intermédiaire' },
  { name: 'Windows', category: 'environnement', level: 'Avancé' },
];

export const PROJECTS: Project[] = [
  {
    id: 'chip8-emulator',
    title: 'Chip-8 Emulator',
    description: 'Émulateur Chip-8 complet en Rust avec architecture modulaire et rendering SDL2',
    longDescription: `Un émulateur Chip-8 entièrement fonctionnel implémentant les 35 opcodes originaux. 
    Le projet démontre une compréhension approfondie des architectures matérielles et de la programmation système.`,
    technologies: ['Rust', 'SDL2', 'Architecture système', 'Tests unitaires'],
    github: 'https://github.com/Laharls/chip8-emulator',
    featured: true,
    metrics: [
      { label: 'Instructions', value: '35' },
      { label: 'Modulaire', value: 'Architecture' },
      { label: 'Unitaires', value: 'Tests' },
    ],
  },
  {
    id: 'territorial-clone',
    title: 'Territorial.io Clone',
    description: 'Clone du jeu de stratégie avec génération procédurale et IA adversaire',
    longDescription: `Jeu de stratégie inspiré de Territorial.io utilisant l'algorithme de Voronoï pour la génération 
    de cartes et le ray casting pour la détection de clics précise. Inclut une IA basique pour les adversaires.`,
    technologies: ['Python', 'Pygame', 'Algorithmes géométriques', 'IA'],
    github: 'https://github.com/Laharls/Territorial.io-clone',
    featured: true,
    metrics: [
      { label: 'Voronoï', value: 'Algorithme' },
      { label: 'Intégrée', value: 'IA' },
      { label: 'Procédurale', value: 'Génération' },
    ],
  },
  {
    id: 'quiz-game',
    title: 'Quiz Game',
    description: 'Jeu de quiz interactif sur les jeux vidéo avec système de timer et high scores',
    longDescription: `Application web interactive développée en JavaScript vanilla avec système de timer, 
    gestion de high scores via LocalStorage et interface responsive.`,
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Laharls/Quiz-game',
    featured: false,
    demo: 'https://laharls.github.io/Quiz-game/',
    metrics: [
      { label: 'Temps réel', value: 'Timer' },
      { label: 'Persistance', value: 'Storage' },
      { label: 'Design', value: 'Responsive' },
    ],
  },
  {
    id: 'portfolio-nextjs',
    title: 'Portfolio Personnel',
    description: 'Portfolio moderne développé avec Next.js 14 et TypeScript',
    longDescription: `Site portfolio personnel utilisant les dernières technologies web. Architecture modulaire, 
    design responsive, animations fluides et optimisations SEO.`,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Laharls/portfolio',
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'esportbros',
    company: 'eSportBros TV',
    position: 'Développeur Web Full Stack',
    type: 'volunteer',
    startDate: '2024-02',
    endDate: '2025-02',
    description: `Développement bénévole de solutions web pour une plateforme esports`,
    achievements: [
      'Conception et développement de 2 sites web avec Next.js et Laravel',
      'Développement d\'un bot Discord gérant 500+ utilisateurs pour l\'automatisation de tournois',
      'Optimisation de l\'expérience utilisateur et automatisation des tâches administratives',
      'Mise en place de workflows de déploiement continu',
    ],
    technologies: ['Next.js', 'Laravel', 'Node.js', 'Discord API'],
  },
  {
    id: 'urbanskidev',
    company: 'UrbanskiDev',
    position: 'Développeur Web Full Stack',
    type: 'freelance',
    startDate: '2022-06',
    endDate: '2023-12',
    description: `Activité freelance de développeur`,
    achievements: [
      'Développement d\'une extension web sécurisée avec système d\'authentification par e-mail',
      'Conception et développement d\'API REST robustes avec tests fonctionnels',
      'Gestion complète du cycle de déploiement et mise en production',
      'Automatisation de la collecte et traitement de données',
    ],
    technologies: ['Node.js', 'API REST', 'Tests fonctionnels', 'Authentification sécurisée'],
  },
  {
    id: 'inria',
    company: 'INRIA',
    position: 'Développeur Web Full Stack',
    type: 'parttime',
    startDate: '2021-12',
    endDate: '2022-05',
    location: 'France',
    description: `Développeur Full Stack ayant travailler à la mise en place de nouveaux outils tout en s'assurant du bon déploiement`,
    achievements: [
      'Sécurisation et administration de serveurs critiques hébergeant les applications',
      'Participation au développement d\'une application pour Edtechone',
      'Mise en place et configuration d\'un système d\'analyse Matomo',
      'Documentation technique des infrastructures déployées',
    ],
    technologies: ['Administration serveur Linux', 'Matomo', 'Sécurité'],
  },
  {
    id: 'edtechone',
    company: 'EDTECHONE',
    position: 'Développeur Web Full Stack',
    type: 'parttime',
    startDate: '2021-05',
    endDate: '2021-11',
    location: 'France',
    description: `Développement de page pour mettre en avant l'outil Source de Confiance`,
    achievements: [
      'Conceptualisation et mise en œuvre des pages Onboarding, Upboarding et Offboarding pour l\'extension Sources de Confiance',
      'Création du Back-End pour la gestion de l\'envoi et du stockage des formulaires (inscription et désinstallation), ainsi que la vérification des données du formulaire',
      'Mise en place d\'un système de vérification d\'e-mail sécurisé, incluant l\'envoi d\'e-mails sécurisés',
      'Intégration des pages dans l\'extension, activées lors de l\'installation (Onboarding), de la mise à jour (Upboarding) ou de la désinstallation (Offboarding)',
    ],
    technologies: ['Laravel', 'Vue.js', 'Sécurité'],
  },
  {
    id: 'l3mholding',
    company: 'L3M Holding',
    position: 'Développeur Web Front End',
    type: 'internship',
    startDate: '2020-12',
    endDate: '2021-01',
    location: 'France',
    description: `Stage de développement web`,
    achievements: [
      'Création de pages Web et de leur système dans leur intégralité avec un design web responsive sous Shopify (Html, CSS, Javascript, Jquery, Liquid)',
      'Création d\'un gestionnaire de faq dynamique sans avoir à toucher au code sous Shopify.',
    ],
    technologies: ['HTML', 'CSS', 'Javascript', 'jQuery'],
  },
  {
    id: 'holovrprod',
    company: 'HoloVR-Prod',
    position: 'Développeur Unity C#',
    type: 'internship',
    startDate: '2020-05',
    endDate: '2020-07',
    location: 'France',
    description: `Stage de développement Unity C#`,
    achievements: [
      'Utilisation de PopCorn Editor pour créer des particules',
      'Gestion d\'une caméra secondaire pilotable par un tier à partir d\'un PC',
      'Création d\'un système d\'undo/redo prenant en compte la durée de vie des particules.'
    ],
    technologies: ['PopCornFx', 'Unity', 'C#'],
  },
];

export const EDUCATION = [
  {
    degree: 'Bachelor SIN (Systèmes d’Information et Numérique)',
    school: 'EPSI',
    period: '2025 - 2026',
    specialization: 'Intelligence Artificielle',
    status: 'En cours',
  },
  {
    degree: 'DUT Informatique',
    school: 'IUT Orsay',
    period: '2017 - 2020',
    status: 'Obtenu',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/projects', label: 'Projets' },
  { href: '/experience', label: 'Expérience' },
  { href: '/contact', label: 'Contact' },
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    author: 'Michaël Bideault', 
    position: 'Directeur de l\'ingénierie des connaissances chez Villes Internet',
    company: 'Villes Internet', 
    relationship: 'Collaborateur',
    date: '2023-04',
    text: `Anthony a principalement travaillé avec moi sur des problématiques DevOps : automatisation des tests, optimisation des images docker, itération des déploiements en (pré)production, maintenance corrective et évolutive des services et applications. Son tempérament et sa maîtrise des outils distanciels de suivi de projet et de communication ont permis d'avancer en toute sérénité : échanges toujours sympathiques et sérieux, avec une bonne capacité d'adaptation aux nouvelles situations pour monter en compétence rapidement chaque fois que c'était nécessaire.`,
    linkedinUrl: 'https://www.linkedin.com/in/michaelbideault/',
  },
  {
    id: 'rec-2',
    author: 'Dominique Yolin', 
    position: 'Président',
    company: 'Light In Chaos', 
    relationship: 'Maître de stage',
    date: '2020-07',
    text: `J'ai pu suivre le travail de développement de Anthony Urbanski en tant que Maître de stage. J'ai été extrêmement surpris par ses capacités d'adaptation, alors qu'il vient juste de finir ses études, et d'assumer le démarrage d'un projet "from scratch" sur son unique personne et responsabilité. A lui seul et sous ma direction, il a créé un logiciel artistique en VR sous Unity. Du dessin, à la gestion de l'interface utilisateur, de la création de caméras « spectateur » télécommandées, à la gestion du "monde-VR", Anthony a réussi à construire en un temps record un logiciel utilisable et non-buggé. Il a dépassé les objectifs qui lui avaient été confiés et je l'en remercie. Dans un futur proche, la société qui croisera le chemin d'Anthony Urbanski trouvera dans ses compétences et son sérieux une valeur ajoutée rare sur le marché du travail.`,
    linkedinUrl: 'https://www.linkedin.com/in/dominique-yolin/', 
  },
  {
    id: 'rec-3',
    author: 'Gerard Bernasconi', 
    position: 'Formateur Freelance',
    company: 'HoloVR-Prod', 
    relationship: 'Manager',
    date: '2020-07',
    text: `Anthony Urbanski est un jeune développeur prometteur qui a mis au service de ma société, HoloVR Prod, ses talents de codeurs en C#. Parti de zéro, « from scratch », il a réalisé pour sa première incursion dans le monde complexe de la Réalité Virtuelle, un logiciel de dessin/sculpting dans l’esprit de Tiltbrush (logiciel de Google) en moins de 2 mois ! Anthony a dû travailler avec l’outil de particule PopCornFX, très complexe, et développer le tout dans Unity. Il a su trouver des solutions quand les obstacles se sont présentés et eu une attitude très professionnelle pour un développeur sorti fraichement de ses études. Pour finir, sa ponctualité quotidienne et sa concentration en fait un atout de taille pour toute entreprise qui aura la chance de l’embaucher au sein d’une équipe.`,
    linkedinUrl: 'https://www.linkedin.com/in/gbernasconi/',
  },
];