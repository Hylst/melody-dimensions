import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const InstallationTab = () => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default InstallationTab;