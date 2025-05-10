import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TutorialIntro = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction au mixage avec Ardour</h2>
        <p className="mb-4">
          Ardour est un puissant logiciel d'enregistrement et de mixage audio open source qui offre des fonctionnalités professionnelles 
          comparables à celles des DAW commerciaux. Son interface de mixage robuste et ses capacités de routage flexibles en font un 
          excellent choix pour réaliser des mixages de qualité professionnelle.
        </p>
        <p className="mb-4">
          Dans ce tutoriel, nous explorerons les fonctionnalités de mixage avancées d'Ardour et apprendrons à les utiliser efficacement 
          pour créer des mixages équilibrés, dynamiques et professionnels. Nous aborderons la préparation du projet, le routage audio, 
          l'utilisation des plugins, l'automation et bien plus encore.
        </p>
        <p className="mb-4">
          Que vous soyez un utilisateur expérimenté d'Ardour ou que vous veniez de découvrir ce logiciel après avoir suivi notre tutoriel 
          sur l'édition multipiste, ce guide vous aidera à tirer le meilleur parti des puissantes fonctionnalités de mixage d'Ardour.
        </p>
      </CardContent>
    </Card>
  );
};

export default TutorialIntro;