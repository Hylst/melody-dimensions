import React from "react";

const EditionTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Édition audio de base</h3>
      <p className="mb-4">
        Une fois votre fichier audio importé, vous pouvez commencer à l'éditer. Voici les opérations d'édition les plus courantes :
      </p>
      
      <h4 className="text-lg font-medium">Sélectionner de l'audio</h4>
      <p className="mb-4">
        Pour éditer une portion d'audio, vous devez d'abord la sélectionner :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Cliquez et maintenez le bouton gauche de la souris au début de la section que vous souhaitez sélectionner</li>
        <li>Faites glisser jusqu'à la fin de la section</li>
        <li>Relâchez le bouton de la souris</li>
      </ol>
      
      <h4 className="text-lg font-medium">Couper, copier et coller</h4>
      <p className="mb-4">
        Une fois une section sélectionnée, vous pouvez utiliser les commandes standard d'édition :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Couper</strong> : Édition &gt; Couper (Ctrl+X) - Supprime la sélection et la place dans le presse-papiers</li>
        <li><strong>Copier</strong> : Édition &gt; Copier (Ctrl+C) - Copie la sélection dans le presse-papiers sans la supprimer</li>
        <li><strong>Coller</strong> : Édition &gt; Coller (Ctrl+V) - Insère le contenu du presse-papiers à la position du curseur</li>
      </ul>
      
      <h4 className="text-lg font-medium">Supprimer de l'audio</h4>
      <p className="mb-4">
        Pour supprimer une section sans la copier dans le presse-papiers :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>Sélectionnez la section à supprimer</li>
        <li>Appuyez sur la touche Suppr ou Retour arrière</li>
        <li>Ou utilisez Édition &gt; Supprimer</li>
      </ul>
      
      <h4 className="text-lg font-medium">Annuler et rétablir</h4>
      <p className="mb-4">
        Audacity conserve un historique complet de vos actions, ce qui vous permet d'annuler ou de rétablir facilement :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Annuler</strong> : Édition &gt; Annuler (Ctrl+Z) - Annule la dernière action</li>
        <li><strong>Rétablir</strong> : Édition &gt; Rétablir (Ctrl+Y) - Rétablit la dernière action annulée</li>
      </ul>
      
      <div className="bg-green-50 dark:bg-green-950 p-4 rounded-md border border-green-200 dark:border-green-800">
        <h4 className="text-lg font-medium text-green-700 dark:text-green-300 mb-2">Conseil pratique</h4>
        <p className="text-green-700 dark:text-green-300">
          Utilisez fréquemment Ctrl+S pour sauvegarder votre projet Audacity (.aup). Cela vous permettra de reprendre
          votre travail plus tard et d'éviter de perdre vos modifications en cas de problème.
        </p>
      </div>
    </div>
  );
};

export default EditionTab;