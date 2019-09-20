import React from 'react';
import './Photo.css';

import imagePhoto from '../../assets/perfil.jpg'


const Photo = ({ styles }) => {

    const wide = {
        width: "350px"
    }

    return(
        <div className="photo-area" style={styles.wide? wide : null} >
            <div className="photo-back">
                <img src={imagePhoto} className="photo-img" />
            </div>
        </div>
    )
}

export default Photo;