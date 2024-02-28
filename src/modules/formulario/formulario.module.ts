import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { VerFormComponent } from './ver-form/ver-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormField} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ApiNoticiasService } from '../../services/api-noticias.service';


@NgModule({
  declarations: [
    VerFormComponent
  ],
  exports:[
    VerFormComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ApiNoticiasService],
})
export class FormularioModule { }
