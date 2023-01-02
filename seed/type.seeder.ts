import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { Type } from 'src/api/type/type.entity';
import { TypeStatus } from 'src/api/type-status/type-status.entity';

export class TypeSeeder {
	constructor(
		private readonly connection: Connection,
		@InjectRepository(Type) private readonly typeRepository: Repository<Type>,
		@InjectRepository(TypeStatus) private readonly typeStatusRepository: Repository<TypeStatus>,
	) {
	}

	async send() {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			// new transaction
			await queryRunner.startTransaction();
			await Bluebird.each([{
				id: 'data-type-type-text',
				userId: 'sso-user-admin',
				typeStatusId: 'data-type-type-status-active',
				name: 'Text',
				description: 'Text values from any characters.',
				isNotDelete: true,
			}, {
				id: 'data-type-type-integer',
				userId: 'sso-user-admin',
				typeStatusId: 'data-type-type-status-active',
				name: 'Integer',
				description: 'natural number, plus its opposite and zero.',
				isNotDelete: true,
			}, {
				id: 'data-type-type-float',
				userId: 'sso-user-admin',
				typeStatusId: 'data-type-type-status-active',
				name: 'Float',
				description: 'Fractional numbers.',
				isNotDelete: true,
			}, {
				id: 'data-type-type-boolean',
				userId: 'sso-user-admin',
				typeStatusId: 'data-type-type-status-active',
				name: 'Boolean',
				description: 'TRUE or FALSE values.',
				isNotDelete: true,
			}, {
				id: 'data-type-type-file-upload',
				userId: 'sso-user-admin',
				typeStatusId: 'data-type-type-status-active',
				name: 'File',
				description: 'File system resource.',
				isNotDelete: true,
			}, {
				id: 'data-type-type-enum',
				userId: 'sso-user-admin',
				typeStatusId: 'data-type-type-status-active',
				name: 'Enum',
				description: 'Set of values.',
				isNotDelete: true,
			}], async (data) => {
				try {
					await this.typeRepository.insert(data);
				}
				catch (err) {
					await queryRunner.rollbackTransaction();

					console.error(`ERROR: type 2: ${err.message}`);
				}
			});
			await queryRunner.commitTransaction();
		}
		catch (err) {
			await queryRunner.rollbackTransaction();

			console.error(`ERROR: type 1: ${err.message}`);
		}
		finally {
			await queryRunner.release();
		}
	}
}