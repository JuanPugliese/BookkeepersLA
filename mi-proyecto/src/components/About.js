// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/about.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Columna de texto */}
          <Col md={6}>
            <h2 className="about-title">About Us</h2>
            <div className="about-text">
              <p>
                We provide reliable and accurate bookkeeping services tailored to small businesses. Our goal is to simplify
                your financial processes, keep your books organized, and give you the clarity you
                need to grow your business. With a commitment to professionalism and personalized
                service, we’re here to help you save time, reduce stress, and focus on what you do best.
              </p>
              <span className="highlight">
                Let us handle the numbers so you can focus on success!
              </span>
            </div>
          </Col>
          {/* Columna de imagen */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src={aboutImg}
              alt="About us"
              className="about-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
