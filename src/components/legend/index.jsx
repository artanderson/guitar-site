import React from "react";
import styles from "./index.module.css";
import Chord from "../chord";
import Icon from "../icon";

const Legend = () => {
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
                {["e", "b", "g", "d", "a", "E"].map((string, idx) => {
                    let sty = style(idx + 1)
                    return (
                        <Icon key={idx} value={string} open style={sty} />
                )})}
                <div className={styles.bar} />
                <span className={styles.barLabel}>Bar</span>
                <div className={styles.icons} style={{gridRow: "1 / 7", gridColumn: "3 / 6"}}>
                    <div><Icon value="X" mute /><span>Mute</span></div>
                    <div><Icon value="O" open /><span>Open</span></div>
                    {Array.from({length: 4}).map((_, idx) => (
                        <div  key={idx}><Icon value={idx + 1} /><span>{idx === 0 ? "Pointer" : idx === 1 ? "Middle" : idx === 2 ? "Ring" : "Pinky"} finger</span></div>
                    ))}
                </div>
            </Chord>
        </div>
    )
}

export default Legend;