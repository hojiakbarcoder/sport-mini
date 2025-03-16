import PlayersFilter from './players-filter'
import PlayersForm from './players-form'
import PlayersList from './players-list'
const App = () => {
	return (
		<div className='h-screen w-full relative app'>
			<div className='absolute inset-0 bg-black/80 blur-1xl z-10'>
				<div className='grid grid-cols-2 gap-3 container mx-auto max-w-6xl h-full z-50 relative pt-12'>
					<PlayersList />
					<div>
						<PlayersForm />
						<PlayersFilter />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
