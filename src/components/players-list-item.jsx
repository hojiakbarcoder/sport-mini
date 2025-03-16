import { IoMdClose } from 'react-icons/io'
import { PiSoccerBallFill } from 'react-icons/pi'
import { TbFlagCheck } from 'react-icons/tb'
import player from '../assets/player.png'

const PlayersListItem = ({ name, continent, country, onDelete }) => {
	let bg

	switch (continent) {
		case 'Europe':
			bg = 'bg-gradient-to-r from-blue-500 to-red-500'
			break
		case 'Asia':
			bg = 'bg-gradient-to-r from-green-500 to-red-500'
			break
		case 'Africa':
			bg = 'bg-gradient-to-r from-yellow-500 to-red-500'
			break
		default:
			break
	}
	return (
		<div
			className={`p-4 rounded-md shadow-lg grid grid-cols-2 items-center relative ${bg}`}
		>
			<div className='flex flex-col space-y-2'>
				<div className='flex items-center gap-1'>
					<PiSoccerBallFill className='w-6 h-6' />
					<p className='font-bold text-xl'>{name}</p>
				</div>
				<div className='flex items-center gap-1'>
					<TbFlagCheck className='w-6 h-6' />
					<p className='font-bold text-xl'>{country}</p>
				</div>
			</div>
			<img src={player} alt='player' className='h-25 ml-auto' />

			<span
				className='absolute -right-2 -top-4 bg-slate-300 rounded-full p-1 hover:bg-slate-400
			transition-all'
				role='button'
				onClick={onDelete}
			>
				<IoMdClose className='w-6 h-6' />
			</span>
		</div>
	)
}

export default PlayersListItem
