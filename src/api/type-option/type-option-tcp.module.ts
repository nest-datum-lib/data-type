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
import { TypeOptionService } from './type-option.service';
import { TypeOptionTcpController } from './type-option-tcp.controller';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { Type } from '../type/type.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { TypeOption } from './type-option.entity';

@Module({
	controllers: [ TypeOptionTcpController ],
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
		TypeOptionService, 
	],
})
export class TypeOptionTcpModule {
}

