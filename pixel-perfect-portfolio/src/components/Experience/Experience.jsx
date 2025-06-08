import React from 'react';
import './Experience.scss';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <h3>MuSigma – Full Stack Developer (MERN/MEAN)</h3>
      <p>Bangalore, India | May 2023 – Present</p>
      <ul>
        <li>Developed scalable full-stack applications using MEAN and MERN technologies.</li>
        <li>Optimized backend processes, reducing response time from 30 seconds to 2 seconds.</li>
        <li>Led integration of Single Sign-On (SSO) across MuSigma’s internal applications.</li>
        <li>Worked on Alfresco integration, SQL databases, Redis caching, and TypeScript-based projects.</li>
        <li>Contributed to code maintenance and debugging with intermediate Java and basic Python.</li>
        <li>Actively contributed to DevOps processes and CI/CD pipelines.</li>
      </ul>
    </section>
  );
};

export default Experience;
