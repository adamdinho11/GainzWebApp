import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm = this.fb.group({
    username: ['', [Validators.required], [Validators.minLength(6)]],
    email: ['', Validators.required],
    password: ['', [Validators.required], [Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required], [Validators.minLength(8)]],
    personalInfo: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required]
    })
  }, {
      validator: this.customValidator.passwordMatchValidator('password', 'confirmPassword')
  });

  constructor(
    private fb: FormBuilder,
    private customValidator: ValidationService
  ) {}

  ngOnInit(): void{
  }

  onSubmit(){
    const signupObserver = {
      next: x => console.log('User successfully Created!'),
      error: err => console.log(err)
    };
    this.customValidator.signup(this.userForm.value.subscribe(signupObserver));
    console.log(this.userForm.value);
  }

   // validator: this.customValidator.passwordMatchValidator("");
}
