import { TrackType } from '@/types/TrackType'

export interface PlayerState {
	active: null | TrackType
	volume: number
	duration: number
	currentTime: number
	pause: boolean
}