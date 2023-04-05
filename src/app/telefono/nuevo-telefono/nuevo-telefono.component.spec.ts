import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTelefonoComponent } from './nuevo-telefono.component';

describe('NuevoTelefonoComponent', () => {
  let component: NuevoTelefonoComponent;
  let fixture: ComponentFixture<NuevoTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
