import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ReverbContent = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold">Réverbération</h3>
      
      <p>
        La réverbération (ou reverb) est un effet qui simule la façon dont le son se comporte dans un espace physique,
        en créant des réflexions qui persistent après le son original.
      </p>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Principes de base</h4>
          <p className="mb-4">
            La réverbération ajoute de la profondeur et de la dimension à votre mix en plaçant les éléments
            dans un espace sonore virtuel. Voici les paramètres principaux :
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pre-delay</strong> : Temps entre le son direct et les premières réflexions</li>
            <li><strong>Decay/RT60</strong> : Durée nécessaire pour que la réverbération diminue de 60 dB</li>
            <li><strong>Early reflections</strong> : Premières réflexions du son sur les surfaces proches</li>
            <li><strong>Diffusion</strong> : Détermine la densité des réflexions</li>
            <li><strong>Damping</strong> : Atténuation des hautes fréquences au fil du temps</li>
            <li><strong>Mix/Dry-Wet</strong> : Balance entre le signal original et l'effet de réverbération</li>
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Types de réverbération</h4>
          
          <h5 className="text-lg font-medium mt-4">Room (Pièce)</h5>
          <p className="mb-4">
            Simule l'acoustique d'une petite à moyenne pièce. Temps de déclin court, réflexions rapprochées.
            Idéale pour ajouter un peu d'espace sans trop d'effet apparent.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Hall (Salle)</h5>
          <p className="mb-4">
            Simule l'acoustique d'une grande salle ou d'un auditorium. Temps de déclin plus long,
            son plus riche et plus diffus. Parfaite pour les orchestres et les instruments acoustiques.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Plate (Plaque)</h5>
          <p className="mb-4">
            Basée sur les anciennes réverbérations à plaque métallique. Son dense et brillant,
            avec peu de premières réflexions distinctes. Excellente pour les voix et les percussions.
          </p>
          
          <h5 className="text-lg font-medium mt-4">Spring (Ressort)</h5>
          <p>
            Basée sur les réverbérations à ressort des amplificateurs vintage. Son caractéristique
            avec un rebond métallique. Idéale pour les guitares et les sons rétro.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h4 className="text-xl font-medium mb-4">Techniques d'utilisation</h4>
          
          <h5 className="text-lg font-medium">Reverb en auxiliaire</h5>
          <p className="mb-4">
            Plutôt que d'appliquer différentes réverbérations à chaque piste, utilisez des pistes auxiliaires
            avec des réverbérations partagées. Cela crée une cohérence spatiale et économise des ressources CPU.
          </p>
          
          <h5 className="text-lg font-medium">Égalisation de la réverbération</h5>
          <p className="mb-4">
            Appliquez un filtre passe-haut sur votre réverbération pour éviter que les basses fréquences
            ne créent de la boue dans votre mix. Vous pouvez également atténuer certaines fréquences médiums
            pour plus de clarté.
          </p>
          
          <h5 className="text-lg font-medium">Automation</h5>
          <p>
            Automatisez le niveau de réverbération pour certaines sections de votre morceau. Par exemple,
            augmentez la réverbération sur la dernière note d'un refrain pour créer un effet dramatique.
          </p>
        </CardContent>
      </Card>
      
      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md border border-blue-200 dark:border-blue-800">
        <h4 className="text-lg font-medium text-blue-700 dark:text-blue-300 mb-2">Conseil</h4>
        <p className="text-blue-700 dark:text-blue-300">
          Moins, c'est souvent plus avec la réverbération. Un excès de reverb peut rapidement rendre
          un mix confus et distant. Commencez avec un niveau subtil et augmentez progressivement
          jusqu'à obtenir l'effet désiré.
        </p>
      </div>
    </div>
  );
};

export default ReverbContent;