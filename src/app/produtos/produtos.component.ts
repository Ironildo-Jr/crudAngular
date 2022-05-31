import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CrudProdComponent } from './CRUD/crud.component';

export interface Produto{
  idProd: number;
  descr: string;
  preco: number;
}

const prod: Produto[] = [
  {idProd:1,descr:'Fita Led',preco:12}
];

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  @ViewChild(MatTable)
  tabela!: MatTable<any>;

  colunas: string[] = ['idProd','descr','preco','acoes'];
  Produtos = prod;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  add(): void {
    const dialogRef = this.dialog.open(CrudProdComponent, {
      width: '250px',
      data: {idProd: null, descr:'',preco: null},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.Produtos.push(result);
        this.tabela.renderRows();
      }
    });
  }

  editar(elem: Produto): void {
    const dialogRef = this.dialog.open(CrudProdComponent, {
      width: '250px',
      data: {idProd: elem.idProd, descr: elem.descr, preco: elem.preco},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.Produtos[result.idProd - 1] = result;
        this.tabela.renderRows();
      }
    });
  }

  excluir(idProd: number): void {
    this.Produtos = this.Produtos.filter(p => p.idProd !== idProd)
  }
}