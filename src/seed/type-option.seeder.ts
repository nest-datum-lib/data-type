import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeOption } from '../api/type-option/type-option.entity';

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
				id: 'happ-data-type-option-enum-name',
				userId: process.env.USER_ID,
				envKey: 'HAPP_DATA_TYPE_OPTION_ENUM_NAME',
				name: 'Enum name',
				description: 'Enum name.',
				dataTypeId: 'happ-data-type-text',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-option-enum-url',
				userId: process.env.USER_ID,
				envKey: 'HAPP_DATA_TYPE_OPTION_ENUM_URL',
				name: 'Enum url',
				description: 'Enum url.',
				dataTypeId: 'happ-data-type-text',
				isNotDelete: true,
			}, {
				id: 'happ-data-type-option-fs',
				userId: process.env.USER_ID,
				envKey: 'HAPP_DATA_TYPE_OPTION_FS',
				name: 'File system',
				description: 'File system id.',
				dataTypeId: 'happ-data-type-text',
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