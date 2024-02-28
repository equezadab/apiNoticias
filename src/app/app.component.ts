import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../modules/shared/shared.module';
import { FormularioModule } from '../modules/formulario/formulario.module';
import { VerFormComponent } from '../modules/formulario/ver-form/ver-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule, FormularioModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appNoticias';

}
