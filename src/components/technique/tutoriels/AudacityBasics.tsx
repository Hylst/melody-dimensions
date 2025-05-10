
import React from "react";
import TutorialHeader from "./audacity-basics/TutorialHeader";
import TutorialBanner from "./audacity-basics/TutorialBanner";
import TutorialIntro from "./audacity-basics/TutorialIntro";
import TutorialContent from "./audacity-basics/TutorialContent";
import TutorialTabs from "./audacity-basics/TutorialTabs";

const AudacityBasics = () => {
  return (
    <div className="container py-10">
      <TutorialHeader />
      <TutorialBanner />
      
      <div className="space-y-6">
        <TutorialIntro />
        <TutorialContent />
        <TutorialTabs />
      </div>
    </div>
  );
};

export default AudacityBasics;
