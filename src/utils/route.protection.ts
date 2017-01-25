import {CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable, OnInit} from '@angular/core'
import {Observable} from 'rxjs/Rx'

@Injectable()
export class RouteProtection implements CanActivate {

	canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|boolean
	{
		return true
	}

}

