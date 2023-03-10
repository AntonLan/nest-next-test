import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { FileEnum } from '../model/FileEnum'
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'


@Injectable()
export class FileService {

	createFile(type: FileEnum, file): string {
		try {
			const fileExtension = file.originalname.split('.').pop()
			const fileName = uuid.v4() + '.' + fileExtension
			const filePath = path.resolve(__dirname, '..', 'static', type)
			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath, { recursive: true })
			}
			fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
			return type + '/' + fileName
		} catch (e) {
			throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
		}
	}

	removeFile(fileName: string) {

	}

}