//import { useState } from 'react'
import { logements } from '../../datas/logements'
import PlantItem from '../PlantItem'

function ShoppingList() {

	return (
		<div className='lmj-shopping-list'>

			<ul className='lmj-plant-list'>
				{logements.map(({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) =>
					 (
						<div key={id}>
							<PlantItem
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
			</ul>
		</div>
	)
}

export default ShoppingList
