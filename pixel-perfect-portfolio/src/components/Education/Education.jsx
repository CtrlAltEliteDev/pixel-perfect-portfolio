import React from 'react';
import './Education.scss';

const Education = () => {
  return (
  <section className="education">
  <h2>Education</h2>

  <div className="education-item first">
    <h3>Bachelor of Engineering in Computer Science</h3>
    <p>Alva’s Institute of Engineering and Technology (AIET), Mangalore</p>
    <p>Graduated: 2023</p>
  </div>

  <div className="education-item">
    <h3>12th Standard (PUC)</h3>
    <p>Alva’s PU College, Mangalore</p>
    <p>Graduated: 2019</p>
  </div>

  <div className="education-item last">
    <h3>10th Standard (SSLC)</h3>
    <p>Alva’s High School, Mangalore</p>
    <p>Graduated: 2017</p>
  </div>
</section>

  );
};

export default Education;
