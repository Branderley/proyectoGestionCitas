import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarServiciosComponent } from './administrar-servicios.component';

describe('AdministrarServiciosComponent', () => {
  let component: AdministrarServiciosComponent;
  let fixture: ComponentFixture<AdministrarServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
