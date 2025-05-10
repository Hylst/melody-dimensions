import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const GroupesContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Utilisation des groupes dans Ardour</h3>
      
      <p>
        Les groupes sont un outil puissant pour gérer efficacement plusieurs pistes simultanément
        dans Ardour. Ils vous permettent de contrôler et d'éditer plusieurs pistes comme s'il s'agissait
        d'une seule entité.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Types de groupes dans Ardour</h4>
      <p>
        Ardour propose deux types principaux de groupes :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>Groupes d'édition</strong> - Pour appliquer les mêmes éditions à plusieurs pistes</li>
        <li><strong>Groupes de mixage</strong> - Pour contrôler les paramètres de mixage de plusieurs pistes ensemble</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Créer un groupe</h4>
      <p>
        Pour créer un groupe dans Ardour :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Sélectionnez les pistes que vous souhaitez inclure dans le groupe</li>
        <li>Cliquez sur "Groupes" dans le menu principal</li>
        <li>Sélectionnez "Nouveau groupe"</li>
        <li>Donnez un nom à votre groupe</li>
        <li>Choisissez les options de groupe (édition, mixage, ou les deux)</li>
        <li>Cliquez sur "Créer"</li>
      </ol>
      
      <h4 className="text-xl font-semibold mt-6">Avantages des groupes</h4>
      <p>
        L'utilisation des groupes présente plusieurs avantages :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>Gain de temps</strong> - Appliquez des modifications à plusieurs pistes en une seule opération</li>
        <li><strong>Cohérence</strong> - Maintenez des relations de volume cohérentes entre les pistes</li>
        <li><strong>Organisation</strong> - Structurez votre session de manière logique</li>
        <li><strong>Flexibilité</strong> - Vous pouvez activer/désactiver les groupes selon vos besoins</li>
      </ul>
      
      <Alert className="my-6">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Conseil</AlertTitle>
        <AlertDescription>
          Vous pouvez temporairement désactiver un groupe en maintenant la touche Alt enfoncée pendant que vous
          modifiez une piste individuelle du groupe. Cela vous permet de faire des ajustements spécifiques sans
          affecter les autres pistes du groupe.
        </AlertDescription>
      </Alert>
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold">Exemples de groupes utiles</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Groupe de batterie</strong> - Pour traiter toutes les pistes de batterie ensemble</li>
            <li><strong>Groupe de chœurs</strong> - Pour maintenir une balance cohérente entre les voix</li>
            <li><strong>Groupe de guitares</strong> - Pour gérer plusieurs pistes de guitare</li>
            <li><strong>Groupe d'instruments rythmiques</strong> - Pour maintenir la cohésion de la section rythmique</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default GroupesContent;