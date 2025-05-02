
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AudacityBasics = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Audacity - Les bases</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Interface d'Audacity" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Interface d'Audacity - Un logiciel puissant et gratuit pour l'édition audio
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction à Audacity</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Audacity est un logiciel d'édition audio gratuit et open source qui permet aux utilisateurs de réaliser 
                des modifications sur des fichiers audio. Ce tutoriel vous guidera à travers les fonctionnalités de base 
                d'Audacity pour vous aider à démarrer votre voyage dans l'édition audio.
              </p>
              <p className="mb-4">
                Que vous souhaitiez enregistrer un podcast, nettoyer un enregistrement audio ou créer votre propre musique, 
                Audacity offre tous les outils nécessaires pour accomplir ces tâches sans dépenser un centime.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                alt="Édition audio sur ordinateur" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Premiers pas avec Audacity</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4 flex flex-col">
              <h3 className="font-medium mb-2">Étape 1: Installation</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Téléchargez Audacity depuis le site officiel et installez-le en suivant les instructions pour votre système d'exploitation.
              </p>
              <div className="mt-2 text-primary text-sm">audacity.fr</div>
            </div>
            
            <div className="border rounded-lg p-4 flex flex-col">
              <h3 className="font-medium mb-2">Étape 2: Premier lancement</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Familiarisez-vous avec l'interface principale, les barres d'outils et les menus disponibles.
              </p>
              <div className="mt-2 text-primary text-sm">2-5 minutes</div>
            </div>
            
            <div className="border rounded-lg p-4 flex flex-col">
              <h3 className="font-medium mb-2">Étape 3: Configuration audio</h3>
              <p className="text-sm text-muted-foreground flex-grow">
                Configurez vos périphériques d'entrée et de sortie audio dans les préférences d'Audacity.
              </p>
              <div className="mt-2 text-primary text-sm">2-3 minutes</div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Installation et configuration</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Téléchargement depuis le site officiel</li>
                <li>Installation sur Windows, macOS et Linux</li>
                <li>Configuration initiale du logiciel</li>
                <li>Réglage des préférences audio</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Interface utilisateur</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Découverte de l'interface principale</li>
                <li>Barre d'outils et contrôles de lecture</li>
                <li>Piste audio et timeline</li>
                <li>Panneaux de contrôle et indicateurs de niveau</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Importation et exportation de fichiers</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Formats de fichiers supportés</li>
                <li>Importation de différentes sources</li>
                <li>Exportation dans différents formats</li>
                <li>Paramètres de qualité d'exportation</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Édition de base</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Sélection, couper, copier, coller</li>
                <li>Déplacement de segments audio</li>
                <li>Zoom et navigation dans le projet</li>
                <li>Utilisation des outils de base</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Ajustement du volume</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Modification de l'amplitude</li>
                <li>Normalisation du son</li>
                <li>Utilisation de l'outil enveloppe</li>
                <li>Fondus d'entrée et de sortie</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Exercices pratiques</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Création d'un projet simple</li>
                <li>Édition d'un fichier podcast</li>
                <li>Nettoyage basique d'un enregistrement</li>
                <li>Assemblage de plusieurs clips audio</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Premier projet</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Création d'un nouveau projet</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Lancez Audacity et cliquez sur "Fichier" &gt; "Enregistrer le projet sous..."</li>
                <li>Choisissez un emplacement et nommez votre projet</li>
                <li>Importez un fichier audio via "Fichier" &gt; "Importer" &gt; "Audio..."</li>
                <li>Ou enregistrez directement en cliquant sur le bouton rouge d'enregistrement</li>
              </ol>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Techniques d'édition essentielles</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Sélectionnez une portion audio en cliquant et faisant glisser</li>
                <li>Coupez des parties indésirables avec Ctrl+X (Cmd+X sur Mac)</li>
                <li>Ajustez le volume en utilisant l'outil Enveloppe (bouton F)</li>
                <li>Appliquez un fondu en sélectionnant une zone puis "Effet" &gt; "Fondre en ouverture/fermeture"</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Documentation officielle et communauté</h3>
            <p className="mb-4">
              Pour approfondir vos connaissances sur Audacity, nous vous recommandons de consulter les ressources suivantes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Manuel utilisateur complet d'Audacity (disponible en ligne)</li>
              <li>Forums de la communauté pour poser vos questions</li>
              <li>Tutoriels vidéo sur la chaîne YouTube officielle d'Audacity</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AudacityBasics;
