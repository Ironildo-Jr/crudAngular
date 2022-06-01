import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  itens = [
    { id: 1, nome: 'alex', cpf: 1111111, email: 'onn@com.br' },
    { id: 2, nome: 'iron', cpf: 1122222, email: 'onasdasdn@com.br' },
  ];
}
