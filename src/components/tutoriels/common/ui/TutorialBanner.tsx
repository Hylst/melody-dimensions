import React from "react";

export interface TutorialBannerProps {
  imageSrc: string;
  imageAlt?: string;
}

const TutorialBanner = ({ imageSrc, imageAlt = "Image du tutoriel" }: TutorialBannerProps) => {
  return (
    <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="object-cover w-full h-full" 
      />
    </div>
  );
};

export default TutorialBanner;