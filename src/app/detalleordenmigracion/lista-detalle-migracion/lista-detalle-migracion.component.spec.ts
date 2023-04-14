import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetalleMigracionComponent } from './lista-detalle-migracion.component';

describe('ListaDetalleMigracionComponent', () => {
  let component: ListaDetalleMigracionComponent;
  let fixture: ComponentFixture<ListaDetalleMigracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDetalleMigracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDetalleMigracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
