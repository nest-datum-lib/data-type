import { v4 as uuidv4 } from 'uuid';
import Redis from 'ioredis';
import getCurrentLine from 'get-current-line';
import { 
	Inject,
	Injectable, 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { SqlService } from 'nest-datum/sql/src';
import { CacheService } from 'nest-datum/cache/src';
import { 
	ErrorException,
	NotFoundException, 
} from 'nest-datum/exceptions/src';
import { TypeTypeOption } from './type-type-option.entity';

@Injectable()
export class TypeTypeOptionService extends SqlService {
	constructor(
		@InjectRepository(TypeTypeOption) private readonly typeTypeOptionRepository: Repository<TypeTypeOption>,
		private readonly connection: Connection,
		private readonly cacheService: CacheService,
	) {
		super();
	}

	protected selectDefaultMany = {
		id: true,
		typeId: true,
		typeOptionId: true,
		createdAt: true,
		updatedAt: true,
	};

	protected queryDefaultMany = {
		id: true,
	};

	async many({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'type', 'option', 'relation', 'many', payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.typeTypeOptionRepository.findAndCount(await this.findMany(payload));

			this.cacheService.set([ 'type', 'option', 'relation', 'many', payload ], output);
			
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}

		return [ [], 0 ];
	}

	async one({ user, ...payload }): Promise<any> {
		try {
			const cachedData = await this.cacheService.get([ 'type', 'option', 'relation', 'one' , payload ]);

			if (cachedData) {
				return cachedData;
			}
			const output = await this.typeTypeOptionRepository.findOne(await this.findOne(payload));
		
			if (output) {
				this.cacheService.set([ 'type', 'option', 'relation', 'one', payload ], output);
			}
			else {
				return new NotFoundException('Entity is undefined', getCurrentLine(), { user, ...payload });
			}
			return output;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
	}

	async drop({ user, id }): Promise<any> {
		try {
			this.cacheService.clear([ 'type', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'type', 'option', 'relation', 'one', id ]);
			this.cacheService.clear([ 'type', 'option', 'many' ]);
			this.cacheService.clear([ 'type', 'option', 'one' ]);
			this.cacheService.clear([ 'type', 'one' ]);

			await this.typeTypeOptionRepository.delete({ id });

			return true;
		}
		catch (err) {
			throw new ErrorException(err.message, getCurrentLine(), { user, id });
		}
	}

	async dropMany({ user, ...payload }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();
			
			this.cacheService.clear([ 'type', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'type', 'option', 'relation', 'one', payload ]);
			this.cacheService.clear([ 'type', 'option', 'many' ]);
			this.cacheService.clear([ 'type', 'many' ]);

			let i = 0;

			while (i < payload['ids'].length) {
				await this.dropByIsDeleted(this.typeTypeOptionRepository, payload['ids'][i]);
				i++;
			}
			await queryRunner.commitTransaction();

			return true;
		}
		catch (err) {
			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, ...payload });
		}
		finally {
			await queryRunner.release();
		}
	}

	async create({ user, id, typeId, typeOptionId }): Promise<any> {
		const queryRunner = await this.connection.createQueryRunner(); 

		try {
			await queryRunner.startTransaction();

			this.cacheService.clear([ 'type', 'option', 'relation', 'many' ]);
			this.cacheService.clear([ 'type', 'option', 'many' ]);
			this.cacheService.clear([ 'type', 'option', 'one' ]);
			this.cacheService.clear([ 'type', 'many' ]);
			this.cacheService.clear([ 'type', 'one' ]);

			const userId = (user
				&& typeof user === 'object')
				? (user['id'] || '')
				: '';
			const typeOptionRelation = await this.typeTypeOptionRepository.save({
				id: id || uuidv4(),
				userId,
				typeId,
				typeOptionId,
			});
			
			typeOptionRelation['userId'] = userId;

			await queryRunner.commitTransaction();

			return typeOptionRelation;
		}
		catch (err) {
			console.log('errr', err);

			await queryRunner.rollbackTransaction();
			await queryRunner.release();

			throw new ErrorException(err.message, getCurrentLine(), { user, id, typeId, typeOptionId });
		}
		finally {
			await queryRunner.release();
		}
	}
}
