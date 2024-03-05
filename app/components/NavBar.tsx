import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
	return (
		<div>
			<header className='padding-x py-8 absolute z-10 text-white text-lg  w-full'>
				<nav className='flex flex-col gap-4 sm:justify-between sm:flex-row items-center max-container'>
					<Image
						src='/isiland-logo-white.svg'
						alt='Isiland logo'
						width={180}
						height={40}
					/>
					<div>
						<p>Nous contacter</p>
						<a
							href='tel:0557932200'
							className='flex gap-1 items-center hover:text-accent-yellow'
						>
							<Image
								src='assets/images/phone.svg'
								alt='Phone number'
								width={24}
								height={24}
							/>
							05 57 93 22 00
						</a>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default NavBar
