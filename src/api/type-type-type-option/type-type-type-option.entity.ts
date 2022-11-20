import { 
	Entity, 
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';
import { Type } from '../type/type.entity';

@Entity()
export class TypeTypeTypeOption {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public parentId: string;

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

	@Column('text')
	public content: string;

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
}
