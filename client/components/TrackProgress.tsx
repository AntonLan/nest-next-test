import { ChangeEvent, FC } from 'react'
import { Grid } from '@mui/material'

interface TrackProgressProps {
	left: number
	right: number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TrackProgress: FC<TrackProgressProps> =
	({
		 left,
		 right,
		 onChange
	 }) => {
		return (
			<Grid container>
				<input
					type='range'
					min={0}
					max={right}
					value={left}
					onChange={onChange}
				/>
				<div>{left} / {right}</div>
			</Grid>
		)
	}

export default TrackProgress