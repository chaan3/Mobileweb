// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our mobile service company! We provide high-quality services to help you stay connected with the world.
        </p>
      </div>

      <div className="mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to provide exceptional mobile services that enhance the daily lives of our customers.
            We are committed to offering the latest technology, 24/7 support, and personalized service to ensure you stay connected at all times.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Expertise</h3>
            <p className="mt-4 text-gray-600">
              With years of experience in the mobile service industry, we specialize in network optimization, troubleshooting, and providing tailored mobile solutions for our customers.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Why Choose Us</h3>
            <p className="mt-4 text-gray-600">
              We believe in transparency, quality, and reliability. Whether you need a new plan, device repairs, or expert advice, our team is always ready to help you get the best service possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
