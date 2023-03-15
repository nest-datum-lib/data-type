import { Controller } from '@nestjs/common';
import { HttpTcpController } from '@nest-datum/controller';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/type/option`)
export class TypeTypeOptionHttpTcpController extends HttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'typeOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
