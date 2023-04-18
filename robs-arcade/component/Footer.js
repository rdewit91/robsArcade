import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <nav style={{ bottom: '1%', position: 'fixed', width: '99%', background: '#210062' ,border: 'solid #F9D949 3px', display: 'flex', justifyContent: 'space-evenly' }} >
    {/* <div style={{ border: 'solid #F9D949 3px', display: 'inline' }} >
        <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='https://www.facebook.com/robert.dewit1' >FAECEBOOK</Link>
      </div> */}
      <div style={{ border: 'solid #F9D949 2px', display: 'inline',  margin: '2px', padding: '2px' }} >
        <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='https://www.linkedin.com/in/rdewit91/' >LINKEDIN</Link>
      </div>
      <div style={{ border: 'solid #F9D949 2px', display: 'inline', margin: '2px', padding: '2px' }} >
        <Link style={{ textDecoration: 'none', color: '#BDE6F1', padding: '5px', margin: '5px' }} href='https://github.com/rdewit91' >GITHUB</Link>
      </div>
    </nav>
    </>
  )
}
