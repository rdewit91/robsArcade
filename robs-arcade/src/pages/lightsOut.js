import React from 'react'
import styles from '@/styles/Home.module.css'
import LightsOut from '../../component/LightsOut/LightsOut'

export default function lightsOut() {
  return (
    <div className={styles.homeBox} >
    <div className={styles.homeText} >
      <h1>MINE SWEEPER</h1>
      <p>Heres how to play:</p>
      <p>The objective of the game is to turn off all the lights on the game board.</p>
      <p>However, whenever you press a button, it not only changes its own state but also toggles the state of adjacent buttons (up, down, left, and right).</p>
      <p>The goal is to find the right combination of button presses to turn off all the lights.</p>
    </div>
    <div className={styles.homeText} >
      <h2>Play Here!</h2>
      < LightsOut />
    </div>
  </div>
  )
}
