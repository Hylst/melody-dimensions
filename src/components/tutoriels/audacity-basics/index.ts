import * as Content from './content';

// Structure des données du tutoriel
const audacityBasicsTutorial = {
  id: 'audacity-basics',
  title: 'Audacity - Les bases',
  description: 'Apprenez les fondamentaux d\'Audacity pour l\'édition audio simple',
  slug: 'audacity-basics',
  difficulty: 'débutant',
  duration: '45 min',
  software: 'Audacity',
  sections: [
    {
      id: 'installation',
      title: 'Installation',
      component: Content.InstallationContent
    },
    {
      id: 'interface',
      title: 'Interface',
      component: Content.InterfaceContent
    },
    {
      id: 'importation',
      title: 'Importation',
      component: Content.ImportationContent
    },
    {
      id: 'edition',
      title: 'Édition',
      component: Content.EditionContent
    },
    {
      id: 'effets',
      title: 'Effets',
      component: Content.EffetsContent
    },
    {
      id: 'pistes',
      title: 'Pistes',
      component: Content.PistesContent
    },
    {
      id: 'exportation',
      title: 'Exportation',
      component: Content.ExportationContent
    }
  ]
};

export default audacityBasicsTutorial;
export { Content };