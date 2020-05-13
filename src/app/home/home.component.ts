import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../services/validation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exercises: any;
  // results: any;
  brews: any;

  constructor(private http: ValidationService) { }

  ngOnInit() {
    this.http.getExercises().subscribe(data => {
      this.exercises = data;
      console.log(this.exercises);
    }
    );

    this.http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    }
    );


  }

}
