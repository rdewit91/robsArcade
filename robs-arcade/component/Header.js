import React from 'react'
import Link from 'next/link'
// import RiBriefcase4Fill from 'react-icons/ri'

export default function Header() {
  return (
    <>
    <nav style={{ top: '1%', position: 'fixed', width: '99%', background: '#210062' ,border: 'solid #F9D949 3px', display: 'flex', justifyContent: 'space-evenly' }}>
        {/* <div>
            <RiBriefcase4Fill />
        </div> */}
        <div style={{ border: 'solid #F9D949 2px', display: 'inline'}}>
            <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='/' >
                HOME
            </Link>
        </div>
        <div style={{ border: 'solid #F9D949 2px', display: 'inline'}}>
            <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='/whakMole' >
                WHACK A MOLE
            </Link>
        </div>
        <div style={{ border: 'solid #F9D949 2px', display: 'inline', margin: '2px', padding: '2px' }}>
            <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='/mineSwp' >
                MINE SWEEPER
            </Link>
        </div>
        <div style={{ border: 'solid #F9D949 2px', display: 'inline', margin: '2px', padding: '2px' }}>
            <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='/rtroSnk' >
                RETRO SNAKE
            </Link>
        </div>
        <div style={{ border: 'solid #F9D949 2px', display: 'inline', margin: '2px', padding: '2px' }}>
            <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='/cntcMe' >
                CONTACT ME
            </Link>
        </div>
    </nav>
    </>
  )
}

