import React, { FC } from 'react'
import MainLayout from '@/layouts/MainLayout'
import style from '@/styles/main.module.scss'


const Index: FC = () => {
	return (
		<>
			<MainLayout>
				<div className={style.center}>
					<h1>Добро пожаловать</h1>
					<h3>Здесь собранны лучшие треки</h3>
				</div>
			</MainLayout>
		</>

	)
}

export default Index