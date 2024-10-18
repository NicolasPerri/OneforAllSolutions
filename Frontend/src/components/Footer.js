import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">RRHH Solutions</h3>
            <p>Ofreciendo soluciones integrales de recursos humanos para empresas de todos los tamaños.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Inicio</a></li>
              <li><a href="/packages" className="hover:text-blue-300">Paquetes</a></li>
              <li><a href="/about" className="hover:text-blue-300">Sobre Nosotros</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p>Email: info@rrhh-solutions.com</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Dirección: 123 Calle Principal, Ciudad, País</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 RRHH Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}