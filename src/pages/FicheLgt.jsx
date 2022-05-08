import React from "react";
import Banner from '../components/Banner'
import FicheLogement from '../components/FicheLogement'
import Footer from '../components/Footer'

function FicheLgt() {  
    return(
        <React.Fragment>
            <Banner />
            <FicheLogement />
            <Footer />
        </React.Fragment>
    )
}
export default FicheLgt