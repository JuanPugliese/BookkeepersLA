// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="about-content text-center">
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
        </Row>
      </Container>
    </section>
  );
}
