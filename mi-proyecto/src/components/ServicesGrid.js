// src/components/ServicesGrid.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';
import service7 from '../assets/service7.png';
import '../styles/ServicesGrid.css';

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

export default function ServicesGrid() {
  return (
    <section id="services" className="services-grid py-5">
      <div className="services-title-bar">
        <h2 className="services-title">Our services</h2>
      </div>
      <Container>
        <Row className="mt-4">
          { [service1, service2, service3].map((img, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <div
                className="service-card service-card-large"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="service-overlay" />
                <div className="service-content title-view">
                  <span className="service-bar" />
                  <p>{titlesLarge[idx]}</p>
                </div>
                <div className="service-content desc-view">
                  <p>{descLarge[idx]}</p>
                </div>
              </div>
            </Col>
          )) }
        </Row>
        <Row className="mt-4">
          { [service4, service5, service6, service7].map((img, idx) => (
            <Col lg={3} md={6} key={idx} className="mb-4">
              <div
                className="service-card service-card-small"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="service-overlay" />
                <div className="service-content title-view">
                  <span className="service-bar" />
                  <p>{titlesSmall[idx]}</p>
                </div>
                <div className="service-content desc-view">
                  <p>{descSmall[idx]}</p>
                </div>
              </div>
            </Col>
          )) }
        </Row>
      </Container>
    </section>
  );
}
