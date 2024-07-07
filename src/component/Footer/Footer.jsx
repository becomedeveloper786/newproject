import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact Information:</p>
        <p>Mobile: +123 456 7890</p>
        <p>Email: info@badmintonshoes.com</p>
      </div>
      <div className="license-info">
        <p>License Information:</p>
        <p>© 2024 Badminton Shoes Store. All rights reserved.</p>
      </div>
      <div className="social-media">
        <p>Follow Us:</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;