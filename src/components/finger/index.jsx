import React from "react";
import styles from './index.module.css';
import Icon from '../icon';

const Finger = ({finger, string, fret, bar}) => {
    const mute = finger === "X";
    const open = finger === "O";

    const style = {
        gridRow: string,
        gridColumn: Math.max(fret, 1),
        alignSelf: "center",
        transform: (mute || open) && "translate(-50%)",
        margin: (!mute && !open) && "auto"
    }
    const barStyle = {
        gridRow: `${string} / ${bar + 1}`,
        gridColumn: fret
    }

    return (
        <>
        {bar && <div style={barStyle} className={styles.bar} />}
        <Icon mute={mute} open={open} value={finger} style={style}/>
        </>
    )
}

export default Finger;