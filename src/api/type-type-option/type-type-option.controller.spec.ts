import { Test, TestingModule } from '@nestjs/testing';
import { TypeTypeOptionController } from './type-type-option.controller';

describe('TypeTypeOptionController', () => {
	let controller: TypeTypeOptionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeTypeOptionController],
		}).compile();

		controller = module.get<TypeTypeOptionController>(TypeTypeOptionController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
