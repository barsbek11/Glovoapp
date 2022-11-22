import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../redux/slices/glovoSlice'
import { CardOvelay } from './card-ovelay'

export const Search = () => {
	const searchResultOpened = useSelector(
		state => state.glovo.searchResultOpened
	)
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
			{searchResultOpened && (
				<div>
					<div class='search-results'>
						<div class='tabs-container search-results__tabs'>
							<ul class='tabs-header'>
								<li
									area-selected='true'
									aria-controls='Все'
									class='tabs-header__item tabs-header__item--active'
								>
									Все
								</li>
								<li aria-controls='Заведения' class='tabs-header__item'>
									Заведения
								</li>
								<li aria-controls='Продукты' class='tabs-header__item'>
									Продукты
								</li>
							</ul>{' '}
							<div class='active-tab' id='Все'>
								<div class='search-results__caption'>
									<span>1</span>{' '}
									<span>
										Заведения по поисковому запросу <strong>"nava"</strong>
									</span>
								</div>{' '}
								<div class='search-results__container'>
									<div>
										<div
											class='store-card-wrapper store-result-item'
											current-address='[object Object]'
										>
											<div></div>
											{products}
										</div>
									</div>
								</div>
								<div class='search-results__caption'>
									<span>6</span>{' '}
									<span>
										Продукты по поисковому запросу <strong>"nava"</strong>
									</span>
								</div>{' '}
								<div class='search-results__container search-results__container--products'>
									<a
										href='/kg/ru/bishkek/set-aptek-farmamir-bsk/?search=nava'
										class='link product-link'
									>
										<div class='result-product__container'>
											<div class='result-product__store-data'>
												<img
													data-v-154c619c=''
													alt='Сеть аптек "ФАРМАМИР"'
													data-test-id='store-image'
													class='result-product__store-image'
													data-src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_thumb,f_auto,q_auto/dpr_auto/Stores/e6dxgpoazprnwdxxwddc'
													src='https://res.cloudinary.com/glovoapp/w_60,h_60,c_thumb,f_auto,q_auto/dpr_auto/Stores/e6dxgpoazprnwdxxwddc'
													lazy='loaded'
												/>{' '}
												<div class='result-product__store-wrapper'>
													<h2 class='result-product__store-name'>
														Сеть аптек "ФАРМАМИР"
													</h2>
												</div>{' '}
												<hr class='line' />
											</div>{' '}
											<div class='result-product__product-data'>
												<div class='result-product__product-info'>
													<span class='result-product__product-name'>
														<span
															color='yellow'
															size='medium'
															text='Прокладки BELLA (БЕЛЛА) nova comfort 10шт'
															weight='book'
														>
															Прокладки BELLA (БЕЛЛА) nova comfort 10шт
														</span>
													</span>
													<span class='result-product__product-description'>
														<span
															color='yellow'
															size='small'
															text='Прокладки BELLA (БЕЛЛА) nova comfort 10шт'
															weight='book'
														>
															Прокладки BELLA (БЕЛЛА) nova comfort 10шт
														</span>
													</span>{' '}
													<div class='product-price result-product__product-price layout-vertical-false'>
														<span class='product-price__effective product-price__effective--new-card'>
															105,00&nbsp;KGS
														</span>
													</div>
												</div>{' '}
												<hr class='line' />
											</div>{' '}
											<div class='result-product__see-all'>
												<span class='result-product__see-all__link'>
													Еще результаты
												</span>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
