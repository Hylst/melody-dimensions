import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getTutorialBySlug, getRelatedTutorials } from "./data/tutorialsData";
import TutorialHeader from "./common/TutorialHeader";
import TutorialBanner from "./common/TutorialBanner";
import TutorialTabs from "./common/TutorialTabs";
import { useTutorialProgress } from "./hooks/useTutorialProgress";
import { useTutorialNavigation } from "./hooks/useTutorialNavigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TutorialLoaderProps {
  /**
   * Fonction qui rend le contenu d'introduction du tutoriel
   */
  renderIntro?: (tutorialId: string) => React.ReactNode;
  
  /**
   * Fonction qui rend le contenu principal du tutoriel
   */
  renderContent?: (tutorialId: string) => React.ReactNode;
  
  /**
   * Fonction qui rend les onglets du tutoriel
   * Si non fourni, utilisera les sections définies dans les métadonnées
   */
  renderTabs?: (tutorialId: string, activeSection?: string) => React.ReactNode;
}

const TutorialLoader = ({
  renderIntro,
  renderContent,
  renderTabs
}: TutorialLoaderProps) => {
  // Récupérer le slug du tutoriel depuis l'URL
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const activeSection = searchParams.get("section") || undefined;
  
  // Récupérer les données du tutoriel
  const tutorial = slug ? getTutorialBySlug(slug) : undefined;
  const relatedTutorials = slug ? getRelatedTutorials(slug, 3) : [];
  
  // Hooks personnalisés
  const { updateLastVisited, getTutorialProgress } = useTutorialProgress();
  const { navigateToTab } = useTutorialNavigation(tutorial ? tutorial.sections.map(section => section.id) : []);
  
  // Mettre à jour la date de dernière visite
  useEffect(() => {
    if (tutorial) {
      updateLastVisited(tutorial.id);
    }
  }, [tutorial, updateLastVisited]);
  
  // Si le tutoriel n'existe pas
  if (!tutorial) {
    return (
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-4">Tutoriel non trouvé</h1>
        <p className="text-muted-foreground mb-6">Le tutoriel que vous recherchez n'existe pas ou a été déplacé.</p>
        <Button onClick={() => window.history.back()}>Retour</Button>
      </div>
    );
  }
  
  // Calculer la progression
  const progressPercentage = getTutorialProgress(tutorial.id, tutorial.sections.length);
  
  return (
    <div className="container py-10">
      <TutorialHeader title={tutorial.title} />
      
      <TutorialBanner 
        imageSrc={tutorial.imageSrc}
        imageAlt={`Image du tutoriel ${tutorial.title}`}
        category={tutorial.category}
        difficulty={tutorial.difficulty}
        duration={tutorial.duration}
        software={tutorial.software}
      />
      
      {/* Barre de progression */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Progression</span>
          <span className="text-sm text-muted-foreground">{progressPercentage}%</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      <div className="space-y-8">
        {/* Introduction */}
        <div>
          {renderIntro ? (
            renderIntro(tutorial.id)
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg">{tutorial.description}</p>
            </div>
          )}
        </div>
        
        {/* Contenu principal */}
        <div>
          {renderContent && renderContent(tutorial.id)}
        </div>
        
        {/* Onglets */}
        <div>
          {renderTabs ? (
            renderTabs(tutorial.id, activeSection)
          ) : (
            tutorial.sections.length > 0 && (
              <TutorialTabs 
                tabs={tutorial.sections.map(section => ({
                  id: section.id,
                  label: section.title,
                  content: <div>Contenu à implémenter pour {section.title}</div>
                }))}
                defaultTab={activeSection || tutorial.sections[0].id}
              />
            )
          )}
        </div>
        
        {/* Tutoriels liés */}
        {relatedTutorials.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Tutoriels liés</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedTutorials.map(related => (
                <Card key={related.id} className="overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={related.imageSrc} 
                      alt={related.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{related.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{related.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.location.href = `/tutoriels/${related.slug}`}
                    >
                      Voir le tutoriel
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Navigation entre tutoriels */}
        <div className="flex justify-between mt-8 pt-4 border-t">
          <Button variant="outline" onClick={() => window.history.back()} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Retour
          </Button>
          <Button onClick={() => window.location.href = "/tutoriels/audacity-basics"} className="flex items-center gap-2">
            Tutoriel suivant <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorialLoader;