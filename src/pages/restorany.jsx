import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchContext } from '../App'
import { CardOvelay } from '../components/card-ovelay'
import { Filters } from '../components/filters'
import { HomeItems } from '../components/homeItems'
import { setItems } from '../redux/slices/glovoSlice'

const URL = process.env.REACT_APP_API_URL

export const Restorany = () => {
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
			<div className='flex'>
				<Filters />
				<div className='page-results'>
					<nav className='page-breadcrumbs page-breadcrumbs--no-siblings'>
						<ol className='breadcrumb'>
							<li className='breadcrumb__item' isavailable='true'>
								<a href='/' className='nuxt-link-active' aria-current='false'>
									<span className='breadcrumb__item--linkable'>Бишкек</span>
								</a>{' '}
								<i
									aria-hidden='true'
									className='breadcrumb__separator el-icon-arrow-right'
								></i>
							</li>
							<li
								className='breadcrumb__item'
								data-test-id='breadcrumb-item'
								isavailable='true'
							>
								<a
									href='/kg/ru/bishkek/restorany/'
									aria-current='location'
									className='nuxt-link-exact-active nuxt-link-active breadcrumb__item__link--current'
								>
									<span className='breadcrumb__item--selected'>Рестораны</span>
								</a>{' '}
								<i
									aria-hidden='true'
									className='breadcrumb__separator el-icon-arrow-right'
								></i>
							</li>
						</ol>
					</nav>{' '}
					<h1
						className='heading-h1 category-page-title'
						data-test-id='category-title'
					>
						Рестораны : доставка в г. Бишкек
					</h1>{' '}
					<h3 className='store-wall-widgets__title-seperator'>Все заведения</h3>
					<div className='collection hidden-when-search landing-hightlights-collection cols highlights-store-collection'>
						{products}
					</div>
				</div>{' '}
			</div>
		</>
	)
}
