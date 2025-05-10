import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ReverbDelayContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Plugins de réverbération et délai
      </h3>
      
      <p className="mb-4">
        Les effets de réverbération et de délai sont essentiels pour créer de la profondeur, de l'espace et de la dimension dans vos mixages. Ils permettent de placer les éléments dans un espace sonore cohérent et d'ajouter de l'intérêt à vos productions.
      </p>

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Réverbération
          </h4>
          
          <p className="mb-4">
            La réverbération simule la façon dont le son se comporte dans différents espaces physiques, en créant des réflexions qui donnent une impression de profondeur et d'espace.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Paramètres principaux</h5>
              <ul className="space-y-1">
                <li>
                  <p><strong>Pre-delay</strong> : Temps entre le son direct et les premières réflexions</p>
                </li>
                <li>
                  <p><strong>Decay/RT60</strong> : Durée de la réverbération</p>
                </li>
                <li>
                  <p><strong>Size/Room</strong> : Taille virtuelle de l'espace simulé</p>
                </li>
                <li>
                  <p><strong>Damping</strong> : Absorption des hautes fréquences au fil du temps</p>
                </li>
                <li>
                  <p><strong>Mix/Dry-Wet</strong> : Balance entre le signal original et l'effet</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Types de réverbération</h5>
              <ul className="space-y-1">
                <li>
                  <p><strong>Room</strong> : Petits espaces, réverbération courte et dense</p>
                </li>
                <li>
                  <p><strong>Hall</strong> : Grands espaces, réverbération longue et riche</p>
                </li>
                <li>
                  <p><strong>Plate</strong> : Son métallique classique des studios d'enregistrement</p>
                </li>
                <li>
                  <p><strong>Spring</strong> : Son caractéristique des amplis guitare</p>
                </li>
                <li>
                  <p><strong>Convolution</strong> : Réverbération basée sur des espaces réels échantillonnés</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Délai
          </h4>
          
          <p className="mb-4">
            Le délai crée des répétitions distinctes du signal original, permettant de créer des effets d'écho, de doublage ou de texture rythmique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Paramètres principaux</h5>
              <ul className="space-y-1">
                <li>
                  <p><strong>Time/Delay</strong> : Temps entre le signal original et les répétitions</p>
                </li>
                <li>
                  <p><strong>Feedback</strong> : Quantité de signal réinjecté, détermine le nombre de répétitions</p>
                </li>
                <li>
                  <p><strong>Sync</strong> : Synchronisation avec le tempo du projet</p>
                </li>
                <li>
                  <p><strong>Filter</strong> : Filtrage des répétitions pour les rendre moins dominantes</p>
                </li>
                <li>
                  <p><strong>Mix/Dry-Wet</strong> : Balance entre le signal original et l'effet</p>
                </li>
              </ul>
            </div>
          
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Types de délai</h5>
              <ul className="space-y-1">
                <li>
                  <p><strong>Mono</strong> : Répétitions simples dans un seul canal</p>
                </li>
                <li>
                  <p><strong>Stéréo/Ping-pong</strong> : Répétitions alternant entre les canaux gauche et droit</p>
                </li>
                <li>
                  <p><strong>Tape</strong> : Émulation des délais à bande avec saturation et modulation</p>
                </li>
                <li>
                  <p><strong>Multi-tap</strong> : Plusieurs lignes de délai avec différents timings</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Plugins recommandés
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Valhalla VintageVerb</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de Valhalla VintageVerb
                </p>
              </div>
            </div>
            <p className="mb-2">
              Une réverbération algorithmique inspirée des unités classiques des années 70 et 80, avec un son riche et caractéristique.
            </p>
            <p className="text-sm text-primary">
              Points forts: 17 modes de réverbération, contrôle de coloration, excellent rapport qualité-prix
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">FabFilter Pro-R</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de FabFilter Pro-R
                </p>
              </div>
            </div>
            <p className="mb-2">
              Une réverbération moderne avec une interface visuelle intuitive et un contrôle précis sur la forme et la couleur de la réverbération.
            </p>
            <p className="text-sm text-primary">
              Points forts: EQ intégré, visualisation du spectre, contrôle de distance et caractère
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Valhalla Delay</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de Valhalla Delay
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un plugin de délai polyvalent offrant une large gamme de styles, des échos vintage aux effets expérimentaux modernes.
            </p>
            <p className="text-sm text-primary">
              Points forts: 15 modes de délai, modulation intégrée, synchronisation au tempo, diffusion
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h4 className="text-xl font-medium mb-4">
          Conseils d'utilisation
        </h4>
        
        <div className="space-y-3">
          <Card>
            <CardContent className="py-3">
              <p>
                • Utilisez les effets sur des bus auxiliaires pour économiser les ressources CPU et appliquer le même effet à plusieurs pistes
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-3">
              <p>
                • Synchronisez vos délais au tempo de votre morceau pour une intégration rythmique naturelle
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-3">
              <p>
                • Utilisez l'EQ avant ou après la réverbération pour contrôler quelles fréquences sont affectées
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-3">
              <p>
                • Combinez délai et réverbération pour créer des espaces sonores complexes et intéressants
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReverbDelayContent;