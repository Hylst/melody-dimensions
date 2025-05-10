import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, FileDown } from "lucide-react";

const ExportationContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "exportation";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  const exportationSteps = [
    {
      title: "Exporter en WAV",
      content: (
        <>
          <p>Allez dans le menu <strong>Fichier &gt; Exporter &gt; Exporter en WAV</strong>.</p>
          <p className="mt-2">Choisissez l'emplacement de sauvegarde, nommez votre fichier et cliquez sur "Enregistrer".</p>
        </>
      )
    },
    {
      title: "Exporter en MP3",
      content: (
        <>
          <p>Allez dans le menu <strong>Fichier &gt; Exporter &gt; Exporter en MP3</strong>.</p>
          <p className="mt-2">Définissez la qualité du MP3 (débit binaire) et les métadonnées, puis cliquez sur "Enregistrer".</p>
          <p className="mt-2 text-sm text-muted-foreground">Note : La première fois, Audacity peut vous demander de localiser l'encodeur LAME pour créer des MP3.</p>
        </>
      )
    },
    {
      title: "Exporter une sélection",
      content: (
        <>
          <p>Sélectionnez la portion audio que vous souhaitez exporter.</p>
          <p className="mt-2">Allez dans <strong>Fichier &gt; Exporter &gt; Exporter la sélection</strong> et choisissez le format désiré.</p>
        </>
      )
    },
    {
      title: "Exporter plusieurs pistes",
      content: (
        <>
          <p>Pour exporter chaque piste dans un fichier séparé, allez dans <strong>Fichier &gt; Exporter &gt; Exporter plusieurs</strong>.</p>
          <p className="mt-2">Configurez les options d'exportation et cliquez sur "Exporter".</p>
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Exportation de projets</h2>
      
      <p className="text-lg">
        Une fois votre édition audio terminée, vous devrez exporter votre projet dans un format utilisable. 
        Cette section vous montre comment exporter votre travail dans différents formats.
      </p>
      
      <TipCard title="Formats d'exportation" icon={<FileDown className="h-5 w-5" />}>
        <p>Audacity permet d'exporter dans plusieurs formats, chacun ayant ses avantages :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>WAV</strong> : Qualité maximale, non compressé, idéal pour l'archivage ou le traitement ultérieur</li>
          <li><strong>MP3</strong> : Format compressé, taille réduite, idéal pour le partage et la lecture sur la plupart des appareils</li>
          <li><strong>FLAC</strong> : Compression sans perte, préserve la qualité tout en réduisant la taille</li>
          <li><strong>OGG</strong> : Alternative libre au MP3, bonne qualité à taille réduite</li>
          <li><strong>M4A/AAC</strong> : Format compressé de haute qualité, compatible avec les appareils Apple</li>
        </ul>
      </TipCard>
      
      <StepList steps={exportationSteps} />
      
      <div className="bg-muted/50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-medium mb-2">Paramètres d'exportation</h3>
        <p>
          Lors de l'exportation, vous pouvez configurer plusieurs paramètres importants :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Fréquence d'échantillonnage</strong> : 44.1 kHz est standard pour l'audio CD, 48 kHz pour la vidéo</li>
          <li><strong>Résolution</strong> : 16 bits est standard, 24 bits offre une meilleure qualité</li>
          <li><strong>Débit binaire</strong> (pour MP3) : 128 kbps minimum, 320 kbps pour haute qualité</li>
          <li><strong>Métadonnées</strong> : Informations sur le titre, l'artiste, l'album, etc.</li>
        </ul>
      </div>
      
      <TipCard title="Sauvegarder votre projet" icon={<Download className="h-5 w-5" />} variant="warning">
        <p>L'exportation crée un fichier audio final, mais ne sauvegarde pas votre projet éditable :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Utilisez <strong>Fichier &gt; Enregistrer le projet</strong> pour sauvegarder votre travail au format .aup3</li>
          <li>Seul ce format préserve toutes vos pistes, éditions et effets de manière modifiable</li>
          <li>Pensez à sauvegarder régulièrement votre projet pendant l'édition</li>
          <li>Les fichiers exportés (WAV, MP3, etc.) ne peuvent pas être réimportés avec toutes vos éditions</li>
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

export default ExportationContent;