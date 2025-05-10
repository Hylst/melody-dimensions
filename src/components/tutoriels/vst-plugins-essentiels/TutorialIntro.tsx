import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TutorialIntro = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction aux plugins VST essentiels</h2>
        <p className="mb-4">
          Les plugins VST (Virtual Studio Technology) sont des outils logiciels qui étendent les fonctionnalités de votre station de travail audio numérique (DAW). 
          Ils permettent d'ajouter des effets, des instruments virtuels et des outils d'analyse à votre arsenal de production musicale.
        </p>
        <p className="mb-4">
          La bonne nouvelle est qu'il existe de nombreux plugins VST gratuits de haute qualité qui rivalisent avec leurs homologues commerciaux. 
          Dans ce tutoriel, nous explorerons une sélection soigneusement choisie de plugins VST gratuits essentiels pour chaque étape de votre 
          processus de production musicale.
        </p>
        <p className="mb-4">
          Que vous soyez débutant à la recherche de vos premiers plugins ou un producteur expérimenté souhaitant enrichir votre collection sans vous ruiner, 
          ce guide vous présentera des outils précieux pour améliorer vos productions musicales.
        </p>
      </CardContent>
    </Card>
  );
};

export default TutorialIntro;