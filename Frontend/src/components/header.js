import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">RRHH Solutions</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Inicio</Link></li>
            <li><Link to="/packages" className="hover:text-blue-200">Paquetes</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">Sobre Nosotros</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}