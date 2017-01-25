import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({
	selector:'login',
	templateUrl:"./../../../public/templates/login/login.component.html"
})

export class LoginComponent{

	onSubmit(form:NgForm)
	{
		console.log(form)
	}

}