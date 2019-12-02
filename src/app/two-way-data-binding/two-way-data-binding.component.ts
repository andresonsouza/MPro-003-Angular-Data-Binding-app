import { Component, OnInit } from '@angular/core';
import { StringInterpolationComponent } from '../string-interpolation/string-interpolation.component';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1 = '';
  email = '';

  constructor() { }

  ngOnInit() {
  }

}
