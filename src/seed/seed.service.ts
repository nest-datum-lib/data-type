import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { CacheService } from '@nest-datum/cache';
import { SettingSeeder } from './setting.seeder';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeOptionSeeder } from './type-option.seeder';
import { TypeSeeder } from './type.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly cacheService: CacheService,
		private readonly connection: Connection,
		private readonly settings: SettingSeeder,
		private readonly typeStatus: TypeStatusSeeder,
		private readonly typeOption: TypeOptionSeeder,
		private readonly type: TypeSeeder,
	) {
		this.seeders = [
			this.settings,
			this.typeStatus,
			this.typeOption,
			this.type,
		];
	}

	async send() {
		try {
			await this.cacheService.clear([ 'setting', 'many' ]);
			await this.cacheService.clear([ 'setting', 'one' ]);
			await this.cacheService.clear([ 'typeStatus', 'many' ]);
			await this.cacheService.clear([ 'typeStatus', 'one' ]);
			await this.cacheService.clear([ 'typeOption', 'many' ]);
			await this.cacheService.clear([ 'typeOption', 'one' ]);
			await this.cacheService.clear([ 'type', 'many' ]);
			await this.cacheService.clear([ 'type', 'one' ]);

			await Bluebird.each(this.seeders, async (seeder) => {
				this.logger.log(`Seeding ${seeder.constructor.name}`);
				
				await seeder.send();
			});
		}
		catch (err) {
			console.error(`ERROR send: ${err.message}`);
		}
	}
}
