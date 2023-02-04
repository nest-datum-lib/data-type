import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	redis,
	sql, 
} from '@nest-datum-common/config';
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
import { SeedService } from './seed.service';
import { Setting } from 'src/api/setting/setting.entity';
import { Type } from 'src/api/type/type.entity';
import { TypeSeeder } from './type.seeder';
import { SettingSeeder } from './setting.seeder';

@Module({
	controllers: [],
	imports: [
		RedisModule.forRoot(redis),
		TypeOrmModule.forRoot(sql),
		TypeOrmModule.forFeature([
			Setting,
			Type,
		]),
		ReplicaModule,
		TransportModule,
		CacheModule,
	],
	providers: [
		ReplicaService,
		TransportService,
		CacheService,
		SeedService,
		SettingSeeder,
		TypeSeeder,
	]
})

export class SeedModule {
}
