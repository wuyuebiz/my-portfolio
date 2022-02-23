import React, {Component} from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import history from './history'
import HomePage from './pages/homepage'
import Portfolio from './pages/portfolio'
import AboutMe from './pages/aboutme'
class App extends Component {

  render() {
    return (
          <Router history={ history }>
            <Switch>
              <Route exact path='/' component={ HomePage }/>
              <Route path='/portfolio' component={ Portfolio }/>
              <Route path='/aboutme' component={ AboutMe }/>
            </Switch>
          </Router>
      )
    }
}

export default App
