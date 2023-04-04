import { StatusService } from '@nest-datum/status';

export class AccessStatusService extends StatusService {
	protected readonly entityName: string = 'accessStatus';
}
