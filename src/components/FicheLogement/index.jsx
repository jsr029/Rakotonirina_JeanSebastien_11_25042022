import React from 'react';
//import { logements } from '../../datas/logements'
import { useFetch } from '../../components/Utils/Hooks/index'
import Background from '../../assets/Background.png';



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
		<div className='lmj-shopping-list'>
		<div className='lmj-plant-list'>
            <div className="lmj-layout-inner">
            {
                data && data.length>0 && data.map((item)=>
                (urlId === item.id)  ?  (
					<li className='lmj-plant-item' key={'fiche-lgt'+ item.id}>
                        <img className='lmj-plant-item-cover' src={item.cover} alt={`${item.cover}`} />
                        <img className="lmj-plant-item-background" src={Background} alt={item.id} />
                        <div className="lmj-plant-item-title">{item.title}</div>
                    </li>) : ''
                    )
            }
            </div>
        </div>
    </div>
	)
}
  
  export default FicheLogement;
  