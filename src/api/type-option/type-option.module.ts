import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { TypeOption } from './type-option.entity';
import { TypeOptionService } from './type-option.service';
import { TypeOptionController } from './type-option.controller';

@Module({
	controllers: [ TypeOptionController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TypeOption,
			TypeTypeOption, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TypeOptionService, 
	],
})
export class TypeOptionModule {
}


