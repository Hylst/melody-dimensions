import React from "react";

interface BannerProps {
  imageUrl: string;
  altText: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText }) => {
  return (
    <div className="aspect-video bg-muted rounded-md overflow-hidden relative mb-4">
      <img 
        src={imageUrl} 
        alt={altText} 
        className="object-cover w-full h-full" 
      />
    </div>
  );
};

export default Banner;