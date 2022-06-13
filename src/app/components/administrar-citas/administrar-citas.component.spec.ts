import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCitasComponent } from './administrar-citas.component';

describe('AdministrarCitasComponent', () => {
  let component: AdministrarCitasComponent;
  let fixture: ComponentFixture<AdministrarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
