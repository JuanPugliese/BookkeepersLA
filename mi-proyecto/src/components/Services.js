// src/components/Services.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import photoA from '../assets/service4.png';
import photoB from '../assets/service6.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';
import service7 from '../assets/service7.png';
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
            <img src={photoA} alt="Financial reporting" className="service-photo" />
            <img src={photoB} alt="QuickBooks setup" className="service-photo" />
          </Col>
        </Row>
      </Container>

      {/**
      // Option 2: Grid of Cards
      <div className="services-title-bar">
        <h2 className="services-title">Our services</h2>
      </div>
      <Container>
        <Row className="mt-4">
          {titlesLarge.map((title, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <div
                className="service-card service-card-large"
                style={{ backgroundImage: `url(${[service1, service2, service3][idx]})` }}
              >
                <div className="service-overlay" />
                <div className="service-content title-view">
                  <span className="service-bar" />
                  <p>{title}</p>
                </div>
                <div className="service-content desc-view">
                  <p>{descLarge[idx]}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          {titlesSmall.map((title, idx) => (
            <Col lg={3} md={6} key={idx} className="mb-4">
              <div
                className="service-card service-card-small"
                style={{ backgroundImage: `url(${[service4, service5, service6, service7][idx]})` }}
              >
                <div className="service-overlay" />
                <div className="service-content title-view">
                  <span className="service-bar" />
                  <p>{title}</p>
                </div>
                <div className="service-content desc-view">
                  <p>{descSmall[idx]}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      **/}
    </section>
  );
}
