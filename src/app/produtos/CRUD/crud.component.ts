import { Component, OnInit, Inject } from '@angular/core';
import { Produto } from 'src/app/produtos/produtos.component'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudProdComponent implements OnInit {
  elem!: Produto;
  teste!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Produto,
    public dialogRef: MatDialogRef<CrudProdComponent>
    ) { }

  ngOnInit(): void {
    if(this.data.idProd != null){
      this.teste = false;
    }else{
      this.teste = true;
    }
  }

  cancelar(): void{
    this.dialogRef.close();
  }
}