import { useDispatch, useSelector } from 'react-redux'
import { setLandingAddressOpened } from '../redux/slices/glovoSlice'

export const LandingAddress = () => {
	const landingAddressOpened = useSelector(
		state => state.glovo.landingAddressOpened
	)

	const dispatch = useDispatch()

	return (
		<>
			{landingAddressOpened && (
				<div className='modal-overlay'>
					<div className='modal-wrapper'>
						<div className='modal--window'>
							<span
								className='close-button'
								onClick={() =>
									dispatch(setLandingAddressOpened(!landingAddressOpened))
								}
							>
								<img
									alt=''
									src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/close-icon.svg'
								/>
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
																className='address-input text-field pb-[10px]'
															>
																<img
																	src='https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/glyphs/flag_dark-grey.svg'
																	className='text-field__icon'
																	alt=''
																/>
																<div
																	aria-haspopup='listbox'
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
																			aria-autocomplete='list'
																			aria-controls='id'
																			aria-activedescendant='el-autocomplete-8996-item--1'
																			placeholder='Поиск улицы, города, района...'
																		/>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className='current-location-wrapper location-form__use-current-location'>
														<div>
															<div className='current--location'>
																<img
																	loading='lazy'
																	src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location.svg'
																	alt=''
																/>
																<div className='current--location__text'>
																	Текущее местоположение
																</div>
															</div>
														</div>
													</div>
													<div className='button-link location-form__link '>
														<span
															className='button-link--content link '
															onClick={() => dispatch()}
														>
															Или укажите свое местоположение на карте
														</span>
													</div>
												</div>
												<div className='container__map col one-half full-width--mobile custom-margins mt-0'>
													<div className='location-map right w-[308px] h-[308px]'>
														<img
															src='https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/map-placeholder.jpg'
															className='location-map h-[308px]'
															alt=''
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
