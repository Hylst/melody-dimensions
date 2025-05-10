import React from "react";

const ImportationTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Importation de fichiers audio</h3>
      <p className="mb-4">
        Avant de pouvoir éditer un fichier audio, vous devez l'importer dans Audacity. Voici comment procéder :
      </p>
      
      <h4 className="text-lg font-medium">Méthode 1 : Menu Fichier</h4>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Cliquez sur <strong>Fichier</strong> dans la barre de menu</li>
        <li>Sélectionnez <strong>Ouvrir</strong> ou <strong>Importer</strong> &gt; <strong>Audio</strong></li>
        <li>Naviguez jusqu'au fichier audio que vous souhaitez importer</li>
        <li>Sélectionnez-le et cliquez sur <strong>Ouvrir</strong></li>
      </ol>
      
      <h4 className="text-lg font-medium">Méthode 2 : Glisser-déposer</h4>
      <p className="mb-4">
        Vous pouvez simplement faire glisser un fichier audio depuis l'explorateur de fichiers (Windows) ou le Finder (macOS)
        directement dans la fenêtre d'Audacity.
      </p>
      
      <h4 className="text-lg font-medium">Formats pris en charge</h4>
      <p className="mb-2">
        Audacity prend en charge de nombreux formats audio, notamment :
      </p>
      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>WAV (non compressé)</li>
        <li>AIFF (non compressé)</li>
        <li>MP3 (compressé)</li>
        <li>FLAC (compressé sans perte)</li>
        <li>OGG Vorbis (compressé)</li>
        <li>Et bien d'autres...</li>
      </ul>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Remarque</h4>
        <p className="text-blue-700 dark:text-blue-300">
          Si vous importez un fichier MP3, Audacity le convertit automatiquement en format non compressé pour l'édition.
          Cela signifie que vous travaillerez toujours sur une version de haute qualité, quelle que soit la qualité du fichier d'origine.
        </p>
      </div>
    </div>
  );
};

export default ImportationTab;