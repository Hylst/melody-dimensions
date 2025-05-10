import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileAudio } from "lucide-react";

const ImportationContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "importation";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  const importationSteps = [
    {
      title: "Importer un fichier audio",
      content: (
        <>
          <p>Allez dans le menu <strong>Fichier &gt; Importer &gt; Audio</strong> ou utilisez le raccourci <strong>Ctrl+Shift+I</strong>.</p>
          <p className="mt-2">Sélectionnez le fichier audio que vous souhaitez importer et cliquez sur "Ouvrir".</p>
        </>
      )
    },
    {
      title: "Importer depuis un CD",
      content: (
        <>
          <p>Allez dans le menu <strong>Fichier &gt; Importer &gt; Audio depuis CD</strong>.</p>
          <p className="mt-2">Sélectionnez les pistes que vous souhaitez importer et cliquez sur "OK".</p>
        </>
      )
    },
    {
      title: "Importer des données MIDI",
      content: (
        <>
          <p>Allez dans le menu <strong>Fichier &gt; Importer &gt; MIDI</strong>.</p>
          <p className="mt-2">Sélectionnez le fichier MIDI que vous souhaitez importer et cliquez sur "Ouvrir".</p>
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Importation de fichiers audio</h2>
      
      <p className="text-lg">
        Avant de pouvoir éditer de l'audio dans Audacity, vous devez importer des fichiers audio existants 
        ou enregistrer de nouveaux sons. Cette section vous montre comment importer différents types de fichiers audio.
      </p>
      
      <TipCard title="Formats pris en charge" icon={<FileAudio className="h-5 w-5" />}>
        <p>Audacity prend en charge de nombreux formats audio, notamment :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>WAV</strong> : Format non compressé de haute qualité</li>
          <li><strong>MP3</strong> : Format compressé populaire</li>
          <li><strong>AIFF</strong> : Format non compressé utilisé par Apple</li>
          <li><strong>FLAC</strong> : Format compressé sans perte</li>
          <li><strong>OGG</strong> : Format compressé libre</li>
          <li><strong>M4A</strong> : Format compressé utilisé par iTunes</li>
        </ul>
      </TipCard>
      
      <StepList steps={importationSteps} />
      
      <div className="bg-muted/50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-medium mb-2">Enregistrer directement dans Audacity</h3>
        <p>
          Vous pouvez également enregistrer directement de l'audio dans Audacity en utilisant un microphone ou une autre source d'entrée :
        </p>
        <ol className="list-decimal pl-5 mt-2 space-y-2">
          <li>Sélectionnez votre périphérique d'entrée dans le menu déroulant à côté de l'icône de microphone</li>
          <li>Ajustez le niveau d'entrée à l'aide du curseur de volume</li>
          <li>Cliquez sur le bouton d'enregistrement (cercle rouge) pour commencer l'enregistrement</li>
          <li>Cliquez sur le bouton d'arrêt (carré) pour terminer l'enregistrement</li>
        </ol>
      </div>
      
      <TipCard title="Problèmes courants d'importation" variant="warning">
        <p>Si vous rencontrez des problèmes lors de l'importation :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Vérifiez que le format du fichier est pris en charge par Audacity</li>
          <li>Pour les fichiers MP3, assurez-vous que le décodeur LAME est installé</li>
          <li>Si le fichier est corrompu, essayez de le convertir dans un autre format avant de l'importer</li>
          <li>Pour les fichiers volumineux, assurez-vous d'avoir suffisamment de mémoire disponible</li>
        </ul>
      </TipCard>
      
      {!isCompleted && (
        <div className="mt-8 flex justify-end">
          <Button onClick={handleComplete} className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" /> Marquer comme terminé
          </Button>
        </div>
      )}
      
      {isCompleted && (
        <div className="mt-8 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-300 flex items-center gap-2">
            <CheckCircle className="h-5 w-5" /> 
            Vous avez terminé cette section. Vous pouvez passer à la section suivante.
          </p>
        </div>
      )}
    </div>
  );
};

export default ImportationContent;