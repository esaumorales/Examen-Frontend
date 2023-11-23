import { Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { HouseComponent } from './modules/home/pages/house/house.component';

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
            }
        ]
    }
];
