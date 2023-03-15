import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.SERVICE_DATA_TYPE}/type-option`)
export class TypeOptionHttpTcpController extends OptionHttpTcpController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'typeOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
