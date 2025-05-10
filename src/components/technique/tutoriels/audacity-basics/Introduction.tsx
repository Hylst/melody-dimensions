import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Introduction = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction à Audacity</h2>
        <p className="mb-4">
          Audacity est un logiciel d'édition audio gratuit et open source, disponible sur Windows, macOS et Linux. 
          C'est un outil puissant qui permet d'enregistrer, d'éditer et de manipuler des fichiers audio avec une 
          interface relativement simple à prendre en main.
        </p>
        <p className="mb-4">
          Ce tutoriel vous guidera à travers les fonctionnalités de base d'Audacity, depuis l'installation 
          jusqu'à l'exportation de votre premier projet audio.
        </p>
      </CardContent>
    </Card>
  );
};

export default Introduction;