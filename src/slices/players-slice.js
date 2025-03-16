import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useHttp } from '../hooks/use-http'

const initialState = {
	players: [],
	playersLoadingStatus: 'success',
}

export const fetchPlayers = createAsyncThunk(
	'players/fetchPlayers',
	async () => {
		const { request } = useHttp()
		return await request('http://localhost:3000/players')
	}
)

const playersSlice = createSlice({
	name: 'players',
	initialState,
	reducers: {
		playerCreated: (state, action) => {
			state.players.push(action.payload)
		},
		playerDeleted: (state, action) => {
			state.players = state.players.filter(
				player => player.id !== action.payload
			)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPlayers.pending, state => {
				state.playersLoadingStatus = 'loading'
			})
			.addCase(fetchPlayers.fulfilled, (state, action) => {
				state.players = action.payload
				state.playersLoadingStatus = 'success'
			})
			.addCase(fetchPlayers.rejected, state => {
				state.playersLoadingStatus = 'error'
			})
			.addDefaultCase(() => {})
	},
})

const { actions, reducer } = playersSlice

export default reducer

export const {
	playerCreated,
	playerDeleted,
	playersFetched,
	playersFetching,
	playersFetchingError,
} = actions
