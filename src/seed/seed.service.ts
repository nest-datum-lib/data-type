import { Promise as Bluebird } from 'bluebird';
import { Connection } from 'typeorm';
import {
	Injectable,
	Logger,
} from '@nestjs/common';
import { SettingSeeder } from './setting.seeder';
import { TypeStatusSeeder } from './type-status.seeder';
import { TypeOptionSeeder } from './type-option.seeder';
import { TypeTypeOptionSeeder } from './type-type-option.seeder';
import { TypeSeeder } from './type.seeder';

@Injectable()
export class SeedService {
	private readonly seeders = [];
	private readonly logger = new Logger(SeedService.name);

	constructor(
		private readonly connection: Connection,
		private readonly settings: SettingSeeder,
		private readonly typeStatus: TypeStatusSeeder,
		private readonly typeOption: TypeOptionSeeder,
		private readonly typeTypeOption: TypeTypeOptionSeeder,
		private readonly type: TypeSeeder,
	) {
		this.seeders = [
			this.settings,
			// this.typeStatus,
			// this.typeOption,
			// this.type,
			// this.typeTypeOption,
		];
	}

	async send() {
		try {
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
