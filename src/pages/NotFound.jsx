import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const NotFound = () => {
    return (
        <div className="lmj-notFound">
            <Banner />
            <div className="lmj-notFound-bloc">
                <h2 className="lmj-notFound-title">404</h2>
                <p className="lmj-notFound-errorMessage">Oups, La page que vous demandez n'existe pas</p>
                <p className="lmj-notFound-retour">
                    <Link to={'/'}>Retourner sur la page d'Accueil</Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound