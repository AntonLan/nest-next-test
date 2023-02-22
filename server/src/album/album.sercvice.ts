import { Get, Injectable, Post } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Track, TrackDocument } from '../track/schemas/track.schema'
import { Model } from 'mongoose'
import { Album, AlbumDocument } from './schemas/album.schema'

@Injectable()
export class AlbumService {

	constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
							@InjectModel(Track.name) private trackModel: Model<TrackDocument>) {
	}


	@Post()
	async create() {

	}

	@Get()
	async getAll() {
			const albums = await this.albumModel.find()
			return albums
	}

	@Get()
	async getOne() {

	}

	async delete() {

	}

}