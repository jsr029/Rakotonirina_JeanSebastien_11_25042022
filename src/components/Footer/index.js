import React from 'react'
import K from '../../assets/k-footer.png'
import A from '../../assets/a-footer.png'
import s from '../../assets/s-footer.png'
import a from '../../assets/aa-footer.png'
function Footer() {
	
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-logo'>
			<img src={K} alt='logo K' className="lmj-k-footer"/>
			<img src={A} alt='logo A' className="lmj-aImg-footer"/>
			<img src={s} alt='logo S' className="lmj-s-footer"/>
			<img src={a} alt='logo a' className="lmj-a-footer"/>
			</div>
			<div className="lmj-footer-text">&copy; Kasa, All rights reserved</div>
		</footer>
	)
}

export default Footer
