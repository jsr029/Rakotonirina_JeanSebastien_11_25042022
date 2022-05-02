import Background from '../../assets/Background.png'

function PlantItem({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) {
	return (
	<div className='lmj-layout-inner'>
		<div className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${cover}`} />
			<img className="lmj-plant-item-background" src={Background} alt={`${id}`} />
			<div className="lmj-plant-item-title">{title}</div>
		</div>
	</div>
	)
}

export default PlantItem
