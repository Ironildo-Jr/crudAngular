import { Component, OnInit, Inject } from '@angular/core';
import { Cotacao } from 'src/app/cotacao/cotacao.component'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudCotComponent implements OnInit {

  elem!: Cotacao;
  teste!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Cotacao,
    public dialogRef: MatDialogRef<CrudCotComponent>
    ) { }

  ngOnInit(): void {
    if(this.data.idCot != null){
      this.teste = false;
    }else{
      this.teste = true;
    }
  }

  cancelar(): void{
    this.dialogRef.close();
  }

}