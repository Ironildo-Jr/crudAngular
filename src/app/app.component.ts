import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  itens = [
    { id: 1, preco: 12321, desc: 'oi' },
    { id: 2, preco: 123123, desc: 'sdfs' },
  ];
}
