import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PackageList from '../components/PackageList';

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // En una aplicación real, aquí harías una llamada a tu API
    // Por ahora, usaremos datos de ejemplo
    setPackages([
      { id: 1, name: 'Paquete Básico', description: 'Servicios esenciales de RRHH', price: 500 },
      { id: 2, name: 'Paquete Estándar', description: 'Servicios completos de RRHH', price: 1000 },
      { id: 3, name: 'Paquete Premium', description: 'Servicios de RRHH personalizados', price: 2000 },
    ]);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Nuestros Paquetes de Contratación</h1>
        <PackageList packages={packages} />
      </main>
      <Footer />
    </div>
  );
}