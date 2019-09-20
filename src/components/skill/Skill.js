import React from 'react';
import './Skill.css';


const Skill = ({ styles }) => {

    const bar = {
        marginBottom: "60px"
    }
    const content = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
    const wide = {
        display: "flex",
        flexDirection: "row",
        width: "40%",
        justifyContent: "space-between",
        marginLeft: "0px",
        marginRight: "0px"
    }
    
    return(
        <div className="skill-area">
            <div className="skill-top" style={ styles.wide? bar : null}></div>
            <div className="skill-content" style={ styles.wide? content : null}>
                <div className="skill-column" style={ styles.wide? wide : null}>
                    <h3 className="skill-item">Javascript</h3>
                    <h3 className="skill-item">ReactJS</h3>
                    <h3 className="skill-item"style={ styles.wide? {paddingRight: "30px"} : null}>SQL</h3>
                </div>
                <div className="skill-column" style={ styles.wide? wide : null}>
                    <h3 className="skill-item" style={ styles.wide? {paddingLeft: "30px"} : null}>CSS</h3>
                    <h3 className="skill-item">React Native</h3>
                    <h3 className="skill-item">C#</h3>
                </div>
            </div>
        </div>
    )
}

export default Skill;