import React from 'react'
import styles from '@/styles/cntcMe.module.css'

export default function cntcMe() {
  return (
    <>
    <div className={styles.cntcMeBox} >
      <div className={styles.cntcMeHead} > 
        <h1>WELCOME TO MY CONTACT PAGE!!!</h1>
        <p>Feel free to use this contact information if you have any questions</p>
      </div>
      <br></br>
      <div className={styles.cntcMeData} >
        <div className={styles.cntcText} >
          <h1>E-MAIL</h1>
          <h1>r.dewit91@outlook.com</h1>
        </div>  
        
      </div>
      <br></br>
      <div className={styles.cntcMeData} >
        <div className={styles.cntcText} >
          <h1>CELL PHONE</h1>
          <h1>585-315-3335</h1>
        </div>
        
      </div>
    </div>
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div> 
   
    </>
  )
}
