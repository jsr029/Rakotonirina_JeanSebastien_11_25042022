import Banner from '../../components/Banner'
import Header from '../../components/Header/'
import Footer from '../../components/Footer'
import ShoppingList from '../../components/PlantItem'
function Home(){
	return (
		<div>
			<Banner />
			<Header />
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default Home