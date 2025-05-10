import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TutorialIntro = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction aux effets spatiaux dans Cakewalk</h2>
        <p className="mb-4">
          Les effets spatiaux sont essentiels pour créer de la profondeur et de la dimension dans vos mixages. 
          Ils permettent de placer les instruments dans un espace sonore virtuel, donnant ainsi vie à votre musique 
          et créant une expérience d'écoute immersive.
        </p>
        <p className="mb-4">
          Dans ce tutoriel, nous explorerons les principaux effets spatiaux disponibles dans Cakewalk et comment 
          les utiliser efficacement dans vos productions. Vous découvrirez comment manipuler la réverbération, 
          le delay, et d'autres effets pour créer différentes ambiances et sensations de profondeur.
        </p>
        <p className="mb-4">
          Que vous soyez débutant ou utilisateur expérimenté de Cakewalk, ce guide vous aidera à maîtriser 
          ces outils puissants pour améliorer considérablement la qualité spatiale de vos mixages et donner 
          à votre musique une dimension professionnelle.
        </p>
      </CardContent>
    </Card>
  );
};

export default TutorialIntro;