import Background from '../../assets/Background.png'
import { Link } from 'react-router-dom'
import React from 'react'

function LogementItem({ id, title, cover, pictures, description, host, rating, location, equipments, tags }) {
return (
    <React.Fragment>
        <div className='lmj-layout-inner'>
                    <Link to={'fiche-logement/'+id+'/'+title.replace(/\s+/g, '-').toLowerCase()}>
                    <div className='lmj-plant-item'>
                        <img className='lmj-plant-item-cover' src={cover} alt={`${cover}`} />
                        <img className="lmj-plant-item-background" src={Background} alt={`${id}`} />
                        <div className="lmj-plant-item-title">{title}</div>
                    </div>
                    </Link>
                </div>
    </React.Fragment>    
	)
}

export default LogementItem