import { TrackType } from '@/types/TrackType'

export const menuItem = [
	{ text: 'Главная', href: '/' },
	{ text: 'Список треков', href: '/tracks' },
	{ text: 'Список альбомов', href: '/albums' }
]

export const tracks: TrackType[] = [
	{
		_id: '1',
		name: 'Трек 1',
		artist: 'Исполнитель 1',
		text: 'Какой-то текст',
		listens: 5,
		audio: 'http://localhost:5001/audio/20962510-4655-412c-8762-4dbad4a8024a.mp3',
		picture: 'http://localhost:5001/image/995c5831-e0ac-4656-a38f-adfc2c9cfb88.jpg',
		comments: []
	},
	{
		_id: '2',
		name: 'Трек 2',
		artist: 'Исполнитель 2',
		text: 'Какой-то текст',
		listens: 5,
		audio: 'http://localhost:5001/audio/20962510-4655-412c-8762-4dbad4a8024a.mp3',
		picture: 'http://localhost:5001/image/995c5831-e0ac-4656-a38f-adfc2c9cfb88.jpg',
		comments: []
	},
	{
		_id: '3',
		name: 'Трек 3',
		artist: 'Исполнитель 3',
		text: 'Какой-то текст',
		listens: 5,
		audio: 'http://localhost:5001/audio/20962510-4655-412c-8762-4dbad4a8024a.mp3',
		picture: 'http://localhost:5001/image/995c5831-e0ac-4656-a38f-adfc2c9cfb88.jpg',
		comments: []
	}
]

export const steps = ['Информация о треке', 'Загрузка обложи', 'Загрузите сам трек']