import React from 'react';

export default function PackageItem({ package: pkg }) {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
      <p className="text-gray-600 mb-4">{pkg.description}</p>
      <p className="text-xl font-semibold">${pkg.price}</p>
      <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Seleccionar
      </button>
    </div>
  );
}