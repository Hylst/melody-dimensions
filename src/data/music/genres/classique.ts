
import { MusicGenre } from "@/types/music";

export const classiqueGenre: MusicGenre = {
  name: "Musique Classique",
  slug: "classique",
  description: "Un ensemble de traditions musicales occidentales qui s'étend du 9ème siècle à nos jours, avec des périodes distinctes comme baroque, classique, romantique et moderne.",
  history: "La musique classique occidentale a évolué à partir des traditions liturgiques, particulièrement le chant grégorien. Pendant la Renaissance, la polyphonie s'est développée, suivie de l'ère baroque avec Bach et Vivaldi. La période classique (1750-1820) a vu Mozart et Beethoven, tandis que le romantisme (19ème siècle) a apporté plus d'expressivité avec Chopin et Tchaïkovski. Le 20ème siècle a introduit de nouvelles approches avec Debussy, Stravinsky et la musique contemporaine.",
  era: "IXe siècle à nos jours",
  characteristics: [
    "Notation musicale précise et formelle",
    "Structures musicales complexes (sonates, symphonies)",
    "Développement thématique élaboré",
    "Large gamme d'instruments et d'ensembles",
    "Dynamiques et expressions contrôlées",
    "Traditions d'interprétation rigoureuses"
  ],
  keyArtists: [
    { name: "Ludwig van Beethoven", years: "1770-1827", description: "Compositeur emblématique du classicisme tardif et romantisme précoce" },
    { name: "Wolfgang Amadeus Mozart", years: "1756-1791", description: "Génie du classicisme, auteur de plus de 600 œuvres" },
    { name: "Johann Sebastian Bach", years: "1685-1750", description: "Maître baroque du contrepoint et de la fugue" },
    { name: "Frédéric Chopin", years: "1810-1849", description: "Virtuose romantique du piano" },
    { name: "Piotr Ilitch Tchaïkovski", years: "1840-1893", description: "Compositeur russe célèbre pour ses ballets" }
  ],
  subgenres: [
    { name: "Baroque", description: "Caractérisé par l'ornementation, la richesse harmonique et le contrepoint", era: "1600-1750" },
    { name: "Classique", description: "Met l'accent sur la clarté, l'équilibre et la forme musicale", era: "1750-1820" },
    { name: "Romantique", description: "Privilégie l'expression émotionnelle et la narration dramatique", era: "1800-1910" },
    { name: "Moderne", description: "Expérimentation avec l'atonalité, le sérialisme et nouvelles sonorités", era: "1890-1975" },
    { name: "Contemporaine", description: "Intègre l'électronique, le minimalisme et des influences mondiales", era: "1975-présent" }
  ],
  keyAlbums: [
    { title: "Symphonie No. 9", artist: "Beethoven", year: "1824", link: "" },
    { title: "Le Clavier bien tempéré", artist: "J.S. Bach", year: "1722-1742", link: "" },
    { title: "Requiem", artist: "Mozart", year: "1791", link: "" },
    { title: "Les Quatre Saisons", artist: "Vivaldi", year: "1725", link: "" }
  ],
  influences: [
    "Musique Contemporaine",
    "Rock Progressif",
    "Musique de Film",
    "Jazz"
  ],
  influencedBy: [
    "Musique Liturgique",
    "Renaissance",
    "Musique Folklorique"
  ],
  image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
  color: "bg-amber-700/20"
};
