import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] px-4 sm:px-10 py-4 flex flex-col sm:flex-row sm:justify-between items-center shadow-md">
      <h1 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-0">Riya Bansal</h1>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
        <Link to="/services" className="hover:text-pink-400">Services</Link>
        <Link to="/technologies" className="hover:text-pink-400">Technologies</Link>
        <Link to="/portfolio" className="hover:text-pink-400">Portfolio</Link>
        <Link to="/contact" className="hover:text-pink-400">Contact</Link>
      </div>
    </nav>
  );
}
