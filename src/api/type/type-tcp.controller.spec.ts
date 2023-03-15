import { Test, TestingModule } from '@nestjs/testing';
import { TypeTcpController } from './type-tcp.controller';

describe('TypeTcpController', () => {
	let controller: TypeTcpController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TypeTcpController],
		}).compile();

		controller = module.get<TypeTcpController>(TypeTcpController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
