import React from 'react'
// import image from '../../Images/male_avatar.gif';
import styles from './About.module.css'
import Reveal from '../Reveal/Reveal';
import Experience from '../Avatar/Experience'
import { Canvas } from "@react-three/fiber";

export default function About() {
  return (
    <section id='about' className={styles.about}>
        <Reveal>
      <div className='container'>
        <div className={styles.title}>
            <h2>
                About <span>ME</span>
            </h2>
            <hr />
        </div>
        <div className='grid'>
            <div className={styles['about-img']}>
                {/* <img src={image} alt="Shubham" /> */}
            <div className={styles.avatar}>
              <Canvas shadows camera={{ position: [0, 1, 4], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <Experience />
              </Canvas>
              </div>
            </div>
            <div className={styles['about-content']}>
                <h3 className={styles.border}>Hi There!</h3>
                <p>
                I'm <span className={styles.name}>Shubham</span>, a multidisciplinary designer & developer with a focus on motion and user experience. My projects include UI/UX design, animation & illustration,and development.
                <br />
                <br />
                This portfolio is a selection of my featured and most recent work. I also upload my projects on git <a href="https://github.com/scopeofice">@scopeofice</a>. I'm always interested in new projects, so feel free to drop me a line.
                </p>
            </div>
        </div>
      </div>
        </Reveal>
    </section>
  )
}
