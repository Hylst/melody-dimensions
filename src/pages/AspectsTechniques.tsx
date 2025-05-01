
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, BookOpen, Music, Waves, Settings, Lightbulb, BookOpen as Book, Clock, Headphones } from "lucide-react";
import FrequencySpectrumCard from "@/components/FrequencySpectrumCard";
import TutorielsContent from "@/components/technique/TutorielsContent";

const AspectsTechniques = () => {
  const theorySpectrumData = [
    { name: "Fondamentale", value: 100, fill: "#8B5CF6" },
    { name: "2ᵉ harm.", value: 50, fill: "#8B5CF6" },
    { name: "3ᵉ harm.", value: 33, fill: "#8B5CF6" },
    { name: "4ᵉ harm.", value: 25, fill: "#8B5CF6" },
    { name: "5ᵉ harm.", value: 20, fill: "#8B5CF6" },
    { name: "6ᵉ harm.", value: 17, fill: "#8B5CF6" },
  ];

  const productionSpectrumData = [
    { name: "Sub", value: 45, fill: "#8B5CF6" },
    { name: "Bass", value: 65, fill: "#8B5CF6" },
    { name: "Low-mid", value: 80, fill: "#8B5CF6" },
    { name: "Mid", value: 70, fill: "#8B5CF6" },
    { name: "High-mid", value: 55, fill: "#8B5CF6" },
    { name: "High", value: 40, fill: "#8B5CF6" },
  ];

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Aspects Techniques</h1>
        <p className="text-lg text-muted-foreground">
          Explorez les fondements techniques de la musique, de la théorie à la production moderne.
        </p>
      </div>

      <Tabs defaultValue="theorie" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="theorie">Théorie Musicale</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
          <TabsTrigger value="notation">Notation</TabsTrigger>
          <TabsTrigger value="tutoriels">Tutoriels</TabsTrigger>
        </TabsList>
        
        <TabsContent value="theorie">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Les bases de la théorie musicale</CardTitle>
                  <CardDescription>Comprendre le langage de la musique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    La théorie musicale est l'ensemble des principes qui régissent l'organisation des sons dans la musique. 
                    Elle fournit le vocabulaire et la grammaire nécessaires pour comprendre, analyser et créer de la musique de manière structurée et cohérente.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notation et solfège</h3>
                      <p className="text-muted-foreground">
                        La notation musicale permet de transcrire les idées musicales sur papier, 
                        tandis que le solfège développe la capacité à lire, entendre et interpréter cette notation.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Lecture des notes sur une portée à cinq lignes</li>
                        <li>Compréhension des rythmes, mesures et tempos</li>
                        <li>Interprétation des nuances et articulations</li>
                        <li>Développement de l'oreille relative et absolue</li>
                        <li>Dictées musicales et transcription à l'oreille</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Harmonie et contrepoint</h3>
                      <p className="text-muted-foreground">
                        L'harmonie étudie la combinaison verticale des sons (accords), 
                        le contrepoint explore leur combinaison horizontale (mélodies simultanées).
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Construction et analyse des progressions d'accords</li>
                        <li>Résolution des tensions harmoniques et cadences</li>
                        <li>Règles du mouvement des voix et des bonnes conduites</li>
                        <li>Techniques d'imitation, canon et fugue</li>
                        <li>Modulation entre les tonalités différentes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Structures et formes</h3>
                      <p className="text-muted-foreground">
                        L'architecture musicale organise les idées dans le temps, créant cohérence, développement et tension narrative.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="font-medium">Formes courantes:</h4>
                        <div className="grid grid-cols-2 gap-2 mt-1 text-sm">
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme sonate</p>
                            <p className="text-xs text-muted-foreground">Exposition, développement, réexposition, coda</p>
                          </div>
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme ABA (ternaire)</p>
                            <p className="text-xs text-muted-foreground">Section, contraste, retour modifié</p>
                          </div>
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme rondo</p>
                            <p className="text-xs text-muted-foreground">ABACA... Refrain alternant avec couplets</p>
                          </div>
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme strophique</p>
                            <p className="text-xs text-muted-foreground">Même musique répétée avec texte différent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Rythme et métrique</h3>
                      <p className="text-muted-foreground">
                        Organisation des durées et des accentuations, créant mouvement, pulsation et sens de la progression temporelle.
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Métriques simples</h4>
                          <ul className="text-xs text-muted-foreground list-disc pl-4">
                            <li>Binaire: 2/4, 4/4 (C)</li>
                            <li>Ternaire: 3/4, 3/8</li>
                            <li>Unité de temps et de mesure</li>
                            <li>Anacrouse et syncopes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Métriques complexes</h4>
                          <ul className="text-xs text-muted-foreground list-disc pl-4">
                            <li>Asymétriques: 5/8, 7/4, 11/8</li>
                            <li>Composées: 6/8, 9/8, 12/8</li>
                            <li>Polymétrie et polyrythmie</li>
                            <li>Métriques non occidentales</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Intervalles et gammes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium">Types d'intervalles</h4>
                        <p className="text-xs text-muted-foreground mb-1">Distance entre deux notes, définis par leur taille et qualité:</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div>- Seconde (majeure/mineure)</div>
                          <div>- Sixte (majeure/mineure)</div>
                          <div>- Tierce (majeure/mineure)</div>
                          <div>- Septième (majeure/mineure)</div>
                          <div>- Quarte (juste/augmentée)</div>
                          <div>- Octave (juste)</div>
                          <div>- Quinte (juste/diminuée)</div>
                          <div>- Intervalles composés (9e, etc.)</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Types de gammes</h4>
                        <p className="text-xs text-muted-foreground mb-1">Séquences organisées de notes selon des intervalles spécifiques:</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div>- Majeure (mode ionien)</div>
                          <div>- Pentatonique (maj/min)</div>
                          <div>- Mineure naturelle (éolien)</div>
                          <div>- Blues et blues altérée</div>
                          <div>- Mineure harmonique</div>
                          <div>- Modes grecs (dorien, phrygien...)</div>
                          <div>- Mineure mélodique</div>
                          <div>- Gammes symétriques (tons, dim...)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 border-t border-primary/20 pt-3">
                      <h4 className="text-sm font-medium">Transposition et modulation</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Techniques permettant de changer de tonalité ou de mode, créant contraste et renouvellement de l'intérêt musical.
                        La transposition conserve les intervalles exacts, tandis que la modulation établit des connexions harmoniques entre tonalités.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <FrequencySpectrumCard
                title="Série harmonique"
                description="Base acoustique de la théorie musicale"
                data={theorySpectrumData}
              />
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Applications pratiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-medium">Composition</h3>
                      <p className="text-muted-foreground">
                        Appliquer les principes théoriques pour créer des œuvres cohérentes et expressives
                        en maîtrisant les tensions et résolutions.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Improvisation</h3>
                      <p className="text-muted-foreground">
                        Créer spontanément en s'appuyant sur les structures harmoniques et rythmiques,
                        développer une pensée musicale fluide en temps réel.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Analyse musicale</h3>
                      <p className="text-muted-foreground">
                        Décoder les œuvres pour comprendre leurs structures et techniques,
                        identifier les procédés utilisés par les compositeurs.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Éducation musicale</h3>
                      <p className="text-muted-foreground">
                        Transmettre les connaissances et développer l'oreille musicale,
                        établir des méthodes progressives d'apprentissage.
                      </p>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="font-medium">Exercices pratiques</h3>
                      <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1">
                        <li>Dictée mélodique et harmonique</li>
                        <li>Réalisation de basses chiffrées</li>
                        <li>Analyse harmonique d'œuvres</li>
                        <li>Composition de courtes pièces</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="production">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Production musicale</CardTitle>
                  <CardDescription>Du studio à la diffusion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    La production musicale englobe tous les aspects techniques et artistiques de la réalisation sonore, 
                    de l'enregistrement au mastering, permettant de transformer une idée musicale en un produit fini prêt pour la diffusion.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Enregistrement</h3>
                      <p className="text-muted-foreground">
                        Des techniques de prise de son aux équipements spécialisés, 
                        découvrez comment capturer le son avec précision, clarté et caractère.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Techniques essentielles:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Placement de microphones (techniques stéréo)</li>
                          <li>Traitement du signal analogique et numérique</li>
                          <li>Préamplification et coloration sonore</li>
                          <li>Conversion A/N à haute résolution</li>
                          <li>Gestion des prises multiples et comping</li>
                          <li>Enregistrement multipistes simultané</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Mixage</h3>
                      <p className="text-muted-foreground">
                        L'art d'équilibrer les différents éléments sonores pour créer un ensemble cohérent, 
                        dynamique et immersif adapté au contexte artistique visé.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Outils de mixage:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Égalisation précise par bandes</li>
                          <li>Compression dynamique et parallèle</li>
                          <li>Effets spatiaux (reverb, delay, modulation)</li>
                          <li>Automation de paramètres</li>
                          <li>Bus, groupes et traitement par chaînes</li>
                          <li>Gestion de l'image stéréo et surround</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Mastering</h3>
                      <p className="text-muted-foreground">
                        La touche finale qui optimise le son pour différentes plateformes de diffusion 
                        et assure la cohérence entre les morceaux d'un projet ou album.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Processus de mastering:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Égalisation tonale globale</li>
                          <li>Compression multi-bande et limiteur</li>
                          <li>Maximisation adaptative du niveau</li>
                          <li>Enhancement stéréo contrôlé</li>
                          <li>Préparation formats (streaming, vinyle, CD)</li>
                          <li>Gestion des métadonnées</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Workflow de production</h3>
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-[15%] w-0.5 bg-primary/20"></div>
                      
                      <div className="grid md:grid-cols-5 gap-4 relative">
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">1. Pré-production</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Planification, arrangements, maquettes, tests sonores et préparation sessions
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">2. Enregistrement</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Captation des instruments, pistes multipistes, corrections rythmiques, édition des prises
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">3. Édition</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Sélection des meilleures prises, correction rythmique/mélodique, nettoyage audio
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">4. Mixage</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Balance, effets, automation, spatialisation, traitement général
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">5. Mastering</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Finalisation, optimisation pour diffusion, cohérence entre morceaux
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Rôle du producteur</h3>
                      <p className="text-muted-foreground">
                        Au-delà de la technique, le producteur est souvent un collaborateur créatif qui aide à concrétiser la vision artistique tout en apportant sa propre sensibilité.
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Direction artistique</p>
                          <p className="text-xs text-muted-foreground">Guider les choix esthétiques et la cohérence globale</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Gestion de projet</p>
                          <p className="text-xs text-muted-foreground">Budget, planning, coordination des intervenants</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Coaching d'artistes</p>
                          <p className="text-xs text-muted-foreground">Optimiser les performances des musiciens</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Expertise technique</p>
                          <p className="text-xs text-muted-foreground">Conseiller sur les méthodes et équipements</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Styles de production</h3>
                      <p className="text-muted-foreground">
                        Chaque genre musical a ses conventions de production qui définissent son identité sonore et sa signature acoustique distinctive.
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Production organique</p>
                          <p className="text-xs text-muted-foreground">Folk, jazz acoustique, musique de chambre</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Production dense</p>
                          <p className="text-xs text-muted-foreground">Pop moderne, EDM, metal symphonique</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Approche minimaliste</p>
                          <p className="text-xs text-muted-foreground">Ambient, musique expérimentale</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Production hybride</p>
                          <p className="text-xs text-muted-foreground">Trip-hop, électro-acoustique</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <FrequencySpectrumCard
                title="Spectre audible"
                description="Répartition typique des fréquences en production"
                data={productionSpectrumData}
              />
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Configuration de studio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Home Studio Accessible</h3>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-0.5">
                      <li>Interface audio (2-4 entrées)</li>
                      <li>Microphones polyvalents</li>
                      <li>Casque de monitoring fermé</li>
                      <li>DAW (station audionumérique)</li>
                      <li>Traitement acoustique basique</li>
                      <li>Contrôleurs MIDI</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Studio Professionnel</h3>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-0.5">
                      <li>Console de mixage analogique/numérique</li>
                      <li>Convertisseurs haut de gamme</li>
                      <li>Collection de microphones spécialisés</li>
                      <li>Monitoring précis calibré pour la pièce</li>
                      <li>Traitement acoustique adapté</li>
                      <li>Outboard hardware (compresseurs, préamps)</li>
                      <li>Cabines d'isolation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-lg">
                    <h3 className="text-sm font-medium">Logiciels essentiels</h3>
                    <div className="grid grid-cols-2 gap-1 mt-2 text-xs">
                      <div>• DAW (Pro Tools, Logic, Ableton...)</div>
                      <div>• Plugins d'égalisation</div>
                      <div>• Plugins de dynamique</div>
                      <div>• Reverbs et delays</div>
                      <div>• Instruments virtuels</div>
                      <div>• Outils d'analyse audio</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm">
                    <p className="italic text-muted-foreground">
                      "Le meilleur équipement est celui qui vous permet de capturer votre vision créative sans obstacles techniques, mais la connaissance de son utilisation reste primordiale."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="technologies">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Technologies musicales</CardTitle>
              <CardDescription>L'impact du numérique sur la création musicale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Les technologies ont profondément transformé la façon dont la musique est créée, 
                produite, distribuée et consommée, offrant de nouvelles possibilités créatives tout en redéfinissant
                la relation entre créateurs et auditeurs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    DAW et instruments virtuels
                  </h3>
                  <p className="text-muted-foreground">
                    Les stations de travail audio numériques et les instruments virtuels 
                    ont démocratisé la production musicale, transformant l'ordinateur en un studio complet.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="text-sm font-medium">Écosystème DAW moderne:</h4>
                    <div className="grid grid-cols-2 gap-1 mt-1 text-xs">
                      <div>• Ableton Live (performance)</div>
                      <div>• Logic Pro (production)</div>
                      <div>• Pro Tools (industrie/standard)</div>
                      <div>• FL Studio (production électronique)</div>
                      <div>• Cubase (composition)</div>
                      <div>• Reaper (lightweight/personnalisable)</div>
                      <div>• Ardour (open source)</div>
                      <div>• Bitwig (modulation avancée)</div>
                    </div>
                    <h4 className="text-sm font-medium mt-3">Instruments virtuels innovants:</h4>
                    <div className="grid grid-cols-2 gap-1 mt-1 text-xs">
                      <div>• Synthèse spectrale</div>
                      <div>• Modélisation physique</div>
                      <div>• Échantillonnage granulaire</div>
                      <div>• Synthèse par convolution</div>
                      <div>• Synthétiseurs modulaires virtuels</div>
                      <div>• Instruments hybrides</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Waves className="h-5 w-5 text-muted-foreground" />
                    Traitement audio avancé
                  </h3>
                  <p className="text-muted-foreground">
                    Les algorithmes modernes permettent des manipulations du son autrefois impossibles,
                    brouillant la frontière entre correction technique et création artistique.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Correction de hauteur</p>
                      <p className="text-xs text-muted-foreground">Auto-Tune, Melodyne, manipulation formantique</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Time-stretching</p>
                      <p className="text-xs text-muted-foreground">Élastique Pro, Warp, algorithmes complexes</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Restauration audio</p>
                      <p className="text-xs text-muted-foreground">Débruitage spectral, dé-clipping, réverbération</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Spatialisation 3D</p>
                      <p className="text-xs text-muted-foreground">Ambisonics, binaural, audio objet (Dolby Atmos)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-muted-foreground" />
                    Intelligence artificielle
                  </h3>
                  <p className="text-muted-foreground">
                    De la composition assistée au mastering automatisé, l'IA transforme rapidement 
                    les processus créatifs et techniques tout en soulevant des questions éthiques et esthétiques.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Composition générative</p>
                      <p className="text-xs text-muted-foreground">Modèles audioML, AIVA, Amper Music</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Mastering automatisé</p>
                      <p className="text-xs text-muted-foreground">LANDR, iZotope Ozone, Dolby.io</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Séparation de sources</p>
                      <p className="text-xs text-muted-foreground">deezer/Spleeter, AudioSourceSeparation</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Synthèse vocale musicale</p>
                      <p className="text-xs text-muted-foreground">VOCALOID, Synthesizer V, RVC</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Évolution des technologies musicales</h3>
                <div className="relative">
                  <div className="absolute top-0 left-[5%] bottom-0 w-0.5 bg-primary/20"></div>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">1980s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Révolution MIDI et synthétiseurs numériques</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          L'adoption du protocole MIDI en 1983 permet aux instruments électroniques de communiquer entre eux.
                          Les synthétiseurs comme le Yamaha DX7 (synthèse FM) et le Roland D-50 (L/A synthesis) définissent le son de la décennie.
                          Les samplers numériques comme l'Emulator et l'Akai S900 révolutionnent la création sonore.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">1990s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Production assistée par ordinateur</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les premiers séquenceurs et DAW comme Cubase, Pro Tools et Logic transforment les ordinateurs personnels
                          en studios virtuels. La démocratisation des graveurs CD facilite l'autoproduction.
                          Le format MP3 apparaît en 1993 et commence à transformer la distribution musicale.
                          La musique électronique explose en popularité avec l'émergence de nouveaux outils hardware et software.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">2000s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Démocratisation et virtualisation</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Des logiciels comme FL Studio et Reason deviennent accessibles au grand public.
                          Napster et le peer-to-peer initient une révolution dans la distribution musicale.
                          L'Auto-Tune passe d'outil de correction à effet créatif dans le R&B et la pop.
                          Les instruments virtuels et plugins deviennent assez puissants pour remplacer
                          leurs équivalents hardware coûteux. L'iPod et iTunes révolutionnent la consommation musicale.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">2010s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Mobile, cloud et streaming</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les applications musicales sur tablettes et smartphones permettent la création en mobilité.
                          Le streaming transforme la consommation musicale avec Spotify, Apple Music et autres.
                          Les services cloud facilitent la collaboration à distance entre musiciens.
                          La puissance des appareils mobiles permet le développement d'applications de production
                          comme GarageBand iOS, Korg Gadget et des synthétiseurs professionnels pour iPad.
                          Les home studios atteignent un niveau de qualité comparable aux studios professionnels à moindre coût.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">2020s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">IA, XR et décentralisation</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les algorithmes d'IA génèrent des compositions, assistent le mixage et le mastering.
                          Les interfaces haptiques et la réalité mixte (XR) transforment l'interaction avec les instruments virtuels.
                          La technologie blockchain et les NFT ouvrent de nouvelles perspectives pour les droits d'auteur et la monétisation.
                          Les modèles génératifs permettent de créer des sons à partir de descriptions textuelles.
                          L'audio spatial et les formats immersifs comme Dolby Atmos deviennent standards dans l'industrie.
                          La collaboration à distance se normalise avec des plateformes comme Splice et BandLab.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Impacts sur les pratiques musicales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Création sans frontières</h3>
                  <p className="text-sm text-muted-foreground">
                    La technologie a permis aux musiciens de collaborer à distance en temps réel, effaçant les contraintes géographiques
                    et facilitant les échanges interculturels et stylistiques.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Hybridation des processus</h3>
                  <p className="text-sm text-muted-foreground">
                    Les frontières entre composition, production et performance se sont estompées,
                    créant un processus créatif plus fluide, itératif et non-linéaire.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Nouvelles esthétiques</h3>
                  <p className="text-sm text-muted-foreground">
                    Des genres comme l'ambient, le glitch, l'IDM, le vaporwave ou l'hyperpop
                    sont nés directement de l'exploitation créative des technologies numériques
                    et de leurs caractéristiques sonores spécifiques.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Accessibilité et inclusion</h3>
                  <p className="text-sm text-muted-foreground">
                    Les outils numériques ont rendu la création musicale accessible à un public plus large,
                    y compris les personnes à mobilité réduite pour qui les instruments traditionnels
                    peuvent poser des difficultés. Des contrôleurs adaptés et des interfaces alternatives
                    ouvrent de nouvelles possibilités d'expression.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Enjeux contemporains</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Propriété intellectuelle</h3>
                  <p className="text-sm text-muted-foreground">
                    L'échantillonnage, l'IA générative et le remix posent de nouvelles questions 
                    juridiques et éthiques sur la nature de la création, l'originalité et les droits d'auteur.
                    La blockchain et les contrats intelligents émergent comme solutions potentielles.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Surcharge d'options</h3>
                  <p className="text-sm text-muted-foreground">
                    La profusion d'outils peut créer une paralysie de choix et détourner l'attention du processus créatif.
                    En réaction, certains artistes reviennent à des contraintes volontaires (workflow limité,
                    équipement minimaliste) pour stimuler leur créativité.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Durabilité numérique</h3>
                  <p className="text-sm text-muted-foreground">
                    L'obsolescence logicielle, les formats propriétaires et la dépendance aux services cloud
                    menacent l'accessibilité à long terme des œuvres numériques. Des initiatives d'archivage
                    et de standards ouverts émergent pour préserver le patrimoine musical numérique.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Équilibre humain-machine</h3>
                  <p className="text-sm text-muted-foreground">
                    À mesure que l'IA devient plus sophistiquée dans la génération musicale, la question de l'authenticité
                    et de la valeur de l'expression humaine dans la création artistique se fait plus pressante.
                    Des approches hybrides émergent, où l'IA devient un collaborateur plutôt qu'un remplaçant.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notation">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Systèmes de notation musicale</CardTitle>
                  <CardDescription>L'écriture de la musique à travers les cultures et les époques</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    La notation musicale permet de préserver et transmettre les idées musicales au-delà de la tradition orale. 
                    Différentes cultures et traditions ont développé leurs propres systèmes adaptés à leurs besoins spécifiques.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notation occidentale</h3>
                      <p className="text-muted-foreground">
                        Le système de portées à 5 lignes avec des notes et rythmes standardisés, développé progressivement depuis le Moyen Âge.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Éléments clés:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Clés (sol, fa, ut)</li>
                          <li>Altérations (dièses, bémols)</li>
                          <li>Figures rythmiques</li>
                          <li>Indications d'expression</li>
                          <li>Organisation en mesures</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notations alternatives</h3>
                      <p className="text-muted-foreground">
                        Des systèmes développés pour répondre à des besoins spécifiques ou simplifier l'apprentissage musical.
                      </p>
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Tablature</h4>
                          <p className="text-xs text-muted-foreground">
                            Système indiquant les positions des doigts plutôt que les hauteurs de notes,
                            couramment utilisé pour guitare et autres instruments à frettes.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Notation Chiffrée</h4>
                          <p className="text-xs text-muted-foreground">
                            Utilisation de chiffres pour représenter les degrés d'une gamme, comme dans
                            la méthode Kodály ou certaines notations pour musique chinoise.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notations contemporaines</h3>
                      <p className="text-muted-foreground">
                        Innovations graphiques du 20ème siècle pour représenter de nouveaux sons et techniques.
                      </p>
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Notation graphique</h4>
                          <p className="text-xs text-muted-foreground">
                            Utilisation de symboles visuels non standardisés pour suggérer des gestes sonores,
                            popularisée par des compositeurs comme John Cage et Karlheinz Stockhausen.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Notation électronique</h4>
                          <p className="text-xs text-muted-foreground">
                            Représentations spécifiques pour musique électronique et concrète,
                            comme les sonagrammes et les séquenceurs visuels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Évolution de la notation occidentale</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Neumes médiévaux</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          8ème-11ème siècles: Symboles placés au-dessus du texte pour indiquer des contours mélodiques approximatifs
                        </p>
                      </div>
                      
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Notation sur portée</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          11ème siècle: Guido d'Arezzo développe un système avec lignes horizontales pour préciser les hauteurs
                        </p>
                      </div>
                      
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Notation mensurelle</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          13ème-16ème siècles: Symbolisation précise des durées et rythmes pour la polyphonie
                        </p>
                      </div>
                      
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Notation moderne</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          17ème siècle à aujourd'hui: Standardisation du système avec barres de mesure et indications expressives
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notations non-occidentales</h3>
                      <p className="text-muted-foreground">
                        Divers systèmes développés à travers le monde selon les besoins spécifiques de différentes traditions musicales.
                      </p>
                      <div className="grid grid-cols-1 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Notation chinoise Jianpu</p>
                          <p className="text-xs text-muted-foreground">Système numérique (1-7) pour représenter les notes d'une gamme</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Sargam indien</p>
                          <p className="text-xs text-muted-foreground">Syllabes (Sa, Re, Ga, Ma...) pour les notes, avec symboles pour les ornements</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Notation arabe</p>
                          <p className="text-xs text-muted-foreground">Systèmes adaptés aux micro-intervalles et modes maqam spécifiques</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Outils numériques</h3>
                      <p className="text-muted-foreground">
                        L'ère informatique a révolutionné l'édition et la diffusion de la notation musicale.
                      </p>
                      <div className="space-y-4 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Logiciels d'édition de partitions</h4>
                          <div className="grid grid-cols-3 gap-1 mt-1 text-xs">
                            <div className="bg-primary/10 p-1 rounded text-center">Finale</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Sibelius</div>
                            <div className="bg-primary/10 p-1 rounded text-center">MuseScore</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Dorico</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Notion</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Flat.io</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Formats numériques</h4>
                          <div className="grid grid-cols-3 gap-1 mt-1 text-xs">
                            <div className="bg-primary/10 p-1 rounded text-center">MusicXML</div>
                            <div className="bg-primary/10 p-1 rounded text-center">MIDI</div>
                            <div className="bg-primary/10 p-1 rounded text-center">PDF</div>
                            <div className="bg-primary/10 p-1 rounded text-center">LilyPond</div>
                            <div className="bg-primary/10 p-1 rounded text-center">MEI</div>
                            <div className="bg-primary/10 p-1 rounded text-center">OMR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Applications pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium">Composition</h3>
                    <p className="text-muted-foreground">
                      La notation permet aux compositeurs de développer des structures complexes et d'assurer la transmission fidèle de leurs œuvres.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Interprétation</h3>
                    <p className="text-muted-foreground">
                      Pour les interprètes, la notation sert de guide tout en laissant une marge d'expression personnelle.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Analyse musicale</h3>
                    <p className="text-muted-foreground">
                      La représentation visuelle facilite l'étude des structures, motifs et techniques compositionnelles.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Pédagogie</h3>
                    <p className="text-muted-foreground">
                      Différents systèmes de notation sont adaptés à différents niveaux d'apprentissage et traditions d'enseignement.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compétences connexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="text-sm font-medium">Lecture à vue</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Capacité à jouer ou chanter une partition lors d'une première lecture, 
                        compétence essentielle pour les musiciens professionnels.
                      </p>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="text-sm font-medium">Transcription</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Art de mettre par écrit une musique entendue, nécessitant une oreille affûtée et une connaissance approfondie de la notation.
                      </p>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="text-sm font-medium">Orchestration</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Connaissance des techniques d'écriture pour différents instruments et ensembles,
                        tenant compte de leurs spécificités et registres.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-sm italic text-center text-muted-foreground p-4 bg-primary/5 rounded-lg">
                <p>"La notation est à la musique ce que la carte est au territoire : une représentation utile mais incomplète."</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tutoriels">
          <TutorielsContent />
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Ressources techniques</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Guides pratiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Des tutoriels pas à pas pour maîtriser les différents aspects de la production musicale, de l'enregistrement au mixage.
              </p>
              <Button asChild variant="outline">
                <Link to="/technique/guides">Consulter les guides</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Outils et logiciels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Une sélection d'outils recommandés pour la création musicale, avec des comparatifs et des conseils d'utilisation.
              </p>
              <Button asChild variant="outline">
                <Link to="/technique/outils">Découvrir les outils</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-primary" />
                Tutoriels pratiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Des guides étape par étape pour apprendre l'édition audio, l'enregistrement et le mixage avec des logiciels gratuits.
              </p>
              <Button asChild variant="outline">
                <Link to="/technique/tutoriels">Explorer les tutoriels</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Formation continue</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Parcours d'apprentissage</h3>
            <p className="text-muted-foreground mb-3">
              Suivez nos programmes structurés pour approfondir vos connaissances techniques.
            </p>
            <div className="space-y-2">
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Production électronique</p>
                  <p className="text-xs text-muted-foreground">Du débutant au niveau avancé</p>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Ingénierie du son</p>
                  <p className="text-xs text-muted-foreground">Techniques professionnelles</p>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Composition moderne</p>
                  <p className="text-xs text-muted-foreground">De l'inspiration à la partition</p>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Workshops et masterclasses</h3>
            <p className="text-muted-foreground mb-3">
              Sessions intensives avec des professionnels pour perfectionner vos compétences.
            </p>
            <Button className="w-full" variant="default">
              Consulter le calendrier
            </Button>
            <p className="text-sm text-center text-muted-foreground mt-3">
              Formats disponibles en présentiel et en ligne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AspectsTechniques;
