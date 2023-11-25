import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rutas } from '../../models/rutas';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private url : string = 'http://localhost:2323/rutas';

  constructor(private http: HttpClient) { }

  listar(): Observable <rutas[]>{
    return this.http.get<rutas[]>(this.url + '/listar');
  }
  crear(rutas: rutas){
    return this.http.post<string>(this.url +'/agregar' , rutas);
  }

  editar(rutas: rutas) {
    return this.http.put(this.url, rutas);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDrutas(id: rutas) {
    this.http.get(this.url + '/' + id);
  }
}
