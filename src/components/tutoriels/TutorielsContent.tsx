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

import { 
  tutorials, 
  getTutorialsByCategory,
  useTutorialProgress 
} from "./index";

const TutorielsContent = () => {
  const { getTutorialProgress, isTutorialCompleted } = useTutorialProgress();

  // Fonction pour rendre une carte de tutoriel
  const renderTutorialCard = (tutorialId: string, title: string, description: string, imageSrc: string, slug: string, difficulty: string, duration: string, software: string, sectionsCount: number) => {
    const progressPercentage = getTutorialProgress(tutorialId, sectionsCount);
    const isCompleted = isTutorialCompleted(tutorialId);
    
    // Map des couleurs pour les niveaux de difficulté
    const difficultyColors = {
      débutant: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      intermédiaire: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      avancé: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    };
    
    return (
      <Card className="overflow-hidden flex flex-col">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty as keyof typeof difficultyColors]}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {duration}
            </span>
          </div>
        </div>
        
        <CardContent className="p-4 flex-grow">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium">{isCompleted ? "Terminé" : `Progression: ${progressPercentage}%`}</span>
            <Badge variant="outline">{software}</Badge>
          </div>
          
          <Progress value={progressPercentage} className="h-1 mb-4" />
        </CardContent>
        
        <CardFooter className="px-4 py-3 border-t bg-muted/30">
          <Link to={`/technique/tutoriels/${slug}`} className="w-full">
            <Button variant="outline" className="w-full">
              {isCompleted ? "Revoir le tutoriel" : "Voir le tutoriel"}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  };

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
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getTutorialsByCategory('edition').map(tutorial => (
                    <React.Fragment key={tutorial.id}>
                      {renderTutorialCard(
                        tutorial.id,
                        tutorial.title,
                        tutorial.description,
                        tutorial.imageSrc,
                        tutorial.slug,
                        tutorial.difficulty,
                        tutorial.duration,
                        tutorial.software,
                        tutorial.sections.length
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="enregistrement" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels d'enregistrement audio</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getTutorialsByCategory('enregistrement').map(tutorial => (
                    <React.Fragment key={tutorial.id}>
                      {renderTutorialCard(
                        tutorial.id,
                        tutorial.title,
                        tutorial.description,
                        tutorial.imageSrc,
                        tutorial.slug,
                        tutorial.difficulty,
                        tutorial.duration,
                        tutorial.software,
                        tutorial.sections.length
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mixage" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels de mixage audio</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getTutorialsByCategory('mixage').map(tutorial => (
                    <React.Fragment key={tutorial.id}>
                      {renderTutorialCard(
                        tutorial.id,
                        tutorial.title,
                        tutorial.description,
                        tutorial.imageSrc,
                        tutorial.slug,
                        tutorial.difficulty,
                        tutorial.duration,
                        tutorial.software,
                        tutorial.sections.length
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mastering" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Tutoriels de mastering audio</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getTutorialsByCategory('mastering').map(tutorial => (
                    <React.Fragment key={tutorial.id}>
                      {renderTutorialCard(
                        tutorial.id,
                        tutorial.title,
                        tutorial.description,
                        tutorial.imageSrc,
                        tutorial.slug,
                        tutorial.difficulty,
                        tutorial.duration,
                        tutorial.software,
                        tutorial.sections.length
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TutorielsContent;