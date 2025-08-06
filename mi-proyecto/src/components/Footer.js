import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row className="text-center">
          <Col>
            <h5>BookKeepers</h5>
            <p className="mb-1">Juan Camilo Pugliese</p>
            <p className="mb-1">
              <a href="mailto:juan.camilo@example.com">juan.camilo@example.com</a>
            </p>
            <p className="mb-1">+57 300 123 4567</p>
            <p>
              <a 
                href="https://www.linkedin.com/in/juan-camilo-pugliese" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
