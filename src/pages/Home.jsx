import React from 'react'
import Banner from '../components/Banner';
import Header from '../components/Header'
import ShoppingList from '../components/ShoppingList'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<React.Fragment>
			<Banner />
			<Header />
			<ShoppingList />
			<Footer />
		</React.Fragment>
	);
};

export default Home;