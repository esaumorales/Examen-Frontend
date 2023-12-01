import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sucursal } from '../../models/sucursal';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private url : string = 'http://localhost:2323/sucursal';

  constructor(private http: HttpClient) { }

  listar(): Observable <sucursal[]>{
    return this.http.get<sucursal[]>(this.url + '/listar');
  }
  crear(sucursal: sucursal){
    return this.http.post<string>(this.url +'/agregar' , sucursal);
  }

  editar(sucursal: sucursal) {
    return this.http.put(this.url, sucursal);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDrutas(id: sucursal) {
    this.http.get(this.url + '/' + id);
  }
}
