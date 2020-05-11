import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  authUrl = 'http:'; // api url needed. The link from Postman/woman that has the token infomation
  usersURL = 'http:'; // api url needed. The link to the database holding userinfo.
  confirmEmailUrl = 'http:';

  constructor(private http: HttpClient) {}

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  } // checks to see if passwords match.

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

  signup(model: any){
    const headers = new HttpHeaders({
      confirmEmailUrl : this.confirmEmailUrl
    });
    // tslint:disable-next-line:object-literal-shorthand
    const options = {headers: headers};
    return this.http.post(this.usersURL + 'create', model, options );
  }

  getExercises(){
    return this.http.get('https://wger.de/api/v2/exercise/');
  }


}
