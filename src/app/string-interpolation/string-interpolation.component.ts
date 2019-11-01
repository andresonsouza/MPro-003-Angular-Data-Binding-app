import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: 'Andreson',
    lastName: 'Souza',
    age: 33,
    address: 'Route 134'
  };

  constructor() { }

  ngOnInit() {
  }

}
