import { FC, ReactNode } from 'react'
import { Container } from '@mui/system'
import { Card, Grid, Step, StepLabel, Stepper } from '@mui/material'
import { steps } from '@/variables/variables'

interface StepWrapperProps {
	activeStep: number
	children: ReactNode
}

const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) =>
					<Step
						key={index}
						completed={activeStep > index}
					>
						<StepLabel>
							{step}
						</StepLabel>
					</Step>
				)}
			</Stepper>
			<Grid container justifyContent='center' mx={'0'} my={'70px'} height={'270px'}>
				<Card sx={{ width: '600px' }}>
					{children}
				</Card>
			</Grid>
		</Container>
	)
}

export default StepWrapper