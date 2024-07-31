import React from 'react'
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import freshburger from '../../assets/fresh-burger.png';

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <div className={styles.projectsContainer}>
      <ProjectCard 
          src={freshburger} 
          link= "https://github.com/joamoyano/TriviaGamer"
          h2="Fresh Burguers" 
          p="A simple restaurant website built with React and Next.js"
          />
        <ProjectCard 
          src={freshburger} 
          link= "https://github.com/joamoyano/TriviaGamer"
          h2="Fresh Burguers" 
          p="A simple restaurant website built with React and Next.js"
          />
        <ProjectCard 
          src={freshburger} 
          link= "https://github.com/joamoyano/TriviaGamer"
          h2="Fresh Burguers" 
          p="A simple restaurant website built with React and Next.js"
          /> 
        <ProjectCard 
          src={freshburger} 
          link= "https://github.com/joamoyano/TriviaGamer"
          h2="Fresh Burguers" 
          p="A simple restaurant website built with React and Next.js"
          />
          
      </div>
    </section>
  )
}
 export default Projects;
