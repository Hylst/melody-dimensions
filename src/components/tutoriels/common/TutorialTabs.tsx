import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TutorialTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const TutorialTabs = ({
  tabs,
  defaultTab,
  className = "w-full"
}: TutorialTabsProps) => {
  // Utiliser le premier onglet comme valeur par défaut si aucune n'est spécifiée
  const defaultValue = defaultTab || (tabs.length > 0 ? tabs[0].id : "");

  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList className={`grid grid-cols-${tabs.length} mb-4`}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="space-y-4">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TutorialTabs;