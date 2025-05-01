
import { MusicGenre } from "@/types/music";

export const musiqueDuMondeGenre: MusicGenre = {
  name: "Musique du Monde",
  slug: "musique-du-monde",
  description: "Terme englobant la diversité des traditions musicales de toutes les cultures du globe, des musiques traditionnelles aux fusions contemporaines.",
  history: "La musique du monde représente l'héritage musical de toutes les cultures. Dans les années 1980, le terme 'world music' est devenu une catégorie commerciale pour promouvoir les musiques non occidentales. L'intérêt occidental pour ces traditions s'est intensifié avec des artistes comme Ravi Shankar et Miriam Makeba. L'ère numérique a transformé l'accessibilité de ces musiques, favorisant les fusions entre traditions et sons contemporains. Aujourd'hui, ces musiques bénéficient d'une reconnaissance croissante, enrichissant la diversité musicale mondiale tout en préservant des patrimoines culturels uniques.",
  era: "Ancestral à aujourd'hui",
  characteristics: [
    "Instruments spécifiques à chaque culture",
    "Gammes et tonalités non occidentales",
    "Techniques vocales distinctives",
    "Rythmes complexes et polyrythmies",
    "Transmission orale de traditions séculaires",
    "Contextes rituels ou culturels spécifiques"
  ],
  keyArtists: [
    { name: "Youssou N'Dour", years: "1980-présent", description: "Ambassadeur de la musique sénégalaise" },
    { name: "Ravi Shankar", years: "1939-2012", description: "Maître du sitar et diffuseur de la musique indienne" },
    { name: "Cesária Évora", years: "1988-2011", description: "La 'Diva aux pieds nus' du Cap-Vert" },
    { name: "Fela Kuti", years: "1958-1997", description: "Pionnier de l'afrobeat et activiste" },
    { name: "Nusrat Fateh Ali Khan", years: "1965-1997", description: "Légende du qawwali pakistanais" }
  ],
  subgenres: [
    { name: "Afrobeat", description: "Fusion de musiques ouest-africaines avec jazz, funk et percussions", era: "1960-présent" },
    { name: "Musique Latine", description: "Styles d'Amérique latine comme salsa, bossa nova, tango", era: "Divers" },
    { name: "Musique Celtique", description: "Traditions d'Irlande, Écosse, Bretagne avec instrumentation spécifique", era: "Ancestral-présent" },
    { name: "Raï", description: "Style algérien mêlant traditions berbères et influences occidentales", era: "1980-présent" },
    { name: "Reggae", description: "Musique jamaïcaine rythmée avec thèmes spirituels et sociaux", era: "1960-présent" }
  ],
  keyAlbums: [
    { title: "Graceland", artist: "Paul Simon", year: "1986", link: "" },
    { title: "Talking Timbuktu", artist: "Ali Farka Touré & Ry Cooder", year: "1994", link: "" },
    { title: "The Best of Cesária Évora", artist: "Cesária Évora", year: "1999", link: "" },
    { title: "Miss Perfumado", artist: "Cesária Évora", year: "1992", link: "" }
  ],
  influences: [
    "Fusion World",
    "Jazz Contemporain",
    "Électronique Globale",
    "Dance Music"
  ],
  influencedBy: [
    "Traditions Ancestrales",
    "Rituels Culturels",
    "Migrations de Population",
    "Échanges Coloniaux"
  ],
  image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
  color: "bg-yellow-600/20"
};
