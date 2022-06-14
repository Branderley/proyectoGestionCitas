import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarBannersComponent } from './administrar-banners.component';

describe('AdministrarBannersComponent', () => {
  let component: AdministrarBannersComponent;
  let fixture: ComponentFixture<AdministrarBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
