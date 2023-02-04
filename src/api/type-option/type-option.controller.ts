import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionController as NestDatumOptionController } from '@nest-datum/option';
import { TypeOptionService } from './type-option.service';

@Controller()
export class TypeOptionController extends NestDatumOptionController {
	constructor(
		public transportService: TransportService,
		public service: TypeOptionService,
	) {
		super(transportService, service);
	}

	@MessagePattern({ cmd: 'typeOption.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'typeOption.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('typeOption.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('typeOption.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('typeOption.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('typeOption.update')
	async update(payload) {
		return await super.update(payload);
	}
}
