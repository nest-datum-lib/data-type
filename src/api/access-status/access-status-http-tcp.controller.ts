import { Controller } from '@nestjs/common';
import { AccessStatusHttpTcpController as AccessStatusHttpTcpControllerBase } from '@nest-datum/access';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.APP_NAME}/access-status`)
export class AccessStatusHttpTcpController extends AccessStatusHttpTcpControllerBase {
	protected serviceName = process.env.APP_NAME;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
