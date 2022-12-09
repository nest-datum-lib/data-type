import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from '../type/type.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ 
			TypeTypeOption,
			Type, 
		]),
	],
})
export class TypeTypeTypeOptionModule {
}

