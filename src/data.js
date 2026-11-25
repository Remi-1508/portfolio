// ─────────────────────────────────────────────────────────────
//  Tout le contenu du site est ici : modifie les textes, liens
//  et compétences sans toucher au reste du code.
//  Les lignes marquées  // TODO  sont à compléter.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rémi Monier',
  firstName: 'Rémi',
  role: 'Élève ingénieur · Data, développement & IA',
  location: 'Bordeaux, France',
  tagline:
    "J'aime l'IA, la data et le dev, surtout pour l'usage que chacun en fait : faire communiquer tout le monde et diffuser les bonnes pratiques pour que ces outils servent vraiment.",
  status: "Recherche un stage de fin d'études · 6 mois dès février 2027",
  github: 'https://github.com/Remi-1508',
  linkedin: 'https://www.linkedin.com/in/remi-monier-ensc',
  email: 'remimonier123@gmail.com',
  // Les CV sont dans le dossier /public
  cv: './CV-Remi-Monier.pdf',
  cvAts: './CV-Remi-Monier-ATS.pdf',
}

export const navLinks = [
  { id: 'apropos', label: 'À propos' },
  { id: 'avenir', label: 'Avenir' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projet', label: 'RunToDraw' },
  { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  title: "Un profil à la croisée des données, du code et de l'humain.",
  paragraphs: [
    "Je suis élève ingénieur à l'ENSC (Bordeaux INP), école de cognitique : on y apprend à concevoir, adapter, étudier et développer des systèmes qui tiennent compte de la façon dont les personnes pensent, perçoivent et ressentent. Avant cela, j'ai suivi une Licence MIASHS à l'Université de Bordeaux, où j'ai construit mes bases en mathématiques et en informatique appliquées aux sciences humaines et sociales.",
    "J'aime la technologie et ses évolutions, et je trouve primordial qu'elle soit au service de tous : l'humain doit rester au centre de chaque problématique. Ce qui me motive : rendre les données compréhensibles, bâtir des applications qui servent vraiment, et explorer l'IA avec un regard centré sur l'utilisateur.",
  ],
  facts: [
    { label: 'Formation', value: 'ENSC · Bordeaux INP', sub: 'Ingénieur cognitique, promo 2024-2027' },
    { label: 'Avant', value: 'Licence MIASHS', sub: 'Université de Bordeaux · mention Bien' },
    {
      label: 'Été 2026',
      value: 'Polytechnique Montréal',
      sub: 'Stage de recherche en affective computing, IA et dataviz · poster accepté à IEEE VIS 2026',
    },
    { label: 'Basé à', value: 'Bordeaux', sub: 'Ouvert à Paris et Lyon' },
  ],
}

export const future = {
  title: "Mon projet : un stage de fin d'études en data, développement et IA.",
  intro:
    "Je cherche un stage de 6 mois à partir de février 2027, à Bordeaux, Paris ou Lyon, pour concevoir et construire des solutions data/IA utiles, au plus près des personnes qui les utilisent.",
  cards: [
    {
      emoji: '📊',
      title: 'Data & IA',
      text: "Analyse, modélisation, évaluation de modèles : transformer des données brutes en décisions éclairées.",
    },
    {
      emoji: '💻',
      title: 'Développement',
      text: "Concevoir des applications web et des outils propres, performants et maintenables.",
    },
    {
      emoji: '🤝',
      title: "L'humain au centre",
      text: "Des solutions pensées pour leurs utilisateurs : recherche utilisateur, tests, lien entre équipes tech et métiers.",
    },
  ],
  timeline: [
    { when: '2024', what: "Entrée à l'ENSC (Bordeaux INP)" },
    { when: 'Mai-août 2026', what: 'Stage de recherche à Polytechnique Montréal' },
    { when: 'Février 2027', what: "Stage de fin d'études (6 mois) : Bordeaux, Paris ou Lyon" },
    { when: '2027', what: "Diplôme d'ingénieur" },
  ],
}

export const skills = [
  {
    title: 'Programmation',
    items: ['Python', 'SQL', 'R', 'JavaScript', 'C#', 'MATLAB'],
  },
  {
    title: 'Développement',
    items: ['React', 'Node.js', 'FastAPI', 'API REST', 'Firebase', 'Bases de données relationnelles'],
  },
  {
    title: 'IA & data',
    items: ['PyTorch', 'scikit-learn', 'LLM (évaluation, API)', 'Statistiques & prédiction', 'pandas', 'NumPy', 'Matplotlib', 'Web scraping', 'Dataviz'],
  },
  {
    title: 'Outils & méthodes',
    items: ['Git & GitHub', 'Agile', 'Figma', 'Tests utilisateurs', 'Assistants de codage IA', 'Pack Office'],
  },
  {
    title: 'Relationnel / Soft skills',
    items: ['Gestion des connaissances', 'Recherche utilisateur', 'Médiation tech / métiers'],
  },
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'C1 · TOEIC 955/990' },
]

export const project = {
  name: 'RunToDraw',
  kicker: 'Projet personnel',
  title: 'Dessiner avec ses jambes.',
  text:
    "RunToDraw est une application web qui génère un itinéraire GPX - course à pied, vélo… - dessinant une forme ou un texte autour du lieu de votre choix, pour une distance donnée. Vous choisissez la forme, la ville et le kilométrage ; l'appli calcule un parcours réel qui épouse au mieux le dessin.",
  note: "Le résultat est nettement meilleur en centre-ville, là où la densité de rues et d'intersections est élevée.",
  points: [
    'Interface React reliée par une API REST (FastAPI) à un backend Python',
    'Réseau routier OpenStreetMap et algorithmes de graphes',
    'Export GPX prêt à charger sur votre montre ou votre GPS',
    "En cours d'amélioration : qualité du code, performances, nouvelles formes",
  ],
  stack: ['React', 'FastAPI', 'Python', 'OpenStreetMap', 'Graphes', 'GPX'],
  repo: 'https://github.com/Remi-1508/RunToDraw',
  demo: 'https://runtodraw.vercel.app',
}

export const cvInfo = {
  title: 'Mon CV',
  text: 'Mon parcours, mes expériences et mes compétences sur une page.',
}

export const contact = {
  title: 'Travaillons ensemble.',
  text: "Un stage, un projet, une question ? Écrivez-moi, je réponds avec plaisir.",
}
