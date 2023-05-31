// import React from "react";
// import styles from './styles.module.scss'

// const Cell = props => {
//   let cell = () => {
//     if (props.data.isOpen) {
//       if (props.data.hasMine) {
//         return (
//           <div
//            className={`${styles.cell} ${styles.open}`}
//             onContextMenu={e => {
//               // don't load that nasty context menu, flag it up instead :^)
//               e.preventDefault();
//             }}
//             onClick={() => props.open(props.data)}
//           >
//             <span><i className="icon ion-android-radio-button-on"></i></span>
//           </div>
//         );
//       } else if (props.data.count === 0) {
//         return (
//           <div
//            className={`${styles.cell} ${styles.open}`}
//             onContextMenu={e => {
//               // don't load that nasty context menu, flag it up instead :^)
//               e.preventDefault();
//               props.flag(props.data);
//             }}
//             onClick={() => props.open(props.data)}
//           />
//         );
//       } else {
//         return (
//           <div
//            className={`${styles.cell} ${styles.open}`}
//             onContextMenu={e => {
//               // don't load that nasty context menu, flag it up instead :^)
//               e.preventDefault();
//             }}
//             onClick={() => props.open(props.data)}
//           >
//             {props.data.count}
//           </div>
//         );
//       }
//     } else if (props.data.hasFlag) {
//       return (
//         <div
//         className={`${styles.cell} ${styles.openFlag}`}
//           onContextMenu={e => {
//             // don't load that nasty context menu, flag it up instead :^)
//             e.preventDefault();
//             props.flag(props.data);
//           }}
//           onClick={() => props.open(props.data)}
//         >
//           <span><i className={`${styles.icon} ${styles.ionFlag}`}></i></span>
//         </div>
//       );
//     } else {
//       return (
//         <div
//           className={styles.cell}
//           onContextMenu={e => {
//             // don't load that nasty context menu, flag it up instead :^)
//             e.preventDefault();
//             props.flag(props.data);
//           }}
//           onClick={() => props.open(props.data)}
//         />
//       );
//     }
//   };
//   return cell();
// };

// export default Cell;

import React from "react";
import styles from './styles.module.scss';
import { AiFillFlag } from 'react-icons/ai';
import { GiMineExplosion } from 'react-icons/gi'

const Cell = (props) => {
  let { isOpen, hasMine, count, hasFlag } = props.data;

  let handleClick = () => {
    props.open(props.data);
  };

  let handleContextMenu = (e) => {
    e.preventDefault();
    props.flag(props.data);
  };

  let cellClassNames = [styles.cell];
  if (isOpen) {
    cellClassNames.push(styles.open);
    if (hasMine) {
      return (
        <div className={cellClassNames.join(" ")} onContextMenu={handleContextMenu} onClick={handleClick}>
          <span> <GiMineExplosion/> </span>
        </div>
      );
    } else if (count === 0) {
      return (
        <div className={cellClassNames.join(" ")} onContextMenu={handleContextMenu} onClick={handleClick} />
      );
    } else {
      return (
        <div className={cellClassNames.join(" ")} onContextMenu={handleContextMenu} onClick={handleClick}>
          {count}
        </div>
      );
    }
  } else if (hasFlag) {
    cellClassNames.push(styles.openFlag);
    return (
      <div className={cellClassNames.join(" ")} onContextMenu={handleContextMenu} onClick={handleClick}>
        <span> < AiFillFlag /> </span>
      </div>
    );
  } else {
    return (
      <div className={cellClassNames.join(" ")} onContextMenu={handleContextMenu} onClick={handleClick} />
    );
  }
};

export default Cell;