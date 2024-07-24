import styles from  './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import githubIcon from '../../assets/github-light.svg';
import LinkedinIcon from '../../assets/linkedin-light.svg';

function Hero() {
  return (
   <section id="hero">
    <div className={styles.colorModeContainer}>
      <img className= {styles.hero} src={heroImg} alt="Perfile picture of Joaquin Moyano" />
      <img className={styles.colorMode} src={themeIcon} alt="Color made icon" />
   </div>
   <div className={styles.info}>
    <h1>Joaquin <br></br>Moyano</h1>
    <h2>Developer</h2>
    <span>
      <a href="https://github.com/joamoyano" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt='Github icon'/></a> 

      <a href="https://www.linkedin.com/in/joaquin-moyano-cba/" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt='Linkedin icon'/></a> 
     
      <a href="mailto:joamoyano@gmail.com">Email</a>
    </span>
   </div>
   </section>
  )
}

export default Hero
