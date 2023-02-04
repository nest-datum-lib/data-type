import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { 
	Repository,
	Connection, 
} from 'typeorm';
import { OptionOptionService as NestDatumOptionOptionService } from '@nest-datum/option';
import { CacheService } from '@nest-datum/cache';
import { TypeTypeOption } from './type-type-option.entity';

@Injectable()
export class TypeTypeOptionService extends NestDatumOptionOptionService {
	public entityName = 'typeTypeOption';
	public entityConstructor = TypeTypeOption;

	constructor(
		@InjectRepository(TypeTypeOption) public repository: Repository<TypeTypeOption>,
		public connection: Connection,
		public cacheService: CacheService,
	) {
		super(repository, connection, cacheService);
	}

	protected selectDefaultMany = {
		id: true,
		typeId: true,
		typeOptionId: true,
		createdAt: true,
		updatedAt: true,
	};
}
