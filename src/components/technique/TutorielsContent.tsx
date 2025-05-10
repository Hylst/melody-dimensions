
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1598626618400-2176dbe3e5b1?q=80&w=1000" 
                          alt="Mastering audio" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Fondamentaux du mastering audio</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=1000" 
                          alt="Nettoyage audio" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Réduction de bruit et restauration audio</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1000" 
                          alt="Interface Ardour" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Édition multipiste professionnelle</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1000" 
                          alt="Édition MIDI" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Création et édition de patterns MIDI</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" 
                          alt="Home studio setup" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Configuration d'un studio à domicile</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000" 
                          alt="Enregistrement multipiste" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Console d'enregistrement multipiste</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=1000" 
                          alt="Techniques de microphone" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Positionnement optimal des microphones</p>
                        </div>
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
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1598626618400-2176dbe3e5b1?q=80&w=1000" 
                          alt="Mastering audio" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Fondamentaux du mastering audio</p>
                        </div>
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
                      <CardDescription>Les bases pour créer un mixage équilibré et professionnel</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1000" 
                          alt="Console de mixage" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Techniques fondamentales pour un mixage équilibré</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Niveaux et équilibre entre les pistes</li>
                          <li>Panoramique et création d'un champ stéréo cohérent</li>
                          <li>Égalisation pour clarté et définition</li>
                          <li>Compression dynamique et contrôle du volume</li>
                          <li>Organisation d'un workflow de mixage efficace</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-3 bg-muted/50 rounded-md">
                        <h4 className="text-sm font-medium mb-2">Conseil pratique</h4>
                        <p className="text-xs text-muted-foreground">Commencez toujours par un "mixage à blanc" avec tous les faders à -∞, puis montez progressivement chaque élément en commençant par les plus importants (généralement voix/batterie). Cette approche permet d'obtenir un meilleur équilibre qu'en partant de niveaux élevés.</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/mixage-fondamentaux">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Techniques de mixage avancées avec ce DAW open source professionnel</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000" 
                          alt="Mixage professionnel" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Techniques de mixage avancées avec Ardour</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Configuration optimale de la console de mixage</li>
                          <li>Utilisation des plugins natifs et LV2/VST</li>
                          <li>Création de groupes, bus et VCA pour un workflow efficace</li>
                          <li>Automation précise des paramètres et enveloppes</li>
                          <li>Techniques de mixage créatives et immersives</li>
                        </ul>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="p-2 bg-muted/50 rounded-md">
                          <h4 className="text-xs font-medium mb-1">Étape 1: Préparation</h4>
                          <div className="h-12 bg-muted rounded relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs">Organisation des pistes</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 bg-muted/50 rounded-md">
                          <h4 className="text-xs font-medium mb-1">Étape 2: Traitement</h4>
                          <div className="h-12 bg-muted rounded relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs">Application des effets</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 bg-muted/50 rounded-md">
                          <h4 className="text-xs font-medium mb-1">Étape 3: Automation</h4>
                          <div className="h-12 bg-muted rounded relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs">Création d'enveloppes</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 bg-muted/50 rounded-md">
                          <h4 className="text-xs font-medium mb-1">Étape 4: Finalisation</h4>
                          <div className="h-12 bg-muted rounded relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs">Mixage final</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/ardour-mixing">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Créez une image sonore tridimensionnelle avec les effets spatiaux</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000" 
                          alt="Effets spatiaux" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Création d'une profondeur sonore immersive</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Conception d'un espace sonore tridimensionnel</li>
                          <li>Réverbération: algorithmes, paramètres et applications</li>
                          <li>Delay: synchronisation, feedback et modulation</li>
                          <li>Configuration avancée des bus d'effets parallèles</li>
                          <li>Automation dynamique des paramètres spatiaux</li>
                        </ul>
                      </div>
                      <div className="mt-4 relative bg-muted/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2">Visualisation de l'espace sonore</h4>
                        <div className="relative h-32 bg-gradient-to-b from-muted/10 to-muted/50 rounded-md overflow-hidden">
                          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                            <div className="relative w-full max-w-[200px] aspect-square">
                              {/* Cercles concentriques représentant la profondeur */}
                              <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse"></div>
                              <div className="absolute inset-[15%] rounded-full border border-primary/20 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                              <div className="absolute inset-[30%] rounded-full border border-primary/30 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                              <div className="absolute inset-[45%] rounded-full border border-primary/40 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                              <div className="absolute inset-[60%] rounded-full border border-primary/50 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                              <div className="absolute inset-[75%] rounded-full bg-primary/60 animate-pulse" style={{animationDelay: '1s'}}></div>
                            </div>
                          </div>
                          
                          {/* Éléments représentant les instruments dans l'espace */}
                          <div className="absolute left-[20%] top-[30%] h-2 w-2 bg-blue-500 rounded-full"></div>
                          <div className="absolute left-[70%] top-[40%] h-2 w-2 bg-green-500 rounded-full"></div>
                          <div className="absolute left-[40%] top-[60%] h-2 w-2 bg-red-500 rounded-full"></div>
                          <div className="absolute left-[60%] top-[70%] h-2 w-2 bg-yellow-500 rounded-full"></div>
                          
                          <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-muted-foreground">
                            Positionnement des éléments dans le champ stéréo et en profondeur
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/cakewalk-spatial-effects">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Les meilleurs plugins VST gratuits pour un mixage professionnel sans budget</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?q=80&w=1000" 
                          alt="Plugins VST" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Collection de plugins VST professionnels et gratuits</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Installation et gestion optimale des plugins</li>
                          <li>Égaliseurs analytiques et caractériels gratuits</li>
                          <li>Compresseurs, limiteurs et outils de dynamique</li>
                          <li>Effets créatifs et processeurs spatiaux</li>
                          <li>Organisation d'une chaîne de traitement cohérente</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-muted/30 p-2 rounded-md">
                            <h4 className="text-xs font-medium mb-1 text-primary">Traitement dynamique</h4>
                            <div className="flex flex-col gap-1">
                              <div className="text-xs bg-muted/50 p-1 rounded flex justify-between">
                                <span>TDR Kotelnikov</span>
                                <span className="text-primary/70">Compresseur</span>
                              </div>
                              <div className="text-xs bg-muted/50 p-1 rounded flex justify-between">
                                <span>OTT</span>
                                <span className="text-primary/70">Multi-bande</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-muted/30 p-2 rounded-md">
                            <h4 className="text-xs font-medium mb-1 text-primary">Égalisation</h4>
                            <div className="flex flex-col gap-1">
                              <div className="text-xs bg-muted/50 p-1 rounded flex justify-between">
                                <span>TDR Nova</span>
                                <span className="text-primary/70">Dynamique</span>
                              </div>
                              <div className="text-xs bg-muted/50 p-1 rounded flex justify-between">
                                <span>ReaEQ</span>
                                <span className="text-primary/70">Paramétrique</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/vst-plugins-essentiels">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Comprendre et maîtriser l'étape finale de la production musicale</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=1000" 
                          alt="Mastering audio" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">L'art et la science du mastering audio</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Rôle et objectifs spécifiques du mastering</li>
                          <li>Configuration optimale de l'environnement d'écoute</li>
                          <li>Chaîne de traitement complète et ordre des processeurs</li>
                          <li>Analyse spectrale et comparaison avec des références</li>
                          <li>Préparation des métadonnées et formats de distribution</li>
                        </ul>
                      </div>
                      <div className="mt-4">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <h4 className="text-sm font-medium mb-2">Chaîne de mastering typique</h4>
                          <div className="flex overflow-x-auto pb-2 gap-1">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded flex flex-col items-center justify-center p-1 border border-primary/20">
                              <span className="text-[10px] font-medium">Égalisation</span>
                              <span className="text-[8px] text-muted-foreground">Correction</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-px w-3 bg-primary/30"></div>
                              <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                              <div className="h-px w-3 bg-primary/30"></div>
                            </div>
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded flex flex-col items-center justify-center p-1 border border-primary/20">
                              <span className="text-[10px] font-medium">Compression</span>
                              <span className="text-[8px] text-muted-foreground">Dynamique</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-px w-3 bg-primary/30"></div>
                              <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                              <div className="h-px w-3 bg-primary/30"></div>
                            </div>
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded flex flex-col items-center justify-center p-1 border border-primary/20">
                              <span className="text-[10px] font-medium">Saturation</span>
                              <span className="text-[8px] text-muted-foreground">Harmoniques</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-px w-3 bg-primary/30"></div>
                              <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                              <div className="h-px w-3 bg-primary/30"></div>
                            </div>
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded flex flex-col items-center justify-center p-1 border border-primary/20">
                              <span className="text-[10px] font-medium">Stéréo</span>
                              <span className="text-[8px] text-muted-foreground">Image</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-px w-3 bg-primary/30"></div>
                              <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                              <div className="h-px w-3 bg-primary/30"></div>
                            </div>
                            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded flex flex-col items-center justify-center p-1 border border-primary/20">
                              <span className="text-[10px] font-medium">Limiteur</span>
                              <span className="text-[8px] text-muted-foreground">Maximisation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/introduction-mastering">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Finalisez vos projets professionnellement avec des outils gratuits</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000" 
                          alt="Mastering avec Audacity" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Mastering professionnel avec des outils accessibles</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Workflow de mastering optimisé dans Audacity</li>
                          <li>Égalisation précise par bandes de fréquences</li>
                          <li>Compression multibande et traitement dynamique</li>
                          <li>Mesure et optimisation des niveaux LUFS</li>
                          <li>Exportation optimisée pour différentes plateformes</li>
                        </ul>
                      </div>
                      <div className="mt-4 bg-muted/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2">Visualisation du processus</h4>
                        <div className="relative h-24 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-red-500/20 rounded-md overflow-hidden">
                          {/* Représentation visuelle d'une forme d'onde avant/après mastering */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full px-4">
                              {/* Forme d'onde avant mastering (plus dynamique) */}
                              <div className="h-6 w-full relative mb-2">
                                <div className="absolute left-0 right-0 h-[1px] top-1/2 bg-muted-foreground/30"></div>
                                <div className="absolute left-[5%] h-1 top-1/2 transform -translate-y-1/2 w-[3%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[10%] h-3 top-1/2 transform -translate-y-1/2 w-[5%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[20%] h-4 top-1/2 transform -translate-y-1/2 w-[4%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[30%] h-2 top-1/2 transform -translate-y-1/2 w-[6%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[45%] h-5 top-1/2 transform -translate-y-1/2 w-[3%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[55%] h-1 top-1/2 transform -translate-y-1/2 w-[4%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[65%] h-3 top-1/2 transform -translate-y-1/2 w-[5%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[80%] h-2 top-1/2 transform -translate-y-1/2 w-[7%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-[90%] h-4 top-1/2 transform -translate-y-1/2 w-[4%] bg-blue-500/50 rounded-full"></div>
                                <div className="absolute left-0 text-[8px] text-muted-foreground">Avant</div>
                              </div>
                              
                              {/* Forme d'onde après mastering (plus dense et uniforme) */}
                              <div className="h-6 w-full relative">
                                <div className="absolute left-0 right-0 h-[1px] top-1/2 bg-muted-foreground/30"></div>
                                <div className="absolute left-[5%] h-3 top-1/2 transform -translate-y-1/2 w-[3%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[10%] h-4 top-1/2 transform -translate-y-1/2 w-[5%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[20%] h-4 top-1/2 transform -translate-y-1/2 w-[4%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[30%] h-3 top-1/2 transform -translate-y-1/2 w-[6%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[45%] h-5 top-1/2 transform -translate-y-1/2 w-[3%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[55%] h-3 top-1/2 transform -translate-y-1/2 w-[4%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[65%] h-4 top-1/2 transform -translate-y-1/2 w-[5%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[80%] h-3 top-1/2 transform -translate-y-1/2 w-[7%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-[90%] h-4 top-1/2 transform -translate-y-1/2 w-[4%] bg-red-500/50 rounded-full"></div>
                                <div className="absolute left-0 text-[8px] text-muted-foreground">Après</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/audacity-mastering">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Maîtrisez les standards modernes de loudness pour toutes les plateformes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?q=80&w=1000" 
                          alt="Loudness et normalisation" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Standards de loudness pour une distribution optimale</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Standards de loudness pour streaming, radio et supports physiques</li>
                          <li>Mesures LUFS (Short-term, Integrated) et True Peak</li>
                          <li>Utilisation des meilleurs plugins de mesure open source</li>
                          <li>Techniques de maximisation transparente et limiteurs avancés</li>
                          <li>Optimisation adaptative pour différentes plateformes de distribution</li>
                        </ul>
                      </div>
                      <div className="mt-4 bg-muted/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2">Standards de loudness par plateforme</h4>
                        <div className="space-y-2">
                          <div className="relative h-8 bg-muted/50 rounded-md overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-[85%] bg-gradient-to-r from-green-500/30 to-yellow-500/30 rounded-l-md"></div>
                            <div className="absolute left-[85%] top-0 bottom-0 w-[15%] bg-gradient-to-r from-yellow-500/30 to-red-500/30"></div>
                            <div className="absolute left-[14%] top-0 bottom-0 w-[1px] bg-primary"></div>
                            <div className="absolute left-[14%] bottom-[-12px] transform -translate-x-1/2 text-[8px] text-primary font-medium">-14 LUFS</div>
                            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                              <span className="text-xs font-medium">Spotify / Apple Music</span>
                            </div>
                          </div>
                          
                          <div className="relative h-8 bg-muted/50 rounded-md overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-[77%] bg-gradient-to-r from-green-500/30 to-yellow-500/30 rounded-l-md"></div>
                            <div className="absolute left-[77%] top-0 bottom-0 w-[23%] bg-gradient-to-r from-yellow-500/30 to-red-500/30"></div>
                            <div className="absolute left-[16%] top-0 bottom-0 w-[1px] bg-primary"></div>
                            <div className="absolute left-[16%] bottom-[-12px] transform -translate-x-1/2 text-[8px] text-primary font-medium">-16 LUFS</div>
                            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                              <span className="text-xs font-medium">YouTube</span>
                            </div>
                          </div>
                          
                          <div className="relative h-8 bg-muted/50 rounded-md overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-gradient-to-r from-green-500/30 to-yellow-500/30 rounded-l-md"></div>
                            <div className="absolute left-[70%] top-0 bottom-0 w-[30%] bg-gradient-to-r from-yellow-500/30 to-red-500/30"></div>
                            <div className="absolute left-[23%] top-0 bottom-0 w-[1px] bg-primary"></div>
                            <div className="absolute left-[23%] bottom-[-12px] transform -translate-x-1/2 text-[8px] text-primary font-medium">-23 LUFS</div>
                            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                              <span className="text-xs font-medium">Broadcast (EBU R128)</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between text-[10px] text-muted-foreground">
                          <span>-∞</span>
                          <span>-24 LUFS</span>
                          <span>-16 LUFS</span>
                          <span>-8 LUFS</span>
                          <span>0 LUFS</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/loudness-normalisation">Voir le tutoriel</Link>
                      </Button>
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
                      <CardDescription>Créez un album professionnel avec une signature sonore unifiée</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4 group cursor-pointer">
                        <img 
                          src="https://images.unsplash.com/photo-1598387846148-47e82ee120cc?q=80&w=1000" 
                          alt="Mastering d'album" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white p-2 text-sm">Techniques avancées de mastering d'album</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Dans ce tutoriel, vous apprendrez:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Organisation et préparation des sessions d'album</li>
                          <li>Analyse comparative et matching spectral entre pistes</li>
                          <li>Égalisation adaptative pour une cohérence tonale</li>
                          <li>Conception et optimisation des transitions entre morceaux</li>
                          <li>Vérification finale sur différents systèmes d'écoute</li>
                        </ul>
                      </div>
                      <div className="mt-4 bg-muted/30 p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2">Visualisation de la cohérence d'album</h4>
                        <div className="grid grid-cols-5 gap-1 mb-2">
                          {/* Représentation visuelle de 5 pistes d'album avec leurs spectres */}
                          <div className="h-16 bg-gradient-to-b from-primary/5 to-primary/30 rounded relative overflow-hidden">
                            <div className="absolute inset-0">
                              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-primary/20"></div>
                              <div className="absolute bottom-[20%] left-0 w-full h-[30%] bg-primary/15"></div>
                              <div className="absolute bottom-[50%] left-0 w-full h-[20%] bg-primary/10"></div>
                              <div className="absolute bottom-[70%] left-0 w-full h-[30%] bg-primary/5"></div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 text-center text-[8px]">Piste 1</div>
                          </div>
                          <div className="h-16 bg-gradient-to-b from-primary/5 to-primary/30 rounded relative overflow-hidden">
                            <div className="absolute inset-0">
                              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-primary/20"></div>
                              <div className="absolute bottom-[20%] left-0 w-full h-[30%] bg-primary/15"></div>
                              <div className="absolute bottom-[50%] left-0 w-full h-[20%] bg-primary/10"></div>
                              <div className="absolute bottom-[70%] left-0 w-full h-[30%] bg-primary/5"></div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 text-center text-[8px]">Piste 2</div>
                          </div>
                          <div className="h-16 bg-gradient-to-b from-primary/5 to-primary/30 rounded relative overflow-hidden">
                            <div className="absolute inset-0">
                              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-primary/20"></div>
                              <div className="absolute bottom-[20%] left-0 w-full h-[30%] bg-primary/15"></div>
                              <div className="absolute bottom-[50%] left-0 w-full h-[20%] bg-primary/10"></div>
                              <div className="absolute bottom-[70%] left-0 w-full h-[30%] bg-primary/5"></div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 text-center text-[8px]">Piste 3</div>
                          </div>
                          <div className="h-16 bg-gradient-to-b from-primary/5 to-primary/30 rounded relative overflow-hidden">
                            <div className="absolute inset-0">
                              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-primary/20"></div>
                              <div className="absolute bottom-[20%] left-0 w-full h-[30%] bg-primary/15"></div>
                              <div className="absolute bottom-[50%] left-0 w-full h-[20%] bg-primary/10"></div>
                              <div className="absolute bottom-[70%] left-0 w-full h-[30%] bg-primary/5"></div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 text-center text-[8px]">Piste 4</div>
                          </div>
                          <div className="h-16 bg-gradient-to-b from-primary/5 to-primary/30 rounded relative overflow-hidden">
                            <div className="absolute inset-0">
                              <div className="absolute bottom-0 left-0 w-full h-[20%] bg-primary/20"></div>
                              <div className="absolute bottom-[20%] left-0 w-full h-[30%] bg-primary/15"></div>
                              <div className="absolute bottom-[50%] left-0 w-full h-[20%] bg-primary/10"></div>
                              <div className="absolute bottom-[70%] left-0 w-full h-[30%] bg-primary/5"></div>
                            </div>
                            <div className="absolute bottom-1 left-0 right-0 text-center text-[8px]">Piste 5</div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground px-1">
                          <span>Basses</span>
                          <span>Médiums</span>
                          <span>Aigus</span>
                        </div>
                        <div className="mt-2 text-[10px] text-center text-muted-foreground">
                          Équilibre spectral uniforme à travers toutes les pistes de l'album
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link to="/technique/tutoriels/album-mastering">Voir le tutoriel</Link>
                      </Button>
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
