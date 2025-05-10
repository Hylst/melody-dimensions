import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TipCard, StepList } from "@/components/tutoriels";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PracticalTipsContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Conseils pratiques pour les effets spatiaux</h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Maîtriser l'utilisation des effets spatiaux demande de la pratique et une bonne compréhension de leur impact sur votre mixage.
          Voici quelques conseils pratiques pour tirer le meilleur parti des effets spatiaux dans Cakewalk.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Bonnes pratiques générales</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Moins, c'est plus</strong> - Utilisez les effets spatiaux avec modération pour éviter un mixage confus ou brouillon</li>
          <li><strong>Écoutez sur différents systèmes</strong> - Les effets spatiaux peuvent sonner très différemment selon le système d'écoute</li>
          <li><strong>Vérifiez la compatibilité mono</strong> - Assurez-vous que votre mixage fonctionne bien même en mono</li>
          <li><strong>Créez de la cohérence</strong> - Utilisez des espaces similaires pour les instruments qui doivent sonner ensemble</li>
        </ul>
        
        <TipCard title="Conseil d'expert">
          Utilisez la technique de "mixage en cascade" : commencez par les éléments les plus importants (voix, instruments principaux) 
          et construisez votre espace autour d'eux, plutôt que d'essayer d'ajuster tous les éléments en même temps.
        </TipCard>
        
        <h4 className="text-lg font-medium mt-6">Workflow efficace pour les effets spatiaux</h4>
        <StepList
          steps={[
            {
              title: "Établissez votre balance de base",
              content: "Avant d'ajouter des effets spatiaux, assurez-vous que votre mixage de base est équilibré."
            },
            {
              title: "Créez vos bus d'effets",
              content: "Configurez des bus séparés pour différents types de réverbération et de delay."
            },
            {
              title: "Travaillez du centre vers l'extérieur",
              content: "Commencez par les éléments centraux et importants, puis étendez-vous vers les éléments périphériques."
            },
            {
              title: "Utilisez l'automatisation",
              content: "Automatisez les envois d'effets pour créer du mouvement et de la dynamique dans votre mixage."
            },
            {
              title: "Vérifiez régulièrement en mono",
              content: "Utilisez le bouton mono dans Cakewalk pour vérifier la compatibilité de votre mixage."
            }
          ]}
        />
        
        <h4 className="text-lg font-medium mt-6">Résolution des problèmes courants</h4>
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
            <h5 className="font-medium text-red-700 dark:text-red-300">Problème: Mixage boueux ou confus</h5>
            <p className="text-red-700 dark:text-red-300 mt-1">
              Solution: Réduisez la quantité d'effets, utilisez l'égalisation pour filtrer les basses fréquences dans vos réverbérations et delays.
            </p>
          </div>
          
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
            <h5 className="font-medium text-red-700 dark:text-red-300">Problème: Perte de punch ou de présence</h5>
            <p className="text-red-700 dark:text-red-300 mt-1">
              Solution: Augmentez le pre-delay de vos réverbérations, utilisez la compression parallèle pour maintenir la présence.
            </p>
          </div>
          
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-md border border-red-200 dark:border-red-800">
            <h5 className="font-medium text-red-700 dark:text-red-300">Problème: Problèmes de phase en mono</h5>
            <p className="text-red-700 dark:text-red-300 mt-1">
              Solution: Réduisez l'élargissement stéréo excessif, utilisez des outils de correction de phase comme Waves InPhase.
            </p>
          </div>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Projet final: Création d'un espace sonore complet</h4>
        <p>
          Pour mettre en pratique toutes ces techniques, essayez ce projet:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Créez trois bus d'effets: une réverbération courte, une réverbération longue et un delay</li>
          <li>Appliquez un panoramique stratégique à tous vos instruments</li>
          <li>Utilisez l'élargissement stéréo avec modération sur certains éléments</li>
          <li>Automatisez les envois d'effets pour créer du mouvement</li>
          <li>Vérifiez votre mixage en mono et sur différents systèmes d'écoute</li>
        </ol>
        
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 my-6">
          <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conclusion</h4>
          <p className="text-blue-700 dark:text-blue-300">
            Les effets spatiaux sont des outils puissants qui, utilisés judicieusement, peuvent transformer un mixage ordinaire en une expérience sonore immersive. 
            Prenez le temps d'expérimenter, d'écouter attentivement et d'affiner vos techniques pour développer votre propre signature sonore.
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Ressources supplémentaires</h4>
        <div className="flex flex-col space-y-2 mt-2">
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://www.soundonsound.com/techniques/creative-effects-processing" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Techniques de traitement d'effets créatifs (Sound On Sound)
            </a>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://www.musicradar.com/tuition/tech/how-to-create-space-in-your-mix-607948" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Comment créer de l'espace dans votre mixage (MusicRadar)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PracticalTipsContent;