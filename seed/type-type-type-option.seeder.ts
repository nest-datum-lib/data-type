import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeTypeTypeOption } from 'src/api/type-type-type-option/type-type-type-option.entity';

export class TypeTypeTypeOptionSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeTypeTypeOption) private readonly typeTypeTypeOptionRepository: Repository<TypeTypeTypeOption>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				typeId: 'data-type-type-file',
				typeTypeOptionId: 'data-type-type-option-file-root',
				content: process.env.ROOT_PATH,
			}, {
				typeId: 'data-type-type-file',
				typeTypeOptionId: 'data-type-type-option-file-http-port',
				content: process.env.HTTP_PORT,
			}], async (data) => {
				try {
					await this.typeTypeTypeOptionRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: type-type-type-option 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: type-type-type-option 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}