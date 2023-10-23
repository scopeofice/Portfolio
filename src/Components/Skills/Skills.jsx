import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import SkillBar from './SkillBar/SkillBar'
import Reveal from '../Reveal/Reveal'

export default function Skills() {

  const [isIntersected, setIsIntersected] = useState(false);
  const sectionRef=useRef(null);

  useEffect(()=>{
    const options = {
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersection = (entries, observer) =>{
      const [entry] = entries;
      if(entry.isIntersecting){
        setIsIntersected(true);
        observer.unobserve(entry.target);
      }
    }

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(sectionRef.current);

    return () =>{
      observer.disconnect();
    }

  },[])

  const skillsData = [
    {
    label: 'Java',
    percentage: 90,
    style: `${styles['progress-line']} ${styles.java}`,
    },
    {
    label: 'React',
    percentage: 95,
    style: `${styles['progress-line']} ${styles.react}`,
    },
    {
    label: 'Spring',
    percentage: 85,
    style: `${styles['progress-line']} ${styles.spring}`,
    },
    {
    label: 'Javascript',
    percentage: 90,
    style: `${styles['progress-line']} ${styles.js}`,
    },

]

  return (
    <section id='skills' className={styles.skills} ref={sectionRef}>
      <Reveal> 
      <div className='container'>
        <div className={styles.title}>
            <h2><span>My</span>Skills</h2>
            <hr />
        </div>
        <div className={`grid ${styles["skills-grid"]}`}>
            <div className={styles.content}>
                <h1>
                    In <span>Designing</span> <br />
                    And <span>Developing</span>
                </h1>
                <p>
                Every day is a new challenge, and I'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast, I try to keep myself up to date.
                </p>
            </div>
            <div className={styles['skills-bars']}>
              {skillsData.map(skill => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  percentage={skill.percentage}
                  style={isIntersected ? skill.style : " "}
                />
              ))}
            </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.flex} container`}>
          <div>
            <h3>I'm available for work</h3>
          </div>
          <div>
            <a href="#contact">Contact me</a>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  )
}
