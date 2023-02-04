import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionOptionController as NestDatumOptionOptionController } from '@nest-datum/option';
import { TypeTypeOptionService } from './type-type-option.service';

@Controller()
export class TypeTypeOptionController extends NestDatumOptionOptionController {
	constructor(
		public transportService: TransportService,
		public service: TypeTypeOptionService,
	) {
		super(transportService, service, 'typeId', 'typeOptionId');
	}

	@MessagePattern({ cmd: 'typeOptionRelation.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'typeOptionRelation.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('typeOptionRelation.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('typeOptionRelation.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('typeOptionRelation.create')
	async create(payload) {
		return await super.create(payload);
	}
}
