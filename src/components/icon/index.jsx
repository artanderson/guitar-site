import React from "react";
import styles from './index.module.css';
import clsx from "clsx";

const Icon = ({mute, value, style}) => {
    if(!mute) mute = value === 5;
    return (
        <div 
            className={clsx(styles.base, mute ? styles.mute : styles.finger)} 
            style={style ?? {}}
        >
            <span>{mute ? "X" : value}</span>
        </div>
    )
}

export default Icon;