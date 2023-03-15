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
import { TypeStatusService } from './type-status.service';
import { TypeStatusTcpController } from './type-status-tcp.controller';
import { TypeStatus } from './type-status.entity';

@Module({
	controllers: [ TypeStatusTcpController ],
	imports: [
		TypeOrmModule.forFeature([ TypeStatus ]),
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
		TypeStatusService, 
	],
})
export class TypeStatusTcpModule {
}

