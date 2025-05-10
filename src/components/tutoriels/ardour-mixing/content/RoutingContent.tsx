import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, ArrowRightIcon } from "lucide-react";

const RoutingContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Routage du signal dans Ardour</h3>
      
      <p>
        Le routage est un aspect fondamental du mixage dans Ardour. Il s'agit de définir comment
        les signaux audio circulent entre les pistes, les bus et les sorties.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Comprendre les bus</h4>
      <p>
        Un bus dans Ardour est comme un canal qui peut recevoir des signaux de plusieurs sources
        et les traiter ensemble. Les bus sont essentiels pour :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>Regrouper des instruments similaires (bus de batterie, bus de voix, etc.)</li>
        <li>Créer des effets send/return (réverbération, delay partagés)</li>
        <li>Faciliter le contrôle de volume de plusieurs pistes simultanément</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Création d'un bus</h4>
      <p>
        Pour créer un nouveau bus dans Ardour :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Cliquez sur "Session" {">"} "Ajouter une piste ou un bus"</li>
        <li>Sélectionnez "Bus audio"</li>
        <li>Choisissez la configuration (stéréo, mono, etc.)</li>
        <li>Nommez votre bus de manière explicite (ex: "Bus Batterie")</li>
        <li>Cliquez sur "Ajouter"</li>
      </ol>
      
      <h4 className="text-xl font-semibold mt-6">Routage des pistes vers un bus</h4>
      <p>
        Une fois votre bus créé, vous pouvez y router des pistes :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Cliquez sur l'onglet "Routage" d'une piste</li>
        <li>Dans la section "Sorties", connectez la sortie de la piste à l'entrée du bus</li>
        <li>Répétez pour toutes les pistes que vous souhaitez envoyer vers ce bus</li>
      </ol>
      
      <Alert className="my-6">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Astuce</AlertTitle>
        <AlertDescription>
          Vous pouvez également utiliser la matrice de routage (Menu {">"} Fenêtre {">"} Routage) pour avoir une vue
          d'ensemble de tous les routages de votre session et les modifier facilement.
        </AlertDescription>
      </Alert>
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold">Exemple de structure de routage</h4>
          <p className="mt-2 mb-4">Voici un exemple de structure de routage typique pour un mixage :</p>
          <div className="pl-4 border-l-2 border-primary">
            <p className="mb-2">Pistes individuelles (batterie) <ArrowRightIcon className="inline h-4 w-4" /> Bus Batterie</p>
            <p className="mb-2">Pistes individuelles (voix) <ArrowRightIcon className="inline h-4 w-4" /> Bus Voix</p>
            <p className="mb-2">Pistes individuelles (instruments) <ArrowRightIcon className="inline h-4 w-4" /> Bus Instruments</p>
            <p className="mb-2">Tous les bus <ArrowRightIcon className="inline h-4 w-4" /> Bus Master</p>
            <p>Bus Master <ArrowRightIcon className="inline h-4 w-4" /> Sortie système</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoutingContent;