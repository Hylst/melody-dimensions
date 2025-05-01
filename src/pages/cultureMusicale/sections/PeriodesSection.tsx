
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, User, Scroll, BookOpen, Sparkles } from "lucide-react";

const periodesData = [
  {
    key: "medieval",
    label: "Médiévale",
    title: "Période Médiévale (500-1400)",
    content: (
      <>
        <p className="mb-4">
          La période médiévale est le berceau de la musique occidentale, avec l'émergence du chant grégorien et les premières notations musicales qui ont transformé la transmission de la musique.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Caractéristiques principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Monophonie puis développement progressif de la polyphonie</li>
              <li>Système modal plutôt que tonal</li>
              <li>Développement de la notation musicale par Guido d'Arezzo</li>
              <li>Musique principalement religieuse (chant grégorien)</li>
              <li>Émergence des troubadours et trouvères avec musique profane</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs et interprètes majeurs
            </h4>
            <ul className="space-y-3">
              <li>
                <Badge className="mr-2" variant="outline">Hildegard von Bingen (1098-1179)</Badge>
                <span className="text-sm">Mystique et compositrice d'œuvres monodiques</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Guido d'Arezzo (991-1033)</Badge>
                <span className="text-sm">Théoricien, inventeur de la notation musicale</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Léonin (1150-1201)</Badge>
                <span className="text-sm">École de Notre-Dame, organum à deux voix</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Pérotin (1160-1230)</Badge>
                <span className="text-sm">Polyphonie développée à trois et quatre voix</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Guillaume de Machaut (1300-1377)</Badge>
                <span className="text-sm">Poète et compositeur, messe de Notre-Dame</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte historique
          </h4>
          <p className="text-gray-700 mb-3">
            Cette période s'étend de la chute de l'Empire romain d'Occident jusqu'à la Renaissance. Elle est marquée par le rôle central de l'Église qui patronne les arts et la musique. C'est dans les monastères que s'élabore et se transmet le répertoire liturgique.
          </p>
          <p className="text-gray-700">
            Au XIIe siècle, les premières universités voient le jour, et la musique y est enseignée comme l'une des sept arts libéraux. L'essor des villes favorise également les manifestations musicales profanes avec les ménestrels, jongleurs et troubadours.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            Formes et genres musicaux
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Genres sacrés</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Chant grégorien (plain-chant)</li>
                <li>Organum (polyphonie primitive)</li>
                <li>Motet</li>
                <li>Conductus</li>
                <li>Hymnes et séquences</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Genres profanes</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Chansons de troubadours et trouvères</li>
                <li>Estampies (danses instrumentales)</li>
                <li>Cantigas (Espagne médiévale)</li>
                <li>Lais et virelais</li>
                <li>Rondeaux et ballades</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
  {
    key: "renaissance",
    label: "Renaissance",
    title: "Période Renaissance (1400-1600)",
    content: (
      <>
        <p className="mb-4">
          La Renaissance musicale est caractérisée par un raffinement de la polyphonie, un retour aux idéaux de l'Antiquité, et l'émergence de la musique profane comme forme d'art reconnue.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Caractéristiques principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Polyphonie équilibrée avec égalité des voix</li>
              <li>Imitation entre les différentes voix (canon, fugato)</li>
              <li>Harmonie consonante privilégiée</li>
              <li>Développement de l'imprimerie musicale (Petrucci, 1501)</li>
              <li>Expression des textes par la musique (madrigalisme)</li>
              <li>Essor de la musique instrumentale indépendante</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs majeurs
            </h4>
            <ul className="space-y-3">
              <li>
                <Badge className="mr-2" variant="outline">Josquin des Prez (1450-1521)</Badge>
                <span className="text-sm">Maître de la polyphonie franco-flamande</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Giovanni Pierluigi da Palestrina (1525-1594)</Badge>
                <span className="text-sm">Perfection de la polyphonie sacrée</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Roland de Lassus (1532-1594)</Badge>
                <span className="text-sm">Cosmopolite, 2000+ œuvres dans tous les genres</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Thomas Tallis (1505-1585)</Badge>
                <span className="text-sm">Figure majeure de la musique anglaise</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Carlo Gesualdo (1566-1613)</Badge>
                <span className="text-sm">Madrigaux aux harmonies avant-gardistes</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte historique
          </h4>
          <p className="text-gray-700 mb-3">
            La Renaissance est une période d'essor intellectuel et artistique en Europe, stimulée par les découvertes géographiques, l'imprimerie et l'humanisme. Le mécénat des cours princières favorise la création musicale.
          </p>
          <p className="text-gray-700">
            La Réforme protestante (1517) et la Contre-Réforme catholique influencent profondément l'évolution de la musique sacrée, avec le Concile de Trente qui réglemente la musique d'église.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-primary" />
            Formes et genres musicaux
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Musique vocale</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Messe polyphonique</li>
                <li>Motet</li>
                <li>Madrigal (expression des émotions)</li>
                <li>Chanson française</li>
                <li>Villanella et frottola (Italie)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Musique instrumentale</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Ricercar (précurseur de la fugue)</li>
                <li>Canzona</li>
                <li>Danses (pavane, gaillarde)</li>
                <li>Fantaisie</li>
                <li>Variations sur des thèmes populaires</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
  {
    key: "baroque",
    label: "Baroque",
    title: "Période Baroque (1600-1750)",
    content: (
      <>
        <p className="mb-4">
          Le Baroque musical est une période d'innovations dramatiques, marquée par l'ornementation, le contraste et la naissance de l'opéra. C'est l'âge d'or du contrepoint et de l'expression des affects.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Caractéristiques principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Basse continue (basso continuo) omniprésente</li>
              <li>Ornementation riche et abondante</li>
              <li>Contrastes dynamiques marqués (terraced dynamics)</li>
              <li>Principe des affects (Affektenlehre)</li>
              <li>Établissement de la tonalité majeur-mineur</li>
              <li>Virtuosité instrumentale et vocale</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs emblématiques
            </h4>
            <ul className="space-y-3">
              <li>
                <Badge className="mr-2" variant="outline">Claudio Monteverdi (1567-1643)</Badge>
                <span className="text-sm">Père de l'opéra, transition Renaissance-Baroque</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Johann Sebastian Bach (1685-1750)</Badge>
                <span className="text-sm">Apogée du contrepoint et de la fugue</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Georg Friedrich Händel (1685-1759)</Badge>
                <span className="text-sm">Maître de l'oratorio et de l'opéra</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Antonio Vivaldi (1678-1741)</Badge>
                <span className="text-sm">Innovateur du concerto, "Le Prêtre Roux"</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Jean-Philippe Rameau (1683-1764)</Badge>
                <span className="text-sm">Théoricien de l'harmonie et compositeur français</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte historique et innovations
          </h4>
          <p className="text-gray-700 mb-3">
            Le Baroque correspond à une période de tensions religieuses et politiques en Europe, mais aussi à l'essor de l'absolutisme monarchique. L'art devient un instrument de pouvoir et de prestige.
          </p>
          <p className="text-gray-700 mb-3">
            La Camerata Fiorentina, cercle intellectuel florentin, développe l'idée de l'opéra en cherchant à recréer le théâtre antique grec. La première œuvre considérée comme un opéra est "Dafne" (1598) de Peri, suivie par "L'Orfeo" (1607) de Monteverdi.
          </p>
          <p className="text-gray-700">
            Cette période voit aussi la standardisation des instruments à cordes modernes (famille du violon) et le perfectionnement de l'orgue.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-primary" />
            Formes et genres principaux
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Musique vocale</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Opéra (seria, buffa)</li>
                <li>Oratorio</li>
                <li>Cantate (sacrée et profane)</li>
                <li>Passion</li>
                <li>Aria da capo (structure ABA)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Musique instrumentale</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Concerto (grosso, solo)</li>
                <li>Suite de danses</li>
                <li>Sonate (da chiesa, da camera)</li>
                <li>Fugue</li>
                <li>Toccata et prélude</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
  {
    key: "classical",
    label: "Classique",
    title: "Période Classique (1730-1820)",
    content: (
      <>
        <p className="mb-4">
          La période classique apporte clarté, équilibre et élégance à la musique, se détachant des complexités baroques pour privilégier des mélodies expressives et une structure formelle limpide.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Caractéristiques principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Clarté mélodique et phrases régulières</li>
              <li>Textures homophoniques (mélodie accompagnée)</li>
              <li>Forme sonate comme structure dominante</li>
              <li>Développement de l'orchestre symphonique</li>
              <li>Harmonie fonctionnelle claire</li>
              <li>Élégance et retenue dans l'expression</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs majeurs
            </h4>
            <ul className="space-y-3">
              <li>
                <Badge className="mr-2" variant="outline">Joseph Haydn (1732-1809)</Badge>
                <span className="text-sm">"Père de la symphonie", 104 symphonies</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Wolfgang Amadeus Mozart (1756-1791)</Badge>
                <span className="text-sm">Génie universel, synthèse parfaite du style classique</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Ludwig van Beethoven (1770-1827)</Badge>
                <span className="text-sm">Transition vers le romantisme, révolutionnaire</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Christoph Willibald Gluck (1714-1787)</Badge>
                <span className="text-sm">Réformateur de l'opéra</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Luigi Boccherini (1743-1805)</Badge>
                <span className="text-sm">Maître de la musique de chambre</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte historique
          </h4>
          <p className="text-gray-700 mb-3">
            Cette période correspond au Siècle des Lumières, marqué par le rationalisme philosophique, qui influence également l'esthétique musicale. La Révolution française (1789) et les idées de liberté modifient le statut du musicien.
          </p>
          <p className="text-gray-700 mb-3">
            Le mécénat aristocratique cède progressivement la place aux concerts publics. Le pianoforte, ancêtre du piano moderne, devient l'instrument roi des salons et remplace progressivement le clavecin.
          </p>
          <p className="text-gray-700">
            Vienne s'impose comme capitale musicale de l'Europe, où convergent les plus grands talents de l'époque.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-primary" />
            Formes et genres musicaux
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Formes orchestrales</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Symphonie (4 mouvements)</li>
                <li>Concerto pour soliste</li>
                <li>Ouverture</li>
                <li>Sérénade et divertimento</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Musique de chambre</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Quatuor à cordes</li>
                <li>Sonate pour piano (et autres instruments)</li>
                <li>Trio avec piano</li>
                <li>Quintette</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Musique vocale</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Opéra réformé (Gluck)</li>
                <li>Opera buffa (Mozart)</li>
                <li>Lied</li>
                <li>Messe</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Innovations formelles</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Forme sonate perfectionnée</li>
                <li>Rondo-sonate</li>
                <li>Thème et variations</li>
                <li>Scherzo (remplace le menuet)</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
  {
    key: "romantic",
    label: "Romantique",
    title: "Période Romantique (1800-1910)",
    content: (
      <>
        <p className="mb-4">
          Le romantisme musical exalte l'expression des émotions, l'individualité créatrice et le nationalisme culturel, tout en élargissant considérablement les ressources de l'orchestre et l'éventail des formes musicales.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Caractéristiques principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Expression intense des émotions et sentiments</li>
              <li>Virtuosité instrumentale poussée à l'extrême</li>
              <li>Orchestre élargi avec nouvelles sonorités</li>
              <li>Chromatisme harmonique développé</li>
              <li>Programmes narratifs et inspirations littéraires</li>
              <li>Miniatures expressives et œuvres monumentales</li>
              <li>Idéal du compositeur-génie inspiré</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs représentatifs
            </h4>
            <ul className="space-y-2">
              <li>
                <Badge className="mr-2" variant="outline">Franz Schubert (1797-1828)</Badge>
                <span className="text-sm">Maître du lied, romantisme précoce</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Frédéric Chopin (1810-1849)</Badge>
                <span className="text-sm">Poète du piano, esprit nationaliste polonais</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Robert Schumann (1810-1856)</Badge>
                <span className="text-sm">Expressivité poétique, critique musical</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Franz Liszt (1811-1886)</Badge>
                <span className="text-sm">Virtuose révolutionnaire, poème symphonique</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Richard Wagner (1813-1883)</Badge>
                <span className="text-sm">Réforme du drame musical, leitmotiv</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Giuseppe Verdi (1813-1901)</Badge>
                <span className="text-sm">Opéra italien, passion dramatique</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Piotr Ilitch Tchaïkovski (1840-1893)</Badge>
                <span className="text-sm">Mélodiste inspiré, orchestrateur brillant</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte historique et évolution
          </h4>
          <p className="text-gray-700 mb-3">
            Le romantisme naît dans un contexte d'effervescence nationaliste après les guerres napoléoniennes et les révolutions libérales. L'industrialisation transforme la société et crée une nouvelle classe bourgeoise amateur de concerts.
          </p>
          <p className="text-gray-700 mb-3">
            Les romantiques développent le culte du génie solitaire, souvent incompris, en contraste avec le musicien du XVIIIe siècle au service de l'aristocratie. Les compositeurs deviennent des figures publiques adulées.
          </p>
          <p className="text-gray-700">
            La période voit l'essor des conservatoires nationaux, des salles de concert et des sociétés symphoniques. Le piano, devenu instrument de salon bourgeois, connaît son âge d'or.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-primary" />
            Formes et genres musicaux
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Musique symphonique</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Symphonie romantique (développée)</li>
                <li>Poème symphonique</li>
                <li>Musique à programme</li>
                <li>Ouverture de concert</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Musique pour piano</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Nocturne, ballade, impromptu</li>
                <li>Étude de concert</li>
                <li>Pièce de caractère</li>
                <li>Rhapsodie</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Opéra romantique</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Grand opéra français</li>
                <li>Drame musical wagnérien</li>
                <li>Opéra vériste italien</li>
                <li>Opéra nationaliste russe</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Musique vocale</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Lied allemand (Schubert, Schumann)</li>
                <li>Mélodie française (Fauré, Debussy)</li>
                <li>Requiem et musique sacrée</li>
                <li>Chœurs nationalistes</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
  {
    key: "modern",
    label: "Moderne",
    title: "Période Moderne (1910-1975)",
    content: (
      <>
        <p className="mb-4">
          La période moderne est marquée par une rupture radicale avec les traditions établies et une extraordinaire diversification des langages musicaux, reflétant les bouleversements sociaux, scientifiques et technologiques du XXe siècle.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Caractéristiques principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dissolution progressive de la tonalité traditionnelle</li>
              <li>Renouvellement radical du langage musical</li>
              <li>Exploration de nouvelles sonorités et timbres</li>
              <li>Importance du rythme et des percussions</li>
              <li>Émergence de systèmes compositionnels structurés</li>
              <li>Intégration de bruits et sons concrets</li>
              <li>Influence des musiques non-occidentales</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs innovants
            </h4>
            <ul className="space-y-2">
              <li>
                <Badge className="mr-2" variant="outline">Arnold Schönberg (1874-1951)</Badge>
                <span className="text-sm">Fondateur du dodécaphonisme</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Igor Stravinsky (1882-1971)</Badge>
                <span className="text-sm">Révolutionnaire du rythme, néoclassicisme</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Béla Bartók (1881-1945)</Badge>
                <span className="text-sm">Intégration du folklore, innovation rythmique</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Sergei Prokofiev (1891-1953)</Badge>
                <span className="text-sm">Néoclassicisme russe, lyrisme moderne</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Pierre Boulez (1925-2016)</Badge>
                <span className="text-sm">Sérialisme intégral, électronique</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">John Cage (1912-1992)</Badge>
                <span className="text-sm">Musique aléatoire, préparation d'instruments</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Karlheinz Stockhausen (1928-2007)</Badge>
                <span className="text-sm">Pionnier de la musique électronique</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte historique et influences
          </h4>
          <p className="text-gray-700 mb-3">
            Les deux guerres mondiales, la montée des totalitarismes, et les avancées technologiques transforment profondément le paysage culturel. La musique reflète ces bouleversements par une remise en question des valeurs traditionnelles.
          </p>
          <p className="text-gray-700 mb-3">
            L'avènement de l'enregistrement sonore révolutionne la diffusion musicale et influence la création. Les compositeurs explorent de nouvelles techniques instrumentales et vocales, repoussant les limites de l'interprétation.
          </p>
          <p className="text-gray-700">
            Les sciences et la mathématique inspirent de nouvelles approches compositionnelles (sérialisme, stochastique). Parallèlement, les musiques populaires comme le jazz et le rock exercent une influence croissante sur les compositeurs classiques.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-primary" />
            Courants et techniques
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Expressionnisme et atonalité</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Émancipation de la dissonance</li>
                <li>Sprechgesang (chant parlé)</li>
                <li>Dodécaphonisme (12 sons)</li>
                <li>Sérialisme intégral</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Néoclassicisme</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Retour aux formes classiques</li>
                <li>Clarté des lignes et textures</li>
                <li>Ironie et distanciation</li>
                <li>Économie de moyens</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Musique concrète et électronique</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Manipulation de sons enregistrés</li>
                <li>Synthèse sonore électronique</li>
                <li>Exploration de l'espace sonore</li>
                <li>Musique pour bande magnétique</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Expérimentations diverses</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Minimalisme (répétition, processus)</li>
                <li>Musique aléatoire et indéterminée</li>
                <li>Microtonalité (au-delà des 12 demi-tons)</li>
                <li>Clusters et masses sonores</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
  {
    key: "contemporary",
    label: "Contemporaine",
    title: "Période Contemporaine (1975-aujourd'hui)",
    content: (
      <>
        <p className="mb-4">
          La musique contemporaine actuelle se caractérise par une grande diversité d'approches, le pluralisme esthétique, et l'intégration des technologies numériques. Les frontières entre genres et traditions s'estompent dans un contexte de mondialisation culturelle.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              Tendances principales
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nouvelle tonalité et postmodernisme</li>
              <li>Musique spectrale (basée sur le spectre sonore)</li>
              <li>Minimalisme et post-minimalisme</li>
              <li>Pluralisme et éclectisme stylistique</li>
              <li>Installations sonores et art multimédia</li>
              <li>Intégration des musiques populaires et ethniques</li>
              <li>Exploration des technologies numériques</li>
            </ul>
          </Card>
          <Card className="p-4">
            <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-primary" />
              Compositeurs significatifs
            </h4>
            <ul className="space-y-2">
              <li>
                <Badge className="mr-2" variant="outline">Philip Glass (né en 1937)</Badge>
                <span className="text-sm">Minimalisme, opéras, musiques de films</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Arvo Pärt (né en 1935)</Badge>
                <span className="text-sm">Minimalisme sacré, tintinnabuli</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Sofia Gubaidulina (née en 1931)</Badge>
                <span className="text-sm">Spiritualité, nouvelles techniques</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Kaija Saariaho (1952-2023)</Badge>
                <span className="text-sm">Musique spectrale, électroacoustique</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Thomas Adès (né en 1971)</Badge>
                <span className="text-sm">Éclectisme britannique, opéra</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Hans Zimmer (né en 1957)</Badge>
                <span className="text-sm">Musique de film innovante</span>
              </li>
              <li>
                <Badge className="mr-2" variant="outline">Jennifer Higdon (née en 1962)</Badge>
                <span className="text-sm">Néo-romantisme américain</span>
              </li>
            </ul>
          </Card>
        </div>
        <Card className="p-4 mb-6">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Scroll className="h-5 w-5 text-primary" />
            Contexte et innovations
          </h4>
          <p className="text-gray-700 mb-3">
            L'ère numérique transforme profondément la création, la diffusion et la consommation musicale. Les logiciels de composition assistée par ordinateur et les nouveaux instruments électroniques élargissent le champ des possibles.
          </p>
          <p className="text-gray-700 mb-3">
            La globalisation facilite les échanges entre traditions musicales du monde entier, conduisant à de nombreuses fusions et hybridations. Les barrières entre musique "savante" et "populaire" deviennent de plus en plus poreuses.
          </p>
          <p className="text-gray-700">
            Les questions écologiques et sociétales influencent de nombreux créateurs contemporains, avec l'émergence de l'éco-acoustique et des œuvres engagées. Les institutions musicales traditionnelles cherchent à se réinventer pour rester pertinentes.
          </p>
        </Card>
        <Card className="p-4">
          <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-primary" />
            Développements et pratiques notables
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium mb-2">Nouvelles approches formelles</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Intertextualité et citation</li>
                <li>Formes ouvertes et interactives</li>
                <li>Musique immersive et spatiale</li>
                <li>Réalité virtuelle et augmentée</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Interprétation et performance</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Techniques instrumentales étendues</li>
                <li>Improvisation structurée</li>
                <li>Interface homme-machine</li>
                <li>Performance multidisciplinaire</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Technologies et médias</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Intelligence artificielle compositionnelle</li>
                <li>Traitement en temps réel</li>
                <li>Musique générative et algorithmique</li>
                <li>Streaming et nouvelles plateformes</li>
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Tendances esthétiques</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Nouvelle complexité</li>
                <li>Nouvelle simplicité</li>
                <li>Post-minimalisme</li>
                <li>Néo-romantisme</li>
              </ul>
            </div>
          </div>
        </Card>
      </>
    ),
  },
];

const PeriodesSection = () => {
  const [activeTab, setActiveTab] = useState<string>(periodesData[0].key);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Les périodes majeures de la musique</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex-wrap mb-6">
          {periodesData.map((periode) => (
            <TabsTrigger key={periode.key} value={periode.key}>
              {periode.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {periodesData.map((periode) => (
          <TabsContent key={periode.key} value={periode.key} className="animate-in fade-in-50 duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">{periode.title}</h3>
            </div>
            {periode.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PeriodesSection;
