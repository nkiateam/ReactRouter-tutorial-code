import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home, Company, HistorySample } from './components'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/"> 홈 </Link>
                        </li>
                        <li>
                            <Link to="company"> Company </Link>
                        </li>
                        <li>
                            <Link to="/history">History </Link>
                        </li>
                    </ul>
                        <Route exact path="/" component={Home} />
                        <Route path="/company" component={Company} />
                        <Route path="/history" component={HistorySample} />
                </div>
            </Router>

        )
    }
}

export default App
