// ─────────────────────────────────────────────────────────────
//  Tout le contenu du site est ici : modifie les textes, liens
//  et compétences sans toucher au reste du code.
//  Les lignes marquées  // TODO  sont à vérifier / compléter.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rémi Monier',
  firstName: 'Rémi',
  role: 'Élève ingénieur · Data, développement & IA',
  location: 'Bordeaux, France',
  tagline:
    "Je transforme les données en outils clairs et utiles — avec une attention particulière à l'humain derrière chaque écran.",
  github: 'https://github.com/Remi-1508',
  linkedin: 'https://www.linkedin.com/in/remi-monier-ensc',
  // TODO : ton adresse e-mail
  email: 'ton.adresse@email.com',
  // Dépose ton CV dans /public/cv.pdf
  cv: './cv.pdf',
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
    "Je suis élève ingénieur à l'ENSC (Bordeaux INP), école de cognitique : on y apprend à concevoir des systèmes qui tiennent compte de la façon dont les personnes pensent, perçoivent et ressentent. Avant cela, j'ai suivi une Licence MIASHS à l'Université de Bordeaux, où j'ai construit mes bases en mathématiques et en informatique appliquées aux sciences humaines et sociales.",
    "Ce qui me motive : rendre les données compréhensibles, bâtir des applications qui servent vraiment, et explorer l'IA avec un regard centré sur l'utilisateur.",
  ],
  facts: [
    { label: 'Formation', value: 'ENSC · Bordeaux INP', sub: 'Ingénieur cognitique, promo 2024–2027' },
    { label: 'Avant', value: 'Licence MIASHS', sub: 'Université de Bordeaux' },
    { label: '2026', value: 'Polytechnique Montréal', sub: 'Stage 2026 · affective computing, IA, visualisation de données' },
    { label: 'Basé à', value: 'Bordeaux', sub: 'France' },
  ],
}

export const future = {
  title: 'Mon projet : une alternance en data, développement et IA.',
  intro:
    "Pour ma 3e année, je cherche une alternance où je pourrai concevoir, construire et mettre en production des solutions data/IA, au sein d'une équipe qui aime transmettre.",
  cards: [
    {
      emoji: '📊',
      title: 'Data & IA',
      text: "Analyse, modélisation, visualisation : transformer des données brutes en décisions éclairées.",
    },
    {
      emoji: '💻',
      title: 'Développement',
      text: "Concevoir des applications web et des outils internes propres, performants et maintenables.",
    },
    {
      emoji: '🌱',
      title: 'Évolution',
      text: "Un environnement qui permet de grandir : gros projets, mentors, perspectives à long terme.",
    },
  ],
  timeline: [
    { when: '2024', what: "Entrée à l'ENSC (Bordeaux INP)" },
    { when: '2026', what: 'Stage à Polytechnique Montréal : affective computing, IA, data viz' },
    { when: '2026–2027', what: '3e année en alternance : recherche en cours' },
    { when: '2027', what: "Diplôme d'ingénieur" },
  ],
}

// level : 1 à 3 (point plein = maîtrise plus forte). Ajuste selon ta réalité.
export const skills = [
  {
    title: 'Langages',
    items: ['Python', 'JavaScript', 'SQL', 'HTML / CSS'], // TODO : ajoute R, Java, C… si pertinent
  },
  {
    title: 'Data & IA',
    items: ['Analyse de données', 'Visualisation de données', 'Machine learning', 'Statistiques', 'Affective computing'],
  },
  {
    title: 'Web',
    items: ['React', 'FastAPI', 'API REST', 'Vite'],
  },
  {
    title: 'Outils',
    items: ['Git & GitHub', 'GPX / graphes (OSM)', 'Google Sheets'], // TODO
  },
  {
    title: 'Soft skills',
    items: ['Gestion de projet', 'Esprit de synthèse', 'Travail en équipe', 'Curiosité'],
  },
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Niveau à compléter' }, // TODO : niveau exact / TOEIC
]

export const project = {
  name: 'RunToDraw',
  kicker: 'Projet personnel',
  title: 'Dessiner avec ses jambes.',
  text:
    "RunToDraw est une application web qui génère un itinéraire GPX — course à pied, vélo… — dessinant une forme ou un texte autour du lieu de ton choix, pour une distance donnée. Tu choisis la forme, la ville et le kilométrage ; l'appli calcule un parcours réel qui épouse le dessin.",
  points: [
    'Frontend React pour choisir le lieu, la forme et la distance',
    'Backend FastAPI + traitement de graphes routiers en Python',
    'Export GPX prêt à charger sur ta montre ou ton GPS',
    "En cours d'amélioration : qualité du code, performances, nouvelles formes",
  ],
  stack: ['React', 'FastAPI', 'Python', 'GPX', 'Graphes'],
  repo: 'https://github.com/Remi-1508/RunToDraw',
  demo: '', // TODO : lien de la démo en ligne (laisse vide sinon)
}

export const cvInfo = {
  title: 'Mon CV',
  text: "Mon parcours, mes expériences et mes compétences en un coup d'œil.",
}

export const contact = {
  title: "Travaillons ensemble.",
  text: "Une alternance, un projet, une question ? Écris-moi, je réponds avec plaisir.",
}
