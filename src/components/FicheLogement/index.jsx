import React from 'react';
//import { logements } from '../../datas/logements'
import { useFetch } from '../../components/Utils/Hooks/index'

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
			<div className="wrapper">
				<div className="slideshows">
					<div className="slideshow slideshow--hero">
				{
					data && data.length>0 && data.map((item, i) => 
					(urlId === item.id)  ?  (
							item.pictures.map((p, n)=>(
								<div className={'slides slides'+ (n+1)} key={p+1}>
									<img src={p} alt={'image '+ item.title} key={p}/>
								</div>
							))
						) 
						: ''
						)
				}
					</div>
				</div>
			</div>
					{data && data.length && data.map((d,a) =>
					(urlId === d.id) ? (
						<div className='lgt-fiche' key={a+4}>
							<div className='lgt-fiche-underImg-bloc'>
								<div className='lgt-fiche-title'>
									{d.title}
								</div>
								<div className='lgt-fiche-rating'>
									<span>Rating : {d.rating}</span>
								</div>
							</div>
						</div>
						) : ''
					)}
		</>
	)
}
  
export default FicheLogement;
