import React from "react";

const PistesTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Gestion des pistes dans Audacity</h3>
      <p className="mb-4">
        Audacity vous permet de travailler avec plusieurs pistes audio simultanément, ce qui est essentiel pour créer des mixages
        ou des compositions plus complexes.
      </p>
      
      <h4 className="text-lg font-medium">Créer une nouvelle piste</h4>
      <p className="mb-4">
        Pour ajouter une nouvelle piste vide à votre projet :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Allez dans <strong>Pistes</strong> &gt; <strong>Ajouter nouvelle</strong> &gt; <strong>Piste audio</strong></li>
        <li>Ou utilisez le raccourci Ctrl+Shift+N</li>
      </ol>
      
      <h4 className="text-lg font-medium">Types de pistes</h4>
      <p className="mb-4">
        Audacity propose différents types de pistes pour différents usages :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Piste audio</strong> : Pour enregistrer ou importer de l'audio</li>
        <li><strong>Piste d'étiquettes</strong> : Pour ajouter des marqueurs et annotations</li>
        <li><strong>Piste temporelle</strong> : Pour modifier la vitesse de lecture au fil du temps</li>
        <li><strong>Piste MIDI</strong> : Pour importer et visualiser des données MIDI (sans lecture)</li>
      </ul>
      
      <h4 className="text-lg font-medium">Contrôles de piste</h4>
      <p className="mb-4">
        Chaque piste dispose de contrôles situés sur son panneau gauche :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Menu de piste</strong> : Cliquez sur la flèche pour accéder aux options spécifiques à la piste</li>
        <li><strong>Nom de la piste</strong> : Cliquez pour renommer la piste</li>
        <li><strong>Bouton Muet (M)</strong> : Désactive temporairement la lecture de la piste</li>
        <li><strong>Bouton Solo (S)</strong> : Permet d'écouter uniquement cette piste</li>
        <li><strong>Gain</strong> : Contrôle le volume de la piste (curseur vertical)</li>
        <li><strong>Balance</strong> : Contrôle la répartition gauche/droite (curseur horizontal)</li>
      </ul>
      
      <h4 className="text-lg font-medium">Réorganiser les pistes</h4>
      <p className="mb-4">
        Pour changer l'ordre des pistes dans votre projet :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Cliquez sur le panneau de contrôle de la piste (à gauche)</li>
        <li>Maintenez le bouton de la souris enfoncé</li>
        <li>Faites glisser la piste vers le haut ou le bas</li>
        <li>Relâchez le bouton de la souris lorsque la piste est à la position souhaitée</li>
      </ol>
      
      <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-md border border-indigo-200 dark:border-indigo-800">
        <h4 className="text-lg font-medium text-indigo-700 dark:text-indigo-300 mb-2">Conseil</h4>
        <p className="text-indigo-700 dark:text-indigo-300">
          Donnez des noms descriptifs à vos pistes (par exemple "Voix principale", "Guitare", "Batterie") pour faciliter
          l'organisation de votre projet, surtout lorsque vous travaillez avec de nombreuses pistes.
        </p>
      </div>
    </div>
  );
};

export default PistesTab;