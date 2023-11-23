import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acceso } from '../interface/acceso.model';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  url: string = '../../../assets/json/acceso.json';
  constructor(
    private http: HttpClient
  ) {}

  public getAcceso() {
    return this.http.get<Acceso[]>(this.url);
  }
}
