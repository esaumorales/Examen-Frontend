import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { HouseComponent } from './modules/home/pages/house/house.component';
import { ViajesComponent } from './modules/reserva/viajes.component';
import { RutasComponent } from './modules/sucursal/rutas.component';
import { ConductoresComponent } from './modules/hotel/conductores.component';
import { TerminalComponent } from './modules/cliente/terminal.component';
import { VueloComponent } from './modules/vuelo/vuelo.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     redirectTo: 'auth',
    // },
    {
        path: 'auth',
        component: AuthComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: HouseComponent,
            },
            {
              path: 'reserva',
              component: ViajesComponent,
            },
            {
              path: 'sucursal',
              component: RutasComponent,
            },
            {
              path: 'hotel',
              component: ConductoresComponent,
            },
            {
              path: 'vuelo',
              component: VueloComponent,
            },
            {
              path: 'cliente',
              component: TerminalComponent,
            }
        ]
    }
];
