import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessTcpController } from '@nest-datum/access';
import { AccessService } from './access.service';

@Controller()
export class AccessController extends AccessTcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: AccessService,
	) {
		super();
	}
}
