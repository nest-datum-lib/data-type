import { Controller } from '@nestjs/common';
import { SettingHttpTcpController as SettingHttpTcpControllerBase } from '@nest-datum/setting';
import { TransportService } from '@nest-datum/transport';

@Controller(`${process.env.APP_NAME}/setting`)
export class SettingHttpTcpController extends SettingHttpTcpControllerBase {
	protected serviceName = process.env.APP_NAME;

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}
}
