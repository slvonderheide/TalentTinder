import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Candidate Search</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/candidates" className="hover:underline">
              Potential Candidates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
