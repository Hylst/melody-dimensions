import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, ExternalLink, Play, FileAudio } from "lucide-react";

// Importer les composants de contenu du tutoriel
import { 
  InstallationContent,
  InterfaceContent,
  ImportationContent,
  EditionContent,
  EffetsContent,
  PistesContent,
  ExportationContent
} from "@/components/tutoriels/audacity-basics/content";
import { useTutorialProgress } from "@/components/tutoriels/hooks/useTutorialProgress";

const AudacityBasics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "installation";
  
  // Utiliser le hook de progression
  const { getTutorialProgress } = useTutorialProgress();
  
  // Calculer la progression du tutoriel
  const tutorialId = "audacity-basics";
  const sectionsCount = 7; // Nombre total de sections
  const progressPercentage = getTutorialProgress(tutorialId, sectionsCount);
  
  // Gérer le changement d'onglet
  const handleTabChange = (value: string) => {
    setSearchParams({ section: value });
  };
  
  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/technique/tutoriels" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Retour aux tutoriels
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Audacity - Les bases</h1>
          <p className="text-muted-foreground">
            Apprenez les fondamentaux d'Audacity pour l'édition audio simple
          </p>
        </div>


        <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1598626618400-2176dbe3e5b1?q=80&w=1000" 
            alt="Interface Audacity" 
            className="object-cover w-full h-full" 
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Introduction à Audacity</h2>
                <p className="mb-4">
                  Audacity est un logiciel d'édition audio gratuit et open source, disponible sur Windows, macOS et Linux. 
                  C'est un outil puissant qui permet d'enregistrer, d'éditer et de manipuler des fichiers audio avec une 
                  interface relativement simple à prendre en main.
                </p>
                <p className="mb-4">
                  Ce tutoriel vous guidera à travers les fonctionnalités de base d'Audacity, depuis l'installation 
                  jusqu'à l'exportation de votre premier projet audio.
                </p>
              </CardContent>
            </Card>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid grid-cols-7 mb-4">
                <TabsTrigger value="installation">Installation</TabsTrigger>
                <TabsTrigger value="interface">Interface</TabsTrigger>
                <TabsTrigger value="importation">Importation</TabsTrigger>
                <TabsTrigger value="edition">Édition</TabsTrigger>
                <TabsTrigger value="effets">Effets</TabsTrigger>
                <TabsTrigger value="pistes">Pistes</TabsTrigger>
                <TabsTrigger value="exportation">Exportation</TabsTrigger>
              </TabsList>

              <TabsContent value="installation" className="space-y-4">
                <InstallationContent />
                <h3 className="text-xl font-semibold">Installation d'Audacity</h3>
                <p>
                  Audacity est disponible gratuitement pour Windows, macOS et Linux. Voici comment l'installer sur votre système :
                </p>
                
                <h4 className="text-lg font-medium mt-4">Téléchargement</h4>
                <p className="mb-2">
                  Rendez-vous sur le site officiel d'Audacity pour télécharger la dernière version stable :
                </p>
                <div className="flex justify-start mb-4">
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <a href="https://www.audacityteam.org/download/" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" /> Site officiel d'Audacity
                    </a>
                  </Button>
                </div>
                
                <h4 className="text-lg font-medium">Installation sur Windows</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Double-cliquez sur le fichier .exe téléchargé</li>
                  <li>Suivez les instructions de l'assistant d'installation</li>
                  <li>Acceptez l'accord de licence</li>
                  <li>Choisissez l'emplacement d'installation (ou conservez celui par défaut)</li>
                  <li>Sélectionnez les composants à installer (les options par défaut conviennent généralement)</li>
                  <li>Cliquez sur "Installer" et attendez la fin de l'installation</li>
                  <li>Cliquez sur "Terminer" pour fermer l'assistant</li>
                </ol>
                
                <h4 className="text-lg font-medium">Installation sur macOS</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Ouvrez le fichier .dmg téléchargé</li>
                  <li>Faites glisser l'icône Audacity vers le dossier Applications</li>
                  <li>Lors du premier lancement, cliquez-droit sur l'icône et sélectionnez "Ouvrir" pour contourner les restrictions de sécurité</li>
                </ol>
                
                <h4 className="text-lg font-medium">Installation sur Linux</h4>
                <p className="mb-2">
                  Sur la plupart des distributions Linux, Audacity est disponible dans les gestionnaires de paquets :
                </p>
                <div className="bg-muted p-3 rounded-md font-mono text-sm mb-4">
                  <p>Ubuntu/Debian : <code>sudo apt-get install audacity</code></p>
                  <p>Fedora : <code>sudo dnf install audacity</code></p>
                  <p>Arch Linux : <code>sudo pacman -S audacity</code></p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conseil</h4>
                  <p className="text-blue-700 dark:text-blue-300">
                    Assurez-vous de télécharger Audacity uniquement depuis le site officiel pour éviter les logiciels malveillants.
                    Certains sites tiers peuvent proposer des versions modifiées contenant des logiciels indésirables.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="interface" className="space-y-4">
                <InterfaceContent />
                <h3 className="text-xl font-semibold">Interface utilisateur d'Audacity</h3>
                <p className="mb-4">
                  L'interface d'Audacity peut sembler intimidante au premier abord, mais elle est organisée de manière logique.
                  Voici les éléments principaux que vous devez connaître :
                </p>
                
                <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
                  <img 
                    src="https://manual.audacityteam.org/m/images/8/8e/annotated_interface.png" 
                    alt="Interface Audacity annotée" 
                    className="object-contain w-full h-full" 
                  />
                </div>
                
                <h4 className="text-lg font-medium">Barre de menu</h4>
                <p className="mb-4">
                  Située tout en haut, elle contient toutes les fonctionnalités d'Audacity organisées par catégories :
                  Fichier, Édition, Affichage, Transport, Pistes, Générer, Effet, Analyse, etc.
                </p>
                
                <h4 className="text-lg font-medium">Barre d'outils</h4>
                <p className="mb-4">
                  Juste en dessous du menu, elle contient les outils les plus couramment utilisés :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Outil de sélection</strong> : pour sélectionner des portions d'audio</li>
                  <li><strong>Outil d'enveloppe</strong> : pour modifier le volume à des points spécifiques</li>
                  <li><strong>Outil de dessin</strong> : pour modifier individuellement les échantillons</li>
                  <li><strong>Outil zoom</strong> : pour agrandir ou réduire l'affichage de la forme d'onde</li>
                  <li><strong>Outil temporel</strong> : pour ajuster la position des clips audio</li>
                  <li><strong>Outil multi</strong> : combine plusieurs fonctionnalités</li>
                </ul>
                
                <h4 className="text-lg font-medium">Contrôles de lecture</h4>
                <p className="mb-4">
                  Ces boutons permettent de contrôler la lecture et l'enregistrement :
                  Lecture, Pause, Stop, Retour au début, Aller à la fin, Enregistrer.
                </p>
                
                <h4 className="text-lg font-medium">Zone d'édition principale</h4>
                <p className="mb-4">
                  C'est ici que s'affichent les formes d'onde de vos pistes audio et où vous effectuerez la plupart de vos éditions.
                </p>
                
                <h4 className="text-lg font-medium">Contrôles de piste</h4>
                <p className="mb-4">
                  Situés à gauche de chaque piste, ils permettent de régler le volume, la balance, de renommer la piste,
                  de la mettre en solo, en sourdine, etc.
                </p>
                
                <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800">
                  <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Astuce</h4>
                  <p className="text-amber-700 dark:text-amber-300">
                    Vous pouvez personnaliser l'interface en activant ou désactivant certaines barres d'outils via le menu Affichage {'>'} Barres d'outils.
                    Cela vous permet d'adapter l'interface à vos besoins spécifiques.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="importation" className="space-y-4">
                <ImportationContent />
                <h3 className="text-xl font-semibold">Importation de fichiers audio</h3>
                <p className="mb-4">
                  Avant de pouvoir éditer un fichier audio, vous devez l'importer dans Audacity. Voici comment procéder :
                </p>
                
                <h4 className="text-lg font-medium">Méthode 1 : Menu Fichier</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Cliquez sur <strong>Fichier</strong> dans la barre de menu</li>
                  <li>Sélectionnez <strong>Ouvrir</strong> ou <strong>Importer</strong> &gt; <strong>Audio</strong></li>
                  <li>Naviguez jusqu'au fichier audio que vous souhaitez importer</li>
                  <li>Sélectionnez-le et cliquez sur <strong>Ouvrir</strong></li>
                </ol>
                
                <h4 className="text-lg font-medium">Méthode 2 : Glisser-déposer</h4>
                <p className="mb-4">
                  Vous pouvez simplement faire glisser un fichier audio depuis l'explorateur de fichiers (Windows) ou le Finder (macOS)
                  directement dans la fenêtre d'Audacity.
                </p>
                
                <h4 className="text-lg font-medium">Formats pris en charge</h4>
                <p className="mb-2">
                  Audacity prend en charge de nombreux formats audio, notamment :
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>WAV (non compressé)</li>
                  <li>AIFF (non compressé)</li>
                  <li>MP3 (compressé)</li>
                  <li>FLAC (compressé sans perte)</li>
                  <li>OGG Vorbis (compressé)</li>
                  <li>Et bien d'autres...</li>
                </ul>
                
                <h4 className="text-lg font-medium">Importer depuis un CD audio</h4>
                <p className="mb-4">
                  Pour importer des pistes depuis un CD audio :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Insérez le CD dans votre lecteur</li>
                  <li>Dans Audacity, allez dans <strong>Fichier</strong> {">"}  <strong>Importer</strong> {">"}  <strong>Audio depuis CD</strong></li>
                  <li>Sélectionnez les pistes que vous souhaitez importer</li>
                  <li>Cliquez sur <strong>OK</strong></li>
                </ol>
                
                <h4 className="text-lg font-medium">Enregistrer directement dans Audacity</h4>
                <p className="mb-4">
                  Vous pouvez également enregistrer directement du son dans Audacity :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Assurez-vous que votre microphone ou votre source d'entrée est correctement configuré</li>
                  <li>Cliquez sur le bouton d'enregistrement (cercle rouge) dans les contrôles de transport</li>
                  <li>Pour arrêter l'enregistrement, cliquez sur le bouton Stop (carré)</li>
                </ol>
                
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Remarque</h4>
                  <p className="text-blue-700 dark:text-blue-300">
                    Si vous importez un fichier MP3, Audacity le convertit automatiquement en format non compressé pour l'édition.
                    Cela signifie que vous travaillerez toujours sur une version de haute qualité, quelle que soit la qualité du fichier d'origine.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="edition" className="space-y-4">
                <EditionContent />
                <h3 className="text-xl font-semibold">Édition audio de base</h3>
                <p className="mb-4">
                  Une fois votre fichier audio importé, vous pouvez commencer à l'éditer. Voici les opérations d'édition les plus courantes :
                </p>
                
                <h4 className="text-lg font-medium">Sélectionner de l'audio</h4>
                <p className="mb-4">
                  Pour éditer une portion d'audio, vous devez d'abord la sélectionner :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Cliquez et maintenez le bouton gauche de la souris au début de la section que vous souhaitez sélectionner</li>
                  <li>Faites glisser jusqu'à la fin de la section</li>
                  <li>Relâchez le bouton de la souris</li>
                </ol>
                <p className="mb-4">
                  La zone sélectionnée apparaîtra en surbrillance, généralement en bleu ou en gris.
                </p>
                
                <h4 className="text-lg font-medium">Couper, copier et coller</h4>
                <p className="mb-4">
                  Une fois une section sélectionnée, vous pouvez utiliser les commandes standard d'édition :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Couper</strong> : Édition {">"}  Couper (Ctrl+X) - Supprime la sélection et la place dans le presse-papiers</li>
                  <li><strong>Copier</strong> : Édition {">"}  Copier (Ctrl+C) - Copie la sélection dans le presse-papiers sans la supprimer</li>
                  <li><strong>Coller</strong> : Édition {">"}  Coller (Ctrl+V) - Insère le contenu du presse-papiers à la position du curseur</li>
                </ul>
                
                <h4 className="text-lg font-medium">Supprimer de l'audio</h4>
                <p className="mb-4">
                  Pour supprimer une section sans la copier dans le presse-papiers :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Sélectionnez la section à supprimer</li>
                  <li>Appuyez sur la touche Suppr ou Retour arrière</li>
                  <li>Ou allez dans Édition {">"}  Supprimer</li>
                </ul>
                
                <h4 className="text-lg font-medium">Ajuster le volume</h4>
                <p className="mb-4">
                  Pour modifier le volume d'une section :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Sélectionnez la section dont vous voulez ajuster le volume</li>
                  <li>Allez dans Effet {">"}  Amplification</li>
                  <li>Ajustez le curseur pour augmenter ou diminuer le volume</li>
                  <li>Cliquez sur OK pour appliquer</li>
                </ol>
                
                <h4 className="text-lg font-medium">Normalisation</h4>
                <p className="mb-4">
                  La normalisation ajuste le volume pour que le pic le plus élevé atteigne un niveau spécifique :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Sélectionnez l'audio à normaliser (ou tout le fichier)</li>
                  <li>Allez dans Effet {">"}  Normaliser</li>
                  <li>Définissez le niveau de normalisation (généralement -1.0 dB pour éviter l'écrêtage)</li>
                  <li>Cliquez sur OK</li>
                </ol>
                
                <h4 className="text-lg font-medium">Annuler et rétablir</h4>
                <p className="mb-4">
                  N'hésitez pas à expérimenter ! Vous pouvez toujours annuler vos modifications :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Annuler</strong> : Édition {">"}  Annuler (Ctrl+Z) - Annule la dernière action</li>
                  <li><strong>Rétablir</strong> : Édition {">"}  Rétablir (Ctrl+Y) - Rétablit l'action précédemment annulée</li>
                </ul>
                
                <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800">
                  <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Astuce</h4>
                  <p className="text-amber-700 dark:text-amber-300">
                    Audacity dispose d'un historique d'annulation très généreux. Par défaut, vous pouvez annuler jusqu'à 100 actions.
                    Vous pouvez modifier cette limite dans Édition {">"}  Préférences {">"}  Interface.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="exportation" className="space-y-4">
                <ExportationContent />
                <h3 className="text-xl font-semibold">Exportation de votre projet</h3>
                <p className="mb-4">
                  Une fois que vous avez terminé l'édition de votre audio, vous devrez l'exporter dans un format utilisable par d'autres applications.
                </p>
                
                <h4 className="text-lg font-medium">Enregistrer vs Exporter</h4>
                <p className="mb-4">
                  Il est important de comprendre la différence entre "Enregistrer" et "Exporter" dans Audacity :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Enregistrer le projet</strong> (Fichier &gt; Enregistrer le projet) : Crée un fichier .aup3 qui ne peut être ouvert que par Audacity. Ce format conserve toutes les pistes et l'historique d'édition.</li>
                  <li><strong>Exporter</strong> (Fichier &gt; Exporter) : Crée un fichier audio standard (WAV, MP3, etc.) qui peut être lu par n'importe quel lecteur multimédia.</li>
                </ul>
                
                <h4 className="text-lg font-medium">Exporter en WAV (non compressé)</h4>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Allez dans Fichier &gt; Exporter &gt; Exporter en WAV</li>
                  <li>Choisissez l'emplacement où enregistrer le fichier</li>
                  <li>Donnez un nom à votre fichier</li>
                  <li>Vérifiez les paramètres d'encodage (16-bit PCM est généralement un bon choix)</li>
                  <li>Cliquez sur Enregistrer</li>
                </ol>
                
                <h4 className="text-lg font-medium">Exporter en MP3 (compressé)</h4>
                <p className="mb-2">
                  Pour exporter en MP3, vous devrez peut-être installer l'encodeur LAME :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Si c'est la première fois que vous exportez en MP3, Audacity vous demandera d'installer LAME</li>
                  <li>Suivez les instructions pour télécharger et installer LAME</li>
                  <li>Une fois LAME installé, allez dans Fichier &gt; Exporter &gt; Exporter en MP3</li>
                  <li>Choisissez l'emplacement et le nom du fichier</li>
                  <li>Définissez la qualité MP3 (128 kbps est standard, 320 kbps est de haute qualité)</li>
                  <li>Cliquez sur Enregistrer</li>
                </ol>
                
                <h4 className="text-lg font-medium">Métadonnées</h4>
                <p className="mb-4">
                  Lors de l'exportation, Audacity vous permet d'ajouter des métadonnées à votre fichier :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Titre</strong> : Nom de la piste</li>
                  <li><strong>Artiste</strong> : Nom de l'artiste ou créateur</li>
                  <li><strong>Album</strong> : Nom de l'album ou de la collection</li>
                  <li><strong>Année</strong> : Année de création</li>
                  <li><strong>Genre</strong> : Style musical ou catégorie</li>
                  <li><strong>Commentaires</strong> : Notes supplémentaires</li>
                </ul>
                <p className="mb-4">
                  Ces informations sont particulièrement utiles pour les fichiers MP3 et autres formats qui prennent en charge les tags ID3.
                </p>
                
                <h4 className="text-lg font-medium">Exporter une sélection</h4>
                <p className="mb-4">
                  Si vous souhaitez exporter uniquement une partie de votre projet :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Sélectionnez la portion d'audio que vous souhaitez exporter</li>
                  <li>Allez dans Fichier &gt; Exporter &gt; Exporter la sélection</li>
                  <li>Suivez les mêmes étapes que pour l'exportation normale</li>
                </ol>
                
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Important</h4>
                  <p className="text-blue-700 dark:text-blue-300">
                    N'oubliez pas d'enregistrer régulièrement votre projet Audacity (.aup3) pendant que vous travaillez.
                    L'exportation crée un fichier final, mais ne sauvegarde pas votre projet éditable.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="effets" className="space-y-4">
                <EffetsContent />
                <h3 className="text-xl font-semibold">Effets audio de base</h3>
                <p className="mb-4">
                  Audacity propose une large gamme d'effets pour transformer et améliorer vos fichiers audio. Ces effets sont accessibles via le menu "Effet" et peuvent être appliqués à une sélection ou à une piste entière. Voici les effets les plus utiles pour débuter :
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Réduction de bruit</h4>
                    <p className="text-sm mb-3">
                      Élimine les bruits de fond constants comme les ventilateurs, les bourdonnements électriques ou les sifflements.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez une portion qui ne contient que du bruit</li>
                      <li>Allez dans Effet {">"}  Réduction de bruit {">"}  Obtenir le profil de bruit</li>
                      <li>Sélectionnez tout l'audio à traiter</li>
                      <li>Allez dans Effet {">"}  Réduction de bruit {">"}  Réduction de bruit</li>
                      <li>Ajustez les paramètres et cliquez sur OK</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/9/9f/noise_reduction_dialog.png" 
                        alt="Interface de réduction de bruit" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Égalisation</h4>
                    <p className="text-sm mb-3">
                      Ajuste les différentes fréquences pour modifier le timbre et la tonalité de l'audio.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'audio à égaliser</li>
                      <li>Allez dans Effet {">"}  Égalisation</li>
                      <li>Utilisez les préréglages ou ajustez manuellement la courbe</li>
                      <li>Utilisez le bouton Aperçu pour entendre les changements</li>
                      <li>Cliquez sur OK pour appliquer</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/4/41/equalizer.png" 
                        alt="Interface d'égalisation" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Compression</h4>
                    <p className="text-sm mb-3">
                      Réduit l'écart entre les sons forts et faibles, rendant l'audio plus équilibré et plus présent.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'audio à compresser</li>
                      <li>Allez dans Effet {">"}  Compresseur</li>
                      <li>Réglez le seuil (threshold) et le ratio</li>
                      <li>Ajustez l'attaque et le relâchement si nécessaire</li>
                      <li>Activez la normalisation pour compenser la perte de volume</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/9/90/compressor.png" 
                        alt="Interface du compresseur" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">Réverbération</h4>
                    <p className="text-sm mb-3">
                      Ajoute de la profondeur et de l'espace à votre audio en simulant différents environnements acoustiques.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'audio à traiter</li>
                      <li>Allez dans Effet {">"}  Réverbération</li>
                      <li>Choisissez un préréglage (salle, hall, etc.) ou personnalisez</li>
                      <li>Ajustez le temps de réverbération et le niveau de mixage</li>
                      <li>Utilisez l'aperçu pour vérifier le résultat</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/e/e1/reverb.png" 
                        alt="Interface de réverbération" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Effets de correction et d'amélioration</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Suppression de clics et craquements</h5>
                    <p className="text-sm mb-3">
                      Idéal pour éliminer les bruits parasites ponctuels comme les clics, pops et craquements.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez la zone contenant les clics</li>
                      <li>Allez dans Effet {">"}  Suppression de clics</li>
                      <li>Ajustez le seuil de détection et la largeur maximale des clics</li>
                      <li>Utilisez l'aperçu pour vérifier l'efficacité</li>
                    </ol>
                    <div className="mt-2 text-xs text-blue-600">Parfait pour restaurer de vieux enregistrements</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Limiteur</h5>
                    <p className="text-sm mb-3">
                      Empêche les pics audio de dépasser un certain niveau, évitant ainsi la distorsion par écrêtage.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'audio à limiter</li>
                      <li>Allez dans Effet {'>'} Limiteur</li>
                      <li>Définissez le niveau maximal (généralement -0.1 dB)</li>
                      <li>Ajustez le temps de maintien et de relâchement</li>
                    </ol>
                    <div className="mt-2 text-xs text-blue-600">Essentiel pour le mastering final</div>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Effets créatifs</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Écho</h5>
                    <p className="text-sm mb-3">
                      Crée des répétitions du son original avec un délai ajustable, idéal pour les effets spéciaux.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'audio à traiter</li>
                      <li>Allez dans Effet {'>'} Écho</li>
                      <li>Réglez le délai entre les répétitions (en secondes)</li>
                      <li>Ajustez le facteur de déclin pour contrôler la durée de l'écho</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/8/82/echo.png" 
                        alt="Interface de l'effet écho" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Changement de hauteur (Pitch Shift)</h5>
                    <p className="text-sm mb-3">
                      Modifie la hauteur du son sans affecter sa durée, parfait pour les corrections vocales ou effets spéciaux.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'audio à modifier</li>
                      <li>Allez dans Effet {'>'} Changement de hauteur</li>
                      <li>Utilisez le curseur ou spécifiez l'intervalle en demi-tons</li>
                      <li>Utilisez l'aperçu pour vérifier le résultat</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/4/47/change_pitch.png" 
                        alt="Interface de changement de hauteur" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Chaîne d'effets</h4>
                <p className="mb-4">
                  Pour appliquer plusieurs effets dans un ordre spécifique, vous pouvez utiliser la fonctionnalité de chaîne d'effets :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Allez dans Fichier {'>'} Chaînes d'effets {'>'} Gérer les chaînes</li>
                  <li>Cliquez sur "Ajouter" pour créer une nouvelle chaîne</li>
                  <li>Donnez un nom à votre chaîne</li>
                  <li>Cliquez sur "Insérer" pour ajouter des effets à la chaîne</li>
                  <li>Organisez les effets dans l'ordre souhaité</li>
                  <li>Cliquez sur "OK" pour enregistrer la chaîne</li>
                </ol>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-5 rounded-lg border border-blue-100 dark:border-blue-900 mb-6">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-3">Exemple de workflow pour voix</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                    Voici une chaîne d'effets typique pour améliorer un enregistrement vocal :
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-blue-700 dark:text-blue-300">
                    <li><strong>Réduction de bruit</strong> - Éliminer le bruit de fond</li>
                    <li><strong>Égalisation</strong> - Couper sous 80Hz et renforcer légèrement 2-3kHz pour la clarté</li>
                    <li><strong>Compresseur</strong> - Seuil: -18dB, Ratio: 2:1, Attaque: 10ms, Relâchement: 100ms</li>
                    <li><strong>Limiteur</strong> - Plafond: -0.5dB pour éviter l'écrêtage</li>
                  </ol>
                  <div className="mt-3 aspect-video bg-white rounded-md overflow-hidden">
                    <img 
                      src="https://manual.audacityteam.org/m/images/1/11/chains_dialog.png" 
                      alt="Interface de chaîne d'effets" 
                      className="object-contain w-full h-full" 
                    />
                  </div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-md border border-amber-200 dark:border-amber-800">
                  <h4 className="text-lg font-medium text-amber-700 dark:text-amber-300 mb-2">Conseils pour l'utilisation des effets</h4>
                  <ul className="list-disc pl-5 space-y-2 text-amber-700 dark:text-amber-300">
                    <li>Utilisez toujours l'option "Aperçu" avant d'appliquer un effet pour vous assurer qu'il produit le résultat souhaité.</li>
                    <li>Appliquez les effets avec modération - un traitement subtil est souvent plus efficace qu'un traitement excessif.</li>
                    <li>Travaillez toujours sur une copie de votre projet original pour pouvoir revenir en arrière si nécessaire.</li>
                    <li>L'ordre des effets est important - par exemple, appliquez la réduction de bruit avant la compression.</li>
                    <li>N'hésitez pas à annuler (Ctrl+Z) si le résultat ne vous convient pas et à réessayer avec des paramètres différents.</li>
                  </ul>
                </div>
                
                <h4 className="text-lg font-medium mt-6">Plugins et effets externes</h4>
                <p className="mb-4">
                  Audacity prend en charge les plugins au format VST (Virtual Studio Technology) et LV2, ce qui étend considérablement ses capacités d'effets audio :
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Installation de plugins VST</h5>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Téléchargez des plugins VST compatibles depuis des sources fiables</li>
                      <li>Allez dans Édition {'>'} Préférences {'>'} Effets</li>
                      <li>Cliquez sur "Ajouter" et naviguez vers le dossier contenant vos plugins</li>
                      <li>Redémarrez Audacity pour que les nouveaux plugins soient détectés</li>
                      <li>Accédez aux plugins via le menu Effet {'>'} Plugin</li>
                    </ol>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Plugins recommandés gratuits</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><strong>ReaPlugs</strong> : Suite d'effets de Cockos (EQ, compression, etc.)</li>
                      <li><strong>TDR Nova</strong> : Égaliseur dynamique de haute qualité</li>
                      <li><strong>OrilRiver</strong> : Réverbération à convolution</li>
                      <li><strong>Melda Free Effects</strong> : Collection d'effets variés</li>
                      <li><strong>Voxengo SPAN</strong> : Analyseur de spectre avancé</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-5 rounded-lg border border-purple-100 dark:border-purple-900 mb-6">
                  <h4 className="text-lg font-medium text-purple-700 dark:text-purple-300 mb-3">Techniques avancées d'effets</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                    Pour des résultats professionnels, essayez ces techniques avancées :
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-purple-700 dark:text-purple-300">
                    <li><strong>Traitement parallèle</strong> : Dupliquez une piste, appliquez des effets intensifs sur la copie, puis mixez-la avec l'original</li>
                    <li><strong>Automation d'effets</strong> : Utilisez l'outil enveloppe pour faire varier l'intensité d'un effet au fil du temps</li>
                    <li><strong>Sidechain</strong> : Utilisez le niveau d'une piste pour contrôler un effet sur une autre (technique avancée nécessitant des plugins spécifiques)</li>
                    <li><strong>Convolution</strong> : Utilisez des réponses impulsionnelles pour simuler des espaces acoustiques réels</li>
                  </ul>
                  <div className="mt-3 flex justify-center">
                    <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                      <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                      Techniques professionnelles
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pistes" className="space-y-4">
                <PistesContent />
                <h3 className="text-xl font-semibold">Gestion des pistes multiples</h3>
                <p className="mb-4">
                  L'un des grands avantages d'Audacity est sa capacité à gérer plusieurs pistes audio simultanément, ce qui permet
                  de créer des mixages complexes, d'ajouter de la musique à une narration, ou de superposer différents éléments sonores.
                  Cette fonctionnalité est essentielle pour créer des productions audio professionnelles.
                </p>
                
                <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
                  <img 
                    src="https://manual.audacityteam.org/m/images/c/c8/multiple_tracks.png" 
                    alt="Projet Audacity avec plusieurs pistes" 
                    className="object-contain w-full h-full" 
                  />
                </div>
                
                <h4 className="text-lg font-medium">Types de pistes dans Audacity</h4>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Piste audio</h5>
                    <p className="text-sm text-muted-foreground">
                      Le type de piste standard pour l'audio mono ou stéréo. Affiche les formes d'onde et permet toutes les opérations d'édition.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Piste d'étiquettes</h5>
                    <p className="text-sm text-muted-foreground">
                      Contient des marqueurs textuels pour annoter votre projet, idéal pour marquer des sections ou ajouter des notes.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Piste temporelle</h5>
                    <p className="text-sm text-muted-foreground">
                      Permet de modifier la vitesse de lecture au fil du temps, créant des effets d'accélération ou de ralentissement.
                    </p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Ajouter de nouvelles pistes</h4>
                <p className="mb-4">
                  Il existe plusieurs façons d'ajouter des pistes à votre projet :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong>Importer un fichier audio</strong> : Fichier &gt; Importer &gt; Audio... (le fichier sera placé dans une nouvelle piste)</li>
                  <li><strong>Créer une piste vide</strong> : Pistes &gt; Ajouter nouvelle &gt; Piste audio</li>
                  <li><strong>Enregistrer sur une nouvelle piste</strong> : Cliquez sur le bouton d'enregistrement avec une piste existante sélectionnée</li>
                  <li><strong>Dupliquer une piste</strong> : Sélectionnez une piste et utilisez Édition {'>'} Dupliquer</li>
                </ul>
                
                <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
                  <img 
                    src="https://manual.audacityteam.org/m/images/7/7f/add_new_track_menu.png" 
                    alt="Menu d'ajout de nouvelles pistes" 
                    className="object-contain w-full h-full" 
                  />
                </div>
                
                <h4 className="text-lg font-medium">Contrôles de piste</h4>
                <p className="mb-4">
                  Chaque piste dispose de contrôles spécifiques dans le panneau à gauche. Maîtriser ces contrôles est essentiel pour un mixage efficace :
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Contrôles de base</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><strong>Menu déroulant</strong> : Accès aux options de la piste (format, taux d'échantillonnage, etc.)</li>
                      <li><strong>Nom de la piste</strong> : Cliquez pour renommer (utile pour organiser des projets complexes)</li>
                      <li><strong>Bouton X</strong> : Ferme/supprime la piste</li>
                      <li><strong>Bouton Solo (S)</strong> : Lit uniquement cette piste (pratique pour isoler un élément)</li>
                      <li><strong>Bouton Muet (M)</strong> : Coupe le son de cette piste (pour tester le mix sans certains éléments)</li>
                    </ul>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/e/e2/track_control_panel.png" 
                        alt="Panneau de contrôle de piste" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Contrôles de volume et panoramique</h5>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li><strong>Curseur de gain</strong> : Ajuste le volume de la piste (de -36dB à +36dB)</li>
                      <li><strong>Curseur de panoramique</strong> : Répartit le son entre les canaux gauche et droit (L = gauche, R = droite)</li>
                      <li><strong>Indicateur de niveau</strong> : Affiche le niveau sonore pendant la lecture (vert = bon, rouge = écrêtage)</li>
                      <li><strong>Bouton d'effet</strong> : Permet d'appliquer rapidement des effets à la piste entière</li>
                    </ul>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/a/a4/track_gain_pan.png" 
                        alt="Contrôles de gain et panoramique" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Organisation et manipulation des pistes</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Réorganisation des pistes</h5>
                    <p className="text-sm mb-3">
                      Vous pouvez réorganiser l'ordre vertical des pistes pour mieux visualiser votre projet :
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Cliquez sur la zone de titre de la piste (où se trouve le nom)</li>
                      <li>Maintenez le bouton de la souris enfoncé</li>
                      <li>Faites glisser la piste vers le haut ou le bas</li>
                      <li>Relâchez pour placer la piste à sa nouvelle position</li>
                    </ol>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Groupement de pistes</h5>
                    <p className="text-sm mb-3">
                      Le groupement permet de manipuler plusieurs pistes comme une seule unité :
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez plusieurs pistes (Shift+clic sur chaque piste)</li>
                      <li>Cliquez sur une des pistes avec le bouton droit</li>
                      <li>Sélectionnez "Lier les pistes"</li>
                      <li>Les pistes liées se déplaceront ensemble lors de l'édition</li>
                    </ol>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Synchronisation des pistes</h4>
                <p className="mb-4">
                  Pour aligner précisément vos pistes et créer un mixage cohérent :
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>Utilisez l'outil de déplacement temporel (F5) pour déplacer des clips audio horizontalement</li>
                  <li>Activez l'option "Accrochage" (Affichage &gt; Accrochage) pour aligner facilement les clips sur la grille ou sur d'autres clips</li>
                  <li>Utilisez les marqueurs (Pistes &gt; Ajouter un marqueur) pour définir des points de synchronisation importants</li>
                  <li>Zoomez (Ctrl + molette de la souris) pour un alignement plus précis au niveau des échantillons</li>
                  <li>Utilisez la fonction "Aligner les pistes" (Pistes &gt; Aligner les pistes) pour synchroniser automatiquement selon différents critères</li>
                </ol>
                
                <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
                  <img 
                    src="https://manual.audacityteam.org/m/images/3/3a/align_tracks.png" 
                    alt="Dialogue d'alignement des pistes" 
                    className="object-contain w-full h-full" 
                  />
                </div>
                
                <h4 className="text-lg font-medium">Techniques avancées d'édition multipiste</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Enveloppe de volume</h5>
                    <p className="text-sm mb-3">
                      L'outil enveloppe permet de créer des variations de volume précises au sein d'une piste :
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez l'outil Enveloppe (F2)</li>
                      <li>Cliquez sur la forme d'onde pour créer des points de contrôle</li>
                      <li>Faites glisser ces points vers le haut (plus fort) ou le bas (plus faible)</li>
                      <li>Créez ainsi des fondus ou des variations de volume complexes</li>
                    </ol>
                    <div className="mt-3 aspect-video bg-muted rounded-md overflow-hidden">
                      <img 
                        src="https://manual.audacityteam.org/m/images/8/8a/envelope_tool.png" 
                        alt="Utilisation de l'outil enveloppe" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium mb-2">Mixage et rendu</h5>
                    <p className="text-sm mb-3">
                      Pour combiner plusieurs pistes en une seule :
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Sélectionnez les pistes à combiner</li>
                      <li>Allez dans Pistes {">"}  Mixer et rendre</li>
                      <li>Choisissez les options de rendu (conserver les pistes originales ou non)</li>
                      <li>Une nouvelle piste contenant le mixage sera créée</li>
                    </ol>
                    <p className="text-xs text-blue-600 mt-2">Utile pour simplifier un projet ou appliquer des effets à un ensemble de pistes</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium">Mixage de base</h4>
                <p className="mb-4">
                  Pour créer un bon équilibre entre vos pistes et obtenir un son professionnel :
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Ajustez le volume de chaque piste avec le curseur de gain (visez des niveaux moyens de -18 à -12 dB)</li>
                  <li>Utilisez le panoramique pour positionner les sons dans l'espace stéréo (évitez de tout centrer)</li>
                  <li>Appliquez des effets individuellement à chaque piste selon les besoins (égalisation, compression, etc.)</li>
                  <li>Utilisez le mode Solo pour écouter et ajuster une piste à la fois</li>
                  <li>Vérifiez régulièrement le mixage global en écoutant toutes les pistes ensemble</li>
                  <li>Évitez l'écrêtage : gardez le niveau général sous 0 dB (utilisez un limiteur si nécessaire)</li>
                </ul>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-5 rounded-lg border border-green-100 dark:border-green-900 mb-6">
                  <h4 className="text-lg font-medium text-green-700 dark:text-green-300 mb-3">Conseils de mixage professionnel</h4>
                  <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-300">
                    <li><strong>Équilibrez les fréquences</strong> : Évitez que plusieurs pistes n'occupent la même plage de fréquences</li>
                    <li><strong>Créez de la profondeur</strong> : Utilisez la réverbération différemment sur chaque piste</li>
                    <li><strong>Automatisez le volume</strong> : Utilisez l'outil enveloppe pour des variations dynamiques</li>
                    <li><strong>Écoutez sur différents systèmes</strong> : Testez votre mix sur des haut-parleurs et des écouteurs</li>
                    <li><strong>Faites des pauses d'écoute</strong> : Reposez vos oreilles régulièrement pour garder un jugement objectif</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Exemple pratique : Podcast avec musique de fond</h4>
                  <p className="text-blue-700 dark:text-blue-300 mb-2">
                    Voici comment créer un podcast professionnel avec musique d'ambiance :
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-blue-700 dark:text-blue-300">
                    <li>Importez votre narration sur la première piste</li>
                    <li>Importez la musique de fond sur une deuxième piste</li>
                    <li>Réduisez le volume de la musique (environ -15 à -20 dB)</li>
                    <li>Appliquez un fondu d'entrée (10 sec) et de sortie (15 sec) à la musique</li>
                    <li>Utilisez l'outil enveloppe pour baisser davantage le volume de la musique pendant les passages parlés</li>
                    <li>Appliquez une légère compression à la voix pour la rendre plus présente</li>
                    <li>Utilisez l'égalisation pour couper les basses fréquences de la musique (en dessous de 150 Hz)</li>
                    <li>Ajoutez une piste d'étiquettes pour marquer les différentes sections du podcast</li>
                  </ol>
                  <div className="mt-3 aspect-video bg-white rounded-md overflow-hidden">
                    <img 
                      src="https://manual.audacityteam.org/m/images/3/3d/podcast_example.png" 
                      alt="Exemple de projet de podcast" 
                      className="object-contain w-full h-full" 
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Exercice pratique</h2>
                <p className="mb-4">
                  Maintenant que vous connaissez les bases d'Audacity, mettez en pratique vos connaissances avec cet exercice simple :
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Objectif : Créer un montage audio simple</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Téléchargez les fichiers audio d'exemple ci-dessous</li>
                    <li>Importez-les dans Audacity</li>
                    <li>Arrangez les clips dans l'ordre suivant : Introduction, Musique, Conclusion</li>
                    <li>Ajoutez des fondus entre les transitions (Effet {">"}  Fondu en ouverture / Fondu en fermeture)</li>
                    <li>Ajustez les volumes pour que tout soit équilibré</li>
                    <li>Exportez votre montage en format MP3</li>
                  </ol>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Télécharger Introduction.wav
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Télécharger Musique.wav
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Télécharger Conclusion.wav
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Ressources complémentaires</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://manual.audacityteam.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-4 w-4" /> Manuel officiel d'Audacity
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://forum.audacityteam.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="h-4 w-4" /> Forum de la communauté Audacity
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.youtube.com/c/audacity" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Play className="h-4 w-4" /> Chaîne YouTube officielle
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudacityBasics;