import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoClienteComponent } from './nuevo-cliente.component';

describe('NuevoClienteComponent', () => {
  let component: NuevoClienteComponent;
  let fixture: ComponentFixture<NuevoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
