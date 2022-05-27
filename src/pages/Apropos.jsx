import React from 'react'
import Banner from '../components/Banner'
import TopAfterBanner from '../components/TopAfterBanner'
import Qualite from '../components/Qualite';
import Footer from '../components/Footer'
import { useTitle } from '../components/Utils/useTitle';

function Apropos() {
	useTitle("Kasa | A propos")
	return (
		<>
			<Banner />
			<TopAfterBanner />
			<div className='lgt-fiche-AP'>
				<Qualite />
			</div>
			<Footer />
		</>
		);
};

export default Apropos;