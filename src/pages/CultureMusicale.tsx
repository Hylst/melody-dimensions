
import React, { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import des sections dédiées
import MusicHeader from "@/components/music/MusicHeader";

import GenresPrincipauxSection from "./cultureMusicale/sections/GenresPrincipauxSection";
import EvolutionSection from "./cultureMusicale/sections/EvolutionSection";
import ContemporainSection from "./cultureMusicale/sections/ContemporainSection";
import FusionSection from "./cultureMusicale/sections/FusionSection";
import PeriodesSection from "./cultureMusicale/sections/PeriodesSection";

const CultureMusicale = () => {
  const [activeGenre, setActiveGenre] = React.useState("rock");
  const [activeTab, setActiveTab] = React.useState("genres");

  // Mise à jour du mapping pour correspondre exactement à celui dans GenresPrincipauxSection
  const genreIdToScrollId: { [key: string]: string } = {
    "rock": "rock",
    "metal": "metal",
    "electronic": "electronique",
    "jazz-blues": "jazz",
    "hip-hop": "hip-hop",
    "world": "musique-du-monde",
    "classical": "classique",
    "pop": "pop-disco",
    "folk": "folk-country",
    "other": "autres-genres"
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Reset scroll position when changing tabs
    window.scrollTo(0, 0);
  };

  return (
    <div className="container py-10 space-y-12">
      <MusicHeader
        title="Encyclopédie des Genres Musicaux"
        description="Explorez la riche diversité des genres musicaux à travers l'histoire, les caractéristiques, et les artistes emblématiques qui ont façonné notre patrimoine sonore mondial"
      />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="w-full justify-start mb-8 flex-wrap gap-2">
          <TabsTrigger value="genres">Genres Principaux</TabsTrigger>
          <TabsTrigger value="evolution">Évolution</TabsTrigger>
          <TabsTrigger value="contemporain">Contemporain</TabsTrigger>
          <TabsTrigger value="fusion">Fusion</TabsTrigger>
          <TabsTrigger value="periodes">Périodes</TabsTrigger>
        </TabsList>

        <TabsContent value="genres">
          <GenresPrincipauxSection
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        </TabsContent>

        <TabsContent value="evolution">
          <EvolutionSection />
        </TabsContent>

        <TabsContent value="contemporain">
          <ContemporainSection />
        </TabsContent>

        <TabsContent value="fusion">
          <FusionSection />
        </TabsContent>

        <TabsContent value="periodes">
          <PeriodesSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CultureMusicale;
