import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const PluginsContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Utilisation des plugins dans Ardour</h3>
      
      <p>
        Les plugins sont des outils essentiels pour le mixage dans Ardour. Ils vous permettent d'ajouter
        des effets et de traiter le son de vos pistes pour obtenir le résultat souhaité.
      </p>
      
      <h4 className="text-xl font-semibold mt-6">Types de plugins courants</h4>
      <p>
        Ardour prend en charge plusieurs formats de plugins. Voici les types les plus couramment utilisés :
      </p>
      
      <ul className="list-disc pl-5 space-y-2 my-4">
        <li><strong>Égaliseurs (EQ)</strong> - Pour ajuster les fréquences du son</li>
        <li><strong>Compresseurs</strong> - Pour contrôler la dynamique</li>
        <li><strong>Réverbération</strong> - Pour ajouter de l'espace et de la profondeur</li>
        <li><strong>Delay/Echo</strong> - Pour créer des répétitions</li>
        <li><strong>Limiteurs</strong> - Pour éviter l'écrêtage</li>
      </ul>
      
      <h4 className="text-xl font-semibold mt-6">Ajouter un plugin à une piste</h4>
      <p>
        Pour ajouter un plugin à une piste ou un bus dans Ardour :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Cliquez sur le bouton "+" dans la section "Processeurs" de la piste</li>
        <li>Naviguez dans les catégories de plugins disponibles</li>
        <li>Sélectionnez le plugin souhaité</li>
        <li>Cliquez sur "Ajouter"</li>
      </ol>
      
      <h4 className="text-xl font-semibold mt-6">Ordre des plugins</h4>
      <p>
        L'ordre dans lequel vous placez vos plugins est important car il affecte le résultat sonore final.
        En général, voici un ordre typique :
      </p>
      
      <ol className="list-decimal pl-5 space-y-2 my-4">
        <li>Plugins correctifs (réduction de bruit, suppresseur de sibilance)</li>
        <li>Égaliseurs (EQ)</li>
        <li>Compresseurs</li>
        <li>Effets de modulation (chorus, flanger)</li>
        <li>Effets spatiaux (réverbération, delay)</li>
        <li>Limiteur (en dernier)</li>
      </ol>
      
      <Alert className="my-6">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Conseil</AlertTitle>
        <AlertDescription>
          N'hésitez pas à expérimenter avec l'ordre des plugins. Parfois, placer un compresseur après une réverbération
          peut créer des effets intéressants. L'important est d'utiliser votre oreille comme guide.
        </AlertDescription>
      </Alert>
      
      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold">Plugins recommandés pour Ardour (gratuits)</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Calf Plugins</strong> - Suite complète d'effets de haute qualité</li>
            <li><strong>x42 Plugins</strong> - Outils de mesure et effets</li>
            <li><strong>LSP Plugins</strong> - Large collection d'effets professionnels</li>
            <li><strong>Dragonfly Reverb</strong> - Excellentes réverbérations</li>
            <li><strong>TAL Effects</strong> - Effets vintage de qualité</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PluginsContent;