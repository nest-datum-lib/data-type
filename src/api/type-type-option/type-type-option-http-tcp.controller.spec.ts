import { Test, TestingModule } from '@nestjs/testing';
import { TypeTypeOptionHttpTcpController } from './type-type-option-http-tcp.controller';

describe('TypeTypeOptionHttpTcpController', () => {
	let controller: TypeTypeOptionHttpTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeTypeOptionHttpTcpController],
		}).compile();

		controller = module.get<TypeTypeOptionHttpTcpController>(TypeTypeOptionHttpTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
