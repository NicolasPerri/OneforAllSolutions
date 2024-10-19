import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicePackages from '../components/ServicePackages';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome to OneForAll Solutions</h2>
          <p className="text-xl text-center mb-8">
            We are a global outsourcing company offering services in human resources, virtual administration, graphic design, and web development.
          </p>
          <ServicePackages />
        </div>
      </section>
      <Testimonials />
    </div>
  );
}