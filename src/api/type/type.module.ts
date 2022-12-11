import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { TypeTypeOptionService } from '../type-type-option/type-type-option.service';
import { TypeStatus } from '../type-status/type-status.entity';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from './type.entity';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';

@Module({
	controllers: [ TypeController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TypeStatus,
			TypeTypeTypeOption,
			TypeTypeOption,
			Type,
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TypeTypeOptionService,
		TypeService, 
	],
})
export class TypeModule {
}

