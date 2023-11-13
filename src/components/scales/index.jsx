import React, { useState } from "react";
import styles from "./index.module.css";
import { notesConstant, getScale, steps } from '../scripts';
import clsx from "clsx";

const Scales = () => {
    const [note, setNote] = useState("C");
    const [type, setType] = useState("Major")
	const [scale, setScale] = useState(getScale(note, type));
    let notes = [...notesConstant.flat(Infinity)];

    const handleNote = (n) => {
        setNote(n);
        setScale(getScale(n, type));
    }
    const handleType = (t) => {
        setType(t);
        setScale(getScale(note, t));
    }

    return (
        <div className={styles.scales}>
            <div className={styles.scalesContent}>
                <div className={styles.steps}>
                    {Object.keys(steps).map((step, idx) => (<div key={idx} className={clsx(styles.step, step === type && styles.active)} onClick={() => handleType(step)}>{step}</div>))}
                </div>
                <div className={styles.notes}>
                    {notes.map(n => (<div key={n} className={clsx(styles.note, n === note && styles.active)} onClick={() => handleNote(n)}>{n}</div>))}
                </div>
                <div>
                    <h3>Scale</h3>
                    <div className={styles.scale}>
                        {scale.map((n, idx) => (
                            <div key={idx} className={styles.scaleNote}>
                                <div className={styles.pos}>{idx + 1}</div>
                                <div className={styles.posNote}>{n}</div>
                            </div>  
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scales;