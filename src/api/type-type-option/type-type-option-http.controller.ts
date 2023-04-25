import { Controller } from '@nestjs/common';
import { BindHttpController } from '@nest-datum/bind';
import { TypeTypeOptionService } from './type-type-option.service';

@Controller(`${process.env.SERVICE_DATA_TYPE}/type/option`)
export class TypeTypeOptionHttpController extends BindHttpController {
	constructor(
		protected service: TypeTypeOptionService,
	) {
		super();
	}
}
