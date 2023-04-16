import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <nav style={{ bottom: '0%', position: 'fixed', width: '99%', background: '#1F51FF' ,border: 'solid black 3px', display: 'flex', justifyContent: 'space-evenly' }} >
    {/* <div style={{ border: 'solid black 3px', display: 'inline' }} >
        <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='https://www.facebook.com/robert.dewit1' >FAECEBOOK</Link>
      </div> */}
      <div style={{ border: 'solid black 3px', display: 'inline' }} >
        <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='https://www.linkedin.com/in/rdewit91/' >LINKEDIN</Link>
      </div>
      <div style={{ border: 'solid black 3px', display: 'inline' }} >
        <Link style={{ textDecoration: 'none', color: '#fffffc', padding: '5px', margin: '5px' }} href='https://github.com/rdewit91' >GITHUB</Link>
      </div>
    </nav>
    </>
  )
}
