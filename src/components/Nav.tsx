import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/SavedCandidates" className="hover:text-gray-400">Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
