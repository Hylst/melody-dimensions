import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const InstallationContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">
        Installation et gestion des plugins VST
      </h3>
      
      <p className="mb-4">
        L'installation et la gestion correctes de vos plugins VST sont essentielles pour assurer leur bon fonctionnement et maintenir votre DAW (Digital Audio Workstation) organisé et stable.
      </p>

      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">
            Comprendre les formats de plugins
          </h4>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h5 className="text-lg font-medium">VST (Virtual Studio Technology)</h5>
              <p>
                Format le plus répandu, développé par Steinberg. Existe en versions VST2 et VST3, cette dernière offrant des fonctionnalités avancées et une meilleure gestion des ressources.
              </p>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-lg font-medium">AU (Audio Units)</h5>
              <p>
                Format natif pour macOS et Logic Pro. La plupart des plugins sont disponibles à la fois en VST et AU pour assurer la compatibilité cross-plateforme.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-medium">AAX (Avid Audio eXtension)</h5>
              <p>
                Format utilisé par Pro Tools. Si vous travaillez avec Pro Tools, assurez-vous que vos plugins sont disponibles en format AAX.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Procédure d'installation
      </h4>

      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h5 className="text-base font-medium">Téléchargement</h5>
                <p className="text-sm text-muted-foreground">
                  Téléchargez le plugin depuis le site officiel du développeur ou une source fiable pour éviter les logiciels malveillants.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h5 className="text-base font-medium">Installation</h5>
                <p className="text-sm text-muted-foreground">
                  Exécutez le programme d'installation et suivez les instructions. Notez le dossier d'installation pour référence future.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h5 className="text-base font-medium">Activation</h5>
                <p className="text-sm text-muted-foreground">
                  Pour les plugins commerciaux, suivez la procédure d'activation avec votre clé de licence ou compte utilisateur.
                </p>
              </div>
            </li>
            
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <div>
                <h5 className="text-base font-medium">Scan des plugins</h5>
                <p className="text-sm text-muted-foreground">
                  Ouvrez votre DAW et lancez un scan des plugins pour que les nouveaux plugins soient détectés.
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Dossiers d'installation standards
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium mb-2">Windows</h5>
            <ul className="space-y-2">
              <li>
                <p className="font-medium">C:\Program Files\Common Files\VST3</p>
                <p className="text-sm text-muted-foreground">Dossier standard pour les plugins VST3</p>
              </li>
              <li>
                <p className="font-medium">C:\Program Files\VSTPlugins</p>
                <p className="text-sm text-muted-foreground">Dossier commun pour les plugins VST2</p>
              </li>
              <li>
                <p className="font-medium">C:\Program Files\Steinberg\VSTPlugins</p>
                <p className="text-sm text-muted-foreground">Utilisé par certains DAWs Steinberg</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium mb-2">macOS</h5>
            <ul className="space-y-2">
              <li>
                <p className="font-medium">/Library/Audio/Plug-Ins/VST3/</p>
                <p className="text-sm text-muted-foreground">Dossier système pour les plugins VST3</p>
              </li>
              <li>
                <p className="font-medium">/Library/Audio/Plug-Ins/Components/</p>
                <p className="text-sm text-muted-foreground">Dossier pour les plugins AU</p>
              </li>
              <li>
                <p className="font-medium">~/Library/Audio/Plug-Ins/</p>
                <p className="text-sm text-muted-foreground">Dossier utilisateur pour les plugins (avec sous-dossiers VST, VST3, Components)</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Bonnes pratiques de gestion
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Organisation</h5>
            <p className="mt-2">
              Créez un document listant tous vos plugins avec leurs informations de licence et versions. Cela vous aidera lors des réinstallations ou mises à jour.
            </p>
            <p className="mt-2">
              Considérez l'utilisation d'un gestionnaire de plugins comme Waves Central, Native Access ou iLok License Manager pour les plugins qui les supportent.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Maintenance</h5>
            <p className="mt-2">
              Mettez régulièrement à jour vos plugins pour bénéficier des corrections de bugs et nouvelles fonctionnalités, mais évitez de le faire au milieu d'un projet important.
            </p>
            <p className="mt-2">
              Faites des sauvegardes de vos plugins et de leurs fichiers de licence avant toute mise à jour majeure de votre système d'exploitation ou DAW.
            </p>
          </CardContent>
        </Card>
      </div>

      <h4 className="text-xl font-medium mt-6 mb-4">
        Résolution des problèmes courants
      </h4>
      
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Plugin non détecté</h5>
            <p className="mt-2">
              Vérifiez que le plugin est installé dans le bon dossier et qu'il est compatible avec votre DAW et système d'exploitation. Relancez un scan complet des plugins dans votre DAW.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Crash au chargement</h5>
            <p className="mt-2">
              Démarrez votre DAW en mode sans échec (si disponible) ou désactivez temporairement les autres plugins pour identifier les conflits potentiels. Vérifiez les mises à jour disponibles.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h5 className="text-lg font-medium">Problèmes de performance</h5>
            <p className="mt-2">
              Surveillez l'utilisation CPU de vos plugins. Utilisez le gel de pistes ou le bounce en audio pour les plugins gourmands en ressources. Augmentez la taille de buffer audio si nécessaire.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InstallationContent;