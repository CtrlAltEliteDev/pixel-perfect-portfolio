import React from 'react';
import './Experience.scss';

const experienceData = [
  {
    title: 'MuSigma – Full Stack Developer (MERN/MEAN)',
    location: 'Bangalore, India',
    period: 'May 2023 – Present',
    details: [
      'Developed scalable full-stack applications using MEAN and MERN technologies.',
      'Optimized backend processes, reducing response time from 30 seconds to 2 seconds.',
      'Led integration of Single Sign-On (SSO) across MuSigma’s internal applications.',
      'Worked on Alfresco integration, SQL databases, Redis caching, and TypeScript-based projects.',
      'Contributed to code maintenance and debugging with intermediate Java and basic Python.',
      'Actively contributed to DevOps processes and CI/CD pipelines.',
    ],
  },
  {
    title: 'ABC Corp – Software Engineer',
    location: 'Hyderabad, India',
    period: 'Jan 2021 – Apr 2023',
    details: [
      'Built and maintained React-based frontends with optimized state management.',
      'Improved backend API response times by refactoring Express.js services.',
      'Implemented authentication and authorization flows using OAuth 2.0.',
      'Collaborated closely with product managers and designers to deliver customer-centric features.',
      'Mentored junior developers and conducted regular code reviews.',
    ],
  },
  // Add more items here
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Professional Journey</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className={`timeline-content ${index % 2 === 1 ? 'right' : ''}`}>
              <h3>{item.title}</h3>
              <p>{item.location} | {item.period}</p>
              <ul>
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
