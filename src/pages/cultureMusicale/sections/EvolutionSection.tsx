
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { musicEvolution } from "@/data/music/musicEvolution";
import { musicInfluenceData } from "@/data/music/musicInfluenceData";
import { Badge } from "@/components/ui/badge";
import { Clock, History, TrendingUp, BookOpen, Disc } from "lucide-react";

import MusicEvolutionTimeline from "@/components/music/MusicEvolutionTimeline";
import MusicInfluenceChartSection from "@/components/music/MusicInfluenceChartSection";

const EvolutionSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <History className="h-6 w-6 text-primary" />
          L'évolution de la musique à travers le temps
        </h2>
        <p className="text-muted-foreground text-lg">
          Cette section explore comment les genres musicaux se sont développés, influencés et transformés 
          à travers l'histoire, façonnés par les avancées technologiques, les mouvements sociaux et les innovations artistiques.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Parcours historique de la musique moderne
            </CardTitle>
            <Badge variant="outline">1900 - Aujourd'hui</Badge>
          </div>
          <CardDescription className="text-base">
            L'évolution des genres musicaux majeurs depuis le 20ème siècle, montrant comment les mouvements
            culturels, les avancées technologiques et les événements sociopolitiques ont façonné notre paysage musical
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MusicEvolutionTimeline events={musicEvolution} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Technologies et musique
              </h3>
              <p className="text-muted-foreground">
                Du phonographe au streaming, chaque avancée technologique a révolutionné la façon dont la musique est créée,
                distribuée et consommée, influençant directement l'évolution des genres musicaux.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1920s-1950s:</span> 
                  <span>Radio et disques vinyles démocratisent l'accès à la musique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1960s-1970s:</span> 
                  <span>Synthétiseurs et enregistrement multipiste ouvrent de nouvelles possibilités sonores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1980s-1990s:</span> 
                  <span>MIDI, sampling et ordinateurs transforment la production musicale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">2000s-présent:</span> 
                  <span>Production numérique et streaming remodèlent l'industrie entière</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Mouvements sociaux et musique
              </h3>
              <p className="text-muted-foreground">
                Les bouleversements sociaux et politiques ont souvent trouvé leur expression dans de nouveaux courants musicaux,
                qui sont devenus des vecteurs de changement et de contestation.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1930s-1940s:</span> 
                  <span>Protest songs durant la Grande Dépression et chansons patriotiques durant la Seconde Guerre mondiale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1960s-1970s:</span> 
                  <span>Folk et rock psychédélique accompagnent les mouvements pour les droits civiques et contre la guerre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1970s-1980s:</span> 
                  <span>Punk et early hip-hop émergent comme expressions de la jeunesse urbaine marginalisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-semibold">1990s-présent:</span> 
                  <span>Rap politique, eco-metal et protest folk reflètent les préoccupations contemporaines</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <CardTitle className="flex items-center gap-2">
              <Disc className="h-5 w-5 text-primary" />
              Interactions entre les genres
            </CardTitle>
            <Badge variant="outline">Influences croisées</Badge>
          </div>
          <CardDescription className="text-base">
            Les influences mutuelles entre genres musicaux illustrant comment les styles s'enrichissent et évoluent à travers leurs interactions.
            Cette cartographie révèle comment chaque genre est connecté aux autres dans un écosystème musical dynamique.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MusicInfluenceChartSection genres={musicInfluenceData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EvolutionSection;
