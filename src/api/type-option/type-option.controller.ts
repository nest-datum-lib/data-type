import { 
	MessagePattern,
	EventPattern, 
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { OptionTcpController } from '@nest-datum/option';
import { TypeOptionService } from './type-option.service';

@Controller()
export class TypeOptionController extends OptionTcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: TypeOptionService,
	) {
		super();
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

	@EventPattern('type.content')
	async content(payload) {
		return await super.content(payload);
	}
}
