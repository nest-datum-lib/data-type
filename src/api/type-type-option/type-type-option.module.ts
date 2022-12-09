import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ 
			TypeTypeTypeOption,
			TypeOption,
			Type, 
		]),
	],
})
export class TypeTypeOptionModule {
}

