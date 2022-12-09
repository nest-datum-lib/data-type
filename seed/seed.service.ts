import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { CacheService } from 'nest-datum/cache/src';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeOptionSeeder } from './type-option.seeder';
import { TypeTypeOptionSeeder } from './type-type-option.seeder';
import { TypeTypeTypeOptionSeeder } from './type-type-type-option.seeder';
import { TypeSeeder } from './type.seeder';
import { SettingSeeder } from './setting.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly cacheService: CacheService,
		private readonly connection: Connection,
		private readonly typeStatus: TypeStatusSeeder,
		private readonly typeOption: TypeOptionSeeder,
		private readonly typeTypeOption: TypeTypeOptionSeeder,
		private readonly typeTypeTypeOption: TypeTypeTypeOptionSeeder,
		private readonly type: TypeSeeder,
		private readonly setting: SettingSeeder,
	) {
		this.seeders = [
			this.typeStatus,
			this.typeOption,
			this.type,
			this.typeTypeOption,
			this.typeTypeTypeOption,
			this.setting,
		];
	}

	async send() {
		try {
			await this.cacheService.clear([ 'type', 'status', 'many' ]);
			await this.cacheService.clear([ 'type', 'status.one' ]);
			await this.cacheService.clear([ 'type', 'option.many' ]);
			await this.cacheService.clear([ 'type', 'option.one' ]);
			await this.cacheService.clear([ 'type', 'many' ]);
			await this.cacheService.clear([ 'type', 'one' ]);
			await this.cacheService.clear([ 'setting', 'many' ]);
			await this.cacheService.clear([ 'setting', 'one' ]);

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
