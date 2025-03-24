import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
