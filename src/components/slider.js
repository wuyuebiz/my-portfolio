import React, {Component} from 'react'
import Typist from 'react-typist';
import randomString from 'random-string'
import Particles from 'react-particles-js';

class Slider extends Component {

  state = {
    typistKey : randomString({
      length: 8,
      numeric: false,
      letters: true,
      special: false,
      intervalId: null,
    })
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 10000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  timer = () => {
  // setState method is used to update the state
    this.setState({ typistKey: randomString({
      length: 8,
      numeric: false,
      letters: true,
      special: false,
    }) });
  }
  render() {
    
    return (
      <section className="main_slider_area">
        <Particles
            params={{
              "particles": {
                "number": {
                    "value": 100
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
          }} />
        <div className="main_title">
          <div>
            <h1 className="Subtitle is-h1" style={{ opacity: '1'}}>
              <span className="is-display-block">I build great apps </span><br/>
              
              <Typist key = {this.state.typistKey}>
                <span>with React, Vue and Angular</span>
                <Typist.Backspace count={22} delay={300} />
                <span>Node, Django and PHP</span>
                <Typist.Backspace count={20} delay={300} />
                <span>Amazon serverless</span>
                <Typist.Backspace count={17} delay={300} />
              </Typist>
            </h1>
              
          </div>
          
        </div>
      
      </section>
    )
  }
}

export default Slider