
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ArdourMultitrack = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Ardour - Édition multipiste</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="Interface d'Ardour en mode édition multipiste" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Interface d'Ardour montrant une session d'édition multipiste
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction à Ardour</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Ardour est un puissant DAW (Digital Audio Workstation) open source qui offre des fonctionnalités d'édition multipiste 
                professionnelles. Ce tutoriel vous guidera à travers les principes fondamentaux de l'édition multipiste avec Ardour, vous 
                permettant de créer et de manipuler des projets audio complexes.
              </p>
              <p>
                Considéré comme l'un des DAW open source les plus avancés, Ardour propose des fonctionnalités comparables 
                aux logiciels commerciaux haut de gamme, tout en restant accessible aux musiciens et ingénieurs du son à petit budget.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Édition audio professionnelle" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Les avantages d'Ardour pour l'édition multipiste</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Édition non-destructive</h3>
              <p className="text-sm text-muted-foreground">
                Ardour permet de modifier vos enregistrements sans jamais altérer les fichiers audio originaux, vous pouvez donc expérimenter sans risque.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Précision d'échantillon</h3>
              <p className="text-sm text-muted-foreground">
                Le logiciel offre une précision à l'échantillon près pour toutes les opérations d'édition, permettant un contrôle extrêmement fin.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Routage audio flexible</h3>
              <p className="text-sm text-muted-foreground">
                Le système de bus et de routage d'Ardour permet des configurations complexes adaptées à tous types de projets.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Support de plugins</h3>
              <p className="text-sm text-muted-foreground">
                Compatible avec les formats de plugins LV2, VST, AU (Mac) et plus encore, selon votre système d'exploitation.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Configuration de la session Ardour</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Installation et premier lancement</li>
                <li>Création d'un nouveau projet</li>
                <li>Configuration des paramètres audio</li>
                <li>Organisation de l'espace de travail</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Importation et organisation des pistes</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Ajout de pistes audio et MIDI</li>
                <li>Importation de fichiers audio</li>
                <li>Organisation et groupement des pistes</li>
                <li>Utilisation des couleurs et marqueurs</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Édition non-destructive</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Principes de l'édition non-destructive</li>
                <li>Outils de sélection et d'édition</li>
                <li>Couper, déplacer et dupliquer des régions</li>
                <li>Création de fondus et transitions</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Utilisation des marqueurs et régions</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Placement et gestion des marqueurs</li>
                <li>Création et manipulation des régions</li>
                <li>Navigation efficace dans le projet</li>
                <li>Utilisation des marqueurs pour la structure</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Techniques d'édition avancées</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Édition en mode slip/grid</li>
                <li>Utilisation des outils spécialisés</li>
                <li>Automation des paramètres</li>
                <li>Traitement par lot des régions</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Projet pratique</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Montage d'un morceau multipiste</li>
                <li>Application de corrections d'édition</li>
                <li>Organisation du projet pour le mixage</li>
                <li>Exportation des pistes individuelles</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Édition de base</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Techniques d'édition fondamentales</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Sélection d'audio</strong>
                <p className="text-sm text-muted-foreground">Utilisez l'outil de sélection (raccourci "s") pour sélectionner des parties d'un enregistrement en cliquant et faisant glisser.</p>
              </li>
              <li>
                <strong>Couper et déplacer</strong>
                <p className="text-sm text-muted-foreground">Avec une sélection active, utilisez Ctrl+X (Cmd+X sur Mac) pour couper l'audio, puis cliquez où vous souhaitez le coller.</p>
              </li>
              <li>
                <strong>Création de fondus</strong>
                <p className="text-sm text-muted-foreground">Survolez les coins d'une région audio pour faire apparaître les poignées de fondu, puis faites-les glisser pour créer des fondus d'entrée/sortie.</p>
              </li>
              <li>
                <strong>Ajustement des limites</strong>
                <p className="text-sm text-muted-foreground">Survolez les bords d'une région et utilisez l'outil de redimensionnement pour ajuster le début ou la fin d'un clip audio.</p>
              </li>
            </ol>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1587302912306-cf1ed9c33146" 
                alt="Édition multipiste en action" 
                className="rounded-md object-cover w-full h-64"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7";
                }}
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Édition détaillée d'une session multipiste dans Ardour
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Raccourcis clavier essentiels</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground"><strong>Barre d'espace</strong> - Lecture/Pause</li>
                <li className="text-sm text-muted-foreground"><strong>S</strong> - Outil de sélection</li>
                <li className="text-sm text-muted-foreground"><strong>G</strong> - Activer/désactiver la grille magnétique</li>
                <li className="text-sm text-muted-foreground"><strong>R</strong> - Activer l'enregistrement sur les pistes sélectionnées</li>
                <li className="text-sm text-muted-foreground"><strong>Z</strong> - Outil de zoom</li>
                <li className="text-sm text-muted-foreground"><strong>T</strong> - Outil d'édition de temps</li>
                <li className="text-sm text-muted-foreground"><strong>Ctrl+Z/Cmd+Z</strong> - Annuler</li>
                <li className="text-sm text-muted-foreground"><strong>Ctrl+S/Cmd+S</strong> - Enregistrer le projet</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Fonctionnalités clés d'Ardour pour l'édition</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Mode d'édition intelligent</h3>
              <p className="text-sm text-muted-foreground">Ardour propose différents modes d'édition qui s'adaptent à votre flux de travail et aux opérations que vous souhaitez réaliser.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Édition par plages</h3>
              <p className="text-sm text-muted-foreground">Manipulez facilement plusieurs pistes simultanément en fonction des sélections temporelles.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Traitement intégré</h3>
              <p className="text-sm text-muted-foreground">Appliquez des traitements directement aux régions sans perturber le reste de votre projet.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Documentation et communauté</h3>
            <p className="mb-4">
              Pour approfondir vos connaissances sur Ardour et l'édition multipiste, consultez ces ressources :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Manuel utilisateur d'Ardour</li>
              <li>Tutoriels vidéo sur le site officiel</li>
              <li>Forums de la communauté Ardour</li>
              <li>Projets d'exemple pour s'exercer</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArdourMultitrack;
