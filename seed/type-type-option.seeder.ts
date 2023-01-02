import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeTypeOption } from 'src/api/type-type-option/type-type-option.entity';

export class TypeTypeOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeTypeOption) private readonly typeTypeOptionRepository: Repository<TypeTypeOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'data-type-type-type-option-file-root',
				typeId: 'data-type-type-file-upload',
				typeOptionId: 'data-type-type-option-file-root',
			}, {
				id: 'data-type-type-option-file-http-port',
				typeId: 'data-type-type-file-upload',
				typeOptionId: 'data-type-type-option-file-http-port',
			}], async (data) => {
				try {
					await this.typeTypeOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: type-type-option 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: type-type-option 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}