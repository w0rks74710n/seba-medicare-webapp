import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import { Home } from '../'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Route exact path="/" component = { Home }/>
        </div>
      </div>
    );
  }
}

export default App;