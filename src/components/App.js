import { useState, useEffect } from 'react'
import Banner from './Banner'
import Header from './Header'
import Background from '../assets/Background.png'
import Img from '../assets/IMG.png'
import K from '../assets/K.png'
import logo from '../assets/logo.png'
import S from '../assets/S.png'
import A from '../assets/A.png'
//import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
			<div className='logo'>
				<img src={K} alt='logo-kasa-K' className='lmj-logo-K' />
				<img src={logo} alt='logo-kasa' className='lmj-logo' />
				<img src={S} alt='logo-kasa-S' className='lmj-logo-S' />
				<img src={A} alt='logo-kasa-A' className='lmj-logo-A' />
			</div>
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<Header>
				<img src={Img} alt='bg-kasa' className='lmj-bg-img' />
				<img src={Background} alt='bg-kasa' className='lmj-bg-bg' />
				<span className='lmj-header-title'>Chez vous, partout et ailleurs</span>
			</Header>
			<div className='lmj-layout-inner'>
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
