import { FC } from 'react'
import { TrackType } from '@/types/TrackType'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import TrackItem from '@/components/TrackItem'

interface TrackListProps {
	tracks: TrackType[] | undefined
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {

	return (
		<Grid container direction='column'>
			<Box p={2}>
				{tracks?.map((track: TrackType) =>
					<TrackItem key={track._id} track={track} />
				)}
			</Box>
		</Grid>
	)
}

export default TrackList