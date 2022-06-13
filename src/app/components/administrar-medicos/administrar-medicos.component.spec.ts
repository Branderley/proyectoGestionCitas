import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarMedicosComponent } from './administrar-medicos.component';

describe('AdministrarMedicosComponent', () => {
  let component: AdministrarMedicosComponent;
  let fixture: ComponentFixture<AdministrarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
