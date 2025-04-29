import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./Home";
import AboutPage from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Register from "./Register";
import ToDo from "./ToDo";
import Navbar from "./NavBar";
import AfterLoginView from "./loginview";

function RoutesComponent() {
  return (
    <div>
      {/* Navbar will always be displayed */}
      <Navbar />
      {/* Define routes for each page */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/afterlogin" element={<AfterLoginView />} />
      </Routes>
      

      {/* Footer will always be displayed */}
      <section id='footer'><Footer/></section> 
    </div>
  );
}

export default RoutesComponent;
