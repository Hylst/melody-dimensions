
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shuffle, Layers, Globe, TrendingUp } from "lucide-react";
import { fusionGenres } from "@/data/music/fusionGenres";

import FusionGenresSection from "@/components/music/FusionGenresSection";

const FusionSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Shuffle className="h-6 w-6 text-primary" />
          L'art du mélange musical
        </h2>
        <p className="text-muted-foreground text-lg">
          Exploration des genres hybrides qui transcendent les frontières traditionnelles, 
          créant de nouvelles expressions musicales à travers la fusion d'éléments disparates.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              La fusion comme moteur d'innovation
            </CardTitle>
            <Badge variant="outline">Croisements créatifs</Badge>
          </div>
          <CardDescription className="text-base">
            Comment le dialogue entre différents styles musicaux a historiquement engendré 
            certaines des innovations les plus marquantes dans l'histoire de la musique.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Pourquoi les genres fusionnent</h3>
              <p className="text-muted-foreground mb-4">
                La fusion musicale répond à plusieurs motivations artistiques et culturelles qui poussent les musiciens 
                à explorer au-delà des limites établies de leur genre d'origine.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <div>
                    <span className="font-medium">Innovation artistique :</span>
                    <p className="text-sm text-muted-foreground">Désir de créer des sonorités nouvelles et de se démarquer</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <div>
                    <span className="font-medium">Échanges culturels :</span>
                    <p className="text-sm text-muted-foreground">Rencontres entre musiciens de traditions diverses</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <div>
                    <span className="font-medium">Évolution naturelle :</span>
                    <p className="text-sm text-muted-foreground">Impasses créatives poussant à chercher de nouvelles directions</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">•</span>
                  <div>
                    <span className="font-medium">Expression identitaire :</span>
                    <p className="text-sm text-muted-foreground">Reflet d'identités culturelles multiples et complexes</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Fusions historiques marquantes</h3>
              <p className="text-muted-foreground mb-4">
                Certaines rencontres musicales ont été si influentes qu'elles ont donné naissance à des mouvements entiers 
                et redéfini les possibilités créatives de leur époque.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Blues + Country = Rock'n'Roll (1950s)</h4>
                  <p className="text-sm text-muted-foreground">Une fusion qui a bouleversé la culture populaire du 20ème siècle</p>
                </div>
                <div>
                  <h4 className="font-medium">Jazz + Funk + Rock = Fusion (1970s)</h4>
                  <p className="text-sm text-muted-foreground">A libéré le jazz des conventions traditionnelles</p>
                </div>
                <div>
                  <h4 className="font-medium">Disco + Électronique = House (1980s)</h4>
                  <p className="text-sm text-muted-foreground">Naissance de la culture club moderne et de la EDM</p>
                </div>
                <div>
                  <h4 className="font-medium">Rock + Hip-hop + Metal = Nu Metal (1990s)</h4>
                  <p className="text-sm text-muted-foreground">A dominé les charts à l'aube des années 2000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Fusions interculturelles</h3>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Afro-Caribéennes</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <span className="font-medium">Reggaeton:</span>
                        <p className="text-muted-foreground">Dancehall jamaïcain + rythmes latins + hip-hop</p>
                      </li>
                      <li>
                        <span className="font-medium">Zouk:</span>
                        <p className="text-muted-foreground">Musiques antillaises + influences africaines</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Indo-Occidentales</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <span className="font-medium">Asian Underground:</span>
                        <p className="text-muted-foreground">Musique classique indienne + électronique britannique</p>
                      </li>
                      <li>
                        <span className="font-medium">Bhangra moderne:</span>
                        <p className="text-muted-foreground">Danse traditionnelle punjabi + électronique et hip-hop</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Euro-Africaines</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <span className="font-medium">Afro-house:</span>
                        <p className="text-muted-foreground">House européenne + percussions et voix africaines</p>
                      </li>
                      <li>
                        <span className="font-medium">Coupé-décalé:</span>
                        <p className="text-muted-foreground">Musique ivoirienne + sonorités électroniques</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Latino-Américaines</h4>
                    <ul className="text-sm space-y-2">
                      <li>
                        <span className="font-medium">Latin jazz:</span>
                        <p className="text-muted-foreground">Jazz + rythmes afro-cubains et brésiliens</p>
                      </li>
                      <li>
                        <span className="font-medium">Tropicália:</span>
                        <p className="text-muted-foreground">Bossa nova + rock psychédélique + avant-garde</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-muted rounded-lg mb-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Tendances actuelles de fusion</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              À l'ère numérique, les frontières entre genres s'estompent comme jamais auparavant,
              créant un paysage musical où l'hybridation est devenue la norme plutôt que l'exception.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Pop expérimentale</h4>
                <p className="text-sm text-muted-foreground">Artistes comme Björk ou FKA Twigs mêlant structures pop à des sonorités avant-gardistes</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Metal progressif</h4>
                <p className="text-sm text-muted-foreground">Incorporation d'éléments jazz, classiques et électroniques dans un cadre metal</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Néo-psychédélisme</h4>
                <p className="text-sm text-muted-foreground">Revival psychédélique intégrant électronique moderne et influences globales</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Trap fusion</h4>
                <p className="text-sm text-muted-foreground">La trap servant de base à des hybridations avec country, rock, et musiques du monde</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Post-genre</h4>
                <p className="text-sm text-muted-foreground">Artistes refusant délibérément toute catégorisation, piochant librement dans tous les styles</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Ambient-folk</h4>
                <p className="text-sm text-muted-foreground">Traditions folk enrichies de textures ambiantes et d'électronique minimale</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Genres hybrides emblématiques</h3>
          <p className="text-muted-foreground mb-6">
            Des rencontres musicales qui transcendent les frontières traditionnelles et créent de nouvelles expressions artistiques
          </p>
          
          <FusionGenresSection genres={fusionGenres} />
        </CardContent>
      </Card>
    </div>
  );
};

export default FusionSection;
