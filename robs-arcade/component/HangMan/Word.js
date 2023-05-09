import React from 'react';
import styles from './hangMan.module.css'

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <>
    <div className={styles.word}>
      {selectedWord.split('').map((letter, i) => {
        return (
          <div className={styles.letter} key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Word
