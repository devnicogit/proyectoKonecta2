import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTelefonoComponent } from './editar-telefono.component';

describe('EditarTelefonoComponent', () => {
  let component: EditarTelefonoComponent;
  let fixture: ComponentFixture<EditarTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
