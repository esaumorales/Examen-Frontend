import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagenFondo]',
  standalone: true
})
export class ImagenFondoDirective {

  constructor(
    private elementRef: ElementRef
  ) {}

  @HostListener('error')
  cargarImagenPorDefecto() {
    this.elementRef.nativeElement.src = '../../../assets/img/viajes.jpg';
  }

}
