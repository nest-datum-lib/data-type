import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	BalancerRepository,
	BalancerService, 
} from 'nest-datum/balancer/src';
import { CacheService } from 'nest-datum/cache/src';
import { Type } from '../type/type.entity';
import { TypeStatus } from './type-status.entity';
import { TypeStatusService } from './type-status.service';
import { TypeStatusController } from './type-status.controller';

@Module({
	controllers: [ TypeStatusController ],
	imports: [
		TypeOrmModule.forFeature([ 
			Type,
			TypeStatus, 
		]),
	],
	providers: [
		BalancerRepository, 
		BalancerService,
		CacheService,
		TypeStatusService, 
	],
})
export class TypeStatusModule {
}
