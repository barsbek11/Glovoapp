import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setItems } from '../redux/slices/glovoSlice'
import { CardOvelay } from './card-ovelay'

export const HomeItems = () => {
	const items = useSelector(state => state.glovo.items)
	const dispatch = useDispatch()
	useEffect(() => {
		axios
			.get(`https://637b0d8a10a6f23f7f9e4b75.mockapi.io/store-card`)
			.then(res => {
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
