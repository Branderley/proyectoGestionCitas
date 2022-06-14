import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBannersComponent } from './listar-banners.component';

describe('ListarBannersComponent', () => {
  let component: ListarBannersComponent;
  let fixture: ComponentFixture<ListarBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
