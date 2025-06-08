import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiAngular,
  SiExpress,
  SiMongodb,
  SiReact,
  SiMysql,
  SiRedis,
  SiGit,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
} from 'react-icons/si';
import { FaJava, FaFolderOpen, FaTools } from 'react-icons/fa';
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div><FaJava /> <span>Java</span></div>
        <div><SiPython /> <span>Python</span></div>
        <div><SiJavascript /> <span>JavaScript</span></div>
        <div><SiTypescript /> <span>TypeScript</span></div>
        <div><SiNodedotjs /> <span>Node.js</span></div>
        <div><SiAngular /> <span>Angular</span></div>
        <div><SiExpress /> <span>Express.js</span></div>
        <div><SiMongodb /> <span>MongoDB</span></div>
        <div><SiReact /> <span>React</span></div>
        <div><SiNextdotjs /> <span>Next.js</span></div>
        <div><SiRedux /> <span>Redux</span></div>
        <div><SiBootstrap /> <span>Bootstrap</span></div>
        <div><SiMysql /> <span>SQL</span></div>
        <div><SiRedis /> <span>Redis</span></div>
        <div><FaFolderOpen /> <span>Alfresco</span></div>
        <div><SiGit /> <span>Git</span></div>
        <div><FaTools /> <span>DevOps</span></div>
      </div>
    </section>
  );
};

export default Skills;
