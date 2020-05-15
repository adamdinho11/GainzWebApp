import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../services/validation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // size = 1000;
  // i = 0;
  exercises;
  brews;

  constructor(private http: ValidationService) { }

  ngOnInit() {
    let results = [{
      description: '',
      license_author: '',
      muscles: ''
    }];
    this.http.getExercises().subscribe(data => {
      this.exercises = data;
      results = this.exercises;
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
