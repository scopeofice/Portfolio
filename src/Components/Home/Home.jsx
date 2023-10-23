import React, { useEffect, useState } from 'react';
import image from '../../Images/male_avatar.gif';
import styles from './Home.module.css';
// import Spline from '../Spline/Spline';
import Spline from '@splinetool/react-spline';

export default function Home() {
    const items = ['Designer', 'Developer', 'Freelancer'];
    const [currentIndex,setCurrentIndex]=useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex+1) % items.length)
        },3000)
        return () => clearInterval(interval);
    },[])

  return (
    <section id='home'>
        <div className='container'>
            <div className={styles.home}>
                <div className={styles['home-content']}>
                    <div className={styles['home-title']}>
                        <h2>Hey, I'm</h2>
                        <h1>Shubham</h1>
                    </div>
                    <div className={styles['text-wrapper']}>
                        <p>
                            Creative {' '}
                            <span className={styles.items}>
                                {items[currentIndex]}
                            </span>
                        </p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            <a href="#portfolio">View Projects</a>
                        </div>
                        <span className={styles.divider}>or</span>
                        <div className={styles.link}>
                            <a href="#about">Read About Me</a>
                        </div>
                    </div>
                    <div className={styles.scroll}>
                        <a href="#about">
                            <span></span>
                        </a>
                    </div>
                </div>
                {/* <div className={styles.partition}></div> */}
<div className={styles.spline}>

                <Spline scene="https://prod.spline.design/XWFrRlrEbOu0tmnc/scene.splinecode" />
</div>
                         
                {/* <div className={styles.circle}>
                    <div className={styles.content}>
                        <img src={image} alt="Shubham Ghodkhande" />
                        <h2>
                            Shubham Ghodkande <br /> Software Developer
                        </h2>
                        <a href="#contact">Hire Me</a>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}
