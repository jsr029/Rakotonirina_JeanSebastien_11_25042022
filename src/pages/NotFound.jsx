import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer"

const NotFound = () => {
    return (
        <div className="lmj-notFound">
            <Banner />
            <div className="lmj-notFound-bloc">
                <h2 className="lmj-notFound-title">404</h2>
                <p className="lmj-notFound-errorMessage">Oups, La page que vous demandez n'existe pas</p>
                <p className="lmj-notFound-retour">
                    <NavLink to={'/'} >Retourner sur la page d'Accueil</NavLink>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound