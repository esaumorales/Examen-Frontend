import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { buses } from '../../models/buses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  private url : string = 'http://localhost:2323/buses';

  constructor(private http: HttpClient) { }

  listar(): Observable <buses[]>{
    return this.http.get<buses[]>(this.url + '/listar');
  }
  crear(buses: buses){
    return this.http.post<string>(this.url +'/agregar' , buses);
  }

  editar(buses: buses) {
    return this.http.put(this.url, buses);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDbuses(id: buses) {
    this.http.get(this.url + '/' + id);
  }
}
