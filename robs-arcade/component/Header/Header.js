import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
    <nav className={styles.navBody} >
        <div  style={{ display: 'inline' }}>
            <Link  style={{ textDecoration: 'none', color: '#fffffc', padding: '0.1125em', margin: '0.1125em' }} href='/' >
                <button className={styles.bttnStyle}  >HOME</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '0.1125em', margin: '0.1125em' }} href='/mineSwp' >
                <button className={styles.bttnStyle} >MINE SWEEPER</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '0.1125em', margin: '0.1125em' }} href='/hngMan' >
                <button className={styles.bttnStyle} >HANG MAN</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '0.1125em', margin: '0.1125em' }} href='/lightsOut' >
                <button className={styles.bttnStyle} >LIGHTS OUT</button>
            </Link>
        </div>
        <div style={{ display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '0.1125em', margin: '0.1125em' }} href='/cntcMe' >
                <button className={styles.bttnStyle}>CONTACT ME</button>    
            </Link>
        </div>
    </nav>
    </>
  )
}

