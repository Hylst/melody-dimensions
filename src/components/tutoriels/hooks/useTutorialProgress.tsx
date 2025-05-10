import { useState, useEffect, useCallback } from 'react';

interface TutorialProgressData {
  tutorialId: string;
  completedSections: string[];
  lastVisited?: string; // Date ISO string
  isCompleted: boolean;
}

interface TutorialProgressState {
  [tutorialId: string]: TutorialProgressData;
}

/**
 * Hook personnalisé pour gérer et persister la progression de l'utilisateur dans les tutoriels
 */
export const useTutorialProgress = () => {
  // Clé utilisée pour stocker les données dans le localStorage
  const STORAGE_KEY = 'melodimensions_tutorial_progress';
  
  // État local pour stocker la progression
  const [progress, setProgress] = useState<TutorialProgressState>({});
  
  // Charger les données de progression depuis le localStorage au montage du composant
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Erreur lors du chargement de la progression des tutoriels:', error);
    }
  }, []);
  
  // Sauvegarder les données de progression dans le localStorage à chaque mise à jour
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Erreur lors de la sauvegarde de la progression des tutoriels:', error);
      }
    }
  }, [progress]);
  
  /**
   * Marquer une section comme complétée
   */
  const markSectionCompleted = useCallback((tutorialId: string, sectionId: string) => {
    setProgress(prev => {
      const tutorialProgress = prev[tutorialId] || {
        tutorialId,
        completedSections: [],
        isCompleted: false,
        lastVisited: new Date().toISOString()
      };
      
      // Vérifier si la section n'est pas déjà marquée comme complétée
      if (!tutorialProgress.completedSections.includes(sectionId)) {
        const updatedSections = [...tutorialProgress.completedSections, sectionId];
        
        return {
          ...prev,
          [tutorialId]: {
            ...tutorialProgress,
            completedSections: updatedSections,
            lastVisited: new Date().toISOString()
          }
        };
      }
      
      return prev;
    });
  }, []);
  
  /**
   * Marquer un tutoriel entier comme complété
   */
  const markTutorialCompleted = useCallback((tutorialId: string) => {
    setProgress(prev => {
      const tutorialProgress = prev[tutorialId] || {
        tutorialId,
        completedSections: [],
        lastVisited: new Date().toISOString()
      };
      
      return {
        ...prev,
        [tutorialId]: {
          ...tutorialProgress,
          isCompleted: true,
          lastVisited: new Date().toISOString()
        }
      };
    });
  }, []);
  
  /**
   * Mettre à jour la date de dernière visite d'un tutoriel
   */
  const updateLastVisited = useCallback((tutorialId: string) => {
    setProgress(prev => {
      const tutorialProgress = prev[tutorialId] || {
        tutorialId,
        completedSections: [],
        isCompleted: false
      };
      
      return {
        ...prev,
        [tutorialId]: {
          ...tutorialProgress,
          lastVisited: new Date().toISOString()
        }
      };
    });
  }, []);
  
  /**
   * Vérifier si une section est complétée
   */
  const isSectionCompleted = useCallback((tutorialId: string, sectionId: string) => {
    return progress[tutorialId]?.completedSections.includes(sectionId) || false;
  }, [progress]);
  
  /**
   * Vérifier si un tutoriel est complété
   */
  const isTutorialCompleted = useCallback((tutorialId: string) => {
    return progress[tutorialId]?.isCompleted || false;
  }, [progress]);
  
  /**
   * Obtenir le pourcentage de progression pour un tutoriel
   */
  const getTutorialProgress = useCallback((tutorialId: string, totalSections: number) => {
    const tutorialProgress = progress[tutorialId];
    if (!tutorialProgress) return 0;
    
    if (tutorialProgress.isCompleted) return 100;
    
    return Math.round((tutorialProgress.completedSections.length / totalSections) * 100);
  }, [progress]);
  
  /**
   * Réinitialiser la progression d'un tutoriel
   */
  const resetTutorialProgress = useCallback((tutorialId: string) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[tutorialId];
      return newProgress;
    });
  }, []);
  
  return {
    markSectionCompleted,
    markTutorialCompleted,
    updateLastVisited,
    isSectionCompleted,
    isTutorialCompleted,
    getTutorialProgress,
    resetTutorialProgress,
    progress
  };
};