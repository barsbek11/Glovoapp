import axios from 'axios'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SearchContext } from '../App'
import { setItems } from '../redux/slices/glovoSlice'
import { CardOvelay } from './card-ovelay'

const URL = process.env.REACT_APP_API_URL

export const HomeItems = () => {
	const items = useSelector(state => state.glovo.items)
	const dispatch = useDispatch()

	const { searchValue } = useContext(SearchContext)
	const searchRequest = searchValue ? `&search=${searchValue}` : ''

	// ${categoryBy}&sortBy=${sortBy}&order=${orderBy}&page=${currentPage}&limit=3

	useEffect(() => {
		axios.get(`${URL}?${searchRequest}`).then(res => {
			dispatch(setItems(res.data))
		})
	}, [])

	const products = items.map(obj => <CardOvelay key={obj.id} {...obj} />)
	return (
		<>
			<div className='city-highlights'>
				<img
					src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/curve--small.svg'
					alt=''
					className='city-highlights__curve'
				/>
				<div className='landing-highlights container'>
					<div className='landing-highlights container'>
						<h3 className='highlights-title landing-highlights__title'>
							<span className='highlights-title__normal'>
								<span className='highlights-title__highlighted'>
									<span className='highlights-title__highlighted__text'>
										Еда
									</span>
								</span>
								рядом с вами
							</span>
						</h3>
						<div className='collection hidden-when-search landing-hightlights-collection cols highlights-store-collection'>
							{products}
						</div>
						<div className='landing-highlights__view-all'>
							<Link to='/restorany'>Смотреть другие рестораны </Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
