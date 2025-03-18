import React from 'react';
import Contactw from './ContactWhatsapp';
import Contactm from './ContactMail';
import Contactphone from './Contactphone';
import { PhoneOutgoing } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                We are a trusted mobile service center providing reliable repair and maintenance services for all brands and models. Customer satisfaction is our priority.
              </p>
            </div>

            {/* Contact Details */}
            <div className='w-full lg:ml-20'>
              <h3 className="text-lg font-semibold mb-4 lg:mr-16">Contact Me</h3>
              <ul className="text-sm space-y-4 lg:items-center lg:ml-20">
                <li className="flex flex-col md:flex-row lg:items-center sm:items-center md:items-start">
                  <strong>Phone:</strong> +91 8344292756 
                  <a href="tel:+918344292756" className="w-9 h-9 flex items-center justify-center rounded-full shadow-lg ">
                    <PhoneOutgoing className='hover:scale-125 transform transition-transform duration-300  ' />
                  </a>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                  <strong>Whatsapp:</strong> +91 8344292756 <Contactw/>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                  <strong>Email:</strong> chandaji628@gmail.com <Contactm/>
                </li>
                
              </ul>
              <li className='lg:mr-6 list-none'><strong>Address:</strong> 59/2, Nadaha Salai Street Srivilliputhur</li>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="bg-white">
        <div className="border-t border-gray-700 py-3 text-center">
          <p className="text-sm font-bold text-black">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;