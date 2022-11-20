import { Test, TestingModule } from '@nestjs/testing';
import { TypeOptionService } from './type-option.service';

describe('TypeOptionService', () => {
	let service: TypeOptionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TypeOptionService],
		}).compile();

		service = module.get<TypeOptionService>(TypeOptionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
