import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TipCard } from "@/components/tutoriels";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DelayContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Les effets de delay dans Cakewalk</h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Le delay (ou écho) est un effet qui crée des répétitions du signal original. C'est un outil puissant pour ajouter 
          de la profondeur, du rythme et de l'espace à vos productions musicales.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Principes de base du delay</h4>
        <p>
          Un delay capture le signal d'entrée et le répète après un temps défini. Les paramètres essentiels sont:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Delay Time</strong> - Le temps entre le signal original et sa répétition (souvent exprimé en millisecondes ou en valeurs rythmiques)</li>
          <li><strong>Feedback</strong> - Contrôle combien de fois le signal est répété</li>
          <li><strong>Mix</strong> - L'équilibre entre le signal original (dry) et les répétitions (wet)</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6">Les types de delay dans Cakewalk</h4>
        <p>
          Cakewalk propose plusieurs plugins de delay de qualité:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Sonitus:fx Delay</strong> - Un delay polyvalent avec de nombreuses options</li>
          <li><strong>TEMPO Delay</strong> - Un delay synchronisé au tempo avec des fonctionnalités avancées</li>
          <li><strong>Ping Pong Delay</strong> - Un delay qui rebondit entre les canaux gauche et droit</li>
        </ul>
        
        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800 my-6">
          <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Astuce pratique</h4>
          <p className="text-amber-700 dark:text-amber-300">
            Synchronisez toujours vos delays au tempo de votre morceau en utilisant des valeurs rythmiques (1/4, 1/8, etc.) 
            plutôt que des millisecondes. Cela garantit que les répétitions s'intègrent parfaitement au groove de votre musique.
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Comment configurer un delay dans Cakewalk</h4>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Comme pour la réverbération, créez un bus d'effets en cliquant sur <strong>Insert {">"}  Bus</strong></li>
          <li>Renommez ce bus (ex: "Delay")</li>
          <li>Ajoutez un plugin de delay sur ce bus</li>
          <li>Utilisez les envois (Sends) des pistes pour diriger le signal vers le bus de delay</li>
          <li>Assurez-vous que le delay est synchronisé au tempo en activant l'option "Sync to Host" ou équivalent</li>
        </ol>
        
        <h4 className="text-lg font-medium mt-6">Techniques créatives avec le delay</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Delay rythmique</strong> - Utilisez des valeurs pointées (1/8 pointé) pour créer un effet de rebond</li>
          <li><strong>Delay ping-pong</strong> - Crée un effet stéréo où les répétitions alternent entre gauche et droite</li>
          <li><strong>Delay en cascade</strong> - Utilisez plusieurs delays avec des temps différents pour créer des motifs complexes</li>
          <li><strong>Delay filtré</strong> - Appliquez un filtre passe-bas sur le delay pour qu'il n'interfère pas avec le signal original</li>
        </ul>
        
        <TipCard title="Conseil pour un mixage professionnel">
          Pour éviter que vos delays n'encombrent votre mixage, utilisez l'égalisation pour filtrer les basses fréquences 
          du signal de delay. Cela permet de garder la clarté tout en ajoutant de la profondeur.
        </TipCard>
        
        <h4 className="text-lg font-medium mt-6">Exercice pratique</h4>
        <p>
          Essayez ces configurations de delay sur différents éléments de votre projet:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Sur une voix: un delay 1/4 avec un feedback modéré (20-30%) et un filtre passe-bas</li>
          <li>Sur une guitare: un delay ping-pong avec un temps de 1/8 pointé pour créer un effet rythmique</li>
          <li>Sur un synthé: un delay court (1/16) avec un feedback élevé pour créer un effet de texture</li>
        </ol>
        <p>
          Expérimentez avec les niveaux d'envoi et les paramètres pour trouver le bon équilibre entre présence et espace.
        </p>
      </div>
    </div>
  );
};

export default DelayContent;