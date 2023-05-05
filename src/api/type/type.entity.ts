import { 
	PrimaryGeneratedColumn,
	Entity, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
	OneToMany,
} from 'typeorm';
import {
	IsEmail,
} from 'class-validator';
import { TypeTypeTypeOption } from '../type-type-type-option/type-type-type-option.entity';
import { TypeTypeOption } from '../type-type-option/type-type-option.entity';

@Entity()
export class Type {
	@PrimaryGeneratedColumn('uuid')
	public id: string;

	@Column({ default: '' })
	public parentId: string;

	@Column({ default: '' })
	@Index()
	public userId: string;

	@Column({ default: '' })
	public typeStatusId: string;

	@Column({ default: '' })
	public envKey: string;

	@Column()
	@Index({ unique: true })
	public name: string;

	@Column({ default: '' })
	@Index()
	public description: string;

	@Column('boolean', { default: false })
	public isDeleted: boolean = false;

	@Column('boolean', { default: false })
	public isNotDelete: boolean = false;

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

	@OneToMany(() => TypeTypeOption, (typeTypeOption) => typeTypeOption.type, {
		cascade: true,
	})
	public typeTypeOptions: TypeTypeOption[];

	@OneToMany(() => TypeTypeTypeOption, (typeTypeTypeOption) => typeTypeTypeOption.type, {
		cascade: true,
	})
	public typeTypeTypeOptions: TypeTypeTypeOption[];
}
