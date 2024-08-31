import styles from  './HeroStyles.module.css';
import heroImg from '../../assets/imgHero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import CV from '../../assets/JoaquinMoyanoCV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const emailIcon = theme === 'light'? emailLight : emailDark;
  const githubIcon = theme === 'light'? githubLight : githubDark;
  const LinkedinIcon = theme === 'light'? linkedinLight : linkedinDark;
  
  
  return (
   <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
      <img className= {styles.hero} src={heroImg} alt="Perfile picture of Joaquin Moyano" />
      <img className={styles.colorMode} src={themeIcon} alt="Color made icon" 
        onClick= {toggleTheme}
      />
    </div>
   <div className={styles.info}>
      <h1>Joaquin <br></br>Moyano</h1>
      <h2>Developer</h2>
        <span>
          <a href="https://github.com/joamoyano" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt='Github icon'/></a> 

          <a href="https://www.linkedin.com/in/joaquin-moyano-cba/" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt='Linkedin icon'/></a> 
     
          <a href="mailto:joaquinmoyanocba@gmail.com"target="_blank" rel="noopener noreferrer"><img src={emailIcon} alt='email icon'/></a>
        </span>
  
        <p>Improving day by day to create projects that inspire and solve problems</p>
        <a href={CV} download>
          <button className='hover' >Descargar CV</button>  
        </a>
   </div>
   </section>
  )
}

export default Hero
