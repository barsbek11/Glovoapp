// import { FaAngleDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { CorparateContainer } from '../components/corporate-container'
import { Footer } from '../components/footer'
import { HomeItems } from '../components/homeItems'
import { LandingJumbotron } from '../components/landingJumbotron'
import { LandingLinks } from '../components/landingLinks'
import { Search } from '../components/search'

export const Home = () => {
	const home = useSelector(state => state.glovo.home)
	const searchResultOpened = useSelector(
		state => state.glovo.searchResultOpened
	)
	return (
		<>
			{home ? (
				<div>
					<LandingJumbotron />
					<HomeItems />
					<LandingLinks />
					<CorparateContainer />
					<Footer />
				</div>
			) : (
				<Search />
			)}
		</>
	)
}
