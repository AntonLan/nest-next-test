import { TrackType } from '@/types/TrackType'

export interface TrackState {
	isLoading: boolean,
	error: string
	tracks: TrackType[]
}