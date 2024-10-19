import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">OneForAll Solutions</h3>
            <p>Transforming your vision into results with our global outsourcing services.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: info@oneforallsolutions.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Global Street, Business City, 12345</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 OneForAll Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}