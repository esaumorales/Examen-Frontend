import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { conductores } from '../../models/conductores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {
  private url : string = 'http://localhost:2323/conductores';

  constructor(private http: HttpClient) { }

  listar(): Observable <conductores[]>{
    return this.http.get<conductores[]>(this.url + '/listar');
  }
  crear(conductores: conductores){
    return this.http.post<string>(this.url +'/agregar' , conductores);
  }

  editar(conductores: conductores) {
    return this.http.put(this.url, conductores);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDConductores(id: conductores) {
    this.http.get(this.url + '/' + id);
  }
}
