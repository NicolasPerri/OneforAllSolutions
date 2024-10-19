import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">We'd love to hear from you. Please fill out the form below or use our contact information to get in touch.</p>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Email:</strong> info@oneforallsolutions.com</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="mb-2"><strong>Address:</strong> 123 Global Street, Business City, 12345</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}