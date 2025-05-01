
import { MusicGenre } from "@/types/music";

export const popDiscoGenre: MusicGenre = {
  name: "Pop & Disco",
  slug: "pop-disco",
  description: "Genres axés sur des mélodies accrocheuses et dancantes, caractérisés par des productions commerciales et une large accessibilité.",
  history: "La musique pop émergea dans les années 1950 comme une version plus accessible du rock and roll. Dans les années 1960, les Beatles révolutionnèrent le format. Le disco est apparu dans les années 1970, caractérisé par des rythmes dansants, des arrangements orchestraux et une esthétique festive. Malgré son déclin à la fin des années 1970, son influence persiste dans la dance music. La pop a continué d'évoluer à travers les décennies, intégrant des éléments électroniques dans les années 1980-90, puis absorbant des influences R&B, hip-hop et EDM au 21ème siècle.",
  era: "1950s à aujourd'hui",
  characteristics: [
    "Structures de chansons simples et accrocheuses",
    "Focus sur les refrains mémorables et les mélodies",
    "Production sonore soignée et accessible",
    "Sections rythmiques prononcées et dansantes",
    "Utilisation d'instruments électroniques et acoustiques",
    "Arrangements vocaux harmoniques"
  ],
  keyArtists: [
    { name: "The Beatles", years: "1960-1970", description: "Groupe le plus influent de l'histoire de la pop" },
    { name: "Michael Jackson", years: "1971-2009", description: "Le 'Roi de la Pop', innovateur en musique et en danse" },
    { name: "ABBA", years: "1972-1982, 2021-présent", description: "Groupe suédois emblématique du disco et de la pop" },
    { name: "Madonna", years: "1982-présent", description: "La 'Reine de la Pop', constamment réinventée" },
    { name: "Donna Summer", years: "1968-2012", description: "La 'Reine du Disco'" }
  ],
  subgenres: [
    { name: "Disco", description: "Style dansant des années 70 avec rythmiques prononcées et orchestrations", era: "1970-1980" },
    { name: "Dance-Pop", description: "Fusion de la pop et des éléments de musique dance électronique", era: "1980-présent" },
    { name: "Bubblegum Pop", description: "Pop légère destinée aux adolescents, mélodies simples et optimistes", era: "1960-présent" },
    { name: "Synth-Pop", description: "Utilisation prédominante de synthétiseurs et de sons électroniques", era: "1980-présent" },
    { name: "Europop", description: "Pop européenne avec influences électroniques et dance", era: "1970-présent" }
  ],
  keyAlbums: [
    { title: "Thriller", artist: "Michael Jackson", year: "1982", link: "" },
    { title: "Sgt. Pepper's Lonely Hearts Club Band", artist: "The Beatles", year: "1967", link: "" },
    { title: "Bad Girls", artist: "Donna Summer", year: "1979", link: "" },
    { title: "ABBA Gold", artist: "ABBA", year: "1992", link: "" }
  ],
  influences: [
    "Dance Music",
    "Musique Électronique",
    "R&B Contemporain",
    "Hip-Hop"
  ],
  influencedBy: [
    "Rock and Roll",
    "R&B",
    "Soul",
    "Funk"
  ],
  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  color: "bg-pink-600/20"
};
