import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeTypeOption } from '../api/type-type-option/type-type-option.entity';

export class TypeTypeOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeTypeOption) private readonly TypeTypeOptionRepository: Repository<TypeTypeOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				typeOptionId: 'happ-data-type-option-enum-name',
				typeId: 'happ-data-type-enum',
			}, {
				typeOptionId: 'happ-data-type-option-enum-url',
				typeId: 'happ-data-type-enum',
			}, {
				typeOptionId: 'happ-data-type-option-fs',
				typeId: 'happ-data-type-upload',
			}], async (data) => {
				try {
					await this.TypeTypeOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TypeTypeOption 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TypeTypeOption 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}