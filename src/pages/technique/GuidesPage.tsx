import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, FileText, Video, Laptop, Headphones, Mic, Waves, BarChart2, Gauge, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

const GuidesPage = () => {
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
            <BreadcrumbLink>Guides Pratiques</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Guides Pratiques</h1>
        <Button variant="outline" size="sm" asChild>
          <Link to="/technique">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux aspects techniques
          </Link>
        </Button>
      </div>
      
      <div className="space-y-6 mb-10">
        <p className="text-lg text-muted-foreground">
          Des ressources pratiques pour vous aider à maîtriser les différents aspects de la production musicale, 
          de l'enregistrement au mixage en passant par la théorie.
        </p>
        
        <Alert className="bg-primary/5 border-primary/20">
          <BookOpen className="h-4 w-4" />
          <AlertTitle>Collections de guides</AlertTitle>
          <AlertDescription>
            Explorez nos guides détaillés organisés par domaine d'expertise pour approfondir vos connaissances techniques.
          </AlertDescription>
        </Alert>
      </div>

      <Tabs defaultValue="recording" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="recording" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Enregistrement
          </TabsTrigger>
          <TabsTrigger value="mixing" className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            Mixage
          </TabsTrigger>
          <TabsTrigger value="theory" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Théorie
          </TabsTrigger>
          <TabsTrigger value="software" className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            Logiciels
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recording">
          <h2 className="text-2xl font-semibold mb-6">Guides d'enregistrement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  Microphones et techniques
                </CardTitle>
                <CardDescription>Guide complet des techniques de prise de son</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Techniques+de+microphone" 
                    alt="Techniques de microphone" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Découvrez les différents types de microphones et comment les positionner pour obtenir le son désiré selon l'instrument.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Dynamiques</Badge>
                  <Badge variant="outline">Condensateurs</Badge>
                  <Badge variant="outline">Positionnement</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary" />
                  Monitoring et acoustique
                </CardTitle>
                <CardDescription>Optimisation de l'écoute en studio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Acoustique+studio" 
                    alt="Acoustique studio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Comment configurer votre espace d'écoute pour des décisions de mixage précises et des enregistrements de qualité.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Traitement acoustique</Badge>
                  <Badge variant="outline">Positionnement</Badge>
                  <Badge variant="outline">Calibration</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Configuration DAW
                </CardTitle>
                <CardDescription>Paramétrer votre station de travail</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Configuration+DAW" 
                    alt="Configuration DAW" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Guide pas à pas pour configurer efficacement votre DAW pour l'enregistrement, avec optimisation des performances.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Buffer</Badge>
                  <Badge variant="outline">Routage</Badge>
                  <Badge variant="outline">Templates</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  Enregistrement de voix
                </CardTitle>
                <CardDescription>Techniques pour des voix professionnelles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Enregistrement+voix" 
                    alt="Enregistrement voix" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Des techniques spécialisées pour capturer des voix claires, présentes et expressives pour tous types de projets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chant</Badge>
                  <Badge variant="outline">Narration</Badge>
                  <Badge variant="outline">Podcast</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-primary" />
                  Enregistrement de batterie
                </CardTitle>
                <CardDescription>Capturer un kit de batterie complet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Enregistrement+batterie" 
                    alt="Enregistrement batterie" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  De la configuration minimale à l'installation complète multi-microphones pour des batteries dynamiques et définies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Microphones</Badge>
                  <Badge variant="outline">Placement</Badge>
                  <Badge variant="outline">Phase</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary" />
                  Enregistrement en home studio
                </CardTitle>
                <CardDescription>Maximiser les résultats avec un budget limité</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Home+studio" 
                    alt="Home studio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Stratégies et astuces pour obtenir des enregistrements de qualité professionnelle dans un environnement domestique.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Budget</Badge>
                  <Badge variant="outline">Acoustique DIY</Badge>
                  <Badge variant="outline">Multi-usage</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="mixing">
          <h2 className="text-2xl font-semibold mb-6">Guides de mixage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-primary" />
                  Égalisation
                </CardTitle>
                <CardDescription>L'art de sculpter les fréquences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Guide+EQ" 
                    alt="Guide EQ" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Techniques d'égalisation pour créer de l'espace et de la clarté dans vos mixages, avec approches par instrument.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">EQ soustractif</Badge>
                  <Badge variant="outline">EQ dynamique</Badge>
                  <Badge variant="outline">Filtres</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  Compression
                </CardTitle>
                <CardDescription>Maîtriser la dynamique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Guide+compression" 
                    alt="Guide compression" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Comment utiliser efficacement la compression pour contrôler la dynamique et ajouter du caractère à vos enregistrements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ratio</Badge>
                  <Badge variant="outline">Attack/Release</Badge>
                  <Badge variant="outline">Parallel</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-primary" />
                  Effets spatiaux
                </CardTitle>
                <CardDescription>Reverb, delay et profondeur</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Effets+spatiaux" 
                    alt="Effets spatiaux" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Créez de la profondeur et de l'espace dans vos mixages avec les effets spatiaux et techniques de placement en 3D.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Réverbération</Badge>
                  <Badge variant="outline">Delay</Badge>
                  <Badge variant="outline">Stéréo</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-primary" />
                  Balance et niveaux
                </CardTitle>
                <CardDescription>Fondements d'un bon mixage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Balance+et+niveaux" 
                    alt="Balance et niveaux" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Établir une balance correcte entre les éléments d'un mixage et gérer efficacement les niveaux à chaque étape.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Gain staging</Badge>
                  <Badge variant="outline">VU metering</Badge>
                  <Badge variant="outline">Panoramique</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  Mixage par genre
                </CardTitle>
                <CardDescription>Approches spécifiques selon les styles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Mixage+par+genre" 
                    alt="Mixage par genre" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Techniques et approches de mixage adaptées à différents genres musicaux et leurs spécificités sonores.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Pop</Badge>
                  <Badge variant="outline">Rock</Badge>
                  <Badge variant="outline">EDM</Badge>
                  <Badge variant="outline">Hip-Hop</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-primary" />
                  Mastering pour débutants
                </CardTitle>
                <CardDescription>Finalisation de vos productions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Mastering+débutant" 
                    alt="Mastering débutant" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Introduction au mastering pour les producteurs souhaitant finaliser leurs propres morceaux avec des outils accessibles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">LUFS</Badge>
                  <Badge variant="outline">Limiteur</Badge>
                  <Badge variant="outline">Streaming</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="theory">
          <h2 className="text-2xl font-semibold mb-6">Guides théoriques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Harmonie musicale
                </CardTitle>
                <CardDescription>Principes fondamentaux</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Harmonie+musicale" 
                    alt="Harmonie musicale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Introduction aux concepts de base de l'harmonie et comment les appliquer à vos compositions pour créer des progressions efficaces.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Accords</Badge>
                  <Badge variant="outline">Progressions</Badge>
                  <Badge variant="outline">Modulations</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Rythmique avancée
                </CardTitle>
                <CardDescription>Au-delà des mesures simples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Rythmique+avancée" 
                    alt="Rythmique avancée" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Explorez les métriques complexes et les polyrythmes pour enrichir vos compositions et créer des grooves uniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Polyrythmes</Badge>
                  <Badge variant="outline">Mesures composées</Badge>
                  <Badge variant="outline">Syncope</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Composition structurée
                </CardTitle>
                <CardDescription>Formes et développement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Composition+structurée" 
                    alt="Composition structurée" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Techniques pour structurer efficacement vos compositions et développer vos idées musicales pour maintenir l'intérêt.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Forme AABA</Badge>
                  <Badge variant="outline">Couplet/Refrain</Badge>
                  <Badge variant="outline">Transitions</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Théorie modale
                </CardTitle>
                <CardDescription>Exploration des modes musicaux</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Théorie+modale" 
                    alt="Théorie modale" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Comprendre et utiliser les modes musicaux pour créer différentes couleurs et ambiances dans vos compositions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Modes grecs</Badge>
                  <Badge variant="outline">Application pratique</Badge>
                  <Badge variant="outline">Emprunts modaux</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Orchestration moderne
                </CardTitle>
                <CardDescription>Arrangements pour productions actuelles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Orchestration+moderne" 
                    alt="Orchestration moderne" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Principes d'orchestration adaptés aux productions musicales contemporaines, mêlant instruments acoustiques et électroniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Textures</Badge>
                  <Badge variant="outline">Hybride</Badge>
                  <Badge variant="outline">Doublages</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Mélodies mémorables
                </CardTitle>
                <CardDescription>Techniques de composition mélodique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Mélodies+mémorables" 
                    alt="Mélodies mémorables" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Principes et techniques pour créer des mélodies accrocheuses et mémorables qui captiveront votre audience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Motifs</Badge>
                  <Badge variant="outline">Développement</Badge>
                  <Badge variant="outline">Hook</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="software">
          <h2 className="text-2xl font-semibold mb-6">Guides logiciels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Ableton Live
                </CardTitle>
                <CardDescription>De débutant à expert</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Ableton+Live" 
                    alt="Ableton Live" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Guide complet pour maîtriser Ableton Live, de l'installation aux techniques de production avancées.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Session View</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Max for Live</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Logic Pro
                </CardTitle>
                <CardDescription>Production sur Mac optimisée</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Logic+Pro" 
                    alt="Logic Pro" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Exploitez tout le potentiel de Logic Pro pour des productions efficaces et de haute qualité sur macOS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Flex Time</Badge>
                  <Badge variant="outline">Smart Controls</Badge>
                  <Badge variant="outline">Sound Library</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  FL Studio
                </CardTitle>
                <CardDescription>Beat making et production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=FL+Studio" 
                    alt="FL Studio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Workflow optimisé pour la production de beats et de musique électronique avec FL Studio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Piano Roll</Badge>
                  <Badge variant="outline">Pattern Mode</Badge>
                  <Badge variant="outline">Plugins</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Pro Tools
                </CardTitle>
                <CardDescription>Standard de l'industrie</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Pro+Tools" 
                    alt="Pro Tools" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Maîtrisez Pro Tools pour l'enregistrement, l'édition et le mixage professionnel en studio ou à domicile.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Édition</Badge>
                  <Badge variant="outline">Routing</Badge>
                  <Badge variant="outline">Collaboration</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Plugins essentiels
                </CardTitle>
                <CardDescription>Sélection et utilisation optimale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Plugins+essentiels" 
                    alt="Plugins essentiels" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Guide des plugins indispensables par catégorie et comment les utiliser efficacement dans vos productions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Effets</Badge>
                  <Badge variant="outline">Instruments</Badge>
                  <Badge variant="outline">Utilitaires</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  Synthèse sonore
                </CardTitle>
                <CardDescription>Création de sons de synthétiseur</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/640x360?text=Synthèse+sonore" 
                    alt="Synthèse sonore" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Comprendre et maîtriser les différentes techniques de synthèse pour créer vos propres sons de A à Z.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Soustractive</Badge>
                  <Badge variant="outline">FM</Badge>
                  <Badge variant="outline">Wavetable</Badge>
                </div>
                <Button variant="outline" className="w-full">Lire le guide</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Formats disponibles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-background p-3 rounded-full">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">PDFs</h3>
              <p className="text-sm text-muted-foreground">Guides détaillés à télécharger et consulter hors ligne</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-background p-3 rounded-full">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Tutoriels vidéo</h3>
              <p className="text-sm text-muted-foreground">Démonstrations visuelles avec exemples pratiques</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-background p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Articles interactifs</h3>
              <p className="text-sm text-muted-foreground">Contenus enrichis et exemples sonores comparatifs</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Derniers guides ajoutés</CardTitle>
            <CardDescription>Ne manquez pas nos ressources les plus récentes</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 pb-2 border-b">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BarChart2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Compression parallèle avancée</p>
                  <p className="text-xs text-muted-foreground">Ajouté le 28 avril 2023</p>
                </div>
                <Badge className="ml-auto">Nouveau</Badge>
              </li>
              <li className="flex items-start gap-3 pb-2 border-b">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mic className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Enregistrement d'instruments acoustiques</p>
                  <p className="text-xs text-muted-foreground">Ajouté le 15 avril 2023</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Laptop className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Workflow Logic Pro pour compositeurs</p>
                  <p className="text-xs text-muted-foreground">Ajouté le 2 avril 2023</p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Voir tous les guides récents</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Programmes d'apprentissage</CardTitle>
            <CardDescription>Parcours structurés pour progression étape par étape</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium flex items-center gap-2">
                  <Mic className="h-4 w-4 text-primary" />
                  Fondamentaux de l'enregistrement
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  De la théorie basique à l'enregistrement multi-pistes en 8 modules.
                </p>
                <div className="flex justify-between text-xs mb-1">
                  <span>Progression</span>
                  <span>3/8 modules</span>
                </div>
                <Progress value={37.5} className="h-2" />
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-primary" />
                  Masterclass mixage
                </h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">
                  Formation complète en 12 modules pour des mixages professionnels.
                </p>
                <div className="flex justify-between text-xs mb-1">
                  <span>Progression</span>
                  <span>0/12 modules</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Découvrir les programmes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GuidesPage;
