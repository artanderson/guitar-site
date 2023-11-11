import React from "react";
import styles from './index.module.css';
import clsx from "clsx";
import Finger from "../finger";
import Mute from "../mute";

const Chord = ({chord}) => {
    return (
        <div>
            <h2></h2>
            <div className={styles.chord}>
                <div className={clsx(styles.frets, styles.fretsLeft)} />
                <div className={styles.frets} />
                {Array.from({length: 6}).map((_, idx) => (
                    <div key={idx} className={styles.strings} style={{gridRow: idx + 1}}>
                        <div className={styles.string} />
                    </div>
                ))}
                {Object.keys(chord).map((string, idx) => (
                    chord[string] === "mute" ?
                    <Mute key={idx} string={idx + 1} />
                    :
                    <Finger key={idx} {...chord[string]} string={idx + 1} />
                ))}
            </div>
        </div>
    )
}

export default Chord;