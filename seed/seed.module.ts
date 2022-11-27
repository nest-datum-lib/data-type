import { Module } from '@nestjs/common';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheService } from '@nest-datum/services';
import { typeormConfig } from 'config/typeorm';
import { redisConfig } from 'config/redis';
import { SeedService } from './seed.service';
import { TypeStatus } from 'src/api/type-status/type-status.entity';
import { TypeOption } from 'src/api/type-option/type-option.entity';
import { TypeTypeOption } from 'src/api/type-type-option/type-type-option.entity';
import { TypeTypeTypeOption } from 'src/api/type-type-type-option/type-type-type-option.entity';
import { Type } from 'src/api/type/type.entity';
import { Setting } from 'src/api/setting/setting.entity';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeOptionSeeder } from './type-option.seeder';
import { TypeTypeOptionSeeder } from './type-type-option.seeder';
import { TypeTypeTypeOptionSeeder } from './type-type-type-option.seeder';
import { TypeSeeder } from './type.seeder';
import { SettingSeeder } from './setting.seeder';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		RedisModule.forRoot(redisConfig),
		TypeOrmModule.forFeature([
			TypeStatus,
			TypeOption,
			TypeTypeOption,
			TypeTypeTypeOption,
			Type,
			Setting,
		]),
	],
	providers: [
		CacheService,
		SeedService,
		TypeStatusSeeder,
		TypeOptionSeeder,
		TypeTypeOptionSeeder,
		TypeTypeTypeOptionSeeder,
		TypeSeeder,
		SettingSeeder,
	]
})

export class SeedModule {
}
