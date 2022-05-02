import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/main.css'
import Home from './pages/Home'
import Apropos from './pages/Apropos'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/apropos">
                <Apropos />
            </Route>
        </Router>
    </React.StrictMode>
)
