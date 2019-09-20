import React from 'react';
import './Footer.css';

import linkedin from '../../assets/linkedin-3.svg'
import github from '../../assets/github-1.svg'
import instagram from '../../assets/instagram-11.svg'

const Footer = styles => {
    return(
        <div className="footer-area">
            <div className="footer-content">
                <a href="https://www.linkedin.com/in/gustavo-matsuo-fuji-79a977172/" target="blank"><img src={linkedin} className="footer-icon"/></a>
                <a href="https://github.com/GustavoMatsuo" target="blank"><img src={github} className="footer-icon"/></a>
                <a href="https://www.instagram.com/gu_matsuo" target="blank"><img src={instagram} className="footer-icon"/></a>
            </div>
           <p>made with ♡ by Gustavo Matsuo Fuji</p>
        </div>
    )
}

export default Footer;