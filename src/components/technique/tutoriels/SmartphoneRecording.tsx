
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SmartphoneRecording = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Enregistrement avec un smartphone</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Smartphone utilisé pour enregistrement audio" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Configuration d'enregistrement audio mobile avec smartphone et accessoires
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction à l'enregistrement mobile</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Vous n'avez pas besoin d'équipement coûteux pour réaliser des enregistrements audio de bonne qualité. 
                Ce tutoriel vous montrera comment maximiser la qualité de vos enregistrements en utilisant simplement votre 
                smartphone et quelques accessoires abordables.
              </p>
              <p>
                Que ce soit pour capturer une idée musicale, enregistrer une interview, documenter un événement ou même 
                produire un podcast, votre smartphone peut devenir un outil d'enregistrement puissant avec les bonnes techniques.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Enregistrement avec un smartphone" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Avantages et limites de l'enregistrement mobile</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Avantages</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Toujours disponible - votre téléphone est presque toujours avec vous</li>
                <li>Portable - enregistrez n'importe où, n'importe quand</li>
                <li>Abordable - nécessite peu ou pas d'équipement supplémentaire</li>
                <li>Partage facile - envoyez vos enregistrements instantanément</li>
                <li>Qualité sans cesse améliorée avec les nouveaux modèles</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Limites</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Microphones intégrés de qualité variable</li>
                <li>Options de préamplification limitées</li>
                <li>Niveaux d'entrée parfois difficiles à contrôler</li>
                <li>Sensibilité aux bruits de manipulation</li>
                <li>Options de traitement en temps réel restreintes</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Applications d'enregistrement recommandées</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Applications gratuites de qualité</li>
                <li>Options payantes avancées</li>
                <li>Configuration des paramètres d'enregistrement</li>
                <li>Format et qualité d'enregistrement</li>
                <li>Applications spécifiques par type d'usage</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Microphones externes pour smartphone</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Microphones USB-C/Lightning</li>
                <li>Microphones lavalier abordables</li>
                <li>Microphones stéréo portables</li>
                <li>Interfaces audio pour mobile</li>
                <li>Rapport qualité-prix des différentes options</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Techniques pour réduire le bruit ambiant</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Choix du lieu d'enregistrement</li>
                <li>Création d'une mini-cabine d'enregistrement</li>
                <li>Positionnement pour minimiser les réflexions</li>
                <li>Utilisation de matériaux absorbants</li>
                <li>Mode avion et autres préparatifs</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Transfert et traitement des enregistrements</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Méthodes de transfert vers ordinateur</li>
                <li>Services cloud pour synchronisation</li>
                <li>Applications de traitement sur smartphone</li>
                <li>Import dans un DAW</li>
                <li>Nettoyage audio post-enregistrement</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Astuces pour améliorer la qualité sonore</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Distance optimale du microphone</li>
                <li>Utilisation de supports et stabilisateurs</li>
                <li>Protection contre le vent</li>
                <li>Mode avion pour éviter les interférences</li>
                <li>Optimisation des niveaux d'enregistrement</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Projets pratiques</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Enregistrer une interview de qualité</li>
                <li>Capter un concert/performance live</li>
                <li>Créer un enregistrement d'instrument acoustique</li>
                <li>Réaliser un podcast avec votre téléphone</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Applications recommandées</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Pour Android</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong>Audio Recorder</strong> - Simple et efficace</li>
                <li><strong>RecForge II</strong> - Options avancées</li>
                <li><strong>Hi-Q MP3 Voice Recorder</strong> - Haute qualité</li>
                <li><strong>Dolby On</strong> - Traitement automatique</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Pour iOS</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong>Voice Memos</strong> - App native simple</li>
                <li><strong>Ferrite</strong> - Pour podcasting</li>
                <li><strong>Voice Record Pro</strong> - Nombreuses options</li>
                <li><strong>Dolby On</strong> - Amélioration automatique</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Applications multiplateforme</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong>Lexis Audio Editor</strong> - Édition complète</li>
                <li><strong>FL Studio Mobile</strong> - Production musicale</li>
                <li><strong>BandLab</strong> - Enregistrement collaboratif</li>
                <li><strong>GarageBand</strong> (iOS) - Production complète</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Optimisation de l'enregistrement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Accessoires pour smartphone" 
                className="rounded-md object-cover w-full h-64" 
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Accessoires essentiels pour améliorer les enregistrements avec smartphone
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Avant d'enregistrer - Liste de vérification</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Activez le mode avion pour éviter les interférences et notifications</li>
                <li>Vérifiez l'espace de stockage disponible sur votre appareil</li>
                <li>Réglez la qualité d'enregistrement au maximum disponible</li>
                <li>Testez les niveaux audio avec un court enregistrement</li>
                <li>Stabilisez votre téléphone sur un support ou trépied</li>
                <li>Utilisez une bonnette anti-vent si vous êtes à l'extérieur</li>
                <li>Éloignez-vous des sources de bruit évitables (ventilateurs, etc.)</li>
                <li>Assurez-vous que la batterie est suffisamment chargée</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exercice pratique : Interview</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Réalisation d'une interview de qualité avec smartphone</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Pratiquez vos compétences en enregistrant une interview de 5 minutes :
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <strong>Préparation</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Choisissez un lieu calme avec peu de réverbération</li>
                  <li>Utilisez un microphone lavalier si disponible</li>
                  <li>Préparez vos questions à l'avance</li>
                </ul>
              </li>
              <li>
                <strong>Configuration</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Placez le téléphone sur un support stable</li>
                  <li>Testez la distance optimale du micro (15-30 cm)</li>
                  <li>Activez le mode avion et ne pas déranger</li>
                </ul>
              </li>
              <li>
                <strong>Enregistrement</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Démarrez par un test de niveau sonore</li>
                  <li>Enregistrez 10 secondes d'ambiance avant de commencer</li>
                  <li>Surveillez occasionnellement les niveaux sans toucher l'appareil</li>
                </ul>
              </li>
              <li>
                <strong>Post-traitement</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Transférez l'enregistrement vers votre ordinateur</li>
                  <li>Ajustez les niveaux et appliquez une réduction de bruit si nécessaire</li>
                  <li>Coupez les sections inutiles</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Accessoires utiles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Bonnettes anti-vent</h3>
              <p className="text-sm text-muted-foreground">Accessoires essentiels pour éliminer les bruits de vent lors d'enregistrements en extérieur avec votre smartphone.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Supports et trépieds</h3>
              <p className="text-sm text-muted-foreground">Stabilisez votre téléphone pour éviter les bruits de manipulation et assurez un placement optimal.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Adaptateurs et câbles</h3>
              <p className="text-sm text-muted-foreground">Connectez facilement des microphones externes ou d'autres sources audio à votre appareil mobile.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Pour aller plus loin</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Explorez ces ressources pour continuer à améliorer vos enregistrements mobiles :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Guides d'optimisation des microphones intégrés de smartphones</li>
              <li>Tutoriels sur l'acoustique des petits espaces</li>
              <li>Applications de traitement audio mobile avancées</li>
              <li>Forums de discussion sur l'enregistrement mobile</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartphoneRecording;
