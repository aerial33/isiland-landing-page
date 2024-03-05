type Props = {
	label: string
	iconUrl: string
}

const Button = ({ label, iconUrl }: Props) => {
	return (
		<button className='flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none  bg-primary rounded-full text-white'>
			{label}{' '}
			<img
				src={iconUrl}
				alt='direction icon droite'
				className='ml-2 rounded-full w-5 h-5'
			/>
		</button>
	)
}

export default Button
