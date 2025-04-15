import React from 'react';
import '../styles/service.css';
import download1 from "../assets/download1.jpeg"
function Service() {
  // Sample services data (replace with actual data)
  const services = [
    { No: '1', description: 'Environmental Education and Awareness Campaigns' },
    { No: '2', description: 'Promoting Climate Care Innovations' },
    { No: '3', description: 'Empowering Youth and Women for Climate Action' },
    { No: '4', description: ' Community-Based Environmental Conservation Projects' },
    { No: '5', description: ' Sustainable Agriculture and Food Security Programs' },
    { No: '6', description: ' Climate Change Advocacy and Policy Engagement' },
    { No: '7', description: 'Research and Data Collection on Climate Change Impacts' },
    { No: '8', description: ' Partnerships for Climate Action' },
    // { No: '9', description: ' Sustainable Urban Development Initiatives' },
    // { No: '10', description: ' Monitoring and Reporting of Environmental Progress' },
  ];

  return (
    <div className='servicelist'>
    <div className="our-service">
   
      <h2>Our Services</h2>
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h3>{service.No}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
 
    </div>
  );
}

export default Service;