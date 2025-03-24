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
  const [candidate, setCandidate] = useState<Candidate>( {
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
      const username= data[0].login;
      searchGithubUser(username).then((data) => {
        console.log(data);
        setCandidate(data);
      });
    });
  };

  useEffect(
     function()  {
   (async () => {

      await fetchCandidate();
      })()
    }, []
  );

  const handleAccept = () => {
    const savedCandidates= getStoredCandidates();
    
    //  add canidate to list of saved candidates
    if (candidate) {
      savedCandidates.push(candidate);
    }
    localStorage.setItem("potentialCandidates", JSON.stringify(savedCandidates));

    // get another conidate 

    
    
  };
  const handleReject = () => {
    // get another candidate

    
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Candidate Search</h1>
      
        <CandidateCard candidate={candidate} onAccept={handleAccept} onReject={handleReject} />
      
    </div>
  );
};

export default CandidateSearch;
