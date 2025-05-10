import React from "react";
import { TutorialHeader, TutorialBanner, TutorialTabs, useTutorialNavigation } from "@/components/tutoriels";
import { TutorialIntro } from "./index";
import {
  IntroductionContent,
  ReverbContent,
  DelayContent,
  StereoImagingContent,
  PracticalTipsContent
} from "./content";

const CakewalkSpatialEffects = () => {
  // Utiliser le hook de navigation pour gérer les transitions entre les sections
  const { currentTab, navigateToTab, navigateToNextTab, navigateToPrevTab } = useTutorialNavigation([
    "introduction",
    "reverb",
    "delay",
    "stereo-imaging",
    "practical-tips"
  ]);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <TutorialHeader 
        title="Effets spatiaux dans Cakewalk" 
      />
      
      <TutorialBanner 
        imageSrc="/images/tutorials/cakewalk-spatial-effects.jpg"
        imageAlt="Interface de Cakewalk montrant des effets spatiaux"
      />
      
      <TutorialIntro />
      
      <TutorialTabs
        tabs={[
          {
            id: "introduction",
            label: "Introduction",
            content: <IntroductionContent />
          },
          {
            id: "reverb",
            label: "Réverbération",
            content: <ReverbContent />
          },
          {
            id: "delay",
            label: "Delay",
            content: <DelayContent />
          },
          {
            id: "stereo-imaging",
            label: "Imagerie Stéréo",
            content: <StereoImagingContent />
          },
          {
            id: "practical-tips",
            label: "Conseils Pratiques",
            content: <PracticalTipsContent />
          }
        ]}
        defaultTab={currentTab}
      />
      
      <div className="flex justify-between mt-8">
        <button
          onClick={navigateToPrevTab}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          disabled={currentTab === "introduction"}
        >
          Section précédente
        </button>
        
        <button
          onClick={navigateToNextTab}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          disabled={currentTab === "practical-tips"}
        >
          Section suivante
        </button>
      </div>
    </div>
  );
};

export default CakewalkSpatialEffects;