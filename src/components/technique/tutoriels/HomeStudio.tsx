
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HomeStudio = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Configuration d'un home studio</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04" 
              alt="Configuration home studio avec interface audio et moniteurs" 
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Configuration complète d'un home studio avec interface audio, moniteurs et traitement acoustique
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction au home studio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Créer un home studio fonctionnel n'a jamais été aussi accessible qu'aujourd'hui. Ce tutoriel vous guidera à travers 
                les étapes essentielles pour configurer votre espace d'enregistrement à petit budget tout en obtenant des résultats 
                de qualité professionnelle.
              </p>
              <p>
                Avec les bons choix d'équipement, une disposition optimale et quelques astuces de traitement acoustique DIY, 
                vous pouvez transformer n'importe quelle pièce en un environnement d'enregistrement de qualité, que vous soyez 
                musicien, podcasteur ou créateur de contenu audio.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Équipement de studio compact" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Éléments essentiels d'un home studio</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Interface audio</h3>
              <p className="text-sm text-muted-foreground">
                Le cœur de votre studio, l'interface audio connecte vos instruments et microphones à votre ordinateur avec une qualité 
                sonore professionnelle. Choisissez en fonction du nombre d'entrées dont vous avez besoin.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Des enceintes de monitoring ou un casque de qualité sont essentiels pour entendre précisément ce que vous enregistrez. 
                Ils offrent une reproduction sonore plate et précise, contrairement aux équipements grand public.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Microphones</h3>
              <p className="text-sm text-muted-foreground">
                Le type de microphone dépend de ce que vous enregistrez. Un microphone dynamique polyvalent et un microphone à condensateur 
                sont souvent les premiers achats judicieux pour couvrir la plupart des besoins.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Choix du matériel minimal nécessaire</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Interface audio abordable</li>
                <li>Microphones pour différents usages</li>
                <li>Casque de monitoring</li>
                <li>Enceintes de monitoring (optionnel)</li>
                <li>Accessoires essentiels (câbles, supports, etc.)</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Traitement acoustique DIY</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Analyse acoustique de votre pièce</li>
                <li>Fabrication de panneaux absorbants</li>
                <li>Pièges à basses</li>
                <li>Solutions de diffusion</li>
                <li>Isolation basique pour enregistrement</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Configuration de l'interface audio</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Installation des pilotes</li>
                <li>Configuration dans votre DAW</li>
                <li>Réglage des niveaux d'entrée</li>
                <li>Latence et taille de buffer</li>
                <li>Routage audio de base</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Positionnement optimal du matériel</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Position des moniteurs d'écoute</li>
                <li>Zone d'enregistrement optimale</li>
                <li>Organisation de l'espace de travail</li>
                <li>Gestion des câbles</li>
                <li>Ergonomie de l'espace</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Test et calibration du système</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Test d'enregistrement</li>
                <li>Calibration des moniteurs</li>
                <li>Vérification des niveaux de bruit</li>
                <li>Test de latence</li>
                <li>Correction des problèmes courants</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Premier enregistrement test</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Configuration des pistes dans le DAW</li>
                <li>Positionnement du microphone</li>
                <li>Enregistrement de voix/instrument</li>
                <li>Écoute critique et évaluation</li>
                <li>Ajustements pour amélioration</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Traitement acoustique DIY</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Panneau acoustique DIY" 
                className="rounded-md object-cover w-full h-64" 
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Exemple de panneaux acoustiques DIY installés dans un home studio
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Fabrication d'un panneau absorbant basique</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Matériel nécessaire :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-3">
                <li>Cadre en bois (60x120cm)</li>
                <li>Laine de roche ou laine minérale de 5-10cm d'épaisseur</li>
                <li>Tissu acoustiquement transparent (comme du jute ou du lin)</li>
                <li>Agrafeuse et agrafes</li>
                <li>Ciseaux, mètre et crayon</li>
              </ul>
              <p className="text-sm text-muted-foreground mb-3">
                Instructions simplifiées :
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Construisez un cadre rectangulaire en bois aux dimensions souhaitées</li>
                <li>Coupez la laine minérale aux dimensions du cadre</li>
                <li>Placez la laine à l'intérieur du cadre</li>
                <li>Enveloppez le tout avec le tissu et agrafez-le à l'arrière du cadre</li>
                <li>Placez le panneau aux points stratégiques (points de première réflexion)</li>
              </ol>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-md mt-6">
            <h3 className="font-medium mb-2">Placement optimal des panneaux absorbants</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Pour un traitement efficace, placez vos panneaux absorbants à ces endroits clés :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Points de première réflexion</strong> - Sur les murs latéraux au niveau où le son rebondit entre les moniteurs et votre position d'écoute</li>
              <li><strong>Mur arrière</strong> - Derrière votre position d'écoute pour réduire les réflexions arrière</li>
              <li><strong>Coin de pièce</strong> - Des pièges à basses dans les coins pour gérer les basses fréquences</li>
              <li><strong>Plafond</strong> - Au-dessus de votre position d'écoute ou de mixage</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration d'écoute idéale</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Position des moniteurs</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Placez vos moniteurs et votre position d'écoute pour former un triangle équilatéral</li>
                <li>Alignez les tweeters (haut-parleurs d'aigus) à la hauteur de vos oreilles</li>
                <li>Éloignez les enceintes des murs d'au moins 30 cm pour réduire les résonances</li>
                <li>Orientez les enceintes vers votre position d'écoute, légèrement inclinées vers l'intérieur</li>
                <li>Placez des pads isolants sous les moniteurs pour éviter les vibrations avec votre bureau</li>
              </ul>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Position de travail</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Positionnez-vous de façon à ce que votre tête forme le troisième sommet du triangle équilatéral</li>
                <li>Évitez de vous placer contre un mur ou exactement au milieu de la pièce</li>
                <li>Placez votre bureau le long d'un mur (pas dans un coin)</li>
                <li>Gardez une symétrie dans votre installation par rapport à l'axe central</li>
                <li>Adoptez une position ergonomique pour les longues sessions de travail</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Configurations possibles selon le budget</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Budget minimal (~200€)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Interface audio d'entrée de gamme</li>
                <li>Micro dynamique polyvalent</li>
                <li>Casque de monitoring fermé</li>
                <li>Traitement acoustique DIY simple</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Budget intermédiaire (~500€)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Interface audio avec préamplis de qualité</li>
                <li>Micro dynamique + micro à condensateur</li>
                <li>Casque de référence semi-ouvert</li>
                <li>Traitement acoustique plus complet</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Budget confortable (~1000€)</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Interface audio multi-entrées</li>
                <li>Kit de micros pour batterie/instruments</li>
                <li>Moniteurs de studio d'entrée de gamme</li>
                <li>Traitement acoustique professionnel</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Conseils pour démarrer</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Premiers pas dans votre home studio</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-2">À faire</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Investir d'abord dans une bonne interface audio et un bon casque</li>
                  <li>Améliorer l'acoustique avant d'acheter des équipements coûteux</li>
                  <li>Apprendre à utiliser efficacement votre équipement actuel</li>
                  <li>Organiser votre espace de travail pour un flux pratique</li>
                  <li>Sauvegarder régulièrement vos projets sur différents supports</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">À éviter</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Acheter trop d'équipement avant de maîtriser les bases</li>
                  <li>Négliger l'acoustique de votre pièce</li>
                  <li>Placer les moniteurs contre un mur ou dans un coin</li>
                  <li>Travailler dans un environnement trop réverbérant</li>
                  <li>Être distrait par de nouveaux équipements plutôt que de créer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Pour approfondir</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Consultez ces ressources pour continuer à développer votre home studio :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Livres sur l'acoustique des petits espaces</li>
              <li>Forums de discussion sur les home studios</li>
              <li>Tutoriels sur la disposition optimale du studio</li>
              <li>Guides de comparaison d'équipements abordables</li>
              <li>Communautés d'entraide pour producteurs indépendants</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeStudio;
