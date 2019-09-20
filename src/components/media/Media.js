import React from 'react';
import './Media.css';

import linkedin from '../../assets/linkedin-3.svg'
import github from '../../assets/github-1.svg'
import instagram from '../../assets/instagram-11.svg'

const Media = styles => {
    return(
        <div className="media-area">
            <div className="media-content">
                <a href="https://www.linkedin.com/in/gustavo-matsuo-fuji-79a977172/" target="blank"><img src={linkedin} className="media-icon"/></a>
                <a href="https://github.com/GustavoMatsuo" target="blank"><img src={github} className="media-icon"/></a>
                <a href="https://www.instagram.com/gu_matsuo" target="blank"><img src={instagram} className="media-icon"/></a>
            </div>
            <div className="media-bar"></div>
        </div>
    )
}

export default Media;