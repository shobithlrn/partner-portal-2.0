import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './components/login'
import {RouteProtection} from './utils'

const APPLICATION_ROUTES: Routes = [
	{
		path: '',
		component: LoginComponent,
		canActivate:[RouteProtection]
	}
];

export const routing = RouterModule.forRoot(APPLICATION_ROUTES);
