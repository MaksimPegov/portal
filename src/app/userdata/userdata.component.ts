import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import * as firebase from "firebase";


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
  constructor(public af: AngularFire, private router: Router, @Inject(FirebaseApp) private fbApp: firebase.app.App) {
    this.af.auth.subscribe(auth => { 
      if(auth) this.auth = auth;  
    });
  }
  ngOnInit() {
  }
}
