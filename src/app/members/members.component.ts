import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
//import * as firebase from "firebase";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations:[moveIn(), fallIn(),moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
    auth: any;
    state: string = '';
    error: any;
  constructor( public af: AngularFire, private router: Router) { 
      this.af.auth.subscribe(auth => {
      if(auth){
        this.auth = auth;
      }
    });
  }
  userData() {
    this.router.navigateByUrl('/userdata')

  }
  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login')
  }
  ngOnInit() {
  }

}
