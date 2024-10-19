import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About OneForAll Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            OneForAll Solutions is a global outsourcing company dedicated to transforming your vision into tangible results. With our expertise in human resources, virtual administration, graphic design, and web development, we provide comprehensive solutions to businesses of all sizes.
          </p>
          <p className="text-lg mb-4">
            Our mission is to empower businesses by offering high-quality, cost-effective outsourcing services that allow our clients to focus on their core competencies while we handle the rest.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Excellence in service delivery</li>
            <li className="mb-2">Innovation and continuous improvement</li>
            <li className="mb-2">Integrity and transparency</li>
            <li className="mb-2">Client-centric approach</li>
            <li className="mb-2">Global perspective with local insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}