import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface TutorialNavigationOptions {
  /**
   * Identifiant du tutoriel actuel
   */
  tutorialId: string;
  
  /**
   * Identifiant de la section actuelle (optionnel)
   */
  sectionId?: string;
}

/**
 * Hook personnalisé pour gérer la navigation entre les tutoriels
 * et les sections de tutoriels
 */
export const useTutorialNavigation = () => {
  const navigate = useNavigate();

  /**
   * Naviguer vers un tutoriel spécifique
   */
  const goToTutorial = useCallback((tutorialId: string) => {
    navigate(`/technique/tutoriels/${tutorialId}`);
  }, [navigate]);

  /**
   * Naviguer vers une section spécifique d'un tutoriel
   */
  const goToSection = useCallback((options: TutorialNavigationOptions) => {
    const { tutorialId, sectionId } = options;
    if (sectionId) {
      navigate(`/technique/tutoriels/${tutorialId}?section=${sectionId}`);
    } else {
      navigate(`/technique/tutoriels/${tutorialId}`);
    }
  }, [navigate]);

  /**
   * Naviguer vers la liste des tutoriels
   */
  const goToTutorialsList = useCallback(() => {
    navigate('/technique/tutoriels');
  }, [navigate]);

  /**
   * Naviguer vers le tutoriel suivant dans une séquence
   */
  const goToNextTutorial = useCallback((currentTutorialId: string, nextTutorialId: string) => {
    navigate(`/technique/tutoriels/${nextTutorialId}`);
  }, [navigate]);

  /**
   * Naviguer vers le tutoriel précédent dans une séquence
   */
  const goToPreviousTutorial = useCallback((currentTutorialId: string, previousTutorialId: string) => {
    navigate(`/technique/tutoriels/${previousTutorialId}`);
  }, [navigate]);

  return {
    goToTutorial,
    goToSection,
    goToTutorialsList,
    goToNextTutorial,
    goToPreviousTutorial
  };
};