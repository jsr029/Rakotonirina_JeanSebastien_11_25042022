//import { useState } from 'react'
import { logements } from '../datas/logements'
import PlantItem from './PlantItem'
//import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {
	/*const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)*/

	/*function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}*/

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
