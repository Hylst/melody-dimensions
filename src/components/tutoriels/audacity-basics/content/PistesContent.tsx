import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Layers, SplitSquareVertical } from "lucide-react";

const PistesContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "pistes";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  const pistesSteps = [
    {
      title: "Créer une nouvelle piste",
      content: (
        <>
          <p>Allez dans le menu <strong>Pistes &gt; Ajouter nouvelle &gt; Piste audio</strong>.</p>
          <p className="mt-2">Vous pouvez également utiliser <strong>Pistes &gt; Ajouter nouvelle &gt; Piste stéréo</strong> pour une piste à deux canaux.</p>
        </>
      )
    },
    {
      title: "Renommer une piste",
      content: (
        <>
          <p>Cliquez sur le menu déroulant de la piste (flèche vers le bas à côté du nom de la piste).</p>
          <p className="mt-2">Sélectionnez <strong>Nom...</strong> et entrez le nouveau nom de la piste.</p>
        </>
      )
    },
    {
      title: "Déplacer une piste",
      content: (
        <>
          <p>Cliquez sur le panneau de contrôle de la piste (à gauche) et maintenez le bouton enfoncé.</p>
          <p className="mt-2">Faites glisser la piste vers le haut ou vers le bas pour la repositionner.</p>
        </>
      )
    },
    {
      title: "Supprimer une piste",
      content: (
        <>
          <p>Cliquez sur le bouton <strong>X</strong> dans le coin supérieur gauche du panneau de contrôle de la piste.</p>
          <p className="mt-2">Ou sélectionnez la piste et allez dans <strong>Pistes &gt; Supprimer les pistes</strong>.</p>
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Gestion des pistes</h2>
      
      <p className="text-lg">
        Audacity utilise un système de pistes pour organiser vos enregistrements et éditions audio. 
        Cette section vous montre comment créer, gérer et manipuler les pistes dans votre projet.
      </p>
      
      <TipCard title="Types de pistes" icon={<Layers className="h-5 w-5" />}>
        <p>Audacity propose plusieurs types de pistes :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Piste audio</strong> : Pour l'audio mono (un seul canal)</li>
          <li><strong>Piste stéréo</strong> : Pour l'audio stéréo (deux canaux)</li>
          <li><strong>Piste d'étiquettes</strong> : Pour ajouter des marqueurs et annotations</li>
          <li><strong>Piste temporelle</strong> : Pour modifier le tempo au fil du temps</li>
          <li><strong>Piste MIDI</strong> : Pour les données musicales MIDI</li>
        </ul>
      </TipCard>
      
      <StepList steps={pistesSteps} />
      
      <div className="bg-muted/50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-medium mb-2">Contrôles de piste</h3>
        <p>
          Chaque piste dispose de plusieurs contrôles dans son panneau latéral :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>Gain</strong> : Curseur vertical pour ajuster le volume de la piste</li>
          <li><strong>Balance</strong> : Curseur horizontal pour ajuster la balance gauche/droite</li>
          <li><strong>Menu déroulant</strong> : Accès aux options spécifiques de la piste</li>
          <li><strong>Boutons Muet/Solo</strong> : Pour couper le son ou isoler une piste</li>
        </ul>
      </div>
      
      <TipCard title="Mixage multipiste" icon={<SplitSquareVertical className="h-5 w-5" />} variant="info">
        <p>Conseils pour travailler avec plusieurs pistes :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Utilisez <strong>Solo</strong> pour n'écouter qu'une seule piste à la fois</li>
          <li>Utilisez <strong>Muet</strong> pour désactiver temporairement une piste</li>
          <li>Ajustez le gain de chaque piste pour créer un mixage équilibré</li>
          <li>Utilisez <strong>Affichage &gt; Ajuster à la fenêtre</strong> pour voir toutes les pistes</li>
          <li>Pour synchroniser des pistes, utilisez <strong>Pistes &gt; Aligner les pistes</strong></li>
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

export default PistesContent;