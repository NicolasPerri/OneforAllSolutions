import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenido a RRHH Solutions</h1>
        <p className="text-xl mb-4">
          Ofrecemos soluciones integrales de recursos humanos para empresas de todos los tamaños.
        </p>
        <Link
          to="/packages"
          className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Ver nuestros paquetes de contratación
        </Link>
      </main>
      <Footer />
    </div>
  );
}