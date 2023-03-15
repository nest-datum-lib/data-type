import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessHttpTcpController as AccessHttpTcpControllerBase } from '@nest-datum/access';

@Controller(`${process.env.APP_NAME}/access`)
export class AccessHttpTcpController extends AccessHttpTcpControllerBase {
	protected serviceName = process.env.APP_NAME;
	
	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
