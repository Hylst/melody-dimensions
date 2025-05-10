import React from "react";

const TutorialIntro = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Introduction à Audacity</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="mb-4">
            Audacity est un logiciel d'édition audio gratuit et open source qui permet aux utilisateurs de réaliser 
            des modifications sur des fichiers audio. Ce tutoriel vous guidera à travers les fonctionnalités de base 
            d'Audacity pour vous aider à démarrer votre voyage dans l'édition audio.
          </p>
          <p className="mb-4">
            Que vous souhaitiez enregistrer un podcast, nettoyer un enregistrement audio ou créer votre propre musique, 
            Audacity offre tous les outils nécessaires pour accomplir ces tâches sans dépenser un centime.
          </p>
        </div>
        <div className="bg-muted rounded-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
            alt="Édition audio sur ordinateur" 
            className="object-cover w-full h-64" 
          />
        </div>
      </div>
    </section>
  );
};

export default TutorialIntro;