import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Company } from './components'

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/company" component={Company} />
            </Router>
        )
    }
}

export default App
