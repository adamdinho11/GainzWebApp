import { Injectable, NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User} from './models/users.js';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    RouterModule,
    SignupComponent
  ];

  authUrl = 'http:'; // api url needed. The link from Postman/woman that has the token infomation
  dbURL = ''; // api url needed to POST the form data. The link to the database holding userinfo.


  constructor(private http: HttpClient) { }

  signup(user: User){
    const headers = new HttpHeaders({
      // confirmEmailUrl : this.confirmEmailUrl
    });
    // tslint:disable-next-line:object-literal-shorthand
    const options = {headers: headers};
    return this.http.post<any>(this.dbURL + 'create', user, options );
  }

}
