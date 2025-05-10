import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const PreparationContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Préparation de votre session de mixage</h3>
      
      <p>
        Avant de commencer le mixage dans Ardour, il est important de bien préparer votre session pour
        travailler efficacement. Cette étape préliminaire vous fera gagner beaucoup de temps par la suite.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Organisation des pistes</h4>
      <p>
        Une bonne organisation est essentielle pour un mixage efficace. Voici quelques conseils :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>Renommez toutes vos pistes avec des noms explicites (ex: "Kick", "Snare", "Lead Vocals")</li>
        <li>Utilisez un code couleur cohérent (ex: batterie en rouge, voix en bleu, etc.)</li>
        <li>Regroupez les pistes similaires (nous verrons les groupes plus tard)</li>
        <li>Supprimez les pistes inutilisées ou les parties audio non nécessaires</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Nettoyage audio préliminaire</h4>
      <p>
        Avant d'appliquer des effets, assurez-vous que vos pistes sont propres :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>Supprimez les bruits indésirables (respirations trop fortes, clics, etc.)</li>
        <li>Appliquez des fades in/out aux débuts et fins des régions audio pour éviter les clics</li>
        <li>Vérifiez les niveaux de base pour éviter l'écrêtage</li>
      </ul>
      
      <Alert className="my-6">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Conseil important</AlertTitle>
        <AlertDescription>
          Créez une sauvegarde de votre session avant de commencer le mixage. Cela vous permettra de revenir
          en arrière si nécessaire sans perdre votre travail original.
        </AlertDescription>
      </Alert>
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold">Checklist de préparation</h4>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>Toutes les pistes sont nommées clairement</li>
            <li>Les pistes sont organisées logiquement</li>
            <li>Les régions audio sont nettoyées</li>
            <li>Les niveaux de base sont vérifiés</li>
            <li>Une sauvegarde de la session a été créée</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreparationContent;