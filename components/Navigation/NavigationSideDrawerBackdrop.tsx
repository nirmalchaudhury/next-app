import React from 'react'
import styles from './Styles/backdrop.module.css'

interface NavDrawerBackdropProps {
    onDrawerButtonHandler: () => void
}

const NavDrawerBackdrop: React.FC<NavDrawerBackdropProps> = ({onDrawerButtonHandler}) => {
    return (
        <div className={styles.backdrop} onClick={onDrawerButtonHandler}/>
    );
}

export default NavDrawerBackdrop;