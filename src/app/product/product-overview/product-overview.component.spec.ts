import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewComponent } from './product-overview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { Product } from '../product.types';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;

  class ProductServiceMock {
    getProducts(): Product[] {
      return [];
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOverviewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{
        provide: ProductService, useClass: ProductServiceMock,
      }],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
