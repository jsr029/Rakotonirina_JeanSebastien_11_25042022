import React, { useState } from 'react'
import K from '../../assets/K.png'
import logo from '../../assets/logo.png'
import S from '../../assets/S.png'
import A from '../../assets/A.png'
import { Link } from 'react-router-dom'

function Banner() {
	const [active, setActive] = useState([])
	function handleClick(){
		setActive((prevState) => (!prevState ));
	}
	const [active1, setActive1] = useState([])
	function handleClick1(){
		setActive1((prevState) => (!prevState ));
	}
	return (
	<div className='lmj-banner'>			
		<div className='lmj-banner-logo'>
			<img src={K} alt='logo-kasa-K' className='lmj-banner-logo-K' />
			<img src={logo} alt='logo-kasa' className='lmj-banner-logo-A' />
			<img src={S} alt='logo-kasa-S' className='lmj-banner-logo-s' />
			<img src={A} alt='logo-kasa-A' className='lmj-banner-logo-a' />
		</div>
		<div className='lmj-title'>
			<Link to={'/'} className={active ? 'active' : 'notActive'} onClick={handleClick}>Accueil</Link> {" "} <Link to={'/a-propos'} className={active1 ? 'notActive' : 'active'} onClick={handleClick1}>A propos de</Link>
		</div>
	</div>
	)
}

export default Banner
