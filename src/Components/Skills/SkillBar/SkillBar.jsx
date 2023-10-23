import React from 'react'
import styles from './SkillBar.module.css';

export default function SkillBar({label,percentage,style}) {
  return (
    <div className={styles.bar}>
      <div className={styles.lable}>
        <span>{label}</span>
      </div>
      <div className={style}>
        <span data-percentage={percentage}></span>
      </div>
    </div>
  )
}
