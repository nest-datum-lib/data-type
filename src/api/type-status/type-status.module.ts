import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { Type } from '../type/type.entity';
import { TypeStatus } from './type-status.entity';
import { TypeStatusService } from './type-status.service';
import { TypeStatusController } from './type-status.controller';

@Module({
	controllers: [ TypeStatusController ],
	imports: [
		TypeOrmModule.forFeature([ Type ]),
		TypeOrmModule.forFeature([ TypeStatus ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		TypeStatusService, 
	],
})
export class TypeStatusModule {
}
