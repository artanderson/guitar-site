import React from "react";
import styles from './index.module.css';
import clsx from "clsx";

const Icon = ({mute, open, value, style}) => {
    return (
        <div 
            className={clsx(styles.base, mute && styles.mute, open && styles.open, (!mute && !open) && styles.finger)} 
            style={style ?? {}}
        >
            {value}
        </div>
    )
}

export default Icon;