import { FC } from 'react'
import { Grid, TextField } from '@mui/material'
import { useInput } from '@/hooks/useInput'

const Form: FC = () => {
	const name = useInput('')
	const artist = useInput('')
	const text = useInput('')


	return (
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
	)
}

export default Form