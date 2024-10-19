import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Human Resources",
      description: "Comprehensive HR solutions including recruitment, payroll management, and employee development."
    },
    {
      title: "Virtual Administration",
      description: "Efficient administrative support services to streamline your business operations."
    },
    {
      title: "Graphic Design",
      description: "Creative and professional design services for all your branding and marketing needs."
    },
    {
      title: "Web Development",
      description: "Custom web solutions, from simple websites to complex web applications."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}