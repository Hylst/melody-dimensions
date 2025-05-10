import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

// Importer les composants de contenu du tutoriel
import { 
  EQPluginsContent,
  CompresseursContent,
  ReverbDelayContent,
  InstrumentsContent,
  AnalyseursContent,
  InstallationContent
} from "@/components/tutoriels/vst-plugins-essentiels/content";
import { useTutorialProgress } from "@/components/tutoriels/hooks/useTutorialProgress";

const VstPluginsEssentiels = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "eq-plugins";
  
  // Utiliser le hook de progression
  const { getTutorialProgress } = useTutorialProgress();
  
  // Calculer la progression du tutoriel
  const tutorialId = "vst-plugins-essentiels";
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
          <h1 className="text-3xl font-bold mb-2">Plugins VST essentiels (gratuits)</h1>
          <p className="text-muted-foreground">
            Découvrez une sélection de plugins VST gratuits indispensables pour la production musicale
          </p>
        </div>

        <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1563330232-57114bb0823c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Plugins VST" 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Introduction aux plugins VST</h2>
                <p className="mb-4">
                  Les plugins VST (Virtual Studio Technology) sont des outils essentiels pour la production musicale moderne.
                  Ils permettent d'étendre les fonctionnalités de votre station de travail audio numérique (DAW) avec des
                  effets, des instruments virtuels et des outils d'analyse.
                </p>
                <p className="mb-4">
                  Ce tutoriel vous présente une sélection de plugins VST gratuits de haute qualité qui peuvent
                  considérablement améliorer vos productions musicales sans coût supplémentaire.
                </p>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-6 mb-4">
                <TabsTrigger value="eq-plugins">Égaliseurs</TabsTrigger>
                <TabsTrigger value="compresseurs">Compresseurs</TabsTrigger>
                <TabsTrigger value="reverb-delay">Réverb & Delay</TabsTrigger>
                <TabsTrigger value="instruments">Instruments</TabsTrigger>
                <TabsTrigger value="analyseurs">Analyseurs</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
              </TabsList>

              <TabsContent value="eq-plugins" className="space-y-4">
                <EQPluginsContent />
              </TabsContent>

              <TabsContent value="compresseurs" className="space-y-4">
                <CompresseursContent />
              </TabsContent>

              <TabsContent value="reverb-delay" className="space-y-4">
                <ReverbDelayContent />
              </TabsContent>

              <TabsContent value="instruments" className="space-y-4">
                <InstrumentsContent />
              </TabsContent>

              <TabsContent value="analyseurs" className="space-y-4">
                <AnalyseursContent />
              </TabsContent>

              <TabsContent value="installation" className="space-y-4">
                <InstallationContent />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">À propos de ce tutoriel</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Difficulté</h4>
                    <p>Débutant</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Durée</h4>
                    <p>45 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Logiciels</h4>
                    <p>Divers</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Progression</h4>
                    <div className="w-full bg-muted rounded-full h-2.5 mt-2">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{progressPercentage}% complété</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VstPluginsEssentiels;