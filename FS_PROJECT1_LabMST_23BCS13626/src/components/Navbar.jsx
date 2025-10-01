import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center gap-6">
      <Link to="/" className="text-white hover:text-yellow-300 font-semibold">Home</Link>
      <Link to="/about" className="text-white hover:text-yellow-300 font-semibold">About</Link>
      <Link to="/contact" className="text-white hover:text-yellow-300 font-semibold">Contact</Link>
    </nav>
  );
}

export default Navbar;