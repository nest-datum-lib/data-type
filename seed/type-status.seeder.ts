import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { TypeStatus } from 'src/api/type-status/type-status.entity';

export class TypeStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeStatus) private readonly typeStatusRepository: Repository<TypeStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'data-type-type-status-active',
				name: 'Active',
				description: 'Data type is active.',
			}], async (data) => {
				try {
					await this.typeStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: type-status 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: type-status 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}