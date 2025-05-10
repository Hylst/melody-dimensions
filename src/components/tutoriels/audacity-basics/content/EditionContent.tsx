import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Scissors, Move } from "lucide-react";

const EditionContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "edition";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  const editionSteps = [
    {
      title: "Sélectionner de l'audio",
      content: (
        <>
          <p>Utilisez l'<strong>outil de sélection</strong> (icône I) pour cliquer et glisser sur la forme d'onde.</p>
          <p className="mt-2">Pour une sélection précise, vous pouvez zoomer en utilisant <strong>Ctrl + molette de la souris</strong> ou les boutons de zoom.</p>
        </>
      )
    },
    {
      title: "Couper, copier et coller",
      content: (
        <>
          <p>Après avoir sélectionné une portion audio :</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Couper</strong> : Ctrl+X ou Édition &gt; Couper</li>
            <li><strong>Copier</strong> : Ctrl+C ou Édition &gt; Copier</li>
            <li><strong>Coller</strong> : Ctrl+V ou Édition &gt; Coller (à la position du curseur)</li>
          </ul>
        </>
      )
    },
    {
      title: "Supprimer de l'audio",
      content: (
        <>
          <p>Sélectionnez la portion à supprimer, puis appuyez sur la touche <strong>Suppr</strong> ou allez dans <strong>Édition &gt; Supprimer</strong>.</p>
          <p className="mt-2">Pour supprimer l'audio en conservant l'espace (silence), utilisez <strong>Édition &gt; Silence audio</strong>.</p>
        </>
      )
    },
    {
      title: "Diviser et joindre des clips",
      content: (
        <>
          <p>Pour diviser un clip à la position du curseur, utilisez <strong>Édition &gt; Limites de clip &gt; Diviser</strong> ou le raccourci <strong>Ctrl+I</strong>.</p>
          <p className="mt-2">Pour joindre des clips adjacents, sélectionnez-les puis utilisez <strong>Édition &gt; Limites de clip &gt; Joindre</strong>.</p>
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Édition audio de base</h2>
      
      <p className="text-lg">
        L'édition est au cœur d'Audacity. Cette section vous montre comment effectuer les opérations d'édition 
        les plus courantes pour manipuler vos fichiers audio.
      </p>
      
      <TipCard title="Annuler et rétablir" icon={<Move className="h-5 w-5" />}>
        <p>Audacity offre un historique d'annulation pratiquement illimité :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Annuler</strong> : Ctrl+Z ou Édition &gt; Annuler</li>
          <li><strong>Rétablir</strong> : Ctrl+Y ou Édition &gt; Rétablir</li>
          <li>Vous pouvez consulter l'historique complet via <strong>Affichage &gt; Historique</strong></li>
        </ul>
      </TipCard>
      
      <StepList steps={editionSteps} />
      
      <div className="bg-muted/50 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-medium mb-2">Sélection précise</h3>
        <p>
          Pour une édition de précision, Audacity propose plusieurs méthodes :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Utilisez la <strong>barre d'outils de sélection</strong> pour entrer des valeurs précises de début et de fin</li>
          <li>Activez <strong>Affichage &gt; Ajuster à &gt; Passages à zéro</strong> pour éviter les clics lors des coupes</li>
          <li>Utilisez <strong>Édition &gt; Trouver les passages à zéro</strong> pour ajuster la sélection aux points où l'onde croise zéro</li>
          <li>Maintenez <strong>Maj</strong> en cliquant pour étendre une sélection existante</li>
        </ul>
      </div>
      
      <TipCard title="Techniques d'édition avancées" icon={<Scissors className="h-5 w-5" />} variant="secondary">
        <p>Quelques techniques utiles pour les utilisateurs intermédiaires :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Édition &gt; Dupliquer</strong> : Crée une copie de la sélection dans une nouvelle piste</li>
          <li><strong>Édition &gt; Limites de clip &gt; Détacher à la sélection</strong> : Isole la sélection en un clip distinct</li>
          <li><strong>Édition &gt; Étiquettes</strong> : Permet d'ajouter des marqueurs pour faciliter la navigation</li>
          <li><strong>Ctrl+B</strong> : Place un marqueur à la position du curseur</li>
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

export default EditionContent;