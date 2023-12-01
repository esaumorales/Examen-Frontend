import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reserva } from '../../models/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private url : string = 'http://localhost:2323/reserva';

  constructor(private http: HttpClient) { }

  listar(): Observable <reserva[]>{
    return this.http.get<reserva[]>(this.url + '/listar');
  }
  crear(viajes: reserva){
    return this.http.post<string>(this.url +'/agregar' , reserva);
  }

  editar(reserva: reserva) {
    return this.http.put(this.url, reserva);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDviajes(id: reserva) {
    this.http.get(this.url + '/' + id);
  }
}
