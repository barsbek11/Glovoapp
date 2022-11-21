import React from 'react'

export const CorparateContainer = () => {
	return (
		<>
			<div
				className='corporate-container corporate-container'
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/landing/waves/corporate-wave-desktop.svg')",
				}}
			>
				<img
					src='https://res.cloudinary.com/glovoapp/image/fetch//w_117,h_80,b_transparent,c_lpad,q_auto/https://glovoapp.com/images/corporate-container/together.svg'
					role='presentation'
					className='corporate-container__icon'
					width='117'
					height='80'
					alt=''
				/>{' '}
				<div className='corporate-container__wrapper'>
					<h2 className='heading-h2 corporate-container__title heading-h2--bigger'>
						Присоединиться к нам
					</h2>{' '}
					<div className='corporate-container__content'>
						<div className='corporate-element'>
							<div className='corporate-element__top'>
								<img
									src='https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/corporate-container/rider-image.png'
									srcset='https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_3.0/https://glovoapp.com/images/corporate-container/rider-image.png 762w, https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_2.0/https://glovoapp.com/images/corporate-container/rider-image.png 508w, https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/corporate-container/rider-image.png 254w'
									sizes='(min-width: 600px) 254px, calc(100vw - 48px)'
									alt='Стать курьером'
									loading='lazy'
									className='corporate-element__image'
									width='254'
									height='220'
								/>{' '}
								<div className='corporate-element__text'>
									<h3 className='corporate-element__title'>Стать курьером</h3>{' '}
									<div className='corporate-element__description'>
										Хотите получить свободу, гибкий график и достойную оплату?
										Доставляйте с Glovo!
									</div>
								</div>
							</div>{' '}
							<a
								href='https://couriers.glovoapp.com/kg/'
								className='corporate-element__link'
							>
								<button
									type='button'
									className='helio-button corporate-element__button primary'
								>
									<span class='helio-button__content'>
										Присоединиться к нам
									</span>
								</button>
							</a>
						</div>
						<div className='corporate-element'>
							<div className='corporate-element__top'>
								<img
									src='https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/corporate-container/partners-image.png'
									srcset='https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_3.0/https://glovoapp.com/images/corporate-container/partners-image.png 762w, https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_2.0/https://glovoapp.com/images/corporate-container/partners-image.png 508w, https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/corporate-container/partners-image.png 254w'
									sizes='(min-width: 600px) 254px, calc(100vw - 48px)'
									alt='Стать партнером'
									loading='lazy'
									className='corporate-element__image'
									width='254'
									height='220'
								/>{' '}
								<div className='corporate-element__text'>
									<h3 className='corporate-element__title'>Стать партнером</h3>{' '}
									<div className='corporate-element__description'>
										Glovo поможет ускорить рост вашего бизнеса: наши технологии
										и пользовательская база созданы, чтобы увеличить продажи и
										открыть для вас новые возможности!
									</div>
								</div>
							</div>{' '}
							<a
								href='https://sell.glovoapp.com'
								className='corporate-element__link'
							>
								<button
									type='button '
									className='helio-button corporate-element__button primary'
									Name
								>
									<span className='helio-button__content'>
										Присоединиться к нам
									</span>
								</button>
							</a>
						</div>
						<div className='corporate-element'>
							<div className='corporate-element__top'>
								<img
									src='https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/corporate-container/careers-image.png'
									srcset='https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_3.0/https://glovoapp.com/images/corporate-container/careers-image.png 762w, https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_2.0/https://glovoapp.com/images/corporate-container/careers-image.png 508w, https://res.cloudinary.com/glovoapp/image/fetch/w_254,h_220,c_lpad,b_transparent,f_auto,q_auto:low,dpr_1.0/https://glovoapp.com/images/corporate-container/careers-image.png 254w'
									sizes='(min-width: 600px) 254px, calc(100vw - 48px)'
									alt='Вакансии'
									loading='lazy'
									className='corporate-element__image'
									width='254'
									height='220'
								/>{' '}
								<div className='corporate-element__text'>
									<h3 className='corporate-element__title'>Вакансии</h3>{' '}
									<div className='corporate-element__description'>
										Готовы к покорению новой вершины? Если вы амбициозны,
										скромны и любите работать с другими, мы хотим познакомиться
										с вами!
									</div>
								</div>
							</div>{' '}
							<a
								href='https://jobs.glovoapp.com'
								className='corporate-element__link'
							>
								<button
									type='button'
									className='helio-button corporate-element__button primary'
								>
									<span className='helio-button__content'>
										Присоединиться к нам
									</span>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
