import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeOption } from 'src/api/type-option/type-option.entity';
import {
	USER_DEFAULT_ID,
	DATA_TYPE_TEXT_ID,
	DATA_TYPE_ENUM_OPTION_NAME_ID,
	DATA_TYPE_ENUM_OPTION_URL_ID,
	DATA_TYPE_OPTION_SYSTEM_OPTION_ID,
} from './consts';

export class TypeOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeOption) private readonly typeOptionRepository: Repository<TypeOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: DATA_TYPE_ENUM_OPTION_NAME_ID,
				userId: USER_DEFAULT_ID,
				name: 'Enum name',
				description: 'Enum name.',
				dataTypeId: DATA_TYPE_TEXT_ID,
				isNotDelete: true,
			}, {
				id: DATA_TYPE_ENUM_OPTION_URL_ID,
				userId: USER_DEFAULT_ID,
				name: 'Enum url',
				description: 'Enum url.',
				dataTypeId: DATA_TYPE_TEXT_ID,
				isNotDelete: true,
			}, {
				id: DATA_TYPE_OPTION_SYSTEM_OPTION_ID,
				userId: USER_DEFAULT_ID,
				name: 'File system',
				description: 'File system id.',
				dataTypeId: DATA_TYPE_TEXT_ID,
				isMultiline: true,
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.typeOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TypeOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TypeOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}