import React from 'react'
import LogementItem from '../LogementItem'

function LogementList({ data, error, isLoading }) {
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
  