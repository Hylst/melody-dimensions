import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TutorialIntro = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction aux fondamentaux du mixage audio</h2>
        <p className="mb-4">
          Le mixage est une étape cruciale dans la production musicale qui transforme des pistes individuelles en un ensemble cohérent et équilibré. 
          Ce processus artistique et technique permet de donner vie à votre musique en créant une expérience sonore immersive et professionnelle.
        </p>
        <p className="mb-4">
          Dans ce tutoriel, nous explorerons les concepts fondamentaux du mixage audio qui s'appliquent à tous les styles musicaux et à tous les logiciels de production. 
          Vous découvrirez les principes essentiels qui vous permettront d'améliorer considérablement la qualité de vos productions, même avec un équipement modeste.
        </p>
        <p className="mb-4">
          Que vous soyez débutant ou que vous ayez déjà quelques notions de mixage, ce guide vous aidera à comprendre les outils et techniques 
          indispensables pour créer des mixages équilibrés, clairs et dynamiques. Nous aborderons notamment l'égalisation, la compression, 
          la réverbération et les aspects essentiels du workflow de mixage.
        </p>
      </CardContent>
    </Card>
  );
};

export default TutorialIntro;