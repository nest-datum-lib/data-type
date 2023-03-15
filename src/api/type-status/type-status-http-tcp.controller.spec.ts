import { Test, TestingModule } from '@nestjs/testing';
import { TypeStatusHttpTcpController } from './type-status-http-tcp.controller';

describe('TypeStatusHttpTcpController', () => {
	let controller: TypeStatusHttpTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeStatusHttpTcpController],
		}).compile();

		controller = module.get<TypeStatusHttpTcpController>(TypeStatusHttpTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
