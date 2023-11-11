import React from "react";
import styles from './index.module.css';

const Finger = ({finger, string, fret, bar}) => {
    const style = {
        gridRow: string,
        gridColumn: fret
    }

    return (
        <div className={styles.finger} style={style}>
            {finger}
        </div>
    )
}

export default Finger;