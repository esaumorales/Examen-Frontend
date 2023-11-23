import { AccesoService } from './../../../../core/services/acceso.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acceso } from '../../../../core/interface/acceso.model';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent implements OnInit {
  listaAccesos: Acceso[] = [];
  constructor(
    private accesoService: AccesoService
  ){}

  ngOnInit(): void {
    this.accesoService.getAcceso().subscribe(accesos => {
      this.listaAccesos = accesos.filter(item => item.descripcion != null);
    });
  }
}
