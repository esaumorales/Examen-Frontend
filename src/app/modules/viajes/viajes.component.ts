import { ViajesService } from './viajes.service';
import { viajes } from './../../models/viajes';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css'
})
export class ViajesComponent {
  viajes: viajes[] = [];

  constructor(
    private ViajesService: ViajesService
  ) { }

  ngOnInit(): void {
    this.ViajesService.listar().subscribe(data => {
      this.viajes = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.ViajesService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.ViajesService.listar().subscribe(data => {
        this.viajes = data;
        console.log(data);
      });
    });
  }

}
