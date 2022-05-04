import K from '../../assets/K.png'
import logo from '../../assets/logo.png'
import S from '../../assets/S.png'
import A from '../../assets/A.png'
import { Link } from 'react-router-dom'

function Banner() {
	return (
	<div className='lmj-banner'>			
		<div className='logo'>
			<img src={K} alt='logo-kasa-K' className='lmj-logo-K' />
			<img src={logo} alt='logo-kasa' className='lmj-logo' />
			<img src={S} alt='logo-kasa-S' className='lmj-logo-S' />
			<img src={A} alt='logo-kasa-A' className='lmj-logo-A' />
		</div>
		<div className='lmj-title'>
			<Link to={'/'}>Accueil</Link> {" "} <Link to={'/a-propos'}>A propos de</Link>
		</div>
	</div>
	)
}

export default Banner
