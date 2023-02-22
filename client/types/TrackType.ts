import { CommentType } from '@/types/CommentType'

export type TrackType = {
	_id?: string,
	name: string,
	artist: string,
	text: string,
	listens: number,
	audio: string | null
	picture: string | null
	comments: CommentType[]
}