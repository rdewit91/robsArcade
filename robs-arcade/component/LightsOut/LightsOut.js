import React from 'react'
import Board from './Board'
import styles from './styles.module.css'

const LightsOut = () => {
  return (
    <div className={styles.app}>
    {/* <h1 className={styles.appH1}><span className={styles.appOrange }>LIGHTS</span>  <span className={styles.appOrange }>OUT</span></h1> */}
    <Board size={5} chanceLightStartsOn={0.25} />

  </div>
  )
}

export default LightsOut
