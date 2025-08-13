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

  const titlesLarge = [
    'Recording of financial transactions',
    'Bank and credit card accounts reconciliation',
    'Expense tracking and categorization',
  ];
  const descLarge = [
    'We record every transaction to keep your books accurate and up to date.',
    'We ensure your payments and receipts are perfectly reconciled.',
    'Detailed categorization to simplify your reporting.',
  ];
  const titlesSmall = [
    'Financial reporting',
    '1099 preparation and filing',
    'QuickBooks setup and management',
    'Data cleanup and organization',
  ];
  const descSmall = [
    'Clear, compliant reports delivered on time, every time.',
    'We handle 1099s so you stay compliant and stress-free.',
    'Full QuickBooks support from setup to maintenance.',
    'We clean and organize your data for perfect accuracy.',
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
