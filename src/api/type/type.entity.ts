import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	OneToMany,
} from 'typeorm';
import { TypeStatus } from '../type-status/type-status.entity';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';

@Entity()
export class Type {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public userId: string;

	@Column({ default: '' })
	public typeStatusId: string;

	@ManyToOne(() => TypeStatus, (typeStatus) => typeStatus.types)
	public typeStatus: TypeStatus;

	@Column()
	public name: string;

	@Column({ default: '' })
	public description: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean;

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

	@OneToMany(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.type)
	public typeTypeOptions: TypeTypeOption[];

	@OneToMany(() => TypeTypeTypeOption, (typeTypeTypeOption) => typeTypeTypeOption.type)
	public typeTypeTypeOptions: TypeTypeTypeOption[];
}
