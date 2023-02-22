import React, { FC } from 'react'
import MainLayout from '@/layouts/MainLayout'
import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import { TrackType } from '@/types/TrackType'
import { CommentType } from '@/types/CommentType'

const TrackPage = ({track}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter()

	return (
		<MainLayout>
			<Button
				variant={'outlined'}
				onClick={() => router.push('/tracks')}>
				К списку
			</Button>
			<Grid container my={'20px'} mx={0}>
				<Image
					loader={() => `http://localhost:5001/${track.picture}`}
					src={`http://localhost:5001/${track.picture}`}
					width={200}
					height={200}
					alt={track.name} />
				<div style={{ margin: '20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
					<Typography variant={'h5'}>Название трека - {track.name}</Typography>
					<Typography color={'gray'} variant={'h6'}>Исполнитель - {track.artist}</Typography>
					<Typography color={'gray'} variant={'h6'}>Прослушиваний - {track.listens}</Typography>
				</div>
			</Grid>
			<Typography variant={'h5'}>Слова песни</Typography>
			<p>{track.text}</p>
			<Typography variant={'h5'}>Коментарии</Typography>
			<Grid container>
				<TextField
					label='Ваше имя'
					fullWidth
				/>
				<TextField
					label='Коментарий'
					fullWidth
					multiline
					rows={4}
				/>
				<Button>Отправить</Button>
			</Grid>
			<div>
				{track.comments.map((comment: CommentType) =>
					<div key={comment._id}>
						<Typography>Автор - {comment.userName}</Typography>
						<Typography>Комментарий - {comment.text}</Typography>
					</div>
				)}
			</div>
		</MainLayout>
	)
}

export default TrackPage


export const getServerSideProps: GetServerSideProps = async ({params}) => {
	const response = await axios.get<TrackType>('http://localhost:5001/tracks/' + params?.id)
	return {
		props: {
			track: response.data
		}
	}
}