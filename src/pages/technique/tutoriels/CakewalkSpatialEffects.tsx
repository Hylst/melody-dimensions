import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

// Importer les composants de contenu du tutoriel
import { 
  IntroductionContent,
  ReverbContent,
  DelayContent,
  StereoImagingContent,
  PracticalTipsContent
} from "@/components/tutoriels/cakewalk-spatial-effects/content";
import { useTutorialProgress } from "@/components/tutoriels/hooks/useTutorialProgress";

const CakewalkSpatialEffects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "introduction";
  
  // Utiliser le hook de progression
  const { getTutorialProgress } = useTutorialProgress();
  
  // Calculer la progression du tutoriel
  const tutorialId = "cakewalk-spatial-effects";
  const sectionsCount = 5; // Nombre total de sections
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
          <h1 className="text-3xl font-bold mb-2">Effets spatiaux dans Cakewalk</h1>
          <p className="text-muted-foreground">
            Maîtrisez les effets spatiaux pour créer de la profondeur et de l'espace dans vos mixages avec Cakewalk
          </p>
        </div>

        <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Cakewalk Spatial Effects" 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Introduction aux effets spatiaux</h2>
                <p className="mb-4">
                  Les effets spatiaux sont essentiels pour créer de la profondeur, de la largeur et de l'immersion dans vos mixages.
                  Cakewalk offre de puissants outils pour manipuler l'espace sonore et donner vie à vos productions.
                </p>
                <p className="mb-4">
                  Ce tutoriel vous guidera à travers les différents effets spatiaux disponibles dans Cakewalk et vous montrera
                  comment les utiliser efficacement dans vos projets musicaux.
                </p>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="introduction">Introduction</TabsTrigger>
                <TabsTrigger value="reverb">Réverbération</TabsTrigger>
                <TabsTrigger value="delay">Delay</TabsTrigger>
                <TabsTrigger value="stereo-imaging">Image stéréo</TabsTrigger>
                <TabsTrigger value="practical-tips">Conseils pratiques</TabsTrigger>
              </TabsList>

              <TabsContent value="introduction" className="space-y-4">
                <IntroductionContent />
              </TabsContent>

              <TabsContent value="reverb" className="space-y-4">
                <ReverbContent />
              </TabsContent>

              <TabsContent value="delay" className="space-y-4">
                <DelayContent />
              </TabsContent>

              <TabsContent value="stereo-imaging" className="space-y-4">
                <StereoImagingContent />
              </TabsContent>

              <TabsContent value="practical-tips" className="space-y-4">
                <PracticalTipsContent />
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
                    <p>Intermédiaire</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Durée</h4>
                    <p>60 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Logiciels</h4>
                    <p>Cakewalk</p>
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

export default CakewalkSpatialEffects;