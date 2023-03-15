import { Controller } from '@nestjs/common';
import { StatusHttpTcpController } from '@nest-datum/status';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.APP_NAME}/type-status`)
export class TypeStatusHttpTcpController extends StatusHttpTcpController {
	protected serviceName = process.env.APP_NAME;
	protected entityName = 'typeStatus';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
