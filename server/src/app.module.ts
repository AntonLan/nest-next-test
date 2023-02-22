import { Module } from '@nestjs/common'
import { TrackModule } from './track/track.module'
import { AlbumModule } from './album/album.module'
import { MongooseModule } from '@nestjs/mongoose'
import { FileModule } from './file/file.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { ConfigModule } from '@nestjs/config'
import * as process from 'process'


@Module({
	imports: [
		ConfigModule.forRoot(),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static')
		}),
		TrackModule,
		AlbumModule,
		MongooseModule.forRoot(process.env.DATABASE_URL),
		FileModule
	]
})
export class AppModule {
}