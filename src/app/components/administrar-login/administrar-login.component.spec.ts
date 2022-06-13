import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarLoginComponent } from './administrar-login.component';

describe('AdministrarLoginComponent', () => {
  let component: AdministrarLoginComponent;
  let fixture: ComponentFixture<AdministrarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
