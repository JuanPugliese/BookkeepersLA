import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as LinkedinLogo } from '../assets/linkedin-svgrepo-com.svg';
import seal1 from '../assets/seal1.png';
import seal2 from '../assets/seal2.png';
import seal3 from '../assets/seal3.png';
import seal4 from '../assets/seal4.png';
import '../styles/ContactInfo.css';

export default function ContactInfo() {
  return (
    <section id="contact" className="contact-info-section">
      {/* Barra de título igual a Our services */}
      <div className="contact-title-bar">
        <h2 className="contact-title-bar-text">Contact Us</h2>
      </div>

      {/* Contenido */}
      <Container className="text-center py-3">
        <p className="contact-item">jimena@bookkeepersofla.com</p>
        <p className="contact-item">(661) 373-6712</p>
        <p className="contact-item">Valencia, CA</p>

        {/* LinkedIn a la izquierda + sellos a la derecha */}
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/jimena-falabella"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinLogo className="linkedin-icon" width={36} height={36} />
          </a>

          <div className="seal-row">
            <img src={seal1} alt="Seal 1" className="seal-image" />
            <img src={seal2} alt="Seal 2" className="seal-image" />
            <img src={seal3} alt="Seal 3" className="seal-image" />
            <img src={seal4} alt="Seal 4" className="seal-image" />
          </div>
        </div>
      </Container>
    </section>
  );
}
