import React, { useState, useEffect } from "react";

const Glossaire = () => {
  // État pour stocker la lettre active et le terme recherché
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Fonction pour récupérer le hash de l'URL et scroller vers la section correspondante
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Glossaire organisé par catégories
  const glossaireData = {
    theorie: [
      {
        terme: "Polyphonie",
        definition:
          "Technique musicale consistant à superposer plusieurs lignes mélodiques indépendantes, créant ainsi une texture riche et complexe. Développée principalement pendant la Renaissance, la polyphonie est fondamentale dans la musique occidentale classique et se distingue de l'homophonie où une mélodie principale est soutenue par un accompagnement harmonique.",
      },
      {
        terme: "Tonalité",
        definition:
          "Système musical organisé autour d'une note principale (la tonique) qui établit un centre de gravité harmonique. La tonalité définit les relations entre les notes et les accords dans une composition, créant une hiérarchie sonore qui guide l'auditeur à travers des sensations de tension et de résolution. Les tonalités majeures évoquent généralement des émotions plus lumineuses, tandis que les tonalités mineures tendent vers des expressions plus mélancoliques.",
      },
      {
        terme: "Contrepoint",
        definition:
          "Art de composer de la musique en combinant plusieurs lignes mélodiques simultanées selon des règles précises. Le contrepoint, perfectionné par des compositeurs comme Bach, vise l'équilibre entre l'indépendance horizontale des voix et leur cohérence verticale (harmonique). Cette technique est au cœur de formes musicales comme la fugue et le canon.",
      },
      {
        terme: "Harmonie",
        definition:
          "Aspect de la musique qui traite de la construction et de l'enchaînement des accords. L'harmonie étudie comment les sons combinés verticalement créent des couleurs sonores et des progressions qui soutiennent la mélodie. L'analyse harmonique révèle la structure profonde d'une composition et les tensions/résolutions qui créent son mouvement expressif.",
      },
      {
        terme: "Cadence",
        definition:
          "Formule harmonique qui marque la fin d'une phrase musicale, comparable à une ponctuation dans le langage. Les cadences peuvent être conclusives (parfaite), suspensives (demi-cadence) ou trompeuses (cadence rompue), chacune créant différentes sensations de conclusion ou d'attente.",
      },
      {
        terme: "Modulation",
        definition:
          "Procédé permettant de passer d'une tonalité à une autre au sein d'une même composition. La modulation apporte variété et développement dans l'œuvre musicale en modifiant la couleur harmonique et en créant des transitions expressives entre différentes sections.",
      },
    ],
    gammes: [
      {
        terme: "Gamme majeure",
        definition:
          "Succession de sept notes suivant un motif spécifique d'intervalles (ton-ton-demi-ton-ton-ton-ton-demi-ton). La gamme majeure possède une sonorité généralement perçue comme joyeuse, lumineuse ou affirmative et constitue l'une des bases de la musique occidentale.",
      },
      {
        terme: "Gamme mineure",
        definition:
          "Série de notes avec une structure intervallique distinctive qui lui confère une sonorité souvent décrite comme mélancolique ou dramatique. Il existe trois types principaux de gammes mineures : naturelle, harmonique et mélodique, chacune avec ses caractéristiques expressives propres.",
      },
      {
        terme: "Mode",
        definition:
          "Type de gamme avec une organisation intervallique spécifique créant une atmosphère sonore caractéristique. Les modes les plus connus sont les modes grecs (ionien, dorien, phrygien, lydien, mixolydien, éolien et locrien), chacun ayant sa propre empreinte émotionnelle et étant utilisé dans divers genres musicaux, de la musique médiévale au jazz contemporain.",
      },
      {
        terme: "Gamme pentatonique",
        definition:
          "Gamme composée de cinq notes par octave, omettant les demi-tons présents dans les gammes diatoniques. Les gammes pentatoniques sont universelles et se retrouvent dans presque toutes les traditions musicales mondiales. La pentatonique majeure (do-ré-mi-sol-la) et mineure (la-do-ré-mi-sol) sont particulièrement répandues dans les musiques populaires et l'improvisation.",
      },
      {
        terme: "Gamme chromatique",
        definition:
          "Gamme qui utilise les douze demi-tons contenus dans une octave. Cette gamme constitue le matériau sonore complet du système tempéré occidental et sert de base aux explorations harmoniques modernes, notamment dans la musique atonale et sérielle.",
      },
    ],
    rythme: [
      {
        terme: "Mesure",
        definition:
          "Unité fondamentale d'organisation rythmique divisant la musique en segments réguliers, définie par un chiffrage (comme 4/4, 3/4, 6/8). La mesure détermine l'accentuation naturelle des temps et structure le flux musical en créant un cadre temporel régulier.",
      },
      {
        terme: "Tempo",
        definition:
          "Vitesse d'exécution d'une œuvre musicale, généralement indiquée en battements par minute (BPM) ou par des termes italiens (Adagio, Andante, Allegro, etc.). Le tempo influence profondément le caractère expressif d'une composition et peut varier au cours d'un morceau pour créer des effets dramatiques.",
      },
      {
        terme: "Syncope",
        definition:
          "Procédé rythmique consistant à accentuer un temps faible ou une partie de temps normalement non accentuée, créant une sensation de décalage ou de rupture dans la régularité rythmique. La syncope est essentielle dans de nombreux genres comme le jazz, le reggae et diverses musiques latines.",
      },
      {
        terme: "Polymétrie",
        definition:
          "Superposition simultanée de plusieurs structures métriques différentes, créant une complexité rythmique où coexistent des cycles temporels distincts. Cette technique, présente dans certaines musiques traditionnelles africaines et dans la musique contemporaine, crée une richesse rythmique particulière.",
      },
      {
        terme: "Ostinato",
        definition:
          "Motif musical (mélodique, rythmique ou harmonique) répété obstinément tout au long d'un passage. L'ostinato crée une fondation sur laquelle peuvent se développer d'autres éléments musicaux, contribuant à l'intensité et à l'unité d'une composition.",
      },
    ],
    notation: [
      {
        terme: "Portée",
        definition:
          "Ensemble de cinq lignes horizontales parallèles sur lesquelles sont placées les notes de musique. La position verticale d'une note sur la portée indique sa hauteur, tandis que sa forme détermine sa durée. La portée est complétée par une clé (sol, fa, ut) qui fixe la référence des hauteurs.",
      },
      {
        terme: "Armure",
        definition:
          "Ensemble des altérations (dièses ou bémols) placées au début de la portée, juste après la clé, indiquant la tonalité du morceau. L'armure évite de répéter ces altérations tout au long de la partition et permet d'identifier immédiatement la tonalité principale.",
      },
      {
        terme: "Phrasé",
        definition:
          "Indication sur la manière d'articuler et de relier les notes entre elles, souvent représentée par des liaisons ou des articulations spécifiques. Le phrasé est comparable à la ponctuation et aux inflexions du langage parlé, donnant sens et expression à la ligne musicale.",
      },
      {
        terme: "Nuances",
        definition:
          "Indications concernant l'intensité sonore (volume) d'un passage musical, allant du pianissimo (très doux) au fortissimo (très fort). Les nuances incluent aussi les variations progressives (crescendo, diminuendo) et contribuent fondamentalement à l'expressivité d'une interprétation.",
      },
      {
        terme: "Ornements",
        definition:
          "Figures mélodiques décoratives ajoutées à la ligne musicale principale, comme les trilles, mordants, appoggiatures ou gruppettos. Les ornements enrichissent la mélodie et varient selon les époques et styles musicaux, leur interprétation précise faisant partie de la pratique historiquement informée.",
      },
    ],
    instruments: [
      {
        terme: "Timbre",
        definition:
          "Qualité distinctive du son qui permet de différencier des instruments ou des voix jouant la même note à la même intensité. Le timbre résulte de la distribution spécifique des harmoniques et des transitoires d'attaque propres à chaque source sonore, créant sa \"couleur sonore\" unique.",
      },
      {
        terme: "Registre",
        definition:
          "Étendue des hauteurs dans laquelle évolue un instrument ou une voix, généralement divisée en registre grave, médium et aigu. Chaque registre possède ses caractéristiques sonores propres, et la capacité à naviguer entre les registres varie selon les instruments et interprètes.",
      },
      {
        terme: "Tessiture",
        definition:
          "Ensemble des notes qu'un instrument ou une voix peut produire confortablement, de la plus grave à la plus aiguë. La tessiture définit les limites naturelles d'un instrument ou d'une voix et influence directement les choix d'orchestration et d'écriture musicale.",
      },
      {
        terme: "Articulation",
        definition:
          "Manière dont les notes sont attaquées, maintenues et reliées entre elles (staccato, legato, marcato, etc.). L'articulation affecte profondément le caractère expressif d'un passage musical et varie selon les techniques instrumentales ou vocales spécifiques.",
      },
    ],
    composition: [
      {
        terme: "Forme sonate",
        definition:
          "Structure musicale tripartite (exposition, développement, réexposition) caractéristique de nombreuses œuvres classiques. Cette forme dynamique, basée sur la présentation et l'exploration de thèmes contrastants, permet un développement dramatique et une résolution satisfaisante des idées musicales.",
      },
      {
        terme: "Développement",
        definition:
          "Section d'une composition où les thèmes et motifs précédemment introduits sont explorés, transformés et combinés de manières nouvelles. Le développement crée tension et complexité en manipulant le matériau musical initial à travers diverses techniques comme la modulation, la fragmentation ou l'augmentation.",
      },
      {
        terme: "Leitmotiv",
        definition:
          "Thème musical récurrent associé à un personnage, une situation ou une idée spécifique, particulièrement dans l'opéra wagnérien. Le leitmotiv évolue et se transforme au fil de l'œuvre, reflétant les développements dramatiques et créant une architecture sonore cohérente.",
      },
      {
        terme: "Arrangement",
        definition:
          "Adaptation d'une œuvre musicale pour un ensemble instrumental différent de celui pour lequel elle a été composée initialement. L'arrangeur réinterprète l'œuvre originale en exploitant les possibilités spécifiques de la nouvelle formation instrumentale tout en préservant son essence.",
      },
      {
        terme: "Orchestration",
        definition:
          "Art de distribuer les différentes parties musicales aux instruments de l'orchestre, en tenant compte de leurs caractéristiques sonores et techniques. L'orchestration transforme une composition abstraite en réalité sonore concrète, influençant profondément la couleur et l'impact émotionnel de l'œuvre.",
      },
    ],
    genres: [
      {
        terme: "Symphonie",
        definition:
          "Composition orchestrale majeure généralement en quatre mouvements contrastés, développée principalement à l'époque classique. La symphonie représente l'une des formes les plus ambitieuses de la musique instrumentale, permettant l'exploration approfondie d'idées musicales à grande échelle.",
      },
      {
        terme: "Opéra",
        definition:
          "Œuvre dramatique mêlant musique, chant, théâtre et souvent danse, racontant une histoire complète à travers ces différents médiums. L'opéra, développé depuis le 17ème siècle, constitue une forme d'art total où la musique sert l'expression dramatique et émotionnelle.",
      },
      {
        terme: "Musique de chambre",
        definition:
          "Musique composée pour un petit ensemble d'instruments, avec généralement un instrument par partie. Intime et subtile, la musique de chambre met en valeur les interactions entre les musiciens et permet une expression raffinée que les grandes formations ne peuvent atteindre.",
      },
      {
        terme: "Jazz",
        definition:
          "Genre musical né aux États-Unis au début du 20ème siècle, caractérisé par l'improvisation, le swing et l'expression personnelle. Le jazz a évolué à travers de nombreux styles (New Orleans, swing, bebop, cool, fusion...) tout en maintenant un équilibre unique entre tradition et innovation.",
      },
      {
        terme: "Musique électroacoustique",
        definition:
          "Genre musical utilisant des technologies électroniques pour créer, transformer ou reproduire des sons. Englobant la musique concrète, la musique électronique et leurs hybridations, ce domaine explore les possibilités sonores au-delà des instruments traditionnels, redéfinissant les concepts de timbre, d'espace et de composition.",
      },
    ],
    technique: [
      {
        terme: "Virtuosité",
        definition:
          "Maîtrise technique exceptionnelle d'un instrument permettant l'exécution de passages extrêmement difficiles avec aisance et précision. La virtuosité transcende la simple prouesse technique pour devenir un moyen d'expression artistique, permettant une liberté interprétative totale.",
      },
      {
        terme: "Improvisation",
        definition:
          "Art de créer et d'exécuter de la musique spontanément, sans préparation détaillée. Présente dans de nombreuses traditions musicales mondiales, l'improvisation requiert une profonde compréhension des structures musicales et une capacité à réagir instantanément à son environnement sonore.",
      },
      {
        terme: "Technique vocale",
        definition:
          "Ensemble des méthodes et pratiques permettant l'utilisation optimale de la voix comme instrument musical. Englobant la respiration, la résonance, l'articulation et la projection, la technique vocale varie selon les styles (lyrique, belting, throat singing) et traduit des traditions culturelles spécifiques.",
      },
      {
        terme: "Doigté",
        definition:
          "Système indiquant quels doigts utiliser pour jouer certaines notes ou passages sur un instrument. Les doigtés, cruciaux pour l'exécution technique et l'expressivité, sont adaptés à l'anatomie des instruments et ont évolué historiquement avec leur perfectionnement.",
      },
    ],
    production: [
      {
        terme: "Mixage",
        definition:
          "Processus technique et artistique consistant à équilibrer, traiter et combiner les différentes pistes audio d'un enregistrement. Le mixage détermine la spatialisation, les niveaux relatifs, la clarté et l'équilibre tonal d'une production musicale, influençant profondément l'expérience d'écoute finale.",
      },
      {
        terme: "Mastering",
        definition:
          "Étape finale du processus de production audio visant à optimiser un mixage pour sa diffusion sur différents supports. Le mastering harmonise l'ensemble sonore, affine les équilibres fréquentiels et dynamiques, et prépare techniquement l'œuvre pour sa distribution commerciale.",
      },
      {
        terme: "Sampling",
        definition:
          "Technique consistant à prélever un fragment sonore existant pour l'intégrer dans une nouvelle composition. Fondamental dans la musique électronique et le hip-hop, le sampling permet la récontextualisation créative de sons préexistants, créant des dialogues entre différentes époques et styles musicaux.",
      },
      {
        terme: "DAW (Digital Audio Workstation)",
        definition:
          "Logiciel permettant l'enregistrement, l'édition, le mixage et la production de musique sur ordinateur. Les DAW modernes offrent des possibilités quasi illimitées de manipulation sonore et ont révolutionné la production musicale en rendant accessibles des outils autrefois réservés aux studios professionnels.",
      },
    ],
  };

  // Liste de toutes les catégories pour l'affichage
  const categories = [
    { id: "theorie", nom: "Théorie musicale" },
    { id: "gammes", nom: "Gammes et modes" },
    { id: "rythme", nom: "Rythme et tempo" },
    { id: "notation", nom: "Notation et solfège" },
    { id: "instruments", nom: "Instruments et interprétation" },
    { id: "composition", nom: "Composition et arrangement" },
    { id: "genres", nom: "Genres et formes" },
    { id: "technique", nom: "Techniques d'exécution" },
    { id: "production", nom: "Production et technologie" },
  ];

  // Fonction pour générer un index alphabétique des termes
  const generateAlphabetIndex = () => {
    const allTerms = Object.values(glossaireData)
      .flat()
      .map((item) => item.terme)
      .sort();
    
    // Création de l'index alphabétique
    let alphabet = [];
    allTerms.forEach((term) => {
      const firstLetter = term.charAt(0).toUpperCase();
      if (!alphabet.includes(firstLetter)) {
        alphabet.push(firstLetter);
      }
    });
    
    return alphabet.sort();
  };

  // Fonction pour filtrer les termes selon la recherche
  const filterTerms = () => {
    let filteredGlossaire = {};
    
    Object.keys(glossaireData).forEach((category) => {
      const filteredTerms = glossaireData[category].filter((item) => {
        // Filtre par lettre
        if (activeFilter !== "all" && !item.terme.toLowerCase().startsWith(activeFilter.toLowerCase())) {
          return false;
        }
        
        // Filtre par recherche
        if (searchTerm && !item.terme.toLowerCase().includes(searchTerm.toLowerCase()) && 
            !item.definition.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false;
        }
        
        return true;
      });
      
      if (filteredTerms.length > 0) {
        filteredGlossaire[category] = filteredTerms;
      }
    });
    
    return filteredGlossaire;
  };

  const alphabet = generateAlphabetIndex();
  const filteredGlossaire = filterTerms();
  
  return (
    <div className="container max-w-4xl mx-auto py-12 px-6 md:px-0">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Glossaire des termes musicaux</h1>
      <p className="mb-8 text-center text-gray-600">
        Explorez notre dictionnaire complet des termes et concepts utilisés dans le domaine musical, 
        organisé par catégories pour faciliter votre apprentissage et approfondir votre culture musicale.
      </p>
      
      {/* Barre de recherche */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Rechercher un terme..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-none">
            <select 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              <option value="all">Toutes les lettres</option>
              {alphabet.map((letter) => (
                <option key={letter} value={letter.toLowerCase()}>
                  {letter}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Navigation par catégories */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">Catégories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(category.id).scrollIntoView({ behavior: "smooth" });
              }}
            >
              {category.nom}
            </a>
          ))}
        </div>
      </div>
      
      {/* Contenu du glossaire */}
      <div className="space-y-16">
        {Object.keys(filteredGlossaire).length > 0 ? (
          categories.map((category) => {
            // Ne rendre la catégorie que si elle contient des termes filtrés
            if (!filteredGlossaire[category.id]) return null;
            
            return (
              <section key={category.id} id={category.id} className="scroll-mt-20">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                  {category.nom}
                </h2>
                <div className="space-y-8">
                  {filteredGlossaire[category.id].map((item, index) => (
                    <article key={index} id={item.terme.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-20">
                      <h3 className="text-xl font-semibold mb-2 text-blue-800">{item.terme}</h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {item.definition}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-medium text-gray-700">
              Aucun terme ne correspond à votre recherche
            </h3>
            <p className="mt-2 text-gray-500">
              Essayez de modifier vos critères de recherche ou consultez l'ensemble du glossaire
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
            >
              Voir tous les termes
            </button>
          </div>
        )}
      </div>
      
      {/* Retour en haut */}
      <div className="mt-16 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Retour en haut
        </button>
      </div>
    </div>
  );
};

export default Glossaire;
