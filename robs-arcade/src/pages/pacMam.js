import React from 'react'
import styles from '@/styles/Home.module.css'
import PacManGame from '../../component/PacMan/pacManGame'

export default function pacMam() {
  return (
    <>
     <div className={styles.homeBox} >
      <div className={styles.homeText} >
        <h1>PAC MAN</h1>
        <p>Heres how to play: description</p>
      </div>
      <div className={styles.homeText} >
        <h2>Play Here!</h2>
        <div>
          <PacManGame/>
        </div>
      </div>
    </div>
    </>
    
  )
}
