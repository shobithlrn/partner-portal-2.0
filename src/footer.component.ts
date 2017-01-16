import {Component,DoCheck,Input } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './../public/templates/footer.component.html'
})

export class FooterComponent{
/*@Input() isLoggedin;*/
  constructor()
  {
    	console.log($('#footer'))
  }
}