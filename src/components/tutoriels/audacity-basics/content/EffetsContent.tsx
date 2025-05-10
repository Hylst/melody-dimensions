import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wand2, Volume2 } from "lucide-react";

const EffetsContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "effets";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  const effetsSteps = [
    {
      title: "Appliquer un effet",
      content: (
        <>
          <p>Sélectionnez d'abord la portion audio à laquelle vous souhaitez appliquer l'effet.</p>
          <p className="mt-2">Allez dans le menu <strong>Effet</strong> et choisissez l'effet désiré dans la liste.</p>
        </>
      )
    },
    {
      title: "Ajuster le volume",
      content: (
        <>
          <p>Pour modifier le volume, utilisez <strong>Effet &gt; Amplification</strong>.</p>
          <p className="mt-2">Ajustez le curseur pour augmenter ou diminuer le volume. Cochez "Autoriser l'écrêtage" si nécessaire, mais attention aux distorsions.</p>
        </>
      )
    },
    {
      title: "Normalisation",
      content: (
        <>
          <p>Pour uniformiser le volume, utilisez <strong>Effet &gt; Normaliser</strong>.</p>
          <p className="mt-2">Définissez le niveau de normalisation (généralement -1.0 dB pour éviter l'écrêtage) et cliquez sur "OK".</p>
        </>
      )
    },
    {
      title: "Réduction de bruit",
      content: (
        <>
          <p>Pour réduire le bruit de fond :</p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Sélectionnez une portion qui ne contient que du bruit</li>
            <li>Allez dans <strong>Effet &gt; Réduction de bruit</strong></li>
            <li>Cliquez sur "Obtenir le profil de bruit"</li>
            <li>Sélectionnez ensuite toute la piste</li>
            <li>Retournez dans <strong>Effet &gt; Réduction de bruit</strong></li>
            <li>Ajustez les paramètres et cliquez sur "OK"</li>
          </ol>
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Effets audio</h2>
      
      <p className="text-lg">
        Audacity propose de nombreux effets pour transformer et améliorer vos enregistrements audio. 
        Cette section présente les effets les plus couramment utilisés et comment les appliquer.
      </p>
      
      <TipCard title="Prévisualisation des effets" icon={<Wand2 className="h-5 w-5" />}>
        <p>La plupart des effets dans Audacity offrent une fonction de prévisualisation :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Cliquez sur le bouton <strong>Aperçu</strong> dans la fenêtre de l'effet pour entendre le résultat sans l'appliquer</li>
          <li>Ajustez les paramètres jusqu'à obtenir le résultat souhaité</li>
          <li>Utilisez <strong>Ctrl+Z</strong> pour annuler un effet si le résultat ne vous convient pas</li>
        </ul>
      </TipCard>
      
      <StepList steps={effetsSteps} />
      
      <div className="bg-muted/50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-medium mb-2">Effets populaires</h3>
        <p>
          Voici quelques effets fréquemment utilisés dans Audacity :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Égaliseur</strong> : Ajuste les fréquences spécifiques pour modifier le timbre</li>
          <li><strong>Compresseur</strong> : Réduit la dynamique pour un son plus uniforme</li>
          <li><strong>Réverbération</strong> : Ajoute de l'espace et de la profondeur</li>
          <li><strong>Changement de tempo</strong> : Modifie la vitesse sans affecter la hauteur</li>
          <li><strong>Changement de hauteur</strong> : Modifie la tonalité sans affecter le tempo</li>
        </ul>
      </div>
      
      <TipCard title="Chaînes d'effets" icon={<Volume2 className="h-5 w-5" />} variant="secondary">
        <p>Pour appliquer plusieurs effets avec les mêmes paramètres :</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Allez dans <strong>Effet &gt; Chaîne d'effets</strong></li>
          <li>Créez une nouvelle chaîne en cliquant sur "Ajouter"</li>
          <li>Ajoutez les effets désirés dans l'ordre d'application</li>
          <li>Enregistrez la chaîne pour une utilisation future</li>
        </ol>
        <p className="mt-2">C'est particulièrement utile pour traiter plusieurs fichiers de manière identique.</p>
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

export default EffetsContent;