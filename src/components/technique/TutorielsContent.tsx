
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Headphones, 
  Mic, 
  Music, 
  Play, 
  Volume2, 
  FileAudio, 
  VideoIcon, 
  FileMusic,
  Disc
} from "lucide-react";

const TutorielsContent = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tutoriels Audio Pratiques</CardTitle>
            <CardDescription>
              Apprenez les techniques d'édition audio, d'enregistrement, de mixage et de mastering avec des logiciels gratuits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Cette section propose des tutoriels pratiques pour vous aider à maîtriser les différentes étapes de la production audio. 
              Tous nos tutoriels utilisent des logiciels gratuits ou open source pour vous permettre de mettre en pratique les techniques présentées sans investissement financier.
            </p>

            <Tabs defaultValue="edition" className="mt-6">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="edition">Édition Audio</TabsTrigger>
                <TabsTrigger value="enregistrement">Enregistrement</TabsTrigger>
                <TabsTrigger value="mixage">Mixage</TabsTrigger>
                <TabsTrigger value="mastering">Mastering</TabsTrigger>
              </TabsList>

              <TabsContent value="edition" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels d'édition audio</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileAudio className="h-5 w-5 text-primary" />
                          Audacity - Les bases
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Débutant</Badge>
                      </div>
                      <CardDescription>Apprenez les fondamentaux d'Audacity pour l'édition audio simple</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Installation et configuration d'Audacity</li>
                          <li>Interface utilisateur et navigation</li>
                          <li>Importer et exporter des fichiers audio</li>
                          <li>Couper, copier et coller des segments audio</li>
                          <li>Ajuster le volume et normalisation</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/audacity-basics">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileAudio className="h-5 w-5 text-primary" />
                          Nettoyage audio avec Audacity
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Intermédiaire</Badge>
                      </div>
                      <CardDescription>Techniques pour éliminer le bruit et améliorer la qualité audio</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Réduction de bruit avec profil</li>
                          <li>Suppression des craquements et clics</li>
                          <li>Égalisation corrective</li>
                          <li>Suppression des sifflements</li>
                          <li>Restauration d'enregistrements anciens</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/audacity-cleaning">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileAudio className="h-5 w-5 text-primary" />
                          Ardour - Édition multipiste
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Intermédiaire</Badge>
                      </div>
                      <CardDescription>Maîtrisez l'édition multipiste avec ce DAW open source puissant</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Configuration de la session Ardour</li>
                          <li>Importation et organisation des pistes</li>
                          <li>Édition non-destructive</li>
                          <li>Utilisation des marqueurs et régions</li>
                          <li>Techniques d'édition avancées</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/ardour-multitrack">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileAudio className="h-5 w-5 text-primary" />
                          LMMS - Création et édition MIDI
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Débutant</Badge>
                      </div>
                      <CardDescription>Apprenez à utiliser cet outil gratuit pour la création musicale MIDI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Interface de LMMS et navigation</li>
                          <li>Création de patterns MIDI</li>
                          <li>Utilisation des instruments virtuels</li>
                          <li>Édition des notes et vélocités</li>
                          <li>Exportation vers différents formats</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/lmms-midi">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Parcours d'apprentissage : Édition Audio</CardTitle>
                    <CardDescription>Suivez ce parcours pour maîtriser l'édition audio de A à Z</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Niveau 1: Concepts fondamentaux</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Niveau 2: Techniques intermédiaires</span>
                          <span className="text-sm font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Niveau 3: Édition avancée</span>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                        <Progress value={10} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Commencer le parcours</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="enregistrement" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels d'enregistrement audio</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Mic className="h-5 w-5 text-primary" />
                          Configuration d'un home studio
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Débutant</Badge>
                      </div>
                      <CardDescription>Apprenez à configurer votre espace d'enregistrement à petit budget</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Choix du matériel minimal nécessaire</li>
                          <li>Traitement acoustique DIY</li>
                          <li>Configuration de l'interface audio</li>
                          <li>Positionnement optimal du matériel</li>
                          <li>Test et calibration du système</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/home-studio">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Mic className="h-5 w-5 text-primary" />
                          Cakewalk - Enregistrement multipiste
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Intermédiaire</Badge>
                      </div>
                      <CardDescription>Maîtrisez l'enregistrement multipiste avec ce DAW gratuit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Installation et configuration de Cakewalk</li>
                          <li>Configuration des entrées et sorties audio</li>
                          <li>Enregistrement sur plusieurs pistes simultanément</li>
                          <li>Punch-in et punch-out</li>
                          <li>Gestion des prises multiples</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/cakewalk-recording">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Mic className="h-5 w-5 text-primary" />
                          Techniques de microphone
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Tous niveaux</Badge>
                      </div>
                      <CardDescription>Découvrez comment positionner les microphones pour un son optimal</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Types de microphones et leurs caractéristiques</li>
                          <li>Directivité et motifs polaires</li>
                          <li>Techniques stéréo (XY, ORTF, MS)</li>
                          <li>Positionnement pour différents instruments</li>
                          <li>Gestion de la distance et de l'effet de proximité</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/microphone-techniques">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Disc className="h-5 w-5 text-primary" />
                          Enregistrement avec un smartphone
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Débutant</Badge>
                      </div>
                      <CardDescription>Maximisez la qualité de vos enregistrements avec le matériel que vous avez déjà</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Applications d'enregistrement recommandées</li>
                          <li>Microphones externes pour smartphone</li>
                          <li>Techniques pour réduire le bruit ambiant</li>
                          <li>Transfert et traitement des enregistrements</li>
                          <li>Astuces pour améliorer la qualité sonore</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/smartphone-recording">Voir le tutoriel</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="mixage" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels de mixage audio</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Volume2 className="h-5 w-5 text-primary" />
                          Principes fondamentaux du mixage
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Débutant</Badge>
                      </div>
                      <CardDescription>Les bases pour créer un mixage équilibré</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Niveaux et équilibre entre les pistes</li>
                          <li>Panoramique et placement stéréo</li>
                          <li>Principe de l'égalisation basique</li>
                          <li>Utilisation de la compression simple</li>
                          <li>Organisation du workflow de mixage</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Volume2 className="h-5 w-5 text-primary" />
                          Mixage avec Ardour
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Intermédiaire</Badge>
                      </div>
                      <CardDescription>Techniques de mixage avancées avec ce DAW open source</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Configuration de la console de mixage</li>
                          <li>Utilisation des plugins natifs d'Ardour</li>
                          <li>Création de groupes et bus de mixage</li>
                          <li>Automation des paramètres</li>
                          <li>Techniques de mixage créatives</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Volume2 className="h-5 w-5 text-primary" />
                          Effets spatiaux avec Cakewalk
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Intermédiaire</Badge>
                      </div>
                      <CardDescription>Créez de la profondeur dans vos mix avec la reverb et le delay</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Création d'un espace sonore cohérent</li>
                          <li>Utilisation de la réverbération</li>
                          <li>Techniques de delay et écho</li>
                          <li>Configuration des bus d'effets</li>
                          <li>Automatisation des effets spatiaux</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <Volume2 className="h-5 w-5 text-primary" />
                          Plugins VST gratuits essentiels
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Tous niveaux</Badge>
                      </div>
                      <CardDescription>Les meilleurs plugins VST gratuits pour améliorer votre mixage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Installation et gestion des plugins</li>
                          <li>Égaliseurs gratuits de qualité</li>
                          <li>Compresseurs et limiteurs recommandés</li>
                          <li>Effets créatifs intéressants</li>
                          <li>Organisation d'une collection de plugins efficace</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="mastering" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels de mastering audio</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileMusic className="h-5 w-5 text-primary" />
                          Introduction au mastering
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Débutant</Badge>
                      </div>
                      <CardDescription>Comprendre les fondamentaux du mastering audio</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Différences entre mixage et mastering</li>
                          <li>Configuration de l'environnement d'écoute</li>
                          <li>Chaîne de traitement typique</li>
                          <li>Analyse de références commerciales</li>
                          <li>Préparation des fichiers pour distribution</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileMusic className="h-5 w-5 text-primary" />
                          Mastering avec Audacity
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Intermédiaire</Badge>
                      </div>
                      <CardDescription>Finalisez vos projets avec des outils gratuits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Workflow de mastering dans Audacity</li>
                          <li>EQ de mastering efficace</li>
                          <li>Compression multibande avec des plugins gratuits</li>
                          <li>Gestion des niveaux et loudness</li>
                          <li>Exportation aux formats de distribution</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileMusic className="h-5 w-5 text-primary" />
                          Loudness et normalisation
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Avancé</Badge>
                      </div>
                      <CardDescription>Comprendre et respecter les standards de l'industrie</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Normes de loudness pour différentes plateformes</li>
                          <li>Mesure LUFS et True Peak</li>
                          <li>Plugins de mesure gratuits</li>
                          <li>Techniques de maximisation sans distorsion</li>
                          <li>Préparation pour le streaming et supports physiques</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <FileMusic className="h-5 w-5 text-primary" />
                          Mastering d'album cohérent
                        </CardTitle>
                        <Badge variant="outline" className="ml-2">Avancé</Badge>
                      </div>
                      <CardDescription>Créez un album qui sonne de manière uniforme</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Organisation des sessions par album</li>
                          <li>Comparaison entre pistes</li>
                          <li>Égalisation spectrale pour la cohérence</li>
                          <li>Gestion des transitions entre morceaux</li>
                          <li>Finalisation et vérification de l'album</li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Voir le tutoriel</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Logiciels gratuits recommandés</CardTitle>
            <CardDescription>Des outils de qualité accessibles à tous les budgets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-md">
                <h3 className="font-medium">Audacity</h3>
                <p className="text-sm text-muted-foreground">Éditeur audio multiplateforme simple mais puissant, parfait pour l'édition de base, l'enregistrement et les traitements simples.</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline">Windows</Badge>
                  <Badge variant="outline">Mac</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </div>
              
              <div className="bg-muted p-3 rounded-md">
                <h3 className="font-medium">Cakewalk by BandLab</h3>
                <p className="text-sm text-muted-foreground">DAW professionnel devenu gratuit, offrant des fonctionnalités de niveau professionnel pour l'enregistrement, l'édition et le mixage.</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline">Windows</Badge>
                </div>
              </div>
              
              <div className="bg-muted p-3 rounded-md">
                <h3 className="font-medium">Ardour</h3>
                <p className="text-sm text-muted-foreground">DAW open source avancé avec des fonctionnalités professionnelles, idéal pour l'enregistrement multipiste et le mixage.</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline">Windows</Badge>
                  <Badge variant="outline">Mac</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </div>
              
              <div className="bg-muted p-3 rounded-md">
                <h3 className="font-medium">LMMS</h3>
                <p className="text-sm text-muted-foreground">Séquenceur et studio de création musicale axé sur la production de musique électronique et l'édition MIDI.</p>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline">Windows</Badge>
                  <Badge variant="outline">Mac</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conseils pour débutants</CardTitle>
            <CardDescription>Astuces pour progresser rapidement en production audio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Commencez avec un bon monitoring</h3>
                <p className="text-sm text-muted-foreground">Un bon casque de monitoring est un meilleur investissement initial que des enceintes dans un espace non traité acoustiquement.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Maîtrisez un logiciel à la fois</h3>
                <p className="text-sm text-muted-foreground">Plutôt que d'essayer plusieurs DAW, concentrez-vous sur la maîtrise complète d'un seul au début.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Entraînez votre oreille</h3>
                <p className="text-sm text-muted-foreground">Développez votre capacité à identifier les fréquences et les problèmes sonores avec des exercices d'écoute critique réguliers.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Référencez-vous</h3>
                <p className="text-sm text-muted-foreground">Comparez toujours votre travail avec des productions commerciales de qualité dans un genre similaire.</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Terminez vos projets</h3>
                <p className="text-sm text-muted-foreground">Résistez à la tentation de laisser des projets inachevés. Finir un projet, même imparfaitement, est plus formateur que d'en commencer plusieurs sans les terminer.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TutorielsContent;
