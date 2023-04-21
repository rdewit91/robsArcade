import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
    <nav className={styles.navBody} >
        <div  style={{ display: 'inline' }}>
            <Link  style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/' >
                <button className={styles.bttnStyle}  >HOME</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/mineSwp' >
                <button className={styles.bttnStyle} >MINE SWEEPER</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/pacMam' >
                <button className={styles.bttnStyle} >PAC MAN</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/spacInvd' >
                <button className={styles.bttnStyle} >SPACE INVADERS</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/cntcMe' >
                <button className={styles.bttnStyle}>CONTACT ME</button>    
            </Link>
        </div>
    </nav>
    </>
  )
}

