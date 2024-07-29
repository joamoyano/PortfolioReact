import React from 'react'
import Styles from './ProjectsStyles.module.css'
export default function Projects() {
  return (
    <section id="Projects" className={Styles.container}>
      <h1 className={Styles}>Projects</h1>

      <div className={Styles.project}>
        <img src="https://via.placeholder.com/200" alt="Project 1" />
        <h2>Project 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  )
}
