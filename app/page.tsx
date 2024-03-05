import { Hero, NavBar } from './components/'

export default function Home() {
	return (
		<main className='min-h-screen bg-hero-pattern bg-cover bg-center relative text-white'>
			<NavBar />
			<Hero />
		</main>
	)
}
