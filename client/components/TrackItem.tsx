import { BaseSyntheticEvent, FC } from 'react'
import { TrackType } from '@/types/TrackType'
import { Card, Grid } from '@mui/material'
import style from '@/styles/TrackItem.module.scss'
import IconButton from '@mui/material/IconButton'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { playerSlice } from '@/store/reducers/PlayerSlice'
import { useAppDispatch } from '@/hooks/redux'

interface TrackItemProps {
	track: TrackType
	isActive?: boolean
}

const TrackItem: FC<TrackItemProps> = ({ track, isActive = false }) => {
	const router = useRouter()
	const { playTrack, setActive } = playerSlice.actions
	const dispatch = useAppDispatch()


	const play = (e: BaseSyntheticEvent) => {
		e.stopPropagation()
		dispatch(setActive(track))
		dispatch(playTrack())
	}

	return (
		<Card className={style.track} onClick={() => router.push('/tracks/' + track._id)}>
			<IconButton onClick={play}>
				{isActive
					? <Pause />
					: <PlayArrow />
				}
			</IconButton>
			<Image
				loader={() => `http://localhost:5001/${track.picture}`}
				src={`http://localhost:5001/${track.picture}`}
				width={70}
				height={70}
				alt={track.name} />
			<Grid container direction='column' width={200} my={0} mx={20}>
				<Typography variant={'h5'}>{track.name}</Typography>
				<Typography color={'gray'} variant={'h6'}>{track.artist}</Typography>
			</Grid>
			{isActive && <div>02:42 / 03:22 </div>}
			<IconButton onClick={(e) => e.stopPropagation()} sx={{ ml: 'auto' }}>
				<Delete />
			</IconButton>
		</Card>
	)
}

export default TrackItem