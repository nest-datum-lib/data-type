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
import {
	strName as utilsCheckStrName,
	strId as utilsCheckStrId,
} from '@nest-datum-utils/check';

export class AccessHttpTcpController extends HttpTcpOptionController {
	protected transportService;
	protected serviceName;
	protected entityName = 'access';
	protected entityOptionContentName = 'accessOptionRelation';

	async validateCreate(options) {
		if (!utilsCheckStrName(options['name'])) {
			throw new ForbiddenException(`Property "name" is not valid.`);
		}
		if (!utilsCheckStrId(options['accessStatusId'])) {
			throw new ForbiddenException(`Property "accessStatusId" is not valid.`);
		}
		return await this.validateUpdate(options);
	}

	async validateUpdate(options) {
		return {
			...await super.validateUpdate(options),
			...(options['accessStatusId'] && utilsCheckStrId(options['accessStatusId'])) 
				? { accessStatusId: options['accessStatusId'] } 
				: {},
		};
	}

	@Post()
	async create(
		@AccessToken() accessToken: string,
		@Body('id') id: string,
		@Body('userId') userId: string,
		@Body('accessStatusId') accessStatusId: string,
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
			accessStatusId,
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
		@Body('accessStatusId') accessStatusId: string,
		@Body('name') name: string,
		@Body('description') description: string,
		@Body('isNotDelete') isNotDelete: boolean,
		@Body('isDeleted') isDeleted: boolean,
	) {
		return await this.serviceHandlerWrapper(async () => await this.transportService.send({
			name: this.serviceName, 
			cmd: `${this.entityName}.update`,
		}, await this.validateCreate({
			accessToken,
			id,
			newId,
			userId,
			accessStatusId,
			name,
			description,
			isNotDelete,
			isDeleted,
		})));
	}
}
