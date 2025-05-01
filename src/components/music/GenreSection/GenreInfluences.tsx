
import React from 'react';
import { Link } from 'react-router-dom';

interface GenreInfluencesProps {
  influences: string[];
  influencedBy: string[];
}

const GenreInfluences: React.FC<GenreInfluencesProps> = ({ influences, influencedBy }) => {
  if (influences.length === 0 && influencedBy.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-6 mb-6">
      {influencedBy.length > 0 && (
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Influencé par</h4>
          <ul className="space-y-1">
            {influencedBy.map((genre, index) => (
              <li key={index} className="text-sm">
                <Link to={`#${genre.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                  {genre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {influences.length > 0 && (
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-2">A influencé</h4>
          <ul className="space-y-1">
            {influences.map((genre, index) => (
              <li key={index} className="text-sm">
                <Link to={`#${genre.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                  {genre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GenreInfluences;
