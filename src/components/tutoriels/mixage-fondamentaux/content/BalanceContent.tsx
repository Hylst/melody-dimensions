import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BalanceContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Balance et panoramique</h3>
      
      <p>
        La balance (ou panoramique) est l'un des outils fondamentaux du mixage qui permet de positionner
        les éléments sonores dans le champ stéréo, de gauche à droite.
      </p>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Principes de base</h4>
          <p className="mb-4">
            Le panoramique permet de créer de l'espace dans votre mix en distribuant les éléments
            dans le champ stéréo. Voici quelques principes fondamentaux :
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Les éléments de basse fréquence (comme la grosse caisse et la basse) sont généralement centrés</li>
            <li>Les voix principales sont souvent placées au centre</li>
            <li>Les instruments d'accompagnement peuvent être répartis de gauche à droite</li>
            <li>Évitez de trop pousser les éléments complètement à gauche ou à droite</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Techniques de panoramique</h4>
          
          <h5 className="text-lg font-medium mt-4">Panoramique statique</h5>
          <p className="mb-4">
            C'est la technique la plus courante où chaque élément est placé à une position fixe
            dans le champ stéréo. Cela crée une image stéréo stable et cohérente.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Panoramique dynamique</h5>
          <p className="mb-4">
            Cette technique consiste à faire varier la position d'un élément au cours du temps,
            créant ainsi un effet de mouvement. Cela peut être utilisé pour des effets spéciaux
            ou pour attirer l'attention sur un élément particulier.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Panoramique par fréquence</h5>
          <p>
            Certains outils avancés permettent de panoramiquer différemment les différentes
            fréquences d'un même son, créant ainsi des effets stéréo plus complexes et immersifs.
          </p>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conseil</h4>
        <p className="text-blue-700 dark:text-blue-300">
          Écoutez régulièrement votre mix en mono pour vous assurer que les éléments importants
          restent audibles même lorsque le champ stéréo est réduit. Cela garantit également une
          meilleure compatibilité avec les systèmes de diffusion mono.
        </p>
      </div>
    </div>
  );
};

export default BalanceContent;