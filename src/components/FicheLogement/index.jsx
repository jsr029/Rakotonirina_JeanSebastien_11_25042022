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
						<>
							<div className='lgt-fiche-underImg-bloc' key={a+4}>
								<div className='lgt-fiche-title-bloc'>
									<div className='lgt-fiche-title'>
										{d.title}
									</div>
									<div className='lgt-fiche-location'>
										{d.location}
									</div>
								</div>
								<div className='lgt-fiche-host-bloc'>
									<div className='lgt-fiche-host'>
										<div className='lgt-host-name'>
											{d.host.name}
										</div>
										<div className='lgt-host-pict'>
											<img src={d.host.picture} alt={'Photo de profil de : '+d.host.name} />
										</div>
									</div>
								</div>									
							</div>
							<div className='lgt-fiche-tagsRatingBloc' key={a+5}>
								<div className='lgt-fiche-tags'>
									{d.tags.map(t => <span>{t}</span> )}
								</div>
								<div className='lgt-fiche-rating'>
									{d.rating}
								</div>
							</div>
						</>
						) : ''
					)}
			</div>
		</>
	)

}
  
export default FicheLogement;
