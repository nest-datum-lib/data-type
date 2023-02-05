import { 
	CustomTransportStrategy, 
	ServerTCP, 
	MessageHandler,
} from '@nestjs/microservices';

export class CustomServerTCP extends ServerTCP implements CustomTransportStrategy {
	public override getHandlerByPattern(pattern: string) {
		console.log('MessagePattern', pattern);

		const output = super.getHandlerByPattern(pattern);

		return output;
	}
}