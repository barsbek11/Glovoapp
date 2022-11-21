import React from 'react'
import { HomeItems } from '../components/homeItems'

export const Restorany = () => {
	return (
		<>
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
			</div>{' '}
		</>
	)
}
