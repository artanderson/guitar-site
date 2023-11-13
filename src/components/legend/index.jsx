import React from "react";
import styles from "./index.module.css";
import Chord from "../chord";
import Icon from "../icon";

const Legend = ({fingers}) => {
    const style = (row) => {
        return {
            gridRow: row,
            gridColumn: 1,
            alignSelf: "center",
            transform: "translate(-50%)",
        }
    }
    return (
        <div className={styles.legend}>
        <Chord>
            {["e", "B", "G", "D", "A", "E"].map((string, idx) => {
                let sty = style(idx + 1)
                return (
                    <Icon key={idx} value={string} open style={sty} />
            )})}
            <div className={styles.bar} />
            <span className={styles.barLabel}>Bar</span>
            <div className={styles.icons} style={{gridRow: "1 / 7", gridColumn: "3 / 6"}}>
                {fingers.map((finger, idx) => (
                    <div  key={idx}><Icon value={finger[0]} /><span>{finger[1]} {![0,5].includes(finger[0]) && "finger"}</span></div>
                ))}
            </div>
        </Chord>
        </div>
    )
}

export default Legend;