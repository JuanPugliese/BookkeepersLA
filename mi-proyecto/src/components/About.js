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
          <Col md={6} className="about-content">
            <h2 className="about-title">About Us</h2>
            <div className="about-text">
              <p>
                Bookkeepers of LA is a trusted bookkeeping firm dedicated to supporting small
                businesses, entrepreneurs, and professionals across Los Angeles and beyond. We
                specialize in providing accurate and up-to-date financial information, enabling our
                clients to make informed decisions and stay focused on growing their businesses.
                <br /><br />
                Whether you need ongoing monthly bookkeeping, QuickBooks support, clean-up services,
                or help preparing for tax time, we provide reliable, personalized solutions tailored
                to your needs. At Bookkeepers of LA, we care about your success and treat your
                business as if it were our own.
              </p>
              <span className="highlight">
                Let us handle the numbers so you can focus on success!
              </span>
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="about-image-wrapper">
              <img
                src={aboutImg}
                alt="About us"
                className="about-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
