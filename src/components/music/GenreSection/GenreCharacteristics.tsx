
import React from 'react';
import { ListMusic } from 'lucide-react';

interface GenreCharacteristicsProps {
  characteristics: string[];
}

const GenreCharacteristics: React.FC<GenreCharacteristicsProps> = ({ characteristics }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <ListMusic className="h-5 w-5" />
        Caractéristiques musicales
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {characteristics.map((char, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            <span>{char}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreCharacteristics;
