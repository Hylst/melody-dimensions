import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TipCard } from "@/components/tutoriels";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const StereoImagingContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">L'imagerie stéréo dans Cakewalk</h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          L'imagerie stéréo concerne la façon dont les sons sont positionnés et perçus dans le champ stéréo (gauche-droite).
          Une bonne utilisation de l'espace stéréo est essentielle pour créer des mixages clairs, larges et immersifs.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Principes de base de l'imagerie stéréo</h4>
        <p>
          L'imagerie stéréo comprend plusieurs aspects importants:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Panoramique</strong> - Le positionnement gauche-droite des éléments</li>
          <li><strong>Largeur stéréo</strong> - L'étendue perçue du champ stéréo</li>
          <li><strong>Profondeur</strong> - La perception de distance (avant-arrière)</li>
          <li><strong>Séparation</strong> - La clarté et la distinction entre les éléments</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6">Les outils d'imagerie stéréo dans Cakewalk</h4>
        <p>
          Cakewalk offre plusieurs outils pour manipuler l'image stéréo:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Panner</strong> - Le contrôle de panoramique standard sur chaque piste</li>
          <li><strong>Sonitus:fx Modulator</strong> - Peut être utilisé pour créer des effets de modulation stéréo</li>
          <li><strong>Sonitus:fx Surround</strong> - Pour un contrôle avancé du positionnement</li>
          <li><strong>Plugins tiers</strong> - Comme Waves S1 Stereo Imager ou iZotope Ozone Imager</li>
        </ul>
        
        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800 my-6">
          <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Astuce pratique</h4>
          <p className="text-amber-700 dark:text-amber-300">
            Vérifiez toujours la compatibilité mono de votre mixage. Certains effets d'élargissement stéréo peuvent causer des problèmes 
            de phase qui deviennent évidents lorsque le mixage est écouté en mono (comme sur certains systèmes portables ou téléphones).
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Techniques d'imagerie stéréo dans Cakewalk</h4>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>
            <strong>Panoramique de base</strong>
            <p>Utilisez le panoramique pour positionner les éléments dans le champ stéréo:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Éléments centraux: grosse caisse, caisse claire, basse, voix principale</li>
              <li>Éléments partiellement panoramiqués: guitares rythmiques, claviers</li>
              <li>Éléments largement panoramiqués: percussions, chœurs, effets</li>
            </ul>
          </li>
          <li>
            <strong>Élargissement stéréo</strong>
            <p>Pour élargir un son stéréo existant:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Utilisez un plugin d'élargissement stéréo comme Sonitus:fx Modulator</li>
              <li>Appliquez un léger delay (10-20ms) sur un canal uniquement</li>
              <li>Utilisez une égalisation différente sur les canaux gauche et droit</li>
            </ul>
          </li>
          <li>
            <strong>Création d'espace avec les effets</strong>
            <p>Utilisez les effets pour créer de la profondeur:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Réverbération stéréo avec différents temps de pré-delay</li>
              <li>Delay ping-pong pour créer un mouvement gauche-droite</li>
              <li>Chorus ou flanger pour ajouter de la largeur aux instruments mono</li>
            </ul>
          </li>
        </ol>
        
        <TipCard title="Conseil pour un mixage professionnel">
          Créez un "plan" de votre mixage en dessinant la position de chaque élément dans l'espace stéréo. 
          Cela vous aidera à visualiser votre mixage et à éviter les encombrements dans certaines zones.
        </TipCard>
        
        <h4 className="text-lg font-medium mt-6">Exercice pratique</h4>
        <p>
          Essayez ces techniques d'imagerie stéréo dans votre projet Cakewalk:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Créez un "M-S" (Mid-Side) routing pour avoir un contrôle séparé sur les éléments centraux et latéraux de votre mixage</li>
          <li>Appliquez un léger élargissement stéréo sur les pistes d'ambiance ou les synthés</li>
          <li>Utilisez le panoramique automatisé pour créer du mouvement dans votre mixage</li>
        </ol>
        <p>
          Écoutez attentivement comment ces changements affectent la perception spatiale de votre mixage, et vérifiez toujours la compatibilité mono.
        </p>
      </div>
    </div>
  );
};

export default StereoImagingContent;