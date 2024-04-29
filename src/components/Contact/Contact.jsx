/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ContactSVG from '/src/assets/svg/contact.svg';
import GitHubSVG from '/src/assets/svg/github_light.svg';
import LinkedInSVG from '/src/assets/svg/linkedin_light.svg';
import EmailSVG from '/src/assets/svg/email.svg';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_veym2ch',
        'template_q4ba5fb',
        e.target,
        'tRhM04JswhkgutFDu'
      );
      window.alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      window.alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Details:</h3>
          <div>
            <img src={EmailSVG} alt="Email" className="contact-icon" />{' '}
            <a href="mailto:armandok163@gmail.com">armandok163@gmail.com</a>
          </div>
          
          <div className="social-icons">
            <a href="https://github.com/armandok0" target="_blank" rel="noopener noreferrer">
              <img src={GitHubSVG} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/armandok0" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInSVG} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
      <img src={ContactSVG} className="contact-svg" alt="Contact SVG" />
    </section>
  );
};

export default Contact;
