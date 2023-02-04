import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { StatusService as NestDatumStatusService } from '@nest-datum/status';
import { CacheService } from '@nest-datum/cache';
import { TypeStatus } from './type-status.entity';

@Injectable()
export class TypeStatusService extends NestDatumStatusService {
	public entityConstructor = TypeStatus;

	constructor(
		@InjectRepository(TypeStatus) public repository: Repository<TypeStatus>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}
}
