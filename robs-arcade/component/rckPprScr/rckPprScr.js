import React from 'react'
import { useState } from 'react'
import styles from './rckPprScr.module.css'
import { FaHandRock, FaHandScissors, FaHandPaper } from 'react-icons/fa'

const actions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

const randomAction = () => {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length)

  return keys[index];
};

const calcWinner= (action1, action2) => {
   if (action1 === action2) {
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  } else if (actions[action2] === action1) {
    return 1;
  }
  return null;
};

const ActionIcon = ({action, ...props}) => {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };
  const Icon = icons[action]
  return (<Icon {...props} />)
}

const Player = ({name = 'Player', action = 'rock'}) => {
  return (
    <div className={styles.bckGrnd} > 
      <h3>{`${name}`}</h3>
        <div className={styles.playBox} >
         <div>
           {action && <ActionIcon action={action} size={60} />}  
         </div>
      </div>
    </div>
  )
}

// const Player = ({name = 'Player', score = 0, action = 'rock'}) => {
//   return (
//     <div className='player' > 
//       <h2 className={styles.bckGrnd} >YOU</h2>
//         <div className='score' >{`${name}: ${score}`}</div>
//         <div className={styles.playBox} >
//            <div className='action' >
//              {action && <ActionIcon action={action} size={60} />}
//            </div>
//         </div>
//     </div>
//   )
// }

const ActionButton = ({action = 'rock', onActionSelect}) => {
  return (
    <button className={styles.bttnBttn} onClick={() => onActionSelect(action)} > 
      <ActionIcon action={action} size={30} />
    </button>
  )
}



const ShowWinner = ({winner}) => {
  const text = {
  '-1': 'YOU WIN! PLAY CONNECT FOUR!',
    0: 'ITS A TIE! PLAY MINE SWEEPER',
    1: 'YOU LOSE! PLAY SPACE INVADERS',
    null: "GAME START!",
  };
  return <h2>{text[winner]}</h2>;
  
}

export default function rckPprScr() {
  const [playerAction, setPlayerAction] = useState('');
  const [compAction, setCompAction] = useState('')
  
  // const [playerScore, setPlayerScore] = useState(0)
  // const [compScore, setCompScore] = useState(0)
  const [winner, setWinner] = useState(null)
  // const [gameStarted, setGameStarted] = useState(false);

  const onActionSelect = (selectAction) => {
    // setPlayerAction(selectAction)
    const newCompAction = randomAction();
    setPlayerAction(selectAction);
    setCompAction(newCompAction);
    const newWinner = calcWinner(selectAction, newCompAction)
    setWinner(newWinner)
    // setGameStarted(true);
    // if (newWinner === -1) {
    //   setPlayerScore(playerScore + 1)
    // } else if (newWinner === 1) {
    //   setCompScore(compScore + 1)
    // };
  }



  return (
    <>
      <div className={styles.gameBox} >
        <div  >
            <h2>LETS PLAY!!!</h2>
        </div>
        <div className='container' >
          <div className={styles.iconBox} >
            < Player name='YOU' action={playerAction} />
            < Player name='ME' action={compAction}/>
          </div>
        </div>
        <div className={styles.bttnBox} >
          <ActionButton action='rock' onActionSelect={onActionSelect}/>
          <ActionButton action='paper' onActionSelect={onActionSelect}/>
          <ActionButton action='scissors' onActionSelect={onActionSelect}/>
        </div>
        < ShowWinner winner={winner}/>
      </div>
    </>
  )
}
