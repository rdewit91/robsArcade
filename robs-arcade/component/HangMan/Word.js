
import React from 'react';
import styles from './hangMan.module.css'

const Word = ({ selectedWord, correctLetters }) => {

// const Word = () => {

  return (
    <div className={styles.word}>
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className={styles.letter} key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word