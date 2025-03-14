import React from 'react';
//import { potentialCandidate } from '../pages/PotentialCandidates';

interface CandidateCardProps {
  candidate: any; 
  onAccept: () => void;
  onReject: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onAccept, onReject }) => {

  return (
    
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <img src={candidate.avatar} alt={candidate.name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-bold">{candidate?.name || "anonoymous"}</h2>
      <p className="text-gray-600">@{candidate?.username || "anonoymous"}</p>
      <p>{candidate?.location || "anonoymous"}</p>
      <p>{candidate?.email || "anonoymous"}</p>
      <a href={candidate?.html_url || "anonoymous"} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Profile
      </a>
      <p>{candidate?.company || "anonoymous"}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={onAccept} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={onReject} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
      </div>
    </div>
  );
};

export default CandidateCard;
