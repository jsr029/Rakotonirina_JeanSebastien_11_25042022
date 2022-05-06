import React from 'react'
import Banner from '../components/Banner';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FicheLogement from '../components/FicheLogement';

const Home = () => {
	return (
		<React.Fragment>
			<Banner />
			<Header />
			<FicheLogement />
			<Footer />
		</React.Fragment>
	);
};

export default Home;