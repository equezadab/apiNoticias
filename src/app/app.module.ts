import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../modules/shared/shared.module';
import { AppComponent } from './app.component';
import { FormularioModule } from '../modules/formulario/formulario.module';
import { VerFormComponent } from '../modules/formulario/ver-form/ver-form.component';
import { ListaNoticiasModule } from '../modules/lista-noticias/lista-noticias.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    ListaNoticiasModule,
    FormularioModule,
    HttpClientModule
  ]
  
})
export class AppModule { }
