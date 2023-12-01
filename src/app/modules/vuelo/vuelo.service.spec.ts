import { TestBed } from '@angular/core/testing';

import { vueloService } from './vuelo.service';

describe('BusesService', () => {
  let service: vueloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(vueloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
