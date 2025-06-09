import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p className="contact-subtitle">Feel free to reach out for collaboration or just a friendly chat!</p>

      <div className="contact-links">
        <a href="mailto:your-email@example.com" className="contact-link">
          📧 Email: your-email@example.com
        </a>

        <a href="https://www.linkedin.com/in/your-linkedin-url" target="_blank" rel="noopener noreferrer" className="contact-link">
          💼 LinkedIn: your-linkedin-url
        </a>

        <a href="https://github.com/CtrlAltEliteDev" target="_blank" rel="noopener noreferrer" className="contact-link">
          🐙 GitHub: CtrlAltEliteDev
        </a>

        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer" className="contact-link">
          🐦 Twitter: your-twitter-handle
        </a>
      </div>
    </section>
  );
};

export default Contact;
