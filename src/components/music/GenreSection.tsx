
import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import GenreHistory from './GenreSection/GenreHistory';
import GenreCharacteristics from './GenreSection/GenreCharacteristics';
import GenreInfluences from './GenreSection/GenreInfluences';
import GenreSubgenres from './GenreSection/GenreSubgenres';
import GenreSidebar from './GenreSection/GenreSidebar';

export interface Artist {
  name: string;
  description?: string;
  image?: string;
  years?: string;
}

export interface Subgenre {
  name: string;
  description: string;
  era?: string;
}

export interface Album {
  title: string;
  artist: string;
  year: string;
  image?: string;
  link?: string;
}

export interface GenreProps {
  name: string;
  description: string;
  history: string;
  era: string;
  keyArtists: Artist[];
  characteristics: string[];
  subgenres: Subgenre[];
  keyAlbums?: Album[];
  influences?: string[];
  influencedBy?: string[];
  image?: string;
  color?: string;
  slug?: string;
}

const GenreSection: React.FC<GenreProps> = ({
  name,
  description,
  history,
  era,
  keyArtists,
  characteristics,
  subgenres,
  keyAlbums = [],
  influences = [],
  influencedBy = [],
  image,
  color = "bg-primary/10",
  slug
}) => {
  return (
    <section className="py-6" id={slug}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl font-bold">{name}</h2>
            <Badge variant="outline" className="text-sm">{era}</Badge>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
          
          <GenreHistory history={history} color={color} />
          
          <GenreCharacteristics characteristics={characteristics} />
          
          <GenreInfluences influences={influences} influencedBy={influencedBy} />
          
          <GenreSubgenres subgenres={subgenres} />
        </div>
        
        <GenreSidebar 
          image={image} 
          name={name} 
          keyArtists={keyArtists} 
          keyAlbums={keyAlbums} 
        />
      </div>
      <Separator className="my-10" />
    </section>
  );
};

export default GenreSection;
