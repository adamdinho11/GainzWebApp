import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../services/validation.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: ValidationService) { }


  ngOnInit() {
  }

}
