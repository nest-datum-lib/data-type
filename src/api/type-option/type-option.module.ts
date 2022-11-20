import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
	RegistryService,
	LogsService,
	CacheService, 
} from '@nest-datum/services';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { TypeOption } from './type-option.entity';
import { TypeOptionService } from './type-option.service';
import { TypeOptionController } from './type-option.controller';

@Module({
	controllers: [ TypeOptionController ],
	imports: [
		TypeOrmModule.forFeature([ TypeOption ]),
		TypeOrmModule.forFeature([ TypeTypeOption ]),
	],
	providers: [
		RegistryService, 
		LogsService,
		CacheService,
		TypeOptionService, 
	],
})
export class TypeOptionModule {
}


