import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @Input() itens: any[] = [{}];
  @Input() podeEditar: boolean = true;
  @Input() podeExcluir: boolean = true;
  colunasplus: string[] = [];
  colunas!: string[];

  ngOnInit() {
    if (this.itens == []) this.colunas = Object.keys(this.itens[0]);
    else this.colunas = [];

    if (this.podeEditar || this.podeExcluir)
      this.colunasplus = [...this.colunas, 'acoes'];
    else this.colunasplus = [...this.colunas];
  }

  add(): void {}

  editar(item: any): void {}

  excluir(id: number): void {}
}
