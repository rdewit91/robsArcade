import React from 'react'
import styles from '@/styles/Home.module.css'
import HangMan from '../../component/HangMan/HangMan'

function hngMan() {
  return (
    <>
     <div className={styles.homeBox} >
      <div className={styles.homeText} >
        <h1>HANG MAN</h1>
        <p>Heres how to play: description</p>
      </div>
      <div className={styles.homeText} >
        <h2>Play Here!</h2>
          < HangMan />
      </div>
    </div>
    </>
  )
}

export default hngMan

// import React from 'react'
// import { useState, useEffect } from 'react'
// import Figure from '../../component/HangMan/Figure'
// import styles from '@/styles/hngMan.module.css'
// import WrongLetters from '../../component/HangMan//WrongLetters'
// import Word from '../../component/HangMan//Word'
// // import {showNotif as show} from './helper/helper'
// import Popup from '../../component/HangMan//PopUp'
// // import Notif from './Notif'

// const words = ['application', 'programming', 'interface', 'wizard'];
// let selectedWord = words[Math.floor(Math.random() * words.length)];


// function hngMan() {
//   const [playable, setPlayable] = useState(true);
//   const [correctLetters, setCorrectLetters] = useState([]);
//   const [wrongLetters, setWrongLetters] = useState([]);
//   // const [showNotif, setShowNotif] = useState(false);

//   useEffect(() => {
//     const handleKeydown = event => {
//       const { key, keyCode } = event;
//       if (playable && keyCode >= 65 && keyCode <= 90) {
//         const letter = key.toLowerCase();
//         if (selectedWord.includes(letter)) {
//           if (!correctLetters.includes(letter)) {
//             setCorrectLetters(currentLetters => [...currentLetters, letter]);
//           } else {
//             // show(setShowNotif);
//           }
//         } else {
//           if (!wrongLetters.includes(letter)) {
//             setWrongLetters(wrongLetters => [...wrongLetters, letter]);
//           } else {
//             // show(setShowNotif);
//           }
//         }
//       }
//     }
//     window.addEventListener('keydown', handleKeydown);

//     return () => window.removeEventListener('keydown', handleKeydown);
//   }, [correctLetters, wrongLetters, playable]);

//   function playAgain() {
//     setPlayable(true);

//     // Empty Arrays
//     setCorrectLetters([]);
//     setWrongLetters([]);

//     const random = Math.floor(Math.random() * words.length);
//     selectedWord = words[random];
//   }


//   return (
//     <>
//       <div className={styles.gameContainer} >
//       <Figure wrongLetters={wrongLetters} />
//       <WrongLetters wrongLetters={wrongLetters} />
//       <Word selectedWord={selectedWord} correctLetters={correctLetters} />
//       <Popup correctLetters={correctLetters} wrongLetters={wrongLetters}  selectedWord={selectedWord} setPlayable={setPlayable} />
//       {/* <Notif showNotif={showNotif}  /> */}
//       </div>
      
//     </>
//   )
// }

// // export default HangMan
