import { sucursal } from '../../models/sucursal';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasService } from './rutas.service';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  sucursal: sucursal[] = [];

  constructor(
    private rutasService: RutasService
  ) { }

  ngOnInit(): void {
    this.rutasService.listar().subscribe(data => {
      this.sucursal = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.rutasService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.rutasService.listar().subscribe(data => {
        this.sucursal = data;
        console.log(data);
      });
    });
  }

}
