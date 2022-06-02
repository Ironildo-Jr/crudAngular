import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @Input() itens: any[] = [];
  @Input() podeEditar: boolean = true;
  @Input() podeExcluir: boolean = true;
  colunasplus: string[] = [];
  colunas!: string[];

  ngOnInit() {
    if (!(this.itens == [])) this.colunas = Object.keys(this.itens[0]);
    else this.colunas = [];

    if (this.podeEditar || this.podeExcluir)
      this.colunasplus = [...this.colunas, 'acoes'];
    else this.colunasplus = [...this.colunas];
  }
  constructor(public dialog: MatDialog) {}

  add(): void {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '250px',
      data: [{}, this.colunas],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  editar(item: any): void {
    console.log(item)
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '250px',
      data: [item, this.colunas],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  excluir(id: number): void {}
}
