import React from 'react';
import '../styles/about.css';
import background1 from "../assets/background1.jpeg"
import Francois from "../assets/Francois.jpeg"
import Nigabe from "../assets/Nigabe.jpeg"
import emmanuel from "../assets/emmanuel.jpeg"
import download1 from "../assets/download1.jpeg"

function About() {
  
  const leaders = [
    {image:Francois, name: 'Mr. NSENGIYUMVA Francois ', title: 'Chief Executive Officer of RECA' },
    {image:Nigabe, name: 'Mr.NIGABE Emmanuel  ', title: 'Chief Operating Officer of RECA' },
    {image:emmanuel, name: ' Mr. TUGANIMANA Emmanuel   ', title: 'Chief Programs Officer of RECA' },
  ];

  return (
    <div className="about-us">
      <div className='about'>
     
      <h2>About Us</h2>
      {/* <p>Learn about our history, vision, and team.</p> */}
      </div>
      <div className='mission'>
      <h2>Our Mission</h2>
        <p1>To drive sustainable development by equipping youth with the knowledge, skills, and opportunities
                  to actively engage in climate action. Through  capacity-building programs,
                      advocacy, and technological integration, we aim to safeguard  
                            the environment and enhance ecosystem resilience.  </p1>
      </div>
<div className='vision'>
  <h3>Our Vision</h3>
  <p3>To be a leading organization in climate innovation,
     environmental conservation, and youth empowerment,
      fostering sustainable and resilient communities 
      for present and future generations.  </p3>
</div>
   
      <div className="meet">
        <h2>MEET OUR TEAM</h2>
        <h3><span>The Great Team</span> Will Always Help You</h3>
        <div className="leaders-list">
          {leaders.map((leader, index) => (
            <div className="leader" key={index}>
           <img src={leader.image} alt={leader.name} />
              <h4>{leader.name}</h4>
              <p>{leader.title}</p>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}

export default About;