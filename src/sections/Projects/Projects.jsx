import React from 'react'
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Trivia from '../../assets/Trivia.png';
import startup from '../../assets/startup.png'

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <div className={styles.projectsContainer}>
      <ProjectCard 
          src={startup} 
          link= "https://github.com/joamoyano/StartupPage"
          h2="Startup landing page" 
          p="A simple landing page made with php"
          />
        <ProjectCard 
          src={Trivia} 
          link= "https://github.com/joamoyano/TriviaGamer"
          h2="Trivia gamer" 
          p="A simple Quizz game made with javascript"
          />

          
      </div>
    </section>
  )
}
 export default Projects;
