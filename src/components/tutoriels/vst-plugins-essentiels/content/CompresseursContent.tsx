import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const CompresseursContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Plugins de compression
      </h3>
      
      <p className="mb-4">
        Les compresseurs sont des outils essentiels qui permettent de contrôler la dynamique d'un signal audio en réduisant l'écart entre les sons les plus forts et les plus faibles. Ils sont indispensables pour obtenir un mixage équilibré et professionnel.
      </p>

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Paramètres principaux d'un compresseur
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Threshold (Seuil)</h5>
              <p>
                Détermine le niveau à partir duquel la compression commence à s'appliquer. Tout signal dépassant ce seuil sera compressé.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Ratio</h5>
              <p>
                Définit l'intensité de la compression. Un ratio de 4:1 signifie que pour chaque 4 dB au-dessus du seuil, le signal ne sera augmenté que de 1 dB.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-medium">Attack (Attaque)</h5>
              <p>
                Détermine la rapidité avec laquelle la compression s'applique une fois le seuil dépassé. Une attaque rapide capture les transitoires, une attaque lente les laisse passer.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Release (Relâchement)</h5>
              <p>
                Définit le temps nécessaire pour que la compression cesse une fois que le signal repasse sous le seuil. Affecte le naturel et la respiration du son.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-medium">Knee (Genou)</h5>
              <p>
                Détermine la transition entre l'état non compressé et compressé. Un knee doux (soft) offre une compression plus progressive et naturelle.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Makeup Gain (Gain de compensation)</h5>
              <p>
                Permet d'augmenter le niveau global du signal après compression pour compenser la réduction de volume.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Plugins de compression recommandés
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">FabFilter Pro-C 2</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de FabFilter Pro-C 2
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un compresseur polyvalent avec une interface visuelle intuitive et plusieurs modes de compression adaptés à différents types de matériel audio.
            </p>
            <p className="text-sm text-primary">
              Points forts: Visualisation claire de la compression, 8 styles de compression, contrôle précis
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">TDR Kotelnikov</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de TDR Kotelnikov
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un compresseur transparent de haute qualité, idéal pour le mastering et le mixage de bus. Disponible en version gratuite et premium.
            </p>
            <p className="text-sm text-primary">
              Points forts: Très transparent, excellent pour le mastering, contrôles avancés de sidechain
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">ReaComp (Reaper)</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de ReaComp
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un compresseur simple mais efficace inclus dans Reaper, également disponible gratuitement dans le pack ReaPlugs.
            </p>
            <p className="text-sm text-primary">
              Points forts: Gratuit, léger, fonctionnalités de sidechain, faible consommation CPU
            </p>
          </CardContent>
        </Card>
      </div>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Techniques de compression
      </h4>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Compression parallèle</h5>
            <p className="mt-2">
              Mélange le signal original avec une version fortement compressée pour obtenir à la fois du punch et de la dynamique.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Sidechain</h5>
            <p className="mt-2">
              Utilise un signal externe pour déclencher la compression, couramment utilisé pour faire "pomper" un pad ou une basse en rythme avec la grosse caisse.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Multi-bande</h5>
            <p className="mt-2">
              Divise le signal en plusieurs bandes de fréquences qui peuvent être compressées indépendamment, idéal pour un traitement ciblé.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompresseursContent;