import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './../public/templates/header.component.html'
})

export class HeaderComponent{

 /*@Input() isLoggedin;
 @Input() name;
 @Input() userRole;
 @Input() tabName:string='dashboard';
 @Input() displayTextMobileView;


  constructor(public _loginSer:LoginService, private _navService:NavService)
  {
    let self=this;
    this._navService.navItem$.subscribe(obj => {
            if (obj.type == 'tabChange') {
              self.tabName=obj.tabName;
              self.tabChange(obj.tabName)
            }
        });
  }


  logoutUser()
  {
  	this._loginSer.logoutUser(localStorage.getItem('x-access-token')) .then((data) =>{
      if(data.eventType=='logout')
      {
        localStorage.removeItem('x-access-token');
        window.location.href='/';
      }
    }).catch((res) => {})
  }

  tabChange(val)
  {
     this.tabName=val;
     switch (val) {
       case "dashboard":
         this.displayTextMobileView=this.name+" Dashboard"
         break;
       case "coursecatalog":
         this.displayTextMobileView="Knowledge Bank"
         break;
       case "prospectsandpartners":
         this.displayTextMobileView="Prospects & Partners"
         break;
       default:
         this.displayTextMobileView=val;
         break;
     }
  }

  onLogoClick()
  {
    this.tabName='dashboard';
    this.displayTextMobileView=this.name+" Dashboard";
  }*/
}
