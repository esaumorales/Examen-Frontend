import { BusesService } from './buses.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buses } from '../../models/buses';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buses.component.html',
  styleUrl: './buses.component.css'
})
export class BusesComponent {

buses : buses[] = [];

  constructor(
    private busesService: BusesService
  ) { }

  ngOnInit(): void {
    this.busesService.listar().subscribe(data => {
      this.buses = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.busesService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.busesService.listar().subscribe(data => {
        this.buses = data;
        console.log(data);
      });
    });
  }

}
