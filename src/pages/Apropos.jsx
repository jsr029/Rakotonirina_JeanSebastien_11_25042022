import React from 'react'
import Banner from '../components/Banner'
import TopAfterBanner from '../components/TopAfterBanner'
import Fiabilite from '../components/Fiablite';

function Apropos() {
	return (
		<>
			<Banner />
			<TopAfterBanner />
			<div className='lgt-fiche-AP'>
				<Fiabilite />
			</div>
		</>
		);
};

export default Apropos;