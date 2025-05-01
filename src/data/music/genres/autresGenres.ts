
import { MusicGenre } from "@/types/music";

export const autresGenresGenre: MusicGenre = {
  name: "Autres Genres Musicaux",
  slug: "autres-genres",
  description: "Exploration des genres moins conventionnels ou émergents qui élargissent les frontières de la création musicale.",
  history: "Au-delà des catégories traditionnelles, l'histoire musicale est riche de genres expérimentaux et avant-gardistes. Du musique concrète des années 1940 aux innovations numériques actuelles, ces genres repoussent constamment les limites. Dans les années 1960-70, l'avant-garde et le minimalisme ont émergé avec John Cage et Steve Reich. Les années 1990-2000 ont vu l'essor de la musique ambient, noise et glitch. Aujourd'hui, l'accessibilité des technologies numériques et le brassage culturel ont multiplié ces explorations sonores, créant un paysage musical en perpétuelle évolution où les frontières entre genres s'estompent.",
  era: "1940 à aujourd'hui",
  characteristics: [
    "Approches expérimentales et non conventionnelles",
    "Utilisation de technologies innovantes",
    "Rejet délibéré des formats traditionnels",
    "Création de sonorités inédites ou déstructurées",
    "Compositions basées sur des concepts abstraits",
    "Fusion d'éléments disparates"
  ],
  keyArtists: [
    { name: "Brian Eno", years: "1971-présent", description: "Pionnier de la musique ambient" },
    { name: "Philip Glass", years: "1965-présent", description: "Figure majeure du minimalisme" },
    { name: "Björk", years: "1993-présent", description: "Innovatrice aux frontières de multiples genres" },
    { name: "Aphex Twin", years: "1991-présent", description: "Révolutionnaire de la musique électronique expérimentale" },
    { name: "John Cage", years: "1938-1992", description: "Compositeur avant-gardiste célèbre pour 4'33\"" }
  ],
  subgenres: [
    { name: "Ambient", description: "Musique atmosphérique privilégiant textures et ambiances sur rythme et mélodie", era: "1970-présent" },
    { name: "Noise", description: "Utilisation artistique de sons distordus et dissonants", era: "1980-présent" },
    { name: "Minimalisme", description: "Compositions basées sur la répétition et l'évolution graduelle", era: "1960-présent" },
    { name: "Musique Concrète", description: "Création à partir d'enregistrements de sons naturels transformés", era: "1940-présent" },
    { name: "Vaporwave", description: "Genre internet mélangeant nostalgie des années 80-90 et esthétique consumériste", era: "2010-présent" }
  ],
  keyAlbums: [
    { title: "Music for Airports", artist: "Brian Eno", year: "1978", link: "" },
    { title: "Ambient 1: Music for Airports", artist: "Brian Eno", year: "1978", link: "" },
    { title: "Selected Ambient Works 85-92", artist: "Aphex Twin", year: "1992", link: "" },
    { title: "Vespertine", artist: "Björk", year: "2001", link: "" }
  ],
  influences: [
    "Art Sonore",
    "Installations Interactives",
    "Musique de Film Expérimentale",
    "Composition Algorithmique"
  ],
  influencedBy: [
    "Musique Académique",
    "Avant-garde",
    "Arts Visuels",
    "Technologies Émergentes"
  ],
  image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  color: "bg-purple-600/20"
};
