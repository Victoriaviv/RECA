import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(){

return(
<div className="navbar">
<div className="logo">
    <img src="Logo.png" alt="logo"/>
</div>
<div className="links">
       
      
       <Link to="/">HOME</Link>
       <Link to="/About">ABOUT US</Link>
       <Link to="/Service">OUR SERVICE</Link>
    <Link to="/Contact">CONTACT US</Link>
     </div>
</div>
)
}
export default Navbar;