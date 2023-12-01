import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vuelo } from '../../models/vuelo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class vueloService {
  private url : string = 'http://localhost:2323/vuelo';

  constructor(private http: HttpClient) { }

  listar(): Observable <vuelo[]>{
    return this.http.get<vuelo[]>(this.url + '/listar');
  }
  crear(vuelo: vuelo){
    return this.http.post<string>(this.url +'/agregar' , vuelo);
  }

  editar(vuelo: vuelo) {
    return this.http.put(this.url, vuelo);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDvuelo(id: vuelo) {
    this.http.get(this.url + '/' + id);
  }
}
