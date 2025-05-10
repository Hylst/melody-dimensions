/**
 * Fichier d'index pour exporter tous les composants et hooks de la section Tutoriels
 * Cela facilite l'importation des composants dans d'autres parties de l'application
 */

// Composants communs
export { default as TutorialHeader } from './common/TutorialHeader';
export { default as TutorialBanner } from './common/TutorialBanner';
export { default as TutorialTabs } from './common/TutorialTabs';

// Composants UI
export { default as TipCard } from './common/ui/TipCard';
export { default as StepList } from './common/ui/StepList';
export { default as ResourceLink } from './common/ui/ResourceLink';

// Hooks personnalisés
export { useTutorialNavigation } from './hooks/useTutorialNavigation';
export { useTutorialProgress } from './hooks/useTutorialProgress';

// Données
export { 
  tutorials, 
  getTutorialBySlug, 
  getTutorialsByCategory,
  getRelatedTutorials,
  getTutorialPath
} from './data/tutorialsData';

// Chargeur de tutoriels
export { default as TutorialLoader } from './TutorialLoader';

// Tutoriels spécifiques
export { default as AudacityBasics } from './audacity-basics';
export { default as CakewalkSpatialEffects } from './cakewalk-spatial-effects/CakewalkSpatialEffects';