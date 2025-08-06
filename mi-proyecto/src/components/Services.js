import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function Services() {
  return (
    <section id="services">
      <Container className="py-5">
        <h2 className="mb-4 text-center">Our Services</h2>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Recording of financial transactions</ListGroup.Item>
              <ListGroup.Item>Financial reporting</ListGroup.Item>
              <ListGroup.Item>1099 preparation and filing</ListGroup.Item>
              <ListGroup.Item>QuickBooks setup and management</ListGroup.Item>
              <ListGroup.Item>Data cleanup and organization</ListGroup.Item>
              <ListGroup.Item>Bank and credit card accounts reconciliation</ListGroup.Item>
              <ListGroup.Item>Expense tracking and categorization</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
