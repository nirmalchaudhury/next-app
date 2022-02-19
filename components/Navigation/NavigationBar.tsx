import React from 'react'
import DrawerToggleButton from './NavigationSideDrawerButton'
import styles from './Styles/NavBar.module.css'


interface NavigationBarProps {
    onDrawerButtonHandler: () => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({onDrawerButtonHandler}) => {

    return (
        <header className={styles.menu_navbar}>
            <nav className={styles.navbar_navigation}>
                <div>
                    <DrawerToggleButton onDrawerButtonHandler={onDrawerButtonHandler}/>
                </div>
                <div className={styles.navbar_logo}><a href="/">706 Juneberry Lane</a></div>
                <div className={styles.spacer} />
                <div className= {styles.navbar_items}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Contacts</a></li>
                        <li><a href="/">Calendar</a></li>
                        <li><a href="/">Log Out</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavigationBar;