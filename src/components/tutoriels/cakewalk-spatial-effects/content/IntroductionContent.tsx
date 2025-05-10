import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const IntroductionContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Les effets spatiaux dans Cakewalk</h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Les effets spatiaux sont des outils essentiels qui permettent de créer une sensation d'espace et de profondeur dans vos mixages.
          Ils transforment des enregistrements plats en expériences sonores immersives et tridimensionnelles.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Qu'est-ce que les effets spatiaux?</h4>
        <p>
          Les effets spatiaux sont des processeurs audio qui ajoutent des informations spatiales à vos sons. Ils permettent de:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Créer de la profondeur</strong> - Donner l'impression que certains éléments sont plus proches ou plus éloignés</li>
          <li><strong>Élargir le champ stéréo</strong> - Étendre la perception de l'espace gauche-droite</li>
          <li><strong>Simuler des environnements</strong> - Recréer l'acoustique de différents espaces (salles, halls, etc.)</li>
          <li><strong>Ajouter de la dimension</strong> - Donner du volume et du caractère aux sons</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6">Pourquoi utiliser des effets spatiaux?</h4>
        <p>
          L'utilisation judicieuse des effets spatiaux permet de:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Créer une séparation claire entre les instruments</li>
          <li>Donner une impression de profondeur à votre mixage</li>
          <li>Placer les éléments dans un espace cohérent</li>
          <li>Ajouter de l'émotion et de l'ambiance à votre musique</li>
          <li>Rendre votre mixage plus professionnel et immersif</li>
        </ul>
        
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 my-6">
          <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">À retenir</h4>
          <p className="text-blue-700 dark:text-blue-300">
            Les effets spatiaux sont puissants mais doivent être utilisés avec modération. Un excès d'effets peut rendre votre mixage confus et manquant de clarté.
            L'objectif est de créer un espace sonore naturel et cohérent.
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Les principaux effets spatiaux dans Cakewalk</h4>
        <p>
          Cakewalk offre plusieurs effets spatiaux de haute qualité que nous explorerons en détail dans ce tutoriel:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Réverbération</strong> - Simule la façon dont le son se comporte dans différents espaces</li>
          <li><strong>Delay/Écho</strong> - Crée des répétitions du signal original</li>
          <li><strong>Outils d'imagerie stéréo</strong> - Manipulent la largeur et la profondeur du champ stéréo</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6">Ressources complémentaires</h4>
        <div className="flex flex-col space-y-2 mt-2">
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://www.cakewalk.com/Documentation" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Documentation officielle de Cakewalk
            </a>
          </Button>
          <Button variant="outline" className="justify-start" asChild>
            <a href="https://www.soundonsound.com/techniques/using-reverb" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Guide sur l'utilisation de la réverbération (Sound On Sound)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionContent;