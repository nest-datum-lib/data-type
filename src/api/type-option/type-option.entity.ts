import { 
	Entity,
	OneToMany, 
} from 'typeorm';
import { Option as NestDatumOption } from '@nest-datum/option';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';

@Entity()
export class TypeOption extends NestDatumOption {
	@OneToMany(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.typeOption)
	public typeTypeOptions: TypeTypeOption[];
}
