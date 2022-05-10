import React from 'react';
import { useFetch } from '../../components/Utils/Hooks/index'
import SliderLgt from '../../components/SliderLgt'

function FicheLogement() {
	const urlW = window.location.href
	const urlId = urlW.split('/')[4]

	const { data, isLoading, error } = useFetch(
		`http://127.0.0.1:3000/json/logements.json`
	)
	console.log(data)
	if (error) {
		return <span>Il y a un problème</span>
	}
	

	return isLoading ?  (<div className='loader'>Chargement...</div>) : 
	(
		<>
		<SliderLgt />
			<div className='lgt-fiche'>						
					{data && data.length && data.map((d,a) =>
					(urlId === d.id) ? (
							<div className='lgt-fiche-underImg-bloc' key={a+4}>
								<div className='lgt-fiche-title'>
									{d.title}
								</div>
								<div className='lgt-fiche-rating'>
									<span>Rating : {d.rating}</span>
								</div>
							</div>
						) : ''
					)}
				</div>
		</>
	)

}
  
export default FicheLogement;
