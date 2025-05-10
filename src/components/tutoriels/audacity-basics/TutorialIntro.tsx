import React from "react";

const TutorialIntro = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <p className="text-lg leading-relaxed">
        Audacity est un éditeur audio gratuit et open source qui vous permet d'enregistrer, d'éditer et de mixer des fichiers audio. 
        Ce tutoriel vous guidera à travers les fonctionnalités de base d'Audacity, depuis l'installation jusqu'à l'exportation 
        de vos projets finalisés.
      </p>
      
      <p className="mt-4">
        Que vous soyez débutant dans l'édition audio ou que vous cherchiez simplement à vous familiariser avec Audacity, 
        ce guide pas à pas vous aidera à maîtriser les outils essentiels pour créer et modifier des enregistrements de qualité.
      </p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="text-base font-medium mb-2">Ce que vous apprendrez</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Installer Audacity sur votre système</li>
            <li>Naviguer dans l'interface utilisateur</li>
            <li>Importer et enregistrer de l'audio</li>
            <li>Éditer des fichiers audio</li>
            <li>Appliquer des effets et des filtres</li>
            <li>Gérer plusieurs pistes</li>
            <li>Exporter votre projet final</li>
          </ul>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="text-base font-medium mb-2">Prérequis</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Un ordinateur sous Windows, macOS ou Linux</li>
            <li>Aucune expérience préalable en édition audio n'est nécessaire</li>
            <li>Des écouteurs ou des haut-parleurs pour écouter l'audio</li>
            <li>Un microphone (optionnel, pour les sections d'enregistrement)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorialIntro;