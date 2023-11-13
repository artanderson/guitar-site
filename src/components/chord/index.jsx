import React from "react";
import styles from './index.module.css';
import clsx from "clsx";
import Finger from "../finger";

const Chord = ({chord, children}) => {
    return (
        <div className={styles.chord}>
            <div className={clsx(styles.frets, styles.fretsLeft)} />
            <div className={styles.frets} />
            {Array.from({length: 6}).map((_, idx) => (
                <div key={idx} className={styles.strings} style={{gridRow: idx + 1}}>
                    <div className={styles.string} />
                </div>
            ))}
            {children && children}
            {chord && Object.keys(chord).map((string, idx) => (
                <Finger key={idx} {...chord[string]} string={idx + 1} />
            ))}
        </div>
    )
}

export default Chord;