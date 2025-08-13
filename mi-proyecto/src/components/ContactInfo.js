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
        <p className="contact-item"><a href="mailto:jimena@bookkeepersofla.com">jimena@bookkeepersofla.com</a></p>
        <p className="contact-item"><a href="tel:+16613736712">(661) 373-6712</a></p>
        <p className="contact-item">Valencia, CA</p>

        {/* LinkedIn + sellos centrados */}
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/jimena-falabella-0707b4306/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            {/* Sin width/height props; el tamaño lo maneja el CSS (140x140) */}
            <LinkedinLogo className="linkedin-icon" aria-hidden="true" focusable="false"  />
          </a>

          <div className="seal-row">
            <img src={seal1} alt="Certification badge 1" className="seal-image" loading="lazy" decoding="async" />
            <img src={seal2} alt="Certification badge 2" className="seal-image" loading="lazy" decoding="async" />
            <img src={seal3} alt="Certification badge 3" className="seal-image" loading="lazy" decoding="async" />
            <img src={seal4} alt="Certification badge 4" className="seal-image" loading="lazy" decoding="async" />
          </div>
        </div>
      </Container>
    </section>
  );
}
