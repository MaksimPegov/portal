import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { User } from '../user.model';
import { KeysPipe, LoginProviders } from '../enums';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
  animations:[moveIn(), fallIn(),moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class UserdataComponent implements OnInit {

  auth: any;
  state: string = '';
  error: any;
  user: User;
  providers = LoginProviders;
  
  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => { 
      if(auth) this.auth = auth;  
    });
    // Если в БД есть такой пользователь, загрузить его данные
    // Если в БД нет, то создать нового 
  }
  btnSave(){

  }
  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login')
  }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['/members']);
  }
}
