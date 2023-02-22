import { FC, ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import { Container } from '@mui/system'
import Player from '@/components/Player'

interface MainLayoutProps {
	children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
		return (
			<>
				<Navbar />
				<Container sx={{ mt: '90px', mx: 0 }}>
					{children}
				</Container>
				<Player />
			</>
		)
	}

export default MainLayout