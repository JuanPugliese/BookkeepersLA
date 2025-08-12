// src/components/Hero.js
import React from 'react';
import { Button } from 'react-bootstrap';
import heroBg from '../assets/fondo.jpg';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1 className="text-center">
          Accurate Books, <br /> Stress-Free Finances!
        </h1>
        <p>
          Managing your finances shouldn’t be a headache. With our expert bookkeeping services,
          we help businesses stay organized, compliant, and financially healthy. Focus on what
          you do best while we take care of the numbers!
        </p>
        <Button variant="light" className="btn-learn">
          Learn more!
        </Button>
      </div>
    </section>
  );
}
