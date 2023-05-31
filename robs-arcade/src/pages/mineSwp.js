import React from 'react'
import styles from '@/styles/Home.module.css'
import App from '../../component/MineSwp/App'

export default function mineSwp() {
  return (
    <div className={styles.homeBox} >
    <div className={styles.homeText} >
      <h1>MINE SWEEPER</h1>
      <p>Heres how to play:</p>
      <p>The objective of Minesweeper is to uncover all the cells on the grid that do not contain mines while avoiding the mines themselves.</p>
      <p> Hidden among the cells are mines. Your goal is to identify the locations of these mines without detonating them.</p>
      <p>Left-click on a covered cell to uncover it. If the cell contains a mine, the game ends, and you lose. However, if the cell is empty, a number will be revealed indicating the number of mines in the adjacent cells.</p>
      <p>Use the numbers revealed on the grid to deduce the positions of mines. For example, if a cell shows the number 2, it means that out of its eight neighboring cells, two of them contain mines. Use this information to make strategic decisions.</p>
      <p>Right-click on a cell to place a flag. This is a useful tool to mark cells that you suspect contain mines. Right-clicking again on a flagged cell will remove the flag. Note that flagging cells does not impact the game mechanics but helps you keep track of potential mine locations.</p>
      <p>You win the game when you have successfully uncovered all the cells that do not contain mines. The grid should be completely clear except for the flagged cells that indicate mine locations.</p>
    </div>
    <div className={styles.homeText} >
        <App/>
    </div>
  </div>
  )
}
