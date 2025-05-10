import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Play, FileAudio, Sliders } from "lucide-react";

// Importer les composants de contenu du tutoriel
import { 
  PreparationContent,
  RoutingContent,
  PluginsContent,
  AutomationContent,
  GroupesContent,
  FinalisationContent
} from "@/components/tutoriels/ardour-mixing/content";
import { useTutorialProgress } from "@/components/tutoriels/hooks/useTutorialProgress";

const ArdourMixing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "preparation";
  
  // Utiliser le hook de progression
  const { getTutorialProgress } = useTutorialProgress();
  
  // Calculer la progression du tutoriel
  const tutorialId = "ardour-mixing";
  const sectionsCount = 6; // Nombre total de sections
  const progressPercentage = getTutorialProgress(tutorialId, sectionsCount);
  
  // Gérer le changement d'onglet
  const handleTabChange = (value: string) => {
    setSearchParams({ section: value });
  };
  
  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/technique/tutoriels" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Retour aux tutoriels
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Mixage avec Ardour</h1>
          <p className="text-muted-foreground">
            Apprenez à utiliser Ardour pour réaliser des mixages professionnels avec ce DAW open source puissant
          </p>
        </div>

        <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Interface de mixage Ardour" 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Introduction au mixage avec Ardour</h2>
                <p className="mb-4">
                  Ardour est un puissant logiciel d'enregistrement et de mixage audio open source qui offre des fonctionnalités professionnelles 
                  comparables à celles des DAW commerciaux. Son interface de mixage robuste et ses capacités de routage flexibles en font un 
                  excellent choix pour réaliser des mixages de qualité professionnelle.
                </p>
                <p className="mb-4">
                  Dans ce tutoriel, nous explorerons les fonctionnalités de mixage avancées d'Ardour et apprendrons à les utiliser efficacement 
                  pour créer des mixages équilibrés, dynamiques et professionnels.
                </p>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-6 mb-4">
                <TabsTrigger value="preparation">Préparation</TabsTrigger>
                <TabsTrigger value="routing">Routage</TabsTrigger>
                <TabsTrigger value="plugins">Plugins</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="groupes">Groupes</TabsTrigger>
                <TabsTrigger value="finalisation">Finalisation</TabsTrigger>
              </TabsList>

              <TabsContent value="preparation" className="space-y-4">
                <PreparationContent />
              </TabsContent>

              <TabsContent value="routing" className="space-y-4">
                <RoutingContent />
              </TabsContent>

              <TabsContent value="plugins" className="space-y-4">
                <PluginsContent />
              </TabsContent>

              <TabsContent value="automation" className="space-y-4">
                <AutomationContent />
              </TabsContent>

              <TabsContent value="groupes" className="space-y-4">
                <GroupesContent />
              </TabsContent>

              <TabsContent value="finalisation" className="space-y-4">
                <FinalisationContent />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Progression du tutoriel</h3>
                <div className="h-2 bg-muted rounded-full mb-2 overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">{progressPercentage}% complété</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Prérequis</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/technique/tutoriels/ardour-multitrack" 
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <FileAudio className="h-4 w-4" /> Édition multipiste avec Ardour
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/technique/tutoriels/mixage-fondamentaux" 
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <Sliders className="h-4 w-4" /> Les fondamentaux du mixage audio
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Ressources utiles</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://manual.ardour.org/mixing/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" /> Manuel officiel d'Ardour - Mixage
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/playlist?list=PLaMuCSOUQoOhM_URWL9XjkXBR9CvPbZ8N" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <Play className="h-4 w-4" /> Tutoriels vidéo Ardour
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://ardour.org/download.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <Download className="h-4 w-4" /> Télécharger Ardour
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Tutoriels liés</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/technique/tutoriels/vst-plugins-essentiels" 
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <FileAudio className="h-4 w-4" /> Plugins VST essentiels (gratuits)
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArdourMixing;