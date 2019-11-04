import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'My button';
  buttonAction = 'Save';
  i = 0;
  conteudoBotao1 = '';
  conteudoBotao2 = '';

  constructor() { }

  ngOnInit() {
  }

save() {
  console.log('Click');
}

inc() {
  this.i++;
  this.buttonName = 'It was clicked ' + this.i + ' times';
}

}
