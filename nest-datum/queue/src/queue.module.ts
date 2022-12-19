import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';

@Module({
	controllers: [],
	imports: [],
	providers: [ 
		QueueService,
	],
})
export class QueueModule {
}
