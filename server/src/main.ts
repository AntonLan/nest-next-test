import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as process from 'process'

const start = async () => {
	try {
		const PORT = process.env.PORT || 5001
		const app = await NestFactory.create(AppModule)
		app.enableCors()
		await app.listen(PORT, () => console.log(`Server start on ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()