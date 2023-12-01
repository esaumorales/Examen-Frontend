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

  listar(): Observable <any[]>{
    return this.http.get<hotel[]>(this.url + '/listar');
  }
  crear(hotel: hotel): Observable<hotel>{
    return this.http.post<hotel>(this.url +'/agregar' , hotel);
  }

  editar(id: hotel, hotel : hotel) {
    return this.http.put(this.url + id, hotel);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDHotel(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
}
