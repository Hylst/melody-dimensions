# Architecture des Tutoriels

Cette nouvelle architecture modulaire pour la section Tutoriels est conçue pour améliorer la maintenabilité, la réutilisabilité et l'évolutivité du code.

## Structure des dossiers

```
tutoriels/
├── common/                 # Composants partagés entre tutoriels
│   ├── TutorialHeader.tsx  # En-tête standard pour tous les tutoriels
│   ├── TutorialBanner.tsx  # Bannière réutilisable
│   ├── TutorialTabs.tsx    # Système d'onglets générique
│   └── ui/                 # Composants UI spécifiques aux tutoriels
│       ├── TipCard.tsx     # Carte pour les conseils et astuces
│       ├── StepList.tsx    # Liste d'étapes numérotées
│       └── ResourceLink.tsx # Liens vers des ressources externes
├── hooks/                  # Hooks personnalisés
│   ├── useTutorialNavigation.tsx # Navigation entre tutoriels
│   └── useTutorialProgress.tsx   # Suivi de progression
├── data/                   # Données des tutoriels
│   └── tutorialsData.ts    # Métadonnées centralisées
└── TutorialLoader.tsx      # Chargeur dynamique de tutoriels
```

## Utilisation

### 1. Définir les métadonnées du tutoriel

Ajoutez les métadonnées de votre tutoriel dans `data/tutorialsData.ts` :

```typescript
// Exemple d'ajout d'un nouveau tutoriel
const tutorials: Tutorial[] = [
  // Tutoriels existants...
  {
    id: 'mon-nouveau-tutoriel',
    title: 'Mon Nouveau Tutoriel',
    slug: 'mon-nouveau-tutoriel',
    description: 'Description du tutoriel',
    category: 'edition',
    difficulty: 'débutant',
    duration: '30 min',
    software: 'Logiciel XYZ',
    imageSrc: '/path/to/image.jpg',
    sections: [
      { id: 'section1', title: 'Section 1', slug: 'section1' },
      { id: 'section2', title: 'Section 2', slug: 'section2' }
    ],
    tags: ['tag1', 'tag2']
  }
];
```

### 2. Créer un nouveau tutoriel

Créez un nouveau composant de tutoriel qui utilise le `TutorialLoader` :

```tsx
import React from "react";
import TutorialLoader from "../TutorialLoader";
import Section1Content from "./content/Section1Content";
import Section2Content from "./content/Section2Content";
import TutorialIntro from "./TutorialIntro";

const MonNouveauTutoriel = () => {
  // Fonction pour rendre l'introduction
  const renderIntro = () => <TutorialIntro />;
  
  // Fonction pour rendre les onglets avec leur contenu
  const renderTabs = (tutorialId: string, activeSection?: string) => {
    return (
      <TutorialTabs
        tabs={[
          {
            id: "section1",
            label: "Section 1",
            content: <Section1Content />
          },
          {
            id: "section2",
            label: "Section 2",
            content: <Section2Content />
          }
        ]}
        defaultTab={activeSection || "section1"}
      />
    );
  };
  
  return (
    <TutorialLoader
      renderIntro={renderIntro}
      renderTabs={renderTabs}
    />
  );
};

export default MonNouveauTutoriel;
```

### 3. Utiliser les composants UI réutilisables

Dans vos sections de contenu, utilisez les composants UI réutilisables :

```tsx
import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import ResourceLink from "../../common/ui/ResourceLink";

const Section1Content = () => {
  const steps = [
    {
      title: "Première étape",
      content: <p>Description de la première étape</p>,
      image: "/path/to/step1-image.jpg"
    },
    {
      title: "Deuxième étape",
      content: <p>Description de la deuxième étape</p>
    }
  ];
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Titre de la section</h2>
      
      <p>Contenu introductif de la section...</p>
      
      <TipCard title="Conseil utile">
        <p>Voici un conseil qui vous aidera dans cette section.</p>
      </TipCard>
      
      <StepList steps={steps} />
      
      <h3 className="text-xl font-semibold mt-8">Ressources supplémentaires</h3>
      <div className="grid gap-4 mt-4">
        <ResourceLink
          href="https://example.com"
          title="Documentation officielle"
          description="Documentation complète du logiciel"
          type="documentation"
        />
      </div>
    </div>
  );
};

export default Section1Content;
```

### 4. Utiliser les hooks personnalisés

Utilisez les hooks personnalisés pour gérer la navigation et la progression :

```tsx
import { useTutorialNavigation } from "../../hooks/useTutorialNavigation";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";

const MaSection = () => {
  const { goToTutorial, goToSection } = useTutorialNavigation();
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  
  const handleComplete = () => {
    markSectionCompleted('mon-tutoriel-id', 'section1');
    goToSection({ tutorialId: 'mon-tutoriel-id', sectionId: 'section2' });
  };
  
  return (
    <div>
      {/* Contenu de la section */}
      <Button onClick={handleComplete}>Marquer comme terminé et continuer</Button>
    </div>
  );
};
```

## Avantages de cette architecture

1. **Réutilisabilité** : Les composants communs peuvent être utilisés dans tous les tutoriels
2. **Maintenabilité** : Séparation claire des préoccupations
3. **Évolutivité** : Facilité d'ajout de nouveaux tutoriels
4. **Expérience utilisateur** : Suivi de progression cohérent
5. **Performance** : Chargement dynamique des tutoriels

## Bonnes pratiques

- Gardez les composants de contenu spécifiques dans des dossiers dédiés à chaque tutoriel
- Utilisez les hooks personnalisés pour la logique partagée
- Centralisez les données statiques dans les fichiers de données
- Suivez les conventions de nommage cohérentes