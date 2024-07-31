import React from 'react'
import styles from './SkillsStyles.module.css'
import cssIcon from '../../assets/css.svg'
import htmlIcon from '../../assets/html-5.svg'
import jsIcon from '../../assets/javascript.svg'
import gitIcon from '../../assets/git.svg'
import csharpIcon from '../../assets/c-sharp.svg'
import mysqlIcon from '../../assets/mysql.svg'
import phpIcon from '../../assets/php.svg'
import nodeIcon from '../../assets/nodejs.svg'
import reactIcon from '../../assets/react.svg'
import pythonIcon from '../../assets/python.svg'
import sqlserverIcon from '../../assets/sqlserver.svg'


function Skills() {
  return (
    <section id="Skills" className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillList}>
        <img src={cssIcon} alt="CSS" className={styles.skillIcon} />
        <img src={htmlIcon} alt="HTML" className={styles.skillIcon} />
        <img src={jsIcon} alt="JavaScript" className={styles.skillIcon} />
        <img src={gitIcon} alt="Git" className={styles.skillIcon} />
        <img src={csharpIcon} alt="C#" className={styles.skillIcon} />
        <img src={phpIcon} alt="PHP" className={styles.skillIcon} />
        <img src={mysqlIcon} alt="MySQL" className={styles.skillIcon} />
        <img src={sqlserverIcon} alt="SqlServer" className={styles.skillIcon} />
        <img src={nodeIcon} alt="Node.js" className={styles.skillIcon} />
        <img src={reactIcon} alt="React" className={styles.skillIcon} />
        <img src={pythonIcon} alt="Python" className={styles.skillIcon} />
      </div>
    </section>
  )
}

export default Skills
