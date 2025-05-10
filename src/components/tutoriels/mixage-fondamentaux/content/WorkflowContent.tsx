import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const WorkflowContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Workflow de mixage</h3>
      
      <p>
        Un workflow de mixage efficace est essentiel pour obtenir des résultats professionnels
        et éviter de perdre du temps en revenant constamment sur vos décisions.
      </p>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Préparation</h4>
          <p className="mb-4">
            Avant de commencer le mixage proprement dit, prenez le temps de bien préparer votre session :
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Organisez vos pistes en groupes logiques (batterie, basse, guitares, voix, etc.)</li>
            <li>Nommez clairement toutes vos pistes</li>
            <li>Utilisez un code couleur pour faciliter la navigation</li>
            <li>Supprimez les éléments inutilisés ou les parties silencieuses</li>
            <li>Créez des pistes auxiliaires pour les effets communs</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Étapes du mixage</h4>
          
          <h5 className="text-lg font-medium mt-4">1. Balance initiale</h5>
          <p className="mb-4">
            Commencez par établir une balance de volume brute entre les différents éléments.
            Utilisez uniquement les faders, sans aucun traitement. L'objectif est d'obtenir
            un équilibre global avant d'entrer dans les détails.
          </p>
          
          <h5 className="text-lg font-medium mt-4">2. Nettoyage et correction</h5>
          <p className="mb-4">
            Appliquez des filtres passe-haut pour éliminer les basses fréquences inutiles sur les pistes
            qui n'en ont pas besoin. Corrigez les problèmes évidents (résonances, sibilances, etc.)
            avec une égalisation soustractive.
          </p>
          
          <h5 className="text-lg font-medium mt-4">3. Compression</h5>
          <p className="mb-4">
            Appliquez une compression pour contrôler la dynamique des éléments qui en ont besoin.
            Commencez par les éléments fondamentaux comme la basse et la grosse caisse, puis
            passez aux voix et autres instruments.
          </p>
          
          <h5 className="text-lg font-medium mt-4">4. Égalisation créative</h5>
          <p className="mb-4">
            Après avoir corrigé les problèmes, utilisez l'égalisation de manière créative pour
            sculpter le son de chaque élément et lui donner sa place dans le mix.
          </p>
          
          <h5 className="text-lg font-medium mt-4">5. Effets et profondeur</h5>
          <p className="mb-4">
            Ajoutez de la réverbération, du delay et d'autres effets pour créer de la profondeur
            et de l'espace dans votre mix. Utilisez des pistes auxiliaires pour les effets partagés.
          </p>
          
          <h5 className="text-lg font-medium mt-4">6. Automation</h5>
          <p>
            Utilisez l'automation pour donner vie à votre mix en faisant varier certains paramètres
            au cours du morceau (volume, panoramique, effets, etc.).
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Bonnes pratiques</h4>
          
          <h5 className="text-lg font-medium">Faites des pauses régulières</h5>
          <p className="mb-4">
            Vos oreilles se fatiguent rapidement. Prenez des pauses d'au moins 15 minutes toutes les heures
            pour garder une écoute fraîche et objective.
          </p>
          
          <h5 className="text-lg font-medium">Écoutez sur différents systèmes</h5>
          <p className="mb-4">
            Vérifiez régulièrement votre mix sur différents systèmes d'écoute (casque, enceintes de studio,
            système hi-fi, écouteurs, enceintes de voiture, etc.) pour vous assurer qu'il sonne bien partout.
          </p>
          
          <h5 className="text-lg font-medium">Utilisez des références</h5>
          <p>
            Comparez régulièrement votre mix à des morceaux professionnels du même genre pour
            vous assurer que vous êtes sur la bonne voie en termes de balance, de clarté et de dynamique.
          </p>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conseil</h4>
        <p className="text-blue-700 dark:text-blue-300">
          N'hésitez pas à sauvegarder différentes versions de votre mix à mesure que vous avancez.
          Cela vous permettra de revenir en arrière si nécessaire et de comparer l'évolution de votre travail.
        </p>
      </div>
    </div>
  );
};

export default WorkflowContent;