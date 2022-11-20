import { Test, TestingModule } from '@nestjs/testing';
import { TypeStatusService } from './type-status.service';

describe('TypeStatusService', () => {
	let service: TypeStatusService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TypeStatusService],
		}).compile();

		service = module.get<TypeStatusService>(TypeStatusService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
