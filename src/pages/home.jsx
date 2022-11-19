// import { FaAngleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { LandingAddress } from '../components/landingAddress'
import { setOpened } from '../redux/slices/glovoSlice'

export const Home = () => {
	const opened = useSelector(state => state.glovo.opened)
	const dispatch = useDispatch()

	return (
		<>
			<div className='landing__jumbotron'>
				<div className='landing__jumbotron__container'>
					<div className='landing__city-picker'>
						<h1 className='landing__city'>
							<span className='title title--inverted'>
								<span className='title__city'>
									Доставка в городе БишкекName
								</span>
							</span>
						</h1>
					</div>
					<div
						show-tooltip=''
						className='address-container landing__address-input'
					>
						<div className='address-container__input-wrapper'>
							<div className='address-input__wrapper address-input__wrapper--fixed'>
								<div
									data-test-id='address-input-title'
									className='address-input__title'
									// style='animation-duration: 200ms;'
								>
									<span>
										Введите ваш адрес, чтобы увидеть
										<br className='visible-mobile' />
										<span className='v-highlight v-highlight--white  v-highlight--medium v-highlight--undefined'>
											<mark className='v-highlight-text v-highlight-text--medium'>
												<span>заведения возле вас</span>
											</mark>
										</span>
									</span>
								</div>{' '}
								<div className='address-input'>
									<div className='address-input__container'>
										<div className='address-input__container__icon'>
											<img
												src='https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/icons/flag--white.svg'
												role='presentation'
												alt=''
												className='address-input__container__icon__image'
											/>
										</div>
										<div
											data-test-id='address-input-placeholder'
											className='address-input__container__input'
										>
											<span className='address-input__container__input--blinking'>
												|
											</span>
											Укажите ваш адрес
										</div>
									</div>
								</div>
							</div>
							<div className='current-location-wrapper'>
								<div>
									<div className='current-location current-location--insideAddressInput'>
										<img
											loading='lazy'
											src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location.svg'
										/>
										<div className='current-location__text'>
											Name Текущее местоположение
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<section data-test-id='bubbles-desktop'>
							<div
								className='landing__categories'
								// style='max-width:650px;'
							>
								<div className='category-bubble'>
									<a
										href='/kg/ru/bishkek/restorany_1/'
										className='category-bubble-link category-bubble-link--bounce-in'
										// style='animation-delay:0.5s;'
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/prj0mlcuvmymzfh8pqjz'
											alt='Еда'
											className='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<h2 className='category-bubble-title fadeIn'>Еда</h2>
									</a>
								</div>
								<div className='category-bubble'>
									<button
										className='category-bubble-link category-bubble-link--bounce-in'
										// style='animation-delay:0.6s;'
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/bn3rkdoqc98taxkpfvx1'
											alt='Супермаркеты'
											class='category-bubble-icon fadeIn'
											width='60'
											height='60'
										/>
										<span className='category-bubble-title fadeIn'>
											Супермаркеты
										</span>
									</button>
									<div
										className='modal-wrapper bubble-modal'
										// style='display: none; top: -92px; left: 560.8px;'
									>
										<div className='bubble-modal__background'></div>
										<div className='bubble-modal__container'>
											<div id='focusGuardStart' tabindex='0'></div>
											<div className='bubble-modal__background--bubbles'>
												<div
													className='bubble-modal__category-bubble-container'
													// style='transform: rotate(0deg) translate(110px) rotate(0deg);'
												>
													<div className='category-bubble' tabindex='0'>
														<a
															href='/kg/ru/bishkek/supermarkety_4/'
															className='category-bubble-link'
														>
															<h2 className='category-bubble-title fadeIn'>
																Супермаркеты
															</h2>
														</a>
													</div>
												</div>
												<div
													className='bubble-modal__category-bubble-container'
													// style='transform: rotate(180deg) translate(110px) rotate(-180deg);'
												>
													<div className='category-bubble' tabindex='0'>
														<a
															href='/kg/ru/bishkek/alkogol-i-tabak_6568/'
															className='category-bubble-link'
														>
															<h2 className='category-bubble-title fadeIn'>
																Алкоголь и табак
															</h2>
														</a>
													</div>
												</div>
												<div id='focusGuardEnd' tabindex='0'></div>
											</div>
										</div>
									</div>
								</div>
								<div className='category-bubble'>
									<button
										className='category-bubble-link category-bubble-link--bounce-in'
										// style='animation-delay:0.7s;'
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
										// style='animation-delay:0.8s;'
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
										// style='animation-delay:0.9s;'
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
										data-test-id='category-bubble'
										className='category-bubble-link category-bubble-link--bounce-in'
										// style='animation-delay:1s;'
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
										// style='animation-delay:1.1s;'
									>
										<img
											src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/gvzyon4wmct0wn9caj6w'
											alt='магазины и подарки'
											class='category-bubble-icon fadeIn'
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
