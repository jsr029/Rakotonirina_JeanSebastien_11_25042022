import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'
import NotFound from "./pages/NotFound.jsx";
import FicheLgt from "./pages/FicheLgt.jsx";


function App() {
    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/a-propos'>
                <Apropos />
            </Route>
            <Route path='/fiche-logement/:id/:title'>
                <FicheLgt />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default App