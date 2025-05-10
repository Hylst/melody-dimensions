import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TipCard } from "@/components/tutoriels";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ReverbContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">La réverbération dans Cakewalk</h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          La réverbération est probablement l'effet spatial le plus important et le plus utilisé en production musicale.
          Elle simule la façon dont le son se réfléchit dans un espace physique, créant une sensation de profondeur et d'ambiance.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Principes de base de la réverbération</h4>
        <p>
          La réverbération est composée de plusieurs éléments clés:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Early reflections</strong> - Les premières réflexions du son sur les surfaces environnantes</li>
          <li><strong>Late reflections (queue de réverbération)</strong> - La masse dense de réflexions qui suit</li>
          <li><strong>Pre-delay</strong> - Le temps entre le son direct et les premières réflexions</li>
          <li><strong>Decay time</strong> - Le temps nécessaire pour que la réverbération s'estompe</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6">Les réverbérations dans Cakewalk</h4>
        <p>
          Cakewalk propose plusieurs plugins de réverbération de haute qualité:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>REmatrix Solo</strong> - Une réverbération à convolution avec des réponses impulsionnelles de haute qualité</li>
          <li><strong>Sonitus:fx Reverb</strong> - Une réverbération algorithmique polyvalente</li>
          <li><strong>BREVERB 2 Cakewalk</strong> - Une réverbération premium incluse dans certaines versions</li>
        </ul>
        
        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800 my-6">
          <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Astuce pratique</h4>
          <p className="text-amber-700 dark:text-amber-300">
            Utilisez les bus d'effets (FX) pour envoyer plusieurs pistes vers une même réverbération. Cela économise les ressources CPU 
            et permet de créer un espace cohérent pour plusieurs instruments.
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Comment configurer une réverbération dans Cakewalk</h4>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Créez un bus d'effets en cliquant sur <strong>Insert {">"} Bus</strong> dans le menu principal</li>
          <li>Renommez ce bus (ex: "Reverb")</li>
          <li>Ajoutez un plugin de réverbération sur ce bus en cliquant sur <strong>FX {">"} Audio Effects</strong></li>
          <li>Sur les pistes que vous souhaitez réverbérer, utilisez les envois (Sends) pour diriger le signal vers le bus de réverbération</li>
          <li>Ajustez le niveau d'envoi pour contrôler la quantité de réverbération pour chaque piste</li>
        </ol>
        
        <h4 className="text-lg font-medium mt-6">Paramètres importants à ajuster</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Pre-delay</strong> - Augmentez-le pour créer plus de séparation entre le son direct et la réverbération</li>
          <li><strong>Decay time</strong> - Ajustez-le en fonction du tempo et du style de votre morceau</li>
          <li><strong>Size/Room</strong> - Détermine la taille de l'espace simulé</li>
          <li><strong>Damping</strong> - Contrôle comment les hautes fréquences s'estompent dans la réverbération</li>
          <li><strong>Mix/Wet-Dry</strong> - Sur un bus d'effets, réglez-le à 100% wet</li>
        </ul>
        
        <TipCard title="Conseil pour un mixage professionnel">
          Utilisez différentes réverbérations pour différents groupes d'instruments. Par exemple, une réverbération courte pour la batterie, 
          une moyenne pour les voix et une plus longue pour les instruments d'ambiance. Cela crée une profondeur et une séparation plus naturelles.
        </TipCard>
        
        <h4 className="text-lg font-medium mt-6">Exercice pratique</h4>
        <p>
          Essayez de configurer trois bus de réverbération différents dans votre projet Cakewalk:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Une réverbération courte (0.8-1.2s) pour les percussions et la batterie</li>
          <li>Une réverbération moyenne (1.5-2.5s) pour les voix et instruments principaux</li>
          <li>Une réverbération longue (3-5s) pour les instruments d'ambiance ou les effets spéciaux</li>
        </ol>
        <p>
          Expérimentez avec les envois de différentes pistes vers ces réverbérations et écoutez comment cela affecte la profondeur de votre mixage.
        </p>
      </div>
    </div>
  );
};

export default ReverbContent;