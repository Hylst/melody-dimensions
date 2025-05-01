
import React from 'react';
import { Clock } from 'lucide-react';

interface GenreHistoryProps {
  history: string;
  color: string;
}

const GenreHistory: React.FC<GenreHistoryProps> = ({ history, color }) => {
  return (
    <div className={`${color} p-6 rounded-lg mb-6 shadow-md`}>
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-100">
        <Clock className="h-5 w-5" />
        Histoire et développement
      </h3>
      <p className="leading-relaxed text-gray-100">{history}</p>
    </div>
  );
};

export default GenreHistory;
