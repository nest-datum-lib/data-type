import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessHttpTcpController as AccessHttpTcpControllerBase } from '@nest-datum/access';

@Controller(`${process.env.SERVICE_DATA_TYPE}/access`)
export class AccessHttpTcpController extends AccessHttpTcpControllerBase {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	
	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
