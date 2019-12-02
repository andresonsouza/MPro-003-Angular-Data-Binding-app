import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1 = 'User';
  email = 'example@mail.com';

  client = {
    firstName: 'Andreson',
    lastName: 'Souza',
    age: 33,
    address: {
      street: 'Rua Trinta e Cinco',
      neighborhood: 'Loteamento Primavera',
      number: '145'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
