import React from 'react'
import styles from './Styles/SideDrawerButton.module.css'

interface DrawerToggleButtonProps {
    onDrawerButtonHandler: () => void
}

const DrawerToggleButton: React.FC<DrawerToggleButtonProps> = ({onDrawerButtonHandler}) => {

    return (
        <button className={styles.toggle_button} onClick={onDrawerButtonHandler}>
            <div className={styles.toggle_button_line}></div>
            <div className={styles.toggle_button_line}></div>
            <div className={styles.toggle_button_line}></div>
        </button>
    );
}

export default DrawerToggleButton;