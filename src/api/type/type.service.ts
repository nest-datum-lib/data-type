import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionEntityService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from './type.entity';

@Injectable()
export class TypeService extends OptionEntityService {
	protected entityName = 'type';
	protected entityConstructor = Type;
	protected entityOptionConstructor = TypeTypeOption;
	protected entityOptionId = 'typeOptionId';
	protected entityId = 'typeId';
	protected withEnvKey = true;

	constructor(
		@InjectRepository(Type) protected entityRepository: Repository<Type>,
		@InjectRepository(TypeTypeOption) protected entityOptionRepository: Repository<TypeTypeOption>,
		protected connection: Connection,
		protected cacheService: CacheService,
	) {
		super();
	}

	protected manyGetColumns(customColumns: object = {}) {
		return ({
			...super.manyGetColumns(customColumns),
			userId: true,
			parentId: true,
			typeStatusId: true,
			name: true,
			description: true,
			isDeleted: true,
			isNotDelete: true,
		});
	}

	protected manyGetQueryColumns(customColumns: object = {}) {
		return ({
			...super.manyGetQueryColumns(customColumns),
			name: true,
			description: true,
		});
	}
}
