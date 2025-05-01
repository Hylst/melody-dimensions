
import React from 'react';
import { User, Album } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Artist, Album as AlbumType } from '../GenreSection';

interface GenreSidebarProps {
  image?: string;
  name: string;
  keyArtists: Artist[];
  keyAlbums: AlbumType[];
}

const GenreSidebar: React.FC<GenreSidebarProps> = ({ image, name, keyArtists, keyAlbums }) => {
  return (
    <div className="md:w-1/3">
      {image && (
        <Card className="mb-6 overflow-hidden">
          <div className="aspect-video">
            <img 
              src={image} 
              alt={`Illustration du genre ${name}`} 
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      )}
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5" />
            Artistes représentatifs
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {keyArtists.map((artist, index) => (
              <div key={index} className="flex items-center gap-3">
                {artist.image ? (
                  <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={artist.image} alt={artist.name} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
                <div>
                  <p className="font-medium">{artist.name}</p>
                  {artist.years && <p className="text-xs text-muted-foreground">{artist.years}</p>}
                  {artist.description && <p className="text-xs text-muted-foreground mt-1">{artist.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {keyAlbums.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Album className="h-5 w-5" />
              Albums essentiels
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {keyAlbums.map((album, index) => (
                <div key={index} className="flex items-start gap-3">
                  {album.image ? (
                    <div className="h-12 w-12 overflow-hidden flex-shrink-0">
                      <img src={album.image} alt={album.title} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div className="h-12 w-12 bg-muted flex items-center justify-center flex-shrink-0">
                      <Album className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{album.title}</p>
                    <p className="text-xs text-muted-foreground">{album.artist}, {album.year}</p>
                    {album.link && (
                      <Button variant="link" size="sm" asChild className="px-0 py-0 h-auto text-xs">
                        <a href={album.link} target="_blank" rel="noopener noreferrer">Écouter</a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GenreSidebar;
