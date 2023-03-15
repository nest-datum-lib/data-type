import { Controller } from '@nestjs/common';
import { OptionHttpTcpController } from '@nest-datum/option';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.APP_NAME}/type-option`)
export class TypeOptionHttpTcpController extends OptionHttpTcpController {
	protected serviceName = process.env.APP_NAME;
	protected entityName = 'typeOption';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
