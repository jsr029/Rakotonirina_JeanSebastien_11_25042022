import React from 'react'
import { logements } from '../../datas/logements'
import LogementItem from '../LogementItem'
//import { useFetch } from '../Utils/Hooks'

function LogementList() {

	return (
		<React.Fragment>
			<div className='lmj-shopping-list'>

		{logements.map(({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) =>
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
  