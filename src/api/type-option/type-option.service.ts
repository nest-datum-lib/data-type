import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService as NestDatumOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { TypeOption } from './type-option.entity';

@Injectable()
export class TypeOptionService extends NestDatumOptionService {
	public entityName = 'typeOption';
	public entityColumnOption = 'typeOptionId';
	public entityConstructor = TypeOption;

	constructor(
		@InjectRepository(TypeOption) public repository: Repository<TypeOption>,
		@InjectRepository(TypeTypeOption) public repositoryOptionOption: Repository<TypeTypeOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, repositoryOptionOption, connection, cacheService);
	}
}
