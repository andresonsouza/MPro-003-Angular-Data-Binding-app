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
  conteudoBotao1 = 'Submit';
  conteudoBotao2 = 'Login';

  SpinnerMode = 'determinate';
  btnEnable = true;
  valueinc = 0;

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

  disable() {
    this.btnEnable = false;
    this.SpinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnable = true;
      this.SpinnerMode = 'determinate';
    }, 3000);
    this.valueinc++;
  }

  cbChange(event: any) {
    console.log(event);
  }

}

// Exercício:
// Aumente o tamanho da barra de progresso do Spinner conforme o botão Disable seja clicado
