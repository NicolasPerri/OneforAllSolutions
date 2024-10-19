import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      title: "The Benefits of Outsourcing HR Functions",
      date: "May 15, 2023",
      excerpt: "Discover how outsourcing your HR functions can lead to cost savings and improved efficiency..."
    },
    {
      title: "5 Tips for Effective Virtual Administration",
      date: "May 1, 2023",
      excerpt: "Learn how to maximize productivity and streamline your operations with these virtual administration tips..."
    },
    {
      title: "The Impact of Good Web Design on User Experience",
      date: "April 20, 2023",
      excerpt: "Explore how a well-designed website can significantly improve user engagement and conversion rates..."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">OneForAll Solutions Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-lg mb-4">{post.excerpt}</p>
            <a href="#" className="text-blue-600 hover:text-blue-800">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}