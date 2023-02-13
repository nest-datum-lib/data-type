import { 
	Entity,
	Column, 
	ManyToOne,
} from 'typeorm';
import { OptionOptionOption } from '@nest-datum/option';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from '../type/type.entity';

@Entity()
export class TypeTypeTypeOption extends OptionOptionOption {
	@Column()
	public typeTypeOptionId: string;

	@ManyToOne(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.typeTypeTypeOptions, {
		onDelete: 'CASCADE'
	})
	public typeTypeOption: TypeTypeOption;

	@Column()
	public typeId: string;

	@ManyToOne(() => Type, (type) => type.typeTypeTypeOptions)
	public type: Type;
}
