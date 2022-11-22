import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLandingAddressOpened } from '../redux/slices/glovoSlice'
import { CurrentLocation } from './currentLocation'
import { LandingAddress } from './landingAddress'

export const LandingJumbotron = () => {
	const landingAddressOpened = useSelector(
		state => state.glovo.landingAddressOpened
	)
	const dispatch = useDispatch()
	return (
		<>
			<div className='landing__jumbotron'>
				<div className='landing__jumbotron__container'>
					<div className='landing__city-picker'>
						<h1 className='landing__city'>
							<span className='title title--inverted'>
								<span className='title__city'>Доставка в городе Бишкек</span>
							</span>
						</h1>
					</div>
					<div
						show-tooltip=''
						className='address-container landing__address-input'
					>
						<div className='address-container__input-wrapper'>
							<div className='address-input__wrapper address-input__wrapper--fixed'>
								<div className='address-input'>
									<LandingAddress />
									<div
										className='address-input__container'
										onClick={() =>
											dispatch(setLandingAddressOpened(!landingAddressOpened))
										}
									>
										<div className='address-input__container__icon'>
											<img
												src='https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/icons/flag--white.svg'
												role='presentation'
												alt=''
												className='address-input__container__icon__image'
											/>
										</div>
										<div className='address-input__container__input'>
											Укажите ваш адрес
										</div>
									</div>
								</div>
								<CurrentLocation className='current-location' />
							</div>
						</div>
					</div>
					<div>
						<section>
							<div
								className='landing__categories'
								style={{ maxWidth: '650px' }}
							>
								<div className='category-bubble'>
									<Link
										to='/restorany'
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '0.5s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/prj0mlcuvmymzfh8pqjz'
											alt='Еда'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<h2 className='category-bubble-title fadeIn'>Еда</h2>
									</Link>
								</div>
								<div className='category-bubble'>
									<button
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '0.6s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/bn3rkdoqc98taxkpfvx1'
											alt='Супермаркеты'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<span className='category-bubble-title fadeIn'>
											Супермаркеты
										</span>
									</button>
								</div>
								<div className='category-bubble'>
									<button
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '0.7s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/yn87iqomg2p9h5bwpssz'
											alt='Курьер'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<span className='category-bubble-title fadeIn'>Курьер</span>
									</button>
								</div>
								<div className='category-bubble'>
									<button
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '0.8s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/o2g7fmssjbb4cvpqu1jz'
											alt='Что угодно'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>{' '}
										<span className='category-bubble-title fadeIn'>
											Что угодно
										</span>
									</button>
								</div>
								<div class='category-bubble'>
									<a
										href='/kg/ru/bishkek/zdorove-i-krasota_2282/'
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '0.9s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/ifast9tndsmzlufjlhzq'
											alt='Здоровье и красота'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<h2 className='category-bubble-title fadeIn'>
											Здоровье и красота
										</h2>
									</a>
								</div>
								<div className='category-bubble'>
									<a
										href='/kg/ru/bishkek/krasniy-polumesyac-bsk/'
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '1s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/ga9sr6rgcxhsjycy8vzy'
											alt='Твори добро'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<h2 className='category-bubble-title fadeIn'>
											Твори добро
										</h2>
									</a>
								</div>
								<div className='category-bubble'>
									<a
										href='/kg/ru/bishkek/shops-gifts_1132/'
										className='category-bubble-link category-bubble-link--bounce-in'
										style={{ animationDelay: '1.1s' }}
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/gvzyon4wmct0wn9caj6w'
											alt='магазины и подарки'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<h2 className='category-bubble-title fadeIn'>
											магазины и подарки
										</h2>
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	)
}
