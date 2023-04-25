import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { v4 as uuidv4 } from 'uuid';
import { TypeStatus } from '../api/type-status/type-status.entity';

export class TypeStatusSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(TypeStatus) private readonly rypeStatusRepository: Repository<TypeStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'happ-data-type-status-active',
				userId: process.env.USER_ID,
				envKey: 'HAPP_DATA_TYPE_STATUS_ACTIVE',
				name: 'Active',
				description: 'Type is active.',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.rypeStatusRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: TypeStatus 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: TypeStatus 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}