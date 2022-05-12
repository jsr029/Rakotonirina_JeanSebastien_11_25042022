import React from 'react'
import Banner from '../components/Banner';
import Header from '../components/Header'
import Footer from '../components/Footer'
import LogementList from '../components/LogementList';

const Home = () => {
	return (
		<React.Fragment>
			<Banner />
			<Header />
			<LogementList />
			<Footer />
		</React.Fragment>
	);
};

export default Home;