import React from 'react';

export default function Clients() {
  const clients = [
    "Global Tech Solutions",
    "Innovative Marketing Group",
    "EcoFriendly Products Inc.",
    "NextGen Healthcare",
    "Digital Dynamics LLC",
    "SmartStart Enterprises"
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Clients</h1>
      <p className="text-xl mb-8">We're proud to work with a diverse range of clients across various industries. Here are some of the companies we've had the pleasure of serving:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-center">
            <h2 className="text-xl font-bold text-center">{client}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}