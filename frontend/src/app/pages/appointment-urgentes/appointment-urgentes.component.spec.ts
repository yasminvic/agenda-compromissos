import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentUrgentesComponent } from './appointment-urgentes.component';

describe('AppointmentUrgentesComponent', () => {
  let component: AppointmentUrgentesComponent;
  let fixture: ComponentFixture<AppointmentUrgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentUrgentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentUrgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
