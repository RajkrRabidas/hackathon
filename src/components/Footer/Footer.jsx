import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="hidden contact-container">
          <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-top font-[montserrat] px-8">
        <p className="contact-desc">
          DESIGNING INITIAL IDEAS WITH A FOCUS<br />
          ON CLIENT WISHES AND EMERGING<br />
          TRENDS
        </p>
        <p className="contact-year">© 2024</p>
      </div>

      <div className="contact-bottom">
        <div className="newsletter px-8">
          <label htmlFor="email">SUBSCRIBE TO OUR NEWSLETTER</label>
          <div className="newsletter-input">
            <input type="email" placeholder="Your@Email.com" id="email" />
            <button>&rarr;</button>
          </div>
        </div>

        <div className="links pr-8">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
        </div>
      </div>
    </section>
    );
};

export default Footer;
