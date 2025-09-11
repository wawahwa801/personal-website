import React from 'react';

const Skills = () => {
  const languages = ['Python', 'Java', 'C', 'HTML/CSS', 'JavaScript', 'SQL'];
  const technologies = ['Unity', 'VS Code', 'GitHub'];

  return (
    <section className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="card">
        <div className="card-title">Languages</div>
        <div className="card-content">
          <div className="skills-container">
            {languages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-title">Technologies/Frameworks</div>
        <div className="card-content">
          <div className="skills-container">
            {technologies.map((tech, index) => (
              <span key={index} className="skill-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
