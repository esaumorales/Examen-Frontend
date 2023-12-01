import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotel } from '../../models/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {
  private url : string = 'http://localhost:2323/hotel';

  constructor(private http: HttpClient) { }

  listar(): Observable <hotel[]>{
    return this.http.get<hotel[]>(this.url + '/listar');
  }
  crear(hotel: hotel){
    return this.http.post<string>(this.url +'/agregar' , hotel);
  }

  editar(hotel: hotel) {
    return this.http.put(this.url, hotel);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDConductores(id: hotel) {
    this.http.get(this.url + '/' + id);
  }
}
