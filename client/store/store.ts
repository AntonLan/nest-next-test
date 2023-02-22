import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import playerReducer from '@/store/reducers/PlayerSlice'

import { trackAPI } from '@/service/TrackService'



const makeStore = () =>
	configureStore({
		reducer: {
			player: playerReducer,
			[trackAPI.reducerPath]: trackAPI.reducer,
		},
		middleware: (gDM) => gDM().concat(trackAPI.middleware),
		devTools: true
	})


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)