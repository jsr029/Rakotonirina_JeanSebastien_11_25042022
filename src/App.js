import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'

const App = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/a-propos'>
                <Apropos />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default App