import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Play, FileAudio, Sliders } from "lucide-react";

// Importer les composants de contenu du tutoriel
import { 
  IntroductionContent,
  BalanceContent,
  EQContent,
  CompressionContent,
  ReverbContent,
  WorkflowContent
} from "@/components/tutoriels/mixage-fondamentaux/content";
import { useTutorialProgress } from "@/components/tutoriels/hooks/useTutorialProgress";

const MixageFondamentaux = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "introduction";
  
  // Utiliser le hook de progression
  const { getTutorialProgress } = useTutorialProgress();
  
  // Calculer la progression du tutoriel
  const tutorialId = "mixage-fondamentaux";
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
          <h1 className="text-3xl font-bold mb-2">Les fondamentaux du mixage audio</h1>
          <p className="text-muted-foreground">
            Maîtrisez les concepts essentiels du mixage audio pour donner vie à vos productions musicales
          </p>
        </div>

        <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Console de mixage" 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Introduction aux fondamentaux du mixage</h2>
                <p className="mb-4">
                  Le mixage est une étape cruciale dans la production musicale qui transforme des pistes individuelles en un ensemble cohérent et équilibré. 
                  Ce processus artistique et technique permet de donner vie à votre musique en créant une expérience sonore immersive et professionnelle.
                </p>
                <p className="mb-4">
                  Dans ce tutoriel, nous explorerons les concepts fondamentaux du mixage audio qui s'appliquent à tous les styles musicaux et à tous les logiciels de production. 
                  Vous découvrirez les principes essentiels qui vous permettront d'améliorer considérablement la qualité de vos productions, même avec un équipement modeste.
                </p>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-6 mb-4">
                <TabsTrigger value="introduction">Introduction</TabsTrigger>
                <TabsTrigger value="balance">Balance</TabsTrigger>
                <TabsTrigger value="eq">Égalisation</TabsTrigger>
                <TabsTrigger value="compression">Compression</TabsTrigger>
                <TabsTrigger value="reverb">Réverbération</TabsTrigger>
                <TabsTrigger value="workflow">Workflow</TabsTrigger>
              </TabsList>

              <TabsContent value="introduction" className="space-y-4">
                <IntroductionContent />
              </TabsContent>

              <TabsContent value="balance" className="space-y-4">
                <BalanceContent />
              </TabsContent>

              <TabsContent value="eq" className="space-y-4">
                <EQContent />
              </TabsContent>

              <TabsContent value="compression" className="space-y-4">
                <CompressionContent />
              </TabsContent>

              <TabsContent value="reverb" className="space-y-4">
                <ReverbContent />
              </TabsContent>

              <TabsContent value="workflow" className="space-y-4">
                <WorkflowContent />
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
                <h3 className="text-lg font-semibold mb-3">Ressources utiles</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://www.soundonsound.com/techniques/mixing-essentials" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" /> Guide complet du mixage (Sound On Sound)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.izotope.com/en/learn/music-production-articles.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" /> Articles sur la production musicale (iZotope)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/playlist?list=PLXmi76euGSyzX8KMPAHJPyOSZy5w4CsV9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <Play className="h-4 w-4" /> Tutoriels vidéo sur le mixage
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
                      to="/technique/tutoriels/ardour-mixing" 
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <Sliders className="h-4 w-4" /> Mixage avec Ardour
                    </Link>
                  </li>
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

export default MixageFondamentaux;