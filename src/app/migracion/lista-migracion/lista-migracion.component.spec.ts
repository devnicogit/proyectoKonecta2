import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMigracionComponent } from './lista-migracion.component';

describe('ListaMigracionComponent', () => {
  let component: ListaMigracionComponent;
  let fixture: ComponentFixture<ListaMigracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMigracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMigracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
