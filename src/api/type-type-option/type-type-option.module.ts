import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { TypeTypeOptionController } from './type-type-option.controller';
import { TypeTypeOptionService } from './type-type-option.service';
import { TypeTypeOption } from './type-type-option.entity';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';

@Module({
	controllers: [ TypeTypeOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TypeTypeOption,
			TypeTypeTypeOption,
			TypeOption,
			Type, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TypeTypeOptionService, 
	],
})
export class TypeTypeOptionModule {
}
