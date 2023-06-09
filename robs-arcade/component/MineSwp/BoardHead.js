import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss'
import { BiHappy, BiSad }from 'react-icons/bi'

const BoardHead = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0;

  formattedSeconds =
    formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
  let time = `${minutes}:${formattedSeconds}`;
  let status =
    props.status === "running" || props.status === "waiting" ? (
      // <i className="icon ion-happy-outline" />
      // < BiHappy />
      <div>
         <p>ALIVE! < BiHappy /></p>
      </div>
      
    ) : (
      // <i className="icon ion-sad-outline" />
      // < BiSad />
      <div>
        <p>DEAD! < BiSad /></p>
      </div>
    );
  return (
    <div className={styles.boardHead}>
      <div className={styles.flagCount}>{props.flagsUsed}</div>
      <button className={styles.reset} onClick={props.reset}>
        {status}
      </button>
      <div className={styles.timer}>{time}</div>
    </div>
  );
};

BoardHead.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default BoardHead;
