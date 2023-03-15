import { Test, TestingModule } from '@nestjs/testing';
import { TypeStatusTcpController } from './type-status-tcp.controller';

describe('TypeStatusTcpController', () => {
	let controller: TypeStatusTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeStatusTcpController],
		}).compile();

		controller = module.get<TypeStatusTcpController>(TypeStatusTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
