import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	ReplicaModule,
	ReplicaService, 
} from '@nest-datum/replica';
import { 
	TransportModule,
	TransportService, 
} from '@nest-datum/transport';
import {
	CacheModule, 
	CacheService, 
} from '@nest-datum/cache';
import { 
	SqlModule,
	SqlService, 
} from '@nest-datum/sql';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from './type.entity';

@Module({
	controllers: [ TypeController ],
	imports: [
		TypeOrmModule.forFeature([ 
			TypeOption,
			TypeTypeOption,
			Type,
			TypeTypeTypeOption, 
		]),
		ReplicaModule,
		TransportModule,
		CacheModule,
		SqlModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SqlService,
		TypeService, 
	],
})
export class TypeModule {
}

