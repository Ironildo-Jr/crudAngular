import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CrudFornComponent } from './crud/crud.component';

export interface Fornecedor {
  idForn: number;
  nome: string;
}

const forn: Fornecedor[] = [
  {idForn: 1, nome: 'Cartucho Express'}
];

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})

export class FornecedoresComponent implements OnInit {
  
  @ViewChild(MatTable)
  tabela!: MatTable<any>;

  colunas: string[] = ['idForn', 'nome','acoes'];
  Fornecedores = forn;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  add(): void {
    const dialogRef = this.dialog.open(CrudFornComponent, {
      width: '250px',
      data: {idForn: null, nome:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.Fornecedores.push(result);
        this.tabela.renderRows();
      }
    });
  }

  editar(elem: Fornecedor): void {
    const dialogRef = this.dialog.open(CrudFornComponent, {
      width: '250px',
      data: {idForn: elem.idForn, nome: elem.nome},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.Fornecedores[result.idForn - 1] = result;
        this.tabela.renderRows();
      }
    });
  }

  excluir(idForn: number): void {
    this.Fornecedores = this.Fornecedores.filter(p => p.idForn !== idForn)
  }

}
