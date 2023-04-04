import { StatusHttpTcpController } from '@nest-datum/status';

export class AccessStatusHttpTcpController extends StatusHttpTcpController {
	protected readonly entityName: string = 'accessStatus';
}
