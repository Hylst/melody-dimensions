
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Mic, 
  Music, 
  Headphones, 
  Waves, 
  FileMusic, 
  Download, 
  ExternalLink, 
  BarChart2,
  Speaker,
  Volume2
} from "lucide-react";

const ProductionMusicale = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Production Musicale</h1>
        <p className="text-lg text-muted-foreground">
          Guide complet des techniques et processus de production musicale moderne, 
          de l'enregistrement initial jusqu'au mastering final.
        </p>
      </div>
      
      <Alert variant="default" className="bg-primary/5 border-primary/20">
        <Music className="h-4 w-4" />
        <AlertTitle>Parcours de production</AlertTitle>
        <AlertDescription>
          Explorez chaque étape du processus de production avec nos guides détaillés et tutoriels pratiques.
        </AlertDescription>
      </Alert>
      
      <Tabs defaultValue="recording" className="mb-10">
        <TabsList className="mb-4 w-full justify-start">
          <TabsTrigger value="recording" className="flex gap-2 items-center">
            <Mic className="h-4 w-4" />
            <span>Enregistrement</span>
          </TabsTrigger>
          <TabsTrigger value="mixing" className="flex gap-2 items-center">
            <BarChart2 className="h-4 w-4" />
            <span>Mixage</span>
          </TabsTrigger>
          <TabsTrigger value="mastering" className="flex gap-2 items-center">
            <Volume2 className="h-4 w-4" />
            <span>Mastering</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recording" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">L'Art de l'Enregistrement</h2>
            <p className="text-muted-foreground mb-6">
              Capturez le son avec précision et clarté grâce à des techniques d'enregistrement professionnelles
              adaptées à différents instruments et environnements.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="h-5 w-5 text-primary" />
                    Principes fondamentaux
                  </CardTitle>
                  <CardDescription>Les bases essentielles à maîtriser</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/640x360?text=Techniques+d'enregistrement" 
                      alt="Techniques d'enregistrement" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="acoustics">
                      <AccordionTrigger className="text-base font-medium">Acoustique et environnement</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          L'environnement dans lequel vous enregistrez a un impact majeur sur la qualité sonore finale. 
                          Même avec le meilleur équipement, un espace mal traité acoustiquement compromettra vos enregistrements.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Identifiez et traitez les premières réflexions</li>
                          <li>Contrôlez les résonances de basses fréquences</li>
                          <li>Réduisez les bruits externes et mécaniques</li>
                          <li>Créez des zones d'enregistrement dédiées</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="microphone-technique">
                      <AccordionTrigger className="text-base font-medium">Techniques de microphone</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          Le choix et le positionnement du microphone sont cruciaux pour capturer le son désiré.
                        </p>
                        <div className="space-y-2">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Placement de microphone</h4>
                            <p>Le placement idéal varie selon l'instrument et le son recherché. La règle des 3:1 aide à éviter les problèmes de phase lors de l'utilisation de plusieurs micros.</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Directivité</h4>
                            <p>Cardioïde, omnidirectionnel, figure-8 - chaque directivité a ses applications spécifiques selon la source et l'environnement.</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="gain-structure">
                      <AccordionTrigger className="text-base font-medium">Structure de gain</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          Une structure de gain appropriée est essentielle pour maximiser le rapport signal/bruit tout en évitant la distorsion.
                        </p>
                        <div className="bg-muted p-3 rounded-md">
                          <h4 className="font-medium">Niveaux optimaux</h4>
                          <p>Pour l'enregistrement numérique, visez une moyenne autour de -18 dBFS avec des pics ne dépassant pas -6 dBFS pour préserver la dynamique.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Guide complet d'acoustique</Button>
                </CardFooter>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileMusic className="h-5 w-5 text-primary" />
                      Techniques par instrument
                    </CardTitle>
                    <CardDescription>Approches spécialisées pour différentes sources</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        <span className="font-medium">Voix</span>
                      </div>
                      <Button variant="ghost" size="sm">Voir guide</Button>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        <span className="font-medium">Guitare acoustique</span>
                      </div>
                      <Button variant="ghost" size="sm">Voir guide</Button>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        <span className="font-medium">Batterie</span>
                      </div>
                      <Button variant="ghost" size="sm">Voir guide</Button>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        <span className="font-medium">Piano</span>
                      </div>
                      <Button variant="ghost" size="sm">Voir guide</Button>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-primary" />
                        <span className="font-medium">Instruments à vent</span>
                      </div>
                      <Button variant="ghost" size="sm">Voir guide</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Schéma: Configuration d'enregistrement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center p-4 mb-3">
                      <div className="w-full max-w-md">
                        <div className="bg-background p-3 rounded-md mb-3 text-center border">
                          <p className="font-medium">Source sonore</p>
                        </div>
                        <div className="flex justify-center mb-3">
                          <Mic className="h-8 w-8" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div className="bg-background p-2 rounded-md border">
                            <p className="font-medium text-xs">Préampli</p>
                          </div>
                          <div className="bg-background p-2 rounded-md border">
                            <p className="font-medium text-xs">Convertisseur A/N</p>
                          </div>
                          <div className="bg-background p-2 rounded-md border">
                            <p className="font-medium text-xs">Interface</p>
                          </div>
                        </div>
                        <div className="mt-3 bg-background p-2 rounded-md text-center border">
                          <p className="font-medium text-xs">DAW</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Schéma simplifié de la chaîne d'enregistrement, de la source au système d'enregistrement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Tutoriel pratique: Enregistrement vocal professionnel</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">1. Préparation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://via.placeholder.com/400x225?text=Préparation" 
                        alt="Préparation" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">1</span>
                        </div>
                        <span>Préparer l'espace (traitement acoustique)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">2</span>
                        </div>
                        <span>Configurer le microphone et le filtre anti-pop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">3</span>
                        </div>
                        <span>Régler les niveaux de préampli</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">2. Techniques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://via.placeholder.com/400x225?text=Techniques" 
                        alt="Techniques" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">1</span>
                        </div>
                        <span>Distance optimale du micro (10-15 cm)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">2</span>
                        </div>
                        <span>Gestion de l'effet de proximité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">3</span>
                        </div>
                        <span>Monitoring sans latence pour le chanteur</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">3. Post-traitement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://via.placeholder.com/400x225?text=Post-traitement" 
                        alt="Post-traitement" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">1</span>
                        </div>
                        <span>Édition (comping, timing, tuning)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">2</span>
                        </div>
                        <span>Nettoyage des bruits indésirables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs">3</span>
                        </div>
                        <span>Préparation pour le mixage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-center">
                <Button className="mt-4">
                  <FileMusic className="mr-2 h-4 w-4" />
                  Télécharger le guide complet
                </Button>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h3 className="text-xl font-medium mb-4">Solutions aux problèmes courants d'enregistrement</h3>
              
              <div className="space-y-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value="noise">
                    <AccordionTrigger className="text-base font-medium">Bruits de fond et interférences</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <p>Les bruits de fond peuvent provenir de multiples sources: équipement électrique, ventilation, circulation externe, etc.</p>
                      
                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Solutions</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Vérifiez l'isolation de la pièce et traitez les points faibles</li>
                          <li>Éteignez les appareils électroniques non essentiels pendant l'enregistrement</li>
                          <li>Utilisez des câbles blindés de haute qualité pour éviter les interférences électromagnétiques</li>
                          <li>Positionnez les câbles audio loin des câbles d'alimentation</li>
                          <li>Vérifiez la mise à la terre de votre équipement</li>
                          <li>En dernier recours, utilisez des plugins de réduction de bruit en post-production</li>
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <h5 className="text-sm font-medium mb-1">À éviter</h5>
                          <div className="bg-muted/50 p-3 rounded-md text-sm">
                            <p>Sur-traiter avec des plugins de réduction de bruit, ce qui peut dégrader la qualité sonore</p>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-1">Recommandé</h5>
                          <div className="bg-muted/50 p-3 rounded-md text-sm">
                            <p>Résoudre le problème à la source plutôt qu'en post-production</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="room-acoustics">
                    <AccordionTrigger className="text-base font-medium">Acoustique de pièce problématique</AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <p>Une mauvaise acoustique peut ajouter des colorations indésirables à vos enregistrements, notamment des réverbérations excessives ou des résonances.</p>
                      
                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Solutions</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Utilisez des panneaux acoustiques absorbants aux points de première réflexion</li>
                          <li>Placez des pièges à basses (bass traps) dans les coins de la pièce</li>
                          <li>Créez une zone d'enregistrement isolée avec des écrans acoustiques mobiles</li>
                          <li>Pour les voix, utilisez un microphone dynamique qui capte moins l'ambiance</li>
                          <li>Enregistrez dans des espaces avec des meubles et textures qui absorbent le son</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-md">
                        <h4 className="text-sm font-medium mb-1">Schéma de traitement acoustique basique</h4>
                        <div className="aspect-video bg-background rounded-md border p-3 flex items-center justify-center">
                          <div className="w-full max-w-xs text-center">
                            <div className="border border-dashed p-4 rounded-md mb-2 relative">
                              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary"></div>
                              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary"></div>
                              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary"></div>
                              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary"></div>
                              
                              <p className="mb-4">Pièce</p>
                              
                              <div className="flex justify-center mb-2">
                                <div className="bg-primary/10 p-1 rounded-md text-xs">
                                  <p>Position d'enregistrement</p>
                                </div>
                              </div>
                              
                              <div className="flex justify-around text-xs">
                                <div>◼</div>
                                <div>◼</div>
                                <div>◼</div>
                              </div>
                            </div>
                            <div className="text-xs flex justify-between px-2">
                              <span>◼ Bass traps</span>
                              <span>▢ Panneaux absorbants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="phase-issues">
                    <AccordionTrigger className="text-base font-medium">Problèmes de phase</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">
                        Les problèmes de phase surviennent lorsque plusieurs microphones captent le même son avec de légers décalages temporels, 
                        créant des interférences destructives.
                      </p>
                      
                      <div className="bg-muted p-4 rounded-md mb-3">
                        <h4 className="font-medium mb-2">Solutions</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Appliquez la règle des 3:1 (distance entre les micros au moins 3 fois supérieure à la distance micro-source)</li>
                          <li>Vérifiez la polarité de vos microphones</li>
                          <li>Utilisez la technique de test mono pour détecter les problèmes de phase</li>
                          <li>Corrigez la phase en post-production avec des plugins dédiés</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="mixing" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">L'Art du Mixage</h2>
            <p className="text-muted-foreground mb-6">
              Transformez des pistes brutes en une production cohérente et équilibrée grâce à des techniques de mixage professionnelles.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-primary" />
                    Fondamentaux du mixage
                  </CardTitle>
                  <CardDescription>Maîtrisez les bases essentielles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/640x360?text=Techniques+de+mixage" 
                      alt="Techniques de mixage" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="balance">
                      <AccordionTrigger className="text-base font-medium">Balance et niveaux</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          La balance entre les différents éléments est la base d'un bon mixage. Avant d'ajouter des effets ou des traitements, 
                          il est essentiel d'établir de bons rapports de volume.
                        </p>
                        <div className="bg-muted p-3 rounded-md space-y-2">
                          <h4 className="font-medium">Approche méthodique</h4>
                          <ol className="list-decimal pl-6 space-y-1">
                            <li>Commencez par l'élément le plus important (souvent voix ou batterie)</li>
                            <li>Ajoutez progressivement les autres éléments en relation avec cet élément central</li>
                            <li>Organisez votre mixage en sous-groupes (batterie, voix, instruments mélodiques)</li>
                            <li>Utilisez le gain staging pour maintenir des niveaux optimaux à chaque étape</li>
                          </ol>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="eq">
                      <AccordionTrigger className="text-base font-medium">Égalisation (EQ)</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          L'égalisation est l'outil permettant de sculpter le contenu fréquentiel de chaque élément pour créer de l'espace et de la clarté.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Principes d'égalisation</h4>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>Coupez plutôt que boostez quand c'est possible</li>
                              <li>Évitez d'accumuler de l'énergie dans les mêmes zones fréquentielles</li>
                              <li>Filtrez les basses fréquences inutiles sur les sources non-graves</li>
                              <li>Utilisez l'EQ dynamique pour des traitements plus naturels</li>
                            </ul>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-muted p-2 rounded-md">
                              <p className="text-xs font-medium">Basses: 20 Hz - 250 Hz</p>
                              <p className="text-xs">Fondamentales, puissance, chaleur</p>
                            </div>
                            <div className="bg-muted p-2 rounded-md">
                              <p className="text-xs font-medium">Bas-médiums: 250 Hz - 500 Hz</p>
                              <p className="text-xs">Corps, boue potentielle</p>
                            </div>
                            <div className="bg-muted p-2 rounded-md">
                              <p className="text-xs font-medium">Médiums: 500 Hz - 2 kHz</p>
                              <p className="text-xs">Présence, définition</p>
                            </div>
                            <div className="bg-muted p-2 rounded-md">
                              <p className="text-xs font-medium">Hauts-médiums: 2 kHz - 8 kHz</p>
                              <p className="text-xs">Clarté, attaque, agressivité</p>
                            </div>
                            <div className="bg-muted p-2 rounded-md">
                              <p className="text-xs font-medium">Aigus: 8 kHz - 20 kHz</p>
                              <p className="text-xs">Air, brillance, détail</p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="compression">
                      <AccordionTrigger className="text-base font-medium">Compression</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          La compression permet de contrôler la dynamique, d'ajouter du caractère et de la cohésion aux éléments d'un mixage.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Paramètres de compression</h4>
                            <ul className="list-disc pl-6 space-y-1">
                              <li><strong>Threshold</strong>: Niveau à partir duquel la compression s'active</li>
                              <li><strong>Ratio</strong>: Intensité de la compression une fois le threshold dépassé</li>
                              <li><strong>Attack</strong>: Vitesse d'application de la compression (rapide pour conserver les transitoires)</li>
                              <li><strong>Release</strong>: Vitesse de retour à la normale (adaptée au tempo)</li>
                              <li><strong>Knee</strong>: Transition douce ou abrupte vers la compression</li>
                              <li><strong>Makeup Gain</strong>: Compensation du volume perdu</li>
                            </ul>
                          </div>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Types de compression</h4>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="bg-background p-2 rounded-md">
                                <p className="text-xs font-medium">Compression parallèle</p>
                                <p className="text-xs">Mixe signal compressé et original</p>
                              </div>
                              <div className="bg-background p-2 rounded-md">
                                <p className="text-xs font-medium">Side-chain</p>
                                <p className="text-xs">Compression déclenchée par un autre signal</p>
                              </div>
                              <div className="bg-background p-2 rounded-md">
                                <p className="text-xs font-medium">Multi-bande</p>
                                <p className="text-xs">Compression par bandes de fréquences</p>
                              </div>
                              <div className="bg-background p-2 rounded-md">
                                <p className="text-xs font-medium">Bus compression</p>
                                <p className="text-xs">Compression de groupe pour cohésion</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="spatial">
                      <AccordionTrigger className="text-base font-medium">Effets spatiaux</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <p className="mb-2">
                          Les effets spatiaux comme la réverb et le delay créent profondeur et dimension dans un mixage.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Méthodes d'application</h4>
                            <ul className="list-disc pl-6 space-y-1">
                              <li><strong>Auxiliaires</strong>: Utilisez des départs effets plutôt qu'une insertion directe</li>
                              <li><strong>Pré-delay</strong>: 20-40ms de pré-delay pour maintenir la clarté</li>
                              <li><strong>EQ</strong>: Filtrez les basses fréquences des réverbs pour éviter l'encombrement</li>
                              <li><strong>Temps</strong>: Synchronisez les délais avec le tempo du morceau</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Speaker className="h-5 w-5 text-primary" />
                      Étapes du mixage professionnel
                    </CardTitle>
                    <CardDescription>Workflow optimisé et systématique</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">1</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Organisation et préparation</h4>
                          <p className="text-sm text-muted-foreground">
                            Nommage des pistes, groupes, codes couleur, rangement, références.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">2</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Balance statique</h4>
                          <p className="text-sm text-muted-foreground">
                            Établissement des niveaux relatifs sans traitement.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Traitement individuel</h4>
                          <p className="text-sm text-muted-foreground">
                            EQ, compression, saturation et autres traitements par piste.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Traitement des sous-groupes</h4>
                          <p className="text-sm text-muted-foreground">
                            Compression de bus, EQ, saturation pour cohésion par section.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">5</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Effets et dimension</h4>
                          <p className="text-sm text-muted-foreground">
                            Réverb, delay, effets parallèles pour créer l'espace.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/60 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">6</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Automation et mouvement</h4>
                          <p className="text-sm text-muted-foreground">
                            Dynamisme, évolution et focus tout au long du morceau.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/70 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-sm font-medium">7</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Traitement du bus master</h4>
                          <p className="text-sm text-muted-foreground">
                            Compression légère, EQ subtil, préparation pour mastering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Schéma: Architecture de mixage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-md p-4 mb-3">
                      <div className="w-full h-full flex flex-col">
                        <div className="bg-background p-2 rounded-md text-center mb-4 font-medium">
                          <p>Bus Master</p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3 mb-3">
                          <div className="bg-background p-2 rounded-md text-center text-sm">
                            <p>Groupe Batterie</p>
                          </div>
                          <div className="bg-background p-2 rounded-md text-center text-sm">
                            <p>Groupe Instruments</p>
                          </div>
                          <div className="bg-background p-2 rounded-md text-center text-sm">
                            <p>Groupe Voix</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-2">
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Kick</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Basse</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Guitare</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Lead</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Snare</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Clavier</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Synthé</p>
                          </div>
                          <div className="bg-background p-1 rounded-md text-center text-xs">
                            <p>Choeurs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Organisation classique d'un mixage avec routage en sous-groupes pour un traitement efficace.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-6 space-y-6">
              <h3 className="text-xl font-medium">Techniques de mixage avancées</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart2 className="h-5 w-5 text-primary" />
                      Mixage en 3D
                    </CardTitle>
                    <CardDescription>Maîtrisez l'espace sonore complet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Le mixage en 3D consiste à exploiter les trois dimensions sonores pour positionner chaque élément 
                      dans un espace cohérent: largeur (panoramique), hauteur (fréquences) et profondeur (volume et ambiance).
                    </p>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Les trois dimensions</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="font-medium">X</span>
                          </div>
                          <div>
                            <p className="font-medium">Largeur (panoramique)</p>
                            <p className="text-xs text-muted-foreground">Positionnement gauche-droite des éléments</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="font-medium">Y</span>
                          </div>
                          <div>
                            <p className="font-medium">Hauteur (fréquences)</p>
                            <p className="text-xs text-muted-foreground">Graves en bas, médiums au milieu, aigus en haut</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="font-medium">Z</span>
                          </div>
                          <div>
                            <p className="font-medium">Profondeur (volume/ambiance)</p>
                            <p className="text-xs text-muted-foreground">Éléments proches (secs) ou lointains (réverbérés)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://via.placeholder.com/400x225?text=Mixage+3D" 
                        alt="Mixage 3D" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-1">Technique avancée</h4>
                      <p className="text-xs">
                        Pour une meilleure perception de la profondeur, alternez entre éléments proches et lointains. 
                        Utilisez des réverbs différentes par zone de profondeur pour créer une hiérarchie cohérente.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="h-5 w-5 text-primary" />
                      Sound Design dans le mixage
                    </CardTitle>
                    <CardDescription>Créativité et identité sonore</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Intégrer des éléments de sound design dans votre mixage peut créer une identité sonore unique 
                      et ajouter une dimension émotionnelle supplémentaire à votre production.
                    </p>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="techniques">
                        <AccordionTrigger className="text-sm font-medium">Techniques créatives</AccordionTrigger>
                        <AccordionContent className="text-sm space-y-3">
                          <div className="bg-muted/50 p-2 rounded-md">
                            <p className="font-medium">Automatisations extrêmes</p>
                            <p className="text-xs">Mouvements de filtres, panoramiques, volumes pour créer des transitions saisissantes</p>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-md">
                            <p className="font-medium">Traitement parallèle créatif</p>
                            <p className="text-xs">Distorsion, modulation, réverb extrême en parallèle avec le signal original</p>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-md">
                            <p className="font-medium">Réverb inversée</p>
                            <p className="text-xs">Création de crescendos atmosphériques avant les temps forts</p>
                          </div>
                          <div className="bg-muted/50 p-2 rounded-md">
                            <p className="font-medium">Re-sampling</p>
                            <p className="text-xs">Traitement audio puis réintégration dans le mix comme nouvel élément</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <div className="aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://via.placeholder.com/400x225?text=Sound+Design" 
                        alt="Sound Design" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-2">Exemple pratique</h4>
                      <p className="text-xs mb-2">
                        Création d'une transition avec sound design entre couplet et refrain:
                      </p>
                      <ol className="list-decimal pl-4 text-xs space-y-1">
                        <li>Exportez le dernier accord du couplet</li>
                        <li>Inversez-le et appliquez une réverb longue</li>
                        <li>Coupez les basses fréquences et automatisez un filtre s'ouvrant progressivement</li>
                        <li>Ajoutez un effet de glitch juste avant le refrain</li>
                        <li>Combinez avec un crescendo de batterie et une montée de reverse cymbal</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Étude de cas: Mixage complet d'un morceau</CardTitle>
                  <CardDescription>Analyse détaillée d'un projet de mixage professionnel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <Button>
                        <FileMusic className="mr-2 h-4 w-4" />
                        Voir le tutoriel vidéo
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Cette étude de cas vous guide à travers le processus complet de mixage d'un morceau pop-rock, 
                        de l'organisation initiale jusqu'à la finalisation pour mastering.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Phase d'organisation</span>
                          <Badge variant="outline">10 min</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Traitement de la batterie</span>
                          <Badge variant="outline">25 min</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Basse et instruments harmoniques</span>
                          <Badge variant="outline">20 min</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Voix lead et background</span>
                          <Badge variant="outline">30 min</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Effets et spatialisation</span>
                          <Badge variant="outline">15 min</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Automation et finalisation</span>
                          <Badge variant="outline">20 min</Badge>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="text-sm font-medium mb-2">Les points clés abordés</h4>
                        <ul className="list-disc pl-6 text-xs space-y-1">
                          <li>Traitement parallèle de la batterie pour plus de punch</li>
                          <li>Techniques de compression multibande sur la voix</li>
                          <li>Création d'espace dans les médiums pour la voix lead</li>
                          <li>Automation des effets pour dynamiser l'arrangement</li>
                          <li>Mastering léger sur le bus master pour cohésion globale</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Avant mixage</h4>
                      <div className="bg-muted h-16 rounded-md flex items-center justify-center">
                        <Button size="sm" variant="outline">Écouter l'extrait</Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Mixage intermédiaire</h4>
                      <div className="bg-muted h-16 rounded-md flex items-center justify-center">
                        <Button size="sm" variant="outline">Écouter l'extrait</Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Mixage final</h4>
                      <div className="bg-muted h-16 rounded-md flex items-center justify-center">
                        <Button size="sm" variant="outline">Écouter l'extrait</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger le projet de démonstration
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="mastering" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Mastering Professionnel</h2>
            <p className="text-muted-foreground mb-6">
              Apprenez à finaliser vos mixages pour qu'ils sonnent de manière cohérente et professionnelle 
              sur tous les systèmes de diffusion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-primary" />
                    Principes du mastering
                  </CardTitle>
                  <CardDescription>Les bases essentielles à maîtriser</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/640x360?text=Techniques+de+mastering" 
                      alt="Techniques de mastering" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p className="text-sm">
                    Le mastering est l'étape finale du processus de production musicale qui prépare votre mix pour la distribution.
                    Il s'agit d'un art subtil qui nécessite à la fois des compétences techniques et une oreille exercée.
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="objectives">
                      <AccordionTrigger className="text-base font-medium">Objectifs du mastering</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <ul className="list-disc pl-6 space-y-2">
                          <li><strong>Cohésion sonore</strong> - Assurer que tous les morceaux d'un album sonnent de manière cohérente</li>
                          <li><strong>Optimisation du niveau</strong> - Atteindre un volume compétitif sans sacrifier la dynamique</li>
                          <li><strong>Corrections finales</strong> - Ajuster subtilement la balance spectrale et corriger les problèmes mineurs</li>
                          <li><strong>Préparation pour diffusion</strong> - Adapter le son pour différents formats (streaming, CD, vinyle)</li>
                          <li><strong>Métadonnées et DDP</strong> - Préparer les fichiers avec les informations nécessaires pour la distribution</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="chain">
                      <AccordionTrigger className="text-base font-medium">Chaîne de traitement typique</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <div className="space-y-3">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">1. Égalisation</h4>
                            <p>
                              EQ large et subtil pour corriger la balance tonale globale et apporter de la cohérence.
                              Généralement +/- 0.5 à 2dB maximum par bande.
                            </p>
                          </div>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">2. Compression</h4>
                            <p>
                              Compression douce (ratio 1.5:1 à 2:1) pour unifier le son sans écraser la dynamique.
                              L'utilisation d'un compresseur multi-bande peut être plus transparente.
                            </p>
                          </div>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">3. Saturation/Excitation</h4>
                            <p>
                              Ajout subtil d'harmoniques pour densifier et réchauffer le son.
                              Excitation des hautes fréquences pour plus de présence et de détail.
                            </p>
                          </div>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">4. Limiteur</h4>
                            <p>
                              Maximisation du volume perçu tout en prévenant l'écrêtage numérique.
                              La réduction de gain ne devrait pas dépasser 3-6dB pour préserver la dynamique.
                            </p>
                          </div>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">5. Dithering</h4>
                            <p>
                              Application du dithering lors de la réduction de résolution (par exemple de 32 à 16 bits pour CD).
                              Essentiel pour minimiser les distorsions de quantification.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="monitoring">
                      <AccordionTrigger className="text-base font-medium">Monitoring et référencement</AccordionTrigger>
                      <AccordionContent className="text-sm">
                        <div className="space-y-3">
                          <p>
                            Un monitoring précis et une méthode de référencement solide sont essentiels pour prendre 
                            des décisions éclairées lors du mastering.
                          </p>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Système d'écoute</h4>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>Moniteurs avec réponse en fréquence plate et neutre</li>
                              <li>Acoustique traitée et position d'écoute optimisée</li>
                              <li>Volume d'écoute modéré et constant (environ 83dB SPL)</li>
                              <li>Systèmes d'écoute alternatifs pour vérification</li>
                            </ul>
                          </div>
                          
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium">Référencement</h4>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>Sélectionnez 3-5 morceaux commerciaux du même genre comme références</li>
                              <li>Ajustez les niveaux pour une comparaison équitable (LUFS)</li>
                              <li>Analysez le spectre des références comme guide</li>
                              <li>Référencez régulièrement pour maintenir une perspective</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mesures et standards techniques</CardTitle>
                    <CardDescription>Comprendre les métriques essentielles du mastering</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">LUFS (Loudness Units Full Scale)</h4>
                      <p className="text-sm mb-2">
                        Standard de mesure de la perception du volume qui prend en compte la façon dont l'oreille humaine perçoit différentes fréquences.
                      </p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Plateforme</TableHead>
                            <TableHead>LUFS Integrated</TableHead>
                            <TableHead>True Peak</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Spotify</TableCell>
                            <TableCell>-14 LUFS</TableCell>
                            <TableCell>-1 dBTP</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Apple Music</TableCell>
                            <TableCell>-16 LUFS</TableCell>
                            <TableCell>-1 dBTP</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>YouTube</TableCell>
                            <TableCell>-14 LUFS</TableCell>
                            <TableCell>-1 dBTP</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>CD</TableCell>
                            <TableCell>-9 à -12 LUFS</TableCell>
                            <TableCell>-0.3 dBTP</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Club/DJ</TableCell>
                            <TableCell>-8 à -10 LUFS</TableCell>
                            <TableCell>-0.3 dBTP</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium mb-2">Dynamique (PLR/PSR)</h4>
                        <p className="text-xs text-muted-foreground">
                          Le Peak to Loudness Ratio mesure la différence entre les pics et le volume moyen, 
                          représentant l'amplitude de la dynamique préservée.
                        </p>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Très compressé</span>
                            <span>5 dB</span>
                          </div>
                          <Progress value={40} className="h-2" />
                          
                          <div className="flex justify-between text-xs mb-1 mt-2">
                            <span>Pop/Rock moderne</span>
                            <span>8 dB</span>
                          </div>
                          <Progress value={60} className="h-2" />
                          
                          <div className="flex justify-between text-xs mb-1 mt-2">
                            <span>Acoustique/Jazz</span>
                            <span>12+ dB</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium mb-2">True Peak</h4>
                        <p className="text-xs text-muted-foreground">
                          Les True Peaks représentent le niveau réel maximum du signal, y compris entre les échantillons. 
                          Ils doivent rester sous des seuils spécifiques pour éviter la distorsion lors de la conversion.
                        </p>
                        <div className="mt-2 space-y-2">
                          <div className="bg-background p-2 rounded-md text-xs">
                            <div className="flex justify-between">
                              <span>Streaming:</span>
                              <span className="font-medium">-1.0 dBTP max</span>
                            </div>
                          </div>
                          <div className="bg-background p-2 rounded-md text-xs">
                            <div className="flex justify-between">
                              <span>CD/Download:</span>
                              <span className="font-medium">-0.3 dBTP max</span>
                            </div>
                          </div>
                          <div className="bg-background p-2 rounded-md text-xs">
                            <div className="flex justify-between">
                              <span>Vinyle:</span>
                              <span className="font-medium">-3.0 dBTP recommandé</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileMusic className="h-5 w-5 text-primary" />
                      Préparation pour différents formats
                    </CardTitle>
                    <CardDescription>Adaptez votre master selon sa destination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="streaming">
                      <TabsList>
                        <TabsTrigger value="streaming">Streaming</TabsTrigger>
                        <TabsTrigger value="cd">CD</TabsTrigger>
                        <TabsTrigger value="vinyl">Vinyle</TabsTrigger>
                      </TabsList>
                      <TabsContent value="streaming" className="pt-4 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Les plateformes de streaming appliquent leur propre normalisation de volume, 
                          donc un master trop compressé sera simplement baissé en volume.
                        </p>
                        
                        <ul className="list-disc pl-6 text-sm space-y-1">
                          <li>Visez -14 LUFS Integrated pour la plupart des plateformes</li>
                          <li>Maintenez les True Peaks sous -1 dBTP</li>
                          <li>Préservez la dynamique (8+ dB de PLR)</li>
                          <li>Format: WAV/AIFF 24-bit, 44.1kHz ou 48kHz</li>
                          <li>Incluez des métadonnées ID3 complètes</li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="cd" className="pt-4 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Le CD reste un format important qui nécessite des considérations spécifiques.
                        </p>
                        
                        <ul className="list-disc pl-6 text-sm space-y-1">
                          <li>Format: 16-bit, 44.1kHz (standard Red Book)</li>
                          <li>Appliquez le dithering lors de la conversion 24 à 16 bits</li>
                          <li>Spacing entre pistes et indications PQ</li>
                          <li>Mastering généralement plus fort que pour le streaming</li>
                          <li>Création d'un DDP pour la duplication professionnelle</li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="vinyl" className="pt-4 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Le vinyle a des contraintes physiques qui affectent le mastering.
                        </p>
                        
                        <ul className="list-disc pl-6 text-sm space-y-1">
                          <li>Dynamique plus importante nécessaire (PLR 12+ dB)</li>
                          <li>Mono sous 100-150Hz pour éviter les sauts d'aiguille</li>
                          <li>Réduction des sibilances et hautes fréquences excessives</li>
                          <li>Considérations spéciales pour la longueur du disque (33 vs 45 tours)</li>
                          <li>Communication avec l'ingénieur de découpe vinyle</li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Tutoriel pratique: Mastering d'un morceau pop</h3>
              
              <Card>
                <CardHeader>
                  <CardTitle>Workflow de mastering en 6 étapes</CardTitle>
                  <CardDescription>Processus complet illustré par un exemple pratique</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                      <Button>Regarder le tutoriel complet</Button>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground mb-3">
                        Ce tutoriel vous guide pas à pas à travers le processus de mastering d'un morceau pop moderne 
                        pour les plateformes de streaming et le téléchargement numérique.
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium">1</span>
                        </div>
                        <div>
                          <p className="font-medium">Préparation et analyse</p>
                          <p className="text-xs text-muted-foreground">Évaluation du mix et référencement</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium">2</span>
                        </div>
                        <div>
                          <p className="font-medium">Corrections EQ</p>
                          <p className="text-xs text-muted-foreground">Ajustements tonals subtils</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium">3</span>
                        </div>
                        <div>
                          <p className="font-medium">Compression stéréo</p>
                          <p className="text-xs text-muted-foreground">Cohésion et densité</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium">4</span>
                        </div>
                        <div>
                          <p className="font-medium">Amélioration stéréo et saturation</p>
                          <p className="text-xs text-muted-foreground">Image et couleur sonore</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium">5</span>
                        </div>
                        <div>
                          <p className="font-medium">Limitation et maximisation</p>
                          <p className="text-xs text-muted-foreground">Niveau final compétitif</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-medium">6</span>
                        </div>
                        <div>
                          <p className="font-medium">Vérifications et exports</p>
                          <p className="text-xs text-muted-foreground">Contrôle qualité et formats finaux</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Mix non masterisé</h4>
                      <div className="bg-muted h-16 rounded-md flex items-center justify-center">
                        <Button size="sm" variant="outline">Écouter</Button>
                      </div>
                      <div className="mt-2 flex justify-between text-xs">
                        <span>LUFS: -18.6</span>
                        <span>PLR: 14.2 dB</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Mastering intermédiaire</h4>
                      <div className="bg-muted h-16 rounded-md flex items-center justify-center">
                        <Button size="sm" variant="outline">Écouter</Button>
                      </div>
                      <div className="mt-2 flex justify-between text-xs">
                        <span>LUFS: -16.2</span>
                        <span>PLR: 11.8 dB</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Master final</h4>
                      <div className="bg-muted h-16 rounded-md flex items-center justify-center">
                        <Button size="sm" variant="outline">Écouter</Button>
                      </div>
                      <div className="mt-2 flex justify-between text-xs">
                        <span>LUFS: -14.0</span>
                        <span>PLR: 9.6 dB</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Plugins utilisés dans le tutoriel</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-background p-2 rounded-md text-center">
                        <p className="text-xs font-medium">FabFilter Pro-Q 3</p>
                        <p className="text-xs text-muted-foreground">Égalisation</p>
                      </div>
                      <div className="bg-background p-2 rounded-md text-center">
                        <p className="text-xs font-medium">Shadow Hills Mastering</p>
                        <p className="text-xs text-muted-foreground">Compression</p>
                      </div>
                      <div className="bg-background p-2 rounded-md text-center">
                        <p className="text-xs font-medium">Ozone Imager</p>
                        <p className="text-xs text-muted-foreground">Stéréo</p>
                      </div>
                      <div className="bg-background p-2 rounded-md text-center">
                        <p className="text-xs font-medium">FabFilter Pro-L 2</p>
                        <p className="text-xs text-muted-foreground">Limitation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger le guide PDF complet
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Conseils d'ingénieurs professionnels</CardTitle>
                    <CardDescription>Astuces des meilleurs masteriseurs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-medium">BG</span>
                      </div>
                      <div>
                        <p className="font-medium">Bob Gnarley, Abbey Road Studios</p>
                        <p className="text-sm text-muted-foreground">
                          "Prenez votre temps pour écouter le mix dans différents environnements avant de commencer.
                          Le mastering consiste souvent à savoir quand ne pas toucher à quelque chose."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-medium">EK</span>
                      </div>
                      <div>
                        <p className="font-medium">Emily Kovacs, Sterling Sound</p>
                        <p className="text-sm text-muted-foreground">
                          "Ne sous-estimez pas l'importance des micro-ajustements. Une modification de 0.5dB 
                          à la bonne fréquence peut transformer complètement un master."
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-medium">MR</span>
                      </div>
                      <div>
                        <p className="font-medium">Marc Ronson, Electric Mastering</p>
                        <p className="text-sm text-muted-foreground">
                          "Pour les débutants, je recommande de viser la cohérence plutôt que la perfection. Un album où chaque morceau 
                          sonne de manière similaire est plus important qu'un son 'parfait' mais incohérent."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>FAQ Mastering</CardTitle>
                    <CardDescription>Réponses aux questions fréquentes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="self-mastering">
                        <AccordionTrigger className="text-sm">Puis-je masteriser moi-même mes morceaux?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                          <p>
                            Absolument! Avec les outils actuels, l'auto-mastering est tout à fait possible. La clé est d'avoir:
                          </p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>Une écoute calibrée et un environnement acoustique décent</li>
                            <li>Une bonne compréhension des objectifs du mastering</li>
                            <li>Des références commerciales pour comparaison</li>
                            <li>Une perspective fraîche (prenez une pause après le mixage)</li>
                          </ul>
                          <p className="mt-2">
                            Pour les projets importants, envisagez quand même un mastering professionnel qui apportera 
                            une perspective externe et une expertise supplémentaire.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="loudness-wars">
                        <AccordionTrigger className="text-sm">La guerre du volume est-elle terminée?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                          <p>
                            Avec l'avènement de la normalisation du volume sur les plateformes de streaming, la "loudness war" 
                            traditionnelle a perdu de sa pertinence, car les morceaux trop compressés sont simplement baissés en volume.
                          </p>
                          <p className="mt-2">
                            L'accent est désormais mis sur la préservation de la dynamique tout en atteignant un niveau compétitif.
                            Une dynamique plus naturelle est souvent préférable pour l'expérience d'écoute.
                          </p>
                          <p className="mt-2">
                            Cela dit, certains genres (EDM, metal) continuent de privilégier un son très dense et compressé 
                            comme élément esthétique, même si cela implique une réduction de volume sur les plateformes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="mastering-plugins">
                        <AccordionTrigger className="text-sm">Quels plugins de mastering recommandez-vous?</AccordionTrigger>
                        <AccordionContent className="text-sm">
                          <div className="space-y-2">
                            <p>Voici quelques plugins recommandés par catégorie:</p>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-muted p-2 rounded-md">
                                <p className="font-medium text-xs">EQ</p>
                                <ul className="text-xs pl-4 list-disc">
                                  <li>FabFilter Pro-Q 3</li>
                                  <li>Equilibrium</li>
                                  <li>Dangerous BAX EQ</li>
                                </ul>
                              </div>
                              
                              <div className="bg-muted p-2 rounded-md">
                                <p className="font-medium text-xs">Compression</p>
                                <ul className="text-xs pl-4 list-disc">
                                  <li>Shadow Hills Mastering</li>
                                  <li>SSL Bus Compressor</li>
                                  <li>TDR Kotelnikov</li>
                                </ul>
                              </div>
                              
                              <div className="bg-muted p-2 rounded-md">
                                <p className="font-medium text-xs">Limiteurs</p>
                                <ul className="text-xs pl-4 list-disc">
                                  <li>FabFilter Pro-L 2</li>
                                  <li>Ozone Maximizer</li>
                                  <li>Weiss MM-1</li>
                                </ul>
                              </div>
                              
                              <div className="bg-muted p-2 rounded-md">
                                <p className="font-medium text-xs">Suites complètes</p>
                                <ul className="text-xs pl-4 list-disc">
                                  <li>iZotope Ozone</li>
                                  <li>T-RackS 5</li>
                                  <li>Wavelab Elements</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="bg-muted p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Formation approfondie</h2>
            <p className="text-muted-foreground">
              Nos programmes de formation vous permettent d'approfondir chaque aspect 
              de la production musicale sous la direction d'ingénieurs professionnels.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Ateliers en ligne</Badge>
              <Badge variant="outline">Cours particuliers</Badge>
              <Badge variant="outline">Projets pratiques</Badge>
              <Badge variant="outline">Certification</Badge>
              <Badge variant="outline">Mentorat</Badge>
            </div>
            <Button>Explorer les formations</Button>
          </div>
          
          <div className="md:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Prochaines sessions</CardTitle>
                <CardDescription>Formations et webinaires à venir</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md shrink-0 text-center w-12">
                    <p className="text-xs">OCT</p>
                    <p className="font-bold">15</p>
                  </div>
                  <div>
                    <p className="font-medium">Masterclass Mixage Moderne</p>
                    <p className="text-xs text-muted-foreground">
                      Techniques avancées pour des mixages équilibrés et percutants
                    </p>
                    <Badge className="mt-1" variant="outline">En ligne</Badge>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md shrink-0 text-center w-12">
                    <p className="text-xs">NOV</p>
                    <p className="font-bold">05</p>
                  </div>
                  <div>
                    <p className="font-medium">Workshop Enregistrement Voix</p>
                    <p className="text-xs text-muted-foreground">
                      De la captation au traitement pour des voix professionnelles
                    </p>
                    <Badge className="mt-1" variant="outline">En ligne</Badge>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md shrink-0 text-center w-12">
                    <p className="text-xs">NOV</p>
                    <p className="font-bold">22</p>
                  </div>
                  <div>
                    <p className="font-medium">Formation Mastering pour Streaming</p>
                    <p className="text-xs text-muted-foreground">
                      Optimisation audio pour les plateformes numériques modernes
                    </p>
                    <Badge className="mt-1" variant="outline">En studio</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Voir toutes les sessions</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionMusicale;
