import { Test, TestingModule } from '@nestjs/testing';
import { TypeStatusController } from './type-status.controller';

describe('TypeStatusController', () => {
	let controller: TypeStatusController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeStatusController],
		}).compile();

		controller = module.get<TypeStatusController>(TypeStatusController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
