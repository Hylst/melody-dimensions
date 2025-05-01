
import React, { useEffect, useRef } from "react";

import { genreCategories } from "@/data/music/genreCategories";
import { mainGenres } from "@/data/music/mainGenres";

import GenreNavigation from "@/components/music/GenreNavigation";
import GenreSection from "@/components/music/GenreSection";

interface GenresPrincipauxSectionProps {
  activeGenre: string;
  setActiveGenre: (id: string) => void;
}

const sanitizeSlug = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Mise à jour du mapping pour s'assurer que tous les IDs correspondent exactement aux slugs utilisés
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

const GenresPrincipauxSection: React.FC<GenresPrincipauxSectionProps> = ({
  activeGenre,
  setActiveGenre,
}) => {
  const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Effet pour logger les refs pour debugging
  useEffect(() => {
    console.log("Section refs:", Object.keys(sectionRefs.current));
    console.log("Active genre:", activeGenre);
    console.log("Scroll target ID:", genreIdToScrollId[activeGenre] || activeGenre);
  }, [sectionRefs.current, activeGenre]);

  // Effet pour gérer le scroll initial et à chaque changement d'activeGenre
  useEffect(() => {
    const scrollToActiveGenre = () => {
      const scrollId = genreIdToScrollId[activeGenre] || activeGenre;
      console.log("Scrolling to:", scrollId);
      const element = sectionRefs.current[scrollId];
      
      if (element) {
        console.log("Element found, scrolling");
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.log("Element not found for ID:", scrollId);
        console.log("Available refs:", Object.keys(sectionRefs.current));
      }
    };
    
    // Petit délai pour s'assurer que les composants sont montés
    const timer = setTimeout(scrollToActiveGenre, 300);
    return () => clearTimeout(timer);
  }, [activeGenre]);

  const handleGenreChange = (id: string) => {
    console.log("Genre clicked:", id);
    setActiveGenre(id);
    
    const scrollId = genreIdToScrollId[id] || id;
    console.log("Will scroll to:", scrollId);
    
    const element = sectionRefs.current[scrollId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.log("Element not found for scrolling to:", scrollId);
    }
  };

  // S'assurer que les slugs dans mainGenres correspondent exactement à ceux dans genreIdToScrollId
  return (
    <div className="space-y-20">
      <GenreNavigation
        categories={genreCategories}
        activeGenre={activeGenre}
        setActiveGenre={handleGenreChange}
      />

      {mainGenres.map((genre) => {
        // Utiliser le slug prédéfini s'il existe ou créer un nouveau slug
        let slug = genre.slug || sanitizeSlug(genre.name);
        
        // Log pour debugging
        console.log(`Creating section for ${genre.name} with ID: ${slug}`);
        
        return (
          <div 
            key={`${slug}-${genre.name}`}
            ref={el => sectionRefs.current[slug] = el}
            id={slug}
            className="scroll-mt-20" // Ajouter une marge pour éviter que le header cache le début de la section
          >
            <GenreSection {...genre} slug={slug} />
          </div>
        );
      })}
    </div>
  );
};

export default GenresPrincipauxSection;
