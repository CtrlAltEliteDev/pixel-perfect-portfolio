import React from 'react';
import TypedText from './TypedText';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about-me">
   
      <h1>Hi, I'm <span className="highlight">Riya Biswas</span></h1>
           <div className="typed-container">
        <TypedText
          texts={[
            'Full Stack Developer',
            'Frontend Developer',
            'Backend Developer',
            'UI/UX Designer',
            'Creative Coder'
          ]}
          typingSpeed={80}
          backSpeed={50}
          loop
        />
      </div>
      <p>
        Motivated and solution-driven Full Stack Developer with 2 years of experience at MuSigma, specializing in MERN and MEAN stack technologies. Adept at optimizing systems, integrating SSO, and improving backend performance. Strong communicator with leadership qualities, passionate about coding and team success.
      </p>
    <button className="hire-me-button">
        Hire Me 
      </button>
      <div className="scroll-down-indicator">⌄</div> 
      {/* New Stats */}
      <div className="about-stats">
        <div className="stat">
          <div className="number">2+</div>
          <div className="label">Years of Experience</div>
        </div>
        <div className="stat">
          <div className="number">7+</div>
          <div className="label">Completed Projects</div>
        </div>
        <div className="stat">
          <div className="number">10K+</div>
          <div className="label">Hours Worked</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
