import React from "react";
import styles from './styles.module.scss'
// import AiFillFlag from 'react-icons/ai'

const Cell = props => {
  let cell = () => {
    if (props.data.isOpen) {
      if (props.data.hasMine) {
        return (
          <div
            class="cell open"
            className={styles.open}
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            <span><i className="icon ion-android-radio-button-on"></i></span>
          </div>
        );
      } else if (props.data.count === 0) {
        return (
          <div
            // className="cell open"
            className={styles.open}
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
              props.flag(props.data);
            }}
            onClick={() => props.open(props.data)}
          />
        );
      } else {
        return (
          <div
            // className="cell open"
            className={styles.open}
            onContextMenu={e => {
              // don't load that nasty context menu, flag it up instead :^)
              e.preventDefault();
            }}
            onClick={() => props.open(props.data)}
          >
            {props.data.count}
          </div>
        );
      }
    } else if (props.data.hasFlag) {
      return (
        <div
          className="cell open-flag"
          // className={styles.cell.open}
          onContextMenu={e => {
            // don't load that nasty context menu, flag it up instead :^)
            e.preventDefault();
            props.flag(props.data);
          }}
          onClick={() => props.open(props.data)}
        >
          <span><i className="icon ion-flag"></i></span>
          {/* <span><i> <  AiFillFlag/> </i></span> */}
         
        </div>
      );
    } else {
      return (
        <div
          className={styles.cell}
          onContextMenu={e => {
            // don't load that nasty context menu, flag it up instead :^)
            e.preventDefault();
            props.flag(props.data);
          }}
          onClick={() => props.open(props.data)}
        />
      );
    }
  };
  return cell();
};

export default Cell;