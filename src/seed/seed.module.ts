import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqlConfig as utilsFormatSqlConfig } from '@nest-datum-utils/format';
import { SeedService } from './seed.service';
import { Setting } from '../api/setting/setting.entity';
import { TypeStatus } from '../api/type-status/type-status.entity';
import { TypeTypeTypeOption } from '../api/type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../api/type-option/type-option.entity';
import { TypeTypeOption } from '../api/type-type-option/type-type-option.entity';
import { Type } from '../api/type/type.entity';
import { SettingSeeder } from './setting.seeder';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeOptionSeeder } from './type-option.seeder';
import { TypeTypeOptionSeeder } from './type-type-option.seeder';
import { TypeSeeder } from './type.seeder';

@Module({
	controllers: [],
	imports: [
		TypeOrmModule.forRoot(utilsFormatSqlConfig()),
		TypeOrmModule.forFeature([
			Setting,
			TypeStatus,
			TypeOption,
			Type,
			TypeTypeOption,
			TypeTypeTypeOption, 
		]),
	],
	providers: [
		SeedService,
		SettingSeeder,
		TypeStatusSeeder,
		TypeOptionSeeder,
		TypeSeeder,
		TypeTypeOptionSeeder,
	]
})

export class SeedModule {
}
