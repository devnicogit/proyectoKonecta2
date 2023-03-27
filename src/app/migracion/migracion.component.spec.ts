import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigracionComponent } from './migracion.component';

describe('MigracionComponent', () => {
  let component: MigracionComponent;
  let fixture: ComponentFixture<MigracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
