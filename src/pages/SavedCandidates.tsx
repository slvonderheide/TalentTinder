import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  


  useEffect(() => {
    const getCandidates = async () => {
      try {
        const candidatesData = JSON.parse(localStorage.getItem("potentialCandidates") || "[]");
        setCandidates(candidatesData);
      } catch (err) {
       setCandidates([]);
      }
    };

    getCandidates();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Candidates</h1>
      {candidates.length === 0?(
        <p className="text-red-500"> No Candidates</p>
      ) : (
        <ul className="space-y-2">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="p-2 bg-gray-100 rounded-md shadow">
              <span className="font-semibold">{candidate.name}</span> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;
