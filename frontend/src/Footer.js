// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>

                <div className="footer-section copyright">
                    <p>&copy; {new Date().getFullYear()} App Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
