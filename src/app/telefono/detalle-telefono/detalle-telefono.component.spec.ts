import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTelefonoComponent } from './detalle-telefono.component';

describe('DetalleTelefonoComponent', () => {
  let component: DetalleTelefonoComponent;
  let fixture: ComponentFixture<DetalleTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
