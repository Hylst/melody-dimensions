
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AudacityCleaning = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Nettoyage audio avec Audacity</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070" 
              alt="Visualisation d'ondes sonores pour le nettoyage audio" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Visualisation spectrale d'un fichier audio pour identification des bruits parasites
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction au nettoyage audio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Le nettoyage audio est une étape cruciale dans le processus de production sonore. Ce tutoriel vous montrera 
                comment utiliser Audacity pour éliminer les bruits indésirables et améliorer considérablement la qualité de vos enregistrements.
              </p>
              <p>
                Que vous travailliez sur un podcast, un enregistrement musical ou une narration, les techniques présentées ici 
                vous aideront à obtenir un son plus professionnel et agréable à l'écoute.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Traitement audio numérique" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Types de bruits courants</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Bruit de fond constant</h3>
              <p className="text-sm text-muted-foreground">
                Ventilateurs d'ordinateurs, climatisations, bourdonnements électriques. Ces bruits sont généralement situés dans les basses fréquences.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Bruits impulsifs</h3>
              <p className="text-sm text-muted-foreground">
                Clics, pops, craquements, et autres sons courts et soudains qui apparaissent comme des pics sur la forme d'onde.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Sifflements et bourdonnements</h3>
              <p className="text-sm text-muted-foreground">
                Interférences électriques, problèmes de mise à la terre, sonorités à haute fréquence constante.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Analyse des problèmes audio courants</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Identifier les types de bruits</li>
                <li>Utilisation de l'analyseur de spectre</li>
                <li>Déterminer les stratégies de nettoyage</li>
                <li>Importance de l'écoute critique</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Réduction de bruit avec profil</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Création d'un profil de bruit</li>
                <li>Ajustement des paramètres de réduction</li>
                <li>Application sélective du traitement</li>
                <li>Technique d'aperçu avant traitement</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Suppression des craquements et clics</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Utilisation de l'outil de réparation</li>
                <li>Traitement par lot des imperfections</li>
                <li>Outil de suppression de clics</li>
                <li>Restauration manuelle des zones problématiques</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Égalisation corrective</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Analyse des fréquences problématiques</li>
                <li>Filtrage des basses fréquences</li>
                <li>Réduction des sifflements aigus</li>
                <li>Équilibrage du spectre sonore</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Suppression des sifflements</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Identification des fréquences de sifflement</li>
                <li>Utilisation du filtre notch</li>
                <li>Réduction adaptative des sifflements</li>
                <li>Traitement des harmoniques</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Restauration d'enregistrements anciens</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Traitement des problèmes spécifiques aux vieux enregistrements</li>
                <li>Workflow de restauration complet</li>
                <li>Conservation de la chaleur et du caractère</li>
                <li>Équilibre entre nettoyage et préservation</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Réduction de bruit pas à pas</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Identifiez une section contenant uniquement du bruit</strong>
                <p className="text-sm text-muted-foreground">Trouvez quelques secondes où seul le bruit de fond est audible (avant le début de la parole par exemple).</p>
              </li>
              <li>
                <strong>Créez un profil de bruit</strong>
                <p className="text-sm text-muted-foreground">Sélectionnez cette section et allez dans "Effet" &gt; "Réduction de bruit" &gt; "Obtenir le profil de bruit".</p>
              </li>
              <li>
                <strong>Appliquez la réduction</strong>
                <p className="text-sm text-muted-foreground">Sélectionnez l'ensemble de l'audio, puis "Effet" &gt; "Réduction de bruit" &gt; "Réduction de bruit".</p>
              </li>
              <li>
                <strong>Ajustez les paramètres</strong>
                <p className="text-sm text-muted-foreground">Commencez avec une réduction modérée (12dB) et utilisez le bouton "Aperçu" pour tester le résultat.</p>
              </li>
              <li>
                <strong>Trouvez l'équilibre</strong>
                <p className="text-sm text-muted-foreground">Ajustez pour trouver l'équilibre entre l'élimination du bruit et la préservation de la qualité naturelle du son.</p>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Illustration du processus</h3>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Processus de nettoyage audio" 
                className="rounded-md object-cover w-full h-64" 
              />
            </div>
            <div>
              <h3 className="font-medium mb-2">Erreurs courantes à éviter</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-muted-foreground">Appliquer une réduction de bruit trop agressive, produisant des artefacts "métalliques"</li>
                <li className="text-sm text-muted-foreground">Ignorer l'aperçu avant d'appliquer le traitement final</li>
                <li className="text-sm text-muted-foreground">Ne pas sauvegarder de copie du fichier original non traité</li>
                <li className="text-sm text-muted-foreground">Appliquer plusieurs fois la même réduction de bruit (effet cumulatif négatif)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exercice pratique</h2>
          <p className="mb-4">
            Pour mettre en pratique ces techniques, nous vous recommandons de travailler sur un enregistrement présentant 
            divers problèmes et de suivre pas à pas les instructions de nettoyage. Voici une approche structurée :
          </p>
          <div className="border border-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Exercice guidé</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Utilisez un enregistrement vocal basique réalisé avec un smartphone ou un microphone d'ordinateur</li>
              <li>Appliquez la réduction de bruit basée sur un profil</li>
              <li>Identifiez et supprimez les clics à l'aide de l'outil de réparation</li>
              <li>Appliquez un filtre passe-haut pour éliminer les basses fréquences indésirables</li>
              <li>Comparez la version originale et la version nettoyée</li>
            </ol>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Démonstration interactive</h2>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg shadow-sm border border-green-100 mb-6">
            <h3 className="font-medium mb-4 text-teal-800">Processus de nettoyage audio</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-teal-100 rounded-md mb-3 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000" 
                    alt="Analyse spectrale" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 text-sm">Analyse spectrale du bruit</p>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">Étape 1: Analyse spectrale</h4>
                <p className="text-xs text-muted-foreground">Identifiez les types de bruits présents dans votre enregistrement</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-teal-100 rounded-md mb-3 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000" 
                    alt="Réduction de bruit" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 text-sm">Application de la réduction de bruit</p>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">Étape 2: Réduction de bruit</h4>
                <p className="text-xs text-muted-foreground">Appliquez les filtres de réduction de bruit avec les bons paramètres</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-teal-100 rounded-md mb-3 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=1000" 
                    alt="Résultat final" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 text-sm">Comparaison avant/après</p>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">Étape 3: Résultat final</h4>
                <p className="text-xs text-muted-foreground">Comparez le résultat final avec l'enregistrement original</p>
              </div>
            </div>
            
            <div className="mt-6 bg-teal-50 p-4 rounded-md border border-teal-100">
              <h4 className="font-medium mb-2 text-teal-800">Simulation interactive</h4>
              <p className="text-sm mb-3">Survolez et cliquez sur les étapes ci-dessus pour explorer le processus de nettoyage audio en détail.</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-teal-500"></span>
                  Interactif
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Documentation et outils</h3>
            <p className="mb-4">
              Pour approfondir vos connaissances sur le nettoyage audio avec Audacity, consultez ces ressources :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Documentation officielle sur la réduction de bruit</li>
              <li>Section restauration audio du forum Audacity</li>
              <li>Galerie d'illustrations interactives sur le site officiel</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AudacityCleaning;
