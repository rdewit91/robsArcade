import React from 'react'
import styles from '@/styles/Home.module.css'
import HangMan from '../../component/HangMan/HangMan'

export default function hngMan() {
  return (
    <>
     <div className={styles.homeBox} >
      <div className={styles.homeText} >
        <h1>HANG MAN</h1>
        <p>Heres how to play: description</p>
      </div>
      <div className={styles.homeText} >
        <h2>Play Here!</h2>
        <div>
          < HangMan />
        </div>
      </div>
    </div>
    </>
    
  )
}
