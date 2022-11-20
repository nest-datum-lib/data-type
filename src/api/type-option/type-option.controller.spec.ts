import { Test, TestingModule } from '@nestjs/testing';
import { TypeOptionController } from './type-option.controller';

describe('TypeOptionController', () => {
	let controller: TypeOptionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeOptionController],
		}).compile();

		controller = module.get<TypeOptionController>(TypeOptionController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
