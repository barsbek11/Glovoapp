import React, { useState } from 'react'

export const CurrentLocation = () => {
	const [position, setPosition] = useState(true)

	const geoFindMe = () => {
		const status = document.querySelector('#status')
		const mapLink = document.querySelector('#mapLink')

		mapLink.href = ''
		mapLink.textContent = ''

		function success(position) {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude

			status.textContent = ''
			mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
			mapLink.textContent = `Широта: ${latitude} / Долгота: ${longitude} °`
		}

		function error() {
			status.textContent = 'Невозможно получить ваше местоположение'
		}

		if (!navigator.geolocation) {
			status.textContent = 'Geolocation не поддерживается вашим браузером'
		} else {
			status.textContent = 'Определение местоположения…'
			navigator.geolocation.getCurrentPosition(success, error)
		}
	}

	return (
		<>
			{position && (
				<div>
					<div className='current-location' onClick={() => geoFindMe()}>
						<img
							loading='lazy'
							src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/svg/location.svg'
							alt=''
						/>
						<div className='current-location__text'>Текущее местоположение</div>
					</div>
					<p id='status'></p>
					<p id='mapLink'></p>
				</div>
			)}
		</>
	)
}
