import getCurrentLine from 'get-current-line';
import { Controller } from '@nestjs/common';
import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { BalancerService } from 'nest-datum/balancer/src';
import * as Validators from 'nest-datum/validators/src';
import { TypeService } from './type.service';

@Controller()
export class TypeController {
	constructor(
		private readonly typeService: TypeService,
		private readonly balancerService: BalancerService,
	) {
	}

	@MessagePattern({ cmd: 'type.many' })
	async many(payload) {
		try {
			const many = await this.typeService.many({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_MANY'] ],
					isRequired: true,
				}),
				relations: Validators.obj('relations', payload['relations']),
				select: Validators.obj('select', payload['select']),
				sort: Validators.obj('sort', payload['sort']),
				filter: Validators.obj('filter', payload['filter']),
				query: Validators.str('query', payload['query'], {
					min: 1,
					max: 255,
				}),
				page: Validators.int('page', payload['page'], {
					min: 1,
					default: 1,
				}),
				limit: Validators.int('limit', payload['limit'], {
					min: 1,
					default: 20,
				}),
			});

			this.balancerService.decrementServiceResponseLoadingIndicator();

			return {
				total: many[1],
				rows: many[0],
			};
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@MessagePattern({ cmd: 'type.one' })
	async one(payload) {
		try {
			const output = await this.typeService.one({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_ONE'] ],
					isRequired: true,
				}),
				relations: Validators.obj('relations', payload['relations']),
				select: Validators.obj('select', payload['select']),
				id: Validators.id('id', payload['id'], {
					isRequired: true,
				}),
			});

			this.balancerService.decrementServiceResponseLoadingIndicator();

			return output;
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@EventPattern('type.drop')
	async drop(payload) {
		try {
			await this.typeService.drop({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_DROP'] ],
					isRequired: true,
				}),
				id: Validators.id('id', payload['id'], {
					isRequired: true,
				}),
			});
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return true;
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@EventPattern('type.dropMany')
	async dropMany(payload) {
		try {
			await this.typeService.dropMany({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_DROP_MANY'] ],
					isRequired: true,
				}),
				ids: Validators.arr('ids', payload['ids'], {
					isRequired: true,
					min: 1,
				}),
			});
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return true;
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@EventPattern('type.dropOption')
	async dropOption(payload) {
		try {
			await this.typeService.dropOption({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_DROP_OPTION'] ],
					isRequired: true,
				}),
				id: Validators.id('id', payload['id'], {
					isRequired: true,
				}),
			});
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return true;
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@EventPattern('type.create')
	async create(payload) {
		try {
			const output = await this.typeService.create({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_CREATE'] ],
					isRequired: true,
				}),
				id: Validators.id('id', payload['id']),
				userId: Validators.id('userId', payload['userId']),
				typeStatusId: Validators.id('typeStatusId', payload['typeStatusId'], {
					isRequired: true,
				}),
				name: Validators.str('name', payload['name'], {
					isRequired: true,
					min: 1,
					max: 255,
				}),
				description: Validators.str('description', payload['description'], {
					min: 1,
					max: 255,
				}),
				isNotDelete: Validators.bool('isNotDelete', payload['isNotDelete']),
			});

			this.balancerService.decrementServiceResponseLoadingIndicator();

			return output;
		}
		catch (err) {
			this.balancerService.log(err);

			return err;
		}
	}

	@EventPattern('type.createOption')
	async createOption(payload) {
		try {
			const output = await this.typeService.createOption({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_CREATE_OPTION'] ],
					isRequired: true,
				}),
				id: Validators.id('id', payload['id']),
				optionId: Validators.id('optionId', payload['optionId'], {
					isRequired: true,
				}),
				data: Validators.arr('data', payload['data']) || {},
			});

			this.balancerService.decrementServiceResponseLoadingIndicator();

			return output;
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@EventPattern('type.createOptions')
	async createOptions(payload) {
		try {
			const output = await this.typeService.createOptions({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_CREATE_OPTIONS'] ],
					isRequired: true,
				}),
				id: Validators.id('id', payload['id']),
				data: Validators.arr('data', payload['data'], {
					isRequired: true,
				}),
			});

			this.balancerService.decrementServiceResponseLoadingIndicator();

			return output;
		}
		catch (err) {
			this.balancerService.log(err);
			this.balancerService.decrementServiceResponseLoadingIndicator();

			return err;
		}
	}

	@EventPattern('type.update')
	async update(payload) {
		try {
			await this.typeService.update({
				user: Validators.token('accessToken', payload['accessToken'], {
					accesses: [ process['ACCESS_DATA_TYPE_TYPE_UPDATE'] ],
					isRequired: true,
				}),
				id: Validators.id('id', payload['id']),
				newId: Validators.id('newId', payload['newId']),
				userId: Validators.id('userId', payload['userId']),
				typeStatusId: Validators.id('typeStatusId', payload['typeStatusId']),
				name: Validators.str('name', payload['name'], {
					min: 1,
					max: 255,
				}),
				description: Validators.str('description', payload['description'], {
					min: 1,
					max: 255,
				}),
				isNotDelete: Validators.bool('isNotDelete', payload['isNotDelete']),
				isDeleted: Validators.bool('isDeleted', payload['isDeleted']),
				createdAt: Validators.date('createdAt', payload['createdAt']),
			});

			return true;
		}
		catch (err) {
			this.balancerService.log(err);

			return err;
		}
	}
}
