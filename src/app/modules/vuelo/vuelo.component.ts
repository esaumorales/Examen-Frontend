import { vuelo } from '../../models/vuelo';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vueloService } from './vuelo.service';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vuelo.component.html',
  styleUrl: './vuelo.component.css'
})
export class VueloComponent {

vuelo : vuelo[] = [];

  constructor(
    private vueloService: vueloService
  ) { }

  ngOnInit(): void {
    this.vueloService.listar().subscribe(data => {
      this.vuelo = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.vueloService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.vueloService.listar().subscribe(data => {
        this.vuelo = data;
        console.log(data);
      });
    });
  }

}
