import React from "react";
import "../styles/home.css";

import download1 from "../assets/download1.jpeg"
import activity1 from "../assets/activity1.jpeg"
import activity2 from "../assets/activity2.jpeg"
import activity5 from "../assets/activity5.jpeg"
const projects = [
    {
      id: 1,
      title: "SUSTAINABLE AGRICULTURE AND FOOD SECURITY PROGRAMS",
      image: activity1,
    },
    {
      id: 2,
      title: "COMMUNITY-BASED ENVIRONMENTAL CONSERVATION PROJECT",
      image: activity2,
    },
    {
      id: 3,
      title: "ENVIRONMENTAL EDUCATION AND AWARENESS COMPAIGNS",
      image: activity5,
    },
  ];
  
function Home(){
    return(
        <div>
<div className="home">


      <header>
      


        <h1>Welcome to RECA</h1>
        <p>Your partner in promoting environmental sustainability and addressing climate change.</p>
      </header>
   
      </div>
      <section className="history">    
     <h3>Our History</h3>
        <p>Rwanda Eco Conservation Alliance (RECA)is a non-profit, non-governmental organization Founded 
           in November 2024 that brings together individuals, communities, and stakeholders focused  on
                addressing climate change and promoting environmental sustainability in Rwanda.
           Rwanda Eco Conservation Alliance (RECA) works to create a platform for collaborative action,
           innovation, and advocacy to mitigate the impacts of climate change, conserve natural resources,
                 and build a sustainable future for Rwanda's people, particularly youth and women.
    </p>
      </section>
       <section className="projects">
        <h1>Featured Projects</h1>
        <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      </section>
      </div>
  );
}

export default Home