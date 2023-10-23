import React from 'react'
import styles from './Cards.module.css'
import {IoIosArrowDroprightCircle} from "react-icons/io";

export default function Cards({image,title}) {
  return (
    <li>
      <div className={styles.card}>
        <img src={image} alt="" />
        <div className={styles['card-overlay']}>
            <div className={styles['card-header']}>
            <IoIosArrowDroprightCircle size={45} className={styles['card-icon']}/>
            <div className={styles['card-content']}>
                <h3 className={styles['card-title']}>{title}</h3>
                <a href="#">Deom</a>
            </div>
            </div>
            <p className={styles['card-description']}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At non voluptas quae dicta incidunt cum delectus, praesentium beatae consequatur illo itaque perspiciatis mollitia, ipsa deleniti ratione? Iste voluptate veniam perferendis.
            </p>
        </div>
      </div>
    </li>
  )
}
