import React, { useState, useEffect } from 'react'
import Figure from './Figure'
import styles from './hangMan.module.css'
import WrongLetters from './WrongLetters'
import Word from './Word'
// import {showNotif as show} from './helper/helper'
import Popup from './PopUp'
// import Notif from './Notif'
import dynamic from 'next/dynamic'

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];


function HangMan() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  // const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // show(setShowNotif);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // show(setShowNotif);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }


  return (
    <>
      <div className={styles.gameContainer} >
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters}  selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        {/* <Notif showNotif={showNotif}  /> */}
      </div>
      
    </>
  )
}

// export default HangMan
export default dynamic (() => Promise.resolve(HangMan), {ssr: false})
