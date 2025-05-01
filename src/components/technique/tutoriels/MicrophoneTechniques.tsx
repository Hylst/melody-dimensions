
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MicrophoneTechniques = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Techniques de microphone</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Microphone en studio d'enregistrement" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Positionnement précis d'un microphone à condensateur pour l'enregistrement vocal
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction aux techniques de microphone</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Le positionnement des microphones est un art qui peut transformer radicalement la qualité de vos enregistrements. 
                Ce tutoriel vous aidera à comprendre comment positionner vos microphones pour capturer le meilleur son possible 
                pour différentes sources sonores.
              </p>
              <p>
                Que vous enregistriez de la voix, des instruments ou des ambiances, maîtriser les techniques de placement de microphone 
                est souvent plus important que d'investir dans du matériel coûteux pour obtenir des résultats professionnels.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Configuration de microphones en studio" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Comprendre les caractéristiques des microphones</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Types de microphones</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Chaque type de microphone possède ses propres caractéristiques sonores et applications idéales :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong>Dynamiques</strong> : robustes, adaptés aux sources sonores puissantes</li>
                <li><strong>À condensateur</strong> : sensibles, idéaux pour les détails et les hautes fréquences</li>
                <li><strong>À ruban</strong> : son chaud et vintage, parfaits pour adoucir les sources brillantes</li>
                <li><strong>USB</strong> : pratiques pour l'enregistrement direct sur ordinateur</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Directivité (diagrammes polaires)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                La directivité détermine d'où le microphone capte les sons :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong>Cardioïde</strong> : capte principalement les sons venant de l'avant</li>
                <li><strong>Omnidirectionnel</strong> : capte les sons venant de toutes les directions</li>
                <li><strong>Bidirectionnel</strong> : capte les sons de l'avant et de l'arrière</li>
                <li><strong>Hypercardioïde</strong> : directivité très étroite avec légère sensibilité arrière</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Types de microphones et leurs caractéristiques</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Microphones dynamiques</li>
                <li>Microphones à condensateur</li>
                <li>Microphones à ruban</li>
                <li>Microphones USB</li>
                <li>Caractéristiques techniques essentielles</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Directivité et motifs polaires</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Cardioïde et supercardioïde</li>
                <li>Omnidirectionnel</li>
                <li>Bidirectionnel (figure-8)</li>
                <li>Hypercardioïde</li>
                <li>Choix du motif selon la situation</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Techniques stéréo (XY, ORTF, MS)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Technique XY</li>
                <li>Technique ORTF</li>
                <li>Technique Mid-Side (MS)</li>
                <li>Technique AB (paire espacée)</li>
                <li>Technique Blumlein</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Positionnement pour différents instruments</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Voix et chant</li>
                <li>Guitare acoustique et électrique</li>
                <li>Piano et claviers</li>
                <li>Batterie et percussions</li>
                <li>Instruments à vent et cuivres</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Gestion de la distance et de l'effet de proximité</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Comprendre l'effet de proximité</li>
                <li>Distance microphone-source</li>
                <li>Captation proche vs. ambiance</li>
                <li>Équilibre direct/réverbération</li>
                <li>Techniques multi-microphones</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Exercices pratiques</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Comparaison de positions pour une guitare</li>
                <li>Enregistrement voix avec différentes techniques</li>
                <li>Captation d'ambiance vs. son direct</li>
                <li>Expérimentation avec angles et distances</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Techniques spécifiques illustrées</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Technique XY pour l'enregistrement stéréo</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Technique XY" 
                    className="w-32 h-32 object-cover rounded-md" 
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    La technique XY utilise deux microphones cardioïdes identiques placés à 90-135° l'un de l'autre, avec leurs capsules alignées verticalement.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-muted-foreground">
                    <li>Excellente compatibilité mono</li>
                    <li>Image stéréo cohérente</li>
                    <li>Facile à mettre en œuvre</li>
                    <li>Idéale pour les ensembles et orchestres</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Technique pour guitare acoustique</h3>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Technique pour guitare acoustique" 
                    className="w-32 h-32 object-cover rounded-md" 
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pour la guitare acoustique, pointez un microphone à condensateur à la jonction du manche et du corps (12e frette) à environ 15-20 cm.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-muted-foreground">
                    <li>Équilibre entre brillance des cordes et résonance du corps</li>
                    <li>Évite l'effet de proximité excessif</li>
                    <li>Peut être complété par un second micro vers le corps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Placement pour voix et chant</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Enregistrement voix avec filtre anti-pop" 
                className="rounded-md object-cover w-full h-64" 
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Configuration typique pour l'enregistrement vocal avec micro à condensateur et filtre anti-pop
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Placement optimal pour voix</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li className="text-sm text-muted-foreground">Placez le microphone légèrement au-dessus du niveau des yeux, pointant vers le bas en direction de la bouche</li>
                <li className="text-sm text-muted-foreground">Maintenez une distance de 15-20 cm pour un son équilibré (plus près pour plus de graves/intimité)</li>
                <li className="text-sm text-muted-foreground">Utilisez toujours un filtre anti-pop pour éliminer les plosives (sons p, b, t)</li>
                <li className="text-sm text-muted-foreground">Orientez le microphone légèrement de côté pour les chanteurs à voix puissante</li>
                <li className="text-sm text-muted-foreground">Expérimentez avec l'angle pour trouver le meilleur équilibre tonal (plus ou moins de présence)</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Techniques spéciales</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Technique Decca Tree</h3>
              <p className="text-sm text-muted-foreground">Configuration à trois microphones développée par Decca Records, idéale pour les orchestres et grands ensembles.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Technique Glyn Johns</h3>
              <p className="text-sm text-muted-foreground">Méthode célèbre pour enregistrer une batterie avec seulement quatre microphones, développée par l'ingénieur du son Glyn Johns.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Re-amping</h3>
              <p className="text-sm text-muted-foreground">Technique qui consiste à renvoyer un signal enregistré à travers un amplificateur pour le capturer à nouveau avec des microphones.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exercice pratique recommandé</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Comparaison des positions de microphone</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Pour comprendre l'impact du placement, réalisez cet exercice simple mais révélateur :
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Prenez un instrument (guitare acoustique idéalement) et un microphone de qualité moyenne</li>
              <li>Enregistrez des échantillons de 30 secondes avec le microphone placé à différentes positions :
                <ul className="list-disc pl-5 mt-1">
                  <li>Devant la rosace</li>
                  <li>Près du chevalet</li>
                  <li>Vers la 12ème frette</li>
                  <li>À 30cm de distance pointant vers le milieu</li>
                  <li>À 1m de distance pour capter l'ambiance</li>
                </ul>
              </li>
              <li>Comparez les enregistrements pour identifier les différences tonales</li>
              <li>Notez quelles positions mettent en valeur quelles caractéristiques sonores</li>
            </ol>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Documentation pour approfondir</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Pour approfondir vos connaissances sur les techniques de microphone, consultez ces ressources :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Livres spécialisés sur la prise de son</li>
              <li>Forums de discussion audio pour partager des expériences</li>
              <li>Articles techniques des fabricants de microphones</li>
              <li>Tutoriels en ligne de professionnels du son</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicrophoneTechniques;
