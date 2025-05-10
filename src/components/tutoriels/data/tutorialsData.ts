/**
 * Données centralisées pour les tutoriels
 * Ce fichier contient les métadonnées et les informations structurelles pour tous les tutoriels
 */

export interface TutorialSection {
  id: string;
  title: string;
  slug: string;
}

export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'edition' | 'enregistrement' | 'mixage' | 'mastering';
  difficulty: 'débutant' | 'intermédiaire' | 'avancé';
  duration: string;
  software: string;
  imageSrc: string;
  sections: TutorialSection[];
  prerequisites?: string[];
  tags?: string[];
  author?: string;
  publishDate?: string;
  updatedDate?: string;
}

/**
 * Liste complète des tutoriels disponibles
 */
export const tutorials: Tutorial[] = [
  {
    id: 'audacity-basics',
    title: 'Les bases d\'Audacity',
    slug: 'audacity-basics',
    description: 'Apprenez à utiliser Audacity pour l\'édition audio de base, de l\'installation à l\'exportation de vos projets.',
    category: 'edition',
    difficulty: 'débutant',
    duration: '45 min',
    software: 'Audacity',
    imageSrc: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    sections: [
      { id: 'installation', title: 'Installation', slug: 'installation' },
      { id: 'interface', title: 'Interface', slug: 'interface' },
      { id: 'importation', title: 'Importation', slug: 'importation' },
      { id: 'edition', title: 'Édition', slug: 'edition' },
      { id: 'effets', title: 'Effets', slug: 'effets' },
      { id: 'pistes', title: 'Pistes', slug: 'pistes' },
      { id: 'exportation', title: 'Exportation', slug: 'exportation' }
    ],
    tags: ['édition audio', 'logiciel gratuit', 'débutant']
  },
  {
    id: 'audacity-cleaning',
    title: 'Nettoyage audio avec Audacity',
    slug: 'audacity-cleaning',
    description: 'Apprenez à nettoyer vos enregistrements audio en éliminant le bruit de fond, les clics et les pops.',
    category: 'edition',
    difficulty: 'intermédiaire',
    duration: '30 min',
    software: 'Audacity',
    imageSrc: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    sections: [
      { id: 'analyse', title: 'Analyse du bruit', slug: 'analyse' },
      { id: 'reduction', title: 'Réduction du bruit', slug: 'reduction' },
      { id: 'clicks', title: 'Élimination des clics', slug: 'clicks' },
      { id: 'normalisation', title: 'Normalisation', slug: 'normalisation' }
    ],
    prerequisites: ['audacity-basics'],
    tags: ['nettoyage audio', 'réduction de bruit', 'restauration']
  },
  {
    id: 'ardour-multitrack',
    title: 'Édition multipiste avec Ardour',
    slug: 'ardour-multitrack',
    description: 'Découvrez comment utiliser Ardour pour l\'édition audio multipiste et la création de projets complexes.',
    category: 'edition',
    difficulty: 'intermédiaire',
    duration: '60 min',
    software: 'Ardour',
    imageSrc: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    sections: [
      { id: 'installation', title: 'Installation', slug: 'installation' },
      { id: 'interface', title: 'Interface', slug: 'interface' },
      { id: 'pistes', title: 'Gestion des pistes', slug: 'pistes' },
      { id: 'edition', title: 'Édition multipiste', slug: 'edition' },
      { id: 'automation', title: 'Automation', slug: 'automation' }
    ],
    tags: ['multipiste', 'DAW open source', 'édition avancée']
  },
  {
    id: 'mixage-fondamentaux',
    title: 'Les fondamentaux du mixage audio',
    slug: 'mixage-fondamentaux',
    description: 'Maîtrisez les concepts essentiels du mixage audio pour donner vie à vos productions musicales.',
    category: 'mixage',
    difficulty: 'débutant',
    duration: '60 min',
    software: 'Divers',
    imageSrc: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    sections: [
      { id: 'introduction', title: 'Introduction au mixage', slug: 'introduction' },
      { id: 'balance', title: 'Balance et panoramique', slug: 'balance' },
      { id: 'eq', title: 'Égalisation', slug: 'eq' },
      { id: 'compression', title: 'Compression', slug: 'compression' },
      { id: 'reverb', title: 'Réverbération', slug: 'reverb' },
      { id: 'workflow', title: 'Workflow de mixage', slug: 'workflow' }
    ],
    tags: ['mixage audio', 'production musicale', 'égalisation', 'compression']
  },
  {
    id: 'ardour-mixing',
    title: 'Mixage avec Ardour',
    slug: 'ardour-mixing',
    description: 'Apprenez à utiliser Ardour pour réaliser des mixages professionnels avec ce DAW open source puissant.',
    category: 'mixage',
    difficulty: 'intermédiaire',
    duration: '75 min',
    software: 'Ardour',
    imageSrc: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    sections: [
      { id: 'preparation', title: 'Préparation du projet', slug: 'preparation' },
      { id: 'routing', title: 'Routage et bus', slug: 'routing' },
      { id: 'plugins', title: 'Utilisation des plugins', slug: 'plugins' },
      { id: 'automation', title: 'Automation', slug: 'automation' },
      { id: 'groupes', title: 'Groupes et VCA', slug: 'groupes' },
      { id: 'finalisation', title: 'Finalisation du mixage', slug: 'finalisation' }
    ],
    prerequisites: ['ardour-multitrack', 'mixage-fondamentaux'],
    tags: ['mixage audio', 'Ardour', 'DAW open source', 'mixage professionnel']
  },
  {
    id: 'vst-plugins-essentiels',
    title: 'Plugins VST essentiels (gratuits)',
    slug: 'vst-plugins-essentiels',
    description: 'Découvrez une sélection de plugins VST gratuits indispensables pour la production musicale.',
    category: 'mixage',
    difficulty: 'débutant',
    duration: '45 min',
    software: 'Divers',
    imageSrc: 'https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    sections: [
      { id: 'eq-plugins', title: 'Égaliseurs', slug: 'eq-plugins' },
      { id: 'compresseurs', title: 'Compresseurs', slug: 'compresseurs' },
      { id: 'reverb-delay', title: 'Réverbération et delay', slug: 'reverb-delay' },
      { id: 'instruments', title: 'Instruments virtuels', slug: 'instruments' },
      { id: 'analyseurs', title: 'Outils d\'analyse', slug: 'analyseurs' },
      { id: 'installation', title: 'Installation et configuration', slug: 'installation' }
    ],
    tags: ['plugins VST', 'logiciels gratuits', 'production musicale', 'effets audio']
  }
  // Les autres tutoriels peuvent être ajoutés ici en suivant le même format
];

/**
 * Obtenir un tutoriel par son slug
 */
export const getTutorialBySlug = (slug: string): Tutorial | undefined => {
  return tutorials.find(tutorial => tutorial.slug === slug);
};

/**
 * Obtenir tous les tutoriels d'une catégorie spécifique
 */
export const getTutorialsByCategory = (category: Tutorial['category']): Tutorial[] => {
  return tutorials.filter(tutorial => tutorial.category === category);
};

/**
 * Obtenir les tutoriels recommandés basés sur un tutoriel spécifique
 * (par exemple, les tutoriels qui utilisent le même logiciel ou qui sont dans la même catégorie)
 */
export const getRelatedTutorials = (tutorialId: string, limit: number = 3): Tutorial[] => {
  const currentTutorial = tutorials.find(t => t.id === tutorialId);
  if (!currentTutorial) return [];
  
  // Filtrer les tutoriels qui sont liés (même logiciel ou même catégorie, mais pas le tutoriel actuel)
  const related = tutorials.filter(t => 
    t.id !== tutorialId && 
    (t.software === currentTutorial.software || t.category === currentTutorial.category)
  );
  
  // Trier par pertinence (même logiciel est plus pertinent que même catégorie)
  related.sort((a, b) => {
    const aRelevance = a.software === currentTutorial.software ? 2 : 1;
    const bRelevance = b.software === currentTutorial.software ? 2 : 1;
    return bRelevance - aRelevance;
  });
  
  // Limiter le nombre de résultats
  return related.slice(0, limit);
};

/**
 * Obtenir le chemin de progression recommandé (tutoriels prérequis et suivants)
 */
export const getTutorialPath = (tutorialId: string) => {
  const currentTutorial = tutorials.find(t => t.id === tutorialId);
  if (!currentTutorial) return { prerequisites: [], next: [] };
  
  // Trouver les tutoriels prérequis
  const prerequisites = currentTutorial.prerequisites
    ? tutorials.filter(t => currentTutorial.prerequisites?.includes(t.id))
    : [];
  
  // Trouver les tutoriels qui ont celui-ci comme prérequis
  const next = tutorials.filter(t => 
    t.prerequisites?.includes(tutorialId)
  );
  
  return { prerequisites, next };
};