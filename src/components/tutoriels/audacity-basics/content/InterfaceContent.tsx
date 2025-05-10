import React from "react";
import TipCard from "../../common/ui/TipCard";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle, Info } from "lucide-react";

const InterfaceContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "interface";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Interface d'Audacity</h2>
      
      <p className="text-lg">
        L'interface d'Audacity est organisée de manière intuitive pour faciliter l'édition audio. 
        Cette section vous présente les différentes parties de l'interface et leurs fonctions.
      </p>
      
      <div className="rounded-lg overflow-hidden border border-border">
        <img 
          src="https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          alt="Interface d'Audacity" 
          className="w-full h-auto"
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Barre d'outils</h3>
          <p>
            La barre d'outils principale contient les boutons pour les actions courantes comme la lecture, 
            l'enregistrement, l'arrêt, et la navigation dans le projet.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Outils de sélection</strong> : Pour sélectionner des portions d'audio</li>
            <li><strong>Outils d'enveloppe</strong> : Pour modifier le volume progressivement</li>
            <li><strong>Outils de dessin</strong> : Pour modifier la forme d'onde directement</li>
            <li><strong>Outils de zoom</strong> : Pour agrandir ou réduire l'affichage</li>
            <li><strong>Outils de déplacement</strong> : Pour déplacer l'audio dans le temps</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Zone de pistes</h3>
          <p>
            La zone centrale affiche les pistes audio sous forme de formes d'onde. 
            C'est ici que vous effectuerez la plupart de vos éditions.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>En-tête de piste</strong> : Contient les contrôles de volume, panoramique et menu de piste</li>
            <li><strong>Forme d'onde</strong> : Représentation visuelle de l'audio</li>
            <li><strong>Règle temporelle</strong> : Indique la position dans le temps</li>
            <li><strong>Curseur de lecture</strong> : Indique la position actuelle de lecture</li>
          </ul>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Menus</h3>
          <p>
            Les menus en haut de l'écran donnent accès à toutes les fonctionnalités d'Audacity.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Fichier</strong> : Ouvrir, enregistrer, importer, exporter</li>
            <li><strong>Édition</strong> : Couper, copier, coller, préférences</li>
            <li><strong>Affichage</strong> : Options d'affichage et de zoom</li>
            <li><strong>Transport</strong> : Contrôles de lecture et d'enregistrement</li>
            <li><strong>Pistes</strong> : Gestion des pistes</li>
            <li><strong>Effets</strong> : Appliquer des effets audio</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contrôles de mixage</h3>
          <p>
            Les contrôles de mixage vous permettent d'ajuster les niveaux d'entrée et de sortie.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Volume de sortie</strong> : Contrôle le volume de lecture</li>
            <li><strong>Volume d'entrée</strong> : Contrôle le niveau d'enregistrement</li>
            <li><strong>Sélecteur d'entrée</strong> : Choisir la source d'enregistrement</li>
            <li><strong>Indicateurs de niveau</strong> : Affichent les niveaux audio</li>
          </ul>
        </div>
      </div>
      
      <TipCard title="Personnalisation de l'interface" icon={<Info className="h-5 w-5" />} variant="info">
        <p>
          Vous pouvez personnaliser l'interface d'Audacity selon vos préférences :
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Allez dans <strong>Édition &gt; Préférences &gt; Interface</strong> pour modifier l'apparence</li>
          <li>Utilisez <strong>Affichage &gt; Barres d'outils</strong> pour afficher ou masquer des barres d'outils</li>
          <li>Redimensionnez les pistes en faisant glisser les bordures entre les en-têtes de piste</li>
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

export default InterfaceContent;