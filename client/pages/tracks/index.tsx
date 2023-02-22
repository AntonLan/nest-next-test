import MainLayout from '@/layouts/MainLayout'
import { Button, Card, CircularProgress, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import TrackList from '@/components/TrackList'
import { wrapper } from '@/store/store'
import { fetchAllTrack, useFetchAllTrackQuery } from '@/service/TrackService'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TrackType } from '@/types/TrackType'


const Index = ({ tracks }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter()
	const { isLoading, error } = useFetchAllTrackQuery(2)

	if (error) {
		return <MainLayout>
			<h1>Произогла ошибка</h1>
		</MainLayout>
	}

	if (isLoading){
		return <MainLayout>
			<CircularProgress />
		</MainLayout>
}


	return (
		<MainLayout>
			<Grid container alignItems='center' justifyContent='center'>
				<Card sx={{ width: 900 }}>
					<Box p={3}>
						<Grid container justifyContent='space-between'>
							<h1>Список треков</h1>
							<Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	)
}

export default Index

export const getServerSideProps: GetServerSideProps<{ tracks: TrackType[] | undefined }> = wrapper.getServerSideProps(
	(store) => async () => {
		const res = await store.dispatch(fetchAllTrack.initiate(5))
		const tracks: TrackType[] | undefined = await res.data
		return {
			props: {
				tracks
			}
		}
	}
)



