import { PlayerState } from '@/types/PlayerState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TrackType } from '@/types/TrackType'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: PlayerState = {
	currentTime: 0,
	duration: 0,
	active: null,
	volume: 50,
	pause: true
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		pauseTrack(state) {
			state.pause = true
		},
		playTrack(state) {
			state.pause = false
		},
		setCurrentTime(state, action: PayloadAction<number>) {
			state.currentTime = action.payload
		},
		setVolume(state, action: PayloadAction<number>) {
			state.volume = action.payload
		},
		setDuration(state, action: PayloadAction<number>) {
			state.duration = action.payload
		},
		setActive(state, action: PayloadAction<TrackType>) {
			state.duration = 0
			state.currentTime = 0
			state.active = action.payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.auth
			}
		}
	}

})

export default playerSlice.reducer