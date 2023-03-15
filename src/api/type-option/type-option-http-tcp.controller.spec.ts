import { Test, TestingModule } from '@nestjs/testing';
import { TypeOptionHttpTcpController } from './type-option-http-tcp.controller';

describe('TypeOptionHttpTcpController', () => {
	let controller: TypeOptionHttpTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeOptionHttpTcpController],
		}).compile();

		controller = module.get<TypeOptionHttpTcpController>(TypeOptionHttpTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
