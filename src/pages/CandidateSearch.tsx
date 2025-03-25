import { useEffect, useState } from "react";
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CanididateCard.tsx";
import { searchGithub, searchGithubUser } from "../api/API.tsx";

const getStoredCandidates = (): Candidate[] => {
  try {
    return JSON.parse(localStorage.getItem("potentialCandidates") || "[]");
  } catch {
    return [];
  }
};

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    name: "",
    login: "",
    location: "",
    avatar_url: "",
    email: "",
    html_url: "",
    company: "",
  });

  const fetchCandidate = async () => {
    searchGithub().then((data) => {
      const username = data[0].login;
      searchGithubUser(username).then((data) => {
        console.log(data);
        setCandidate(data);
      });
    });
  };

  useEffect(function () {
    (async () => {
      await fetchCandidate();
    })();
  }, []);

  const handleAccept = () => {
    if (!candidate) {
      return;
    }
    const savedCandidates = getStoredCandidates();
    savedCandidates.push(candidate);
    localStorage.setItem(
      "potentialCandidates",
      JSON.stringify(savedCandidates)
    );
    fetchCandidate();
  };

  const handleReject = () => {
    fetchCandidate(); // Get the next candidate
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Candidate Search</h1>
      {candidate ? (
        <CandidateCard
          candidate={candidate}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
