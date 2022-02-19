import React from 'react'
import styles from './Styles/PropertyPictures.module.css'

interface DrawerToggleButtonProps {
    onDrawerButtonHandler: () => void
}

const PropertyPictures: React.FC = () => {

    let images: string[] = ["https://lh3.googleusercontent.com/pw/AM-JKLUmNKsptNh6xG_hqxebLXVYEZYw94o0yuofq3TWItJ2yhrh3tctR_E5m7Uz-zwpdp1KClU-oPpXOp8_lgEO0b2MPJffsB5K0QzWkfZF--0BmT9iEr-1U5T0uAyUf_Os-r9KdHR3dM_k0dYw3VvuZscTqQ=w824-h613-no?authuser=0", "home2.jpg", "home.jpg", "home2.jpg","home.jpg", "home2.jpg", "home.jpg", "home2.jpg","home.jpg", "home2.jpg"]


    return (
        <div className={styles.container}>
            { images.map(function (image) {
                    return (
                        <div className={styles.imagecontainer}>
                            <img className={styles.image} src={image} />
                        </div>
                    )
                    })}
        </div>
        
    );
}

export default PropertyPictures;