import React from 'react'
import K from '../../assets/K.png'
import logo from '../../assets/logo.png'
import S from '../../assets/S.png'
import A from '../../assets/A.png'
import { NavLink } from 'react-router-dom'

function Banner() {
	return (
	<div className='lmj-banner'>			
		<div className='lmj-banner-logo'>
			<img src={K} alt='logo-kasa-K' className='lmj-banner-logo-K' />
			<img src={logo} alt='logo-kasa' className='lmj-banner-logo-A' />
			<img src={S} alt='logo-kasa-S' className='lmj-banner-logo-s' />
			<img src={A} alt='logo-kasa-A' className='lmj-banner-logo-a' />
		</div>
		<div className='lmj-title'>
			<NavLink to={'/'} className={isActive => isActive ? 'notActive' : ''}>Accueil</NavLink> {" "} 
			<NavLink to={'/a-propos'}>A propos de</NavLink>
		</div>
	</div>
	)
}

export default Banner
