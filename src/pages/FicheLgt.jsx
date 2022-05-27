import React from "react";
import Banner from '../components/Banner'
import FicheLogement from '../components/FicheLogement'
import Footer from '../components/Footer'
import { useTitle } from '../components/Utils/useTitle'

function FicheLgt(props) { 
    const url = window.location
    const titre = url.split('/')[4]
    console.log(titre)
    useTitle("Kasa | Fiche Logement ") 
    return(
        <React.Fragment>
            <Banner />
            <FicheLogement data={props.data}/>
            <Footer />
        </React.Fragment>
    )
}
export default FicheLgt