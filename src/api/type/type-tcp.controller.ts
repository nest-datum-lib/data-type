import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { WarningException } from '@nest-datum-common/exceptions';
import { TransportService } from '@nest-datum/transport';
import { TcpController } from '@nest-datum/controller';
import { 
	strId as utilsCheckStrId,
	strName as utilsCheckStrName, 
} from '@nest-datum-utils/check';
import { TypeService } from './type.service';

@Controller()
export class TypeTcpController extends TcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: TypeService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new WarningException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['typeStatusId'])) {
			throw new WarningException(`Property "typeStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['typeStatusId'] && utilsCheckStrId(options['typeStatusId'])) 
				? { typeStatusId: options['typeStatusId'] } 
				: {},
			...(options['parentId'] && utilsCheckStrId(options['parentId'])) 
				? { parentId: options['parentId'] } 
				: {},
		};
	}

	@MessagePattern({ cmd: 'type.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'type.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('type.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('type.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('type.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('type.update')
	async update(payload) {
		return await super.update(payload);
	}
}
