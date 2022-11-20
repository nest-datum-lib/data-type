import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'config/typeorm';
import { redisConfig } from 'config/redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingModule } from './api/setting/setting.module';
import { TypeStatusModule } from './api/type-status/type-status.module';
import { TypeOptionModule } from './api/type-option/type-option.module';
import { TypeTypeOptionModule } from './api/type-type-option/type-type-option.module';
import { TypeTypeTypeOptionModule } from './api/type-type-type-option/type-type-type-option.module';
import { TypeModule } from './api/type/type.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(typeormConfig),
		RedisModule.forRoot(redisConfig),
		SettingModule,
		TypeStatusModule,
		TypeOptionModule,
		TypeTypeOptionModule,
		TypeTypeTypeOptionModule,
		TypeModule,
	],
	controllers: [ AppController ],
	providers: [ AppService ],
})
export class AppModule {
}
