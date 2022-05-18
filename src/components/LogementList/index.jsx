import React from 'react'
import { useFetch } from '../Utils/Hooks'
import LogementItem from '../LogementItem'
import ShowProps from '../ShowProps'

function LogementList() {
	const { data, isLoading, error } = useFetch(
		`http://127.0.0.1:3000/json/logements.json`
	)
	if (error) {
		return <span>Il y a un problème</span>
	}	
	return isLoading ?  (<div className='loader'>Chargement...</div>) : 

	(
		<React.Fragment>
			<div className='lmj-shopping-list'>
		{data && data.length>0 && data.map(({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) =>
						(
							<div className='lmj-plant-list' key={id}>
								<LogementItem
									id={id}
									title={title}
									cover={cover}
									pictures={pictures}
									description={description}
									host={host}
									rating={rating}
									location={location}
									equipments={equipments}
									tags={tags}
								/>
							</div>
						)
					)}
			</div>
		</React.Fragment>
	)
}

export default LogementList
  