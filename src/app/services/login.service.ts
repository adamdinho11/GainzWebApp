import { Injectable, NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User} from './models/users.js';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
@NgModule({
    imports: [
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AuthModule,
      RouterModule,
      LoginComponent
    ],
  })
export class LoginService {

  authUrl = 'http:'; // api url needed. The link from Postman/woman that has the token infomation
  profileURL = 'http://localhost:4200/profile'; // api url needed. The link from Postman/woman that has the token infomation
  dbURL = ''; // api url needed to POST the form data. The link to the database holding userinfo.


  constructor(private http: HttpClient) { }

  login(model: any){ // login Method needs user database information to work.
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.result.succeeded){
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

}
