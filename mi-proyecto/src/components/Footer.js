// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import seal1 from '../assets/seal1.png';
import seal2 from '../assets/seal2.png';
import seal3 from '../assets/seal3.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col sm={6} className="footer-link">
            <a
              href="https://www.linkedin.com/in/jimena-falabella"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
              https://www.linkedin.com/in/jimena-falabella
            </a>
          </Col>
          <Col sm={6} className="footer-seals text-end">
            <img src={seal1} alt="" className="seal-image" />
            <img src={seal2} alt="" className="seal-image" />
            <img src={seal3} alt="" className="seal-image" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
