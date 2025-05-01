
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Smartphone, Globe, TrendingUp, Music } from "lucide-react";
import { contemporaryGenres } from "@/data/music/contemporaryGenres";

import ContemporaryGenresSection from "@/components/music/ContemporaryGenresSection";

const ContemporainSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          Musique à l'ère numérique
        </h2>
        <p className="text-muted-foreground text-lg">
          L'explosion des technologies numériques et de la globalisation a transformé les méthodes de création, 
          de diffusion et de consommation musicale, donnant naissance à des genres hybrides et à de nouvelles pratiques artistiques.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <CardTitle className="flex items-center gap-2">
              <Laptop className="h-5 w-5 text-primary" />
              La révolution numérique en musique
            </CardTitle>
            <Badge variant="outline">2000 - Aujourd'hui</Badge>
          </div>
          <CardDescription className="text-base">
            L'impact profond des technologies numériques et d'Internet sur l'écosystème musical contemporain,
            redéfinissant les rôles de l'artiste, du producteur et de l'auditeur.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-muted p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Production démocratisée</h3>
              <p className="text-muted-foreground text-sm">
                Les DAWs (Digital Audio Workstations) et plugins ont permis à des artistes sans formation traditionnelle ou accès aux studios 
                de créer de la musique professionnelle depuis leur chambre, bouleversant les structures établies.
              </p>
              <div className="mt-3 text-sm text-primary font-medium">Innovations clés:</div>
              <ul className="mt-1 text-sm space-y-1">
                <li>• DAWs abordables (FL Studio, Ableton)</li>
                <li>• Synthèse logicielle remplaçant le matériel coûteux</li>
                <li>• Auto-Tune et outils de correction transformés en effets créatifs</li>
              </ul>
            </div>

            <div className="bg-muted p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Distribution transformée</h3>
              <p className="text-muted-foreground text-sm">
                Du téléchargement au streaming, la distribution numérique a redéfini la façon dont la musique circule,
                éliminant les intermédiaires traditionnels tout en créant de nouveaux défis économiques.
              </p>
              <div className="mt-3 text-sm text-primary font-medium">Plateformes d'impact:</div>
              <ul className="mt-1 text-sm space-y-1">
                <li>• Napster et la révolution du partage de fichiers</li>
                <li>• iTunes et la vente de musique à la piste</li>
                <li>• Spotify et l'économie du streaming</li>
                <li>• Bandcamp et les plateformes directes artiste-fan</li>
              </ul>
            </div>

            <div className="bg-muted p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Consommation modifiée</h3>
              <p className="text-muted-foreground text-sm">
                L'accès illimité à la musique mondiale a transformé les habitudes d'écoute, favorisant à la fois
                une culture de singles et de playlists, mais aussi une redécouverte des œuvres de niche.
              </p>
              <div className="mt-3 text-sm text-primary font-medium">Changements d'écoute:</div>
              <ul className="mt-1 text-sm space-y-1">
                <li>• La culture de la playlist personnalisée</li>
                <li>• Algorithmes de recommandation et bulles de filtrage</li>
                <li>• Retour du vinyle et nostalgie analogique</li>
                <li>• Musique de fond pour activités spécifiques</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-muted rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Influence des réseaux sociaux</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Les plateformes sociales ont créé de nouveaux chemins vers le succès musical, redéfinissant la notion de célébrité
                et créant des phénomènes viraux capables de propulser des artistes inconnus vers une renommée mondiale instantanée.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">TikTok</Badge>
                  <span className="text-sm">Clips courts catapultant des chansons au sommet des charts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Instagram</Badge>
                  <span className="text-sm">Esthétique visuelle et storytelling pour construire l'image artistique</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">YouTube</Badge>
                  <span className="text-sm">Clips musicaux et reprises comme tremplin pour jeunes talents</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Twitch</Badge>
                  <span className="text-sm">Sessions live et connexion directe avec les fans</span>
                </li>
              </ul>
            </div>

            <div className="border border-muted rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Globalisation musicale</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Internet a facilité une circulation sans précédent des influences musicales entre les cultures,
                créant une scène mondiale où les traditions locales se mêlent aux tendances globales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">K-Pop</Badge>
                  <span className="text-sm">Phénomène mondial fusionnant pop coréenne et influences occidentales</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Afrobeats</Badge>
                  <span className="text-sm">Rythmes ouest-africains modernisés conquérant les charts internationaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Latino</Badge>
                  <span className="text-sm">Reggaeton et latin pop dominant la musique mainstream</span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">Internet-genres</Badge>
                  <span className="text-sm">Mouvements comme Vaporwave nés exclusivement des communautés en ligne</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-muted rounded-lg mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Technologies émergentes et futur de la musique</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Intelligence Artificielle</h4>
                <p className="text-sm text-muted-foreground">Composition assistée, mastering automatisé et voix synthétiques transformant la création</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Blockchain et NFTs</h4>
                <p className="text-sm text-muted-foreground">Nouveaux modèles économiques pour la rémunération directe des artistes et l'engagement des fans</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Réalité virtuelle</h4>
                <p className="text-sm text-muted-foreground">Concerts immersifs et nouvelles formes d'expériences musicales interactives</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-medium mb-2">Production collaborative</h4>
                <p className="text-sm text-muted-foreground">Studios virtuels permettant la création à distance entre artistes du monde entier</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Genres contemporains et émergents</h3>
          <p className="text-muted-foreground mb-6">
            Découvrez les styles musicaux qui définissent notre époque, fruits d'innovations technologiques et de croisements culturels
          </p>
          
          <ContemporaryGenresSection genres={contemporaryGenres} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContemporainSection;
