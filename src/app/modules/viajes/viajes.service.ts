import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { viajes } from '../../models/viajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private url : string = 'http://localhost:2323/viajes';

  constructor(private http: HttpClient) { }

  listar(): Observable <viajes[]>{
    return this.http.get<viajes[]>(this.url + '/listar');
  }
  crear(viajes: viajes){
    return this.http.post<string>(this.url +'/agregar' , viajes);
  }

  editar(viajes: viajes) {
    return this.http.put(this.url, viajes);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDviajes(id: viajes) {
    this.http.get(this.url + '/' + id);
  }
}
