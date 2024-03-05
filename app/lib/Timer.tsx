'use client'
import { useState, useEffect } from 'react'

const Timer = () => {
	const [party, setParty] = useState(false)
	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const target = new Date('03/17/2024 23:59:59')

		const interval = setInterval(() => {
			const now = new Date()
			const difference = target.getTime() - now.getTime()

			const day = Math.floor(difference / (1000 * 60 * 60 * 24))
			setDays(day)

			const hour = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			setHours(hour)

			const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
			setMinutes(minute)

			const second = Math.floor((difference % (1000 * 60)) / 1000)
			setSeconds(second)

			if (day <= 0 && hour <= 0 && minute <= 0 && second <= minute) {
				setParty(true)
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [])
	return (
		<div>
			{party ? (
				<p>Isiland.fr 🚀</p>
			) : (
				<div className='text-2xl text-white flex flex-wrap gap-2 justify-center items-center'>
					<div className='border-2 border-white  px-4 py-2'>{days} jours</div>
					<div className='border-2 border-white  px-4 py-2'>{hours} heures</div>
					<div className='border-2 border-white  px-4 py-2'>
						{minutes} minutes
					</div>
					<div className='border-2 border-white  px-4 py-2'>
						{seconds} secondes
					</div>
				</div>
			)}
		</div>
	)
}

export default Timer
