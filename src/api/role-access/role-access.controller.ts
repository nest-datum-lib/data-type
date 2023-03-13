import { Controller } from '@nestjs/common';
import { TransportService } from '@nest-datum/transport';
import { RoleAccessTcpController } from '@nest-datum/access';
import { RoleAccessService } from './role-access.service';

@Controller()
export class RoleAccessController extends RoleAccessTcpController {
	constructor(
		protected transportService: TransportService,
		protected entityService: RoleAccessService,
	) {
		super();
	}
}
