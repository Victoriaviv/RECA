import React from "react";
import "../styles/footer.css"; 
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-about">
        <div className="log"><img src={Logo} alt="Logo"/></div>
          <h3>RECA</h3>
          <p>
          RECA is a non-profit, non-governmental organization
          that brings together individuals, communities, and stakeholders focused  on
          addressing climate change and promoting environmental sustainability in Rwanda.
          
          </p>
        </div>

       
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Service">Our Services</a></li>
            <li><a href="/Contact">Contact</a></li>
       
          </ul>
        </div>

        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: rwanda.ecoconservation@gmail.com</p>
          <p>Phone: +250 784741836</p>
          <p>Address: Kigali, Rwanda(Inidi House)</p>
        </div>

      
        {/* <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61564323182347"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div> */}
      </div>

   
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} RECA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
