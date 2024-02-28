import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNoticiasService {

  constructor(private http:HttpClient) { }

  getNoticias(parametros:any):Observable<any>{
    const url = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=cbd1c28076b841508d726066cf2af63c';
    return this.http.get(url)
  }
}
