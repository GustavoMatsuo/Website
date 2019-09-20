import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Photo from './components/photo/Photo';
import Skill from './components/skill/Skill';
import Footer from './components/footer/Footer';
import Media from './components/media/Media'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          windowWidth: 0,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
      }
    
      componentDidMount() {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions)
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
      }
      
      updateDimensions() {
        let windowWidth = typeof window != "undefined" ? window.innerWidth : 0;
    
        this.setState({ windowWidth })
      }
    render() {
        const { windowWidth } = this.state

        const styles = {
          wide: windowWidth > 768,
        }
        
        const wide = {
          display: "flex",
          flexDirection: "row",
        }

        return(
          <div className="app"
            style={{
              
            }}
          >
            <div style={styles.wide? wide : null}>
              <Header styles={styles}/>
              <Photo styles={styles}/>
              {styles.wide ? (<Media styles={styles}/>) : null}
            </div>
            <Skill styles={styles}/>
            {styles.wide ? null : (<Footer styles={styles} />)}            
          </div>
        )
    }
}

export default App;