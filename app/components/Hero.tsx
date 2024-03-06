import Image from 'next/image'
import Timer from '../lib/Timer'

const Hero = () => {
	return (
		<section
			id='home'
			className='w-full flex xl:flex-row flex-col justify-center min-h-screen  max-container p-2'
		>
			<div className='relative flex flex-col gap-8 md:gap-10 justify-center items-center w-full max-xl:padding-x pt-28 backdrop-blur'>
				<Image
					src='/isiland-logo-white.svg'
					alt='Isiland logo'
					width={400}
					height={80}
					className='mt-10'
				/>
				<h1 className='mt-10 sm:mt-8 text-7xl font-medium max-sm:text-4xl text-center'>
					<span>De l'inspiration à</span>
					<br />
					<span>la Conception</span>
				</h1>
				<p className='text-2xl font-semibold text-accent-yellow text-center mt-10 bg-black/10 p-4'>
					Accédez bientôt à notre nouveau site web
				</p>
				<Timer />
			</div>
		</section>
	)
}

export default Hero
