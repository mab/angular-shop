import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';
import {MockBackend} from '@angular/http/testing';
import {HttpModule, XHRBackend} from '@angular/http';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProductService, {provide: XHRBackend, useClass: MockBackend}]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
