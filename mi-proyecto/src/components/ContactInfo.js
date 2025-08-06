// src/components/ContactInfo.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/ContactInfo.css';

export default function ContactInfo() {
  return (
    <section id="contact-info" className="contact-info-section">
      <Container>
        <Row>
          <Col md={6} className="contact-details">
            <h3>Jimena Falabella</h3>
            <p>jimena@bookkeepersofla.com</p>
            <p>(661) 373-6712</p>
            <p>Valencia, CA</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
