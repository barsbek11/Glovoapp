import { useDispatch, useSelector } from 'react-redux'
import { setOpened } from '../redux/slices/glovoSlice'

export const LandingAddress = () => {
	const opened = useSelector(state => state.glovo.opened)
	const dispatch = useDispatch()

	return (
		<>
			{opened && (
				<div className='modal-overlay'>
					<div className='modal-wrapper'>
						<div className='modal--window'>
							<span
								className='close-button'
								onClick={() => dispatch(setOpened(false))}
							>
								<img src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/close-icon.svg' />
							</span>
							<div className='modal--window__body'>
								<div className='multi-step'>
									<div className='location-container'>
										<h2 className='modal--window__title'>
											Введите адрес доставки
										</h2>
										<form className='el-form'>
											<div className='location-form__body location-container__body cols'>
												<div className='container__fields col one-half mt-1'>
													<div className='el-form-item'>
														<div className='el-form-item__content'>
															<div
																id='address-input'
																className='address-input text-field pb-1'
															>
																<img
																	src='https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/flag_dark-grey.svg'
																	className='text-field__icon'
																/>
																<div
																	aria-haspopup='listbox'
																	role='combobox'
																	aria-owns='el-autocomplete-8996'
																	className='el-autocomplete address-input__autocomplete text-field__input wide-autocomplete hide-suggestions'
																>
																	<div className='el-input'>
																		<input
																			type='text'
																			autoComplete='off'
																			valuekey='fullText'
																			popperclass='popper-absolute'
																			debounce='300'
																			placement='bottom-start'
																			className='el-input__inner'
																			role='textbox'
																			aria-autocomplete='list'
																			aria-controls='id'
																			aria-activedescendant='el-autocomplete-8996-item--1'
																		/>
																	</div>
																	<div
																		role='region'
																		className='el-autocomplete-suggestion el-popper popper-absolute flex-none'
																	>
																		<div className='el-scrollbar '>
																			<div className='el-autocomplete-suggestion__wrap el-scrollbar__wrap el-scrollbar__wrap--hidden-default'>
																				<ul
																					className='el-scrollbar__view el-autocomplete-suggestion__list'
																					role='listbox'
																					id='el-autocomplete-8996'
																				></ul>
																			</div>
																			<div className='el-scrollbar__bar is-horizontal'>
																				<div className='el-scrollbar__thumb translate-x-[0%]'></div>
																			</div>
																			<div className='el-scrollbar__bar is-vertical'>
																				<div className='el-scrollbar__thumb translate-y-[0%]'></div>
																			</div>
																		</div>
																	</div>
																</div>
																<span className='placeholder'>
																	Поиск улицы, города, района...
																</span>
															</div>
														</div>
													</div>
													<div className='current-location-wrapper location-form__use-current-location'>
														<div>
															<div className='current-location'>
																<img
																	loading='lazy'
																	src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location.svg'
																/>
																<div className='current-location__text'>
																	Текущее местоположение
																</div>
															</div>
														</div>
													</div>
													<div className='button-link location-form__link hidden-mobile default'>
														<a
															data-test-id='button-link-content'
															className='button-link--content link default'
														>
															Или укажите свое местоположение на карте
														</a>
													</div>
												</div>
												<div className='container__map col one-half full-width--mobile custom-margins mt-0'>
													<div
														data-test-id='location-form-map'
														className='location-map right map-size-mobile-small hidden-mobile'
													>
														<img
															data-test-id='location-map-placeholder'
															src='https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/map-placeholder.jpg'
															className='location-map fluid'
														/>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
