import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessOptionTcpController } from '@nest-datum/access';
import { AccessOptionService } from './access-option.service';

@Controller()
export class AccessOptionController extends AccessOptionTcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: AccessOptionService,
	) {
		super();
	}
}
