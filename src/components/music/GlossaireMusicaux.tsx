
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const terms = [
  { term: "Accord", definition: "Un groupe de notes jouées simultanément." },
  { term: "Arpège", definition: "Notes d’un accord jouées successivement." },
  { term: "Cadence", definition: "Suite d'accords marquant la fin d’une phrase musicale." },
  { term: "Dièse", definition: "Signe augmentant la hauteur d’une note d’un demi-ton." },
  { term: "Gammes", definition: "Succession ordonnée de notes." },
  { term: "Harmonie", definition: "Combinaison de notes jouées simultanément." },
  { term: "Intervalle", definition: "Distance entre deux sons." },
  { term: "Modulation", definition: "Changement de tonalité dans un morceau." },
  { term: "Octave", definition: "Intervalle entre deux notes de même nom." },
  { term: "Tempo", definition: "Vitesse d’exécution d’un morceau." },
  { term: "Timbre", definition: "Caractéristique sonore qui permet de distinguer les instruments." },
  { term: "Tonique", definition: "Première note d’une gamme, base tonale." },
  { term: "Chœur", definition: "Ensemble de plusieurs voix chantées simultanément." },
  { term: "Contrepoint", definition: "Technique d’écriture musicale où deux lignes mélodiques sont superposées." },
  { term: "Crescendo", definition: "Augmentation progressive de l’intensité sonore." },
  { term: "Décibel (dB)", definition: "Unité de mesure de l’intensité sonore." },
  { term: "Dissonance", definition: "Association de sons qui crée une impression de tension ou d’instabilité." },
  { term: "Fluctuation", definition: "Variation légère et rapide d’un paramètre sonore, souvent le volume ou la hauteur." },
  { term: "Glissando", definition: "Glissement continu d’une note à une autre." },
  { term: "Harmoniques", definition: "Sons composés de multiples fréquences, donnant la couleur au son." },
  { term: "Improvisation", definition: "Création spontanée d’une musique sans préparation préalable." },
  { term: "Liaison", definition: "Indication de maintien d’une note sans répétition." },
  { term: "Mélodie", definition: "Suite de notes organisées qui constitue le thème principal d’un morceau." },
  { term: "Motif", definition: "Courte phrase musicale qui se répète et sert de base à une composition." },
  { term: "Ornement", definition: "Décoration ajoutée aux notes pour enrichir la mélodie." },
  { term: "Pizzicato", definition: "Technique de jeu des instruments à cordes: pincer les cordes au lieu d’utiliser l’archet." },
  { term: "Polyphonie", definition: "Texture musicale composée de plusieurs lignes mélodiques indépendantes." },
  { term: "Résonance", definition: "Amplification d’un son due à la vibration d’un corps proche." },
  { term: "Rythme", definition: "Organisation temporelle des sons et des silences dans la musique." },
  { term: "Staccato", definition: "Exécution courte et détachée des notes." },
  { term: "Symphonie", definition: "Composition musicale longue pour orchestre, généralement en plusieurs mouvements." },
  { term: "Tonalité", definition: "Organisation des sons autour d’une note centrale, la tonique." },
  { term: "Tremolo", definition: "Répétition rapide d’une même note ou d’un même accord." },
];

const GlossaireMusicaux: React.FC = () => {
  return (
    <section className="container py-10 min-h-screen">
      <h1 className="text-2xl font-display font-semibold mb-6 text-primary-purple text-center">Glossaire des termes musicaux</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[75vh] overflow-y-auto">
        {terms.map(({ term, definition }) => (
          <Card key={term} className="hover:shadow-lg transition-shadow duration-300 cursor-default">
            <CardHeader>
              <CardTitle className="text-lg text-secondary-purple">{term}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300">{definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GlossaireMusicaux;
