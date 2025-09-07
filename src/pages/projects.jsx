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
        description: "A work-in-progress project exploring cutting-edge web technologies and user experience design patterns.",
        technologies: ["React.js", "Next.js", "Flask", "Python"],
        link: null,
        image: nyteImage
    },
    {
      name: "Task Manager",
      date: "February 2025", 
      description: "A sleek task manager used for optimizing user's days, incorporating database integration for user authentication and easy data management.",
      technologies: ["TypeScript", "React.js", "PostgreSQL", "TailwindCSS"],
      link: null,
      image: tmImage
    },
    {
      name: "Aorta Aid",
      date: "May 2024",
      description: "An AI-powered application aiding medical caregivers in diagnosing cardiovascular issues, analyzing patient data, and determining patient risks using machine learning algorithms.",
      technologies: ["Python", "TypeScript", "Machine Learning", "Next.js", "React.js"],
      link: null,
      image: aortaImage
    },
    {
      name: "RiskReady", 
      date: "November 2023",
      description: "An AI-driven application used to predict opioid/substance abuse risks, analyzing user data, and providing personalized resources based on risk levels and severity.",
      technologies: ["Python", "PyTorch", "Machine Learning", "React.js", "Next.js"],
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

      <div className="projects-page">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p className="projects-subtitle">
            A collection of my notable personal projects showcasing my journey in software development
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={`${project.name} preview`} 
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-date">{project.date}</div>
                  </div>
                </div>
              )}
              
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <div className="project-actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      View Project
                    </a>
                  </div>
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