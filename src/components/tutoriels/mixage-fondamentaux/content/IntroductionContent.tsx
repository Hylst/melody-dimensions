import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const IntroductionContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Introduction au mixage audio</h3>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Le mixage audio est l'art de combiner plusieurs sources sonores en un ensemble harmonieux et équilibré. 
          C'est une étape cruciale qui transforme des enregistrements bruts en une production professionnelle.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Qu'est-ce que le mixage?</h4>
        <p>
          Le mixage consiste à ajuster et équilibrer les différentes pistes audio d'un projet pour créer une expérience sonore cohérente. 
          Il s'agit de trouver la bonne place pour chaque élément dans le spectre sonore, en termes de:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Volume</strong> - L'équilibre des niveaux entre les différentes pistes</li>
          <li><strong>Panoramique</strong> - Le positionnement des sons dans le champ stéréo (gauche-droite)</li>
          <li><strong>Fréquences</strong> - L'équilibre tonal à travers le spectre des fréquences</li>
          <li><strong>Profondeur</strong> - La perception de distance et d'espace</li>
          <li><strong>Dynamique</strong> - Les variations de volume et d'intensité</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6">Pourquoi le mixage est-il important?</h4>
        <p>
          Un bon mixage permet de:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Mettre en valeur les éléments importants de votre musique</li>
          <li>Créer de la clarté et de la définition entre les instruments</li>
          <li>Donner de la cohérence et de l'équilibre à l'ensemble</li>
          <li>Ajouter de la profondeur et de la dimension à votre son</li>
          <li>Rendre votre musique plus agréable à écouter sur différents systèmes</li>
        </ul>
        
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800 my-6">
          <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">À retenir</h4>
          <p className="text-blue-700 dark:text-blue-300">
            Le mixage est à la fois un art et une technique. Il n'existe pas de formule magique qui fonctionne pour tous les projets. 
            Chaque mixage est unique et dépend du style musical, des instruments utilisés et de l'émotion que vous souhaitez transmettre.
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Les outils essentiels du mixage</h4>
        <p>
          Pour réaliser un bon mixage, vous aurez besoin de maîtriser plusieurs outils fondamentaux:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Faders de volume</strong> - Pour ajuster les niveaux relatifs</li>
          <li><strong>Panoramique</strong> - Pour positionner les sons dans l'espace stéréo</li>
          <li><strong>Égaliseur (EQ)</strong> - Pour sculpter le contenu fréquentiel</li>
          <li><strong>Compresseur</strong> - Pour contrôler la dynamique</li>
          <li><strong>Réverbération</strong> - Pour créer un sens de l'espace et de la profondeur</li>
          <li><strong>Delay/Echo</strong> - Pour ajouter de la dimension et du mouvement</li>
        </ul>
        
        <p>
          Dans les sections suivantes de ce tutoriel, nous explorerons chacun de ces outils en détail et apprendrons 
          comment les utiliser efficacement pour créer des mixages professionnels.
        </p>
      </div>
      
      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
        <img 
          src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          alt="Console de mixage professionnelle" 
          className="object-cover w-full h-full" 
        />
      </div>
      
      <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800">
        <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Conseil de pro</h4>
        <p className="text-amber-700 dark:text-amber-300">
          Avant de commencer à mixer, prenez le temps d'écouter des références musicales de qualité dans le style que vous produisez. 
          Analysez comment les différents éléments sont équilibrés et positionnés dans le mix. Ces références vous serviront de guide 
          tout au long de votre processus de mixage.
        </p>
      </div>
      
      <div className="flex justify-start mt-6">
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <a href="https://www.soundonsound.com/techniques/mixing-essentials" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" /> Ressources complémentaires sur le mixage
          </a>
        </Button>
      </div>
    </div>
  );
};

export default IntroductionContent;