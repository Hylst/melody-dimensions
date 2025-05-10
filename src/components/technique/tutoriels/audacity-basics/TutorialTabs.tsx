import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import des composants modulaires pour chaque onglet
import InstallationTab from "./tabs/InstallationTab";
import InterfaceTab from "./tabs/InterfaceTab";
import ImportationTab from "./tabs/ImportationTab";
import EditionTab from "./tabs/EditionTab";
import EffetsTab from "./tabs/EffetsTab";
import PistesTab from "./tabs/PistesTab";
import ExportationTab from "./tabs/ExportationTab";

const TutorialTabs = () => {
  return (
    <Tabs defaultValue="installation" className="w-full">
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
        <InstallationTab />
      </TabsContent>

      <TabsContent value="interface" className="space-y-4">
        <InterfaceTab />
      </TabsContent>

      <TabsContent value="importation" className="space-y-4">
        <ImportationTab />
      </TabsContent>

      <TabsContent value="edition" className="space-y-4">
        <EditionTab />
      </TabsContent>

      <TabsContent value="effets" className="space-y-4">
        <EffetsTab />
      </TabsContent>

      <TabsContent value="pistes" className="space-y-4">
        <PistesTab />
      </TabsContent>

      <TabsContent value="exportation" className="space-y-4">
        <ExportationTab />
      </TabsContent>
    </Tabs>
  );
};

export default TutorialTabs;