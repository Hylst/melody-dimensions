import React from "react";
import { FileAudio } from "lucide-react";

const ExportationTab = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Exportation de votre projet</h3>
      <p className="mb-4">
        Une fois que vous avez terminé d'éditer votre audio, vous devrez l'exporter dans un format utilisable
        par d'autres applications ou appareils.
      </p>
      
      <h4 className="text-lg font-medium">Exportation de base</h4>
      <p className="mb-4">
        Pour exporter votre projet complet :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Allez dans <strong>Fichier</strong> &gt; <strong>Exporter</strong> &gt; <strong>Exporter en audio</strong></li>
        <li>Choisissez l'emplacement où sauvegarder le fichier</li>
        <li>Donnez un nom à votre fichier</li>
        <li>Sélectionnez le format de fichier dans le menu déroulant (WAV, MP3, etc.)</li>
        <li>Cliquez sur <strong>Enregistrer</strong></li>
        <li>Ajustez les paramètres spécifiques au format si nécessaire</li>
        <li>Cliquez sur <strong>OK</strong></li>
      </ol>
      
      <h4 className="text-lg font-medium">Formats d'exportation courants</h4>
      <p className="mb-4">
        Voici les formats les plus utilisés et leurs cas d'usage :
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li>
          <strong>WAV</strong> : Format non compressé de haute qualité, idéal pour :
          <ul className="list-disc pl-5 mt-1">
            <li>Archivage</li>
            <li>Édition ultérieure</li>
            <li>Production professionnelle</li>
          </ul>
        </li>
        <li>
          <strong>MP3</strong> : Format compressé, bon pour :
          <ul className="list-disc pl-5 mt-1">
            <li>Partage en ligne</li>
            <li>Lecture sur la plupart des appareils</li>
            <li>Économie d'espace disque</li>
          </ul>
        </li>
        <li>
          <strong>FLAC</strong> : Format compressé sans perte, adapté pour :
          <ul className="list-disc pl-5 mt-1">
            <li>Archivage de haute qualité avec économie d'espace</li>
            <li>Audiophiles</li>
          </ul>
        </li>
        <li>
          <strong>OGG</strong> : Alternative libre au MP3, utilisé pour :
          <ul className="list-disc pl-5 mt-1">
            <li>Streaming en ligne</li>
            <li>Jeux vidéo</li>
          </ul>
        </li>
      </ul>
      
      <h4 className="text-lg font-medium">Exportation d'une sélection</h4>
      <p className="mb-4">
        Pour exporter seulement une partie de votre projet :
      </p>
      <ol className="list-decimal pl-5 space-y-2 mb-4">
        <li>Sélectionnez la portion audio que vous souhaitez exporter</li>
        <li>Allez dans <strong>Fichier</strong> &gt; <strong>Exporter</strong> &gt; <strong>Exporter la sélection en audio</strong></li>
        <li>Suivez les mêmes étapes que pour l'exportation complète</li>
      </ol>
      
      <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-md border border-teal-200 dark:border-teal-800">
        <h4 className="text-lg font-medium text-teal-700 dark:text-teal-300 mb-2">Conseil important</h4>
        <p className="text-teal-700 dark:text-teal-300">
          N'oubliez pas que l'exportation crée un nouveau fichier audio, mais ne sauvegarde pas votre projet Audacity.
          Pour conserver votre travail d'édition, utilisez également <strong>Fichier</strong> &gt; <strong>Enregistrer le projet</strong>
          pour créer un fichier .aup qui préservera toutes vos pistes et modifications.
        </p>
      </div>
    </div>
  );
};

export default ExportationTab;