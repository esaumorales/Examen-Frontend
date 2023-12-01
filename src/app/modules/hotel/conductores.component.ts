import { ConductoresService } from './conductores.service';
import { hotel } from '../../models/hotel';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conductores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conductores.component.html',
  styleUrl: './conductores.component.css'
})
export class ConductoresComponent {
  hotel : hotel[] = [];

  constructor(
    private conductoresService: ConductoresService
  ) { }

  ngOnInit(): void {
    this.conductoresService.listar().subscribe(data => {
      this.hotel = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.conductoresService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.conductoresService.listar().subscribe(data => {
        this.hotel = data;
        console.log(data);
      });
    });
  }

}
