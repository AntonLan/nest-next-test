import { Module } from '@nestjs/common'
import { AlbumController } from './album.controller'
import { AlbumService } from './album.sercvice'
import { MongooseModule } from '@nestjs/mongoose'
import { Album, AlbumSchema } from './schemas/album.schema'
import { Track, TrackSchema } from '../track/schemas/track.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{
			name: Album.name,
			schema: AlbumSchema
		}]),
		MongooseModule.forFeature([{
			name: Track.name,
			schema: TrackSchema
		}]),
	],
	controllers: [AlbumController],
	providers: [AlbumService]
})
export class AlbumModule {}