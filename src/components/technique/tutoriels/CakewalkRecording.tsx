
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CakewalkRecording = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique/tutoriels">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux tutoriels
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Cakewalk - Enregistrement multipiste</h1>
      </div>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070" 
              alt="Interface Cakewalk en mode enregistrement" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
              Interface de Cakewalk by BandLab en configuration d'enregistrement multipiste
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction à Cakewalk by BandLab</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Cakewalk by BandLab est un DAW (Digital Audio Workstation) professionnel devenu totalement gratuit, offrant toutes 
                les fonctionnalités nécessaires pour réaliser des enregistrements multipistes de qualité studio. Ce tutoriel vous guidera 
                à travers les différentes étapes pour maîtriser l'enregistrement multipiste avec ce logiciel puissant.
              </p>
              <p>
                Anciennement connu sous le nom de SONAR, ce logiciel offre un environnement complet pour l'enregistrement, l'édition, 
                le mixage et la production musicale, rivalisant avec des solutions commerciales bien plus coûteuses.
              </p>
            </div>
            <div className="bg-muted rounded-md overflow-hidden relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=2070" 
                alt="Studio d'enregistrement avec équipement audio" 
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4">Interface moderne de Cakewalk avec ses outils d'enregistrement multipiste</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pourquoi choisir Cakewalk</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Entièrement gratuit</h3>
              <p className="text-sm text-muted-foreground">
                Toutes les fonctionnalités professionnelles sont disponibles sans coût, contrairement à d'autres DAW qui utilisent des modèles freemium.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Interface professionnelle</h3>
              <p className="text-sm text-muted-foreground">
                L'interface utilisateur intuitive et personnalisable permet un flux de travail efficace même pour les productions complexes.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Qualité audio 64-bit</h3>
              <p className="text-sm text-muted-foreground">
                Traitement audio en précision 64-bit permettant de capturer chaque nuance de vos performances avec une fidélité maximale.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contenu du tutoriel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">1. Installation et configuration de Cakewalk</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Téléchargement et installation</li>
                <li>Configuration initiale</li>
                <li>Préférences audio essentielles</li>
                <li>Création d'un nouveau projet</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">2. Configuration des entrées et sorties audio</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Configuration de l'interface audio</li>
                <li>Réglage des entrées/sorties</li>
                <li>Configuration des bus d'entrée/sortie</li>
                <li>Test et vérification du signal</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">3. Enregistrement sur plusieurs pistes simultanément</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Création de pistes audio</li>
                <li>Armement des pistes pour l'enregistrement</li>
                <li>Monitoring des entrées</li>
                <li>Techniques d'enregistrement simultané</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">4. Punch-in et punch-out</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Principes du punch-in/punch-out</li>
                <li>Configuration des points d'entrée/sortie</li>
                <li>Enregistrement par dessus des sections</li>
                <li>Auto-punch et répétition</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">5. Gestion des prises multiples</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Enregistrement de plusieurs prises</li>
                <li>Navigation entre les prises</li>
                <li>Compilation des meilleures parties</li>
                <li>Organisation des prises</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">6. Projet pratique</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Configuration d'une session d'enregistrement complète</li>
                <li>Enregistrement d'un instrument/groupe</li>
                <li>Gestion des overdubs</li>
                <li>Organisation du projet pour le mixage</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Guide pratique : Configuration d'un enregistrement multipiste</h2>
          <div className="bg-muted p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Configuration pas à pas</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Créez un nouveau projet</strong>
                <p className="text-sm text-muted-foreground">Lancez Cakewalk et allez dans "File" {'>'} "New Project". Choisissez un modèle approprié pour votre projet.</p>
              </li>
              <li>
                <strong>Configurez vos entrées</strong>
                <p className="text-sm text-muted-foreground">Dans "Edit" {'>'} "Preferences" {'>'} "Audio" {'>'} "Devices", sélectionnez votre interface audio et configurez les entrées/sorties disponibles.</p>
              </li>
              <li>
                <strong>Créez les pistes nécessaires</strong>
                <p className="text-sm text-muted-foreground">Utilisez "Insert" {'>'} "Audio Track" pour chaque source que vous souhaitez enregistrer (voix, guitare, etc.).</p>
              </li>
              <li>
                <strong>Assignez les entrées à chaque piste</strong>
                <p className="text-sm text-muted-foreground">Dans chaque piste, cliquez sur l'onglet "Input" et assignez l'entrée appropriée de votre interface audio.</p>
              </li>
              <li>
                <strong>Armez les pistes pour l'enregistrement</strong>
                <p className="text-sm text-muted-foreground">Cliquez sur le bouton d'enregistrement (R) sur chaque piste que vous souhaitez enregistrer.</p>
              </li>
              <li>
                <strong>Ajustez les niveaux d'entrée</strong>
                <p className="text-sm text-muted-foreground">Testez vos sources sonores et ajustez les niveaux pour éviter l'écrêtage (regardez les vumètres).</p>
              </li>
              <li>
                <strong>Lancez l'enregistrement</strong>
                <p className="text-sm text-muted-foreground">Appuyez sur le bouton d'enregistrement principal et commencez votre performance.</p>
              </li>
            </ol>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="relative rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070" 
                  alt="Console de mixage en studio d'enregistrement" 
                  className="rounded-md object-cover w-full h-64 transition-all duration-500 hover:brightness-110" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-black/70 text-white p-2 rounded-md">
                    <p className="text-xs">Cliquez pour explorer les détails de l'interface</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Session d'enregistrement multipiste configurée dans Cakewalk, avec plusieurs pistes instrumentales
              </p>
            </div>
            <div className="border p-4 rounded-md">
              <h3 className="font-medium mb-2">Conseils pour un enregistrement réussi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-sm text-muted-foreground">Maintenez les niveaux d'entrée entre -18dB et -12dB pour garantir une bonne marge dynamique</li>
                <li className="text-sm text-muted-foreground">Utilisez le métronome (N) pour garder un tempo constant</li>
                <li className="text-sm text-muted-foreground">Envisagez d'utiliser le mode de latence minimale pour le monitoring direct</li>
                <li className="text-sm text-muted-foreground">Sauvegardez régulièrement votre projet avec "Ctrl+S"</li>
                <li className="text-sm text-muted-foreground">Créez des marqueurs (Insert &gt; Markers) pour identifier rapidement les différentes sections</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Fonctionnalités avancées de Cakewalk</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">ProChannel</h3>
              <p className="text-sm text-muted-foreground">Utilisation de la chaîne de traitement intégrée ProChannel pour améliorer le son pendant l'enregistrement.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Comping</h3>
              <p className="text-sm text-muted-foreground">Techniques avancées de compilation pour créer la prise parfaite à partir de plusieurs enregistrements.</p>
            </div>
            
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">VocalSync</h3>
              <p className="text-sm text-muted-foreground">Fonction permettant d'aligner automatiquement les pistes vocales pour des harmonies parfaites.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Démonstration interactive</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm border border-blue-100 mb-6">
            <h3 className="font-medium mb-4 text-indigo-800">Explorer l'interface de Cakewalk</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-indigo-100 rounded-md mb-3 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" 
                    alt="Console de mixage" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 text-sm">Vue de la console de mixage</p>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">Console de mixage</h4>
                <p className="text-xs text-muted-foreground">Explorez les fonctionnalités de la console de mixage virtuelle</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-indigo-100 rounded-md mb-3 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1000" 
                    alt="Éditeur MIDI" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 text-sm">Vue de l'éditeur MIDI</p>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">Éditeur MIDI</h4>
                <p className="text-xs text-muted-foreground">Découvrez comment éditer vos séquences MIDI avec précision</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-indigo-100 rounded-md mb-3 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000" 
                    alt="Éditeur audio" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-2 text-sm">Vue de l'éditeur audio</p>
                  </div>
                </div>
                <h4 className="font-medium text-sm mb-1">Éditeur audio</h4>
                <p className="text-xs text-muted-foreground">Manipulez vos enregistrements avec des outils professionnels</p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
              <h4 className="font-medium mb-2 text-blue-800">Simulation interactive</h4>
              <p className="text-sm mb-3">Cliquez sur les éléments ci-dessus pour explorer les différentes fonctionnalités de Cakewalk en détail.</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                  Interactif
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Documentation et communauté</h3>
            <p className="mb-4">
              Pour approfondir vos connaissances sur Cakewalk et l'enregistrement multipiste, consultez ces ressources :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Documentation officielle de Cakewalk by BandLab</li>
              <li>Forum de la communauté Cakewalk</li>
              <li>Projets d'exemple inclus avec le logiciel</li>
              <li>Galeries d'illustrations interactives sur le site officiel</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CakewalkRecording;
