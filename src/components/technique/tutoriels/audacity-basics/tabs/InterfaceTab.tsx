import React from "react";

const InterfaceTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Interface utilisateur d'Audacity</h3>
      <p className="mb-4">
        L'interface d'Audacity peut sembler intimidante au premier abord, mais elle est organisée de manière logique.
        Voici les éléments principaux que vous devez connaître :
      </p>
      
      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
        <img 
          src="https://manual.audacityteam.org/m/images/8/8e/annotated_interface.png" 
          alt="Interface Audacity annotée" 
          className="object-contain w-full h-full" 
        />
      </div>
      
      <h4 className="text-lg font-medium">Barre de menu</h4>
      <p className="mb-4">
        Située tout en haut, elle contient toutes les fonctionnalités d'Audacity organisées par catégories :
        Fichier, Édition, Affichage, Transport, Pistes, Générer, Effet, Analyse, etc.
      </p>
      
      <h4 className="text-lg font-medium">Barre d'outils</h4>
      <p className="mb-4">
        Juste en dessous du menu, elle contient les outils les plus couramment utilisés :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Outil de sélection</strong> : pour sélectionner des portions d'audio</li>
        <li><strong>Outil d'enveloppe</strong> : pour modifier le volume à des points spécifiques</li>
        <li><strong>Outil de dessin</strong> : pour modifier individuellement les échantillons</li>
        <li><strong>Outil zoom</strong> : pour agrandir ou réduire l'affichage de la forme d'onde</li>
        <li><strong>Outil temporel</strong> : pour ajuster la position des clips audio</li>
        <li><strong>Outil multi</strong> : combine plusieurs fonctionnalités</li>
      </ul>
      
      <h4 className="text-lg font-medium">Contrôles de lecture</h4>
      <p className="mb-4">
        Ces boutons permettent de contrôler la lecture et l'enregistrement :
        Lecture, Pause, Stop, Retour au début, Aller à la fin, Enregistrer.
      </p>
      
      <h4 className="text-lg font-medium">Zone d'édition principale</h4>
      <p className="mb-4">
        C'est ici que s'affichent les formes d'onde de vos pistes audio et où vous effectuerez la plupart de vos éditions.
      </p>
      
      <h4 className="text-lg font-medium">Contrôles de piste</h4>
      <p className="mb-4">
        Situés à gauche de chaque piste, ils permettent de régler le volume, la balance, de renommer la piste,
        de la mettre en solo, en sourdine, etc.
      </p>
      
      <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800">
        <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Astuce</h4>
        <p className="text-amber-700 dark:text-amber-300">
          Vous pouvez personnaliser l'interface en activant ou désactivant certaines barres d'outils via le menu Affichage > Barres d'outils.
          Cela vous permet d'adapter l'interface à vos besoins spécifiques.
        </p>
      </div>
    </div>
  );
};

export default InterfaceTab;