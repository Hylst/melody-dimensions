import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const AutomationContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Automation dans Ardour</h3>
      
      <p>
        L'automation est une fonctionnalité puissante qui vous permet d'enregistrer et de programmer
        des changements de paramètres au fil du temps. Elle est essentielle pour créer un mixage dynamique.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Qu'est-ce que l'automation ?</h4>
      <p>
        L'automation permet de faire varier automatiquement des paramètres comme le volume, le panoramique,
        ou n'importe quel paramètre de plugin au cours du morceau. Par exemple, vous pouvez programmer
        une augmentation progressive du volume d'une piste pendant un refrain.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Types de paramètres automatisables</h4>
      <p>
        Dans Ardour, vous pouvez automatiser de nombreux paramètres :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>Volume</strong> - Pour créer des fades ou ajuster les niveaux</li>
        <li><strong>Panoramique</strong> - Pour déplacer le son dans le champ stéréo</li>
        <li><strong>Mute</strong> - Pour couper le son à certains moments</li>
        <li><strong>Paramètres de plugins</strong> - Pratiquement tous les paramètres de vos plugins</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Créer une automation</h4>
      <p>
        Pour créer une automation dans Ardour :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Cliquez sur le bouton "A" (Automation) de la piste concernée</li>
        <li>Sélectionnez le paramètre que vous souhaitez automatiser dans le menu déroulant</li>
        <li>Une ligne d'automation apparaît dans la piste</li>
        <li>Utilisez l'outil crayon pour dessiner l'automation ou créez des points en cliquant</li>
        <li>Ajustez les points selon vos besoins</li>
      </ol>
      
      <h4 className="text-xl font-semibold mt-6">Modes d'automation</h4>
      <p>
        Ardour propose plusieurs modes d'automation :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>Manuel</strong> - Les changements ne sont pas enregistrés</li>
        <li><strong>Play</strong> - Les automations existantes sont lues</li>
        <li><strong>Write</strong> - Enregistre vos mouvements de contrôle en temps réel</li>
        <li><strong>Touch</strong> - Enregistre uniquement lorsque vous touchez un contrôle</li>
      </ul>
      
      <Alert className="my-6">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Astuce</AlertTitle>
        <AlertDescription>
          Pour une automation plus naturelle, utilisez le mode "Write" et manipulez les contrôles pendant la lecture.
          Cela enregistrera vos mouvements en temps réel, créant une automation plus organique.
        </AlertDescription>
      </Alert>
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold">Exemples d'utilisation de l'automation</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Augmenter progressivement le volume d'une nappe sonore</li>
            <li>Déplacer un instrument de gauche à droite dans le champ stéréo</li>
            <li>Augmenter la réverbération sur la dernière note d'une phrase</li>
            <li>Réduire les basses fréquences d'un instrument pendant un passage vocal</li>
            <li>Automatiser le feedback d'un delay pour créer des effets croissants</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomationContent;