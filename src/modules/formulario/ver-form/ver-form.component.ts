
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ApiNoticiasService } from '../../../services/api-noticias.service';


@Component({
  selector: 'app-ver-form',
  templateUrl: './ver-form.component.html',
  styleUrl: './ver-form.component.css'
})
export class VerFormComponent implements OnInit {
  @Output() parametrosSelect = new EventEmitter<any>()
  @Input() listNoticias:any

  categoriaSelect = ''
  paisSelect = ''

  categorias:any[] =[
    {value:'general', nombre:'General'},
    {value:'business', nombre:'Negocios'},
    {value:'entertainment', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'Science', nombre:'Ciencia'},
    {value:'sports', nombre:'Deportes'},
    {value:'technology', nombre:'Tecnología'}
  ];
  paises:any[]=[
    {value:'ar', nombre:'Argentina'},
    {value:'br', nombre:'Brasil'},
    {value:'fr', nombre:'Francia'},
    {value:'mx', nombre:'Mexico'},
  ]

  listaNoticias: any[]=[]

  constructor( private noticiasService:ApiNoticiasService) {}

  ngOnInit(): void {
    
  }

  buscarNoticias(){
    const parametros = {
      categoria : this.categoriaSelect,
      pais : this.paisSelect
    }
    this.parametrosSelect.emit(parametros)
    console.log(parametros)
      this.noticiasService.getNoticias(parametros).subscribe(data =>{
        console.log(data);
        this.listaNoticias = data.articles;
        console.log(data.articles)
      })
  }

  obtenerSoloFecha(fechaCompleta: string): string {
    if (!fechaCompleta) {
      return ""; 
    }
    
    return fechaCompleta.split("T")[0];
  }
  
}
