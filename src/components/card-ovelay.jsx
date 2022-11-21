import React from 'react'

export const CardOvelay = ({
	title,
	backgroundImage,
	rating,
	ratingCount,
	price,
	timeDelivery,
	link,
}) => {
	return (
		<div className='col one-third store-card_wrapper'>
			<div className='store-card-wrapper'>
				<a
					href={link}
					className='collection-item hover-effect full-width--mobile'
				>
					<div className='card-image'>
						<div className='card-image-inner'>
							<img src={backgroundImage} alt='' />
						</div>{' '}
						<div className='card-overlay'>
							<h3 className='card-title'>{title}</h3>
						</div>
					</div>{' '}
					<div className='card-content'>
						<div className='store-estimations-section'>
							<div className='flex-vertical'>
								<div className='store-card-rating-info flex'>
									<img
										src='https://res.cloudinary.com/glovoapp/f_auto,q_auto/store_ratings/rating_excellent.png'
										alt='Store rating'
										className='store-rating__icon'
										width='20'
										height='20'
									/>{' '}
									<span className='store-card-rating-info__rating'>
										{rating}
									</span>{' '}
									<span className='store-card-rating-info__label'>
										{ratingCount}
									</span>
								</div>{' '}
							</div>{' '}
							<div className='flex'>
								<div>
									<section className='service-fee flex row-layout'>
										<img
											src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/glyphs/store-delivery-light.svg'
											alt='service fee'
											className='service-fee__icon'
										/>{' '}
										<div className='service-fee__label dark-text'>
											{price}&nbsp;KGS
										</div>{' '}
									</section>
								</div>{' '}
								<div className='separator'>·</div>{' '}
								<div className='eta-wrapper'>
									<div className='eta'>
										<span>{timeDelivery}</span>
									</div>
								</div>
							</div>
						</div>{' '}
					</div>
				</a>
			</div>
		</div>
	)
}
