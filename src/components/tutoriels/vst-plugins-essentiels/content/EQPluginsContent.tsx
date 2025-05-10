import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const EQPluginsContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Plugins d'égalisation (EQ)
      </h3>
      
      <p className="mb-4">
        Les égaliseurs sont des outils essentiels qui permettent de sculpter le spectre sonore en ajustant les différentes fréquences. Ils sont indispensables pour créer de l'espace dans un mixage et corriger les problèmes sonores.
      </p>

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Types d'égaliseurs
          </h4>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">EQ Paramétrique</h5>
              <p>
                Permet un contrôle précis sur des bandes de fréquences spécifiques avec des paramètres de fréquence, gain et Q (largeur de bande).
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">EQ Graphique</h5>
              <p>
                Offre un contrôle visuel avec des curseurs représentant différentes bandes de fréquences fixes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Plugins EQ recommandés
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">FabFilter Pro-Q 3</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de FabFilter Pro-Q 3
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un égaliseur paramétrique de haute qualité avec une interface visuelle intuitive et des fonctionnalités avancées comme l'analyse spectrale en temps réel.
            </p>
            <p className="text-sm text-primary">
              Points forts: Interface intuitive, qualité sonore exceptionnelle, visualisation dynamique
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">TDR Nova</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de TDR Nova
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un égaliseur dynamique gratuit qui combine EQ et compression, idéal pour le traitement adaptatif des fréquences.
            </p>
            <p className="text-sm text-primary">
              Points forts: Gratuit, EQ dynamique, excellent pour le de-essing et le contrôle des résonances
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">ReaEQ (Reaper)</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de ReaEQ
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un égaliseur paramétrique léger et efficace inclus dans Reaper, mais disponible séparément dans le pack ReaPlugs.
            </p>
            <p className="text-sm text-primary">
              Points forts: Léger, gratuit, faible consommation CPU, nombre illimité de bandes
            </p>
          </CardContent>
        </Card>
      </div>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Conseils d'utilisation
      </h4>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <p>
              • Utilisez des coupes plutôt que des boosts quand c'est possible
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <p>
              • Pensez à l'EQ dans le contexte du mixage complet, pas isolément
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <p>
              • Utilisez un filtre passe-haut pour éliminer les basses fréquences inutiles
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <p>
              • Faites des ajustements subtils et prenez des pauses pour reposer vos oreilles
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EQPluginsContent;