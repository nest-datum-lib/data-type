import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { TypeOption } from './type-option.entity';

@Injectable()
export class TypeOptionService extends OptionService {
	protected entityName = 'typeOption';
	protected entityServicedName = 'type';
	protected entityId = 'typeId';
	protected entityOptionId = 'typeOptionId';
	protected entityOptionRelationId = 'typeTypeOptionId';
	protected entityConstructor = TypeOption;
	protected entityOptionConstructor = TypeTypeOption;
	protected entityOptionRelationConstructor = TypeTypeTypeOption;

	constructor(
		@InjectRepository(TypeOption) protected entityRepository: Repository<TypeOption>,
		@InjectRepository(TypeTypeOption) protected entityOptionRepository: Repository<TypeTypeOption>,
		@InjectRepository(TypeTypeTypeOption) protected entityOptionRelationRepository: Repository<TypeTypeTypeOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}
}
