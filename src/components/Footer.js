import { useState } from 'react'
import K from '../assets/k-footer.png'
import A from '../assets/a-footer.png'
import s from '../assets/s-footer.png'
import a from '../assets/aa-footer.png'
function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-logo'>
			<img src={K} alt='logo K' className="lmj-k-footer"/>
			<img src={A} alt='logo A' className="lmj-aImg-footer"/>
			<img src={s} alt='logo S' className="lmj-s-footer"/>
			<img src={a} alt='logo a' className="lmj-a-footer"/>
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
			<div className="lmj-footer-text">&copy; Kasa, All rights reserved</div>
		</footer>
	)
}

export default Footer
