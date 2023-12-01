import { sucursal } from './sucursal';
import { cliente } from "./cliente";
import { hotel } from "./hotel";
import { vuelo } from "./vuelo";

export class reserva{
  id?: number;
  clase?: string;
  vuelo?: vuelo;
  cliente?: cliente;
  hotel?: hotel;
  sucursal?: sucursal;
}
