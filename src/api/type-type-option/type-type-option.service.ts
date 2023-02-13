import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from './type-type-option.entity';

@Injectable()
export class TypeTypeOptionService extends OptionOptionService {
	protected entityName = 'typeTypeOption';
	protected entityConstructor = TypeTypeOption;
	protected entityOptionId = 'typeOptionId';
	protected entityId = 'typeId';

	constructor(
		@InjectRepository(TypeTypeOption) protected entityRepository: Repository<TypeTypeOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
