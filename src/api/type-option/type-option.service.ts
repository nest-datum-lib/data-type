import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService as NestDatumOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeOption } from './type-option.entity';

@Injectable()
export class TypeOptionService extends NestDatumOptionService {
	public entityName = 'typeOption';
	public entityConstructor = TypeOption;

	constructor(
		@InjectRepository(TypeOption) public repository: Repository<TypeOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}
}
