import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const InstrumentsContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Plugins d'instruments virtuels
      </h3>
      
      <p className="mb-4">
        Les instruments virtuels (VSTi) permettent de créer et jouer une multitude de sons sans avoir besoin d'instruments physiques. Ils sont essentiels pour la production musicale moderne et offrent une flexibilité créative incomparable.
      </p>

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Types d'instruments virtuels
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Synthétiseurs</h5>
              <p>
                Génèrent des sons électroniques à partir d'oscillateurs et de modulateurs. Ils peuvent créer des sons uniques impossibles à produire avec des instruments acoustiques.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">Samplers</h5>
              <p>
                Utilisent des enregistrements d'instruments réels (samples) qui peuvent être joués à différentes hauteurs. Idéals pour reproduire des instruments acoustiques fidèlement.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-medium">Rompler/Workstation</h5>
              <p>
                Combinent samples et synthèse pour offrir une large palette sonore prête à l'emploi, souvent organisée par catégories (pianos, cordes, etc.).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Instruments virtuels recommandés
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Vital (Synthétiseur)</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de Vital
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un synthétiseur spectral moderne avec une interface visuelle intuitive. Disponible en version gratuite avec des fonctionnalités impressionnantes.
            </p>
            <p className="text-sm text-primary">
              Points forts: Gratuit (version de base), visualisation spectrale, modulation avancée, qualité sonore exceptionnelle
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Spitfire LABS (Sampler)</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de Spitfire LABS
                </p>
              </div>
            </div>
            <p className="mb-2">
              Une collection gratuite d'instruments échantillonnés de haute qualité, allant des pianos aux textures atmosphériques expérimentales.
            </p>
            <p className="text-sm text-primary">
              Points forts: Entièrement gratuit, bibliothèque en constante expansion, sons uniques et de haute qualité
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">TAL-NoiseMaker (Synthétiseur)</h5>
            <div className="my-4 text-center">
              <div className="bg-muted h-[150px] w-full flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Image de TAL-NoiseMaker
                </p>
              </div>
            </div>
            <p className="mb-2">
              Un synthétiseur analogique virtuel gratuit avec un son riche et chaleureux, parfait pour les débutants comme pour les producteurs expérimentés.
            </p>
            <p className="text-sm text-primary">
              Points forts: Gratuit, interface simple, son analogique de qualité, faible consommation CPU
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
              <h5 className="text-lg font-medium">Exploration sonore</h5>
              <p>
                Prenez le temps d'explorer les presets pour comprendre les capacités de l'instrument, puis personnalisez-les pour créer votre propre signature sonore.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-3">
              <h5 className="text-lg font-medium">Automatisation</h5>
              <p>
                Utilisez l'automatisation des paramètres pour donner vie à vos sons et créer des évolutions intéressantes tout au long du morceau.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-3">
              <h5 className="text-lg font-medium">Layering</h5>
              <p>
                Combinez plusieurs instruments virtuels pour créer des textures riches et complexes qu'un seul instrument ne pourrait pas produire.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="py-3">
              <h5 className="text-lg font-medium">Ressources CPU</h5>
              <p>
                Surveillez l'utilisation du CPU, surtout avec les instruments complexes. N'hésitez pas à "geler" ou exporter en audio les pistes finalisées pour économiser des ressources.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstrumentsContent;