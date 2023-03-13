import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { AccessAccessOptionTcpController } from '@nest-datum/access';
import { AccessAccessOptionService } from './access-access-option.service';

@Controller()
export class AccessAccessOptionController extends AccessAccessOptionTcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: AccessAccessOptionService,
	) {
		super();
	}
}
