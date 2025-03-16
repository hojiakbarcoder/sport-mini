import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useHttp } from '../hooks/use-http'
import { playerCreated } from '../slices/players-slice'

const PlayersForm = () => {
	const { filters, filtersLoadingStatus } = useSelector(state => state.filters)
	const dispatch = useDispatch()
	const { request } = useHttp()

	const onSubmit = event => {
		event.preventDefault()
		const name = event.target.name.value
		const country = event.target.country.value
		const continent = event.target.continent.value

		const data = {
			id: uuidv4(),
			name,
			country,
			continent,
		}
		console.log(data)

		request('http://localhost:3000/players', 'GET', JSON.stringify(data))
			.then(res => console.log(res, 'successful'))
			.then(dispatch(playerCreated(data)))
			.catch(e => console.log(e))
	}

	const renderFilters = () => {
		if (filtersLoadingStatus === 'loading') {
			return <option>Loading...</option>
		} else if (filtersLoadingStatus === 'error') {
			return <option>Something went wrong</option>
		}

		if (filters && filters.length > 0) {
			return filters.map(({ id, label }) => {
				if (id === 'all') return

				return (
					<option key={id} value={label}>
						{label}
					</option>
				)
			})
		}
	}

	return (
		<div
			className='px-4 py-6 bg-white rounded-md shadow-lg bg-gradient-to-t from-cyan-500
		 to-transparent'
		>
			<form onSubmit={onSubmit}>
				<div className='flex flex-col space-y-2'>
					<div>
						<label htmlFor='name' className='text-2xl'>
							New football player
						</label>
						<input
							type='text'
							className='block w-full py-2 px-4 rounded-md mt-1 bg-amber-50'
							placeholder='Odil Akhmedov'
							name='name'
							autoComplete='name'
							id='name'
							required
						/>
					</div>
					<div>
						<label htmlFor='country' className='text-2xl'>
							Country
						</label>
						<input
							type='text'
							className='block w-full py-2 px-4 rounded-md mt-1 bg-amber-50'
							placeholder='Uzbekistan'
							name='country'
							autoComplete='country'
							id='country'
							required
						/>
					</div>
					<div>
						<label htmlFor='continent' className='text-2xl'>
							Continent
						</label>
						<select
							type='text'
							className='block w-full py-2 px-4 rounded-md mt-1 bg-amber-50'
							name='continent'
							id='continent'
							required
						>
							{renderFilters()}
						</select>
					</div>
					<button
						className='py-2 px-4 w-fit rounded-md ml-auto bg-gradient-to-r from-gray-500 to-gray-950
					text-white hover:scale-105 transition-all font-medium'
					>
						Add players
					</button>
				</div>
			</form>
		</div>
	)
}

export default PlayersForm
