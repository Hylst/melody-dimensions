import React from "react";
import TipCard from "../../common/ui/TipCard";
import StepList from "../../common/ui/StepList";
import ResourceLink from "../../common/ui/ResourceLink";
import { useTutorialProgress } from "../../hooks/useTutorialProgress";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const InstallationContent = () => {
  const { markSectionCompleted, isSectionCompleted } = useTutorialProgress();
  const tutorialId = "audacity-basics";
  const sectionId = "installation";
  const isCompleted = isSectionCompleted(tutorialId, sectionId);

  const handleComplete = () => {
    markSectionCompleted(tutorialId, sectionId);
  };

  const installationSteps = [
    {
      title: "Télécharger Audacity",
      content: (
        <>
          <p>Rendez-vous sur le site officiel d'Audacity et téléchargez la dernière version stable pour votre système d'exploitation (Windows, macOS ou Linux).</p>
          <p className="mt-2">Le téléchargement est gratuit et le logiciel est open source.</p>
        </>
      ),
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Lancer l'installation",
      content: (
        <>
          <p>Double-cliquez sur le fichier téléchargé pour lancer l'assistant d'installation.</p>
          <p className="mt-2">Suivez les instructions à l'écran en acceptant les termes de la licence.</p>
        </>
      )
    },
    {
      title: "Choisir les composants",
      content: (
        <>
          <p>Vous pouvez conserver les options par défaut pour une installation standard.</p>
          <p className="mt-2">Si vous souhaitez personnaliser l'installation, vous pouvez sélectionner ou désélectionner certains composants.</p>
        </>
      )
    },
    {
      title: "Terminer l'installation",
      content: (
        <>
          <p>Cliquez sur "Terminer" pour finaliser l'installation.</p>
          <p className="mt-2">Audacity est maintenant prêt à être utilisé sur votre ordinateur.</p>
        </>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Installation d'Audacity</h2>
      
      <p className="text-lg">
        Audacity est un logiciel d'édition audio gratuit et open source disponible pour Windows, macOS et Linux. 
        Cette section vous guidera à travers le processus d'installation.
      </p>
      
      <TipCard title="Avant de commencer">
        <p>Assurez-vous que votre ordinateur répond aux exigences minimales suivantes :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Processeur : 2 GHz ou plus rapide</li>
          <li>RAM : 4 Go minimum (8 Go recommandé)</li>
          <li>Espace disque : 200 Mo pour l'installation</li>
          <li>Système d'exploitation : Windows 7 ou plus récent, macOS 10.12 ou plus récent, Linux</li>
        </ul>
      </TipCard>
      
      <StepList steps={installationSteps} />
      
      <TipCard title="Problèmes courants" variant="warning">
        <p>Si vous rencontrez des erreurs pendant l'installation :</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Vérifiez que vous avez les droits administrateur sur votre ordinateur</li>
          <li>Désactivez temporairement votre antivirus</li>
          <li>Essayez de télécharger à nouveau le fichier d'installation</li>
        </ul>
      </TipCard>
      
      <h3 className="text-xl font-semibold mt-8">Ressources supplémentaires</h3>
      <div className="grid gap-4 mt-4">
        <ResourceLink
          href="https://www.audacityteam.org/download/"
          title="Site officiel d'Audacity"
          description="Téléchargez la dernière version d'Audacity"
          type="outil"
        />
        <ResourceLink
          href="https://manual.audacityteam.org/"
          title="Manuel d'Audacity"
          description="Documentation complète du logiciel"
          type="documentation"
        />
        <ResourceLink
          href="https://forum.audacityteam.org/"
          title="Forum d'Audacity"
          description="Obtenez de l'aide de la communauté"
          type="autre"
        />
      </div>
      
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

export default InstallationContent;