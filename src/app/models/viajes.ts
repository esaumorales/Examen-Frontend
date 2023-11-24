import { buses } from './buses';
import { conductores } from './conductores';
import { rutas } from './rutas';
export class viajes{
  id?: number;
  vi_NumePasajero?: string;
  vi_FechViaje?: string;
  rutas?: rutas;
  conductores?: conductores;
  buses?: buses;
  
}
