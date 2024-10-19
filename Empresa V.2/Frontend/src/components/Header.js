import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="OneForAll Solutions Logo" className="h-10 mr-3" />
          <Link to="/" className="text-2xl font-bold">OneForAll Solutions</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
            <li><Link to="/packages" className="hover:text-blue-200">Packages</Link></li>
            <li><Link to="/clients" className="hover:text-blue-200">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}