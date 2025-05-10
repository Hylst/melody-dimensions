import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AnalyseursContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Plugins d'analyse audio
      </h3>
      
      <p className="mb-4">
        Les analyseurs audio sont des outils essentiels qui permettent de visualiser et comprendre le contenu de vos signaux sonores. Ils vous aident à prendre des décisions éclairées lors du mixage, du mastering et de la production musicale.
      </p>

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Types d'analyseurs
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Analyseurs de spectre</h5>
              <p>
                Affichent la répartition des fréquences dans votre signal audio, vous permettant d'identifier les problèmes d'équilibre tonal et les fréquences dominantes ou manquantes.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Analyseurs de phase</h5>
              <p>
                Visualisent les relations de phase entre les canaux stéréo, essentiels pour détecter les problèmes de compatibilité mono et assurer une bonne image stéréo.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-medium">Vumètres et mesureurs de niveau</h5>
              <p>
                Affichent les niveaux audio en temps réel, vous aidant à maintenir des niveaux optimaux et à éviter l'écrêtage ou la distorsion indésirable.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Analyseurs de dynamique</h5>
              <p>
                Montrent comment la dynamique de votre signal évolue dans le temps, utiles pour ajuster la compression et maximiser la clarté et l'impact.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Plugins d'analyse recommandés
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">SPAN (Voxengo)</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de SPAN
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un analyseur de spectre gratuit et puissant qui offre une visualisation précise du contenu fréquentiel de vos signaux audio.
            </p>
            <p className="text-sm text-primary">
              Points forts: Gratuit, affichage en temps réel, comparaison A/B, statistiques, faible consommation CPU
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Youlean Loudness Meter</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de Youlean Loudness Meter
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un mesureur de sonie conforme aux normes de diffusion (LUFS/LKFS), disponible en version gratuite et premium, idéal pour préparer vos mixages pour les plateformes de streaming.
            </p>
            <p className="text-sm text-primary">
              Points forts: Mesure LUFS, version gratuite disponible, préréglages pour plateformes de streaming
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">iZotope Insight 2</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de iZotope Insight 2
                </p>
              </div>
            </div>
            <p className="mb-2">
              Une suite complète d'outils d'analyse visuelle pour le mixage et le mastering professionnel. Version d'essai disponible.
            </p>
            <p className="text-sm text-primary">
              Points forts: Analyse complète, visualisation 3D, mesure de sonie, détection de problèmes
            </p>
          </CardContent>
        </Card>
      </div>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Comment utiliser les analyseurs efficacement
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Référencement</h5>
            <p className="mt-2">
              Comparez vos mixages à des morceaux de référence de haute qualité dans votre genre musical pour identifier les différences spectrales et dynamiques.
            </p>
            <p className="mt-2">
              Utilisez des plugins comme SPAN qui permettent la comparaison A/B pour faciliter cette analyse.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Interprétation</h5>
            <p className="mt-2">
              Apprenez à interpréter les données visuelles en relation avec ce que vous entendez. Les analyseurs sont des guides, pas des règles absolues.
            </p>
            <p className="mt-2">
              Faites confiance à vos oreilles en premier lieu, et utilisez les analyseurs pour confirmer ou affiner vos décisions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyseursContent;