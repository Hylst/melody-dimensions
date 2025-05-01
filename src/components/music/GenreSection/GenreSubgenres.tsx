
import React from 'react';
import { PlusSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Subgenre } from '../GenreSection';

interface GenreSubgenresProps {
  subgenres: Subgenre[];
}

const GenreSubgenres: React.FC<GenreSubgenresProps> = ({ subgenres }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <PlusSquare className="h-5 w-5" />
        Sous-genres
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subgenres.map((subgenre, index) => (
          <Card key={index} className="border bg-card/50">
            <CardHeader className="py-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{subgenre.name}</CardTitle>
                {subgenre.era && <Badge variant="outline" className="text-xs">{subgenre.era}</Badge>}
              </div>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-sm text-muted-foreground">{subgenre.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GenreSubgenres;
