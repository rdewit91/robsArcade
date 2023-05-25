import React from "react";
import styles from './styles.module.css';

function Cell(props){
    const { cellIndex, isOn, toggleLight } = props;

    function handleToggleLight() {
        toggleLight(cellIndex);
        
    }

    return (
        // <button 
        //     className={isOn?"Cell-on":"Cell-off"} 
        //     onClick={handleToggleLight}
        // ></button>
        <button 
    className={isOn ? styles['Cell-on'] : styles['Cell-off']} 
    onClick={handleToggleLight}
        ></button>
    );
}

export default Cell;