import { Test, TestingModule } from '@nestjs/testing';
import { TypeOptionTcpController } from './type-option-tcp.controller';

describe('TypeOptionTcpController', () => {
	let controller: TypeOptionTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeOptionTcpController],
		}).compile();

		controller = module.get<TypeOptionTcpController>(TypeOptionTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
