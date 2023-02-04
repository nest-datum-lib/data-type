import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { StatusController as NestDatumStatusController } from '@nest-datum/status';
import { TypeStatusService } from './type-status.service';

@Controller()
export class TypeStatusController extends NestDatumStatusController {
	constructor(
		public transportService: TransportService,
		public service: TypeStatusService,
	) {
		super(transportService, service);
	}

	@MessagePattern({ cmd: 'typeStatus.many' })
	async many(payload) {
		return await super.many(payload);
	}

	@MessagePattern({ cmd: 'typeStatus.one' })
	async one(payload) {
		return await super.one(payload);
	}

	@EventPattern('typeStatus.drop')
	async drop(payload) {
		return await super.drop(payload);
	}

	@EventPattern('typeStatus.dropMany')
	async dropMany(payload) {
		return await super.dropMany(payload);
	}

	@EventPattern('typeStatus.create')
	async create(payload) {
		return await super.create(payload);
	}

	@EventPattern('typeStatus.update')
	async update(payload) {
		return await super.update(payload);
	}
}
