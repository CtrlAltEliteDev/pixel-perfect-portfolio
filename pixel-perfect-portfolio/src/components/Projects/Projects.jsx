import React from 'react';
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-scroll">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A fully responsive personal portfolio website built with React and SCSS, showcasing my work and skills.</p>
          <div className="skills-used">
            <strong>Skills:</strong> React, SCSS, GitHub Pages
          </div>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>An e-commerce web application with cart, payment gateway integration, and admin dashboard, built using MERN stack.</p>
          <div className="skills-used">
            <strong>Skills:</strong> React, Node.js, Express, MongoDB, Stripe
          </div>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>A task management app with user authentication, drag & drop tasks, and real-time collaboration features.</p>
          <div className="skills-used">
            <strong>Skills:</strong> React, Redux, Firebase, CSS Modules
          </div>
          <button>View Project</button>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
