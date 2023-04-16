import React from 'react'
import Link from 'next/link'
// import RiBriefcase4Fill from 'react-icons/ri'

export default function Header() {
  return (
    <>
    <nav style={{ top: '0%', position: 'sticky', width: '99%', background: '#1F51FF' ,border: 'solid black 3px', display: 'flex', justifyContent: 'space-evenly' }}>
        {/* <div>
            <RiBriefcase4Fill />
        </div> */}
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/' >
                HOME
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/whakMole' >
                WHACK A MOLE
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/mineSwp' >
                MINE SWEEPER
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/rtroSnk' >
                RETRO SNAKE
            </Link>
        </div>
        <div style={{ border: 'solid black 3px', display: 'inline' }}>
            <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='/cntcMe' >
                CONTACT ME
            </Link>
        </div>
    </nav>
    </>
  )
}

