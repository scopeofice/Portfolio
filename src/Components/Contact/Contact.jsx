import React from 'react'
import Reveal from '../Reveal/Reveal'
import {TbPhoneCall} from 'react-icons/tb'
import {HiOutlineMail} from 'react-icons/hi'
import styles from './Contact.module.css'
import ContactForm from '../ContactForm/ContactForm'

export default function Contact() {
  return (
    <section id='contact' className={styles.contact}>
      <Reveal>
        <div className='container'>
          <div className={styles.title}>
            <h2>
              Get In <span>Touch</span>
            </h2>
            <hr />
          </div>
          <div className={`${styles['contact-form']} grid`}>
            <div className={styles.content}>
            <h3>Let's Connect</h3>
            <p>
              Please fill out he form on this section to contact with me. Or email me:
            </p>
              <div className={styles['contact-wrapper']}>
                <TbPhoneCall size={50}/>
                <span>Call me</span>
                <h3>+91 8319997419</h3>
              </div>
              <div className={styles['contact-wrapper']}>
                <HiOutlineMail size={50}/>
                <span>Email</span>
                <a href="mailto:shubhamg0615@gmail.com">shubhamg0615@gmail.com</a>
              </div>
            </div>
            <div>
              <h3 className={styles.heading}>Send me a Message</h3>
              <ContactForm/>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
