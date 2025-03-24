import { useState, useEffect } from "react";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<{ id: number; name: string; position: string }[]>([]);

  // Simulating fetching saved candidates (Replace with actual API call)
  useEffect(() => {
    const savedCandidates = [
      { id: 1, name: "John Doe", position: "Frontend Developer" },
      { id: 2, name: "Jane Smith", position: "Backend Developer" },
      { id: 3, name: "Sam Wilson", position: "Full Stack Developer" },
    ];
    setCandidates(savedCandidates);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Potential Candidates</h1>
      {candidates.length > 0 ? (
        <ul className="space-y-2">
          {candidates.map((candidate) => (
            <li key={candidate.id} className="p-2 bg-gray-100 rounded-md shadow">
              <span className="font-semibold">{candidate.name}</span> - {candidate.position}
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
