import React from 'react'
import styles from './Footer.module.css'
import {BsGithub,BsLinkedin,BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.flex}>
            <div>
                <p>&copy; 2023 by Shubham Ghodkhande. All rights reserved.</p>
            </div>
            <div className={styles.icon}>
                <a href="https://github.com/scopeofice">
                    <BsGithub size={30}/>
                </a>
                <a href="https://www.instagram.com/scopeofice/">
                    <BsInstagram size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/shubham-ghodkhande-427825266/">
                    <BsLinkedin size={30}/>
                </a>
            </div>
        </div>
      </div>
    </footer>
  )
}
