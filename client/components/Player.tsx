import { ChangeEvent, FC, useEffect } from 'react'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import style from '@/styles/Player.module.scss'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import TrackProgress from '@/components/TrackProgress'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { playerSlice } from '@/store/reducers/PlayerSlice'

let audio: HTMLAudioElement

const Player: FC = () => {
	const {
		pause,
		volume,
		active,
		duration,
		currentTime
	} = useAppSelector(state => state.player)
	const {
		playTrack,
		pauseTrack,
		setVolume,
		setCurrentTime,
		setDuration
	} = playerSlice.actions
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setAudio()
			handlePlay()
		}
	}, [active])

	const setAudio = () => {
		if (active) {
			audio.src = 'http://localhost:5001/' + active.audio
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				dispatch(setDuration(Math.ceil(audio.duration)))
			}
			audio.ontimeupdate = () => {
				dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
			}
		}
	}

	const handlePlay = () => {
		if (pause) {
			dispatch(playTrack())
			audio.play().catch(e => console.log(e))
		} else {
			dispatch(pauseTrack())
			audio.pause()
		}
	}

	const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		dispatch(setVolume(Number(e.target.value)))
	}

	const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		dispatch(setCurrentTime(Number(e.target.value)))
	}

	if (!active) {
		return null
	}

	return (
		<div className={style.player}>
			<IconButton onClick={handlePlay}>
				{pause
					? <PlayArrow />
					: <Pause />
				}
			</IconButton>
			<Grid container direction='column' width={'200px'} my={0} mx={'20px'}>
				<Typography fontSize={16}>{active?.name}</Typography>
				<Typography fontSize={12} color={'gray'} variant={'h6'}>{active?.artist}</Typography>
			</Grid>
			<TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
			<VolumeUp style={{ marginLeft: 'auto' }} />
			<TrackProgress left={volume} right={100} onChange={changeVolume} />
		</div>
	)
}

export default Player