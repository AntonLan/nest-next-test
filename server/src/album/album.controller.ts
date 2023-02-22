import { Controller, Get } from '@nestjs/common'
import { AlbumService } from './album.sercvice'

@Controller('/albums')
export class AlbumController {

	constructor(private albumService: AlbumService) {}

	@Get()
	getAll() {
		return this.albumService.getAll()
	}

}