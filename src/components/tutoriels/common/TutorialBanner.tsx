import React from "react";

interface TutorialBannerProps {
  imageSrc: string;
  imageAlt?: string;
  category?: string;
  difficulty?: "débutant" | "intermédiaire" | "avancé";
  duration?: string;
  software?: string;
}

const TutorialBanner = ({
  imageSrc,
  imageAlt = "Image du tutoriel",
  category,
  difficulty,
  duration,
  software
}: TutorialBannerProps) => {
  // Map des couleurs pour les niveaux de difficulté
  const difficultyColors = {
    débutant: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    intermédiaire: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    avancé: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  };

  return (
    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        {category && (
          <span className="text-white text-sm font-medium mb-2">
            {category}
          </span>
        )}
        
        <div className="flex flex-wrap gap-2 mt-2">
          {difficulty && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          )}
          
          {duration && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {duration}
            </span>
          )}
          
          {software && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {software}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialBanner;