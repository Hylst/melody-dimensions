import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TutorialBanner = () => {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="aspect-video bg-muted rounded-md relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=2070" 
            alt="Interface d'Audacity" 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
            Interface d'Audacity - Un logiciel puissant et gratuit pour l'édition audio
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorialBanner;