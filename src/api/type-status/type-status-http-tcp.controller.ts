import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/type-status`)
export class TypeStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected readonly entityName: string = 'typeStatus';

	constructor(
		protected transport: TransportService,
	) {
		super();
	}
}
