import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeOption } from '../type-option/type-option.entity';
import { Type } from '../type/type.entity';

@Entity()
export class TypeTypeOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column()
	public typeOptionId: string;

	@ManyToOne(() => TypeOption, (typeOption) => typeOption.typeTypeOptions)
	public typeOption: TypeOption;

	@Column()
	public typeId: string;

	@ManyToOne(() => Type, (type) => type.typeTypeOptions)
	public type: Type;

	@CreateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP', 
	})
	public createdAt: Date;

	@UpdateDateColumn({ 
		type: 'timestamp', 
		precision: null,
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP', 
	})
	public updatedAt: Date;

	@OneToMany(() => TypeTypeTypeOption, (typeTypeTypeOption) => typeTypeTypeOption.typeTypeOption)
	public typeTypeTypeOptions: TypeTypeTypeOption[];
}
