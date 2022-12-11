import { Test, TestingModule } from '@nestjs/testing';
import { TypeTypeOptionService } from './type-type-option.service';

describe('TypeTypeOptionService', () => {
	let service: TypeTypeOptionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TypeTypeOptionService],
		}).compile();

		service = module.get<TypeTypeOptionService>(TypeTypeOptionService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
