import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    username: ['', [Validators.required], [Validators.minLength(6)]],
    password: ['', [Validators.required], [Validators.minLength(8)]]
  });

  constructor(
    private fb: FormBuilder,
    private customValidator: ValidationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const loginObserver = {
      next: x => console.log('User logged in'),
      error: err => console.log(err)
    };
    this.customValidator.login(this.userForm.value.subscribe(loginObserver));
    console.log(this.userForm.value);
  }

}
