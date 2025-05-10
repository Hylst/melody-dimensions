import React from "react";

const TutorialContent = () => {
  return (
    <>
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
        <h2 className="text-2xl font-semibold mb-4">Démonstration interactive</h2>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg shadow-sm border border-amber-100 mb-6">
          <h3 className="font-medium mb-4 text-amber-800">Explorer l'interface d'Audacity</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-amber-100 rounded-md mb-3 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=1000" 
                  alt="Interface principale" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-2 text-sm">Vue de l'interface principale</p>
                </div>
              </div>
              <h4 className="font-medium text-sm mb-1">Interface principale</h4>
              <p className="text-xs text-muted-foreground">Découvrez les différentes sections de l'interface d'Audacity</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-amber-100 rounded-md mb-3 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1000" 
                  alt="Outils d'édition" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-2 text-sm">Outils d'édition audio</p>
                </div>
              </div>
              <h4 className="font-medium text-sm mb-1">Outils d'édition</h4>
              <p className="text-xs text-muted-foreground">Explorez les différents outils pour manipuler vos fichiers audio</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-amber-100 rounded-md mb-3 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000" 
                  alt="Effets audio" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-2 text-sm">Effets et filtres audio</p>
                </div>
              </div>
              <h4 className="font-medium text-sm mb-1">Effets audio</h4>
              <p className="text-xs text-muted-foreground">Découvrez les effets disponibles pour transformer vos enregistrements</p>
            </div>
          </div>
          
          <div className="mt-6 bg-amber-50 p-4 rounded-md border border-amber-100">
            <h4 className="font-medium mb-2 text-amber-800">Guide interactif</h4>
            <p className="text-sm mb-3">Survolez et cliquez sur les éléments ci-dessus pour explorer les différentes fonctionnalités d'Audacity en détail.</p>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-amber-500"></span>
                Interactif
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Ressources complémentaires</h2>
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-2">Documentation officielle et communauté</h3>
          <p className="mb-4">
            Pour approfondir vos connaissances sur Audacity, nous vous recommandons de consulter les ressources suivantes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Manuel utilisateur complet d'Audacity (disponible en ligne)</li>
            <li>Forums de la communauté pour poser vos questions</li>
            <li>Galerie d'illustrations interactives sur le site officiel</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default TutorialContent;