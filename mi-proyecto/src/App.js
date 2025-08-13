// src/App.js
import React from 'react';
import './styles/global.css';

import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Permite saltar al contenido con teclado */}
      <a href="#main" className="skip-link">Skip to content</a>

      <header>
        <MyNavbar />
      </header>

      {/* tabIndex para que el foco aterrice aquí al usar el skip link */}
      <main id="main" tabIndex="-1">
        {/* Hero debe contener el ÚNICO <h1> del sitio */}
        <Hero />
        <About />
        <Services />
        <ContactInfo />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
