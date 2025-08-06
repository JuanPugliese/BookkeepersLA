import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';
import service7 from '../assets/service7.png';
import '../styles/Services.css';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-title-bar">
        <h2 className="services-title">Our Services</h2>
      </div>
      <Container>
        <Row className="mt-4">
          {[service1, service2, service3].map((img, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <div
                className="service-card service-card-large"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="service-overlay" />
                <div className="service-content">
                  <span className="service-bar" />
                  <p>
                    {[
                      'Recording of financial transactions',
                      'Bank and credit card accounts reconciliation',
                      'Expense tracking and categorization',
                    ][idx]}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          {[service4, service5, service6, service7].map((img, idx) => (
            <Col lg={3} md={6} key={idx} className="mb-4">
              <div
                className="service-card service-card-small"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="service-overlay" />
                <div className="service-content">
                  <span className="service-bar" />
                  <p>
                    {[
                      'Financial reporting',
                      '1099 preparation and filing',
                      'QuickBooks setup and management',
                      'Data cleanup and organization',
                    ][idx]}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}