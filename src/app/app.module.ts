import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import {routes} from './app.routes';
import { UserdataComponent } from './userdata/userdata.component';
import { SharedModule } from './shared.module'
export const firebaseConfig = {
    apiKey: "AIzaSyBkjiMuF3cCet8-sixMu546Orsw72zRssc",
    authDomain: "schoolportal-dd443.firebaseapp.com",
    databaseURL: "https://schoolportal-dd443.firebaseio.com",
    storageBucket: "schoolportal-dd443.appspot.com",
    messagingSenderId: "17265980589"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    UserdataComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

