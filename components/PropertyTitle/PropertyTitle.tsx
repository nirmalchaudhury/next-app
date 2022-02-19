import React from 'react'
import styles from './Styles/PropertyTitle.module.css'

interface DrawerToggleButtonProps {
    onDrawerButtonHandler: () => void
}

const PropertyTitle: React.FC = () => {

    return (
        <div className={styles.container}>
            <img className={styles.titleimg} src="home.jpg" alt="Girl in a jacket" />
            {/* <div className={styles.centered}> 
                <h1>571 Vivera Place</h1>
                <h2> $2,295.000/month + Utitlies </h2>
                <h2> Available May 1st, 2022 </h2>
            </div> */}
        </div>
        
    );
}

export default PropertyTitle;