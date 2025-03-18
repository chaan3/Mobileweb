import React from 'react';
import Navbar from './NavBar';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import ScrollSectionleft from '../assets/scrollanimation/scrollleft';
import ScrollSectionbottom from '../assets/scrollanimation/scrollbottom';

const Home = () => {
  return (
    <main className="w-full">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="relative bg-slate-600 text-white " id='home'>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-slate-900 shadow-lg"
          style={{ backgroundImage: "url('/assets/2.jpg')" }}
        ></div>
        
        <div className="relative py-24 px-6 sm:px-12 lg:px-24 text-center max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Stay Connected Anytime, Anywhere
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Explore our high-speed mobile services and never miss a beat. We’ve got your connectivity needs covered.
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="inline-block px-8 py-3 text-lg font-semibold bg-yellow-500 text-blue-800 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About & Services Sections with Scroll Animation */}
      <section id='about' className="">
        <ScrollSectionleft>
          <About />
        </ScrollSectionleft>
      </section>
      
      <section id='services' className="">
        <ScrollSectionbottom>
          <Services />
        </ScrollSectionbottom>
      </section>

      {/* Footer Section */}
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
