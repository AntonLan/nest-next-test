import { FC, useState } from 'react'
import MainLayout from '@/layouts/MainLayout'
import StepWrapper from '@/components/StepWrapper'
import { Button, Grid, TextField } from '@mui/material'
import FileUpload from '@/components/FileUpload'
import { useCreateTrackMutation } from '@/service/TrackService'
import { useRouter } from 'next/router'
import { TrackType } from '@/types/TrackType'
import { useInput } from '@/hooks/useInput'

const Create: FC = () => {
	const [activeStep, setActiveStep] = useState(0)
	const [picture, setPicture] = useState(null)
	const [audio, setAudio] = useState(null)
	const name = useInput('')
	const artist = useInput('')
	const text = useInput('')
	const [createTrack, {}] = useCreateTrackMutation()
	const router = useRouter()

	const handleNext = () => {
		if (activeStep !== 2) {
			setActiveStep(prev => prev + 1)
		} else {
			let formData: TrackType = {
				artist: artist.value,
				audio: audio,
				comments: [],
				listens: 0,
				name: name.value,
				picture: picture,
				text: text.value
			}
			createTrack(formData)
			console.log('check',formData)
			router.push('/tracks')
		}
	}

	const handleBack = () => {
		setActiveStep(prev => prev - 1)
	}

	return (
		<MainLayout>
			<StepWrapper activeStep={activeStep}>
				{activeStep === 0 &&
					<Grid container direction='column' gap={2} p={'20px'}>
						<TextField
							{...name}
							label={'Название трека'}
						/>
						<TextField
							{...artist}
							label={'Имя исполнителя'}
						/>
						<TextField
							{...text}
							label={'Слова к треку'}
							multiline
							rows={3}
						/>
					</Grid>
				}
				{activeStep === 1 &&
					<FileUpload setFile={setPicture} accept='/image/*'>
						<Button>Загрузите обложку</Button>
					</FileUpload>}
				{activeStep === 2 &&
					<FileUpload setFile={setAudio} accept='/audio/*'>
						<Button>Загрузите аудио</Button>
					</FileUpload>}
			</StepWrapper>
			<Grid container justifyContent='space-between'>
				<Button disabled={activeStep === 0} onClick={handleBack}>Назад</Button>
				<Button onClick={handleNext}>Далее</Button>
			</Grid>
		</MainLayout>
	)
}

export default Create