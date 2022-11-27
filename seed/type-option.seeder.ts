import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeOption } from 'src/api/type-option/type-option.entity';

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
				id: 'data-type-type-option-file-root',
				userId: 'sso-user-admin',
				name: 'File root folder',
				description: 'Path to the root directory with files.',
				dataTypeId: 'data-type-type-text',
				isRequired: true,			
			}, {
				id: 'data-type-type-option-file-http-port',
				userId: 'sso-user-admin',
				name: 'HTTP port',
				description: 'The port on which the HTTP api service will be launched.',
				dataTypeId: 'data-type-type-integer',
				isRequired: true,			
			}], async (data) => {
				try {
					await this.typeOptionRepository.insert(data);
				}
				catch (err) {
					console.error(`ERROR: type-option 2: ${err.message}`);

					await queryRunner.rollbackTransaction();
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			console.error(`ERROR: type-option 1: ${err.message}`);

			await queryRunner.rollbackTransaction();
		}
		finally {
			await queryRunner.release();
		}
	}
}