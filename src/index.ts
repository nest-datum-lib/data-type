import { 
	SettingHttpModule,
	SettingHttpTcpModule,
	SettingTcpModule, 
} from './api/setting';
import { 
	AccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule, 
} from './api/access-access-option';
import { 
	AccessOptionHttpModule,
	AccessOptionHttpTcpModule, 
	AccessOptionTcpModule, 
} from './api/access-option';
import { 
	AccessStatusHttpModule,
	AccessStatusHttpTcpModule,
	AccessStatusTcpModule, 
} from './api/access-status';
import { 
	AccessHttpModule,
	AccessHttpTcpModule,
	AccessTcpModule, 
} from './api/access';
import { 
	RoleAccessHttpModule,
	RoleAccessHttpTcpModule, 
	RoleAccessTcpModule, 
} from './api/role-access';
import { 
	TypeTypeOptionHttpModule,
	TypeTypeOptionHttpTcpModule,
	TypeTypeOptionTcpModule, 
} from './api/type-type-option';
import { 
	TypeOptionHttpModule,
	TypeOptionHttpTcpModule,
	TypeOptionTcpModule, 
} from './api/type-option';
import { 
	TypeStatusHttpModule,
	TypeStatusHttpTcpModule,
	TypeStatusTcpModule, 
} from './api/type-status';
import { 
	TypeHttpModule,
	TypeHttpTcpModule,
	TypeTcpModule, 
} from './api/type';

const Http = {
	AccessAccessOptionHttpModule,
	AccessOptionHttpModule,
	AccessStatusHttpModule,
	AccessHttpModule,
	RoleAccessHttpModule,
	TypeTypeOptionHttpModule,
	TypeOptionHttpModule,
	TypeStatusHttpModule,
	TypeHttpModule,
	SettingHttpModule,
};
const HttpTcp = {
	AccessAccessOptionHttpTcpModule,
	AccessOptionHttpTcpModule,
	AccessStatusHttpTcpModule,
	AccessHttpTcpModule,
	RoleAccessHttpTcpModule,
	TypeTypeOptionHttpTcpModule,
	TypeOptionHttpTcpModule,
	TypeStatusHttpTcpModule,
	TypeHttpTcpModule,
	SettingHttpTcpModule,
};
const Tcp = {
	AccessAccessOptionTcpModule,
	AccessOptionTcpModule,
	AccessStatusTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	TypeTypeOptionTcpModule,
	TypeOptionTcpModule,
	TypeStatusTcpModule,
	TypeTcpModule,
	SettingTcpModule,
};

export {
	Http,
	Tcp,
	AccessAccessOptionTcpModule,
	AccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule,
	AccessOptionTcpModule,
	AccessOptionHttpModule,
	AccessOptionHttpTcpModule,
	AccessStatusTcpModule,
	AccessStatusHttpModule,
	AccessStatusHttpTcpModule,
	AccessHttpModule,
	AccessHttpTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	RoleAccessHttpModule,
	RoleAccessHttpTcpModule,
	TypeTypeOptionHttpModule,
	TypeTypeOptionHttpTcpModule,
	TypeTypeOptionTcpModule,
	TypeOptionHttpModule,
	TypeOptionHttpTcpModule,
	TypeOptionTcpModule,
	TypeStatusHttpModule,
	TypeStatusHttpTcpModule,
	TypeStatusTcpModule,
	TypeHttpModule,
	TypeHttpTcpModule,
	TypeTcpModule,
	SettingHttpModule,
	SettingHttpTcpModule,
	SettingTcpModule,
};
