import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CrudCotComponent } from './crud/crud.component';

export interface Cotacao{
  idCot: number;
  data: string;
  hora: string;
  forn: number;
  qtd: number;
  prod: number;
  total: number;
}

const cot: Cotacao[] = [
  {idCot:1,data:'05/10/2022',hora:'14:24', forn:1, qtd:2, prod:2, total:30}
];

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

  @ViewChild(MatTable)
  tabela!: MatTable<any>;

  colunas: string[] = ['idCot','data','hora','forn','qtd','prod','total','acoes'];
  Cotacoes = cot;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  add(): void {
    const dialogRef = this.dialog.open(CrudCotComponent, {
      width: '250px',
      data: {idCot: null, data:'',hora: '',forn: null, qtd: null, prod: null, valor: null},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.Cotacoes.push(result);
        this.tabela.renderRows();
      }
    });
  }

  editar(elem: Cotacao): void {
    const dialogRef = this.dialog.open(CrudCotComponent, {
      width: '250px',
      data: {idCot: elem.idCot, data: elem.data, hora: elem.hora, forn: elem.forn, qtd: elem.qtd, prod: elem.prod, total: elem.total},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        this.Cotacoes[result.idCot - 1] = result;
        this.tabela.renderRows();
      }
    });
  }

  excluir(idCot: number): void {
    this.Cotacoes = this.Cotacoes.filter(p => p.idCot !== idCot)
  }
  
}
