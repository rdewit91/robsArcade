import React from 'react'
import styles from './hangMan.module.css'

const WrongLetters = ({ wrongLetters }) => {

// const WrongLetters = () => {

  return (
    <div className={styles.wrongLettersContainer }>
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters.map((letter, i) => <span key={i}>{letter}</span>).reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters