import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'
import NotFound from "./pages/NotFound.jsx";


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
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}
export default App