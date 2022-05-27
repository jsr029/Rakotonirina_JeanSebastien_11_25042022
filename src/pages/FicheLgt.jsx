import React from "react";
import Banner from '../components/Banner'
import FicheLogement from '../components/FicheLogement'
import Footer from '../components/Footer'
import { useTitle } from '../components/Utils/useTitle'

function FicheLgt(props) { 
    const url = window.location.href
    const titre = url.split('/')[5]
    console.log(titre)
    useTitle("Kasa | Fiche Logement "+titre) 
    return(
        <React.Fragment>
            <Banner />
            <FicheLogement data={props.data}/>
            <Footer />
        </React.Fragment>
    )
}
export default FicheLgt