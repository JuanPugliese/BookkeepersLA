// src/components/Services.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import photoA from '../assets/service4.png';
import photoB from '../assets/service6.png';
import '../styles/Services.css';

export default function Services() {
  const listItems = [
    'Recording of financial transactions',
    'Bank and credit card accounts reconciliation',
    'Expense tracking and categorization',
    'Financial reporting',
    '1099 preparation and filing',
    'QuickBooks setup and management',
    'Data cleanup and organization',
  ];

  return (
    <section id="services" className="py-5">
      {/* Option 1: List + Photos */}
      <div className="services-title-bar">
        <h2 className="services-title">Our Services</h2>
      </div>
      <Container>
        <Row>
          <Col lg={6} className="service-list-col">
            <ul className="service-list">
              {listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Col>
          <Col lg={6} className="service-photos-col">
            <img src={photoA} alt="Financial reporting" className="service-photo" loading="lazy" decoding="async" />
            <img src={photoB} alt="QuickBooks setup" className="service-photo" loading="lazy" decoding="async" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
