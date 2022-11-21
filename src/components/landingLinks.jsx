import React from 'react'
import { Link } from 'react-router-dom'

export const LandingLinks = () => {
	return (
		<>
			<div className='landing-links filter-links'>
				<img
					src='https://res.cloudinary.com/glovoapp/image/fetch//w_140,h_140,q_auto/https://glovoapp.com/images/landing/cities.svg'
					role='presentation'
					width='140'
					height='140'
				/>{' '}
				<h2 className='heading-h2 landing-links__title heading-h2--big'>
					Популярные Категории в г. Бишкек
				</h2>{' '}
				<div className='landing-links__links-container'>
					<Link
						to='/kg/ru/bishkek/restorany_1/burgery/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Бургеры
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/halyalnaya/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Халяльная
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/fast-fud/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Фаст-Фуд
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/kuritsa/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Курица
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/vostochnaya/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Восточная
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/napitki/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Напитки
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/evropeyskaya/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Европейская
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/traditsionnaya/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Традиционная
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/aziatskaya/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Азиатская
					</Link>
					<Link
						to='/kg/ru/bishkek/restorany_1/pitstsa/'
						className='landing-links__link landing-links__link--with-hover'
					>
						Пицца
					</Link>
				</div>
			</div>
		</>
	)
}
