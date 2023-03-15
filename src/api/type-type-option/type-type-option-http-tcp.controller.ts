import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.APP_NAME}/type/option`)
export class TypeTypeOptionHttpTcpController extends HttpTcpController {
	protected serviceName = process.env.APP_NAME;
	protected entityName = 'typeOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
