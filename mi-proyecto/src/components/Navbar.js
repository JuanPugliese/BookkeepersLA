import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/LogoBookeepersLA.png';
import '../styles/Navbar.css';

export default function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="BookKeepers Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
