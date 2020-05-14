import { TestBed } from '@angular/core/testing';
import { Injectable, NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Routine} from './models/routines.js';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})

export class RoutineService {

  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    RouterModule,
    SignupComponent];

  authUrl = 'http:'; // api url needed. The link from Postman/woman that has the token infomation
  dbURL = ''; // api url needed to POST the form data. The link to the database holding userinfo.


  constructor(private http: HttpClient) { }

  addRoutine(routine: Routine){
    const headers = new HttpHeaders({
      // confirmEmailUrl : this.confirmEmailUrl
    });
    // tslint:disable-next-line:object-literal-shorthand
    const options = {headers: headers};
    return this.http.post<any>(this.dbURL + 'create', routine, options );
  }

  displayRoutines(){
    return this.http.get('/username'); // Needs to add the API link for the database specified by the username
  }

}

