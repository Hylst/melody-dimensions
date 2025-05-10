import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const EQContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Égalisation (EQ)</h3>
      
      <p>
        L'égalisation est l'un des outils les plus puissants et essentiels du mixage audio. Elle permet
        de modifier le contenu fréquentiel d'un son, en renforçant ou atténuant certaines fréquences.
      </p>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Principes de base</h4>
          <p className="mb-4">
            Un égaliseur vous permet de sculpter le son en modifiant son spectre de fréquences. Voici les
            principes fondamentaux :
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Basses fréquences</strong> (20-250 Hz) : corps, chaleur, fondamentales des basses</li>
            <li><strong>Bas-médiums</strong> (250-500 Hz) : rondeur, mais aussi boue si en excès</li>
            <li><strong>Médiums</strong> (500-2000 Hz) : présence, intelligibilité des voix</li>
            <li><strong>Hauts-médiums</strong> (2-5 kHz) : définition, attaque, clarté</li>
            <li><strong>Aigus</strong> (5-20 kHz) : brillance, air, détail</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Types d'égaliseurs</h4>
          
          <h5 className="text-lg font-medium mt-4">EQ paramétrique</h5>
          <p className="mb-4">
            Le plus polyvalent, il permet de contrôler précisément la fréquence, le gain et la largeur de bande (Q).
            Idéal pour des corrections précises et des ajustements créatifs.
          </p>
          
          <h5 className="text-lg font-medium mt-4">EQ graphique</h5>
          <p className="mb-4">
            Divise le spectre en bandes de fréquences fixes que vous pouvez augmenter ou diminuer.
            Pratique pour des ajustements rapides ou pour traiter des problèmes de résonance.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Filtres</h5>
          <p>
            Les filtres passe-haut et passe-bas permettent de couper les fréquences en dessous ou au-dessus
            d'un certain seuil. Essentiels pour nettoyer un mix et éliminer les fréquences indésirables.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Techniques d'égalisation</h4>
          
          <h5 className="text-lg font-medium">Égalisation soustractive</h5>
          <p className="mb-4">
            Consiste à atténuer les fréquences problématiques plutôt que d'amplifier les bonnes.
            Cette approche préserve la dynamique et donne généralement des résultats plus naturels.
          </p>
          
          <h5 className="text-lg font-medium">Balayage de fréquences</h5>
          <p className="mb-4">
            Technique qui consiste à amplifier fortement une bande étroite et à la faire "balayer"
            le spectre pour identifier les fréquences problématiques, puis à les atténuer.
          </p>
          
          <h5 className="text-lg font-medium">Égalisation complémentaire</h5>
          <p>
            Consiste à créer de l'espace pour chaque élément en évitant que deux instruments
            n'occupent exactement les mêmes fréquences avec la même intensité.
          </p>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conseil</h4>
        <p className="text-blue-700 dark:text-blue-300">
          N'oubliez pas de faire des pauses régulières pour reposer vos oreilles. L'égalisation
          demande une écoute attentive, et la fatigue auditive peut rapidement fausser votre jugement.
        </p>
      </div>
    </div>
  );
};

export default EQContent;