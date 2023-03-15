import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { encryptPassword } from '@nest-datum/jwt';
import { Type } from '../api/type/type.entity';
import {
	USER_DEFAULT_ID,
	DATA_TYPE_STATUS_ACTIVE_ID,
	DATA_TYPE_TEXT_ID,
	DATA_TYPE_INT_ID,
	DATA_TYPE_FLOAT_ID,
	DATA_TYPE_BOOL_ID,
	DATA_TYPE_ENUM_ID,
	DATA_TYPE_ENUM_TYPE_ID,
	DATA_TYPE_FILE_UPLOAD_ID,
	DATA_TYPE_FILE_SELECT_ID,
	DATA_TYPE_FILE_SELECT_CV_ID,
	DATA_TYPE_FILE_SELECT_CV_LENSA_ID,
	DATA_TYPE_FILE_AVATARS_ID,
} from './consts';

export class TypeSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Type) private readonly typeRepository: Repository<Type>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: DATA_TYPE_TEXT_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Text',
				description: 'Text values from any characters.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_INT_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Integer',
				description: 'Natural number, plus its opposite and zero.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_FLOAT_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Float',
				description: 'Fractional numbers.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_BOOL_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Boolean',
				description: 'TRUE or FALSE values.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_ENUM_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Enum',
				description: 'Set of values.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_ENUM_TYPE_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Enum data type',
				description: 'Select data type.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_FILE_UPLOAD_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'File',
				description: 'File system resource.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_FILE_SELECT_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Select',
				description: 'Select file from system.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_FILE_SELECT_CV_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'CV',
				description: 'All PDF files.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_FILE_SELECT_CV_LENSA_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'CV lensa',
				description: 'PDF files from lesna API.',
				isNotDelete: true,
			}, {
				id: DATA_TYPE_FILE_AVATARS_ID,
				userId: USER_DEFAULT_ID,
				typeStatusId: DATA_TYPE_STATUS_ACTIVE_ID,
				name: 'Avatars',
				description: 'User avatars.',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.typeRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: Type 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: Type 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}