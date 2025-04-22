import React from 'react';
import Navbar from '../components/navbar';
import InteractiveDots from '../components/dots';
import Footer from '../components/footer';
import nyteImage from '../assets/nyte.png';
import riskreadyImage from '../assets/riskready.png';
import aortaImage from '../assets/aorta.png';
import tmImage from '../assets/task manager.png';

function Projects() {
  const projectsData = [
    {
        name: "Nyte",
        date: "March 2025",
        description: "WIP",
        technologies: ["React.js", "Next.js", "Flask", "Python"],
        link: null,
        image: nyteImage
    },
    {
      name: "Task Manager",
      date: "February 2025",
      description: "A sleek task manager used for optimizing user's days, incorperating database integration for user authentication and easy data management",
      technologies: ["Typescript", "React.js", "PostegreSQL", "TailwindCSS"],
      link: null,
      image: tmImage
    },
    {
      name: "Aorta Aid",
      date: "May 2024",
      description: "An AI-powered application aiding medical caregivers in diagnosing cardiovascular issues, analzying patient data, anf determining the risks of patients using a machine-learning algorithm",
      technologies: ["Python", "Typescript", "Machine Learning", "Next.js", "React.js"],
      link: null,
      image: aortaImage
    },
    {
      name: "RiskReady",
      date: "November 2023",
      description: "An AI-driven application used to predict opioid/substance abuse risks, analyzing user data, and providing personalized resources based on risks and level of severity",
      technologies: ["Python", "Pytorch", "Machine Learning", "React.js", "Next.js"],
      link: null,
      image: riskreadyImage
    }
  ];

  return (
    <>
      <div>
        <InteractiveDots />
        <Navbar />
      </div>
      <br></br>
      <div className="projects-container">
      <div className="projects-header">
        <br></br>
            <p className="main-desc">A timeline of my notable personal projects</p>
          </div>
        <div className="timeline-container">
          {projectsData.map((project, index) => (
            <div key={index} className="timeline-item">
              
              <div className="timeline-content">
                <div className="project-header">
                  <h2>{project.name}</h2>
                  <span className="project-date">{project.date}</span>
                </div>
                
                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={`${project.name} screenshot`} 
                      className="project-image"
                    />
                  </div>
                )}
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Projects;