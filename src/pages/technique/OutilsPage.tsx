
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Laptop, Headphones, Speaker, Settings, Download, ExternalLink, Star, Code, Music, FileMusic, Mic, Waves } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const OutilsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("recording");
  
  const learningPathOptions = [
    { value: "recording", label: "Enregistrement" },
    { value: "mixing", label: "Mixage" },
    { value: "mastering", label: "Mastering" },
  ];

  return (
    <div className="container py-10">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Accueil</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/technique">Aspects Techniques</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Outils et Logiciels</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Outils et Logiciels</h1>
        <Button variant="outline" size="sm" asChild>
          <Link to="/technique">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux aspects techniques
          </Link>
        </Button>
      </div>
      
      <div className="space-y-6 mb-10">
        <p className="text-lg text-muted-foreground">
          Une sélection d'outils recommandés pour la création musicale, avec des comparatifs détaillés, 
          des conseils d'utilisation et des tutoriels pour vous aider à tirer le meilleur parti de votre équipement.
        </p>
        
        <Alert>
          <Music className="h-4 w-4" />
          <AlertTitle>Parcours d'apprentissage</AlertTitle>
          <AlertDescription>
            Choisissez votre parcours d'apprentissage ci-dessous pour découvrir les outils recommandés en fonction de votre objectif.
          </AlertDescription>
        </Alert>
        
        <div className="flex flex-wrap gap-2">
          {learningPathOptions.map((option) => (
            <Button 
              key={option.value}
              variant={selectedCategory === option.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>
      
      <Tabs defaultValue="daw" className="mb-10">
        <TabsList className="mb-4 flex flex-wrap">
          <TabsTrigger value="daw">DAW</TabsTrigger>
          <TabsTrigger value="plugins">Plugins</TabsTrigger>
          <TabsTrigger value="hardware">Matériel</TabsTrigger>
          <TabsTrigger value="utilities">Utilitaires</TabsTrigger>
          <TabsTrigger value="comparison">Comparatifs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="daw">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Stations de Travail Audio Numériques</h2>
            <p className="text-muted-foreground mb-4">
              Les DAW (Digital Audio Workstations) sont au cœur de tout studio moderne. Voici notre sélection des meilleures options
              pour tous les budgets et besoins.
            </p>
            
            <Accordion type="single" collapsible className="mb-6">
              <AccordionItem value="daw-guide">
                <AccordionTrigger>Guide de sélection d'un DAW</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Comment choisir votre DAW</h3>
                    <p>Le choix d'un DAW dépend de plusieurs facteurs :</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Type de production</strong> : Certains DAW sont plus adaptés à l'électronique (Ableton), d'autres à l'enregistrement traditionnel (Pro Tools).</li>
                      <li><strong>Système d'exploitation</strong> : Logic est exclusif à macOS, tandis que FL Studio a longtemps été optimisé pour Windows.</li>
                      <li><strong>Interface</strong> : L'ergonomie varie considérablement entre les DAW.</li>
                      <li><strong>Budget</strong> : Les prix varient de gratuit (Reaper en version d'essai prolongée) à plusieurs centaines d'euros.</li>
                      <li><strong>Évolutivité</strong> : Certains DAW offrent des chemins de mise à niveau plus accessibles que d'autres.</li>
                    </ul>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Conseil d'expert</h4>
                      <p className="text-sm">
                        Ne vous laissez pas impressionner par la complexité apparente des DAW. Commencez avec une version d'essai, 
                        suivez quelques tutoriels de base et concentrez-vous sur l'apprentissage d'un seul DAW plutôt que de passer de l'un à l'autre.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Ableton Live</CardTitle>
                    <Badge>Recommandé</Badge>
                  </div>
                  <CardDescription>Idéal pour la production électronique et le live</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src="https://via.placeholder.com/300x150?text=Ableton+Live" alt="Ableton Live" className="w-full h-40 object-cover rounded-md" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Version:</span>
                      <span className="text-sm text-muted-foreground">11</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Prix:</span>
                      <span className="text-sm text-muted-foreground">99€ - 599€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Plateformes:</span>
                      <span className="text-sm text-muted-foreground">Windows, macOS</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%]">
                    <Download className="mr-2 h-4 w-4" />
                    Essai gratuit
                  </Button>
                  <Button variant="default" size="sm" className="w-[48%]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site officiel
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Logic Pro</CardTitle>
                  <CardDescription>Solution professionnelle d'Apple</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src="https://via.placeholder.com/300x150?text=Logic+Pro" alt="Logic Pro" className="w-full h-40 object-cover rounded-md" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Version:</span>
                      <span className="text-sm text-muted-foreground">10.7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Prix:</span>
                      <span className="text-sm text-muted-foreground">199€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Plateformes:</span>
                      <span className="text-sm text-muted-foreground">macOS uniquement</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%]">
                    <Download className="mr-2 h-4 w-4" />
                    Essai gratuit
                  </Button>
                  <Button variant="default" size="sm" className="w-[48%]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site officiel
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>FL Studio</CardTitle>
                  <CardDescription>Populaire pour la musique électronique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src="https://via.placeholder.com/300x150?text=FL+Studio" alt="FL Studio" className="w-full h-40 object-cover rounded-md" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Version:</span>
                      <span className="text-sm text-muted-foreground">20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Prix:</span>
                      <span className="text-sm text-muted-foreground">99€ - 499€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Plateformes:</span>
                      <span className="text-sm text-muted-foreground">Windows, macOS</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%]">
                    <Download className="mr-2 h-4 w-4" />
                    Essai gratuit
                  </Button>
                  <Button variant="default" size="sm" className="w-[48%]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site officiel
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Pro Tools</CardTitle>
                  <CardDescription>Standard de l'industrie pour l'enregistrement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src="https://via.placeholder.com/300x150?text=Pro+Tools" alt="Pro Tools" className="w-full h-40 object-cover rounded-md" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Version:</span>
                      <span className="text-sm text-muted-foreground">2022</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Prix:</span>
                      <span className="text-sm text-muted-foreground">Abonnement: 29€/mois</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Plateformes:</span>
                      <span className="text-sm text-muted-foreground">Windows, macOS</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%]">
                    <Download className="mr-2 h-4 w-4" />
                    Essai gratuit
                  </Button>
                  <Button variant="default" size="sm" className="w-[48%]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site officiel
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Cubase</CardTitle>
                  <CardDescription>Polyvalent pour composition et production</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src="https://via.placeholder.com/300x150?text=Cubase" alt="Cubase" className="w-full h-40 object-cover rounded-md" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Version:</span>
                      <span className="text-sm text-muted-foreground">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Prix:</span>
                      <span className="text-sm text-muted-foreground">99€ - 559€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Plateformes:</span>
                      <span className="text-sm text-muted-foreground">Windows, macOS</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%]">
                    <Download className="mr-2 h-4 w-4" />
                    Essai gratuit
                  </Button>
                  <Button variant="default" size="sm" className="w-[48%]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site officiel
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Reaper</CardTitle>
                  <CardDescription>Léger, personnalisable et abordable</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src="https://via.placeholder.com/300x150?text=Reaper" alt="Reaper" className="w-full h-40 object-cover rounded-md" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Version:</span>
                      <span className="text-sm text-muted-foreground">6.66</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Prix:</span>
                      <span className="text-sm text-muted-foreground">60€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Plateformes:</span>
                      <span className="text-sm text-muted-foreground">Windows, macOS, Linux</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="w-[48%]">
                    <Download className="mr-2 h-4 w-4" />
                    Essai gratuit
                  </Button>
                  <Button variant="default" size="sm" className="w-[48%]">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Site officiel
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle>Tableau comparatif des DAW</CardTitle>
                  <CardDescription>Caractéristiques principales des stations de travail audio les plus populaires</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>DAW</TableHead>
                        <TableHead>Forces</TableHead>
                        <TableHead>Points faibles</TableHead>
                        <TableHead>Idéal pour</TableHead>
                        <TableHead>Prix</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Ableton Live</TableCell>
                        <TableCell>Workflow créatif, performances live</TableCell>
                        <TableCell>Édition audio moins intuitive</TableCell>
                        <TableCell>Musique électronique, live</TableCell>
                        <TableCell>99€ - 599€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Logic Pro</TableCell>
                        <TableCell>Complet, excellents instruments</TableCell>
                        <TableCell>macOS uniquement</TableCell>
                        <TableCell>Production polyvalente</TableCell>
                        <TableCell>199€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Pro Tools</TableCell>
                        <TableCell>Édition audio, standard industrie</TableCell>
                        <TableCell>Cher, courbe d'apprentissage</TableCell>
                        <TableCell>Studios professionnels</TableCell>
                        <TableCell>29€/mois</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">FL Studio</TableCell>
                        <TableCell>Séquenceur intuitif, mises à jour gratuites</TableCell>
                        <TableCell>Enregistrement moins pratique</TableCell>
                        <TableCell>Beat making, électronique</TableCell>
                        <TableCell>99€ - 499€</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Reaper</TableCell>
                        <TableCell>Léger, personnalisable, abordable</TableCell>
                        <TableCell>Interface moins moderne</TableCell>
                        <TableCell>Tous budgets, personnalisation</TableCell>
                        <TableCell>60€</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Télécharger le guide complet (PDF)</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileMusic className="h-5 w-5 text-primary" />
                    Tutoriel vidéo
                  </CardTitle>
                  <CardDescription>Introduction aux DAW pour débutants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <Button variant="outline">Regarder le tutoriel</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Ressources complémentaires
                  </CardTitle>
                  <CardDescription>Pour approfondir vos connaissances</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">Guide complet de configuration des DAW</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">Optimisation des performances de votre DAW</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">Templates de projets pour différents genres musicaux</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <a href="#" className="text-sm hover:underline">Raccourcis clavier essentiels par DAW</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="plugins">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Plugins Essentiels</h2>
            <p className="text-muted-foreground mb-4">
              Les plugins étendent les capacités de votre DAW et sont essentiels pour le traitement du son, 
              les effets créatifs et les instruments virtuels.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-3">Catégories de plugins</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Traitement dynamique</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">Compresseurs, limiteurs, gates</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Égalisation</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">EQ graphique, paramétrique, dynamique</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Effets temporels</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">Reverb, delay, chorus</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Instruments</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">Synthétiseurs, samplers, pianos</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="mb-6">
              <AccordionItem value="plugin-guide">
                <AccordionTrigger>Comment choisir les bons plugins?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      La quantité de plugins disponibles peut être écrasante. Voici quelques conseils pour faire les bons choix:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Commencez avec les plugins natifs</strong> - Les plugins inclus avec votre DAW sont souvent puissants et suffisants pour débuter.</li>
                      <li><strong>Identifiez vos besoins spécifiques</strong> - Achetez des plugins qui résolvent un problème précis ou apportent une couleur sonore que vous ne pouvez pas obtenir autrement.</li>
                      <li><strong>Testez avant d'acheter</strong> - La plupart des développeurs offrent des versions d'essai gratuites.</li>
                      <li><strong>Attendez les promotions</strong> - Des remises importantes sont proposées lors des fêtes, du Black Friday ou des anniversaires de marques.</li>
                      <li><strong>Qualité {">"} Quantité</strong> - Mieux vaut maîtriser quelques plugins de qualité que d'accumuler une collection que vous n'utilisez pas.</li>
                    </ul>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Plugins gratuits recommandés</h4>
                      <ul className="text-sm space-y-1">
                        <li><strong>TDR Nova</strong> - EQ dynamique puissant</li>
                        <li><strong>OTT</strong> - Compresseur multibande</li>
                        <li><strong>Valhalla Supermassive</strong> - Delay/Reverb créatif</li>
                        <li><strong>Spitfire LABS</strong> - Instruments orchestraux</li>
                        <li><strong>Vital</strong> - Synthétiseur spectral avancé</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Fabfilter Pro-Q 3
                  </CardTitle>
                  <CardDescription>Égalisation professionnelle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground ml-1">(98 avis)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    L'égaliseur le plus précis et flexible du marché, avec une interface intuitive et une qualité sonore exceptionnelle.
                  </p>
                  <div className="flex justify-between text-sm mt-3">
                    <span className="font-medium">Prix:</span>
                    <span>179€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Izotope Ozone 10
                  </CardTitle>
                  <CardDescription>Suite de mastering complète</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4" />
                    <span className="text-xs text-muted-foreground ml-1">(76 avis)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Solution de mastering tout-en-un avec IA assistante pour obtenir rapidement des résultats professionnels.
                  </p>
                  <div className="flex justify-between text-sm mt-3">
                    <span className="font-medium">Prix:</span>
                    <span>299€ - 499€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Valhalla VintageVerb
                  </CardTitle>
                  <CardDescription>Reverb vintage de haute qualité</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground ml-1">(112 avis)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Caractère vintage authentique avec 17 algorithmes de réverbération inspirés des années 70 à 2000.
                  </p>
                  <div className="flex justify-between text-sm mt-3">
                    <span className="font-medium">Prix:</span>
                    <span>50€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Native Instruments Kontakt
                  </CardTitle>
                  <CardDescription>Échantillonneur professionnel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4" />
                    <span className="text-xs text-muted-foreground ml-1">(89 avis)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    La référence en matière d'échantillonneurs, avec une immense bibliothèque d'instruments virtuels disponibles.
                  </p>
                  <div className="flex justify-between text-sm mt-3">
                    <span className="font-medium">Prix:</span>
                    <span>399€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    UAD Neve 1073
                  </CardTitle>
                  <CardDescription>Émulation de préampli légendaire</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground ml-1">(67 avis)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Réplique fidèle du préampli britannique emblématique, apportant chaleur et caractère analogique.
                  </p>
                  <div className="flex justify-between text-sm mt-3">
                    <span className="font-medium">Prix:</span>
                    <span>149€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Soundtoys 5
                  </CardTitle>
                  <CardDescription>Collection d'effets créatifs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4" />
                    <span className="text-xs text-muted-foreground ml-1">(95 avis)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Suite complète d'effets créatifs de haute qualité, parfaite pour ajouter du caractère à vos productions.
                  </p>
                  <div className="flex justify-between text-sm mt-3">
                    <span className="font-medium">Prix:</span>
                    <span>399€</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="hardware">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Matériel Audio Essentiel</h2>
            <p className="text-muted-foreground mb-4">
              Le bon équipement matériel est crucial pour capturer et contrôler le son avec précision. Découvrez notre sélection de matériel recommandé.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mic className="mr-2 h-5 w-5 text-primary" />
                    Microphones
                  </CardTitle>
                  <CardDescription>Pour capturer les voix et instruments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Le choix du microphone dépend de votre source sonore et du contexte d'enregistrement.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Shure SM58</span>
                      <span className="text-muted-foreground">~100€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rode NT1</span>
                      <span className="text-muted-foreground">~250€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Neumann TLM 103</span>
                      <span className="text-muted-foreground">~1100€</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Voir le guide complet</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Laptop className="mr-2 h-5 w-5 text-primary" />
                    Interfaces Audio
                  </CardTitle>
                  <CardDescription>Pour connecter vos instruments à l'ordinateur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Une interface de qualité est essentielle pour une conversion audio fidèle et des préamplis propres.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Focusrite Scarlett 2i2</span>
                      <span className="text-muted-foreground">~150€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Universal Audio Apollo Twin</span>
                      <span className="text-muted-foreground">~800€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>RME Babyface Pro</span>
                      <span className="text-muted-foreground">~700€</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Voir le guide complet</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Headphones className="mr-2 h-5 w-5 text-primary" />
                    Casques de monitoring
                  </CardTitle>
                  <CardDescription>Pour écouter avec précision</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Un bon casque de monitoring offre une reproduction fidèle pour le mixage et l'enregistrement.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Audio-Technica ATH-M50x</span>
                      <span className="text-muted-foreground">~150€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Beyerdynamic DT 770 Pro</span>
                      <span className="text-muted-foreground">~130€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sennheiser HD 600</span>
                      <span className="text-muted-foreground">~300€</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Voir le guide complet</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Speaker className="mr-2 h-5 w-5 text-primary" />
                    Enceintes de monitoring
                  </CardTitle>
                  <CardDescription>Pour une référence d'écoute fiable</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Des enceintes neutres et précises sont essentielles pour un mixage transférable sur tous les systèmes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>KRK Rokit 5 G4</span>
                      <span className="text-muted-foreground">~180€/unité</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Yamaha HS7</span>
                      <span className="text-muted-foreground">~220€/unité</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Focal Alpha 65</span>
                      <span className="text-muted-foreground">~350€/unité</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Voir le guide complet</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5 text-primary" />
                    Contrôleurs MIDI
                  </CardTitle>
                  <CardDescription>Pour jouer et programmer vos instruments virtuels</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Un contrôleur adapté à votre workflow améliore grandement la productivité et l'expressivité.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Akai MPK Mini MK3</span>
                      <span className="text-muted-foreground">~100€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Arturia KeyLab Essential 61</span>
                      <span className="text-muted-foreground">~250€</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Native Instruments Komplete Kontrol S49</span>
                      <span className="text-muted-foreground">~600€</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Voir le guide complet</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Waves className="mr-2 h-5 w-5 text-primary" />
                    Traitement acoustique
                  </CardTitle>
                  <CardDescription>Pour optimiser votre espace d'écoute</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    L'acoustique de votre pièce est souvent négligée mais cruciale pour des décisions de mixage précises.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Panneaux acoustiques basiques</span>
                      <span className="text-muted-foreground">~30€/unité</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pièges à basses (bass traps)</span>
                      <span className="text-muted-foreground">~50-100€/unité</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kit de traitement complet</span>
                      <span className="text-muted-foreground">~300-500€</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Voir le guide complet</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="utilities">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Logiciels Utilitaires</h2>
            <p className="text-muted-foreground mb-4">
              Ces outils complémentaires sont essentiels pour organiser, analyser et optimiser votre workflow de production musicale.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Analyseurs de spectre</CardTitle>
                  <CardDescription>Visualiser les fréquences audio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Les analyseurs vous aident à identifier les problèmes de mixage et à équilibrer les fréquences.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">SPAN (Voxengo)</span>
                      <Badge variant="outline">Gratuit</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">FabFilter Pro-Q 3</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">iZotope Insight 2</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Comparer</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Gestion de samples</CardTitle>
                  <CardDescription>Organiser votre bibliothèque sonore</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Ces outils permettent de cataloguer et retrouver rapidement vos samples et enregistrements.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Loopcloud</span>
                      <Badge variant="outline">Freemium</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Adsr Sample Manager</span>
                      <Badge variant="outline">Gratuit</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Sononym</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Comparer</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Accordeurs et métronomes</CardTitle>
                  <CardDescription>Précision rythmique et harmonique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Indispensables pour l'enregistrement d'instruments et la composition précise.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Ableton Live Tuner</span>
                      <Badge variant="outline">Intégré</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Melda Production MTuner</span>
                      <Badge variant="outline">Gratuit</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Waves Tune Real-Time</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Comparer</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Convertisseurs de format</CardTitle>
                  <CardDescription>Gérer différents formats audio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Utiles pour la compatibilité entre plateformes et la préparation de fichiers pour différents usages.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Audacity</span>
                      <Badge variant="outline">Gratuit</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Switch Audio Converter</span>
                      <Badge variant="outline">Freemium</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">dBpoweramp</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Comparer</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Éditeurs audio</CardTitle>
                  <CardDescription>Édition précise des fichiers audio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Pour l'édition fine, le nettoyage audio et la préparation de samples.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Audacity</span>
                      <Badge variant="outline">Gratuit</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Adobe Audition</span>
                      <Badge variant="outline">Abonnement</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">iZotope RX</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Comparer</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Outils collaboratifs</CardTitle>
                  <CardDescription>Travailler en équipe à distance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Solutions pour le travail en collaboration, partage et révision de projets.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Splice Studio</span>
                      <Badge variant="outline">Freemium</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Audiomovers ListenTo</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="font-medium">SessionWire</span>
                      <Badge variant="outline">Payant</Badge>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Comparer</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="comparison">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Comparatifs détaillés</h2>
            <p className="text-muted-foreground mb-4">
              Analyses approfondies pour vous aider à choisir les bons outils pour vos besoins spécifiques.
            </p>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Comparaison des DAW par cas d'usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Utilisation</TableHead>
                        <TableHead>DAW recommandé</TableHead>
                        <TableHead>Alternative</TableHead>
                        <TableHead>Points forts</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Production électronique</TableCell>
                        <TableCell>Ableton Live</TableCell>
                        <TableCell>FL Studio</TableCell>
                        <TableCell>Flexibilité session/arrangement, workflow créatif</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Enregistrement multipiste</TableCell>
                        <TableCell>Pro Tools</TableCell>
                        <TableCell>Studio One</TableCell>
                        <TableCell>Édition précise, standard industriel</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Composition orchestrale</TableCell>
                        <TableCell>Cubase</TableCell>
                        <TableCell>Logic Pro</TableCell>
                        <TableCell>Outils d'arrangement avancés, prise en charge MIDI</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Podcast / Post-production</TableCell>
                        <TableCell>Adobe Audition</TableCell>
                        <TableCell>Reaper</TableCell>
                        <TableCell>Outils d'édition vocale, réparation audio</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Budget limité</TableCell>
                        <TableCell>Reaper</TableCell>
                        <TableCell>Cakewalk</TableCell>
                        <TableCell>Rapport qualité/prix exceptionnel, personnalisable</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Évolution des prix des équipements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted rounded-md flex items-center justify-center mb-4">
                    [Graphique d'évolution des prix]
                  </div>
                  <p className="text-sm text-muted-foreground">
                    L'analyse montre que les équipements de niveau entrée et intermédiaire sont devenus plus 
                    accessibles ces dernières années, tandis que le matériel haut de gamme maintient des prix stables.
                    Les microphones et interfaces sont les catégories où le rapport qualité/prix s'est le plus amélioré.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Satisfaction utilisateurs par catégorie</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">DAW</span>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                      <Progress value={87} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Plugins d'effets</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Interfaces audio</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Instruments virtuels</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Microphones</span>
                        <span className="text-sm font-medium">88%</span>
                      </div>
                      <Progress value={88} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Enceintes de monitoring</span>
                        <span className="text-sm font-medium">82%</span>
                      </div>
                      <Progress value={82} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OutilsPage;
