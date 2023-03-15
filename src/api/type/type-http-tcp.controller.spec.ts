import { Test, TestingModule } from '@nestjs/testing';
import { TypeHttpTcpController } from './type-http-tcp.controller';

describe('TypeHttpTcpController', () => {
	let controller: TypeHttpTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeHttpTcpController],
		}).compile();

		controller = module.get<TypeHttpTcpController>(TypeHttpTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
