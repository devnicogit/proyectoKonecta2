import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTelefonoComponent } from './lista-telefono.component';

describe('ListaTelefonoComponent', () => {
  let component: ListaTelefonoComponent;
  let fixture: ComponentFixture<ListaTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
