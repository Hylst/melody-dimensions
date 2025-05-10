import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const FinalisationContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Finalisation du mixage</h3>
      
      <p>
        La finalisation est l'étape où vous peaufinez votre mixage et préparez votre projet
        pour l'exportation ou le mastering. C'est le moment de faire les derniers ajustements
        et de vous assurer que tout sonne comme vous le souhaitez.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Vérifications finales</h4>
      <p>
        Avant de considérer votre mixage comme terminé, effectuez ces vérifications importantes :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>Équilibre général</strong> - Assurez-vous que tous les éléments sont bien équilibrés</li>
        <li><strong>Niveaux</strong> - Vérifiez qu'aucune piste n'écrête et que le niveau général est bon</li>
        <li><strong>Panoramique</strong> - Confirmez que la répartition stéréo est équilibrée</li>
        <li><strong>Clarté</strong> - Assurez-vous que tous les éléments importants sont audibles</li>
        <li><strong>Cohérence</strong> - Vérifiez que le son reste cohérent tout au long du morceau</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Écoute sur différents systèmes</h4>
      <p>
        Il est crucial d'écouter votre mixage sur différents systèmes pour vous assurer qu'il sonne bien partout :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li>Casques de référence</li>
        <li>Enceintes de monitoring</li>
        <li>Enceintes grand public</li>
        <li>Écouteurs</li>
        <li>Système audio de voiture (si possible)</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Exportation du mixage</h4>
      <p>
        Pour exporter votre mixage final dans Ardour :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Allez dans "Session" {">"}  "Exporter" {">"} "Exporter vers un fichier audio"</li>
        <li>Sélectionnez la plage à exporter (généralement la session entière)</li>
        <li>Choisissez le format (WAV non compressé pour le mastering)</li>
        <li>Réglez la résolution (24 bits recommandé)</li>
        <li>Réglez la fréquence d'échantillonnage (44.1 kHz ou 48 kHz)</li>
        <li>Nommez votre fichier et choisissez l'emplacement</li>
        <li>Cliquez sur "Exporter"</li>
      </ol>
      
      <Alert className="my-6">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Conseil important</AlertTitle>
        <AlertDescription>
          Prenez une pause d'au moins quelques heures, idéalement une journée, avant d'écouter votre mixage final.
          Cela vous permettra de l'écouter avec des oreilles fraîches et de repérer des problèmes que vous auriez pu manquer.
        </AlertDescription>
      </Alert>
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold">Checklist de finalisation</h4>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>Tous les niveaux sont corrects et rien n'écrête</li>
            <li>La balance entre les instruments est satisfaisante</li>
            <li>Les automations fonctionnent comme prévu</li>
            <li>Le mixage a été testé sur différents systèmes d'écoute</li>
            <li>Le fichier a été exporté dans un format de haute qualité</li>
            <li>Une copie de sauvegarde de la session finale a été créée</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinalisationContent;