import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.jsx'
import Apropos from './pages/Apropos.jsx'
import NotFound from "./pages/NotFound.jsx";
import FicheLgt from "./pages/FicheLgt.jsx";
import { useFetch } from './components/Utils/Hooks'

function App() {
    const DataFetch = React.createContext()
	const { data, isLoading, error } = useFetch(
		`https://jsr029.github.io/Rakotonirina_JeanSebastien_11_25042022/json/logements.json`
	)

    return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <DataFetch.Provider  value={data} >
                    <Home 
                    data={data} 
                    isLoading={isLoading} 
                    error={error} 
                    />
                </DataFetch.Provider>
            </Route>
            <Route path='/a-propos'>
                <Apropos />
            </Route>
            <Route path='/fiche-logement/:id/:title'>
                <DataFetch.Provider  value={data}>
                <FicheLgt data={data} isLoading={isLoading} error={error} />
                </DataFetch.Provider>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default App