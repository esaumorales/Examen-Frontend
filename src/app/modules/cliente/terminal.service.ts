import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {
  private url : string = 'http://localhost:2323/cliente';

  constructor(private http: HttpClient) { }

  listar(): Observable <cliente[]>{
    return this.http.get<cliente[]>(this.url + '/listar');
  }
  crear(cliente: cliente){
    return this.http.post<string>(this.url +'/agregar' , cliente);
  }

  editar(cliente: cliente) {
    return this.http.put(this.url, cliente);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id);
  }

  IDterminal(id: cliente) {
    this.http.get(this.url + '/' + id);
  }
}
