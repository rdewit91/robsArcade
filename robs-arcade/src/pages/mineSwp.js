import React from 'react'
import styles from '@/styles/Home.module.css'
// import MineSweeper from '../../component/MineSwp/MineSweeper'
import App from '../../component/MineSwp/App'

export default function mineSwp() {
  return (
    <div className={styles.homeBox} >
    <div className={styles.homeText} >
      <h1>MINE SWEEPER</h1>
      <p>Heres how to play:</p>
    </div>
    <div className={styles.homeText} >
      <h2>Play Here!</h2>
        {/* < MineSweeper /> */}
        <App/>
    </div>
  </div>
  )
}
