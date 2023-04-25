import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Type } from '../api/type/type.entity';

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
				id: 'happ-data-type-text',
				envKey: 'HAPP_DATA_TYPE_TEXT',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'Text',
				description: 'Text values from any characters.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-int',
				envKey: 'HAPP_DATA_TYPE_INT',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'Integer',
				description: 'Natural number, plus its opposite and zero.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-float',
				envKey: 'HAPP_DATA_TYPE_FLOAT',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'Float',
				description: 'Fractional numbers.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-bool',
				envKey: 'HAPP_DATA_TYPE_BOOL',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'Boolean',
				description: 'TRUE or FALSE values.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-enum',
				envKey: 'HAPP_DATA_TYPE_ENUM',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'Enum',
				description: 'Set of values.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-enum-type',
				envKey: 'HAPP_DATA_TYPE_ENUM_TYPE',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				parentId: 'happ-data-type-enum',
				name: 'Enum data type',
				description: 'Select data type.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-upload',
				envKey: 'HAPP_DATA_TYPE_UPLOAD',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'File',
				description: 'File system resource.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-file-select',
				envKey: 'HAPP_DATA_TYPE_FILE_SELECT',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				parentId: 'happ-data-type-enum-type',
				name: 'Select file',
				description: 'Select file from system.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-file-cv',
				envKey: 'HAPP_DATA_TYPE_FILE_CV',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'CV',
				description: 'All PDF files.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-file-cv-lensa',
				envKey: 'HAPP_DATA_TYPE_FILE_CV_LENSA',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				name: 'CV lensa',
				description: 'PDF files from lesna API.',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-select-avatar',
				envKey: 'HAPP_DATA_TYPE_SELECT_AVATAR',
				userId: process.env.USER_ID,
				typeStatusId: 'happ-data-type-status-active',
				parentId: 'happ-data-type-file-select',
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