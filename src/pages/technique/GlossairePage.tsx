
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const GlossairePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const glossaireEntries = {
    acoustique: [
      {
        term: "Acoustique",
        definition: "Science qui étudie les propriétés et la propagation du son dans différents milieux.",
        category: "base"
      },
      {
        term: "Absorption acoustique",
        definition: "Processus par lequel l'énergie sonore est convertie en chaleur lorsqu'elle frappe une surface, réduisant ainsi la réflexion du son.",
        category: "studio"
      },
      {
        term: "Diffusion",
        definition: "Répartition du son dans différentes directions pour éviter les réflexions spéculaires et créer un champ sonore plus uniforme.",
        category: "studio"
      },
      {
        term: "Réverbération",
        definition: "Persistance du son dans un espace après que la source sonore a cessé de produire du son, due aux multiples réflexions sur les surfaces.",
        category: "base"
      },
      {
        term: "Temps de réverbération (RT60)",
        definition: "Temps nécessaire pour qu'un son diminue de 60 dB après l'arrêt de la source sonore dans un espace donné.",
        category: "avance"
      }
    ],
    physique: [
      {
        term: "Amplitude",
        definition: "Mesure de la magnitude ou de l'intensité d'une onde sonore, directement liée à la perception du volume sonore.",
        category: "base"
      },
      {
        term: "Fréquence",
        definition: "Nombre de cycles complets d'une onde sonore par seconde, mesurée en Hertz (Hz). Détermine la hauteur perçue d'un son.",
        category: "base"
      },
      {
        term: "Harmonique",
        definition: "Fréquence qui est un multiple entier de la fréquence fondamentale d'un son, contribuant au timbre du son.",
        category: "base"
      },
      {
        term: "Phase",
        definition: "Position relative d'une onde sonore dans son cycle à un moment donné, mesurée en degrés ou en radians.",
        category: "avance"
      },
      {
        term: "Longueur d'onde",
        definition: "Distance entre deux points consécutifs d'une onde sonore qui sont en phase. Inversement proportionnelle à la fréquence.",
        category: "avance"
      }
    ],
    technique: [
      {
        term: "Compression",
        definition: "Processus de réduction de la plage dynamique d'un signal audio en atténuant les sons plus forts et/ou en amplifiant les sons plus faibles.",
        category: "studio"
      },
      {
        term: "Égalisation (EQ)",
        definition: "Processus d'ajustement de l'amplitude relative de différentes fréquences dans un signal audio.",
        category: "studio"
      },
      {
        term: "Gain",
        definition: "Augmentation ou diminution de l'amplitude d'un signal audio, généralement mesurée en décibels (dB).",
        category: "base"
      },
      {
        term: "Panning",
        definition: "Distribution d'un signal audio entre les canaux gauche et droit d'un système stéréo.",
        category: "studio"
      },
      {
        term: "Side-chain",
        definition: "Technique où le comportement d'un processeur d'effets est contrôlé par un signal audio autre que celui qu'il traite.",
        category: "avance"
      }
    ],
    theorieMusical: [
      {
        term: "Accord",
        definition: "Combinaison de trois notes ou plus jouées simultanément, formant une unité harmonique.",
        category: "base"
      },
      {
        term: "Cadence",
        definition: "Progression d'accords qui marque la fin d'une phrase musicale, créant un sentiment de résolution ou de tension.",
        category: "base"
      },
      {
        term: "Gamme",
        definition: "Séquence de notes musicales arrangées dans un ordre ascendant ou descendant selon un modèle spécifique d'intervalles.",
        category: "base"
      },
      {
        term: "Modulation",
        definition: "Changement de tonalité ou de mode dans une pièce musicale.",
        category: "avance"
      },
      {
        term: "Polyrhythmie",
        definition: "Utilisation simultanée de deux ou plusieurs rythmes contrastants ou indépendants.",
        category: "avance"
      }
    ],
    production: [
      {
        term: "Arrangement",
        definition: "Organisation des éléments musicaux (instruments, voix, sections) dans une composition pour créer une structure cohérente.",
        category: "studio"
      },
      {
        term: "DAW (Digital Audio Workstation)",
        definition: "Logiciel permettant d'enregistrer, éditer et produire des fichiers audio sur un ordinateur.",
        category: "studio"
      },
      {
        term: "Mastering",
        definition: "Processus final de post-production qui prépare un mix pour la distribution en optimisant le son pour différentes plateformes.",
        category: "studio"
      },
      {
        term: "MIDI (Musical Instrument Digital Interface)",
        definition: "Protocole standard qui permet aux instruments électroniques de communiquer entre eux et avec des ordinateurs.",
        category: "studio"
      },
      {
        term: "Sample rate",
        definition: "Nombre de fois par seconde qu'un signal analogique est mesuré lors de sa conversion en signal numérique, mesuré en Hertz (Hz).",
        category: "avance"
      }
    ]
  };
  
  const filteredEntries = Object.entries(glossaireEntries).reduce((acc, [category, terms]) => {
    const filtered = terms.filter(term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  return (
    <div className="container py-10">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Accueil</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/technique">Aspects Techniques</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Glossaire Technique</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Glossaire Technique</h1>
        <Button variant="outline" size="sm" asChild>
          <Link to="/technique">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux aspects techniques
          </Link>
        </Button>
      </div>
      
      <p className="text-lg text-muted-foreground mb-10">
        Un dictionnaire complet des termes techniques utilisés en production musicale, théorie et acoustique.
      </p>
      
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="md:w-3/4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Rechercher un terme..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="md:w-1/4 flex gap-2 flex-wrap">
          <Badge variant="outline" className="cursor-pointer">Tous</Badge>
          <Badge variant="outline" className="cursor-pointer">Basique</Badge>
          <Badge variant="outline" className="cursor-pointer">Studio</Badge>
          <Badge variant="outline" className="cursor-pointer">Avancé</Badge>
        </div>
      </div>
      
      <Tabs defaultValue="acoustique">
        <TabsList className="mb-6">
          <TabsTrigger value="acoustique">Acoustique</TabsTrigger>
          <TabsTrigger value="physique">Physique du Son</TabsTrigger>
          <TabsTrigger value="technique">Techniques de Production</TabsTrigger>
          <TabsTrigger value="theorieMusical">Théorie Musicale</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
        </TabsList>
        
        {Object.keys(glossaireEntries).map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid md:grid-cols-2 gap-6">
              {(filteredEntries[category] || glossaireEntries[category]).map((entry, index) => (
                <Card key={index} className="overflow-hidden card-hover">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle>{entry.term}</CardTitle>
                      <Badge variant={
                        entry.category === "base" ? "outline" :
                        entry.category === "studio" ? "secondary" : "default"
                      }>
                        {entry.category === "base" ? "Basique" : 
                         entry.category === "studio" ? "Studio" : "Avancé"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{entry.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <Separator className="my-10" />
      
      <div className="bg-primary/5 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-semibold">Contribuez au glossaire</h2>
            <p className="text-muted-foreground">
              Vous êtes expert dans un domaine technique de la musique et souhaitez contribuer à notre glossaire ? 
              Proposez de nouveaux termes et définitions pour enrichir cette ressource communautaire.
            </p>
            <div className="flex gap-4">
              <Button variant="default">Proposer un terme</Button>
              <Button variant="outline">Télécharger le glossaire complet</Button>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Ressources complémentaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Guide d'acoustique</span>
                  <Button variant="ghost" size="sm">Voir</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Terminologie du mixage</span>
                  <Button variant="ghost" size="sm">Voir</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Le son numérique expliqué</span>
                  <Button variant="ghost" size="sm">Voir</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossairePage;
