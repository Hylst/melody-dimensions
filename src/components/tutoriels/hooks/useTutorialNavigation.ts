import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer la navigation entre les sections d'un tutoriel
 * @param tabs - Tableau des identifiants des onglets disponibles
 * @param defaultTab - Onglet par défaut (optionnel)
 */
export const useTutorialNavigation = (tabs: string[], defaultTab?: string) => {
  // État pour suivre l'onglet actuel
  const [currentTab, setCurrentTab] = useState<string>(defaultTab || (tabs.length > 0 ? tabs[0] : ''));

  // Fonction pour naviguer vers un onglet spécifique
  const navigateToTab = (tabId: string) => {
    if (tabs.includes(tabId)) {
      setCurrentTab(tabId);
      // Optionnel: sauvegarder la progression dans le localStorage
      localStorage.setItem('tutorialCurrentTab', tabId);
    }
  };

  // Fonction pour naviguer vers l'onglet suivant
  const navigateToNextTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      navigateToTab(nextTab);
    }
  };

  // Fonction pour naviguer vers l'onglet précédent
  const navigateToPrevTab = () => {
    const currentIndex = tabs.indexOf(currentTab);
    if (currentIndex > 0) {
      const prevTab = tabs[currentIndex - 1];
      navigateToTab(prevTab);
    }
  };

  // Effet pour restaurer l'onglet actuel depuis le localStorage au chargement
  useEffect(() => {
    const savedTab = localStorage.getItem('tutorialCurrentTab');
    if (savedTab && tabs.includes(savedTab)) {
      setCurrentTab(savedTab);
    }
  }, [tabs]);

  return {
    currentTab,
    navigateToTab,
    navigateToNextTab,
    navigateToPrevTab
  };
};