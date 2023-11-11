import React from "react";
import styles from './index.module.css';

const Mute = ({string}) => {
    const style = {
        gridRow: string
    }
    return (
        <div className={styles.mute} style={style}>
            X
        </div>
    )
}

export default Mute;