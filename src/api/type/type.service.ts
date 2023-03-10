import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionEntityService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { 
	strId as utilsCheckStrId,
	obj as utilsCheckObj, 
} from '@nest-datum-utils/check';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from './type.entity';

@Injectable()
export class TypeService extends OptionEntityService {
	protected entityName = 'type';
	protected entityConstructor = Type;
	protected entityOptionConstructor = TypeTypeOption;
	protected entityId = 'typeId';

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

	protected async findMany({ page = 1, limit = 20, query, filter, sort, relations }: { page?: number; limit?: number; query?: string; filter?: object; sort?: object; relations?: object }): Promise<any> {
		if (utilsCheckObj(filter['custom'])) {
			const optionId = filter['custom']['disableTypeForOption'];
			const queryRunner = await this.connection.createQueryRunner();
			const types = await queryRunner.query(`SELECT id, typeId FROM type_type_option WHERE typeOptionId = @0`, [ optionId ]);

			console.log('types', optionId, types);

			delete filter['custom'];
		}
		return await super.findMany({ page, limit, query, filter, sort, relations });
	}
}
