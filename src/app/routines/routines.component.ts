import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ValidationService } from '../services/validation.service';
import { RoutineService } from '../services/routines.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss']
})
export class RoutinesComponent implements OnInit {

  exercises: any;

  userForm = this.fb.group({
    username: ['', [Validators.required], [Validators.minLength(6)]],
    muscle_group: ['', Validators.required],
    description: ['', [Validators.required]],
    reps: ['', [Validators.required] ],
    sets: ['', [Validators.required] ],
    image: [Blob],
    video: [Blob]
  });
  RoutinesService: any;

  constructor(
    private fb: FormBuilder,
    private auth: ValidationService,
    private routinesService: RoutineService,
    private http: ValidationService) { }

  ngOnInit(){

    this.routinesService.displayRoutines().subscribe(data => {
      this.exercises = data;
      console.log(this.exercises);
    }
    );
  }

  onSubmit(){
    // const signupObserver = {
    // //   next: x => console.log('User successfully Created!'),
    // //   error: err => console.log(err)
    // // };
    this.RoutinesService.signup(this.userForm).subscribe(
      data => console.log('Success!', data), error => console.error('Error!', error)
    );
    // this.auth.signup(this.userForm.value.subscribe(signupObserver));
    // console.log(this.userForm.value);
  }

}
