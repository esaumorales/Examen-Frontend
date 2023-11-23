import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccesoService } from './../../../../core/services/acceso.service';
import { Acceso } from './../../../../core/interface/acceso.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  listAccesos$: Observable<Acceso[]> = new Observable<[]>();
  constructor(
    private accesoService: AccesoService
  ){}

  ngOnInit(): void {
    this.listAccesos$ = this.accesoService.getAcceso();
  }
}
