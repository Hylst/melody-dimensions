import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CompressionContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Compression</h3>
      
      <p>
        La compression est un processus essentiel qui permet de contrôler la dynamique d'un signal audio
        en réduisant l'écart entre les sons les plus forts et les plus faibles.
      </p>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Principes de base</h4>
          <p className="mb-4">
            Un compresseur réduit automatiquement le volume lorsque le signal dépasse un certain seuil.
            Voici les paramètres principaux :
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Threshold (Seuil)</strong> : Niveau à partir duquel la compression s'active</li>
            <li><strong>Ratio</strong> : Détermine l'intensité de la compression (ex: 4:1 signifie que pour 4 dB au-dessus du seuil, le signal ne dépassera que de 1 dB)</li>
            <li><strong>Attack (Attaque)</strong> : Temps que met le compresseur à réagir une fois le seuil dépassé</li>
            <li><strong>Release (Relâchement)</strong> : Temps que met le compresseur à arrêter d'agir une fois le signal repassé sous le seuil</li>
            <li><strong>Makeup Gain (Gain de compensation)</strong> : Gain appliqué après compression pour compenser la réduction de volume</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Types de compression</h4>
          
          <h5 className="text-lg font-medium mt-4">Compression standard</h5>
          <p className="mb-4">
            La forme la plus courante, utilisée pour contrôler la dynamique et donner plus de consistance
            à un instrument ou une voix.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Compression parallèle</h5>
          <p className="mb-4">
            Consiste à mélanger le signal compressé avec le signal original non compressé.
            Permet d'obtenir à la fois du punch et de la dynamique.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Limiteur</h5>
          <p className="mb-4">
            Un compresseur avec un ratio très élevé (10:1 ou plus), qui empêche le signal de dépasser
            un certain niveau. Utilisé principalement pour éviter l'écrêtage.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Side-chain</h5>
          <p>
            Technique où la compression d'un signal est déclenchée par un autre signal.
            Très utilisée pour créer l'effet de "pompage" en musique électronique (la basse qui baisse quand la grosse caisse frappe).
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Applications courantes</h4>
          
          <h5 className="text-lg font-medium">Voix</h5>
          <p className="mb-4">
            La compression aide à maintenir une voix intelligible et présente tout au long d'un morceau,
            en réduisant les écarts de volume entre les passages forts et faibles.
          </p>
          
          <h5 className="text-lg font-medium">Batterie</h5>
          <p className="mb-4">
            Permet d'ajouter du punch et de la consistance. La compression peut transformer radicalement
            le son d'une batterie en lui donnant plus d'impact et de présence.
          </p>
          
          <h5 className="text-lg font-medium">Basse</h5>
          <p>
            La compression est essentielle pour obtenir une basse régulière et présente dans le mix,
            en réduisant les variations de niveau entre les notes.
          </p>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conseil</h4>
        <p className="text-blue-700 dark:text-blue-300">
          La compression est puissante mais peut facilement être suremployée. Écoutez régulièrement
          votre mix avec et sans compression pour vous assurer que vous n'écrasez pas trop la dynamique
          naturelle de vos instruments.
        </p>
      </div>
    </div>
  );
};

export default CompressionContent;