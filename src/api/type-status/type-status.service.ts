import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { TypeStatus } from './type-status.entity';

@Injectable()
export class TypeStatusService extends StatusService {
	protected entityName = 'typeStatus';
	protected entityConstructor = TypeStatus;

	constructor(
		@InjectRepository(TypeStatus) protected entityRepository: Repository<TypeStatus>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
