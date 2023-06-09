import React from 'react'
import styles from '@/styles/cntcMe.module.css'
import Link from 'next/link'

export default function cntcMe() {
  return (
    <>
    <div className={styles.cntcMeBox} >
      <div className={styles.cntcMeHead} > 
        <h1>WELCOME TO MY CONTACT PAGE!!!</h1>
        <p>Feel free to use this contact information if you have any questions</p>
      </div>
      <div className={styles.cntcMeData} >
        <div className={styles.cntcText} >
          <h1>E-MAIL</h1>
          <h1>r.dewit91@outlook.com</h1>
        </div>  
      </div>
      <div className={styles.cntcMeData} >
        <div className={styles.cntcText} >
          <h1>CELL PHONE</h1>
          <h1>585-315-3335</h1>
        </div>
      </div>
      <div className={styles.cntcMeData} >
        <div className={styles.cntcText} >
          <h1>Portfolio</h1>
          <Link href='https://rob-dewit-portfolio-2phe-git-main-rdewit91.vercel.app/' >
            <button className={styles.bttnBttn} >CLICK HERE!</button>
          </Link>
          
        </div>
      </div>
    </div>   
    </>
  )
}
