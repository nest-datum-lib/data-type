import { Test, TestingModule } from '@nestjs/testing';
import { TypeTypeOptionTcpController } from './type-type-option-tcp.controller';

describe('TypeTypeOptionTcpController', () => {
	let controller: TypeTypeOptionTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeTypeOptionTcpController],
		}).compile();

		controller = module.get<TypeTypeOptionTcpController>(TypeTypeOptionTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
