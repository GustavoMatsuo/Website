import React from 'react';
import './Header.css';


const Header = ({ styles }) => {
    const title = {
        fontSize: "36px"
    }
    const content = {
        fontSize: "72px"
    }
    const paragraf = {
        fontSize: "24px"
    }
    return(
        <div className="header-area">
            <div className="top-bar"></div>
            <h4 className="header-title" style={ styles.wide? title : null}>coder.</h4>
            <h1 className="header-content" style={ styles.wide? content : null}>Hi,<br/>I am Gustavo.</h1>
            <p className="header-paragraf" style={ styles.wide? paragraf : null}>Apaixonado por tecnologia e sempre a procura de desafios.</p>
        </div>
    )
}

export default Header;