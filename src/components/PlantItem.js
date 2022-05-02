//import CareScale from './CareScale'

import Background from '../assets/Background.png'
function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) {
	return (
		<div className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${cover}`} />
			<img className="lmj-plant-item-background" src={Background} alt={`${id}`} />
			<div className="lmj-plant-item-title">{title}</div>
		</div>
	)
}

export default PlantItem
