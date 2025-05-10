import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { tutorials } from "@/components/tutoriels/data/tutorialsData";
import { useTutorialProgress } from "@/components/tutoriels/hooks/useTutorialProgress";

const TutorielsPage = () => {
  const { getTutorialProgress } = useTutorialProgress();

  // Grouper les tutoriels par catégorie
  const tutorialsByCategory = tutorials.reduce((acc, tutorial) => {
    const { category } = tutorial;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tutorial);
    return acc;
  }, {} as Record<string, typeof tutorials>);

  // Mapper les catégories à des noms français
  const categoryNames = {
    edition: "Édition audio",
    enregistrement: "Enregistrement",
    mixage: "Mixage",
    mastering: "Mastering"
  };

  // Mapper les niveaux de difficulté à des couleurs
  const difficultyColors = {
    débutant: "bg-green-100 text-green-800",
    intermédiaire: "bg-yellow-100 text-yellow-800",
    avancé: "bg-red-100 text-red-800"
  };

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tutoriels audio</h1>
          <p className="text-muted-foreground">
            Découvrez nos tutoriels pour améliorer vos compétences en production musicale
          </p>
        </div>

        {Object.entries(tutorialsByCategory).map(([category, categoryTutorials]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-semibold">{categoryNames[category as keyof typeof categoryNames]}</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryTutorials.map((tutorial) => {
                const progressPercentage = getTutorialProgress(tutorial.id, tutorial.sections.length);
                
                return (
                  <Card key={tutorial.id} className="overflow-hidden flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={tutorial.imageSrc} 
                        alt={tutorial.title} 
                        className="object-cover w-full h-full transition-transform hover:scale-105 duration-300" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                        <Badge 
                          variant="outline" 
                          className={difficultyColors[tutorial.difficulty as keyof typeof difficultyColors]}
                        >
                          {tutorial.difficulty}
                        </Badge>
                      </div>
                      <CardDescription>{tutorial.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>{tutorial.duration}</span>
                        <span className="mx-2">•</span>
                        <BookOpen className="mr-2 h-4 w-4" />
                        <span>{tutorial.sections.length} sections</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {tutorial.tags?.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link to={`/technique/tutoriels/${tutorial.slug}`} className="flex items-center justify-center">
                          Voir le tutoriel <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorielsPage;