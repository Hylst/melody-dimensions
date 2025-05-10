import React from "react";
import { useParams } from "react-router-dom";
import TutorialLoader from "../TutorialLoader";
import TutorialIntro from "./TutorialIntro";
import InstallationContent from "./content/InstallationContent";
import InterfaceContent from "./content/InterfaceContent";
import ImportationContent from "./content/ImportationContent";
import EditionContent from "./content/EditionContent";
import EffetsContent from "./content/EffetsContent";
import PistesContent from "./content/PistesContent";
import ExportationContent from "./content/ExportationContent";
import TutorialTabs from "../common/TutorialTabs";

const AudacityBasics = () => {
  const { section } = useParams<{ section?: string }>();
  
  // Fonction pour rendre l'introduction
  const renderIntro = () => <TutorialIntro />;
  
  // Fonction pour rendre les onglets avec leur contenu
  const renderTabs = (tutorialId: string, activeSection?: string) => {
    return (
      <TutorialTabs
        tabs={[
          {
            id: "installation",
            label: "Installation",
            content: <InstallationContent />
          },
          {
            id: "interface",
            label: "Interface",
            content: <InterfaceContent />
          },
          {
            id: "importation",
            label: "Importation",
            content: <ImportationContent />
          },
          {
            id: "edition",
            label: "Édition",
            content: <EditionContent />
          },
          {
            id: "effets",
            label: "Effets",
            content: <EffetsContent />
          },
          {
            id: "pistes",
            label: "Pistes",
            content: <PistesContent />
          },
          {
            id: "exportation",
            label: "Exportation",
            content: <ExportationContent />
          }
        ]}
        defaultTab={activeSection || "installation"}
      />
    );
  };
  
  return (
    <TutorialLoader
      renderIntro={renderIntro}
      renderTabs={renderTabs}
    />
  );
};

export default AudacityBasics;