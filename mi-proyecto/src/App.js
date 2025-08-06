import React from 'react';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNavbar />
      <Hero />
      <About /> 
      <Services /> 
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default App;

