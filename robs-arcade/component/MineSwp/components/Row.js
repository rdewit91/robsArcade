import React from "react";
import Cell from "./Cell";
import styles from './styles.module.scss'

const Row = props => {
  let cells = props.cells.map((data, index) => (
    <Cell data={data} open={props.open} flag={props.flag} key={index} />
  ));
  return <div className={styles.row}>{cells}</div>;
};

export default Row;