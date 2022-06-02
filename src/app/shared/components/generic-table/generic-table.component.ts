import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';
import { ApiService } from 'src/app/core/services/api.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @ViewChild(MatTable) tabela!: MatTable<any>;
  @Input() caminho!: string;
  @Input() podeEditar: boolean = true;
  @Input() podeExcluir: boolean = true;
  colunasplus: string[] = [];
  colunas: string[] = [];
  itens: any[] = [];

  ngOnInit() {
    this.get();
  }
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  get() {
    this.apiService.get(this.caminho).subscribe((res: any[]) => {
      if (res) {
        this.colunas = Object.keys(res[0]);
        this.itens = res;
      }
      if (this.podeEditar || this.podeExcluir)
        this.colunasplus = [...this.colunas, 'acoes'];
      else this.colunasplus = [...this.colunas];
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '250px',
      data: [this.colunas],
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.apiService
        .add(this.caminho, result)
        .subscribe(() => this.get());
    });
  }

  editar(item: any): void {
    console.log(item);
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      width: '250px',
      data: [this.colunas, item],
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.apiService.update(this.caminho, result).subscribe();
    });
  }

  excluir(id: number): void {
    this.apiService.delete(this.caminho,id)
  }
}
