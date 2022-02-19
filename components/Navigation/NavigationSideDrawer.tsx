import React from "react";
import styles from './Styles/SideDrawerNav.module.css'

const SideDrawer = props => (
    <nav className={styles.side_drawer}>
        <ul>
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/">Contacts</a></li>
            <li><a href="/">Calendar</a></li>
            <li><a href="/">Log Out</a></li>
        </ul>
    </nav>
)

export default SideDrawer