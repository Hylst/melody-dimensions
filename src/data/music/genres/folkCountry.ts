
import { MusicGenre } from "@/types/music";

export const folkCountryGenre: MusicGenre = {
  name: "Folk & Country",
  slug: "folk-country",
  description: "Genres enracinés dans les traditions populaires, souvent caractérisés par la narration d'histoires, l'utilisation d'instruments acoustiques et des thèmes ruraux ou traditionnels.",
  history: "La musique folk trouve ses origines dans les traditions orales séculaires. Au 20ème siècle, elle connut une renaissance avec des artistes comme Woody Guthrie et Pete Seeger. Le country émergea dans les années 1920 dans le sud des États-Unis, fusionnant des traditions folkloriques européennes avec des influences afro-américaines. Dans les années 1960-70, le folk connut un renouveau avec Bob Dylan et Joan Baez, tandis que le country se diversifiait avec Johnny Cash et Dolly Parton. Aujourd'hui, ces genres continuent d'évoluer avec des artistes comme Mumford & Sons ou Chris Stapleton, incorporant des éléments modernes tout en préservant leurs racines.",
  era: "Ancestral à aujourd'hui",
  characteristics: [
    "Narration d'histoires et paroles signifiantes",
    "Instruments acoustiques (guitare, banjo, violon)",
    "Arrangements musicaux simples et directs",
    "Thèmes ruraux, sociaux ou historiques",
    "Utilisation d'harmonies vocales et de chœurs",
    "Technique vocale distinctive (twang, yodel)"
  ],
  keyArtists: [
    { name: "Bob Dylan", years: "1962-présent", description: "Icône folk révolutionnaire et lauréat du prix Nobel" },
    { name: "Johnny Cash", years: "1955-2003", description: "L'Homme en Noir, figure emblématique du country" },
    { name: "Woody Guthrie", years: "1934-1956", description: "Pionnier du folk américain et activiste" },
    { name: "Dolly Parton", years: "1964-présent", description: "Légende country aux multiples talents" },
    { name: "Joan Baez", years: "1960-présent", description: "Voix puissante du mouvement folk" }
  ],
  subgenres: [
    { name: "Folk Traditionnel", description: "Musique acoustique transmise oralement dans les communautés", era: "Ancestral-présent" },
    { name: "Folk Revival", description: "Renaissance du folk avec conscience sociale et politique", era: "1960-1970" },
    { name: "Country Traditionnel", description: "Style authentique avec fidélité aux racines rurales", era: "1920-1960" },
    { name: "Bluegrass", description: "Fusion énergique de folk et country avec virtuosité instrumentale", era: "1940-présent" },
    { name: "Americana", description: "Mélange contemporain de folk, country, blues et rock", era: "1990-présent" }
  ],
  keyAlbums: [
    { title: "Blood on the Tracks", artist: "Bob Dylan", year: "1975", link: "" },
    { title: "At Folsom Prison", artist: "Johnny Cash", year: "1968", link: "" },
    { title: "Blue", artist: "Joni Mitchell", year: "1971", link: "" },
    { title: "Coat of Many Colors", artist: "Dolly Parton", year: "1971", link: "" }
  ],
  influences: [
    "Americana",
    "Rock Folk",
    "Alt-Country",
    "Indie Folk"
  ],
  influencedBy: [
    "Musiques Traditionnelles Européennes",
    "Blues",
    "Gospel",
    "Bluegrass"
  ],
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  color: "bg-green-700/20"
};
