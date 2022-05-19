import React from "react";
import Banner from '../components/Banner'
import FicheLogement from '../components/FicheLogement'
import Footer from '../components/Footer'

function FicheLgt(props) {  
    return(
        <React.Fragment>
            <Banner />
            <FicheLogement data={props.data}/>
            <Footer />
        </React.Fragment>
    )
}
export default FicheLgt