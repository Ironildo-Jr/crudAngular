import { Fornecedor } from './../fornecedores.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudFornComponent implements OnInit {
  elem!: Fornecedor;
  teste!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Fornecedor,
    public dialogRef: MatDialogRef<CrudFornComponent>
    ) { }

  ngOnInit(): void {
    if(this.data.idForn != null){
      this.teste = false;
    }else{
      this.teste = true;
    }
  }

  cancelar(): void{
    this.dialogRef.close();
  }
}