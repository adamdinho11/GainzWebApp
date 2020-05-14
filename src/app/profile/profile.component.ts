import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../services/validation.service';
import { RoutineService} from '../services/routines.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  exercises: any;


  constructor(private http: ValidationService, private routines: RoutineService) { }


  ngOnInit() {

    this.routines.displayRoutines().subscribe(data => {
      this.exercises = data;
      console.log(this.exercises);
    }
    );
  }

}
