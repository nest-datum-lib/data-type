import { 
	Controller,
	Get, 
	Delete,
	Post,
	Patch,
	Body,
	Param,
	Query,
	ForbiddenException,
} from '@nestjs/common';
import { HttpTcpOptionController } from '@nest-datum/controller';
import { AccessToken } from '@nest-datum-common/decorators';
import { TransportService } from '@nest-datum/transport';
import {
	strName as utilsCheckStrName,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

@Controller(`${process.env.SERVICE_DATA_TYPE}/type`)
export class TypeHttpTcpController extends HttpTcpOptionController {
	protected serviceName = process.env.SERVICE_DATA_TYPE;
	protected entityName = 'type';
	protected entityOptionContentName = 'typeOptionRelation';

	constructor(
		protected transportService: TransportService,
	) {
		super();
	}

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new ForbiddenException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['typeStatusId'])) {
			throw new ForbiddenException(`Property "typeStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}


	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['typeStatusId'] && utilsCheckStrId(options['typeStatusId'])) 
				? { typeStatusId: options['typeStatusId'] } 
				: {},
			...(options['parentId'] && utilsCheckStrId(options['parentId'])) 
				? { parentId: options['parentId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('parentId') parentId: string,
		@Body('typeStatusId') typeStatusId: string,
		@Body('envKey') envKey: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.create`,
		}, await this.validateCreate({
			accessToken,
			id,
			userId,
			parentId,
			typeStatusId,
			envKey,
			name,
			description,
			isNotDelete,
		})));
	}

	@Patch(':id')
	async update(
		@AccessToken() accessToken: string,
		@Param('id') id: string,
		@Body('id') newId: string,
		@Body('userId') userId: string,
		@Body('parentId') parentId: string,
		@Body('typeStatusId') typeStatusId: string,
		@Body('envKey') envKey: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateUpdate({
			accessToken,
			id,
			newId,
			userId,
			parentId,
			typeStatusId,
			envKey,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
