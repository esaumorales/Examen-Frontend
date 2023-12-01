import { cliente } from '../../models/cliente';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalService } from './terminal.service';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {
  cliente : cliente[] = [];

  constructor(
    private terminalService: TerminalService
  ) { }

  ngOnInit(): void {
    this.terminalService.listar().subscribe(data => {
      this.cliente = data
      console.log(data)
    });
    ;
  }

  Eliminar(id: number) {
    this.terminalService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.terminalService.listar().subscribe(data => {
        this.cliente = data;
        console.log(data);
      });
    });
  }

}
