import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './pagina/header/header.component';
import { FooterComponent } from './pagina/footer/footer.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CrudProdComponent } from './produtos/CRUD/crud.component';
import { CrudFornComponent } from './fornecedores/crud/crud.component';
import { CrudCotComponent } from './cotacao/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    FornecedoresComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    CotacaoComponent,
    CrudProdComponent,
    CrudFornComponent,
    CrudCotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
