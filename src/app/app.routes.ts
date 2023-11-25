import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { HouseComponent } from './modules/home/pages/house/house.component';
import { ViajesComponent } from './modules/viajes/viajes.component';
import { RutasComponent } from './modules/rutas/rutas.component';
import { ConductoresComponent } from './modules/conductores/conductores.component';
import { BusesComponent } from './modules/buses/buses.component';

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
              path: 'viajes',
              component: ViajesComponent,
            },
            {
              path: 'rutas',
              component: RutasComponent,
            },
            {
              path: 'conductores',
              component: ConductoresComponent,
            },
            {
              path: 'buses',
              component: BusesComponent,
            }
        ]
    }
];
