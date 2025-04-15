import React from 'react';
import '../styles/contact.css'; // Importing the CSS file
import map from "../assets/map.jpeg";
const Contact = () => {
  return (
    <div>
      <div className='pic'>
    <img src={map} alt='map'/>
    </div>
    <div className="contact-container">
     
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" required />

        <label>Message:</label>
        <textarea name="message" placeholder="Enter your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    <div className='location'>
    <h2>Our Location</h2>
        <p>KIGALI-RWANDA(Inidi House)</p>
        <p><strong>PHONE:</strong> +250 784741836</p>
        <p><strong>E-MAIL:</strong> rwanda.ecoconservation@gmail.com</p>
    </div>
    </div>
  );
};

export default Contact;
