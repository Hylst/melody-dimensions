
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LmmsMidi = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">LMMS - Création et édition MIDI</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Interface LMMS avec piano roll" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Interface LMMS avec éditeur de piano roll pour composition MIDI
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction à LMMS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                LMMS (Linux MultiMedia Studio) est un séquenceur musical gratuit et open source qui permet de créer de la musique 
                à l'aide d'instruments virtuels et d'édition MIDI. Ce tutoriel vous guidera à travers les fonctionnalités de base 
                de LMMS pour composer et éditer des séquences MIDI.
              </p>
              <p>
                Disponible sur toutes les plateformes majeures (Windows, macOS et Linux), LMMS est une excellente alternative gratuite 
                aux DAW commerciaux pour les musiciens débutants ou expérimentés souhaitant explorer la production musicale numérique.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Production musicale numérique" 
                className="object-cover w-full h-64" 
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Préparation et installation</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Windows</h3>
              <p className="text-sm text-muted-foreground">
                Téléchargez l'installateur depuis lmms.io, exécutez-le et suivez les instructions. LMMS s'intègre automatiquement avec le système audio Windows.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">macOS</h3>
              <p className="text-sm text-muted-foreground">
                Téléchargez le fichier DMG, ouvrez-le et faites glisser l'application dans votre dossier Applications. Des pilotes audio additionnels peuvent être nécessaires.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Linux</h3>
              <p className="text-sm text-muted-foreground">
                Installez via votre gestionnaire de paquets (apt, dnf, pacman) ou téléchargez l'AppImage depuis le site officiel pour une installation sans dépendances.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Interface de LMMS et navigation</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Découverte de l'interface principale</li>
                <li>Fenêtres et outils de création</li>
                <li>Organisation du projet</li>
                <li>Raccourcis clavier essentiels</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Création de patterns MIDI</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Utilisation de l'éditeur de pattern</li>
                <li>Saisie de notes et durées</li>
                <li>Création de rythmes et mélodies</li>
                <li>Duplication et variation de patterns</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Utilisation des instruments virtuels</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Découverte des instruments intégrés</li>
                <li>Configuration des synthétiseurs</li>
                <li>Utilisation des presets</li>
                <li>Création de sons personnalisés</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Édition des notes et vélocités</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Manipulation précise des notes</li>
                <li>Ajustement des vélocités</li>
                <li>Quantification et groove</li>
                <li>Édition avancée des paramètres</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Exportation vers différents formats</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Export audio WAV/MP3</li>
                <li>Export MIDI pour d'autres logiciels</li>
                <li>Paramètres d'exportation optimaux</li>
                <li>Partage de vos créations</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Projet pratique</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Création d'une composition simple</li>
                <li>Arrangement multipiste</li>
                <li>Ajout d'effets et automation</li>
                <li>Finalisation et mixage de base</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Création d'une mélodie</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Méthode pas à pas</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Créez un nouvel instrument</strong>
                <p className="text-sm text-muted-foreground">Dans l'onglet Instruments, cliquez sur TripleOscillator et faites-le glisser dans la zone Song-Editor.</p>
              </li>
              <li>
                <strong>Ouvrez l'éditeur Piano Roll</strong>
                <p className="text-sm text-muted-foreground">Double-cliquez sur le bloc de pattern créé pour ouvrir l'éditeur de notes MIDI.</p>
              </li>
              <li>
                <strong>Ajoutez des notes</strong>
                <p className="text-sm text-muted-foreground">Cliquez sur la grille pour placer des notes. La hauteur verticale détermine la note, la longueur horizontale détermine la durée.</p>
              </li>
              <li>
                <strong>Ajustez les vélocités</strong>
                <p className="text-sm text-muted-foreground">Utilisez la barre inférieure pour modifier la vélocité (force) de chaque note, influençant son volume et son caractère.</p>
              </li>
              <li>
                <strong>Testez et affinez</strong>
                <p className="text-sm text-muted-foreground">Utilisez les boutons de lecture pour écouter votre mélodie et ajustez les notes au besoin.</p>
              </li>
            </ol>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Composition MIDI" 
                className="rounded-md object-cover w-full h-64" 
              />
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Exemple d'une composition MIDI dans LMMS avec plusieurs pistes d'instruments
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Conseils pour débutants</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-muted-foreground">Commencez par des mélodies simples de 8 ou 16 mesures</li>
                <li className="text-sm text-muted-foreground">Utilisez la fonction de quantification pour aligner les notes sur la grille rythmique</li>
                <li className="text-sm text-muted-foreground">Expérimentez avec différents instruments pour la même mélodie</li>
                <li className="text-sm text-muted-foreground">Sauvegardez régulièrement votre projet (.mmpz)</li>
                <li className="text-sm text-muted-foreground">N'hésitez pas à utiliser les presets d'instruments comme point de départ</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Points forts de LMMS</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Multiplateforme</h3>
              <p className="text-sm text-muted-foreground">Disponible gratuitement sur Windows, macOS et Linux, permettant de travailler sur n'importe quel système.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Instruments intégrés</h3>
              <p className="text-sm text-muted-foreground">Grande variété de synthétiseurs et d'instruments virtuels inclus sans plugins additionnels.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Compatibilité VST</h3>
              <p className="text-sm text-muted-foreground">Support des plugins VST sur Windows, permettant d'étendre la bibliothèque de sons disponibles.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Documentation et communauté</h3>
            <p className="mb-4">
              Pour approfondir vos connaissances sur LMMS et la création MIDI, consultez ces ressources :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Documentation officielle LMMS</li>
              <li>Tutoriels communautaires</li>
              <li>Banques de sons gratuites compatibles</li>
              <li>Forums de la communauté LMMS pour obtenir de l'aide</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LmmsMidi;
